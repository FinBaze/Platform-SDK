import { Finbaze, isMessageEvent, type MessageCreatedEvent } from './index';

type Call = { url: string; body: Record<string, unknown> };

function server(handler: (call: Call) => unknown) {
  const calls: Call[] = [];
  const fetchMock = jest.fn(async (url: string, init: RequestInit) => {
    const call: Call = { url: String(url), body: JSON.parse(String(init.body ?? '{}')) as Record<string, unknown> };
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
const vars = (call: Call) => call.body.variables as Record<string, any>;

const message = (id: string) => ({ id, type: 'tax.filing_ready', status: 'sent', ackRequired: true });

describe('platform.messages', () => {
  it('pages the log with an offset cursor and passes the filters', async () => {
    const s = server((call) => ({
      platformMessages: vars(call).filter.offset === 0 ? [message('m1'), message('m2')] : [message('m3')],
    }));
    const page = await client(s).platform.messages.list({ company: { id: 'c1' }, unacknowledgedOnly: true, limit: 2 });
    expect(page.data.map((m) => m.id)).toEqual(['m1', 'm2']);
    expect(page.hasMore).toBe(true);
    expect(vars(api(s.calls)[0]!).filter).toMatchObject({ profileId: 'c1', unacknowledgedOnly: true, limit: 2, offset: 0 });
    const all = await page.autoPagingToArray();
    expect(all.map((m) => m.id)).toEqual(['m1', 'm2', 'm3']);
  });

  it('acknowledges one or many, with Date values as ISO strings', async () => {
    const s = server(() => ({ acknowledgeMessage: message('m1'), acknowledgeMessages: [message('m1')] }));
    const deliveredAt = new Date('2026-11-03T09:00:00Z');
    await client(s).platform.messages.acknowledge({ id: 'm1', channel: 'push', deliveredAt });
    await client(s).platform.messages.acknowledgeMany([{ id: 'm1', channel: 'email', outcome: 'failed' }]);
    expect(vars(api(s.calls)[0]!).input).toEqual({ id: 'm1', channel: 'push', deliveredAt: '2026-11-03T09:00:00.000Z' });
    expect(vars(api(s.calls)[1]!).inputs).toEqual([{ id: 'm1', channel: 'email', outcome: 'failed' }]);
  });

  it('resends a message', async () => {
    const s = server(() => ({ resendPlatformMessage: message('m1') }));
    expect((await client(s).platform.messages.resend('m1')).id).toBe('m1');
    expect(vars(api(s.calls)[0]!)).toEqual({ id: 'm1' });
  });

  it('sets routing for a type, company-specific, and updates settings with quiet hours', async () => {
    const s = server(() => ({ setPlatformMessageRouting: { id: 'r1' }, updatePlatformMessageSettings: { digestHourLocal: 8 } }));
    await client(s).platform.messages.routing.set({ scope: 'type', type: 'tax.filing_ready', routing: 'both', company: 'c1' });
    await client(s).platform.messages.settings.update({ criticalEmailFallback: true, quietHours: { start: '21:00', end: '08:00', timezone: 'company' } });
    expect(vars(api(s.calls)[0]!).input).toEqual({ scope: 'type', type: 'tax.filing_ready', routing: 'both', profileId: 'c1' });
    expect(vars(api(s.calls)[1]!).input).toMatchObject({
      criticalEmailFallback: true,
      quietHoursStart: '21:00',
      quietHoursEnd: '08:00',
      quietHoursTimezone: 'company',
    });
  });

  it('verifies a message.created webhook and narrows the data by message type', async () => {
    const finbaze = new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: server(() => ({})).fetch });
    const payload = JSON.stringify({
      id: 'evt_1',
      object: 'event',
      type: 'message.created',
      data: {
        object: {
          object: 'message',
          id: 'msg_1',
          type: 'tax.filing_ready',
          data: { filingId: 'f1', filingType: 'nl_vat', language: 'nl' },
          ack_required: true,
        },
      },
    });
    const header = await finbaze.webhooks.generateTestHeader({ payload, secret: 's' });
    const event = await finbaze.webhooks.constructPlatformEvent(payload, header, 's');
    if (!isMessageEvent(event)) throw new Error('expected a message event');
    const created: MessageCreatedEvent | typeof event = event;
    const message = created.data.object;
    if (message.type === 'tax.filing_ready') {
      // Narrowed: `language` is typed on this branch.
      expect(message.data.language).toBe('nl');
    } else {
      throw new Error('expected tax.filing_ready');
    }
  });
});
