import { Finbaze, isControlEvent, type PlatformControlEvent } from './index';
import type { PlatformWebhookEvent } from './webhooks';

type Call = { url: string; body: { query?: string; variables?: Record<string, unknown> } };

function client(data: Record<string, unknown>) {
  const calls: Call[] = [];
  const fetchMock = jest.fn(async (url: string, init: RequestInit) => {
    const body = JSON.parse(String(init.body ?? '{}'));
    calls.push({ url: String(url), body });
    if (String(url).endsWith('/v2/oauth2/token')) {
      return new Response(JSON.stringify({ access_token: 'srv', expires_in: 3600 }));
    }
    return new Response(JSON.stringify({ data }));
  });
  const finbaze = new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: fetchMock as unknown as typeof fetch });
  const gql = () => calls.filter((c) => c.url.endsWith('/graphql'));
  return { finbaze, gql };
}

describe('support settings', () => {
  it('reads and updates how support is routed', async () => {
    const { finbaze, gql } = client({
      platformSupportSettings: { supportMode: 'partner_first', supportUrl: null, supportEmail: null, supportEscalationEnabled: true },
      updatePlatformSupportSettings: { supportMode: 'finbaze_direct', supportUrl: 'https://help.example.com', supportEmail: null, supportEscalationEnabled: true },
    });
    expect((await finbaze.platform.support.settings.retrieve()).supportMode).toBe('partner_first');
    const updated = await finbaze.platform.support.settings.update({ supportMode: 'finbaze_direct' as never, supportUrl: 'https://help.example.com' });
    expect(updated.supportUrl).toBe('https://help.example.com');
    expect(gql()[1]!.body.variables).toEqual({ input: { supportMode: 'finbaze_direct', supportUrl: 'https://help.example.com' } });
  });
});

describe('support escalations', () => {
  it('creates a case with the request ids of the failing calls', async () => {
    const { finbaze, gql } = client({ createSupportEscalation: { id: 'e1', status: 'open', severity: 'high', comments: [] } });
    const escalation = await finbaze.platform.support.escalations.create({
      companyId: 'c1',
      subject: 'VAT draft starts a quarter late',
      description: 'Since this morning',
      severity: 'high' as never,
      requestIds: ['7b0c2f1e-aaaa'],
      screen: 'vat-return',
    });
    expect(escalation.id).toBe('e1');
    expect(gql()[0]!.body.query).toContain('createSupportEscalation');
    expect(gql()[0]!.body.variables).toEqual({
      input: { companyId: 'c1', subject: 'VAT draft starts a quarter late', description: 'Since this morning', severity: 'high', requestIds: ['7b0c2f1e-aaaa'], screen: 'vat-return' },
    });
  });

  it('lists by status with a default page size, and comments', async () => {
    const { finbaze, gql } = client({
      supportEscalations: [{ id: 'e1' }],
      addSupportEscalationComment: { id: 'k1', authorKind: 'platform', body: 'Request 7b0c is the first failing one.' },
    });
    expect(await finbaze.platform.support.escalations.list({ status: ['open', 'in_progress'] as never })).toHaveLength(1);
    expect(gql()[0]!.body.variables).toEqual({ status: ['open', 'in_progress'], first: 50 });
    const comment = await finbaze.platform.support.escalations.comment('e1', 'Request 7b0c is the first failing one.');
    expect(comment.authorKind).toBe('platform');
    expect(gql()[1]!.body.variables).toEqual({ escalationId: 'e1', body: 'Request 7b0c is the first failing one.' });
  });
});

describe('support grants', () => {
  it('lists, decides with an attestation and revokes', async () => {
    const { finbaze, gql } = client({
      supportAccessGrants: [{ id: 'g1', status: 'requested', scope: 'read' }],
      decideSupportAccess: { id: 'g1', status: 'active' },
      revokeSupportAccess: { id: 'g1', status: 'revoked' },
    });
    const grants = await finbaze.platform.support.grants.list('c1', { includeEnded: true });
    expect(grants[0]!.status).toBe('requested');
    expect(gql()[0]!.body.variables).toEqual({ companyId: 'c1', includeEnded: true });
    const decided = await finbaze.platform.support.grants.decide('g1', { approve: true, attestation: 'Customer agreed on ticket #4411' });
    expect(decided.status).toBe('active');
    expect(gql()[1]!.body.variables).toEqual({ grantId: 'g1', approve: true, attestation: 'Customer agreed on ticket #4411' });
    expect((await finbaze.platform.support.grants.revoke('g1')).status).toBe('revoked');
    expect(gql()[2]!.body.variables).toEqual({ grantId: 'g1' });
  });
});

describe('support events and embed sessions', () => {
  const base = { id: 'evt_1', object: 'event', created: 1, livemode: false, api_version: '2026-10-01', pending_webhooks: 0 };

  it('narrows the support events', () => {
    const event = { ...base, type: 'support.access_granted', data: { object: { id: 'g1', companyId: 'c1', breakGlass: false, requestedBy: 'finbaze_support' } } } as unknown as PlatformWebhookEvent;
    expect(isControlEvent(event)).toBe(true);
    if (isControlEvent(event) && event.type === 'support.access_granted') {
      const typed: PlatformControlEvent = event;
      expect(typed.data.object.requestedBy).toBe('finbaze_support');
    }
    for (const type of ['support.requested', 'support.escalation.created', 'support.escalation.updated', 'support.access_requested', 'support.access_revoked', 'support.access_expired', 'support.break_glass']) {
      expect(isControlEvent({ ...base, type, data: {} } as unknown as PlatformWebhookEvent)).toBe(true);
    }
  });

  it('passes the support components to the embed session', async () => {
    const { finbaze, gql } = client({ createEmbedSession: { session: { id: 's1', components: {} }, clientSecret: 'cs', expiresAt: '2026-10-23T12:00:00Z' } });
    await finbaze.platform.embedSessions.create({
      company: 'c1',
      user: { externalId: 'u1' },
      components: {
        contactSupport: { enabled: true },
        supportAccess: { enabled: true, features: { decide: true, revoke: false } },
        notificationBanner: { enabled: true, features: { supportApproval: true } },
      },
    });
    expect(gql()[0]!.body.variables).toMatchObject({
      input: {
        components: {
          contactSupport: { enabled: true },
          supportAccess: { enabled: true, features: { decide: true, revoke: false } },
          notificationBanner: { enabled: true, features: { supportApproval: true } },
        },
      },
    });
  });
});
