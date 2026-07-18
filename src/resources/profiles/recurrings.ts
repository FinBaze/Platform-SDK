import {
  SdkCreateRecurringDocument,
  SdkDeleteRecurringDocument,
  SdkRecurringDocument,
  SdkRecurringsDocument,
  SdkUpdateRecurringDocument,
  type CreateRecurringInput,
  type RecurringFilter,
  type RecurringSort,
  type UpdateRecurringDto,
} from '../../generated/graphql.js';
import type { ListParams } from '../../pagination.js';
import { ProfileResource } from '../base.js';

export class RecurringsResource extends ProfileResource {
  async list(
    profileId: string,
    params?: ListParams<RecurringFilter, RecurringSort>,
  ) {
    return this.listConnection({
      profileId,
      params,
      fetchPage: async ({ first, after, filter, sorting }) => {
        const data = await this.http.request(SdkRecurringsDocument, {
          first,
          after,
          filter,
          sorting,
        });
        return data.recurrings;
      },
    });
  }

  async retrieve(id: string) {
    const data = await this.http.request(SdkRecurringDocument, { id });
    return data.recurring;
  }

  async create(profileId: string, input: CreateRecurringInput) {
    const data = await this.http.request(SdkCreateRecurringDocument, {
      profileId,
      input,
    });
    return data.createOneRecurring;
  }

  async update(id: string, update: UpdateRecurringDto) {
    const data = await this.http.request(SdkUpdateRecurringDocument, {
      input: { id, update },
    });
    return data.updateOneRecurring;
  }

  async del(id: string) {
    const data = await this.http.request(SdkDeleteRecurringDocument, { id });
    return data.deleteOneRecurring;
  }
}
