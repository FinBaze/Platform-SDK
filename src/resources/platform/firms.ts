import type { FinbazeHttpClient, RequestOptions } from '../../http.js';

export type FirmEngagementStatus = 'requested' | 'active' | 'declined' | 'expired' | 'ended';
export type FirmEngagementOrigin = 'company_invite' | 'firm_request';
export type EngagementSide = 'company' | 'firm' | 'platform' | 'finbaze' | 'system';
export type AuthorisedTax =
  | 'nl_vat'
  | 'nl_icp'
  | 'nl_oss'
  | 'nl_cit'
  | 'nl_annual_accounts'
  | 'nl_wage_tax'
  | 'nl_pension'
  | 'uk_vat'
  | 'uk_income_tax';

/** The reasons a platform may end an engagement with. */
export type PlatformEndReason = 'firm_access_hidden' | 'company_closed' | 'company_transferred' | 'platform_request';

/** A company working with an accounting firm: who agreed, which taxes the firm files, and how it ended. */
export type FirmEngagement = {
  id: string;
  companyId: string;
  /** The firm: id, name and whether it has a BECON number. */
  firm: { id: string; name: string; logoUrl: string | null; hasBecon: boolean };
  platformName: string;
  origin: FirmEngagementOrigin;
  status: FirmEngagementStatus;
  /** `submit` when the firm files the `taxes` with its BECON number; FinBaze files the rest. */
  filingAuthority: 'none' | 'submit';
  taxes: AuthorisedTax[];
  requestedAt: string;
  requestMessage: string | null;
  companyApprovedAt: string | null;
  firmAcceptedAt: string | null;
  expiresAt: string;
  /** Set while a notice runs: the engagement ends then, unless `firm_access` is shown again. */
  endsAt: string | null;
  endNoticeReason: string | null;
  endedAt: string | null;
  endedBySide: EngagementSide | null;
  endReason: string | null;
};

const FIELDS = `
  id companyId platformName origin status filingAuthority taxes requestedAt requestMessage
  companyApprovedAt firmAcceptedAt expiresAt endsAt endNoticeReason endedAt endedBySide endReason
  firm { id name logoUrl hasBecon }
`;

/**
 * Accounting firms on your companies. A company connects its firm in the
 * `accountant-connect` component (or approves a firm's request there); your
 * server reads the state and may end a connection. The firm pays nothing for
 * the company, and you hear about every step through `firm.*` events.
 *
 * Needs the scopes `platform_firms:read` and `platform_firms:write`.
 */
export class Firms {
  constructor(private readonly http: FinbazeHttpClient) {}

  /** The engagements of one company: the active one, requests that wait, and (with `includeEnded`) the history. */
  async listEngagements(companyId: string, params: { includeEnded?: boolean } = {}, options?: RequestOptions): Promise<FirmEngagement[]> {
    const data = await this.http.request<{ companyFirmEngagements: FirmEngagement[] }, Record<string, unknown>>(
      `query SdkCompanyFirmEngagements($companyId: ID!, $includeEnded: Boolean) {
        companyFirmEngagements(companyId: $companyId, includeEnded: $includeEnded) { ${FIELDS} }
      }`,
      { companyId, includeEnded: params.includeEnded ?? false },
      'SdkCompanyFirmEngagements',
      options,
    );
    return data.companyFirmEngagements;
  }

  /**
   * Ends an engagement: the firm loses access, its BECON is no longer used for the company and its HMRC client
   * authorisations stop, in one step. The books stay with the company. A platform may only use one of
   * `PlatformEndReason`; `platform_request` is logged and both sides are told.
   */
  async end(engagementId: string, params: { reason: PlatformEndReason }, options?: RequestOptions): Promise<FirmEngagement> {
    const data = await this.http.request<{ endFirmEngagement: FirmEngagement }, Record<string, unknown>>(
      `mutation SdkEndFirmEngagement($input: EndFirmEngagementInput!) {
        endFirmEngagement(input: $input) { ${FIELDS} }
      }`,
      { input: { engagementId, reason: params.reason } },
      'SdkEndFirmEngagement',
      options,
    );
    return data.endFirmEngagement;
  }
}
