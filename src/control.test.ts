import { generateKeyPairSync, verify } from 'node:crypto';

import { Finbaze, isControlEvent, signStepUp, type PlatformControlEvent } from './index';
import type { PlatformWebhookEvent } from './webhooks';

type Call = { url: string; method: string; headers: Record<string, string>; body: unknown };

function server(handler: (call: Call) => unknown, rest: (call: Call) => unknown = () => ({})) {
  const calls: Call[] = [];
  const fetchMock = jest.fn(async (url: string, init: RequestInit) => {
    const raw = init.body;
    const isJson = typeof raw === 'string';
    const call: Call = {
      url: String(url),
      method: String(init.method ?? 'GET'),
      headers: Object.fromEntries(Object.entries((init.headers ?? {}) as Record<string, string>)),
      body: isJson ? JSON.parse(raw || '{}') : raw,
    };
    calls.push(call);
    if (call.url.endsWith('/v2/oauth2/token')) {
      return new Response(JSON.stringify({ access_token: 'srv', expires_in: 3600 }), { status: 200 });
    }
    if (call.url.includes('/v2/platform/') || call.url.includes('/v2/profiles/')) {
      return new Response(JSON.stringify(rest(call)), { status: 201 });
    }
    return new Response(JSON.stringify({ data: handler(call) ?? {} }), { status: 200 });
  });
  return { calls, fetch: fetchMock as unknown as typeof fetch };
}

const client = (s: ReturnType<typeof server>) => new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: s.fetch, maxNetworkRetries: 0 });
const api = (calls: Call[]) => calls.filter((c) => !c.url.endsWith('/v2/oauth2/token'));
const vars = (call: Call) => (call.body as { variables: Record<string, any> }).variables;

describe('payments', () => {
  it('pages payment requests with the cursor and creates a request for a filing', async () => {
    const s = server((call) => ({
      paymentRequests: vars(call).after ? { items: [{ id: 'p3' }], nextCursor: null } : { items: [{ id: 'p1' }, { id: 'p2' }], nextCursor: 'c2' },
      createTaxPaymentRequest: { id: 'p9' },
    }));
    const page = await client(s).platform.paymentRequests.list({ company: { externalId: 'acme' }, status: ['created'], limit: 2 });
    expect(page.hasMore).toBe(true);
    expect((await page.autoPagingToArray()).map((p) => p.id)).toEqual(['p1', 'p2', 'p3']);
    expect(vars(api(s.calls)[0]!)).toMatchObject({ company: { externalId: 'acme' }, status: ['created'], first: 2 });
    await client(s).platform.paymentRequests.createForTaxFiling({ id: 'c1' }, 'f1');
    expect(vars(api(s.calls).at(-1)!)).toEqual({ company: { id: 'c1' }, taxFilingId: 'f1' });
  });

  it('reports status and provides a payment link with an ISO expiry', async () => {
    const s = server(() => ({ reportPaymentRequestStatus: { id: 'p1' }, providePaymentLink: { id: 'l1' } }));
    await client(s).platform.paymentRequests.reportStatus({ paymentRequestId: 'p1', status: 'scheduled', partnerReference: 'bank-1' });
    await client(s).platform.paymentLinks.provide({ requestId: 'l1', url: 'https://pay.example/1', expiresAt: new Date('2026-11-05T10:00:00Z') });
    expect(vars(api(s.calls)[0]!).input).toEqual({ paymentRequestId: 'p1', status: 'scheduled', partnerReference: 'bank-1' });
    expect(vars(api(s.calls)[1]!)).toEqual({ requestId: 'l1', url: 'https://pay.example/1', expiresAt: '2026-11-05T10:00:00.000Z' });
  });

  it('registers providers enabled by default and reports a tax reservation', async () => {
    const s = server(() => ({ upsertPlatformProvider: { id: 'v1' }, reportTaxReservation: { id: 'a1' } }));
    await client(s).platform.providers.upsert({ action: 'step_up', mode: 'webhook', config: { jwksUrl: 'https://p.example/jwks.json' } });
    await client(s).platform.taxReservation.report({ adviceId: 'a1', reservedMinor: 12000 });
    expect(vars(api(s.calls)[0]!).input).toMatchObject({ action: 'step_up', enabled: true });
    expect(vars(api(s.calls)[1]!)).toEqual({ adviceId: 'a1', reservedMinor: 12000 });
  });
});

