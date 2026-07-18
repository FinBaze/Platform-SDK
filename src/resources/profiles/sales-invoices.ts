import {
  SdkCloseSalesInvoiceDocument,
  SdkCreateSalesInvoiceDocument,
  SdkCreditSalesInvoiceDocument,
  SdkDeleteSalesInvoiceDocument,
  SdkReopenSalesInvoiceDocument,
  SdkSalesInvoiceDocument,
  SdkSalesInvoicesDocument,
  SdkUpdateSalesInvoiceDocument,
  type CreateSalesInvoiceInput,
  type SalesInvoiceFilter,
  type SalesInvoiceSort,
  type UpdateSalesInvoiceDto,
} from '../../generated/graphql.js';
import type { ListParams } from '../../pagination.js';
import { ProfileResource } from '../base.js';

export class SalesInvoicesResource extends ProfileResource {
  async list(
    profileId: string,
    params?: ListParams<SalesInvoiceFilter, SalesInvoiceSort>,
  ) {
    return this.listConnection({
      profileId,
      params,
      fetchPage: async ({ first, after, filter, sorting }) => {
        const data = await this.http.request(SdkSalesInvoicesDocument, {
          first,
          after,
          filter,
          sorting,
        });
        return data.salesInvoices;
      },
    });
  }

  async retrieve(id: string) {
    const data = await this.http.request(SdkSalesInvoiceDocument, { id });
    return data.salesInvoice;
  }

  async create(profileId: string, input: CreateSalesInvoiceInput) {
    const data = await this.http.request(SdkCreateSalesInvoiceDocument, {
      profileId,
      input,
    });
    return data.createOneSalesInvoice;
  }

  async update(id: string, update: UpdateSalesInvoiceDto) {
    const data = await this.http.request(SdkUpdateSalesInvoiceDocument, {
      input: { id, update },
    });
    return data.updateOneSalesInvoice;
  }

  async del(id: string) {
    const data = await this.http.request(SdkDeleteSalesInvoiceDocument, { id });
    return data.deleteOneSalesInvoice;
  }

  async close(id: string, send = true) {
    const data = await this.http.request(SdkCloseSalesInvoiceDocument, {
      id,
      send,
    });
    return data.closeSalesInvoice;
  }

  async reopen(id: string) {
    const data = await this.http.request(SdkReopenSalesInvoiceDocument, { id });
    return data.reopenSalesInvoice;
  }

  async credit(id: string, close = false) {
    const data = await this.http.request(SdkCreditSalesInvoiceDocument, {
      id,
      close,
    });
    return data.creditSalesInvoice;
  }
}
