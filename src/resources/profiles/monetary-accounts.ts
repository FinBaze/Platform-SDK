import {
  SdkCreateMonetaryAccountDocument,
  SdkCreateMonetaryAccountPaymentDocument,
  SdkDeleteMonetaryAccountDocument,
  SdkDeleteMonetaryAccountPaymentDocument,
  SdkMonetaryAccountDocument,
  SdkMonetaryAccountPaymentDocument,
  SdkMonetaryAccountPaymentsDocument,
  SdkMonetaryAccountsDocument,
  SdkProcessMonetaryAccountPaymentDocument,
  SdkUpdateMonetaryAccountDocument,
  type CreateMonetaryAccountInput,
  type CreateMonetaryAccountPaymentInput,
  type MonetaryAccountFilter,
  type MonetaryAccountPaymentFilter,
  type MonetaryAccountPaymentSort,
  type MonetaryAccountSort,
  type ProcessMonetaryAccountPaymentInput,
  type UpdateMonetaryAccountDto,
} from '../../generated/graphql.js';
import {
  toFinbazeList,
  withAutoPaging,
  type ListParams,
} from '../../pagination.js';
import { ProfileResource } from '../base.js';

export class MonetaryAccountsResource extends ProfileResource {
  async list(
    profileId: string,
    params?: ListParams<MonetaryAccountFilter, MonetaryAccountSort>,
  ) {
    return this.listConnection({
      profileId,
      params,
      fetchPage: async ({ first, after, filter, sorting }) => {
        const data = await this.http.request(SdkMonetaryAccountsDocument, {
          first,
          after,
          filter,
          sorting,
        });
        return data.monetaryAccounts;
      },
    });
  }

  async retrieve(id: string) {
    const data = await this.http.request(SdkMonetaryAccountDocument, { id });
    return data.monetaryAccount;
  }

  async create(profileId: string, input: CreateMonetaryAccountInput) {
    const data = await this.http.request(SdkCreateMonetaryAccountDocument, {
      profileId,
      input,
    });
    return data.createOneMonetaryAccount;
  }

  async update(id: string, update: UpdateMonetaryAccountDto) {
    const data = await this.http.request(SdkUpdateMonetaryAccountDocument, {
      input: { id, update },
    });
    return data.updateOneMonetaryAccount;
  }

  async del(id: string) {
    const data = await this.http.request(SdkDeleteMonetaryAccountDocument, {
      id,
    });
    return data.deleteOneMonetaryAccount;
  }
}

export class MonetaryAccountPaymentsResource extends ProfileResource {
  async list(
    monetaryAccountId: string,
    params?: ListParams<
      MonetaryAccountPaymentFilter,
      MonetaryAccountPaymentSort
    >,
  ) {
    const limit = params?.limit ?? 25;
    const baseFilter = {
      ...(params?.filter ?? {}),
      monetaryAccountId: { eq: monetaryAccountId },
    } as MonetaryAccountPaymentFilter;

    const fetchPage = async (startingAfter?: string) => {
      const data = await this.http.request(SdkMonetaryAccountPaymentsDocument, {
        first: limit,
        after: startingAfter ?? params?.starting_after,
        filter: baseFilter,
        sorting: params?.sorting,
      });
      return toFinbazeList(data.monetaryAccountPayments);
    };

    const first = await fetchPage();
    return withAutoPaging(first, (cursor) => fetchPage(cursor));
  }

  async retrieve(id: string) {
    const data = await this.http.request(SdkMonetaryAccountPaymentDocument, {
      id,
    });
    return data.monetaryAccountPayment;
  }

  async create(
    monetaryAccountId: string,
    input: CreateMonetaryAccountPaymentInput,
  ) {
    const data = await this.http.request(
      SdkCreateMonetaryAccountPaymentDocument,
      { monetaryAccountId, input },
    );
    return data.createOneMonetaryAccountPayment;
  }

  async del(id: string) {
    const data = await this.http.request(
      SdkDeleteMonetaryAccountPaymentDocument,
      { id },
    );
    return data.deleteOneMonetaryAccountPayment;
  }

  async process(id: string, input: ProcessMonetaryAccountPaymentInput = {}) {
    const data = await this.http.request(
      SdkProcessMonetaryAccountPaymentDocument,
      { id, input },
    );
    return data.processMonetaryAccountPayment;
  }
}