describe('signStepUp', () => {
  const challenge = { id: '0b1f3c4a-5d6e-4f70-8a9b-1c2d3e4f5a6b', nonce: 'n-123', action: 'tax_filing.submit' };
  const params = { challenge, issuer: 'plt_1', subject: 'user-9', amr: ['face'], now: new Date('2026-11-03T09:00:00Z') };

  const parts = (header: string) => {
    const [id, ...jws] = header.split('.');
    const [h, p, sig] = jws as [string, string, string];
    return {
      id,
      signingInput: `${h}.${p}`,
      header: JSON.parse(Buffer.from(h, 'base64url').toString()),
      claims: JSON.parse(Buffer.from(p, 'base64url').toString()),
      sig: Buffer.from(sig, 'base64url'),
    };
  };

  it('signs ES256 with the claims FinBaze checks and a verifiable signature', async () => {
    const { privateKey, publicKey } = generateKeyPairSync('ec', { namedCurve: 'P-256' });
    const header = await signStepUp({ ...params, privateKey: privateKey.export({ type: 'pkcs8', format: 'pem' }).toString(), keyId: 'k1' });
    const t = parts(header);
    expect(t.id).toBe(challenge.id);
    expect(t.header).toEqual({ alg: 'ES256', typ: 'JWT', kid: 'k1' });
    expect(t.claims).toMatchObject({
      iss: 'plt_1',
      sub: 'user-9',
      aud: 'finbaze',
      challenge_id: challenge.id,
      nonce: 'n-123',
      action: 'tax_filing.submit',
      amr: ['face'],
      iat: 1793696400,
      exp: 1793696400 + 120,
    });
    expect(t.sig).toHaveLength(64);
    expect(verify('sha256', Buffer.from(t.signingInput), { key: publicKey, dsaEncoding: 'ieee-p1363' }, t.sig)).toBe(true);
  });

  it('signs EdDSA and RS256, also from a JWK', async () => {
    const ed = generateKeyPairSync('ed25519');
    const edHeader = await signStepUp({ ...params, algorithm: 'EdDSA', privateKey: ed.privateKey.export({ format: 'jwk' }) as Record<string, unknown> });
    const e = parts(edHeader);
    expect(verify(null, Buffer.from(e.signingInput), ed.publicKey, e.sig)).toBe(true);

    const rsa = generateKeyPairSync('rsa', { modulusLength: 2048 });
    const rsaHeader = await signStepUp({ ...params, algorithm: 'RS256', privateKey: rsa.privateKey.export({ type: 'pkcs8', format: 'pem' }).toString() });
    const r = parts(rsaHeader);
    expect(verify('sha256', Buffer.from(r.signingInput), rsa.publicKey, r.sig)).toBe(true);
  });

  it('refuses an assertion without an authentication method', async () => {
    const { privateKey } = generateKeyPairSync('ec', { namedCurve: 'P-256' });
    await expect(signStepUp({ ...params, amr: [], privateKey: privateKey.export({ type: 'pkcs8', format: 'pem' }).toString() })).rejects.toThrow('amr');
  });
});

