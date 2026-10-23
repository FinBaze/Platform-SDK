import {
  SdkCancelPaymentRequestDocument,
  SdkCreatePaymentRequestFromBatchDocument,
  SdkCreateTaxPaymentRequestDocument,
  SdkPaymentRequestDocument,
  SdkPaymentRequestsDocument,
  SdkPlatformProvidersDocument,
  SdkProvidePaymentLinkDocument,
  SdkReportPaymentRequestStatusDocument,
  SdkReportTaxReservationDocument,
  SdkStepUpChallengeDocument,
  SdkTaxReservationAdviceDocument,
  SdkUpsertPlatformProviderDocument,
  type PaymentRequestStatus,
  type ProviderAction,
  type ProviderMode,
} from '../../generated/graphql.js';
import type { FinbazeHttpClient } from '../../http.js';
import { signStepUp, type SignStepUpParams } from '../../step-up.js';
import type { CompanyRef, CursorPage } from './data.js';

export type ProviderParams = {
  action: ProviderAction;
  /** `webhook`: FinBaze calls your endpoints; `embed`: your frontend answers through the embed bridge; `both`. */
  mode: ProviderMode;
  /** Per action: for `payments` the debtor account and limits, for `step_up` the JWKS (`jwksUrl` or `keys`) and `maxAgeSeconds`. */
  config: Record<string, unknown>;
  enabled?: boolean;
};

/** What you fulfil yourself: payments, payment links, tax reservation, step-up and camera. */
export class Providers {
  constructor(private readonly http: FinbazeHttpClient) {}

  async list() {
    return (await this.http.request(SdkPlatformProvidersDocument)).platformProviders;
  }

  /** Registering needs the matching `delegated.*` feature in your allowance. */
  async upsert(params: ProviderParams) {
    return (
      await this.http.request(SdkUpsertPlatformProviderDocument, {
        input: { ...params, enabled: params.enabled ?? true },
      })
    ).upsertPlatformProvider;
  }
}

export type PaymentRequestListParams = {
  company?: CompanyRef;
  status?: PaymentRequestStatus[];
  limit?: number;
  starting_after?: string;
};

/** FinBaze asks you to pay tax, suppliers or wages from your own bank integration; matching marks the request paid. */
export class PaymentRequests {
  constructor(private readonly http: FinbazeHttpClient) {}

  async list(params: PaymentRequestListParams = {}): Promise<CursorPage<PaymentRequestNode>> {
    const fetchPage = async (after?: string) => {
      const page = (
        await this.http.request(SdkPaymentRequestsDocument, {
          company: params.company,
          status: params.status,
          first: params.limit,
          after,
        })
      ).paymentRequests;
      return { data: page.items, hasMore: !!page.nextCursor, nextCursor: page.nextCursor ?? null };
    };
    const first = await fetchPage(params.starting_after);
    const each = async (handler: (item: PaymentRequestNode) => void | Promise<void>) => {
      let page = first;
      for (;;) {
        for (const item of page.data) await handler(item);
        if (!page.hasMore || !page.nextCursor) return;
        page = await fetchPage(page.nextCursor);
      }
    };
    return {
      ...first,
      autoPagingEach: each,
      autoPagingToArray: async (opts: { limit?: number } = {}) => {
        const out: PaymentRequestNode[] = [];
        await each((item) => {
          if (opts.limit === undefined || out.length < opts.limit) out.push(item);
        });
        return out;
      },
    };
  }

  async retrieve(id: string) {
    return (await this.http.request(SdkPaymentRequestDocument, { id })).paymentRequest;
  }

  /** A request for an accepted NL VAT or wage tax filing. Idempotent per filing. */
  async createForTaxFiling(company: CompanyRef, taxFilingId: string) {
    return (await this.http.request(SdkCreateTaxPaymentRequestDocument, { company, taxFilingId })).createTaxPaymentRequest;
  }

  async createFromBatch(company: CompanyRef, paymentBatchId: string) {
    return (await this.http.request(SdkCreatePaymentRequestFromBatchDocument, { company, paymentBatchId })).createPaymentRequestFromBatch;
  }

  /** Reports progress at your bank. `paid` is not accepted here: FinBaze marks a request paid when the matching transaction arrives. */
  async reportStatus(params: { paymentRequestId: string; status: Exclude<PaymentRequestStatus, 'paid'>; partnerReference?: string; failureReason?: string }) {
    return (await this.http.request(SdkReportPaymentRequestStatusDocument, { input: params })).reportPaymentRequestStatus;
  }

  async cancel(id: string) {
    return (await this.http.request(SdkCancelPaymentRequestDocument, { id })).cancelPaymentRequest;
  }
}

type PaymentRequestNode = Awaited<ReturnType<PaymentRequests['retrieve']>> & object;

/** Answer to `payment_link.requested`: the link FinBaze shows on the invoice, its email and its public page. */
export class PaymentLinks {
  constructor(private readonly http: FinbazeHttpClient) {}

  async provide(params: { requestId: string; url: string; expiresAt?: string | Date }) {
    return (
      await this.http.request(SdkProvidePaymentLinkDocument, {
        requestId: params.requestId,
        url: params.url,
        expiresAt: params.expiresAt instanceof Date ? params.expiresAt.toISOString() : params.expiresAt,
      })
    ).providePaymentLink;
  }
}

/** How much to set aside for tax, and what you actually set aside. */
export class TaxReservation {
  constructor(private readonly http: FinbazeHttpClient) {}

  async advice(company: CompanyRef) {
    return (await this.http.request(SdkTaxReservationAdviceDocument, { company })).taxReservationAdvice;
  }

  async report(params: { adviceId: string; reservedMinor: number; accountRef?: string }) {
    return (await this.http.request(SdkReportTaxReservationDocument, params)).reportTaxReservation;
  }
}

/** Confirmation of high-risk actions (filing, payment approval, bank detail changes) by your own user authentication. */
export class StepUp {
  constructor(private readonly http: FinbazeHttpClient) {}

  async challenge(id: string) {
    return (await this.http.request(SdkStepUpChallengeDocument, { id })).stepUpChallenge;
  }

  /** Signs the assertion; returns the value of the `FinBaze-Step-Up` header. Node only. */
  sign(params: SignStepUpParams): Promise<string> {
    return signStepUp(params);
  }
}
