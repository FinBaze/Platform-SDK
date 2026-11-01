import {
  SdkActionItemsDocument,
  SdkBankAccountDocument,
  SdkBankAccountsDocument,
  SdkBookingSummariesDocument,
  SdkDocumentDocument,
  SdkDocumentsDocument,
  SdkTaxCalendarDocument,
  SdkTaxFilingPaymentSummaryDocument,
  SdkTransactionDocument,
  SdkTransactionsDocument,
  SdkUploadDocumentsDocument,
  SdkUploadReceiptForTransactionDocument,
  type MonetaryAccountFilter,
  type MonetaryAccountPaymentFilter,
  type MonetaryAccountPaymentSort,
  type ProcessDocumentFilter,
  type ProcessDocumentSort,
} from '../../generated/graphql.js';
import type { FinbazeHttpClient, RequestOptions } from '../../http.js';
import { toFinbazeList, withAutoPaging, type ListParams } from '../../pagination.js';
import { ProfilesResource } from '../profiles/index.js';

type Connection<T> = Parameters<typeof toFinbazeList<T>>[0];

async function paged<T>(limit: number, startingAfter: string | undefined, fetchPage: (after: string | undefined) => Promise<Connection<T>>) {
  const page = async (cursor?: string) => toFinbazeList(await fetchPage(cursor));
  void limit;
  return withAutoPaging(await page(startingAfter), (cursor) => page(cursor));
}

function toDataUrl(file: Blob | Uint8Array | ArrayBuffer, contentType: string): Promise<string> {
  const toBase64 = (bytes: Uint8Array): string => {
    let binary = '';
    for (let i = 0; i < bytes.length; i += 0x8000) binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
    return btoa(binary);
  };
  if (typeof Blob !== 'undefined' && file instanceof Blob) {
    return file.arrayBuffer().then((buffer) => `data:${contentType};base64,${toBase64(new Uint8Array(buffer))}`);
  }
  const bytes = file instanceof Uint8Array ? file : new Uint8Array(file as ArrayBuffer);
  return Promise.resolve(`data:${contentType};base64,${toBase64(bytes)}`);
}

export type BookingLookup = { transactionId: string } | { bankAccountId: string; externalId: string };

class BankAccounts {
  constructor(private readonly http: FinbazeHttpClient) {}

  list(companyId: string, params?: ListParams<MonetaryAccountFilter>) {
    const limit = params?.limit ?? 25;
    return paged(limit, params?.starting_after, async (after) => {
      const data = await this.http.request(SdkBankAccountsDocument, {
        first: limit,
        after,
        filter: { ...(params?.filter ?? {}), profileId: { eq: companyId } },
      });
      return data.monetaryAccounts;
    });
  }

  async retrieve(id: string) {
    const data = await this.http.request(SdkBankAccountDocument, { id });
    return data.monetaryAccount;
  }
}

class Transactions {
  constructor(private readonly http: FinbazeHttpClient) {}

  /** Newest first. `bankAccountId` narrows to one account, `processed` to booked or not. */
  list(companyId: string, params?: ListParams<MonetaryAccountPaymentFilter, MonetaryAccountPaymentSort> & { bankAccountId?: string; processed?: boolean }) {
    const limit = params?.limit ?? 25;
    const filter: MonetaryAccountPaymentFilter = {
      ...(params?.filter ?? {}),
      monetaryAccount: { profileId: { eq: companyId } },
      ...(params?.bankAccountId ? { monetaryAccountId: { eq: params.bankAccountId } } : {}),
      ...(params?.processed !== undefined ? { processed: { is: params.processed } } : {}),
    };
    return paged(limit, params?.starting_after, async (after) => {
      const data = await this.http.request(SdkTransactionsDocument, {
        first: limit,
        after,
        filter,
        sorting: params?.sorting ?? [{ field: 'date', direction: 'DESC' } as unknown as MonetaryAccountPaymentSort],
      });
      return data.monetaryAccountPayments;
    });
  }

  async retrieve(id: string) {
    const data = await this.http.request(SdkTransactionDocument, { id });
    return data.monetaryAccountPayment;
  }

  /** By the id you pushed the transaction with. */
  async retrieveByExternalId(input: { bankAccountId: string; externalId: string }) {
    const data = await this.http.request(SdkTransactionsDocument, {
      first: 1,
      filter: { monetaryAccountId: { eq: input.bankAccountId }, externalId: { eq: input.externalId } },
    });
    return data.monetaryAccountPayments.edges[0]?.node ?? null;
  }

