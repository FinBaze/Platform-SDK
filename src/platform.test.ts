import { Finbaze, FinbazeAuthenticationError, FinbazeGraphQLError, FinbazeRateLimitError, FinbazeSignatureVerificationError } from './index';
import { FinbazeHttpClient, isMutation } from './http';
import { decodeAccessToken, generatePkce } from './oauth';

type Call = { url: string; init: RequestInit; body: { query?: string; variables?: Record<string, unknown> } & Record<string, unknown> };

function server(handler: (call: Call) => { status?: number; headers?: Record<string, string>; json?: unknown } | undefined) {
  const calls: Call[] = [];
  const fetchMock = jest.fn(async (url: string, init: RequestInit) => {
    const call: Call = { url: String(url), init, body: JSON.parse(String(init.body ?? '{}')) };
    calls.push(call);
    const out = handler(call) ?? { json: { data: {} } };
    return new Response(JSON.stringify(out.json ?? {}), { status: out.status ?? 200, headers: out.headers });
  });
  return { calls, fetch: fetchMock as unknown as typeof fetch };
}

const token = (name = 'srv') => ({ json: { access_token: name, expires_in: 3600 } });
const gqlCalls = (calls: Call[]) => calls.filter((c) => c.url.endsWith('/graphql'));

describe('authentication', () => {
  it('exchanges a secret key and uses the sandbox host for test keys', async () => {
    const s = server((c) => (c.url.endsWith('/v2/oauth2/token') ? token() : { json: { data: { platformCompany: null } } }));
    const finbaze = new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: s.fetch });
    await finbaze.platform.companies.retrieveByExternalId('x');
    expect(s.calls[0]!.url).toBe('https://sandbox.api.platform.finbaze.com/v2/oauth2/token');
    expect(s.calls[0]!.body).toEqual({ grant_type: 'client_credentials', client_secret: 'fb_sk_test_abc' });
    expect(gqlCalls(s.calls)[0]!.init.headers).toMatchObject({ Authorization: 'Bearer srv' });
  });

  it('uses the live host for live keys, and caches the token', async () => {
    const s = server((c) => (c.url.endsWith('/v2/oauth2/token') ? token() : { json: { data: { platformCompany: null } } }));
    const finbaze = new Finbaze({ secretKey: 'fb_sk_live_abc', fetch: s.fetch });
    await finbaze.platform.companies.retrieve('1');
    await finbaze.platform.companies.retrieve('2');
    expect(s.calls.filter((c) => c.url.includes('oauth2')).length).toBe(1);
    expect(s.calls[0]!.url.startsWith('https://api.platform.finbaze.com')).toBe(true);
  });

  it('asks a restricted key for its scopes', async () => {
    const s = server((c) => (c.url.endsWith('/v2/oauth2/token') ? token() : { json: { data: { platformCompany: null } } }));
    await new Finbaze({ secretKey: 'fb_rk_live_abc', scopes: ['platform_companies:read'], fetch: s.fetch }).platform.companies.retrieve('1');
    expect(s.calls[0]!.body.scope).toBe('platform_companies:read');
  });

  it('rejects a publishable key and missing credentials', () => {
    expect(() => new Finbaze({ secretKey: 'fb_pk_live_abc' })).toThrow(FinbazeAuthenticationError);
    expect(() => new Finbaze({})).toThrow(FinbazeAuthenticationError);
  });

  it('forgets a token the server refused and exchanges again', async () => {
    let issued = 0;
    const s = server((c) => {
      if (c.url.endsWith('/v2/oauth2/token')) return token(`t${++issued}`);
      return gqlCalls([c]).length && (c.init.headers as Record<string, string>).Authorization === 'Bearer t1'
        ? { status: 401, json: { errors: [{ message: 'Unauthorized', extensions: { code: 'UNAUTHENTICATED' } }] } }
        : { json: { data: { platformCompany: null } } };
    });
    const finbaze = new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: s.fetch, maxNetworkRetries: 0 });
    await expect(finbaze.platform.companies.retrieve('1')).rejects.toBeInstanceOf(FinbazeAuthenticationError);
    await expect(finbaze.platform.companies.retrieve('1')).resolves.toBeNull();
    expect(issued).toBe(2);
  });
});

