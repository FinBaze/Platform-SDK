import {
  SdkAddPlatformAllowedOriginDocument,
  SdkArchivePlatformCompanyDocument,
  SdkClosePlatformCompanyDocument,
  SdkCompanyClosingChecklistDocument,
  SdkDeprovisionPlatformUserDocument,
  SdkReactivatePlatformCompanyDocument,
  SdkReopenPlatformCompanyDocument,
  SdkSuspendPlatformCompanyDocument,
  SdkCreateEmbedSessionDocument,
  SdkCreatePlatformCompanyDocument,
  SdkCreatePlatformUserTokenDocument,
  SdkEmbedSessionDocument,
  SdkEmbedSessionsDocument,
  SdkOnboardingRequirementsDocument,
  SdkPlatformAllowedOriginsDocument,
  SdkPlatformCompaniesDocument,
  SdkPlatformCompanyDocument,
  SdkPlatformCompanyFeaturesDocument,
  SdkPlatformFeatureAllowanceDocument,
  SdkPlatformFeatureLimitsDocument,
  SdkPlatformUsageCompaniesDocument,
  SdkPlatformUsageDocument,
  SdkPlatformUserDocument,
  SdkPlatformUsersDocument,
  SdkRemovePlatformAllowedOriginDocument,
  SdkRemovePlatformUserAccessDocument,
  SdkRevokeEmbedSessionDocument,
  SdkRevokeEmbedSessionsForUserDocument,
  SdkSetPlatformFeatureLimitDocument,
  SdkSetPlatformUserAccessDocument,
  SdkUpdatePlatformCompanyDocument,
  SdkUpsertPlatformUserDocument,
  type CreatePlatformCompanyInput,
  type EmbedSessionFilterInput,
  type PlatformCompanyFilter,
  type ProfileLifecycleState,
  type UpdatePlatformCompanyInput,
} from '../../generated/graphql.js';
import type { FinbazeHttpClient, RequestOptions } from '../../http.js';
import { toFinbazeList, withAutoPaging, type ListParams } from '../../pagination.js';
import {
  Bulk,
  BankFeed,
  BankTransactions,
  DataSources,
  Documents,
  Events,
  Exports,
  FlowTemplates,
  Records,
  Reports,
  Upserts,
  WebhookEndpoints,
} from './data.js';
import { CustomDomains, DocumentFonts, DocumentLayouts, DocumentRendering, DocumentTemplates } from './document-control.js';
import { Extensions } from './extensions.js';
import { Firms } from './firms.js';
import { AuditLogs, Transfers } from './lifecycle.js';
import { Messages } from './messages.js';
import { PaymentLinks, PaymentRequests, Providers, StepUp, TaxReservation } from './payments.js';
import { Policies } from './policies.js';
import { TaxAuthorisations } from './tax-authorisations.js';

type Role = 'admin' | 'member' | 'viewer';

type Conn<T> = { edges: Array<{ node: T }>; hasMore: boolean; nextCursor?: string | null };

/** The platform API's connections are `{ edges, hasMore, nextCursor }`. */
function listFrom<T>(connection: Conn<T>) {
  return toFinbazeList({
    edges: connection.edges,
    pageInfo: { hasNextPage: connection.hasMore, endCursor: connection.nextCursor ?? null },
  });
}

async function paged<T>(params: { limit?: number; starting_after?: string } | undefined, fetchPage: (first: number, after: string | undefined) => Promise<Conn<T>>) {
  const limit = params?.limit ?? 50;
  const page = async (cursor?: string) => listFrom(await fetchPage(limit, cursor));
  return withAutoPaging(await page(params?.starting_after), (cursor) => page(cursor));
}