  /** How up to 100 transactions are booked; `null` where a lookup matches nothing. */
  async bookings(companyId: string, lookups: BookingLookup[]) {
    const data = await this.http.request(SdkBookingSummariesDocument, { profileId: companyId, lookups });
    return data.bookingSummaries;
  }

  /** Attach a receipt to a bank transaction. */
  async attachReceipt(
    transactionId: string,
    input: { file: Blob | Uint8Array | ArrayBuffer; filename: string; contentType: string; contextText?: string },
    options?: RequestOptions,
  ) {
    const data = await this.http.request(
      SdkUploadReceiptForTransactionDocument,
      {
        monetaryAccountPaymentId: transactionId,
        file: { filename: input.filename, mimeType: input.contentType, dataUrl: await toDataUrl(input.file, input.contentType) },
        contextText: input.contextText,
      },
      undefined,
      options,
    );
    return data.uploadProcessDocumentForPayment;
  }
}

class Documents {
  constructor(private readonly http: FinbazeHttpClient) {}

  list(companyId: string, params?: ListParams<ProcessDocumentFilter, ProcessDocumentSort>) {
    const limit = params?.limit ?? 25;
    return paged(limit, params?.starting_after, async (after) => {
      const data = await this.http.request(SdkDocumentsDocument, {
        first: limit,
        after,
        filter: { ...(params?.filter ?? {}), profileId: { eq: companyId } },
        sorting: params?.sorting,
      });
      return data.processDocuments;
    });
  }

  async retrieve(id: string) {
    const data = await this.http.request(SdkDocumentDocument, { id });
    return data.processDocument;
  }

  /** Upload one purchase document (PDF or image). Pass `transactionId` to attach it as that transaction's receipt instead. */
  async upload(
    companyId: string,
    input: { file: Blob | Uint8Array | ArrayBuffer; filename: string; contentType: string; transactionId?: string },
    options?: RequestOptions,
  ) {
    const file = { filename: input.filename, mimeType: input.contentType, dataUrl: await toDataUrl(input.file, input.contentType) };
    if (input.transactionId) {
      const data = await this.http.request(SdkUploadReceiptForTransactionDocument, { monetaryAccountPaymentId: input.transactionId, file }, undefined, options);
      return data.uploadProcessDocumentForPayment.processDocument;
    }
    const data = await this.http.request(SdkUploadDocumentsDocument, { profileId: companyId, files: [file] }, undefined, options);
    return data.uploadProcessDocuments[0];
  }
}

class Filings {
  constructor(private readonly http: FinbazeHttpClient) {}

  /** What is owed and paid on one filing, in minor units. */
  async paymentSummary(filingId: string) {
    const data = await this.http.request(SdkTaxFilingPaymentSummaryDocument, { filingId });
    return data.taxFilingPaymentSummary;
  }
}

class TaxCalendar {
  constructor(private readonly http: FinbazeHttpClient) {}

  /** The year's obligations and their periods, as the FinBaze tax page shows them. */
  async retrieve(companyId: string, params: { year: number }) {
    const data = await this.http.request(SdkTaxCalendarDocument, { profileId: companyId, year: params.year });
    return data.taxFilingOverview;
  }
}

class ActionItems {
  constructor(private readonly http: FinbazeHttpClient) {}

  async list(companyId: string) {
    const data = await this.http.request(SdkActionItemsDocument, { profileId: companyId });
    const { priorityQueue, ...counts } = data.profileTodoSummary;
    return { ...counts, items: priorityQueue.items };
  }
}

/** Company-scoped resources. Extends the 0.x `profiles` namespace, which stays as an alias. */
export class CompaniesResource extends ProfilesResource {
  readonly bankAccounts: BankAccounts;
  readonly transactions: Transactions;
  readonly documents: Documents;
  readonly filings: Filings;
  readonly taxCalendar: TaxCalendar;
  readonly actionItems: ActionItems;

  constructor(http: FinbazeHttpClient) {
    super(http);
    this.bankAccounts = new BankAccounts(http);
    this.transactions = new Transactions(http);
    this.documents = new Documents(http);
    this.filings = new Filings(http);
    this.taxCalendar = new TaxCalendar(http);
    this.actionItems = new ActionItems(http);
  }
}