describe('requests', () => {
  it('sends version, user agent and an idempotency key on mutations', async () => {
    const s = server((c) => (c.url.endsWith('/v2/oauth2/token') ? token() : { json: { data: { upsertPlatformUser: { id: 'u1' } } } }));
    const finbaze = new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: s.fetch, appInfo: { name: 'acme', version: '2.0' } });
    await finbaze.platform.users.upsert({ externalUserId: 'x' }, { idempotencyKey: 'key-1' });
    const headers = gqlCalls(s.calls)[0]!.init.headers as Record<string, string>;
    expect(headers['Idempotency-Key']).toBe('key-1');
    expect(headers['FinBaze-Version']).toBe('2026-11-01');
    expect(headers['User-Agent']).toMatch(/^finbaze-platform-sdk\/\d.* acme\/2\.0$/);
    await finbaze.platform.users.upsert({ externalUserId: 'x' });
    expect((gqlCalls(s.calls)[1]!.init.headers as Record<string, string>)['Idempotency-Key']).toMatch(/\S{8,}/);
  });

  it('does not send a key on queries, or when retries are off', async () => {
    const s = server((c) => (c.url.endsWith('/v2/oauth2/token') ? token() : { json: { data: { platformCompany: null, upsertPlatformUser: { id: 'u' } } } }));
    const finbaze = new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: s.fetch, maxNetworkRetries: 0 });
    await finbaze.platform.companies.retrieve('1');
    await finbaze.platform.users.upsert({ externalUserId: 'x' });
    for (const c of gqlCalls(s.calls)) expect((c.init.headers as Record<string, string>)['Idempotency-Key']).toBeUndefined();
  });

  it('retries 503 and 429 with the same idempotency key, then succeeds', async () => {
    let attempts = 0;
    const s = server((c) => {
      if (c.url.endsWith('/v2/oauth2/token')) return token();
      attempts += 1;
      if (attempts === 1) return { status: 503, json: {} };
      if (attempts === 2) return { status: 429, headers: { 'retry-after': '0' }, json: {} };
      return { json: { data: { upsertPlatformUser: { id: 'u1' } } } };
    });
    const finbaze = new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: s.fetch, maxNetworkRetries: 3 });
    await expect(finbaze.platform.users.upsert({ externalUserId: 'x' })).resolves.toMatchObject({ id: 'u1' });
    const keys = gqlCalls(s.calls).map((c) => (c.init.headers as Record<string, string>)['Idempotency-Key']);
    expect(keys).toHaveLength(3);
    expect(new Set(keys).size).toBe(1);
  });

  it('gives up with a rate-limit error carrying Retry-After', async () => {
    const s = server((c) => (c.url.endsWith('/v2/oauth2/token') ? token() : { status: 429, headers: { 'retry-after': '7' }, json: {} }));
    const finbaze = new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: s.fetch, maxNetworkRetries: 0 });
    const error = await finbaze.platform.companies.retrieve('1').catch((e: unknown) => e);
    expect(error).toBeInstanceOf(FinbazeRateLimitError);
    expect((error as FinbazeRateLimitError).retryAfterSeconds).toBe(7);
  });

  it('retries network errors on queries but not GraphQL errors', async () => {
    let n = 0;
    const flaky = jest.fn(async (url: string) => {
      if (String(url).includes('oauth2')) return new Response(JSON.stringify({ access_token: 't', expires_in: 3600 }));
      n += 1;
      if (n === 1) throw new TypeError('socket hang up');
      return new Response(JSON.stringify({ errors: [{ message: 'bad', extensions: { code: 'BAD_USER_INPUT', param: 'externalId' } }] }), { status: 200, headers: { 'x-request-id': 'req_1' } });
    });
    const finbaze = new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: flaky as unknown as typeof fetch, maxNetworkRetries: 2 });
    const error = (await finbaze.platform.companies.retrieve('1').catch((e: unknown) => e)) as FinbazeGraphQLError;
    expect(error).toBeInstanceOf(FinbazeGraphQLError);
    expect(error.code).toBe('BAD_USER_INPUT');
    expect(error.param).toBe('externalId');
    expect(error.requestId).toBe('req_1');
    expect(n).toBe(2);
  });

  it('times out a hanging request', async () => {
    const hang = jest.fn((url: string, init: RequestInit) =>
      String(url).includes('oauth2')
        ? Promise.resolve(new Response(JSON.stringify({ access_token: 't', expires_in: 3600 })))
        : new Promise<Response>((_, reject) => init.signal?.addEventListener('abort', () => reject(new Error('aborted')))),
    );
    const finbaze = new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: hang as unknown as typeof fetch, maxNetworkRetries: 0, timeoutMs: 20 });
    await expect(finbaze.platform.companies.retrieve('1')).rejects.toThrow(/Network error/);
  });

  it('classifies documents', () => {
    expect(isMutation('mutation X { a }')).toBe(true);
    expect(isMutation('# note\n  mutation X { a }')).toBe(true);
    expect(isMutation('query X { a }')).toBe(false);
    expect(isMutation('{ a }')).toBe(false);
  });
});

