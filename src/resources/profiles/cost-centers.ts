import {
  SdkCostCenterDocument,
  SdkCostCentersDocument,
  SdkCreateCostCenterDocument,
  SdkDeleteCostCenterDocument,
  SdkUpdateCostCenterDocument,
  type CostCenterFilter,
  type CostCenterSort,
  type CreateCostCenterInput,
  type UpdateCostCenterDto,
} from '../../generated/graphql.js';
import type { ListParams } from '../../pagination.js';
import { ProfileResource } from '../base.js';

export class CostCentersResource extends ProfileResource {
  async list(
    profileId: string,
    params?: ListParams<CostCenterFilter, CostCenterSort>,
  ) {
    return this.listConnection({
      profileId,
      params,
      fetchPage: async ({ first, after, filter, sorting }) => {
        const data = await this.http.request(SdkCostCentersDocument, {
          first,
          after,
          filter,
          sorting,
        });
        return data.costCenters;
      },
    });
  }

  async retrieve(id: string) {
    const data = await this.http.request(SdkCostCenterDocument, { id });
    return data.costCenter;
  }

  async create(profileId: string, input: CreateCostCenterInput) {
    const data = await this.http.request(SdkCreateCostCenterDocument, {
      profileId,
      input,
    });
    return data.createOneCostCenter;
  }

  async update(id: string, update: UpdateCostCenterDto) {
    const data = await this.http.request(SdkUpdateCostCenterDocument, {
      input: { id, update },
    });
    return data.updateOneCostCenter;
  }

  async del(id: string) {
    const data = await this.http.request(SdkDeleteCostCenterDocument, { id });
    return data.deleteOneCostCenter;
  }
}
