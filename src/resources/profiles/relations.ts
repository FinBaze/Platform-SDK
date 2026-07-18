import {
  SdkCreateRelationDocument,
  SdkDeleteRelationDocument,
  SdkRelationDocument,
  SdkRelationsDocument,
  SdkUpdateRelationDocument,
  type CreateRelationInput,
  type RelationFilter,
  type RelationSort,
  type UpdateRelationDto,
} from '../../generated/graphql.js';
import type { ListParams } from '../../pagination.js';
import { ProfileResource } from '../base.js';

export class RelationsResource extends ProfileResource {
  async list(
    profileId: string,
    params?: ListParams<RelationFilter, RelationSort>,
  ) {
    return this.listConnection({
      profileId,
      params,
      fetchPage: async ({ first, after, filter, sorting }) => {
        const data = await this.http.request(SdkRelationsDocument, {
          first,
          after,
          filter,
          sorting,
        });
        return data.relations;
      },
    });
  }

  async retrieve(id: string) {
    const data = await this.http.request(SdkRelationDocument, { id });
    return data.relation;
  }

  async create(profileId: string, input: CreateRelationInput) {
    const data = await this.http.request(SdkCreateRelationDocument, {
      profileId,
      input,
    });
    return data.createOneRelation;
  }

  async update(id: string, update: UpdateRelationDto) {
    const data = await this.http.request(SdkUpdateRelationDocument, {
      input: { id, update },
    });
    return data.updateOneRelation;
  }

  async del(id: string) {
    const data = await this.http.request(SdkDeleteRelationDocument, { id });
    return data.deleteOneRelation;
  }
}