describe('platform resources', () => {
  const ok = (data: unknown) => (c: Call) => (c.url.endsWith('/v2/oauth2/token') ? token() : { json: { data } });

  it('creates a company with its externalId and reports whether it was new', async () => {
    const s = server(ok({ createPlatformCompany: { created: false, company: { id: 'c1', externalId: 'acme-1' }, prefill: null } }));
    const finbaze = new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: s.fetch });
    const company = await finbaze.platform.companies.create({ externalId: 'acme-1', registrationCountry: 'NL' as never });
    expect(company).toMatchObject({ id: 'c1', created: false });
    expect(gqlCalls(s.calls)[0]!.body.variables).toEqual({ input: { externalId: 'acme-1', registrationCountry: 'NL' } });
  });

  it('pages platform connections with cursors', async () => {
    const pages = [
      { platformCompanies: { hasMore: true, nextCursor: 'k1', edges: [{ node: { id: 'a' } }] } },
      { platformCompanies: { hasMore: false, nextCursor: null, edges: [{ node: { id: 'b' } }] } },
    ];
    let i = 0;
    const s = server((c) => (c.url.endsWith('/v2/oauth2/token') ? token() : { json: { data: pages[i++] } }));
    const finbaze = new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: s.fetch });
    const list = await finbaze.platform.companies.list({ limit: 1 });
    expect(list.has_more).toBe(true);
    expect((await list.autoPagingToArray()).map((c) => c.id)).toEqual(['a', 'b']);
    expect(gqlCalls(s.calls)[1]!.body.variables).toMatchObject({ first: 1, after: 'k1' });
  });

  it('maps embed session params to the API input and returns the secret once', async () => {
    const s = server(ok({ createEmbedSession: { clientSecret: 'es_x_secret_y', expiresAt: '2026-01-01T00:00:00Z', session: { id: 'es_x', components: [{ component: 'tax_calendar', features: {} }] } } }));
    const finbaze = new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: s.fetch });
    const session = await finbaze.platform.embedSessions.create({
      company: 'c1',
      user: { externalId: 'u-1' },
      components: { taxCalendar: { enabled: true }, vatReturn: { enabled: true, features: { submit: false } } },
      origin: 'https://app.example.com',
      previousSessionId: 'es_prev',
    });
    expect(session).toEqual({ id: 'es_x', clientSecret: 'es_x_secret_y', expiresAt: '2026-01-01T00:00:00Z', components: [{ component: 'tax_calendar', features: {} }] });
    expect(gqlCalls(s.calls)[0]!.body.variables).toEqual({
      input: {
        companyId: 'c1',
        user: { externalUserId: 'u-1' },
        components: { taxCalendar: { enabled: true }, vatReturn: { enabled: true, features: { submit: false } } },
        origin: 'https://app.example.com',
        previousSessionId: 'es_prev',
      },
    });
    await finbaze.platform.embedSessions.create({ company: 'c1', user: { id: 'pu1' }, components: {} });
    expect((gqlCalls(s.calls)[1]!.body.variables as { input: { user: unknown } }).input.user).toEqual({ platformUserId: 'pu1' });
  });

  it('sets access by company and revokes sessions for a user', async () => {
    const s = server(ok({ setPlatformUserAccess: { role: 'viewer' }, revokeEmbedSessionsForUser: 3 }));
    const finbaze = new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: s.fetch });
    await finbaze.platform.users.setAccess({ externalUserId: 'u', companyId: 'c1', role: 'viewer' });
    expect(gqlCalls(s.calls)[0]!.body.variables).toEqual({ input: { externalUserId: 'u', profileId: 'c1', role: 'viewer' } });
    await expect(finbaze.platform.embedSessions.revokeForUser({ userId: 'u', companyId: 'c1' })).resolves.toBe(3);
  });

  it('pages active companies by the last profile id', async () => {
    const rows = (ids: string[]) => ({ platformUsage: { companies: ids.map((profileId) => ({ profileId, externalId: profileId, reasons: [] })) } });
    const pages = [rows(['a', 'b']), rows(['c'])];
    let i = 0;
    const s = server((c) => (c.url.endsWith('/v2/oauth2/token') ? token() : { json: { data: pages[i++] } }));
    const finbaze = new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: s.fetch });
    const list = await finbaze.platform.usage.activeCompanies({ month: '2026-10', limit: 2 });
    expect((await list.autoPagingToArray()).map((c) => c.profileId)).toEqual(['a', 'b', 'c']);
    expect(gqlCalls(s.calls)[1]!.body.variables).toMatchObject({ after: 'b', month: '2026-10' });
  });
});

