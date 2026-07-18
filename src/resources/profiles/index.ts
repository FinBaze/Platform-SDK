import {
  SdkCreateProfileApiCredentialDocument,
  SdkProfileApiCredentialsDocument,
  SdkProfileDocument,
  SdkProfilesDocument,
  SdkRevokeProfileApiCredentialDocument,
  SdkRotateProfileApiCredentialDocument,
  SdkUpdateProfileDocument,
  type ProfileFilter,
  type ProfileSort,
  type UpdateProfileDto,
} from '../../generated/graphql.js';
import {
  toFinbazeList,
  withAutoPaging,
  type ListParams,
} from '../../pagination.js';
import type { FinbazeHttpClient } from '../../http.js';
import { CostCentersResource } from './cost-centers.js';
import {
  MonetaryAccountPaymentsResource,
  MonetaryAccountsResource,
} from './monetary-accounts.js';
import { ProjectsResource } from './projects.js';
import { PurchaseInvoicesResource } from './purchase-invoices.js';
import { RecurringsResource } from './recurrings.js';
import { RelationsResource } from './relations.js';
import { SalesInvoicesResource } from './sales-invoices.js';

export class ProfileApiCredentialsResource {
  constructor(private readonly http: FinbazeHttpClient) {}

  async list(profileId: string) {
    const data = await this.http.request(SdkProfileApiCredentialsDocument, {
      profileId,
    });
    return data.profileApiCredentials;
  }

  async create(profileId: string, params?: { name?: string }) {
    const data = await this.http.request(SdkCreateProfileApiCredentialDocument, {
      profileId,
      input: params?.name ? { name: params.name } : undefined,
    });
    return data.createProfileApiCredential;
  }

  async rotate(profileId: string, id: string) {
    const data = await this.http.request(SdkRotateProfileApiCredentialDocument, {
      profileId,
      id,
    });
    return data.rotateProfileApiCredential;
  }

  async del(profileId: string, id: string) {
    const data = await this.http.request(SdkRevokeProfileApiCredentialDocument, {
      profileId,
      id,
    });
    return data.revokeProfileApiCredential;
  }
}

export class ProfilesResource {
  readonly salesInvoices: SalesInvoicesResource;
  readonly purchaseInvoices: PurchaseInvoicesResource;
  readonly relations: RelationsResource;
  readonly recurrings: RecurringsResource;
  readonly projects: ProjectsResource;
  readonly costCenters: CostCentersResource;
  readonly monetaryAccounts: MonetaryAccountsResource;
  readonly monetaryAccountPayments: MonetaryAccountPaymentsResource;
  readonly apiCredentials: ProfileApiCredentialsResource;

  constructor(private readonly http: FinbazeHttpClient) {
    this.salesInvoices = new SalesInvoicesResource(http);
    this.purchaseInvoices = new PurchaseInvoicesResource(http);
    this.relations = new RelationsResource(http);
    this.recurrings = new RecurringsResource(http);
    this.projects = new ProjectsResource(http);
    this.costCenters = new CostCentersResource(http);
    this.monetaryAccounts = new MonetaryAccountsResource(http);
    this.monetaryAccountPayments = new MonetaryAccountPaymentsResource(http);
    this.apiCredentials = new ProfileApiCredentialsResource(http);
  }

  async list(params?: ListParams<ProfileFilter, ProfileSort>) {
    const limit = params?.limit ?? 25;
    const fetchPage = async (startingAfter?: string) => {
      const data = await this.http.request(SdkProfilesDocument, {
        first: limit,
        after: startingAfter ?? params?.starting_after,
        filter: params?.filter ?? {},
        sorting: params?.sorting,
      });
      return toFinbazeList(data.profiles);
    };
    const first = await fetchPage();
    return withAutoPaging(first, (cursor) => fetchPage(cursor));
  }

  async retrieve(id: string) {
    const data = await this.http.request(SdkProfileDocument, { id });
    return data.profile;
  }

  async update(id: string, update: UpdateProfileDto) {
    const data = await this.http.request(SdkUpdateProfileDocument, {
      input: { id, update },
    });
    return data.updateOneProfile;
  }
}
