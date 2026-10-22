import {
  SdkActivateFlowTemplateDocument,
  SdkAttachDataSourceDocument,
  SdkBankTransactionBookingsDocument,
  SdkCancelPlatformBulkJobDocument,
  SdkCompanyDocumentDocument,
  SdkCreatePlatformExportDestinationDocument,
  SdkCreatePlatformExportScheduleDocument,
  SdkCreatePlatformWebhookEndpointDocument,
  SdkCustomRecordDocument,
  SdkCustomRecordsDocument,
  SdkDataSourceDocument,
  SdkDataSourceFilesDocument,
  SdkDataSourcesDocument,
  SdkDefinePlatformRecordTypeDocument,
  SdkDeleteCustomRecordDocument,
  SdkDeletePlatformExportDestinationDocument,
  SdkDeletePlatformWebhookEndpointDocument,
  SdkDetachDataSourceDocument,
  SdkFeedHealthDocument,
  SdkFlowRunsDocument,
  SdkFlowTemplatesDocument,
  SdkIngestBankTransactionsDocument,
  SdkIngestWorkedHoursDocument,
  SdkPauseDataSourceAttachmentDocument,
  SdkPingPlatformWebhookEndpointDocument,
  SdkPlatformBulkJobDocument,
  SdkPlatformBulkJobsDocument,
  SdkPlatformEventCatalogDocument,
  SdkPlatformEventDocument,
  SdkPlatformEventsDocument,
  SdkPlatformExportDestinationsDocument,
  SdkPlatformExportRunDocument,
  SdkPlatformExportSchedulesDocument,
  SdkPlatformObjectByExternalIdDocument,
  SdkPlatformRecordTypesDocument,
  SdkPlatformReportDocument,
  SdkPlatformReportDocumentDocument,
  SdkPlatformWebhookDeliveriesDocument,
  SdkPlatformWebhookEndpointsDocument,
  SdkRegisterDataSourceDocument,
  SdkReplayPlatformWebhookDeliveriesDocument,
  SdkReplayPlatformWebhookDeliveryDocument,
  SdkReportBankBalancesDocument,
  SdkReportFeedWatermarkDocument,
  SdkRequestXafExportDocument,
  SdkResendPlatformEventDocument,
  SdkRetireDataSourceDocument,
  SdkRetireFlowTemplateDocument,
  SdkRetryFlowRunDocument,
  SdkRotatePlatformWebhookSecretDocument,
  SdkRunPlatformExportNowDocument,
  SdkSaveFlowTemplateDocument,
  SdkSetObjectMetadataDocument,
  SdkTestFlowTemplateDocument,
  SdkUpdateDataSourceDocument,
  SdkUpdatePlatformExportDestinationCredentialsDocument,
  SdkUpdatePlatformExportScheduleDocument,
  SdkUpdatePlatformWebhookEndpointDocument,
  SdkUpsertCostCenterDocument,
  SdkUpsertCustomRecordDocument,
  SdkUpsertEmployeeDocument,
  SdkUpsertEmploymentDocument,
  SdkUpsertFeedBankAccountDocument,
  SdkUpsertJournalEntryDocument,
  SdkUpsertProductDocument,
  SdkUpsertProjectDocument,
  SdkUpsertPurchaseInvoiceDocument,
  SdkUpsertRelationDocument,
  SdkUpsertSalesInvoiceDocument,
  type BankAccountFeedInput,
  type BankBalanceInput,
  type BankTransactionFeedInput,
  type CompanyDocumentKind,
  type CreateExportDestinationInput,
  type CreateExportScheduleInput,
  type CreatePlatformWebhookEndpointInput,
  type DefineRecordTypeInput,
  type PlatformDeliveryFilter,
  type PlatformEventFilter,
  type PlatformObjectType,
  type PlatformReportInput,
  type RegisterDataSourceInput,
  type ReportFormat,
  type UpdateDataSourceInput,
  type UpdateExportScheduleInput,
  type UpdatePlatformWebhookEndpointInput,
  type UpsertCostCenterInput,
  type UpsertCustomRecordInput,
  type UpsertEmployeeInput,
  type UpsertEmploymentInput,
  type UpsertJournalEntryInput,
  type UpsertProductInput,
  type UpsertProjectInput,
  type UpsertPurchaseInvoiceInput,
  type UpsertRelationInput,
  type UpsertSalesInvoiceInput,
  type WorkedHoursFeedInput,
} from '../../generated/graphql.js';
import { FinbazeError } from '../../errors.js';
import type { FinbazeHttpClient, RequestOptions } from '../../http.js';

