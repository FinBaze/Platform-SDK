import {
  SdkAcceptCompanyTransferDocument,
  SdkCancelCompanyTransferDocument,
  SdkCompanyTransferStatementDocument,
  SdkCompanyTransfersDocument,
  SdkPlatformAuditLogsDocument,
  SdkRequestAuditLogExportDocument,
  type AuditActorKind,
  type CompanyTransferTarget,
} from '../../generated/graphql.js';
import type { FinbazeHttpClient, RequestOptions } from '../../http.js';

/**
 * Moving a company away from your platform (Wave 5.4). The company's admin consents in the embedded
 * `company-transfer` element; your backend only reads, cancels, and (on the receiving side) accepts.
 */
export class Transfers {
  constructor(private readonly http: FinbazeHttpClient) {}

  /** The text the company admin reads, and the hash to send back when creating the transfer. */
  async statement(companyId: string, target: CompanyTransferTarget, locale?: string) {
    const data = await this.http.request(SdkCompanyTransferStatementDocument, { companyId, target, locale });
    return data.companyTransferStatement;
  }

  /** The transfers of one company, newest first. */
  async list(companyId: string) {
    const data = await this.http.request(SdkCompanyTransfersDocument, { companyId });
    return data.companyTransfers;
  }

  /** Cancels a pending transfer; its code stops working. */
  async cancel(transferId: string, options?: RequestOptions) {
    const data = await this.http.request(SdkCancelCompanyTransferDocument, { transferId }, undefined, options);
    return data.cancelCompanyTransfer;
  }

  /**
   * Receiving platform: turn the code the sending platform handed over into a company on your platform.
   * `externalId` is your own id for it. A code works once and expires; wrong codes all fail the same way.
   */
  async accept(code: string, externalId?: string, options?: RequestOptions) {
    const data = await this.http.request(SdkAcceptCompanyTransferDocument, { code, externalId }, undefined, options);
    return data.acceptCompanyTransfer;
  }
}

export type AuditLogFilter = {
  companyId?: string;
  platformUserId?: string;
  actorKinds?: AuditActorKind[];
  actions?: string[];
  from?: string;
  to?: string;
};

/** What happened to your companies, with who did it and from where. Needs the `audit:read` scope and an admin role. */
export class AuditLogs {
  constructor(private readonly http: FinbazeHttpClient) {}

  /** One page, newest first. Pass `nextCursor` back as `starting_after` for the next. */
  async list(params: { filter?: AuditLogFilter; limit?: number; starting_after?: string } = {}) {
    const data = await this.http.request(SdkPlatformAuditLogsDocument, {
      filter: params.filter,
      first: params.limit ?? 100,
      after: params.starting_after,
    });
    return { data: data.platformAuditLogs.edges, nextCursor: data.platformAuditLogs.nextCursor ?? null, hasMore: Boolean(data.platformAuditLogs.nextCursor) };
  }

  /** Every entry matching the filter, page by page. */
  async *iterate(filter?: AuditLogFilter, limit = 100) {
    let after: string | undefined;
    for (;;) {
      const page = await this.list({ filter, limit, starting_after: after });
      yield* page.data;
      if (!page.nextCursor) return;
      after = page.nextCursor;
    }
  }

  /** Starts an export job; the NDJSON file shows up on `platform.exports`. */
  async export(filter?: AuditLogFilter) {
    const data = await this.http.request(SdkRequestAuditLogExportDocument, { filter });
    return data.requestAuditLogExport;
  }
}