describe('asUser', () => {
  it('mints a user token once, caches it, and uses it for books calls', async () => {
    let minted = 0;
    const s = server((c) => {
      if (c.url.endsWith('/v2/oauth2/token')) return token('srv');
      if (c.body.query?.includes('createPlatformUserToken')) {
        minted += 1;
        return { json: { data: { createPlatformUserToken: { accessToken: `user${minted}`, tokenType: 'Bearer', expiresAt: new Date(Date.now() + 3_600_000).toISOString(), scopes: [] } } } };
      }
      return { json: { data: { taxFilingOverview: { year: 2026, rows: [], otherFilings: [] } } } };
    });
    const finbaze = new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: s.fetch });
    const user = finbaze.asUser({ externalUserId: 'u-1' }, { companyIds: ['c1'] });
    await Promise.all([user.companies.taxCalendar.retrieve('c1', { year: 2026 }), user.companies.taxCalendar.retrieve('c1', { year: 2026 })]);
    await user.companies.taxCalendar.retrieve('c1', { year: 2026 });
    expect(minted).toBe(1);
    const books = gqlCalls(s.calls).filter((c) => c.body.query?.includes('taxFilingOverview'));
    expect(books).toHaveLength(3);
    for (const c of books) expect((c.init.headers as Record<string, string>).Authorization).toBe('Bearer user1');
    const mint = gqlCalls(s.calls).find((c) => c.body.query?.includes('createPlatformUserToken'))!;
    expect((mint.init.headers as Record<string, string>).Authorization).toBe('Bearer srv');
    expect(mint.body.variables).toEqual({ input: { externalUserId: 'u-1', profileIds: ['c1'] } });
  });

  it('mints a new token when the cached one is about to expire', async () => {
    let minted = 0;
    const s = server((c) => {
      if (c.url.endsWith('/v2/oauth2/token')) return token('srv');
      if (c.body.query?.includes('createPlatformUserToken')) {
        minted += 1;
        return { json: { data: { createPlatformUserToken: { accessToken: `user${minted}`, tokenType: 'Bearer', expiresAt: new Date(Date.now() + 30_000).toISOString(), scopes: [] } } } };
      }
      return { json: { data: { profileTodoSummary: { totalCount: 0, urgentCount: 0, readyCount: 0, blockedCount: 0, priorityQueue: { items: [] } } } } };
    });
    const user = new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: s.fetch }).asUser({ platformUserId: 'pu' });
    await user.companies.actionItems.list('c1');
    await user.companies.actionItems.list('c1');
    expect(minted).toBe(2);
  });
});