/** A company: your own id (`{ externalId }`) or FinBaze's (`{ id }`). */
export type CompanyRef = { id: string; externalId?: never } | { externalId: string; id?: never };
/** An object of that company, by either id. */
export type ObjectRef = { id: string; externalId?: never } | { externalId: string; id?: never };

type Page<T> = { nodes: T[]; endCursor?: string | null; hasNextPage?: boolean; nextCursor?: string | null };

/** A page of the data API (`nodes` + cursor), with helpers to walk the rest. */
export type CursorPage<T> = {
  data: T[];
  hasMore: boolean;
  nextCursor: string | null;
  autoPagingEach(handler: (item: T) => void | Promise<void>): Promise<void>;
  autoPagingToArray(opts?: { limit?: number }): Promise<T[]>;
};

async function cursorPage<T>(fetchPage: (after: string | undefined) => Promise<Page<T>>, start?: string): Promise<CursorPage<T>> {
  const convert = (page: Page<T>) => ({
    data: page.nodes,
    hasMore: page.hasNextPage ?? Boolean(page.nextCursor),
    nextCursor: page.endCursor ?? page.nextCursor ?? null,
  });
  const first = convert(await fetchPage(start));
  const each = async (handler: (item: T) => void | Promise<void>) => {
    let page = first;
    for (;;) {
      for (const item of page.data) await handler(item);
      if (!page.hasMore || !page.nextCursor) return;
      page = convert(await fetchPage(page.nextCursor));
    }
  };
  return {
    ...first,
    autoPagingEach: each,
    async autoPagingToArray(opts) {
      const out: T[] = [];
      await each((item) => {
        if (opts?.limit === undefined || out.length < opts.limit) out.push(item);
      });
      return out;
    },
  };
}

// --------------------------------------------------------------------- upserts

type Upsert<I> = (input: I, options?: RequestOptions) => Promise<{ status: 'created' | 'updated' | 'unchanged' | 'deleted'; id: string; externalId: string }>;

/**
 * Create or update one object by your own id. `unchanged` means the same data was already stored and
 * nothing was written. Needs a server key and the topic scope of the object.
 */
export class Upserts {
  readonly relation: Upsert<UpsertRelationInput>;
  readonly product: Upsert<UpsertProductInput>;
  readonly project: Upsert<UpsertProjectInput>;
  readonly costCenter: Upsert<UpsertCostCenterInput>;
  readonly salesInvoice: Upsert<UpsertSalesInvoiceInput>;
  readonly purchaseInvoice: Upsert<UpsertPurchaseInvoiceInput>;
  readonly journalEntry: Upsert<UpsertJournalEntryInput>;
  readonly employee: Upsert<UpsertEmployeeInput>;
  readonly employment: Upsert<UpsertEmploymentInput>;

  constructor(private readonly http: FinbazeHttpClient) {
    const make = <I>(document: unknown, field: string): Upsert<I> =>
      (async (input: I, options?: RequestOptions) => {
        const data = (await this.http.request(document as never, { input } as never, undefined, options)) as Record<string, never>;
        return data[field];
      }) as Upsert<I>;
    this.relation = make(SdkUpsertRelationDocument, 'upsertRelation');
    this.product = make(SdkUpsertProductDocument, 'upsertProduct');
    this.project = make(SdkUpsertProjectDocument, 'upsertProject');
    this.costCenter = make(SdkUpsertCostCenterDocument, 'upsertCostCenter');
    this.salesInvoice = make(SdkUpsertSalesInvoiceDocument, 'upsertSalesInvoice');
    this.purchaseInvoice = make(SdkUpsertPurchaseInvoiceDocument, 'upsertPurchaseInvoice');
    this.journalEntry = make(SdkUpsertJournalEntryDocument, 'upsertJournalEntry');
    this.employee = make(SdkUpsertEmployeeDocument, 'upsertEmployee');
    this.employment = make(SdkUpsertEmploymentDocument, 'upsertEmployment');
  }