export type CreateEmbedSessionParams = {
  /** Company id (the profile id returned by `platform.companies.create`). */
  company: string;
  user: { id: string } | { externalId: string };
  components: {
    onboarding?: { enabled?: boolean; features?: { editCompany?: boolean; taxSetup?: boolean; filingConsent?: boolean } };
    taxAuthorisation?: { enabled?: boolean; features?: { revoke?: boolean; hmrcConnect?: boolean; grant?: boolean } };
    notificationBanner?: { enabled?: boolean };
    actionCentre?: { enabled?: boolean };
    transactions?: { enabled?: boolean; features?: { categorise?: boolean; split?: boolean; attachReceipt?: boolean; matchInvoices?: boolean; aiSuggestions?: boolean } };
    transactionDetail?: { enabled?: boolean; features?: { categorise?: boolean; split?: boolean; attachReceipt?: boolean; matchInvoices?: boolean; aiSuggestions?: boolean } };
    purchaseInbox?: { enabled?: boolean; features?: { upload?: boolean; approve?: boolean; emailForwarding?: boolean } };
    taxCalendar?: { enabled?: boolean };
    vatReturn?: { enabled?: boolean; features?: { submit?: boolean; payment?: boolean; suppletie?: boolean; inlineConsent?: boolean } };
    icpReturn?: { enabled?: boolean; features?: { submit?: boolean; inlineConsent?: boolean } };
    ossReturn?: { enabled?: boolean; features?: { submit?: boolean; inlineConsent?: boolean } };
    taxPayments?: { enabled?: boolean; features?: { paymentHandoff?: boolean; internetkassa?: boolean } };
    bookingChip?: { enabled?: boolean; features?: { edit?: boolean } };
    receiptButton?: { enabled?: boolean };
    taxDueChip?: { enabled?: boolean };
  };
  kind?: 'embed' | 'headless';
  /** One of the platform's allowed origins; the session then only works there. */
  origin?: string;
  locale?: 'nl-NL' | 'en-NL' | 'en-GB' | 'en-US';
  /** The session being refreshed (the browser SDK sends it as `previousSessionId`). */
  previousSessionId?: string;
};

class Companies {
  constructor(private readonly http: FinbazeHttpClient) {}

  async create(input: CreatePlatformCompanyInput, options?: RequestOptions) {
    const data = await this.http.request(SdkCreatePlatformCompanyDocument, { input }, undefined, options);
    // `created` is false when the externalId already existed: the call is idempotent by externalId.
    return { ...data.createPlatformCompany.company, created: data.createPlatformCompany.created, prefill: data.createPlatformCompany.prefill ?? null };
  }

  async retrieve(id: string) {
    const data = await this.http.request(SdkPlatformCompanyDocument, { profileId: id });
    return data.platformCompany ?? null;
  }

  async retrieveByExternalId(externalId: string) {
    const data = await this.http.request(SdkPlatformCompanyDocument, { externalId });
    return data.platformCompany ?? null;
  }

  async update(id: string, input: Omit<UpdatePlatformCompanyInput, 'profileId' | 'platformId'>, options?: RequestOptions) {
    const data = await this.http.request(SdkUpdatePlatformCompanyDocument, { input: { ...input, profileId: id } }, undefined, options);
    return data.updatePlatformCompany;
  }

  /** Archived companies are left out unless `includeArchived` is set or `lifecycleStates` names `archived`. */
  list(params?: ListParams<PlatformCompanyFilter> & { lifecycleStates?: ProfileLifecycleState[]; includeArchived?: boolean }) {
    return paged(params, async (first, after) => {
      const data = await this.http.request(SdkPlatformCompaniesDocument, {
        first,
        after,
        filter: params?.filter,
        lifecycleStates: params?.lifecycleStates,
        includeArchived: params?.includeArchived,
      });
      return data.platformCompanies;
    });
  }

  async requirements(id: string) {
    const data = await this.http.request(SdkOnboardingRequirementsDocument, { profileId: id });
    return data.onboardingRequirements;
  }

  /**
   * Makes the company read-only and pauses its automations (cron work, filings stay as they are).
   * `displayMessage` is shown to the company's users. A company FinBaze suspended cannot be reactivated by you.
   */
  async suspend(id: string, params?: { reason?: string; displayMessage?: string }, options?: RequestOptions) {
    const data = await this.http.request(SdkSuspendPlatformCompanyDocument, { companyId: id, ...params }, undefined, options);
    return data.suspendPlatformCompany;
  }

  async reactivate(id: string, options?: RequestOptions) {
    const data = await this.http.request(SdkReactivatePlatformCompanyDocument, { companyId: id }, undefined, options);
    return data.reactivatePlatformCompany;
  }

