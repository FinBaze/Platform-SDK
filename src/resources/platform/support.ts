import {
  SdkAddSupportEscalationCommentDocument,
  SdkCreateSupportEscalationDocument,
  SdkDecideSupportAccessDocument,
  SdkPlatformSupportSettingsDocument,
  SdkRevokeSupportAccessDocument,
  SdkSupportAccessGrantsDocument,
  SdkSupportEscalationsDocument,
  SdkUpdatePlatformSupportSettingsDocument,
  type SupportEscalationStatus,
  type SupportMode,
  type SupportSeverity,
} from '../../generated/graphql.js';
import type { FinbazeHttpClient, RequestOptions } from '../../http.js';

export type SupportSettingsUpdate = {
  supportMode?: SupportMode;
  /** An https URL. The `contact-support` element opens it when the page has no `support.requested` handler. `""` clears it. */
  supportUrl?: string;
  /** `""` clears it. */
  supportEmail?: string;
  /** `false` makes `escalations.create` fail with `SUPPORT_ESCALATION_DISABLED`. */
  supportEscalationEnabled?: boolean;
};

/** Who answers your users: you first (`partner_first`) or FinBaze directly (`finbaze_direct`). */
export class SupportSettings {
  constructor(private readonly http: FinbazeHttpClient) {}

  async retrieve() {
    const data = await this.http.request(SdkPlatformSupportSettingsDocument, {});
    return data.platformSupportSettings;
  }

  async update(settings: SupportSettingsUpdate, options?: RequestOptions) {
    const data = await this.http.request(SdkUpdatePlatformSupportSettingsDocument, { input: settings }, undefined, options);
    return data.updatePlatformSupportSettings;
  }
}

export type CreateSupportEscalationParams = {
  /** The company the case is about. */
  companyId?: string;
  subject: string;
  description: string;
  severity?: SupportSeverity;
  /** The `X-Request-Id` of the failing requests (at most 20). */
  requestIds?: string[];
  screen?: string;
  contactEmail?: string;
};

/** Level 2 support: cases you raise with FinBaze when you could not solve them. Needs `support:read` and `support:write`. */
export class SupportEscalations {
  constructor(private readonly http: FinbazeHttpClient) {}

  /** Newest first. `limit` is the page size (default 50); pass the last id's cursor back as `starting_after`. */
  async list(params: { status?: SupportEscalationStatus[]; limit?: number; starting_after?: string } = {}) {
    const data = await this.http.request(SdkSupportEscalationsDocument, {
      status: params.status,
      first: params.limit ?? 50,
      after: params.starting_after,
    });
    return data.supportEscalations;
  }

  async create(params: CreateSupportEscalationParams, options?: RequestOptions) {
    const data = await this.http.request(SdkCreateSupportEscalationDocument, { input: params }, undefined, options);
    return data.createSupportEscalation;
  }

  /** A comment on a case waiting for you, or a resolved one, reopens it. */
  async comment(escalationId: string, body: string, options?: RequestOptions) {
    const data = await this.http.request(SdkAddSupportEscalationCommentDocument, { escalationId, body }, undefined, options);
    return data.addSupportEscalationComment;
  }
}

/**
 * FinBaze staff open one of your companies only under a grant the company agrees to (or ends). Your backend can answer for
 * its user when it states how it got the consent.
 */
export class SupportGrants {
  constructor(private readonly http: FinbazeHttpClient) {}

  /** Requested and active grants of one company; `includeEnded` adds denied, revoked and expired ones. */
  async list(companyId: string, params: { includeEnded?: boolean } = {}) {
    const data = await this.http.request(SdkSupportAccessGrantsDocument, { companyId, includeEnded: params.includeEnded });
    return data.supportAccessGrants;
  }

  /**
   * Approve or decline a request. With a server key an approval needs `attestation` (at least 10 characters): how you
   * obtained the company's consent. It is recorded with the grant.
   */
  async decide(grantId: string, params: { approve: boolean; attestation?: string; stepUpAssertionId?: string }, options?: RequestOptions) {
    const data = await this.http.request(SdkDecideSupportAccessDocument, { grantId, ...params }, undefined, options);
    return data.decideSupportAccess;
  }

  /** Ends an active grant at once. */
  async revoke(grantId: string, options?: RequestOptions) {
    const data = await this.http.request(SdkRevokeSupportAccessDocument, { grantId }, undefined, options);
    return data.revokeSupportAccess;
  }
}

/** Support routing, escalation to FinBaze and consented view-as (Wave 5.5). */
export class Support {
  readonly settings: SupportSettings;
  readonly escalations: SupportEscalations;
  readonly grants: SupportGrants;

  constructor(http: FinbazeHttpClient) {
    this.settings = new SupportSettings(http);
    this.escalations = new SupportEscalations(http);
    this.grants = new SupportGrants(http);
  }
}
