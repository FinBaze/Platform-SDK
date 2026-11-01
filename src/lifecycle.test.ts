import { Finbaze } from './index';

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

describe('company lifecycle', () => {
  it('suspends with a reason and a message shown to the users', async () => {
    const { finbaze, gql } = client({ suspendPlatformCompany: { id: 'c1', lifecycle: { state: 'suspended' } } });
    const company = await finbaze.platform.companies.suspend('c1', { reason: 'non-payment', displayMessage: 'Contact support' });
    expect(company.lifecycle.state).toBe('suspended');
    expect(gql()[0]!.body.variables).toEqual({ companyId: 'c1', reason: 'non-payment', displayMessage: 'Contact support' });
  });

  it('closes with an effective date and reads the checklist', async () => {
    const { finbaze, gql } = client({
      closePlatformCompany: { id: 'c1', lifecycle: { state: 'closed', closeEffectiveDate: '2026-10-31' } },
      companyClosingChecklist: [{ key: 'final_vat_return', label: 'File the final VAT return', blocking: true, done: false, filingId: null }],
    });
    await finbaze.platform.companies.close('c1', { effectiveDate: '2026-10-31' });
    expect(gql()[0]!.body.variables).toMatchObject({ companyId: 'c1', effectiveDate: '2026-10-31' });
    const checklist = await finbaze.platform.companies.closingChecklist('c1', '2026-10-31');
    expect(checklist[0]!.blocking).toBe(true);
  });

  it('keeps archived companies out of a list unless asked', async () => {
    const { finbaze, gql } = client({ platformCompanies: { edges: [], hasMore: false, nextCursor: null } });
    await finbaze.platform.companies.list({ includeArchived: true, lifecycleStates: ['archived' as never] });
    expect(gql()[0]!.body.variables).toMatchObject({ includeArchived: true, lifecycleStates: ['archived'] });
  });
});

describe('transfers', () => {
  it('accepts a code with the platform own id', async () => {
    const { finbaze, gql } = client({ acceptCompanyTransfer: { id: 'c9', externalId: 'ext-9', lifecycle: { state: 'active' } } });
    const company = await finbaze.platform.transfers.accept('ABCDEFGHJK23', 'ext-9');
    expect(company.externalId).toBe('ext-9');
    expect(gql()[0]!.body.variables).toEqual({ code: 'ABCDEFGHJK23', externalId: 'ext-9' });
  });

  it('reads the statement and lists and cancels transfers', async () => {
    const { finbaze, gql } = client({
      companyTransferStatement: { version: 'transfer-2026-10', hash: 'h', paragraphs: [] },
      companyTransfers: [{ id: 't1', status: 'pending' }],
      cancelCompanyTransfer: { id: 't1', status: 'cancelled' },
    });
    expect((await finbaze.platform.transfers.statement('c1', 'platform' as never, 'nl-NL')).hash).toBe('h');
    expect(await finbaze.platform.transfers.list('c1')).toHaveLength(1);
    expect((await finbaze.platform.transfers.cancel('t1')).status).toBe('cancelled');
    expect(gql()[0]!.body.variables).toEqual({ companyId: 'c1', target: 'platform', locale: 'nl-NL' });
  });
});

describe('users and audit', () => {
  it('deprovisions a user', async () => {
    const { finbaze, gql } = client({ deprovisionPlatformUser: true });
    expect(await finbaze.platform.users.deprovision('u1', { anonymise: true })).toBe(true);
    expect(gql()[0]!.body.variables).toEqual({ userId: 'u1', anonymise: true });
  });

  it('pages through the audit log with a cursor', async () => {
    let page = 0;
    const calls: Array<Record<string, unknown> | undefined> = [];
    const fetchMock = jest.fn(async (url: string, init: RequestInit) => {
      if (String(url).endsWith('/v2/oauth2/token')) return new Response(JSON.stringify({ access_token: 'srv', expires_in: 3600 }));
      calls.push(JSON.parse(String(init.body)).variables);
      page += 1;
      const edges = page === 1 ? [{ id: 'a' }, { id: 'b' }] : [{ id: 'c' }];
      return new Response(JSON.stringify({ data: { platformAuditLogs: { edges, nextCursor: page === 1 ? 'cur1' : null } } }));
    });
    const finbaze = new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: fetchMock as unknown as typeof fetch });
    const ids: string[] = [];
    for await (const entry of finbaze.platform.audit.iterate({ companyId: 'c1' }, 2)) ids.push(entry.id);
    expect(ids).toEqual(['a', 'b', 'c']);
    expect(calls[1]).toMatchObject({ after: 'cur1', first: 2, filter: { companyId: 'c1' } });
  });
});
