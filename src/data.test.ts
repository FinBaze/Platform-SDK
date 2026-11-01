import { Finbaze, FinbazeError, FinbazeSignatureVerificationError } from './index';

type Call = { url: string; init: RequestInit; body: Record<string, unknown> };

function server(handler: (call: Call) => { status?: number; json?: unknown; text?: string } | undefined) {
  const calls: Call[] = [];
  const fetchMock = jest.fn(async (url: string, init: RequestInit) => {
    let body: Record<string, unknown> = {};
    try {
      body = JSON.parse(String(init.body ?? '{}')) as Record<string, unknown>;
    } catch {
      body = { raw: String(init.body) };
    }
    const call: Call = { url: String(url), init, body };
    calls.push(call);
    if (call.url.endsWith('/v2/oauth2/token')) {
      return new Response(JSON.stringify({ access_token: 'srv', expires_in: 3600 }), { status: 200 });
    }
    const out = handler(call) ?? { json: { data: {} } };
    return new Response(out.text ?? JSON.stringify(out.json ?? {}), { status: out.status ?? 200 });
  });
  return { calls, fetch: fetchMock as unknown as typeof fetch };
}

const client = (s: ReturnType<typeof server>) => new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: s.fetch, maxNetworkRetries: 0 });
const api = (calls: Call[]) => calls.filter((c) => !c.url.endsWith('/v2/oauth2/token'));

describe('upserts', () => {
  it('sends the typed input and returns the status', async () => {
    const s = server(() => ({ json: { data: { upsertRelation: { status: 'created', id: 'r1', externalId: 'cust-1' } } } }));
    const result = await client(s).platform.upsert.relation({
      company: { externalId: 'acme' },
      externalId: 'cust-1',
      relation: { kind: 'customer', legalName: 'Van Dijk', registrationCountry: 'NL' },
    } as never);
    expect(result).toEqual({ status: 'created', id: 'r1', externalId: 'cust-1' });
    expect(api(s.calls)[0]!.body.query).toContain('upsertRelation');
    expect((api(s.calls)[0]!.body.variables as { input: { externalId: string } }).input.externalId).toBe('cust-1');
  });

  it('looks an object up by its own id', async () => {
    const s = server(() => ({ json: { data: { platformObjectByExternalId: null } } }));
    expect(await client(s).platform.upsert.lookup({ externalId: 'acme' }, 'relation' as never, 'x')).toBeNull();
  });
});

describe('bulk jobs', () => {
  const receipt = { id: 'j1', object: 'bulk_job', objectType: 'relations', status: 'queued', mode: 'upsert', dryRun: false, emitEvents: false, lineCount: 2, receivedBytes: 40, created: 'now' };

  it('uploads NDJSON with the company header, an idempotency key and the flags', async () => {
    const s = server(() => ({ status: 202, json: receipt }));
    const job = await client(s).platform.bulk.create({
      object: 'relations',
      company: { externalId: 'acme' },
      lines: [{ externalId: 'a', relation: { legalName: 'A' } }, { externalId: 'b', relation: { legalName: 'B' } }],
      mode: 'create_only',
      emitEvents: true,
      idempotencyKey: 'key-1',
    });
    expect(job.id).toBe('j1');
    const call = api(s.calls)[0]!;
    expect(call.url).toBe('https://sandbox.api.platform.finbaze.com/v2/platform/bulk-jobs?object=relations&mode=create_only&emitEvents=true');
    expect(call.init.headers).toMatchObject({
      'Content-Type': 'application/x-ndjson',
      'Idempotency-Key': 'key-1',
      'FinBaze-Company': 'ext:acme',
      Authorization: 'Bearer srv',
    });
    expect(String(call.init.body)).toBe('{"externalId":"a","relation":{"legalName":"A"}}\n{"externalId":"b","relation":{"legalName":"B"}}\n');
  });

  it('turns an API error into a FinbazeError with the code', async () => {
    const s = server(() => ({ status: 400, json: { message: 'The Idempotency-Key header is required.', code: 'IDEMPOTENCY_KEY_REQUIRED' } }));
    await expect(client(s).platform.bulk.create({ object: 'relations', lines: [] })).rejects.toThrow(/IDEMPOTENCY_KEY_REQUIRED/);
  });

  it('waits until the job has finished', async () => {
    let polls = 0;
    const s = server(() => {
      polls += 1;
      return { json: { data: { platformBulkJob: { id: 'j1', status: polls < 3 ? 'running' : 'completed_with_errors', results: { nodes: [] } } } } };
    });
    const job = await client(s).platform.bulk.wait('j1', { intervalMs: 1 });
    expect(job.status).toBe('completed_with_errors');
    expect(polls).toBe(3);
  });

  it('gives up when the job does not finish in time', async () => {
    const s = server(() => ({ json: { data: { platformBulkJob: { id: 'j1', status: 'running', results: { nodes: [] } } } } }));
    await expect(client(s).platform.bulk.wait('j1', { intervalMs: 1, timeoutMs: 5 })).rejects.toThrow(FinbazeError);
  });
});