  /** Merge-patch an object's metadata (`null` removes a key). Also allowed on finalised objects. */
  async setMetadata(type: PlatformObjectType, id: string, metadata: Record<string, string | null>, options?: RequestOptions) {
    const data = await this.http.request(SdkSetObjectMetadataDocument, { type, id, metadata }, undefined, options);
    return data.setObjectMetadata;
  }

  /** Find an object by your id, deleted ones included. `null` when there is none. */
  async lookup(company: CompanyRef, type: PlatformObjectType, externalId: string) {
    const data = await this.http.request(SdkPlatformObjectByExternalIdDocument, { company, type, externalId });
    return data.platformObjectByExternalId ?? null;
  }
}

// ------------------------------------------------------------------- bulk jobs

const FINISHED = new Set(['completed', 'completed_with_errors', 'failed', 'cancelled']);

export type BulkCreateParams = {
  /** What the lines are: `relations`, `products`, `sales_invoices`, … */
  object: string;
  /** Lines as objects (sent as NDJSON), or an NDJSON string/bytes you built. */
  lines: unknown[] | string | Uint8Array;
  /** The company every line without a `company` belongs to. */
  company?: CompanyRef;
  mode?: 'upsert' | 'create_only';
  dryRun?: boolean;
  emitEvents?: boolean;
  /** Required by the API; generated when left out. Reuse it to retry the same upload. */
  idempotencyKey?: string;
  signal?: AbortSignal;
};

export type BulkJobReceipt = {
  id: string;
  object: 'bulk_job';
  objectType: string;
  status: string;
  mode: string;
  dryRun: boolean;
  emitEvents: boolean;
  lineCount: number;
  receivedBytes: number;
  created: string;
};

function newKey(): string {
  const c = (globalThis as { crypto?: { randomUUID?: () => string } }).crypto;
  return c?.randomUUID ? c.randomUUID() : `${Date.now().toString(16)}-${Math.random().toString(16).slice(2)}`;
}

/** NDJSON uploads of many objects, applied in the background. */
export class Bulk {
  constructor(private readonly http: FinbazeHttpClient) {}

  /** Upload lines; answered with the job (HTTP 202). Follow it with `retrieve` or `wait`. */
  async create(params: BulkCreateParams): Promise<BulkJobReceipt> {
    const body =
      typeof params.lines === 'string' || params.lines instanceof Uint8Array
        ? params.lines
        : `${params.lines.map((line) => JSON.stringify(line)).join('\n')}\n`;
    const company = params.company ? ('id' in params.company && params.company.id ? params.company.id : `ext:${params.company.externalId}`) : undefined;
    const { data } = await this.http.rest<BulkJobReceipt>('POST', '/platform/bulk-jobs', {
      query: { object: params.object, mode: params.mode, dryRun: params.dryRun, emitEvents: params.emitEvents },
      headers: {
        'Content-Type': 'application/x-ndjson',
        'Idempotency-Key': params.idempotencyKey ?? newKey(),
        ...(company ? { 'FinBaze-Company': company } : {}),
      },
      body,
      signal: params.signal,
    });
    return data;
  }

  /** The job with a page of its per-line results. `status` narrows the results (for example `['failed']`). */
  async retrieve(id: string, params: { first?: number; after?: string; status?: string[] } = {}) {
    const data = await this.http.request(SdkPlatformBulkJobDocument, { id, first: params.first, after: params.after, status: params.status });
    return data.platformBulkJob ?? null;
  }

  list(params: { limit?: number; starting_after?: string; status?: Array<'receiving' | 'queued' | 'running' | 'completed' | 'completed_with_errors' | 'failed' | 'cancelled'> } = {}) {
    return cursorPage(async (after) => {
      const data = await this.http.request(SdkPlatformBulkJobsDocument, { first: params.limit, after, status: params.status as never });
      return data.platformBulkJobs as unknown as Page<NonNullable<Awaited<ReturnType<Bulk['retrieve']>>>>;
    }, params.starting_after);
  }

