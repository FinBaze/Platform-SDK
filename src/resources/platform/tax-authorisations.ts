import {
  SdkRevokeTaxAuthorisationDocument,
  SdkTaxAuthorisationStatusDocument,
  SdkTaxAuthorisationsDocument,
  type AuthorisedTax,
} from '../../generated/graphql.js';
import type { FinbazeHttpClient, RequestOptions } from '../../http.js';

/**
 * Filing consent (Wave 5.1). FinBaze files a platform company's returns only
 * with the company's authorisation, given by the company's own user in the
 * `onboarding` or `tax-authorisation` component (or your headless UI).
 *
 * There is deliberately **no `grant`** here: a platform backend cannot consent on
 * behalf of its users. You can read what was granted and revoke, for instance
 * when you offboard a company. Revoking is effective on the next request.
 */
export class TaxAuthorisations {
  constructor(private readonly http: FinbazeHttpClient) {}

  /** The consent history of a company, newest first. Revoked grants only with `includeRevoked`. */
  async list(companyId: string, params: { includeRevoked?: boolean } = {}) {
    return (await this.http.request(SdkTaxAuthorisationsDocument, { companyId, includeRevoked: params.includeRevoked ?? false })).taxAuthorisations;
  }

  /**
   * Per registered tax: `active`, `missing`, `reconfirmation_due` (a newer statement is pending; the
   * grant stays valid until its grace date) or `delegated_to_firm` (the company's accountant files it).
   * Empty for a company without a platform.
   */
  async status(companyId: string) {
    return (await this.http.request(SdkTaxAuthorisationStatusDocument, { companyId })).taxAuthorisationStatus;
  }

  /**
   * Revokes the authorisation for `taxes` (all by default). Returns the grants that were revoked; a grant that
   * also covered other taxes is replaced by a new one for the rest. Nothing active to revoke returns `[]`.
   */
  async revoke(companyId: string, params: { taxes?: AuthorisedTax[]; reason?: string } = {}, options?: RequestOptions) {
    return (
      await this.http.request(
        SdkRevokeTaxAuthorisationDocument,
        { input: { companyId, taxes: params.taxes, reason: params.reason } },
        undefined,
        options,
      )
    ).revokeTaxAuthorisation;
  }
}