describe('bank feed and statement files', () => {
  it('sends transactions with the source, company and account', async () => {
    const s = server(() => ({ json: { data: { ingestBankTransactions: [{ line: 1, status: 'created', id: 'p1', externalId: 't1', error: null }] } } }));
    const out = await client(s).platform.bankFeed.ingestTransactions({
      source: 'bunq',
      company: { externalId: 'acme' },
      account: 'acc-1',
      transactions: [{ externalId: 't1', bookingDate: '2026-10-20', amountMinor: 100, currency: 'EUR' } as never],
    });
    expect(out[0]).toMatchObject({ status: 'created', externalId: 't1' });
    expect(api(s.calls)[0]!.body.variables).toMatchObject({ source: 'bunq', account: 'acc-1' });
  });

  it('uploads a statement file with the right content type and format', async () => {
    const s = server(() => ({ status: 202, json: { id: 'f1', status: 'received', sha256: 'abc' } }));
    await client(s).platform.dataSources.files.upload('bunq', { format: 'camt053', body: '<Document/>', filename: 'a.xml' });
    await client(s).platform.dataSources.files.upload('bunq', { format: 'mt940', body: ':20:X' });
    const [xml, mt] = api(s.calls);
    expect(xml!.url).toBe('https://sandbox.api.platform.finbaze.com/v2/platform/data-sources/bunq/files?format=camt053');
    expect(xml!.init.headers).toMatchObject({ 'Content-Type': 'application/xml', 'X-Filename': 'a.xml' });
    expect(mt!.init.headers).toMatchObject({ 'Content-Type': 'text/plain' });
  });

  it('reads booking results by external id', async () => {
    const s = server(() => ({ json: { data: { bankTransactionBookings: [{ externalId: 't1', transactionId: null, booking: null }] } } }));
    const out = await client(s).platform.bankTransactions.bookings({ company: { externalId: 'acme' }, externalIds: ['t1'] });
    expect(out).toEqual([{ externalId: 't1', transactionId: null, booking: null }]);
  });
});

describe('events and webhook endpoints', () => {
  it('pages events by their sequence cursor', async () => {
    let call = 0;
    const s = server(() => {
      call += 1;
      return {
        json: {
          data: {
            platformEvents: {
              nodes: call === 1 ? [{ id: 'evt_1', sequence: '1' }] : [{ id: 'evt_2', sequence: '2' }],
              endCursor: call === 1 ? 'c1' : null,
              hasNextPage: call === 1,
            },
          },
        },
      };
    });
    const page = await client(s).platform.events.list({ limit: 1 });
    const all = await page.autoPagingToArray();
    expect(all.map((e) => e.id)).toEqual(['evt_1', 'evt_2']);
    expect(api(s.calls)[1]!.body.variables).toMatchObject({ after: 'c1' });
  });

  it('returns the signing secret with the endpoint, once', async () => {
    const s = server(() => ({
      json: { data: { createPlatformWebhookEndpoint: { signingSecret: 'whsec_1', endpoint: { id: 'e1', url: 'https://x.example/h' } } } },
    }));
    const endpoint = await client(s).platform.webhookEndpoints.create({ url: 'https://x.example/h', eventTypes: ['company.created'] } as never);
    expect(endpoint).toMatchObject({ id: 'e1', signingSecret: 'whsec_1' });
  });
});