  async cancel(id: string) {
    const data = await this.http.request(SdkCancelPlatformBulkJobDocument, { id });
    return data.cancelPlatformBulkJob;
  }

  /** Polls until the job is finished. Throws on timeout (default 10 minutes). */
  async wait(id: string, opts: { intervalMs?: number; timeoutMs?: number; signal?: AbortSignal } = {}) {
    const deadline = Date.now() + (opts.timeoutMs ?? 600_000);
    for (;;) {
      const job = await this.retrieve(id, { first: 1 });
      if (!job) throw new FinbazeError(`Bulk job ${id} not found.`);
      if (FINISHED.has(job.status)) return job;
      if (Date.now() > deadline || opts.signal?.aborted) throw new FinbazeError(`Bulk job ${id} did not finish in time (${job.status}).`);
      await new Promise((r) => setTimeout(r, opts.intervalMs ?? 2_000));
    }
  }
}

// ---------------------------------------------------------------- data sources

export type StatementFormat = 'camt053' | 'camt052' | 'mt940';

class StatementFiles {
  constructor(private readonly http: FinbazeHttpClient) {}

  /** Upload a statement file (camt.053, camt.052 or MT940) for one source. One file may cover many companies. */
  async upload(source: string, params: { format: StatementFormat; body: string | Uint8Array; filename?: string; signal?: AbortSignal }) {
    const { data } = await this.http.rest<{ id: string; status: string; sha256: string }>('POST', `/platform/data-sources/${encodeURIComponent(source)}/files`, {
      query: { format: params.format },
      headers: {
        'Content-Type': params.format === 'mt940' ? 'text/plain' : 'application/xml',
        ...(params.filename ? { 'X-Filename': params.filename } : {}),
      },
      body: params.body,
      signal: params.signal,
    });
    return data;
  }

  list(source: string, params: { limit?: number; starting_after?: string } = {}) {
    return cursorPage(async (after) => {
      const data = await this.http.request(SdkDataSourceFilesDocument, { key: source, first: params.limit, after });
      return data.dataSourceFiles;
    }, params.starting_after);
  }
}

/** Sources your feeds are registered as, and their attachment to companies. */
export class DataSources {
  readonly files: StatementFiles;

  constructor(private readonly http: FinbazeHttpClient) {
    this.files = new StatementFiles(http);
  }

  async register(input: RegisterDataSourceInput, options?: RequestOptions) {
    return (await this.http.request(SdkRegisterDataSourceDocument, { input }, undefined, options)).registerDataSource;
  }

  async update(key: string, input: UpdateDataSourceInput, options?: RequestOptions) {
    return (await this.http.request(SdkUpdateDataSourceDocument, { key, input }, undefined, options)).updateDataSource;
  }

  async retire(key: string) {
    return (await this.http.request(SdkRetireDataSourceDocument, { key })).retireDataSource;
  }

  async list() {
    return (await this.http.request(SdkDataSourcesDocument)).dataSources;
  }

  async retrieve(key: string) {
    return (await this.http.request(SdkDataSourceDocument, { key })).dataSource ?? null;
  }

  async attach(key: string, company: CompanyRef, params: { backfillFrom?: string } = {}) {
    return (await this.http.request(SdkAttachDataSourceDocument, { key, company, backfillFrom: params.backfillFrom })).attachDataSource;
  }

  async pause(key: string, company: CompanyRef) {
    return (await this.http.request(SdkPauseDataSourceAttachmentDocument, { key, company })).pauseDataSourceAttachment;
  }

  async detach(key: string, company: CompanyRef) {
    return (await this.http.request(SdkDetachDataSourceDocument, { key, company })).detachDataSource;
  }

  /** Feed health of your fed accounts. */
  health(params: { status?: Array<'healthy' | 'delayed' | 'gap' | 'balance_mismatch' | 'stopped'>; limit?: number; starting_after?: string } = {}) {
    return cursorPage(async (after) => {
      const data = await this.http.request(SdkFeedHealthDocument, { status: params.status as never, first: params.limit, after });
      return data.feedHealth;
    }, params.starting_after);
  }
}

