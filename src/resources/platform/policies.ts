import {
  SdkActivatePolicyVersionDocument,
  SdkClearCompanyPolicyOverrideDocument,
  SdkCompanyPolicyOverridesDocument,
  SdkConfirmPolicyImportDocument,
  SdkCreatePolicyDraftDocument,
  SdkEffectivePolicyDocument,
  SdkPlatformPoliciesDocument,
  SdkPolicySchemasDocument,
  SdkPreviewPolicyImportDocument,
  SdkPromotePlatformPoliciesDocument,
  SdkSetCompanyPolicyOverrideDocument,
  type PolicyKind,
  type PolicyStatus,
} from '../../generated/graphql.js';
import type { FinbazeHttpClient } from '../../http.js';

/**
 * The rules FinBaze runs by for your companies: category and MCC mapping, chart templates, booking rules,
 * filing policy, roles, company defaults, quotas, messaging and documents. Versioned: write a draft, activate it.
 */
export class Policies {
  constructor(private readonly http: FinbazeHttpClient) {}

  /** The JSON Schema of every policy kind. */
  async schemas() {
    return (await this.http.request(SdkPolicySchemasDocument)).policySchemas;
  }

  async list(params: { kind?: PolicyKind; status?: PolicyStatus } = {}) {
    return (await this.http.request(SdkPlatformPoliciesDocument, params)).platformPolicies;
  }

  /** A new version in `draft`. Invalid payloads are refused with the list of problems. */
  async createDraft(kind: PolicyKind, payload: Record<string, unknown>) {
    return (await this.http.request(SdkCreatePolicyDraftDocument, { kind, payload })).createPolicyDraft;
  }

  /** Makes a draft the live version and archives the previous one. */
  async activate(id: string) {
    return (await this.http.request(SdkActivatePolicyVersionDocument, { id })).activatePolicyVersion;
  }

  /** What applies to one company: the platform policy with the company's override on top. */
  async effective(kind: PolicyKind, companyId: string) {
    return (await this.http.request(SdkEffectivePolicyDocument, { kind, companyId })).effectivePolicy;
  }

  readonly overrides = {
    list: async (companyId: string) => (await this.http.request(SdkCompanyPolicyOverridesDocument, { companyId })).companyPolicyOverrides,
    set: async (companyId: string, kind: PolicyKind, payload: Record<string, unknown>) =>
      (await this.http.request(SdkSetCompanyPolicyOverrideDocument, { companyId, kind, payload })).setCompanyPolicyOverride,
    clear: async (companyId: string, kind: PolicyKind) =>
      (await this.http.request(SdkClearCompanyPolicyOverrideDocument, { companyId, kind })).clearCompanyPolicyOverride,
  };

  /** Sandbox to production. In the sandbox, `export` returns a bundle id; in production, `preview` it and `confirm` the import. */
  readonly bundle = {
    export: async (kinds?: PolicyKind[]) => (await this.http.request(SdkPromotePlatformPoliciesDocument, { kinds })).promotePlatformPolicies,
    preview: async (bundleId: string) => (await this.http.request(SdkPreviewPolicyImportDocument, { bundleId })).previewPolicyImport,
    confirm: async (importId: string) => (await this.http.request(SdkConfirmPolicyImportDocument, { importId })).confirmPolicyImport,
  };
}