  /** Closes the company as of `effectiveDate` (YYYY-MM-DD). Final returns can still be filed. */
  async close(id: string, params: { effectiveDate: string; reason?: string }, options?: RequestOptions) {
    const data = await this.http.request(SdkClosePlatformCompanyDocument, { companyId: id, ...params }, undefined, options);
    return data.closePlatformCompany;
  }

  /** Within the reopen window after closing. */
  async reopen(id: string, options?: RequestOptions) {
    const data = await this.http.request(SdkReopenPlatformCompanyDocument, { companyId: id }, undefined, options);
    return data.reopenPlatformCompany;
  }

  /** Detaches a closed company from your platform. The books are kept for the retention period; archived companies are hidden from `list` unless you ask for them. */
  async archive(id: string, options?: RequestOptions) {
    const data = await this.http.request(SdkArchivePlatformCompanyDocument, { companyId: id }, undefined, options);
    return data.archivePlatformCompany;
  }

  /** What closing needs (blocking items stop `archive`). Pass `effectiveDate` to preview for an active company. */
  async closingChecklist(id: string, effectiveDate?: string) {
    const data = await this.http.request(SdkCompanyClosingChecklistDocument, { companyId: id, effectiveDate });
    return data.companyClosingChecklist;
  }
}

class Users {
  constructor(private readonly http: FinbazeHttpClient) {}

  async upsert(input: { externalUserId: string; firstName?: string; lastName?: string; language?: string; disabled?: boolean }, options?: RequestOptions) {
    const data = await this.http.request(SdkUpsertPlatformUserDocument, { input }, undefined, options);
    return data.upsertPlatformUser;
  }

  async retrieve(id: string) {
    const data = await this.http.request(SdkPlatformUserDocument, { userId: id });
    return data.platformUser ?? null;
  }

  async retrieveByExternalId(externalUserId: string) {
    const data = await this.http.request(SdkPlatformUserDocument, { externalUserId });
    return data.platformUser ?? null;
  }

  list(params?: ListParams<never> & { companyId?: string }) {
    return paged(params, async (first, after) => {
      const data = await this.http.request(SdkPlatformUsersDocument, { first, after, profileId: params?.companyId });
      return data.platformUsers;
    });
  }

  /** Give a user a role on a company. Identify the user by `userId` or `externalUserId`. */
  async setAccess(input: { userId?: string; externalUserId?: string; companyId: string; role: Role }, options?: RequestOptions) {
    const data = await this.http.request(
      SdkSetPlatformUserAccessDocument,
      { input: { userId: input.userId, externalUserId: input.externalUserId, profileId: input.companyId, role: input.role } },
      undefined,
      options,
    );
    return data.setPlatformUserAccess;
  }

  /**
   * Ends a user: every token and embed session stops working at once, and the user loses access to all
   * companies. `upsert` with the same `externalUserId` brings the user back with a fresh identity.
   * `anonymise` also clears the name.
   */
  async deprovision(id: string, params?: { anonymise?: boolean }, options?: RequestOptions) {
    const data = await this.http.request(SdkDeprovisionPlatformUserDocument, { userId: id, anonymise: params?.anonymise ?? false }, undefined, options);
    return data.deprovisionPlatformUser;
  }

  /** Also revokes the user's embed sessions for that company. */
  async removeAccess(input: { userId: string; companyId: string }) {
    const data = await this.http.request(SdkRemovePlatformUserAccessDocument, { userId: input.userId, profileId: input.companyId });
    return data.removePlatformUserAccess;
  }
}

class UserTokens {
  constructor(private readonly http: FinbazeHttpClient) {}

  async create(input: { userId?: string; externalUserId?: string; companyIds?: string[]; scopes?: string[] }) {
    const data = await this.http.request(SdkCreatePlatformUserTokenDocument, {
      input: { userId: input.userId, externalUserId: input.externalUserId, profileIds: input.companyIds, scopes: input.scopes },
    });
    return data.createPlatformUserToken;
  }
}

class EmbedSessions {
  constructor(private readonly http: FinbazeHttpClient) {}