/** Deliver bank data for a company into its books. Booked transactions only; a correction is a reversal. */
export class BankFeed {
  constructor(private readonly http: FinbazeHttpClient) {}

  async upsertAccount(params: { source: string; company: CompanyRef; account: BankAccountFeedInput }, options?: RequestOptions) {
    return (await this.http.request(SdkUpsertFeedBankAccountDocument, params, undefined, options)).upsertFeedBankAccount;
  }

  /** At most 500 per call. One result per transaction: `created`, `unchanged`, `skipped` (pending) or `failed`. */
  async ingestTransactions(
    params: { source: string; company: CompanyRef; account: string; transactions: BankTransactionFeedInput[] },
    options?: RequestOptions,
  ) {
    return (await this.http.request(SdkIngestBankTransactionsDocument, params, undefined, options)).ingestBankTransactions;
  }

  async reportBalances(params: { source: string; company: CompanyRef; account: string; balances: BankBalanceInput[] }, options?: RequestOptions) {
    return (await this.http.request(SdkReportBankBalancesDocument, params, undefined, options)).reportBankBalances;
  }

  /** "Everything up to this date has been delivered." Also the heartbeat of a quiet account. */
  async reportWatermark(params: { source: string; company: CompanyRef; account?: string; completeThrough: string }) {
    return (await this.http.request(SdkReportFeedWatermarkDocument, params)).reportFeedWatermark;
  }

  async ingestWorkedHours(params: { source: string; company: CompanyRef; entries: WorkedHoursFeedInput[] }, options?: RequestOptions) {
    return (await this.http.request(SdkIngestWorkedHoursDocument, params, undefined, options)).ingestWorkedHours;
  }
}

/** What happened to your bank transactions in the books. At most 100 ids per call. */
export class BankTransactions {
  constructor(private readonly http: FinbazeHttpClient) {}

  async bookings(params: { company: CompanyRef; externalIds: string[] }) {
    return (await this.http.request(SdkBankTransactionBookingsDocument, params)).bankTransactionBookings;
  }
}

// ----------------------------------------------------------- records and flows

export class Records {
  readonly types: RecordTypes;

  constructor(private readonly http: FinbazeHttpClient) {
    this.types = new RecordTypes(http);
  }

  async upsert(input: UpsertCustomRecordInput, options?: RequestOptions) {
    return (await this.http.request(SdkUpsertCustomRecordDocument, { input }, undefined, options)).upsertCustomRecord;
  }

  /** Only a record without bookings can be deleted. */
  async delete(params: { company: CompanyRef; type: string; externalId: string }) {
    return (await this.http.request(SdkDeleteCustomRecordDocument, params)).deleteCustomRecord;
  }

  async retrieve(params: { company: CompanyRef; type: string; externalId: string }) {
    return (await this.http.request(SdkCustomRecordDocument, params)).customRecord ?? null;
  }

  list(params: { company: CompanyRef; type: string; status?: string[]; limit?: number; starting_after?: string }) {
    return cursorPage(async (after) => {
      const data = await this.http.request(SdkCustomRecordsDocument, {
        company: params.company,
        type: params.type,
        status: params.status,
        first: params.limit,
        after,
      });
      return data.customRecords;
    }, params.starting_after);
  }
}

class RecordTypes {
  constructor(private readonly http: FinbazeHttpClient) {}

  /** A change to schema or states creates a new version; an identical call returns the current one. */
  async define(input: DefineRecordTypeInput) {
    return (await this.http.request(SdkDefinePlatformRecordTypeDocument, { input })).definePlatformRecordType;
  }

  async list() {
    return (await this.http.request(SdkPlatformRecordTypesDocument)).platformRecordTypes;
  }
}

export class FlowTemplates {
  constructor(private readonly http: FinbazeHttpClient) {}

  async list(key?: string) {
    return (await this.http.request(SdkFlowTemplatesDocument, { key })).flowTemplates;
  }

  /** Saves a draft (a new version when the source changed). */
  async save(params: { source: string; format: 'yaml' | 'json' }) {
    return (await this.http.request(SdkSaveFlowTemplateDocument, { source: params.source, format: params.format as never })).saveFlowTemplate;
  }