describe('policies and extensions', () => {
  it('drafts and activates a policy, promotes in the sandbox and previews an import', async () => {
    const s = server(() => ({
      createPolicyDraft: { id: 'v1' },
      activatePolicyVersion: { id: 'v1', status: 'active' },
      promotePlatformPolicies: 'bundle_1',
      previewPolicyImport: { importId: 'i1', changes: [], warnings: [] },
      setCompanyPolicyOverride: {},
    }));
    const c = client(s).platform;
    await c.policies.createDraft('quotas', { aiRunsPerMonth: 100 });
    await c.policies.activate('v1');
    expect(await c.policies.bundle.export(['quotas'])).toBe('bundle_1');
    await c.policies.bundle.preview('bundle_1');
    await c.policies.overrides.set('c1', 'quotas', { aiRunsPerMonth: 5 });
    const calls = api(s.calls);
    expect(vars(calls[0]!)).toEqual({ kind: 'quotas', payload: { aiRunsPerMonth: 100 } });
    expect(vars(calls[2]!)).toEqual({ kinds: ['quotas'] });
    expect(vars(calls[4]!)).toEqual({ companyId: 'c1', kind: 'quotas', payload: { aiRunsPerMonth: 5 } });
  });

  it('defines a custom action, resolves links and sets custom field values', async () => {
    const s = server(() => ({
      upsertCustomAction: { id: 'a1' },
      invokeCustomAction: { key: 'open_tms', links: [{ label: 'TMS', url: 'https://tms.example/s/1', resourceType: 'sales_invoice' }] },
      setCustomFieldValues: { shipment: 'S-1' },
      setFieldControl: { view: 'invoice', field: 'reference' },
    }));
    const ext = client(s).platform.extensions;
    await ext.customActions.upsert({ key: 'open_tms', label: { en: 'Open in TMS' }, placements: ['sales_invoice'], contextType: 'sales_invoice' });
    const invoked = await ext.customActions.invoke('open_tms', { contextType: 'sales_invoice', contextId: 'inv1' });
    expect(invoked.links[0]!.url).toBe('https://tms.example/s/1');
    await ext.customFields.setValues('sales_invoice', 'inv1', { shipment: 'S-1' });
    await ext.fieldControl.set({ view: 'invoice', field: 'reference', mode: 'locked' });
    const calls = api(s.calls);
    expect(vars(calls[1]!)).toEqual({ key: 'open_tms', contextType: 'sales_invoice', contextId: 'inv1' });
    expect(vars(calls[2]!)).toEqual({ entityType: 'sales_invoice', entityId: 'inv1', values: { shipment: 'S-1' } });
  });
});

describe('documents', () => {
  it('attaches a rendered document by upload id after uploading the PDF', async () => {
    const s = server(
      () => ({ attachRenderedDocument: { id: 'j1', status: 'accepted' } }),
      () => ({ uploadId: 'u1', sizeBytes: 4, sha256: 'x', expiresAt: '2026-11-03T10:00:00Z' }),
    );
    const docs = client(s).platform.documentRendering;
    const { uploadId } = await docs.upload(new Uint8Array([37, 80, 68, 70]));
    const job = await docs.attach('j1', { uploadId });
    expect(job.status).toBe('accepted');
    const upload = api(s.calls)[0]!;
    expect(upload.url).toContain('/v2/platform/documents/uploads');
    expect(upload.headers['Content-Type']).toBe('application/pdf');
    expect(vars(api(s.calls)[1]!)).toEqual({ jobId: 'j1', uploadId: 'u1' });
  });

  it('uploads a brand font for the platform or one company', async () => {
    const s = server(() => ({}), () => ({ id: 'f1', family: 'Brand Sans', weight: 400, style: 'normal' }));
    const fonts = client(s).platform.documentFonts;
    await fonts.upload({ woff2: new Uint8Array([1]), family: 'Brand Sans', weight: 400, attest: true });
    await fonts.upload({ woff2: new Uint8Array([1]), family: 'Brand Sans', weight: 700, style: 'italic', attest: true, company: 'c1' });
    const [a, b] = api(s.calls);
    expect(a!.url).toContain('/v2/platform/fonts?family=Brand%20Sans&weight=400&style=normal&attest=true');
    expect(b!.url).toContain('/v2/profiles/c1/fonts?family=Brand%20Sans&weight=700&style=italic&attest=true');
  });

  it('activates a layout preset with makeDefault off unless asked', async () => {
    const s = server(() => ({ activatePlatformDocumentLayout: { id: 'l1' } }));
    await client(s).platform.documentLayouts.activate('l1');
    await client(s).platform.documentLayouts.activate('l2', { makeDefault: true });
    expect(vars(api(s.calls)[0]!)).toEqual({ id: 'l1', makeDefault: false });
    expect(vars(api(s.calls)[1]!)).toEqual({ id: 'l2', makeDefault: true });
  });
});

describe('messaging extras', () => {
  it('sets message copy and verifies a sender domain', async () => {
    const s = server(() => ({ setPlatformMessageCopy: { id: 'c1' }, verifyPlatformSenderDomain: { id: 'd1', status: 'verified' } }));
    const messages = client(s).platform.messages;
    await messages.copy.set({ type: 'tax.filing_ready', locale: 'nl', variant: 'push', template: 'Je btw-aangifte staat klaar' });
    expect((await messages.senderDomains.verify('d1')).status).toBe('verified');
    expect(vars(api(s.calls)[0]!).input).toMatchObject({ type: 'tax.filing_ready', variant: 'push' });
  });
});