describe('webhooks', () => {
  const finbaze = new Finbaze({ accessToken: 't' });
  const payload = JSON.stringify({ id: 'd1', event: 'invoice.created', eventId: 'e1', created: '2026-01-01T00:00:00Z', data: { a: 1 } });

  it('verifies a signature made by generateTestHeader and returns the event', async () => {
    const header = await finbaze.webhooks.generateTestHeader({ payload, secret: 's3cret' });
    await expect(finbaze.webhooks.constructEvent(payload, header, 's3cret')).resolves.toMatchObject({ event: 'invoice.created', data: { a: 1 } });
    await expect(finbaze.webhooks.constructEvent(new TextEncoder().encode(payload), header, 's3cret')).resolves.toMatchObject({ id: 'd1' });
  });

  it('matches what the API signs', async () => {
    // HMAC-SHA256 of "1700000000.<body>" with the secret "whsec_test", as signAppWebhook computes it.
    const { createHmac } = await import('node:crypto');
    const expected = createHmac('sha256', 'whsec_test').update(`1700000000.${payload}`).digest('hex');
    const header = `t=1700000000,v1=${expected}`;
    await expect(finbaze.webhooks.constructEvent(payload, header, 'whsec_test', { nowSeconds: 1_700_000_100 })).resolves.toBeDefined();
    expect(await finbaze.webhooks.generateTestHeader({ payload, secret: 'whsec_test', timestamp: 1_700_000_000 })).toBe(header);
  });

  it('rejects a wrong secret, a changed body, a stale timestamp and a malformed header', async () => {
    const header = await finbaze.webhooks.generateTestHeader({ payload, secret: 's3cret' });
    await expect(finbaze.webhooks.constructEvent(payload, header, 'other')).rejects.toBeInstanceOf(FinbazeSignatureVerificationError);
    await expect(finbaze.webhooks.constructEvent(payload + ' ', header, 's3cret')).rejects.toThrow(/does not match/);
    const old = await finbaze.webhooks.generateTestHeader({ payload, secret: 's3cret', timestamp: Math.floor(Date.now() / 1000) - 3600 });
    await expect(finbaze.webhooks.constructEvent(payload, old, 's3cret')).rejects.toThrow(/tolerance/);
    await expect(finbaze.webhooks.constructEvent(payload, old, 's3cret', { toleranceSeconds: 7200 })).resolves.toBeDefined();
    await expect(finbaze.webhooks.constructEvent(payload, 'garbage', 's3cret')).rejects.toThrow(/malformed/);
  });
});

describe('oauth', () => {
  it('builds the authorize URL and generates a PKCE pair', async () => {
    const oauth = Finbaze.oauth({ clientId: 'my-app' });
    const pkce = await generatePkce();
    expect(pkce.verifier.length).toBeGreaterThanOrEqual(43);
    expect(pkce.challenge).toMatch(/^[A-Za-z0-9_-]{43}$/);
    const url = new URL(oauth.authorizeUrl({ webBaseUrl: 'https://platform.finbaze.com', redirectUri: 'https://app/cb', scopes: ['a:read', 'b:write'], state: 's', codeChallenge: pkce.challenge }));
    expect(url.pathname).toBe('/oauth/authorize');
    expect(Object.fromEntries(url.searchParams)).toMatchObject({ client_id: 'my-app', response_type: 'code', scope: 'a:read b:write', state: 's', code_challenge_method: 'S256', redirect_uri: 'https://app/cb' });
  });

  it('exchanges a code with PKCE and refreshes', async () => {
    const s = server(() => ({ json: { access_token: 'a', expires_in: 3600, refresh_token: 'r' } }));
    const oauth = Finbaze.oauth({ clientId: 'my-app', baseUrl: 'https://api.example', fetch: s.fetch });
    await expect(oauth.exchangeCode({ code: 'c', redirectUri: 'https://app/cb', codeVerifier: 'v' })).resolves.toMatchObject({ access_token: 'a', refresh_token: 'r' });
    expect(s.calls[0]!.url).toBe('https://api.example/v2/oauth2/token');
    expect(s.calls[0]!.body).toEqual({ grant_type: 'authorization_code', code: 'c', redirect_uri: 'https://app/cb', code_verifier: 'v', client_id: 'my-app' });
    await oauth.refresh('r');
    expect(s.calls[1]!.body).toEqual({ grant_type: 'refresh_token', refresh_token: 'r', client_id: 'my-app' });
  });

  it('turns a refused exchange into an authentication error', async () => {
    const s = server(() => ({ status: 400, json: { error: 'invalid_grant' } }));
    await expect(Finbaze.oauth({ clientId: 'x', fetch: s.fetch }).refresh('r')).rejects.toBeInstanceOf(FinbazeAuthenticationError);
  });

  it('reads token claims', () => {
    const payload = Buffer.from(JSON.stringify({ profile_id: 'p1', exp: 123 })).toString('base64url');
    expect(decodeAccessToken(`h.${payload}.s`)).toMatchObject({ profile_id: 'p1', exp: 123 });
    expect(decodeAccessToken('nope')).toEqual({});
  });
});

