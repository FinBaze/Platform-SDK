import {
  SdkCreateProjectDocument,
  SdkDeleteProjectDocument,
  SdkProjectDocument,
  SdkProjectsDocument,
  SdkUpdateProjectDocument,
  type CreateProjectInput,
  type ProjectFilter,
  type ProjectSort,
  type UpdateProjectDto,
} from '../../generated/graphql.js';
import type { ListParams } from '../../pagination.js';
import { ProfileResource } from '../base.js';

export class ProjectsResource extends ProfileResource {
  async list(
    profileId: string,
    params?: ListParams<ProjectFilter, ProjectSort>,
  ) {
    return this.listConnection({
      profileId,
      params,
      fetchPage: async ({ first, after, filter, sorting }) => {
        const data = await this.http.request(SdkProjectsDocument, {
          first,
          after,
          filter,
          sorting,
        });
        return data.projects;
      },
    });
  }

  async retrieve(id: string) {
    const data = await this.http.request(SdkProjectDocument, { id });
    return data.project;
  }

  async create(profileId: string, input: CreateProjectInput) {
    const data = await this.http.request(SdkCreateProjectDocument, {
      profileId,
      input,
    });
    return data.createOneProject;
  }

  async update(id: string, update: UpdateProjectDto) {
    const data = await this.http.request(SdkUpdateProjectDocument, {
      input: { id, update },
    });
    return data.updateOneProject;
  }

  async del(id: string) {
    const data = await this.http.request(SdkDeleteProjectDocument, { id });
    return data.deleteOneProject;
  }
}
