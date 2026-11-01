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

describe('test clocks', () => {
  it('creates, advances (with options only when given), lists and deletes', async () => {
    const { finbaze, gql } = client({
      createTestClock: { id: 'k1', name: 'Q1', frozenTime: '2026-01-01T00:00:00Z', status: 'ready' },
      advanceTestClock: { id: 'k1', status: 'advancing', advanceTarget: '2026-04-05T00:00:00Z' },
      testClocks: [{ id: 'k1' }],
      deleteTestClock: true,
    });
    const clock = await finbaze.platform.sandbox.testClocks.create({ name: 'Q1', frozenTime: '2026-01-01T00:00:00Z' });
    expect(clock.id).toBe('k1');
    expect(gql()[0]!.body.variables).toEqual({ name: 'Q1', frozenTime: '2026-01-01T00:00:00Z' });

    await finbaze.platform.sandbox.testClocks.advance('k1', { to: '2026-04-05T00:00:00Z' });
    expect(gql()[1]!.body.variables).toEqual({ id: 'k1', to: '2026-04-05T00:00:00Z' });
    await finbaze.platform.sandbox.testClocks.advance('k1', { to: '2026-04-05T00:00:00Z', submitFilings: true, closeFinancialYear: false });
    expect(gql()[2]!.body.variables).toEqual({ id: 'k1', to: '2026-04-05T00:00:00Z', options: { submitFilings: true, closeFinancialYear: false } });

    expect(await finbaze.platform.sandbox.testClocks.list()).toHaveLength(1);
    expect(await finbaze.platform.sandbox.testClocks.delete('k1')).toBe(true);
    expect(gql()[4]!.body.variables).toEqual({ id: 'k1' });
  });
});

describe('seeded test companies and reset', () => {
  it('seeds a company on a clock', async () => {
    const { finbaze, gql } = client({ seedTestCompany: { id: 'c1', platformId: 'p1', externalId: 'nl_bv_payroll', legalName: 'Payroll BV' } });
    const company = await finbaze.platform.sandbox.seedTestCompany({ template: 'nl_bv_payroll' as never, testClockId: 'k1', preserve: true, users: ['u1'] });
    expect(company.externalId).toBe('nl_bv_payroll');
    expect(gql()[0]!.body.variables).toEqual({ input: { template: 'nl_bv_payroll', testClockId: 'k1', preserve: true, users: ['u1'] } });
  });

  it('resets the sandbox and reads and updates its settings', async () => {
    const { finbaze, gql } = client({
      resetPlatformSandbox: { trigger: 'manual', companiesDeleted: 3, companiesKept: 1, clocksDeleted: 1, companiesSeeded: [], errors: [], startedAt: 'a', finishedAt: 'b' },
      platformSandboxSettings: { sandboxReset: 'none', sandboxSeedTemplates: [], lastResetAt: null },
      updatePlatformSandboxSettings: { sandboxReset: 'nightly', sandboxSeedTemplates: ['uk_ltd_vat'], lastResetAt: null },
    });
    expect((await finbaze.platform.sandbox.resetSandbox()).companiesDeleted).toBe(3);
    expect((await finbaze.platform.sandbox.settings.retrieve()).sandboxReset).toBe('none');
    const updated = await finbaze.platform.sandbox.settings.update({ sandboxReset: 'nightly' as never, sandboxSeedTemplates: ['uk_ltd_vat' as never] });
    expect(updated.sandboxReset).toBe('nightly');
    expect(gql()[2]!.body.variables).toEqual({ input: { sandboxReset: 'nightly', sandboxSeedTemplates: ['uk_ltd_vat'] } });
  });
});