  async activate(key: string, version: number) {
    return (await this.http.request(SdkActivateFlowTemplateDocument, { key, version })).activateFlowTemplate;
  }

  async retire(key: string) {
    return (await this.http.request(SdkRetireFlowTemplateDocument, { key })).retireFlowTemplate;
  }

  /** Validates the template and plans what it would book for sample records. Writes nothing. */
  async test(params: { source: string; format: 'yaml' | 'json'; records: Array<Record<string, unknown>>; company?: CompanyRef }) {
    return (
      await this.http.request(SdkTestFlowTemplateDocument, {
        source: params.source,
        format: params.format as never,
        records: params.records,
        company: params.company,
      })
    ).testFlowTemplate;
  }

  runs(params: { status?: string[]; limit?: number; starting_after?: string } = {}) {
    return cursorPage(async (after) => {
      const data = await this.http.request(SdkFlowRunsDocument, { status: params.status, first: params.limit, after });
      return data.flowRuns;
    }, params.starting_after);
  }

  async retryRun(id: string) {
    return (await this.http.request(SdkRetryFlowRunDocument, { id })).retryFlowRun;
  }
}

// ------------------------------------------------------------ events, webhooks

export class Events {
  constructor(private readonly http: FinbazeHttpClient) {}

  async catalog() {
    return (await this.http.request(SdkPlatformEventCatalogDocument)).platformEventCatalog;
  }

  async retrieve(id: string) {
    return (await this.http.request(SdkPlatformEventDocument, { id })).platformEvent ?? null;
  }

  /** In order. Keep the last `sequence` and pass it as `starting_after` to catch up after downtime. */
  list(params: { limit?: number; starting_after?: string; filter?: PlatformEventFilter } = {}) {
    return cursorPage(async (after) => {
      const data = await this.http.request(SdkPlatformEventsDocument, { filter: params.filter, after, first: params.limit });
      return data.platformEvents;
    }, params.starting_after);
  }
}

export class WebhookEndpoints {
  constructor(private readonly http: FinbazeHttpClient) {}

  /** The `signingSecret` is shown once. */
  async create(input: CreatePlatformWebhookEndpointInput, options?: RequestOptions) {
    const data = await this.http.request(SdkCreatePlatformWebhookEndpointDocument, { input }, undefined, options);
    return { ...data.createPlatformWebhookEndpoint.endpoint, signingSecret: data.createPlatformWebhookEndpoint.signingSecret };
  }

  async list() {
    return (await this.http.request(SdkPlatformWebhookEndpointsDocument)).platformWebhookEndpoints;
  }

  async update(id: string, input: UpdatePlatformWebhookEndpointInput) {
    return (await this.http.request(SdkUpdatePlatformWebhookEndpointDocument, { id, input })).updatePlatformWebhookEndpoint;
  }

  /** A new secret; the old one keeps signing for `keepPreviousHours` so you can switch without a gap. */
  async rotateSecret(id: string, params: { keepPreviousHours?: number } = {}) {
    const data = await this.http.request(SdkRotatePlatformWebhookSecretDocument, { id, keepPreviousHours: params.keepPreviousHours });
    return { ...data.rotatePlatformWebhookSecret.endpoint, signingSecret: data.rotatePlatformWebhookSecret.signingSecret };
  }

  async delete(id: string) {
    return (await this.http.request(SdkDeletePlatformWebhookEndpointDocument, { id })).deletePlatformWebhookEndpoint;
  }

  /** Sends a test event. */
  async ping(id: string) {
    return (await this.http.request(SdkPingPlatformWebhookEndpointDocument, { id })).pingPlatformWebhookEndpoint;
  }

  deliveries(endpointId: string, params: { limit?: number; starting_after?: string; filter?: PlatformDeliveryFilter } = {}) {
    return cursorPage(async (after) => {
      const data = await this.http.request(SdkPlatformWebhookDeliveriesDocument, { endpointId, filter: params.filter, after, first: params.limit });
      return data.platformWebhookDeliveries;
    }, params.starting_after);
  }

  async replay(deliveryId: string) {
    return (await this.http.request(SdkReplayPlatformWebhookDeliveryDocument, { id: deliveryId })).replayPlatformWebhookDelivery;
  }