  /** The client secret works once; create a new session for every mount and refresh. */
  async create(params: CreateEmbedSessionParams, options?: RequestOptions) {
    const data = await this.http.request(
      SdkCreateEmbedSessionDocument,
      {
        input: {
          companyId: params.company,
          user: 'id' in params.user ? { platformUserId: params.user.id } : { externalUserId: params.user.externalId },
          components: params.components,
          ...(params.kind ? { kind: params.kind } : {}),
          ...(params.origin ? { origin: params.origin } : {}),
          ...(params.locale ? { locale: params.locale } : {}),
          ...(params.previousSessionId ? { previousSessionId: params.previousSessionId } : {}),
        },
      },
      undefined,
      options,
    );
    const { session, clientSecret, expiresAt } = data.createEmbedSession;
    return { id: session.id, clientSecret, expiresAt, components: session.components };
  }

  async retrieve(id: string) {
    const data = await this.http.request(SdkEmbedSessionDocument, { id });
    return data.embedSession ?? null;
  }

  list(params?: ListParams<EmbedSessionFilterInput>) {
    return paged(params, async (first, after) => {
      const data = await this.http.request(SdkEmbedSessionsDocument, { first, after, filter: params?.filter });
      return data.embedSessions;
    });
  }

  async revoke(id: string) {
    const data = await this.http.request(SdkRevokeEmbedSessionDocument, { id });
    return data.revokeEmbedSession;
  }

  /** Returns how many sessions were revoked. */
  async revokeForUser(input: { userId: string; companyId?: string }) {
    const data = await this.http.request(SdkRevokeEmbedSessionsForUserDocument, { platformUserId: input.userId, companyId: input.companyId });
    return data.revokeEmbedSessionsForUser;
  }
}

class Features {
  readonly limits: { list(params?: { companyId?: string }): ReturnType<Features['listLimits']>; set(input: { key: string; hidden?: boolean; companyId?: string }, options?: RequestOptions): ReturnType<Features['setLimit']> };

  constructor(private readonly http: FinbazeHttpClient) {
    this.limits = { list: (params) => this.listLimits(params), set: (input, options) => this.setLimit(input, options) };
  }

  async allowance() {
    const data = await this.http.request(SdkPlatformFeatureAllowanceDocument);
    return data.platformFeatureAllowance;
  }

  private async listLimits(params?: { companyId?: string }) {
    const data = await this.http.request(SdkPlatformFeatureLimitsDocument, { profileId: params?.companyId });
    return data.platformFeatureLimits;
  }

  private async setLimit(input: { key: string; hidden?: boolean; companyId?: string }, options?: RequestOptions) {
    const data = await this.http.request(
      SdkSetPlatformFeatureLimitDocument,
      { input: { key: input.key, hidden: input.hidden, profileId: input.companyId } },
      undefined,
      options,
    );
    return data.setPlatformFeatureLimit;
  }

  /** What is effective for one company (allowance and limits applied). */
  async effective(companyId: string) {
    const data = await this.http.request(SdkPlatformCompanyFeaturesDocument, { profileId: companyId });
    return data.platformCompanyFeatures;
  }
}

class Usage {
  constructor(private readonly http: FinbazeHttpClient) {}

  /** `month` is `YYYY-MM`; omit for the current month. */
  async retrieve(params?: { month?: string }) {
    const data = await this.http.request(SdkPlatformUsageDocument, { month: params?.month });
    return data.platformUsage;
  }

  /** The companies that counted as active, 100 per page. `starting_after` is the last `profileId`. */
  async activeCompanies(params: { month?: string; limit?: number; starting_after?: string } = {}) {
    const limit = params.limit ?? 100;
    const page = async (after?: string) => {
      const data = await this.http.request(SdkPlatformUsageCompaniesDocument, { month: params.month, first: limit, after });
      const rows = data.platformUsage.companies;
      return {
        object: 'list' as const,
        data: rows,
        has_more: rows.length === limit,
        next_cursor: rows.length === limit ? (rows[rows.length - 1]?.profileId ?? null) : null,
      };
    };
    return withAutoPaging(await page(params.starting_after), (cursor) => page(cursor));
  }
}

class Origins {
  constructor(private readonly http: FinbazeHttpClient) {}

  async list() {
    const data = await this.http.request(SdkPlatformAllowedOriginsDocument);
    return data.platformAllowedOrigins;
  }