describe('platform webhook signatures', () => {
  const finbaze = new Finbaze({ secretKey: 'fb_sk_test_abc', fetch: jest.fn() as never });
  const payload = JSON.stringify({ id: 'evt_1', object: 'event', type: 'company.created', apiVersion: '2026-11-01', created: 'x', occurredAt: 'x', sequence: '7', livemode: false, platform: 'p', company: null, request: null, data: {} });

  it('verifies a header with two signatures during a rotation, with either secret', async () => {
    const t = Math.floor(Date.now() / 1000);
    const a = (await finbaze.webhooks.generateTestHeader({ payload, secret: 'new-secret', timestamp: t })).split('v1=')[1];
    const b = (await finbaze.webhooks.generateTestHeader({ payload, secret: 'old-secret', timestamp: t })).split('v1=')[1];
    const header = `t=${t},v1=${a},v1=${b}`;
    expect((await finbaze.webhooks.constructPlatformEvent(payload, header, 'new-secret')).sequence).toBe('7');
    expect((await finbaze.webhooks.constructPlatformEvent(payload, header, 'old-secret')).type).toBe('company.created');
    expect((await finbaze.webhooks.constructPlatformEvent(payload, header, ['new-secret', 'old-secret'])).id).toBe('evt_1');
    await expect(finbaze.webhooks.constructPlatformEvent(payload, header, 'other')).rejects.toThrow(FinbazeSignatureVerificationError);
  });

  it('still verifies a single-signature header', async () => {
    const header = await finbaze.webhooks.generateTestHeader({ payload, secret: 's' });
    expect((await finbaze.webhooks.constructEvent(payload, header, 's')).id).toBe('evt_1');
  });
});

describe('reports, documents and exports', () => {
  it('asks for a report and a document with the company and params', async () => {
    const s = server((c) => {
      const q = String(c.body.query);
      if (q.includes('platformReport(')) return { json: { data: { platformReport: { type: 'profit_loss', currency: 'EUR', data: { totals: { revenueMinor: 1 } } } } } };
      return { json: { data: { companyDocument: { id: 'd1', downloadUrl: 'https://x/file' } } } };
    });
    const f = client(s);
    const report = await f.platform.reports.retrieve({ company: { externalId: 'acme' }, input: { type: 'profit_loss', from: '2026-01-01', to: '2026-12-31' } as never });
    expect((report.data as { totals: { revenueMinor: number } }).totals.revenueMinor).toBe(1);
    const doc = await f.platform.documents.retrieve({ company: { externalId: 'acme' }, kind: 'xaf' as never, params: { financialYear: 2026 } });
    expect(doc.downloadUrl).toBe('https://x/file');
    expect(api(s.calls)[1]!.body.variables).toMatchObject({ kind: 'xaf', params: { financialYear: 2026 } });
  });

  it('downloads a file and refuses a failed download', async () => {
    const f = client(server(() => undefined));
    const ok = jest.fn(async () => new Response(new Uint8Array([37, 80, 68, 70]), { status: 200 })) as unknown as typeof fetch;
    expect(Array.from(await f.platform.documents.download('https://x/f', { fetch: ok }))).toEqual([37, 80, 68, 70]);
    const bad = jest.fn(async () => new Response('', { status: 404 })) as unknown as typeof fetch;
    await expect(f.platform.documents.download('https://x/f', { fetch: bad })).rejects.toThrow(FinbazeError);
  });
});