describe('companies resources', () => {
  it('lists transactions for a company, newest first, with filters', async () => {
    const s = server((c) =>
      c.url.endsWith('/v2/oauth2/token')
        ? token()
        : { json: { data: { monetaryAccountPayments: { edges: [{ node: { id: 't1' } }], pageInfo: { hasNextPage: false, endCursor: null } } } } },
    );
    const finbaze = new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: s.fetch });
    const list = await finbaze.companies.transactions.list('c1', { bankAccountId: 'acc', processed: false });
    expect(list.data).toEqual([{ id: 't1' }]);
    const vars = gqlCalls(s.calls)[0]!.body.variables as { filter: unknown; sorting: unknown };
    expect(vars.filter).toEqual({ monetaryAccount: { profileId: { eq: 'c1' } }, monetaryAccountId: { eq: 'acc' }, processed: { is: false } });
    expect(vars.sorting).toEqual([{ field: 'date', direction: 'DESC' }]);
  });

  it('uploads a document as a data URL, or as a receipt for a transaction', async () => {
    const s = server((c) =>
      c.url.endsWith('/v2/oauth2/token')
        ? token()
        : c.body.query?.includes('uploadProcessDocumentForPayment')
          ? { json: { data: { uploadProcessDocumentForPayment: { purchaseInvoiceId: null, processDocument: { id: 'd2' } } } } }
          : { json: { data: { uploadProcessDocuments: [{ id: 'd1' }] } } },
    );
    const finbaze = new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: s.fetch });
    const file = new TextEncoder().encode('%PDF-1.4');
    await expect(finbaze.companies.documents.upload('c1', { file, filename: 'a.pdf', contentType: 'application/pdf' })).resolves.toMatchObject({ id: 'd1' });
    expect(gqlCalls(s.calls)[0]!.body.variables).toEqual({
      profileId: 'c1',
      files: [{ filename: 'a.pdf', mimeType: 'application/pdf', dataUrl: `data:application/pdf;base64,${Buffer.from('%PDF-1.4').toString('base64')}` }],
    });
    await expect(finbaze.companies.documents.upload('c1', { file: new Blob(['x']), filename: 'r.png', contentType: 'image/png', transactionId: 't1' })).resolves.toMatchObject({ id: 'd2' });
    expect(gqlCalls(s.calls)[1]!.body.variables).toMatchObject({ monetaryAccountPaymentId: 't1' });
  });

  it('keeps profiles as an alias of companies', () => {
    const finbaze = new Finbaze({ accessToken: 't' });
    expect(finbaze.profiles).toBe(finbaze.companies);
    expect(finbaze.companies.salesInvoices).toBeDefined();
  });
});

describe('http client config', () => {
  it('still accepts client credentials', async () => {
    const s = server((c) => (c.url.endsWith('/v2/oauth2/token') ? token('app') : { json: { data: { ok: true } } }));
    const http = new FinbazeHttpClient({ clientId: 'c', clientSecret: 's', profileId: 'p', fetch: s.fetch });
    await http.request('query { ok }');
    expect(s.calls[0]!.body).toEqual({ grant_type: 'client_credentials', client_id: 'c', client_secret: 's', profile_id: 'p' });
  });
});