  async add(origin: string) {
    const data = await this.http.request(SdkAddPlatformAllowedOriginDocument, { origin });
    return data.addPlatformAllowedOrigin;
  }

  async remove(id: string) {
    const data = await this.http.request(SdkRemovePlatformAllowedOriginDocument, { id });
    return data.removePlatformAllowedOrigin;
  }
}

/** Everything a platform's backend does: companies, users, tokens, embed sessions, features, usage. */
export class PlatformNamespace {
  readonly companies: Companies;
  readonly users: Users;
  readonly userTokens: UserTokens;
  readonly embedSessions: EmbedSessions;
  readonly features: Features;
  readonly usage: Usage;
  readonly origins: Origins;
  /** Create or update objects by your own id. */
  readonly upsert: Upserts;
  /** NDJSON uploads of many objects. */
  readonly bulk: Bulk;
  readonly dataSources: DataSources;
  readonly bankFeed: BankFeed;
  readonly bankTransactions: BankTransactions;
  readonly records: Records;
  readonly flowTemplates: FlowTemplates;
  readonly events: Events;
  readonly webhookEndpoints: WebhookEndpoints;
  readonly messages: Messages;
  /** Delegated actions (Wave 4.5). */
  readonly providers: Providers;
  readonly paymentRequests: PaymentRequests;
  readonly paymentLinks: PaymentLinks;
  readonly taxReservation: TaxReservation;
  readonly stepUp: StepUp;
  /** Policies (Wave 4.6). */
  readonly policies: Policies;
  /** Filing consent (Wave 5.1): what the companies authorised FinBaze to file. Read and revoke only; there is no grant. */
  readonly taxAuthorisations: TaxAuthorisations;
  /** Custom actions, slots, links, custom fields and field control (Wave 4.7). */
  readonly extensions: Extensions;
  /** Document layouts, templates, partner rendering, fonts and custom domains (Wave 4.3, 4.4). */
  readonly documentLayouts: DocumentLayouts;
  readonly documentTemplates: DocumentTemplates;
  readonly documentRendering: DocumentRendering;
  readonly documentFonts: DocumentFonts;
  readonly customDomains: CustomDomains;
  readonly reports: Reports;
  readonly documents: Documents;
  readonly exports: Exports;
  /** Accounting firms on your companies (Wave 5.3). */
  readonly firms: Firms;
  /** Moving companies to another platform or to FinBaze (Wave 5.4). */
  readonly transfers: Transfers;
  /** The audit log of your companies, with platform context (Wave 5.4). */
  readonly audit: AuditLogs;

  constructor(http: FinbazeHttpClient) {
    this.companies = new Companies(http);
    this.users = new Users(http);
    this.userTokens = new UserTokens(http);
    this.embedSessions = new EmbedSessions(http);
    this.features = new Features(http);
    this.usage = new Usage(http);
    this.origins = new Origins(http);
    this.upsert = new Upserts(http);
    this.bulk = new Bulk(http);
    this.dataSources = new DataSources(http);
    this.bankFeed = new BankFeed(http);
    this.bankTransactions = new BankTransactions(http);
    this.records = new Records(http);
    this.flowTemplates = new FlowTemplates(http);
    this.events = new Events(http);
    this.webhookEndpoints = new WebhookEndpoints(http);
    this.messages = new Messages(http);
    this.providers = new Providers(http);
    this.paymentRequests = new PaymentRequests(http);
    this.paymentLinks = new PaymentLinks(http);
    this.taxReservation = new TaxReservation(http);
    this.stepUp = new StepUp(http);
    this.policies = new Policies(http);
    this.taxAuthorisations = new TaxAuthorisations(http);
    this.extensions = new Extensions(http);
    this.documentLayouts = new DocumentLayouts(http);
    this.documentTemplates = new DocumentTemplates(http);
    this.documentRendering = new DocumentRendering(http);
    this.documentFonts = new DocumentFonts(http);
    this.customDomains = new CustomDomains(http);
    this.reports = new Reports(http);
    this.documents = new Documents(http);
    this.exports = new Exports(http);
    this.firms = new Firms(http);
    this.transfers = new Transfers(http);
    this.audit = new AuditLogs(http);
  }
}