describe('control events', () => {
  it('narrows step_up.required and payment_link.requested', () => {
    const base = { id: 'evt_1', object: 'event', apiVersion: '2026-11-01', created: '', occurredAt: '', sequence: '1', livemode: false, platform: 'plt_1', company: null };
    const event = {
      ...base,
      type: 'step_up.required',
      data: { object: { __typename: 'Event', id: 's1', stepUp: { id: 's1', action: 'tax_filing.submit', summary: {}, nonce: 'n', expires_at: '2026-11-03T09:05:00Z' } } },
    } as unknown as PlatformWebhookEvent;
    expect(isControlEvent(event)).toBe(true);
    if (isControlEvent(event) && event.type === 'step_up.required') {
      const typed: PlatformControlEvent = event;
      expect(typed.data.object.stepUp.nonce).toBe('n');
    }
    expect(isControlEvent({ ...base, type: 'company.created', data: {} } as unknown as PlatformWebhookEvent)).toBe(false);
  });
});

describe('tax authorisations (filing consent)', () => {
  const grant = { id: 'a1', companyId: 'c1', taxes: ['nl_vat'], channel: 'embed', stepUp: false, revokedAt: null };

  it('lists the history of a company, with revoked grants only on request', async () => {
    const s = server(() => ({ taxAuthorisations: [grant] }));
    const platform = client(s).platform;
    expect(await platform.taxAuthorisations.list('c1')).toEqual([grant]);
    await platform.taxAuthorisations.list('c1', { includeRevoked: true });
    expect(api(s.calls).map((c) => vars(c))).toEqual([
      { companyId: 'c1', includeRevoked: false },
      { companyId: 'c1', includeRevoked: true },
    ]);
  });

  it('reads where each tax stands', async () => {
    const s = server(() => ({ taxAuthorisationStatus: [{ tax: 'nl_vat', state: 'missing', firmName: null, authorisation: null }] }));
    const rows = await client(s).platform.taxAuthorisations.status('c1');
    expect(rows[0]).toMatchObject({ tax: 'nl_vat', state: 'missing' });
    expect(vars(api(s.calls)[0]!)).toEqual({ companyId: 'c1' });
  });

  it('revokes some taxes or all, with a reason', async () => {
    const s = server(() => ({ revokeTaxAuthorisation: [{ ...grant, revokedAt: '2026-11-04T10:00:00Z' }] }));
    const platform = client(s).platform;
    const revoked = await platform.taxAuthorisations.revoke('c1', { taxes: ['nl_vat'], reason: 'offboarding' });
    expect(revoked[0]!.revokedAt).toBe('2026-11-04T10:00:00Z');
    await platform.taxAuthorisations.revoke('c1');
    expect(api(s.calls).map((c) => vars(c).input)).toEqual([
      { companyId: 'c1', taxes: ['nl_vat'], reason: 'offboarding' },
      { companyId: 'c1' },
    ]);
  });

  it('has no grant: only the company’s own user can consent', () => {
    const taxAuthorisations = client(server(() => ({}))).platform.taxAuthorisations as unknown as Record<string, unknown>;
    expect(taxAuthorisations.grant).toBeUndefined();
  });

  it('narrows the consent events and the requirements event', () => {
    const base = { id: 'evt_1', object: 'event', apiVersion: '2026-11-01', created: '', occurredAt: '', sequence: '1', livemode: false, platform: 'plt_1', company: 'c1' };
    const granted = {
      ...base,
      type: 'tax_authorisation.granted',
      data: { object: { __typename: 'Event', id: 'a1', companyId: 'c1', taxes: ['nl_vat'], channel: 'embed', stepUp: true, at: '2026-11-04T10:00:00Z' } },
    } as unknown as PlatformWebhookEvent;
    expect(isControlEvent(granted)).toBe(true);
    if (isControlEvent(granted) && granted.type === 'tax_authorisation.granted') {
      expect(granted.data.object.taxes).toEqual(['nl_vat']);
      expect(granted.data.object.stepUp).toBe(true);
    }
    expect(isControlEvent({ ...base, type: 'tax_authorisation.revoked', data: {} } as unknown as PlatformWebhookEvent)).toBe(true);
    expect(isControlEvent({ ...base, type: 'company.requirements.updated', data: {} } as unknown as PlatformWebhookEvent)).toBe(true);
  });
});