  /** Replays every delivery matching the filter (rate limited). */
  async replayMany(endpointId: string, filter: PlatformDeliveryFilter) {
    return (await this.http.request(SdkReplayPlatformWebhookDeliveriesDocument, { endpointId, filter })).replayPlatformWebhookDeliveries;
  }

  /** Sends an event to an endpoint again, whatever its subscriptions. */
  async resend(eventId: string, endpointId: string) {
    return (await this.http.request(SdkResendPlatformEventDocument, { eventId, endpointId })).resendPlatformEvent;
  }
}

// ----------------------------------------------------- reports, documents, exports

export class Reports {
  constructor(private readonly http: FinbazeHttpClient) {}

  /** Amounts are minor units; `data` depends on `input.type`. */
  async retrieve(params: { company: CompanyRef; input: PlatformReportInput }) {
    return (await this.http.request(SdkPlatformReportDocument, { company: params.company, input: params.input })).platformReport;
  }

  /** The report as a file (`XLSX`, or `PDF` for the reports that have one). */
  async document(params: { company: CompanyRef; input: PlatformReportInput; format: ReportFormat }) {
    return (await this.http.request(SdkPlatformReportDocumentDocument, params)).platformReportDocument;
  }
}

export class Documents {
  constructor(private readonly http: FinbazeHttpClient) {}

  /** Renders a document; `downloadUrl` is valid for 15 minutes. */
  async retrieve(params: { company: CompanyRef; kind: CompanyDocumentKind; object?: ObjectRef; params?: Record<string, unknown> }) {
    return (await this.http.request(SdkCompanyDocumentDocument, { company: params.company, kind: params.kind, object: params.object, params: params.params })).companyDocument;
  }

  /** Downloads the file behind a link from `retrieve`. */
  async download(downloadUrl: string, opts: { fetch?: typeof fetch } = {}): Promise<Uint8Array> {
    const f = opts.fetch ?? globalThis.fetch;
    const response = await f(downloadUrl);
    if (!response.ok) throw new FinbazeError(`The download failed (HTTP ${response.status}).`);
    return new Uint8Array(await response.arrayBuffer());
  }
}

export class Exports {
  constructor(private readonly http: FinbazeHttpClient) {}

  /** An audit file (XAF 3.2) in the background; follow it with `run`. */
  async requestXaf(params: { company: CompanyRef; financialYear?: number; from?: string; to?: string }) {
    return (await this.http.request(SdkRequestXafExportDocument, params)).requestXafExport;
  }

  async run(id: string) {
    return (await this.http.request(SdkPlatformExportRunDocument, { id })).platformExportRun ?? null;
  }

  readonly destinations = {
    list: async () => (await this.http.request(SdkPlatformExportDestinationsDocument)).platformExportDestinations,
    /** Verified by writing a marker object; credentials are encrypted and never returned. */
    create: async (input: CreateExportDestinationInput) =>
      (await this.http.request(SdkCreatePlatformExportDestinationDocument, { input })).createPlatformExportDestination,
    updateCredentials: async (key: string, credentials: Record<string, unknown>, params: { credentialsExpireAt?: string } = {}) =>
      (await this.http.request(SdkUpdatePlatformExportDestinationCredentialsDocument, { key, credentials, credentialsExpireAt: params.credentialsExpireAt }))
        .updatePlatformExportDestinationCredentials,
    delete: async (key: string) => (await this.http.request(SdkDeletePlatformExportDestinationDocument, { key })).deletePlatformExportDestination,
  };

  readonly schedules = {
    list: async () => (await this.http.request(SdkPlatformExportSchedulesDocument)).platformExportSchedules,
    create: async (input: CreateExportScheduleInput) => (await this.http.request(SdkCreatePlatformExportScheduleDocument, { input })).createPlatformExportSchedule,
    update: async (key: string, input: UpdateExportScheduleInput) =>
      (await this.http.request(SdkUpdatePlatformExportScheduleDocument, { key, input })).updatePlatformExportSchedule,
    /** Queues a run now. */
    runNow: async (key: string) => (await this.http.request(SdkRunPlatformExportNowDocument, { key })).runPlatformExportNow,
  };
}

