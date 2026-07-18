import {
  SdkConfirmPurchaseInvoiceDocument,
  SdkCreatePurchaseInvoiceDocument,
  SdkDeletePurchaseInvoiceDocument,
  SdkProcessPurchaseInvoiceDocument,
  SdkPurchaseInvoiceDocument,
  SdkPurchaseInvoicesDocument,
  SdkUpdatePurchaseInvoiceDocument,
  type CreatePurchaseInvoiceInput,
  type PurchaseInvoiceFilter,
  type PurchaseInvoiceSort,
  type UpdatePurchaseInvoiceDto,
} from '../../generated/graphql.js';
import type { ListParams } from '../../pagination.js';
import { ProfileResource } from '../base.js';

export class PurchaseInvoicesResource extends ProfileResource {
  async list(
    profileId: string,
    params?: ListParams<PurchaseInvoiceFilter, PurchaseInvoiceSort>,
  ) {
    return this.listConnection({
      profileId,
      params,
      fetchPage: async ({ first, after, filter, sorting }) => {
        const data = await this.http.request(SdkPurchaseInvoicesDocument, {
          first,
          after,
          filter,
          sorting,
        });
        return data.purchaseInvoices;
      },
    });
  }

  async retrieve(id: string) {
    const data = await this.http.request(SdkPurchaseInvoiceDocument, { id });
    return data.purchaseInvoice;
  }

  async create(profileId: string, input: CreatePurchaseInvoiceInput) {
    const data = await this.http.request(SdkCreatePurchaseInvoiceDocument, {
      profileId,
      input,
    });
    return data.createOnePurchaseInvoice;
  }

  async update(id: string, update: UpdatePurchaseInvoiceDto) {
    const data = await this.http.request(SdkUpdatePurchaseInvoiceDocument, {
      input: { id, update },
    });
    return data.updateOnePurchaseInvoice;
  }

  async del(id: string) {
    const data = await this.http.request(SdkDeletePurchaseInvoiceDocument, {
      id,
    });
    return data.deleteOnePurchaseInvoice;
  }

  async process(id: string) {
    const data = await this.http.request(SdkProcessPurchaseInvoiceDocument, {
      id,
    });
    return data.processPurchaseInvoice;
  }

  async confirm(id: string, date?: string) {
    const data = await this.http.request(SdkConfirmPurchaseInvoiceDocument, {
      id,
      date,
    });
    return data.confirmPurchaseInvoice;
  }
}
