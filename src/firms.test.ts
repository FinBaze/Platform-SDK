import { Finbaze, isFirmEvent } from './index';
import type { PlatformWebhookEvent } from './webhooks';

type Call = { url: string; body: any };

function server(handler: (call: Call) => unknown) {
  const calls: Call[] = [];
  const fetchMock = jest.fn(async (url: string, init: RequestInit) => {
    const call: Call = { url: String(url), body: typeof init.body === 'string' ? JSON.parse(init.body || '{}') : init.body };
    calls.push(call);
    if (call.url.endsWith('/v2/oauth2/token')) {
      return new Response(JSON.stringify({ access_token: 'srv', expires_in: 3600 }), { status: 200 });
    }
    return new Response(JSON.stringify({ data: handler(call) ?? {} }), { status: 200 });
  });
  return { calls, fetch: fetchMock as unknown as typeof fetch };
}

const client = (s: ReturnType<typeof server>) => new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: s.fetch, maxNetworkRetries: 0 });
const api = (calls: Call[]) => calls.filter((c) => !c.url.endsWith('/v2/oauth2/token'));

describe('platform.firms', () => {
  it('lists the engagements of a company and hides ended ones by default', async () => {
    const s = server(() => ({ companyFirmEngagements: [{ id: 'e1', status: 'active' }] }));
    const rows = await client(s).platform.firms.listEngagements('c1');
    expect(rows).toEqual([{ id: 'e1', status: 'active' }]);
    const call = api(s.calls)[0];
    expect(call.body.query).toContain('companyFirmEngagements');
    expect(call.body.variables).toEqual({ companyId: 'c1', includeEnded: false });
  });

  it('ends an engagement with a platform reason', async () => {
    const s = server(() => ({ endFirmEngagement: { id: 'e1', status: 'ended', endedBySide: 'platform' } }));
    const row = await client(s).platform.firms.end('e1', { reason: 'platform_request' });
    expect(row.status).toBe('ended');
    expect(api(s.calls)[0].body.variables).toEqual({ input: { engagementId: 'e1', reason: 'platform_request' } });
  });
});

describe('isFirmEvent', () => {
  it('narrows firm events only', () => {
    const firm = { type: 'firm.connected', data: { object: { __typename: 'FirmEngagement' } } } as unknown as PlatformWebhookEvent;
    const other = { type: 'payment_request.paid', data: {} } as unknown as PlatformWebhookEvent;
    expect(isFirmEvent(firm)).toBe(true);
    expect(isFirmEvent(other)).toBe(false);
  });
});
