/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type AcknowledgeMessageInput = {
  channel: string;
  deliveredAt?: string | null | undefined;
  id: string | number;
  outcome?: string | null | undefined;
  providerMessageId?: string | null | undefined;
};

export type Address = {
  address2?: string | null | undefined;
  building?: string | null | undefined;
  country?: Country | null | undefined;
  locality?: string | null | undefined;
  postalCode?: string | null | undefined;
  premise?: string | null | undefined;
  state?: string | null | undefined;
  subPremise?: string | null | undefined;
  thoroughfare?: string | null | undefined;
};

export type AddressUpsertFields = {
  address2?: string | null | undefined;
  building?: string | null | undefined;
  country?: Country | null | undefined;
  locality?: string | null | undefined;
  postalCode?: string | null | undefined;
  premise?: string | null | undefined;
  state?: string | null | undefined;
  subPremise?: string | null | undefined;
  thoroughfare?: string | null | undefined;
};

export type AdvanceTestClockOptionsInput = {
  /** Close financial years that have ended. Default false. */
  closeFinancialYear?: boolean | null | undefined;
  /** Submit the draft filings of ended periods (through the simulated Digipoort). Default false. */
  submitFilings?: boolean | null | undefined;
};

export type AuditActorKind =
  | 'account'
  | 'app'
  | 'platform'
  | 'support'
  | 'system';

export type AuthorisedTax =
  | 'nl_annual_accounts'
  | 'nl_cit'
  | 'nl_icp'
  | 'nl_oss'
  | 'nl_pension'
  | 'nl_vat'
  | 'nl_wage_tax'
  | 'uk_income_tax'
  | 'uk_vat';

export type BankAccountFeedInput = {
  bic?: string | null | undefined;
  currency: Currency;
  externalId: string;
  iban?: string | null | undefined;
  metadata?: Record<string, unknown> | null | undefined;
  name: string;
  openedOn?: string | null | undefined;
  type?: FeedAccountType | null | undefined;
};

export type BankBalanceInput = {
  /** Minor units (JS-safe integer). */
  amountMinor: number;
  currency: Currency;
  date: string;
  type: BankBalanceType;
};

export type BankBalanceType =
  | 'closing_available'
  | 'closing_booked'
  | 'interim_booked'
  | 'opening_booked';

export type BankTransactionCodeInput = {
  domain?: string | null | undefined;
  family?: string | null | undefined;
  proprietary?: string | null | undefined;
  subFamily?: string | null | undefined;
};

export type BankTransactionFeedInput = {
  amountMinor: number;
  bankReference?: string | null | undefined;
  bankTransactionCode?: BankTransactionCodeInput | null | undefined;
  bookingDate: string;
  card?: CardDetailsInput | null | undefined;
  counterparty?: CounterpartyInput | null | undefined;
  currency: Currency;
  description?: string | null | undefined;
  endToEndId?: string | null | undefined;
  externalId: string;
  fx?: FxInput | null | undefined;
  metadata?: Record<string, unknown> | null | undefined;
  /** externalId of the transaction this one reverses. */
  reverses?: string | null | undefined;
  status?: FeedTransactionStatus | null | undefined;
  valueDate?: string | null | undefined;
};

export type BillingManagedBy =
  | 'apple'
  | 'platform'
  | 'play'
  | 'shopify';

export type BillingManagedByFilterComparison = {
  eq?: BillingManagedBy | null | undefined;
  gt?: BillingManagedBy | null | undefined;
  gte?: BillingManagedBy | null | undefined;
  iLike?: BillingManagedBy | null | undefined;
  in?: Array<BillingManagedBy> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: BillingManagedBy | null | undefined;
  lt?: BillingManagedBy | null | undefined;
  lte?: BillingManagedBy | null | undefined;
  neq?: BillingManagedBy | null | undefined;
  notILike?: BillingManagedBy | null | undefined;
  notIn?: Array<BillingManagedBy> | null | undefined;
  notLike?: BillingManagedBy | null | undefined;
};

export type BookingActorKind =
  | 'ai'
  | 'match'
  | 'partner'
  | 'rule'
  | 'user';

export type BookingLookupInput = {
  /** With externalId: the partner’s own id. */
  bankAccountId?: string | number | null | undefined;
  externalId?: string | null | undefined;
  /** FinBaze transaction id. */
  transactionId?: string | number | null | undefined;
};

/** What a bookkeeper firm delivers for a client administration: bookkeeping, bookkeeping + payroll, payroll only, or tax filings only. */
export type BookkeeperServiceMode =
  | 'bookkeeping'
  | 'bookkeeping_payroll'
  | 'filings_only'
  | 'payroll_only';

export type BookkeeperServiceModeFilterComparison = {
  eq?: BookkeeperServiceMode | null | undefined;
  gt?: BookkeeperServiceMode | null | undefined;
  gte?: BookkeeperServiceMode | null | undefined;
  iLike?: BookkeeperServiceMode | null | undefined;
  in?: Array<BookkeeperServiceMode> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: BookkeeperServiceMode | null | undefined;
  lt?: BookkeeperServiceMode | null | undefined;
  lte?: BookkeeperServiceMode | null | undefined;
  neq?: BookkeeperServiceMode | null | undefined;
  notILike?: BookkeeperServiceMode | null | undefined;
  notIn?: Array<BookkeeperServiceMode> | null | undefined;
  notLike?: BookkeeperServiceMode | null | undefined;
};

export type BooleanFieldComparison = {
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
};

export type CardDetailsInput = {
  last4?: string | null | undefined;
  mcc?: string | null | undefined;
  merchantCountry?: string | null | undefined;
  merchantId?: string | null | undefined;
  merchantName?: string | null | undefined;
};

export type CompanyDocumentKind =
  | 'annual_accounts_pdf'
  | 'audit_log'
  | 'credit_note_pdf'
  | 'payslip_pdf'
  | 'purchase_invoice_original'
  | 'quote_pdf'
  | 'receipt_original'
  | 'reminder_pdf'
  | 'report_pdf'
  | 'report_xlsx'
  | 'sales_invoice_pdf'
  | 'sales_invoice_ubl'
  | 'tax_filing_pdf'
  | 'tax_filing_receipt'
  | 'xaf'
  | 'year_document_pdf';

export type CompanyLayoutEditability =
  | 'full'
  | 'none'
  | 'unlocked_blocks';

export type CompanyRef = {
  externalId?: string | null | undefined;
  id?: string | number | null | undefined;
};

export type CompanyTransferStatus =
  | 'cancelled'
  | 'completed'
  | 'expired'
  | 'pending';

export type CompanyTransferTarget =
  | 'direct'
  | 'platform';

export type CostCenterFilter = {
  active?: BooleanFieldComparison | null | undefined;
  and?: Array<CostCenterFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  number?: StringFieldComparison | null | undefined;
  or?: Array<CostCenterFilter> | null | undefined;
  ownerAccountId?: StringFieldComparison | null | undefined;
  profile?: CostCenterFilterProfileFilter | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type CostCenterFilterProfileFilter = {
  and?: Array<CostCenterFilterProfileFilter> | null | undefined;
  billingManagedBy?: BillingManagedByFilterComparison | null | undefined;
  bookkeeperDeactivatedAt?: DateFieldComparison | null | undefined;
  bookkeeperId?: StringFieldComparison | null | undefined;
  bookkeeperServiceMode?: BookkeeperServiceModeFilterComparison | null | undefined;
  budgetRunRateEmailEnabled?: BooleanFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdByDeveloperId?: StringFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currencies?: CurrencyFilterComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  currentPlanId?: StringFieldComparison | null | undefined;
  defaultDueDays?: NumberFieldComparison | null | undefined;
  defaultMonetaryAccountId?: StringFieldComparison | null | undefined;
  emailBcc?: StringFieldComparison | null | undefined;
  emailCc?: StringFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  invoiceNumberFormat?: StringFieldComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  languages?: StringFieldComparison | null | undefined;
  ledgerChart?: StringFieldComparison | null | undefined;
  legalForm?: TaxLegalFormFilterComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  logo?: StringFieldComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<CostCenterFilterProfileFilter> | null | undefined;
  platformId?: IdFilterComparison | null | undefined;
  primaryColor?: StringFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffEnabled?: BooleanFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffMaxAmount?: NumberFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffMaxPercent?: NumberFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchIntervalUnit?: PurchaseInvoicePaymentBatchIntervalUnitFilterComparison | null | undefined;
  purchaseInvoicePaymentBatchIntervalValue?: NumberFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchMode?: PurchaseInvoicePaymentBatchModeFilterComparison | null | undefined;
  purchaseInvoicePaymentBatchNameTemplate?: StringFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchNextRunAt?: DateFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchRunHour?: NumberFieldComparison | null | undefined;
  quoteLayout?: JsonObjectFilterComparison | null | undefined;
  quoteNumberFormat?: StringFieldComparison | null | undefined;
  registrationCountry?: CountryFilterComparison | null | undefined;
  registrationNumber?: StringFieldComparison | null | undefined;
  reminderContent?: JsonObjectFilterComparison | null | undefined;
  reminderEmailEnabled?: BooleanFieldComparison | null | undefined;
  reminderLayout?: JsonObjectFilterComparison | null | undefined;
  reminderNumberFormat?: StringFieldComparison | null | undefined;
  remindersAutomaticEnabled?: BooleanFieldComparison | null | undefined;
  salesInvoiceAutoSendOnClose?: BooleanFieldComparison | null | undefined;
  salesInvoiceFooter?: StringFieldComparison | null | undefined;
  salesInvoiceIncludeUbl?: BooleanFieldComparison | null | undefined;
  salesInvoiceLayout?: JsonObjectFilterComparison | null | undefined;
  salesInvoicePaymentFailedEmailEnabled?: BooleanFieldComparison | null | undefined;
  salesInvoicePaymentSucceededEmailEnabled?: BooleanFieldComparison | null | undefined;
  sellToCountries?: CountryFilterComparison | null | undefined;
  senderEmail?: StringFieldComparison | null | undefined;
  smtpEnabled?: BooleanFieldComparison | null | undefined;
  smtpHost?: StringFieldComparison | null | undefined;
  smtpPasswordConfigured?: BooleanFieldComparison | null | undefined;
  smtpPort?: NumberFieldComparison | null | undefined;
  smtpSecure?: BooleanFieldComparison | null | undefined;
  smtpUser?: StringFieldComparison | null | undefined;
  stripeAccountId?: StringFieldComparison | null | undefined;
  stripeChargesEnabled?: BooleanFieldComparison | null | undefined;
  stripeDetailsSubmitted?: BooleanFieldComparison | null | undefined;
  stripePayoutsEnabled?: BooleanFieldComparison | null | undefined;
  subscriptionInvoiceGenerationEnabled?: BooleanFieldComparison | null | undefined;
  taxThresholdEmailEnabled?: BooleanFieldComparison | null | undefined;
  timezone?: StringFieldComparison | null | undefined;
  units?: UnitsFilterComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  url?: StringFieldComparison | null | undefined;
  vatFilingAcceptedEmailEnabled?: BooleanFieldComparison | null | undefined;
  vatFilingRejectedEmailEnabled?: BooleanFieldComparison | null | undefined;
};

export type CostCenterSort = {
  direction: SortDirection;
  field: CostCenterSortFields;
  nulls?: SortNulls | null | undefined;
};

export type CostCenterSortFields =
  | 'active'
  | 'created'
  | 'externalId'
  | 'id'
  | 'name'
  | 'number'
  | 'ownerAccountId'
  | 'profileId'
  | 'updated';

export type CostCenterUpsertFields = {
  active?: boolean | null | undefined;
  name: string;
  number: string;
};

export type CounterpartyInput = {
  bic?: string | null | undefined;
  iban?: string | null | undefined;
  name?: string | null | undefined;
};

export type Country =
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AN'
  | 'AO'
  | 'AQ'
  | 'AR'
  | 'AS'
  | 'AT'
  | 'AU'
  | 'AW'
  | 'AX'
  | 'AZ'
  | 'BA'
  | 'BB'
  | 'BD'
  | 'BE'
  | 'BF'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BR'
  | 'BS'
  | 'BT'
  | 'BV'
  | 'BW'
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CC'
  | 'CD'
  | 'CF'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CS'
  | 'CU'
  | 'CV'
  | 'CW'
  | 'CX'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  | 'EH'
  | 'ER'
  | 'ES'
  | 'ET'
  | 'FI'
  | 'FJ'
  | 'FK'
  | 'FM'
  | 'FO'
  | 'FR'
  | 'GA'
  | 'GB'
  | 'GD'
  | 'GE'
  | 'GF'
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GN'
  | 'GP'
  | 'GQ'
  | 'GR'
  | 'GS'
  | 'GT'
  | 'GU'
  | 'GW'
  | 'GY'
  | 'HK'
  | 'HM'
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IR'
  | 'IS'
  | 'IT'
  | 'JE'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  | 'KI'
  | 'KM'
  | 'KN'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KY'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LK'
  | 'LR'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'LY'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'MG'
  | 'MH'
  | 'MK'
  | 'ML'
  | 'MM'
  | 'MN'
  | 'MO'
  | 'MP'
  | 'MQ'
  | 'MR'
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  | 'MW'
  | 'MX'
  | 'MY'
  | 'MZ'
  | 'NA'
  | 'NC'
  | 'NE'
  | 'NF'
  | 'NG'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'NP'
  | 'NR'
  | 'NU'
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PF'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PM'
  | 'PN'
  | 'PR'
  | 'PS'
  | 'PT'
  | 'PW'
  | 'PY'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'ST'
  | 'SV'
  | 'SY'
  | 'SZ'
  | 'TC'
  | 'TD'
  | 'TF'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TK'
  | 'TL'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TT'
  | 'TV'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VA'
  | 'VC'
  | 'VE'
  | 'VG'
  | 'VI'
  | 'VN'
  | 'VU'
  | 'WF'
  | 'WS'
  | 'YE'
  | 'YT'
  | 'ZA'
  | 'ZM'
  | 'ZW';

export type CountryFilterComparison = {
  eq?: Country | null | undefined;
  gt?: Country | null | undefined;
  gte?: Country | null | undefined;
  iLike?: Country | null | undefined;
  in?: Array<Country> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: Country | null | undefined;
  lt?: Country | null | undefined;
  lte?: Country | null | undefined;
  neq?: Country | null | undefined;
  notILike?: Country | null | undefined;
  notIn?: Array<Country> | null | undefined;
  notLike?: Country | null | undefined;
};

export type CreateApiCredentialInput = {
  name?: string | null | undefined;
};

export type CreateCostCenterInput = {
  active?: boolean;
  name: string;
  number: string;
  ownerAccountId?: string | null | undefined;
};

export type CreateEmbedSessionInput = {
  companyId: string | number;
  components: EmbedSessionComponentsInput;
  kind?: EmbedSessionKind;
  /** nl-NL | en-NL | en-GB | en-US. Defaults to the company language. */
  locale?: string | null | undefined;
  /** One of the platform's allowed origins; the session then only works there. */
  origin?: string | null | undefined;
  /** Previous session id from the same mount (sent by the SDK on refresh). */
  previousSessionId?: string | number | null | undefined;
  /** Required with a platform server token; omit (or name the same user) with a platform user token. */
  user?: EmbedSessionUserInput | null | undefined;
};

export type CreateExportDestinationInput = {
  bucket?: string | null | undefined;
  /** { accessKeyId, secretAccessKey } or { sasUrl }. Stored encrypted, never returned. */
  credentials: Record<string, unknown>;
  credentialsExpireAt?: string | null | undefined;
  /** https endpoint of an S3-compatible service. */
  endpoint?: string | null | undefined;
  key: string;
  kmsKeyId?: string | null | undefined;
  prefix?: string | null | undefined;
  region?: string | null | undefined;
  serverSideEncryption?: string | null | undefined;
  /** s3 (also S3-compatible: GCS interop, OVH, MinIO) or azure_blob. */
  type: string;
};

export type CreateExportScheduleInput = {
  companyIds?: Array<string | number> | null | undefined;
  companyScope?: string | null | undefined;
  compression?: string | null | undefined;
  /** Default 0 3 * * *; at most once an hour. */
  cron?: string | null | undefined;
  datasets: Array<string>;
  destinationKey: string;
  /** parquet, csv or ndjson. */
  format?: string;
  key: string;
  pathTemplate?: string | null | undefined;
  timezone?: string | null | undefined;
};

export type CreateMonetaryAccountInput = {
  active?: boolean | null | undefined;
  bic?: string | null | undefined;
  currency: Currency;
  end?: string | null | undefined;
  externalId?: string | null | undefined;
  externalInstitution?: string | null | undefined;
  externalProvider?: MonetaryAccountProvider | null | undefined;
  externalStatus?: string | null | undefined;
  iban?: string | null | undefined;
  initialBalance?: number | null | undefined;
  ledger?: string | null | undefined;
  name: string;
  parentMonetaryAccountId?: string | number | null | undefined;
  start?: string | null | undefined;
  type: MonetaryAccountType;
};

export type CreateMonetaryAccountPaymentInput = {
  amount: number;
  bic?: string | null | undefined;
  createdById?: string | null | undefined;
  currentAccountId?: string | null | undefined;
  date: string;
  description?: string | null | undefined;
  externalId?: string | null | undefined;
  externalProvider?: MonetaryAccountProvider | null | undefined;
  iban?: string | null | undefined;
  ledgerId?: string | null | undefined;
  loanId?: string | null | undefined;
  loanInstallmentId?: string | null | undefined;
  name: string;
  originalAmount?: number | null | undefined;
  originalCurrency?: Currency | null | undefined;
  payslipId?: string | null | undefined;
  projectId?: string | null | undefined;
  purchaseInvoiceId?: string | null | undefined;
  relationId?: string | null | undefined;
  reminderId?: string | null | undefined;
  salesInvoiceId?: string | null | undefined;
  taxFilingId?: string | null | undefined;
};

export type CreatePlatformCompanyInput = {
  address?: Address | null | undefined;
  currency?: Currency | null | undefined;
  externalId: string;
  financialYear?: PlatformCompanyFinancialYearInput | null | undefined;
  language?: string | null | undefined;
  legalForm?: TaxLegalForm | null | undefined;
  legalName?: string | null | undefined;
  name?: string | null | undefined;
  platformId?: string | number | null | undefined;
  /** Default true: look the company up in KvK / Companies House. */
  prefill?: boolean | null | undefined;
  registrationCountry: Country;
  registrationNumber?: string | null | undefined;
  /** Omit for country defaults; [] for none. */
  taxObligations?: Array<PlatformCompanyTaxObligationInput> | null | undefined;
  /** Sandbox only (error SANDBOX_ONLY elsewhere): put the company on this test clock. */
  testClockId?: string | number | null | undefined;
  timezone?: string | null | undefined;
  vatNumber?: string | null | undefined;
};

export type CreatePlatformSenderDomainInput = {
  domain: string;
  fromLocalPart?: string | null | undefined;
};

export type CreatePlatformUserTokenInput = {
  externalUserId?: string | null | undefined;
  /** Narrow the token to these companies (must be the user's companies). */
  profileIds?: Array<string | number> | null | undefined;
  /** Topic scopes only; default: all topic scopes of the minting key. */
  scopes?: Array<string> | null | undefined;
  /** 60–3600, default 900 */
  ttlSeconds?: number | null | undefined;
  userId?: string | number | null | undefined;
};

export type CreatePlatformWebhookEndpointInput = {
  description?: string | null | undefined;
  /** Event types, or `*` for every available type. */
  eventTypes: Array<string>;
  failoverUrl?: string | null | undefined;
  url: string;
};

export type CreateProjectInput = {
  createdById?: string | null | undefined;
  end?: string | null | undefined;
  name: string;
  relationId?: string | null | undefined;
  start?: string | null | undefined;
};

export type CreatePurchaseInvoiceInput = {
  acceptedAt?: string | null | undefined;
  amount?: number | null | undefined;
  closed?: string | null | undefined;
  createdById?: string | null | undefined;
  currency: Currency;
  date?: string | null | undefined;
  disputed?: string | null | undefined;
  due?: string | null | undefined;
  number?: string | null | undefined;
  paid?: string | null | undefined;
  period?: PurchaseInvoicePeriodInput | null | undefined;
  reference?: string | null | undefined;
  relationId?: string | null | undefined;
  scheduled?: string | null | undefined;
  uuid: string;
};

export type CreateRecurringInput = {
  allowedPaymentMethods?: Array<SubscriptionPaymentMethodType>;
  canceled?: string | null | undefined;
  chargeRetryIntervalDays?: number | null | undefined;
  chargeRetryLimit?: number | null | undefined;
  collection?: RecurringCollection;
  createdById?: string | null | undefined;
  currency: Currency;
  customerCancellation?: RecurringCustomerCancellation;
  endDate?: string | null | undefined;
  frequency: Frequency;
  invoiceTiming?: RecurringInvoiceTiming;
  minimumTermMonths?: number | null | undefined;
  name: string;
  noticePeriodDays?: number | null | undefined;
  offset?: number | null | undefined;
  paymentTermDays?: number;
  recurringTemplateId?: string | null | undefined;
  relationId: string;
  renewal?: RecurringRenewal;
  renewalTermMonths?: number | null | undefined;
  startDate: string;
  uuid: string;
};

export type CreateRelationInput = {
  address?: Address | null | undefined;
  createdById?: string | null | undefined;
  defaultCostCenterId?: string | null | undefined;
  email?: string | null | undefined;
  firstName?: string | null | undefined;
  language?: string | null | undefined;
  lastName?: string | null | undefined;
  legalName?: string | null | undefined;
  paymentKeywords: Array<string>;
  registrationCountry?: string | null | undefined;
  registrationNumber?: string | null | undefined;
  remindersAutomaticDisabled?: boolean;
  standardDueDays?: number | null | undefined;
  tags: Array<string>;
  usTaxClassification?: UsTaxClassification | null | undefined;
  uuid: string;
  vatNumber?: string | null | undefined;
  w9ReceivedAt?: string | null | undefined;
};

export type CreateSalesInvoiceInput = {
  address?: Address | null | undefined;
  bookingDate?: string | null | undefined;
  createdById?: string | null | undefined;
  currency: Currency;
  date?: string | null | undefined;
  due?: string | null | undefined;
  email?: string | null | undefined;
  entryId?: string | null | undefined;
  firstName?: string | null | undefined;
  footer?: string | null | undefined;
  initialInvoiceId?: string | null | undefined;
  lastName?: string | null | undefined;
  legalName?: string | null | undefined;
  memo?: string | null | undefined;
  paid?: string | null | undefined;
  period?: SalesInvoicePeriodInput | null | undefined;
  recurringId?: string | null | undefined;
  reference?: string | null | undefined;
  relationId?: string | null | undefined;
  uuid: string;
  vatNumber?: string | null | undefined;
};

export type CreateSupportEscalationInput = {
  /** The company the case is about. Required for company users (embed). */
  companyId?: string | number | null | undefined;
  contactEmail?: string | null | undefined;
  description: string;
  /** `X-Request-Id` of the failing requests (at most 20). */
  requestIds?: Array<string> | null | undefined;
  screen?: string | null | undefined;
  severity?: SupportSeverity | null | undefined;
  subject: string;
};

export type Currency =
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BOV'
  | 'BRL'
  | 'BSD'
  | 'BTN'
  | 'BWP'
  | 'BYN'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHE'
  | 'CHF'
  | 'CHW'
  | 'CLF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'COU'
  | 'CRC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRU'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MXV'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLE'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'SSP'
  | 'STN'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'USN'
  | 'UYI'
  | 'UYU'
  | 'UYW'
  | 'UZS'
  | 'VED'
  | 'VES'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XAG'
  | 'XAU'
  | 'XBA'
  | 'XBB'
  | 'XBC'
  | 'XBD'
  | 'XCD'
  | 'XDR'
  | 'XOF'
  | 'XPD'
  | 'XPF'
  | 'XPT'
  | 'XSU'
  | 'XTS'
  | 'XUA'
  | 'XXX'
  | 'YER'
  | 'ZAR'
  | 'ZMW'
  | 'ZWL';

export type CurrencyFilterComparison = {
  eq?: Currency | null | undefined;
  gt?: Currency | null | undefined;
  gte?: Currency | null | undefined;
  iLike?: Currency | null | undefined;
  in?: Array<Currency> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: Currency | null | undefined;
  lt?: Currency | null | undefined;
  lte?: Currency | null | undefined;
  neq?: Currency | null | undefined;
  notILike?: Currency | null | undefined;
  notIn?: Array<Currency> | null | undefined;
  notLike?: Currency | null | undefined;
};

export type CurrentAccountKind =
  | 'director'
  | 'general'
  | 'group_company'
  | 'shareholder';

export type CurrentAccountKindFilterComparison = {
  eq?: CurrentAccountKind | null | undefined;
  gt?: CurrentAccountKind | null | undefined;
  gte?: CurrentAccountKind | null | undefined;
  iLike?: CurrentAccountKind | null | undefined;
  in?: Array<CurrentAccountKind> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: CurrentAccountKind | null | undefined;
  lt?: CurrentAccountKind | null | undefined;
  lte?: CurrentAccountKind | null | undefined;
  neq?: CurrentAccountKind | null | undefined;
  notILike?: CurrentAccountKind | null | undefined;
  notIn?: Array<CurrentAccountKind> | null | undefined;
  notLike?: CurrentAccountKind | null | undefined;
};

export type CustomDomainStatus =
  | 'active'
  | 'disabled'
  | 'failed'
  | 'issuing_certificate'
  | 'pending_dns';

export type DataSourceCadence =
  | 'business_daily'
  | 'daily'
  | 'hourly'
  | 'realtime';

export type DataSourceType =
  | 'bank_feed'
  | 'card_feed'
  | 'custom_records'
  | 'hours_feed'
  | 'payout_feed'
  | 'purchase_feed'
  | 'sales_feed';

export type DateFieldComparison = {
  between?: DateFieldComparisonBetween | null | undefined;
  eq?: string | null | undefined;
  gt?: string | null | undefined;
  gte?: string | null | undefined;
  in?: Array<string> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  lt?: string | null | undefined;
  lte?: string | null | undefined;
  neq?: string | null | undefined;
  notBetween?: DateFieldComparisonBetween | null | undefined;
  notIn?: Array<string> | null | undefined;
};

export type DateFieldComparisonBetween = {
  lower: string;
  upper: string;
};

export type DefineRecordTypeInput = {
  deepLinkTemplate?: string | null | undefined;
  /** For example `Shipment {{data.reference}}`. */
  displayTemplate: string;
  initialState: string;
  key: string;
  name: string;
  /** JSON Schema for `data`; an object schema. */
  schema: Record<string, unknown>;
  states: Array<string>;
  /** Allowed moves, `{ "from": ["to", …] }`. Left out: any state to any. */
  transitions?: Record<string, unknown> | null | undefined;
};

export type DeveloperKind =
  | 'developer'
  | 'platform';

export type DeveloperKindFilterComparison = {
  eq?: DeveloperKind | null | undefined;
  gt?: DeveloperKind | null | undefined;
  gte?: DeveloperKind | null | undefined;
  iLike?: DeveloperKind | null | undefined;
  in?: Array<DeveloperKind> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: DeveloperKind | null | undefined;
  lt?: DeveloperKind | null | undefined;
  lte?: DeveloperKind | null | undefined;
  neq?: DeveloperKind | null | undefined;
  notILike?: DeveloperKind | null | undefined;
  notIn?: Array<DeveloperKind> | null | undefined;
  notLike?: DeveloperKind | null | undefined;
};

export type DocumentLayoutStatus =
  | 'active'
  | 'archived'
  | 'draft';

export type DocumentRenderMode =
  | 'finbaze_layout'
  | 'partner'
  | 'template';

export type DocumentRequestStatus =
  | 'cancelled'
  | 'fulfilled'
  | 'open';

export type DocumentRequestStatusFilterComparison = {
  eq?: DocumentRequestStatus | null | undefined;
  gt?: DocumentRequestStatus | null | undefined;
  gte?: DocumentRequestStatus | null | undefined;
  iLike?: DocumentRequestStatus | null | undefined;
  in?: Array<DocumentRequestStatus> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: DocumentRequestStatus | null | undefined;
  lt?: DocumentRequestStatus | null | undefined;
  lte?: DocumentRequestStatus | null | undefined;
  neq?: DocumentRequestStatus | null | undefined;
  notILike?: DocumentRequestStatus | null | undefined;
  notIn?: Array<DocumentRequestStatus> | null | undefined;
  notLike?: DocumentRequestStatus | null | undefined;
};

export type DocumentRequestType =
  | 'general'
  | 'monetary_account_payment'
  | 'purchase_invoice'
  | 'sales_invoice';

export type DocumentRequestTypeFilterComparison = {
  eq?: DocumentRequestType | null | undefined;
  gt?: DocumentRequestType | null | undefined;
  gte?: DocumentRequestType | null | undefined;
  iLike?: DocumentRequestType | null | undefined;
  in?: Array<DocumentRequestType> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: DocumentRequestType | null | undefined;
  lt?: DocumentRequestType | null | undefined;
  lte?: DocumentRequestType | null | undefined;
  neq?: DocumentRequestType | null | undefined;
  notILike?: DocumentRequestType | null | undefined;
  notIn?: Array<DocumentRequestType> | null | undefined;
  notLike?: DocumentRequestType | null | undefined;
};

export type DocumentTemplateAssetInput = {
  /** image/png, image/jpeg or image/webp. */
  contentType: string;
  /** Base64. */
  data: string;
  key: string;
};

export type DocumentTemplateStatus =
  | 'active'
  | 'archived'
  | 'draft'
  | 'rejected'
  | 'validating';

export type DocumentType =
  | 'annual_accounts'
  | 'invoice'
  | 'loonstaat'
  | 'payslip'
  | 'quote'
  | 'reminder'
  | 'report'
  | 'year_document';

export type EmbedAccountantConnectComponentInput = {
  enabled?: boolean;
  features?: EmbedAccountantConnectFeaturesInput | null | undefined;
};

export type EmbedAccountantConnectFeaturesInput = {
  approve?: boolean | null | undefined;
  end?: boolean | null | undefined;
  invite?: boolean | null | undefined;
};

export type EmbedBasicComponentInput = {
  enabled?: boolean;
};

export type EmbedBookingChipComponentInput = {
  enabled?: boolean;
  features?: EmbedBookingChipFeaturesInput | null | undefined;
};

export type EmbedBookingChipFeaturesInput = {
  edit?: boolean | null | undefined;
};

export type EmbedComponent =
  | 'accountant_connect'
  | 'action_centre'
  | 'booking_chip'
  | 'company_transfer'
  | 'contact_support'
  | 'icp_return'
  | 'notification_banner'
  | 'onboarding'
  | 'oss_return'
  | 'purchase_inbox'
  | 'receipt_button'
  | 'support_access'
  | 'tax_authorisation'
  | 'tax_calendar'
  | 'tax_due_chip'
  | 'tax_payments'
  | 'transaction_detail'
  | 'transactions'
  | 'vat_return';

export type EmbedOnboardingComponentInput = {
  enabled?: boolean;
  features?: EmbedOnboardingFeaturesInput | null | undefined;
};

export type EmbedOnboardingFeaturesInput = {
  editCompany?: boolean | null | undefined;
  filingConsent?: boolean | null | undefined;
  taxSetup?: boolean | null | undefined;
};

export type EmbedPurchaseInboxComponentInput = {
  enabled?: boolean;
  features?: EmbedPurchaseInboxFeaturesInput | null | undefined;
};

export type EmbedPurchaseInboxFeaturesInput = {
  approve?: boolean | null | undefined;
  emailForwarding?: boolean | null | undefined;
  upload?: boolean | null | undefined;
};

export type EmbedSessionComponentsInput = {
  accountantConnect?: EmbedAccountantConnectComponentInput | null | undefined;
  actionCentre?: EmbedBasicComponentInput | null | undefined;
  bookingChip?: EmbedBookingChipComponentInput | null | undefined;
  companyTransfer?: EmbedBasicComponentInput | null | undefined;
  contactSupport?: EmbedBasicComponentInput | null | undefined;
  icpReturn?: EmbedSubmitComponentInput | null | undefined;
  notificationBanner?: EmbedBasicComponentInput | null | undefined;
  onboarding?: EmbedOnboardingComponentInput | null | undefined;
  ossReturn?: EmbedSubmitComponentInput | null | undefined;
  purchaseInbox?: EmbedPurchaseInboxComponentInput | null | undefined;
  receiptButton?: EmbedBasicComponentInput | null | undefined;
  supportAccess?: EmbedBasicComponentInput | null | undefined;
  taxAuthorisation?: EmbedTaxAuthorisationComponentInput | null | undefined;
  taxCalendar?: EmbedBasicComponentInput | null | undefined;
  taxDueChip?: EmbedBasicComponentInput | null | undefined;
  taxPayments?: EmbedTaxPaymentsComponentInput | null | undefined;
  transactionDetail?: EmbedTransactionsComponentInput | null | undefined;
  transactions?: EmbedTransactionsComponentInput | null | undefined;
  vatReturn?: EmbedVatReturnComponentInput | null | undefined;
};

export type EmbedSessionFilterInput = {
  companyId?: string | number | null | undefined;
  createdAfter?: string | null | undefined;
  platformUserId?: string | number | null | undefined;
  status?: EmbedSessionStatus | null | undefined;
};

export type EmbedSessionKind =
  | 'embed'
  | 'headless';

export type EmbedSessionStatus =
  | 'created'
  | 'exchanged'
  | 'expired'
  | 'revoked';

export type EmbedSessionUserInput = {
  externalUserId?: string | null | undefined;
  /** Exactly one of the two. */
  platformUserId?: string | number | null | undefined;
};

export type EmbedSubmitComponentInput = {
  enabled?: boolean;
  features?: EmbedSubmitFeaturesInput | null | undefined;
};

export type EmbedSubmitFeaturesInput = {
  inlineConsent?: boolean | null | undefined;
  submit?: boolean | null | undefined;
};

export type EmbedTaxAuthorisationComponentInput = {
  enabled?: boolean;
  features?: EmbedTaxAuthorisationFeaturesInput | null | undefined;
};

export type EmbedTaxAuthorisationFeaturesInput = {
  grant?: boolean | null | undefined;
  hmrcConnect?: boolean | null | undefined;
  revoke?: boolean | null | undefined;
};

export type EmbedTaxPaymentsComponentInput = {
  enabled?: boolean;
  features?: EmbedTaxPaymentsFeaturesInput | null | undefined;
};

export type EmbedTaxPaymentsFeaturesInput = {
  internetkassa?: boolean | null | undefined;
  paymentHandoff?: boolean | null | undefined;
};

export type EmbedTransactionsComponentInput = {
  enabled?: boolean;
  features?: EmbedTransactionsFeaturesInput | null | undefined;
};

export type EmbedTransactionsFeaturesInput = {
  aiSuggestions?: boolean | null | undefined;
  attachReceipt?: boolean | null | undefined;
  categorise?: boolean | null | undefined;
  matchInvoices?: boolean | null | undefined;
  split?: boolean | null | undefined;
};

export type EmbedVatReturnComponentInput = {
  enabled?: boolean;
  features?: EmbedVatReturnFeaturesInput | null | undefined;
};

export type EmbedVatReturnFeaturesInput = {
  inlineConsent?: boolean | null | undefined;
  payment?: boolean | null | undefined;
  submit?: boolean | null | undefined;
  suppletie?: boolean | null | undefined;
};

export type EmployeeGenderInput =
  | 'female'
  | 'male'
  | 'unknown';

export type EmployeeUpsertFields = {
  address?: AddressUpsertFields | null | undefined;
  /** ISO date. */
  dateOfBirth?: string | null | undefined;
  email?: string | null | undefined;
  /** Defaults to the next free personnel number. */
  employeeNumber?: string | null | undefined;
  firstName: string;
  gender?: EmployeeGenderInput | null | undefined;
  lastName: string;
  middleName?: string | null | undefined;
  nationality?: string | null | undefined;
  phone?: string | null | undefined;
};

export type EmploymentCallTypeInput =
  | 'min_max'
  | 'none'
  | 'on_call';

export type EmploymentContractTypeInput =
  | 'fixed_term'
  | 'indefinite';

export type EmploymentUpsertFields = {
  callType?: EmploymentCallTypeInput | null | undefined;
  contractType: EmploymentContractTypeInput;
  employee: ObjectRef;
  /** ISO date. Required for a fixed-term contract. */
  endDate?: string | null | undefined;
  grossWageFrequency?: GrossWageFrequencyInput | null | undefined;
  /** Contractual gross wage in cents for the frequency. */
  grossWageMinor?: number | null | undefined;
  hoursPerWeek?: number | null | undefined;
  noticePeriodDays?: number | null | undefined;
  /** ISO date. */
  startDate: string;
  /** Only needed when the company has more than one wage tax obligation. */
  wageTaxObligationId?: string | number | null | undefined;
};

export type EngagementSide =
  | 'company'
  | 'finbaze'
  | 'firm'
  | 'platform'
  | 'system';

export type FeedAccountType =
  | 'bank'
  | 'card'
  | 'psp';

export type FeedHealthStatus =
  | 'balance_mismatch'
  | 'delayed'
  | 'gap'
  | 'healthy'
  | 'stopped';

export type FeedTransactionStatus =
  | 'booked'
  | 'pending';

export type FinancialYearGranularity =
  | 'half_year'
  | 'month'
  | 'quarter'
  | 'year';

export type FlowTemplateFormat =
  | 'json'
  | 'yaml';

export type Frequency =
  | 'bi_monthly'
  | 'bi_weekly'
  | 'daily'
  | 'monthly'
  | 'quarterly'
  | 'semi_annual'
  | 'weekly'
  | 'yearly';

export type FrequencyFilterComparison = {
  eq?: Frequency | null | undefined;
  gt?: Frequency | null | undefined;
  gte?: Frequency | null | undefined;
  iLike?: Frequency | null | undefined;
  in?: Array<Frequency> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: Frequency | null | undefined;
  lt?: Frequency | null | undefined;
  lte?: Frequency | null | undefined;
  neq?: Frequency | null | undefined;
  notILike?: Frequency | null | undefined;
  notIn?: Array<Frequency> | null | undefined;
  notLike?: Frequency | null | undefined;
};

export type FxInput = {
  originalAmountMinor: number;
  originalCurrency: Currency;
  rate?: string | null | undefined;
};

export type GrossWageFrequencyInput =
  | 'four_weeks'
  | 'hour'
  | 'month'
  | 'week';

export type IdFilterComparison = {
  eq?: string | number | null | undefined;
  gt?: string | number | null | undefined;
  gte?: string | number | null | undefined;
  iLike?: string | number | null | undefined;
  in?: Array<string | number> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: string | number | null | undefined;
  lt?: string | number | null | undefined;
  lte?: string | number | null | undefined;
  neq?: string | number | null | undefined;
  notILike?: string | number | null | undefined;
  notIn?: Array<string | number> | null | undefined;
  notLike?: string | number | null | undefined;
};

export type JsonObjectFilterComparison = {
  eq?: Record<string, unknown> | null | undefined;
  gt?: Record<string, unknown> | null | undefined;
  gte?: Record<string, unknown> | null | undefined;
  iLike?: Record<string, unknown> | null | undefined;
  in?: Array<Record<string, unknown>> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: Record<string, unknown> | null | undefined;
  lt?: Record<string, unknown> | null | undefined;
  lte?: Record<string, unknown> | null | undefined;
  neq?: Record<string, unknown> | null | undefined;
  notILike?: Record<string, unknown> | null | undefined;
  notIn?: Array<Record<string, unknown>> | null | undefined;
  notLike?: Record<string, unknown> | null | undefined;
};

export type JournalEntryLineUpsertFields = {
  /** Debit-positive: positive debits the ledger, negative credits it. Not zero. */
  amountMinor: number;
  description?: string | null | undefined;
  /** Ledger code in the company chart. */
  ledger: string;
  name?: string | null | undefined;
  project?: ObjectRef | null | undefined;
};

export type JournalEntryUpsertFields = {
  /** ISO date, 2026-10-17. */
  date: string;
  description?: string | null | undefined;
  /** At least two lines that add up to exactly zero. */
  lines: Array<JournalEntryLineUpsertFields>;
  name: string;
};

export type LoanDirection =
  | 'payable'
  | 'receivable';

export type LoanDirectionFilterComparison = {
  eq?: LoanDirection | null | undefined;
  gt?: LoanDirection | null | undefined;
  gte?: LoanDirection | null | undefined;
  iLike?: LoanDirection | null | undefined;
  in?: Array<LoanDirection> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: LoanDirection | null | undefined;
  lt?: LoanDirection | null | undefined;
  lte?: LoanDirection | null | undefined;
  neq?: LoanDirection | null | undefined;
  notILike?: LoanDirection | null | undefined;
  notIn?: Array<LoanDirection> | null | undefined;
  notLike?: LoanDirection | null | undefined;
};

export type LoanInstallmentStatus =
  | 'open'
  | 'paid';

export type LoanInstallmentStatusFilterComparison = {
  eq?: LoanInstallmentStatus | null | undefined;
  gt?: LoanInstallmentStatus | null | undefined;
  gte?: LoanInstallmentStatus | null | undefined;
  iLike?: LoanInstallmentStatus | null | undefined;
  in?: Array<LoanInstallmentStatus> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: LoanInstallmentStatus | null | undefined;
  lt?: LoanInstallmentStatus | null | undefined;
  lte?: LoanInstallmentStatus | null | undefined;
  neq?: LoanInstallmentStatus | null | undefined;
  notILike?: LoanInstallmentStatus | null | undefined;
  notIn?: Array<LoanInstallmentStatus> | null | undefined;
  notLike?: LoanInstallmentStatus | null | undefined;
};

export type LoanInterestType =
  | 'annuity'
  | 'bullet'
  | 'constant_payment'
  | 'interest_free'
  | 'linear';

export type LoanInterestTypeFilterComparison = {
  eq?: LoanInterestType | null | undefined;
  gt?: LoanInterestType | null | undefined;
  gte?: LoanInterestType | null | undefined;
  iLike?: LoanInterestType | null | undefined;
  in?: Array<LoanInterestType> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: LoanInterestType | null | undefined;
  lt?: LoanInterestType | null | undefined;
  lte?: LoanInterestType | null | undefined;
  neq?: LoanInterestType | null | undefined;
  notILike?: LoanInterestType | null | undefined;
  notIn?: Array<LoanInterestType> | null | undefined;
  notLike?: LoanInterestType | null | undefined;
};

export type MonetaryAccountFilter = {
  active?: BooleanFieldComparison | null | undefined;
  and?: Array<MonetaryAccountFilter> | null | undefined;
  autoProcessRules?: MonetaryAccountFilterMonetaryAccountAutoProcessFilter | null | undefined;
  bic?: StringFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  end?: DateFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  externalInstitution?: StringFieldComparison | null | undefined;
  externalProvider?: MonetaryAccountProviderFilterComparison | null | undefined;
  externalStatus?: StringFieldComparison | null | undefined;
  iban?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  initialBalance?: NumberFieldComparison | null | undefined;
  ledger?: StringFieldComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<MonetaryAccountFilter> | null | undefined;
  parentMonetaryAccountId?: IdFilterComparison | null | undefined;
  profile?: MonetaryAccountFilterProfileFilter | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  start?: DateFieldComparison | null | undefined;
  type?: MonetaryAccountTypeFilterComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type MonetaryAccountFilterMonetaryAccountAutoProcessFilter = {
  and?: Array<MonetaryAccountFilterMonetaryAccountAutoProcessFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  monetaryAccountId?: StringFieldComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<MonetaryAccountFilterMonetaryAccountAutoProcessFilter> | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type MonetaryAccountFilterProfileFilter = {
  and?: Array<MonetaryAccountFilterProfileFilter> | null | undefined;
  billingManagedBy?: BillingManagedByFilterComparison | null | undefined;
  bookkeeperDeactivatedAt?: DateFieldComparison | null | undefined;
  bookkeeperId?: StringFieldComparison | null | undefined;
  bookkeeperServiceMode?: BookkeeperServiceModeFilterComparison | null | undefined;
  budgetRunRateEmailEnabled?: BooleanFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdByDeveloperId?: StringFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currencies?: CurrencyFilterComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  currentPlanId?: StringFieldComparison | null | undefined;
  defaultDueDays?: NumberFieldComparison | null | undefined;
  defaultMonetaryAccountId?: StringFieldComparison | null | undefined;
  emailBcc?: StringFieldComparison | null | undefined;
  emailCc?: StringFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  invoiceNumberFormat?: StringFieldComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  languages?: StringFieldComparison | null | undefined;
  ledgerChart?: StringFieldComparison | null | undefined;
  legalForm?: TaxLegalFormFilterComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  logo?: StringFieldComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<MonetaryAccountFilterProfileFilter> | null | undefined;
  platformId?: IdFilterComparison | null | undefined;
  primaryColor?: StringFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffEnabled?: BooleanFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffMaxAmount?: NumberFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffMaxPercent?: NumberFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchIntervalUnit?: PurchaseInvoicePaymentBatchIntervalUnitFilterComparison | null | undefined;
  purchaseInvoicePaymentBatchIntervalValue?: NumberFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchMode?: PurchaseInvoicePaymentBatchModeFilterComparison | null | undefined;
  purchaseInvoicePaymentBatchNameTemplate?: StringFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchNextRunAt?: DateFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchRunHour?: NumberFieldComparison | null | undefined;
  quoteLayout?: JsonObjectFilterComparison | null | undefined;
  quoteNumberFormat?: StringFieldComparison | null | undefined;
  registrationCountry?: CountryFilterComparison | null | undefined;
  registrationNumber?: StringFieldComparison | null | undefined;
  reminderContent?: JsonObjectFilterComparison | null | undefined;
  reminderEmailEnabled?: BooleanFieldComparison | null | undefined;
  reminderLayout?: JsonObjectFilterComparison | null | undefined;
  reminderNumberFormat?: StringFieldComparison | null | undefined;
  remindersAutomaticEnabled?: BooleanFieldComparison | null | undefined;
  salesInvoiceAutoSendOnClose?: BooleanFieldComparison | null | undefined;
  salesInvoiceFooter?: StringFieldComparison | null | undefined;
  salesInvoiceIncludeUbl?: BooleanFieldComparison | null | undefined;
  salesInvoiceLayout?: JsonObjectFilterComparison | null | undefined;
  salesInvoicePaymentFailedEmailEnabled?: BooleanFieldComparison | null | undefined;
  salesInvoicePaymentSucceededEmailEnabled?: BooleanFieldComparison | null | undefined;
  sellToCountries?: CountryFilterComparison | null | undefined;
  senderEmail?: StringFieldComparison | null | undefined;
  smtpEnabled?: BooleanFieldComparison | null | undefined;
  smtpHost?: StringFieldComparison | null | undefined;
  smtpPasswordConfigured?: BooleanFieldComparison | null | undefined;
  smtpPort?: NumberFieldComparison | null | undefined;
  smtpSecure?: BooleanFieldComparison | null | undefined;
  smtpUser?: StringFieldComparison | null | undefined;
  stripeAccountId?: StringFieldComparison | null | undefined;
  stripeChargesEnabled?: BooleanFieldComparison | null | undefined;
  stripeDetailsSubmitted?: BooleanFieldComparison | null | undefined;
  stripePayoutsEnabled?: BooleanFieldComparison | null | undefined;
  subscriptionInvoiceGenerationEnabled?: BooleanFieldComparison | null | undefined;
  taxThresholdEmailEnabled?: BooleanFieldComparison | null | undefined;
  timezone?: StringFieldComparison | null | undefined;
  units?: UnitsFilterComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  url?: StringFieldComparison | null | undefined;
  vatFilingAcceptedEmailEnabled?: BooleanFieldComparison | null | undefined;
  vatFilingRejectedEmailEnabled?: BooleanFieldComparison | null | undefined;
};

export type MonetaryAccountPaymentFilter = {
  amount?: NumberFieldComparison | null | undefined;
  and?: Array<MonetaryAccountPaymentFilter> | null | undefined;
  bankReference?: StringFieldComparison | null | undefined;
  bic?: StringFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdBy?: MonetaryAccountPaymentFilterAccountFilter | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currentAccount?: MonetaryAccountPaymentFilterCurrentAccountFilter | null | undefined;
  currentAccountId?: StringFieldComparison | null | undefined;
  date?: DateFieldComparison | null | undefined;
  description?: StringFieldComparison | null | undefined;
  endToEndId?: StringFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  externalProvider?: MonetaryAccountProviderFilterComparison | null | undefined;
  iban?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  ledgerId?: StringFieldComparison | null | undefined;
  loan?: MonetaryAccountPaymentFilterLoanFilter | null | undefined;
  loanId?: StringFieldComparison | null | undefined;
  loanInstallment?: MonetaryAccountPaymentFilterLoanInstallmentFilter | null | undefined;
  loanInstallmentId?: StringFieldComparison | null | undefined;
  monetaryAccount?: MonetaryAccountPaymentFilterMonetaryAccountFilter | null | undefined;
  monetaryAccountId?: StringFieldComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<MonetaryAccountPaymentFilter> | null | undefined;
  originalAmount?: NumberFieldComparison | null | undefined;
  originalCurrency?: CurrencyFilterComparison | null | undefined;
  payslip?: MonetaryAccountPaymentFilterPayslipFilter | null | undefined;
  payslipId?: StringFieldComparison | null | undefined;
  processed?: BooleanFieldComparison | null | undefined;
  project?: MonetaryAccountPaymentFilterProjectFilter | null | undefined;
  projectId?: StringFieldComparison | null | undefined;
  purchaseInvoice?: MonetaryAccountPaymentFilterPurchaseInvoiceFilter | null | undefined;
  purchaseInvoiceId?: StringFieldComparison | null | undefined;
  relation?: MonetaryAccountPaymentFilterRelationFilter | null | undefined;
  relationId?: StringFieldComparison | null | undefined;
  reminder?: MonetaryAccountPaymentFilterReminderFilter | null | undefined;
  reminderId?: StringFieldComparison | null | undefined;
  salesInvoice?: MonetaryAccountPaymentFilterSalesInvoiceFilter | null | undefined;
  salesInvoiceId?: StringFieldComparison | null | undefined;
  settlement?: MonetaryAccountPaymentFilterSettlementFilter | null | undefined;
  settlementId?: StringFieldComparison | null | undefined;
  taxFiling?: MonetaryAccountPaymentFilterTaxFilingFilter | null | undefined;
  taxFilingId?: StringFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  valueDate?: StringFieldComparison | null | undefined;
};

export type MonetaryAccountPaymentFilterAccountFilter = {
  adminId?: StringFieldComparison | null | undefined;
  and?: Array<MonetaryAccountPaymentFilterAccountFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
  firstName?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  lastName?: StringFieldComparison | null | undefined;
  or?: Array<MonetaryAccountPaymentFilterAccountFilter> | null | undefined;
  phone?: StringFieldComparison | null | undefined;
  picture?: StringFieldComparison | null | undefined;
  secret?: StringFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type MonetaryAccountPaymentFilterCurrentAccountFilter = {
  and?: Array<MonetaryAccountPaymentFilterCurrentAccountFilter> | null | undefined;
  code?: StringFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  interest?: NumberFieldComparison | null | undefined;
  kind?: CurrentAccountKindFilterComparison | null | undefined;
  ledger?: StringFieldComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<MonetaryAccountPaymentFilterCurrentAccountFilter> | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  relationId?: StringFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type MonetaryAccountPaymentFilterLoanFilter = {
  and?: Array<MonetaryAccountPaymentFilterLoanFilter> | null | undefined;
  balloon?: NumberFieldComparison | null | undefined;
  code?: StringFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  description?: StringFieldComparison | null | undefined;
  direction?: LoanDirectionFilterComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  installmentPeriod?: NumberFieldComparison | null | undefined;
  interestLedger?: StringFieldComparison | null | undefined;
  interestRate?: NumberFieldComparison | null | undefined;
  interestType?: LoanInterestTypeFilterComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<MonetaryAccountPaymentFilterLoanFilter> | null | undefined;
  principal?: NumberFieldComparison | null | undefined;
  principalLedger?: StringFieldComparison | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  relationId?: StringFieldComparison | null | undefined;
  repaymentLedger?: StringFieldComparison | null | undefined;
  startDate?: DateFieldComparison | null | undefined;
  termMonths?: NumberFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type MonetaryAccountPaymentFilterLoanInstallmentFilter = {
  and?: Array<MonetaryAccountPaymentFilterLoanInstallmentFilter> | null | undefined;
  closingBalance?: NumberFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  customized?: BooleanFieldComparison | null | undefined;
  dueDate?: DateFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  interestAmount?: NumberFieldComparison | null | undefined;
  loanId?: StringFieldComparison | null | undefined;
  openingBalance?: NumberFieldComparison | null | undefined;
  or?: Array<MonetaryAccountPaymentFilterLoanInstallmentFilter> | null | undefined;
  principalAmount?: NumberFieldComparison | null | undefined;
  sequence?: NumberFieldComparison | null | undefined;
  status?: LoanInstallmentStatusFilterComparison | null | undefined;
  totalAmount?: NumberFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type MonetaryAccountPaymentFilterMonetaryAccountFilter = {
  active?: BooleanFieldComparison | null | undefined;
  and?: Array<MonetaryAccountPaymentFilterMonetaryAccountFilter> | null | undefined;
  bic?: StringFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  end?: DateFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  externalInstitution?: StringFieldComparison | null | undefined;
  externalProvider?: MonetaryAccountProviderFilterComparison | null | undefined;
  externalStatus?: StringFieldComparison | null | undefined;
  iban?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  initialBalance?: NumberFieldComparison | null | undefined;
  ledger?: StringFieldComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<MonetaryAccountPaymentFilterMonetaryAccountFilter> | null | undefined;
  parentMonetaryAccountId?: IdFilterComparison | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  start?: DateFieldComparison | null | undefined;
  type?: MonetaryAccountTypeFilterComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type MonetaryAccountPaymentFilterPayslipFilter = {
  and?: Array<MonetaryAccountPaymentFilterPayslipFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  deliveredAt?: DateFieldComparison | null | undefined;
  employmentId?: StringFieldComparison | null | undefined;
  finalizedAt?: DateFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  number?: StringFieldComparison | null | undefined;
  or?: Array<MonetaryAccountPaymentFilterPayslipFilter> | null | undefined;
  payResultId?: StringFieldComparison | null | undefined;
  payRunId?: StringFieldComparison | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type MonetaryAccountPaymentFilterProjectFilter = {
  and?: Array<MonetaryAccountPaymentFilterProjectFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  end?: DateFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<MonetaryAccountPaymentFilterProjectFilter> | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  relationId?: StringFieldComparison | null | undefined;
  start?: DateFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type MonetaryAccountPaymentFilterPurchaseInvoiceFilter = {
  acceptedAt?: DateFieldComparison | null | undefined;
  amount?: NumberFieldComparison | null | undefined;
  and?: Array<MonetaryAccountPaymentFilterPurchaseInvoiceFilter> | null | undefined;
  closed?: DateFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  date?: DateFieldComparison | null | undefined;
  disputed?: DateFieldComparison | null | undefined;
  due?: DateFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  number?: StringFieldComparison | null | undefined;
  or?: Array<MonetaryAccountPaymentFilterPurchaseInvoiceFilter> | null | undefined;
  paid?: DateFieldComparison | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  reference?: StringFieldComparison | null | undefined;
  relationId?: StringFieldComparison | null | undefined;
  scheduled?: DateFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  uuid?: StringFieldComparison | null | undefined;
};

export type MonetaryAccountPaymentFilterRelationFilter = {
  and?: Array<MonetaryAccountPaymentFilterRelationFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  defaultCostCenterId?: StringFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  firstName?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  lastName?: StringFieldComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  or?: Array<MonetaryAccountPaymentFilterRelationFilter> | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  registrationCountry?: StringFieldComparison | null | undefined;
  registrationNumber?: StringFieldComparison | null | undefined;
  remindersAutomaticDisabled?: BooleanFieldComparison | null | undefined;
  standardDueDays?: NumberFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  uuid?: StringFieldComparison | null | undefined;
};

export type MonetaryAccountPaymentFilterReminderFilter = {
  and?: Array<MonetaryAccountPaymentFilterReminderFilter> | null | undefined;
  closed?: DateFieldComparison | null | undefined;
  content?: StringFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  date?: DateFieldComparison | null | undefined;
  due?: DateFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
  fees?: NumberFieldComparison | null | undefined;
  firstName?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  interest?: NumberFieldComparison | null | undefined;
  lastName?: StringFieldComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  number?: StringFieldComparison | null | undefined;
  or?: Array<MonetaryAccountPaymentFilterReminderFilter> | null | undefined;
  originalFees?: NumberFieldComparison | null | undefined;
  originalInterest?: NumberFieldComparison | null | undefined;
  paid?: DateFieldComparison | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  relationId?: StringFieldComparison | null | undefined;
  sent?: DateFieldComparison | null | undefined;
  stage?: NumberFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  uuid?: StringFieldComparison | null | undefined;
};

export type MonetaryAccountPaymentFilterSalesInvoiceFilter = {
  and?: Array<MonetaryAccountPaymentFilterSalesInvoiceFilter> | null | undefined;
  bookingDate?: DateFieldComparison | null | undefined;
  closed?: DateFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  date?: DateFieldComparison | null | undefined;
  due?: DateFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
  entryId?: StringFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  firstName?: StringFieldComparison | null | undefined;
  footer?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  initialInvoiceId?: StringFieldComparison | null | undefined;
  lastName?: StringFieldComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  memo?: StringFieldComparison | null | undefined;
  number?: StringFieldComparison | null | undefined;
  or?: Array<MonetaryAccountPaymentFilterSalesInvoiceFilter> | null | undefined;
  paid?: DateFieldComparison | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  quoteId?: StringFieldComparison | null | undefined;
  recurringId?: StringFieldComparison | null | undefined;
  reference?: StringFieldComparison | null | undefined;
  relationId?: StringFieldComparison | null | undefined;
  uncollectibleAt?: DateFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  uuid?: StringFieldComparison | null | undefined;
  vatNumber?: StringFieldComparison | null | undefined;
  vatReliefClaimedAt?: DateFieldComparison | null | undefined;
};

export type MonetaryAccountPaymentFilterSettlementFilter = {
  and?: Array<MonetaryAccountPaymentFilterSettlementFilter> | null | undefined;
  automatic?: BooleanFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  date?: DateFieldComparison | null | undefined;
  description?: StringFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<MonetaryAccountPaymentFilterSettlementFilter> | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type MonetaryAccountPaymentFilterTaxFilingFilter = {
  acceptedAt?: DateFieldComparison | null | undefined;
  amountDue?: NumberFieldComparison | null | undefined;
  and?: Array<MonetaryAccountPaymentFilterTaxFilingFilter> | null | undefined;
  bookedAt?: DateFieldComparison | null | undefined;
  correctsFilingId?: StringFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  digipoortDeliveryId?: StringFieldComparison | null | undefined;
  filingKind?: TaxFilingKindFilterComparison | null | undefined;
  filingType?: TaxFilingTypeFilterComparison | null | undefined;
  from?: DateFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  or?: Array<MonetaryAccountPaymentFilterTaxFilingFilter> | null | undefined;
  payRunId?: StringFieldComparison | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  reference?: StringFieldComparison | null | undefined;
  status?: TaxFilingStatusFilterComparison | null | undefined;
  submittedAt?: DateFieldComparison | null | undefined;
  taxObligationId?: StringFieldComparison | null | undefined;
  to?: DateFieldComparison | null | undefined;
  upaDeliveryId?: StringFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type MonetaryAccountPaymentSort = {
  direction: SortDirection;
  field: MonetaryAccountPaymentSortFields;
  nulls?: SortNulls | null | undefined;
};

export type MonetaryAccountPaymentSortFields =
  | 'amount'
  | 'bankReference'
  | 'bic'
  | 'created'
  | 'createdById'
  | 'currentAccountId'
  | 'date'
  | 'description'
  | 'endToEndId'
  | 'externalId'
  | 'externalProvider'
  | 'iban'
  | 'id'
  | 'ledgerId'
  | 'loanId'
  | 'loanInstallmentId'
  | 'monetaryAccountId'
  | 'name'
  | 'originalAmount'
  | 'originalCurrency'
  | 'payslipId'
  | 'processed'
  | 'projectId'
  | 'purchaseInvoiceId'
  | 'relationId'
  | 'reminderId'
  | 'salesInvoiceId'
  | 'settlementId'
  | 'taxFilingId'
  | 'updated'
  | 'valueDate';

export type MonetaryAccountProvider =
  | 'adyen'
  | 'amazon'
  | 'bol'
  | 'camt052'
  | 'camt053'
  | 'lunchflow'
  | 'mollie'
  | 'mt940'
  | 'paynl'
  | 'platform'
  | 'shopify'
  | 'spreadsheet'
  | 'stripe';

export type MonetaryAccountProviderFilterComparison = {
  eq?: MonetaryAccountProvider | null | undefined;
  gt?: MonetaryAccountProvider | null | undefined;
  gte?: MonetaryAccountProvider | null | undefined;
  iLike?: MonetaryAccountProvider | null | undefined;
  in?: Array<MonetaryAccountProvider> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: MonetaryAccountProvider | null | undefined;
  lt?: MonetaryAccountProvider | null | undefined;
  lte?: MonetaryAccountProvider | null | undefined;
  neq?: MonetaryAccountProvider | null | undefined;
  notILike?: MonetaryAccountProvider | null | undefined;
  notIn?: Array<MonetaryAccountProvider> | null | undefined;
  notLike?: MonetaryAccountProvider | null | undefined;
};

export type MonetaryAccountSort = {
  direction: SortDirection;
  field: MonetaryAccountSortFields;
  nulls?: SortNulls | null | undefined;
};

export type MonetaryAccountSortFields =
  | 'active'
  | 'bic'
  | 'created'
  | 'currency'
  | 'end'
  | 'externalId'
  | 'externalInstitution'
  | 'externalProvider'
  | 'externalStatus'
  | 'iban'
  | 'id'
  | 'initialBalance'
  | 'ledger'
  | 'name'
  | 'parentMonetaryAccountId'
  | 'profileId'
  | 'start'
  | 'type'
  | 'updated';

export type MonetaryAccountType =
  | 'bank'
  | 'card'
  | 'cash'
  | 'psp'
  | 'suspense';

export type MonetaryAccountTypeFilterComparison = {
  eq?: MonetaryAccountType | null | undefined;
  gt?: MonetaryAccountType | null | undefined;
  gte?: MonetaryAccountType | null | undefined;
  iLike?: MonetaryAccountType | null | undefined;
  in?: Array<MonetaryAccountType> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: MonetaryAccountType | null | undefined;
  lt?: MonetaryAccountType | null | undefined;
  lte?: MonetaryAccountType | null | undefined;
  neq?: MonetaryAccountType | null | undefined;
  notILike?: MonetaryAccountType | null | undefined;
  notIn?: Array<MonetaryAccountType> | null | undefined;
  notLike?: MonetaryAccountType | null | undefined;
};

export type NumberFieldComparison = {
  between?: NumberFieldComparisonBetween | null | undefined;
  eq?: number | null | undefined;
  gt?: number | null | undefined;
  gte?: number | null | undefined;
  in?: Array<number> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  lt?: number | null | undefined;
  lte?: number | null | undefined;
  neq?: number | null | undefined;
  notBetween?: NumberFieldComparisonBetween | null | undefined;
  notIn?: Array<number> | null | undefined;
};

export type NumberFieldComparisonBetween = {
  lower: number;
  upper: number;
};

export type ObjectRef = {
  externalId?: string | null | undefined;
  id?: string | number | null | undefined;
};

export type OnboardingRequirementKey =
  | 'bookkeeping_financial_year'
  | 'bookkeeping_ledger_chart'
  | 'company_address'
  | 'company_legal_form'
  | 'company_registration'
  | 'tax_nl_annual_accounts_authorisation'
  | 'tax_nl_cit_authorisation'
  | 'tax_nl_icp_authorisation'
  | 'tax_nl_oss_authorisation'
  | 'tax_nl_pension_authorisation'
  | 'tax_nl_vat_authorisation'
  | 'tax_nl_wage_tax_authorisation'
  | 'tax_obligations'
  | 'tax_uk_income_tax_authorisation'
  | 'tax_uk_vat_authorisation'
  | 'tax_uk_vat_hmrc_connection';

export type PspPaymentMethod =
  | 'credit_card'
  | 'openbanking'
  | 'sepa_credit';

export type PspPaymentMethodFilterComparison = {
  eq?: PspPaymentMethod | null | undefined;
  gt?: PspPaymentMethod | null | undefined;
  gte?: PspPaymentMethod | null | undefined;
  iLike?: PspPaymentMethod | null | undefined;
  in?: Array<PspPaymentMethod> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: PspPaymentMethod | null | undefined;
  lt?: PspPaymentMethod | null | undefined;
  lte?: PspPaymentMethod | null | undefined;
  neq?: PspPaymentMethod | null | undefined;
  notILike?: PspPaymentMethod | null | undefined;
  notIn?: Array<PspPaymentMethod> | null | undefined;
  notLike?: PspPaymentMethod | null | undefined;
};

export type PspPaymentState =
  | 'chargeback'
  | 'created'
  | 'expired'
  | 'failed'
  | 'paid_out'
  | 'processing'
  | 'refunded'
  | 'succeeded';

export type PspPaymentStateFilterComparison = {
  eq?: PspPaymentState | null | undefined;
  gt?: PspPaymentState | null | undefined;
  gte?: PspPaymentState | null | undefined;
  iLike?: PspPaymentState | null | undefined;
  in?: Array<PspPaymentState> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: PspPaymentState | null | undefined;
  lt?: PspPaymentState | null | undefined;
  lte?: PspPaymentState | null | undefined;
  neq?: PspPaymentState | null | undefined;
  notILike?: PspPaymentState | null | undefined;
  notIn?: Array<PspPaymentState> | null | undefined;
  notLike?: PspPaymentState | null | undefined;
};

export type PspProvider =
  | 'bankingservice'
  | 'pymntcore'
  | 'stripe';

export type PspProviderFilterComparison = {
  eq?: PspProvider | null | undefined;
  gt?: PspProvider | null | undefined;
  gte?: PspProvider | null | undefined;
  iLike?: PspProvider | null | undefined;
  in?: Array<PspProvider> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: PspProvider | null | undefined;
  lt?: PspProvider | null | undefined;
  lte?: PspProvider | null | undefined;
  neq?: PspProvider | null | undefined;
  notILike?: PspProvider | null | undefined;
  notIn?: Array<PspProvider> | null | undefined;
  notLike?: PspProvider | null | undefined;
};

export type PaymentBookingStatus =
  | 'booked'
  | 'needs_review'
  | 'suggested'
  | 'unbooked';

export type PaymentRequestKind =
  | 'supplier_batch'
  | 'tax'
  | 'wages';

export type PaymentRequestStatus =
  | 'accepted'
  | 'cancelled'
  | 'created'
  | 'expired'
  | 'failed'
  | 'paid'
  | 'partially_paid'
  | 'scheduled'
  | 'sent';

export type PermissionSet =
  | 'admin'
  | 'member'
  | 'viewer';

export type PlatformAuditLogFilter = {
  actions?: Array<string> | null | undefined;
  actorKinds?: Array<AuditActorKind> | null | undefined;
  companyId?: string | number | null | undefined;
  from?: string | null | undefined;
  platformUserId?: string | number | null | undefined;
  to?: string | null | undefined;
};

export type PlatformBulkJobStatus =
  | 'cancelled'
  | 'completed'
  | 'completed_with_errors'
  | 'failed'
  | 'queued'
  | 'receiving'
  | 'running';

export type PlatformCompanyFilter = {
  createdAfter?: string | null | undefined;
  externalId?: string | null | undefined;
  registrationNumber?: string | null | undefined;
};

export type PlatformCompanyFinancialYearInput = {
  granularity?: FinancialYearGranularity | null | undefined;
  /** 1–12, default 1 */
  startMonth?: number | null | undefined;
  /** Default: the year that contains today */
  startYear?: number | null | undefined;
};

export type PlatformCompanyTaxObligationInput = {
  frequency: TaxObligationFrequency;
  numbers?: TaxObligationNumbersInput | null | undefined;
  startsAt?: string | null | undefined;
  type: TaxObligationType;
};

export type PlatformDeliveryFilter = {
  companyId?: string | number | null | undefined;
  createdAfter?: string | null | undefined;
  createdBefore?: string | null | undefined;
  status?: Array<string> | null | undefined;
  types?: Array<string> | null | undefined;
};

export type PlatformEventFilter = {
  /** FinBaze id of the company. */
  companyId?: string | number | null | undefined;
  createdAfter?: string | null | undefined;
  createdBefore?: string | null | undefined;
  objectExternalId?: string | null | undefined;
  objectId?: string | number | null | undefined;
  types?: Array<string> | null | undefined;
};

export type PlatformEventTypeStatus =
  | 'available'
  | 'planned';

export type PlatformFeatureLimitLevel =
  | 'company'
  | 'platform';

export type PlatformMessageFilter = {
  limit?: number | null | undefined;
  offset?: number | null | undefined;
  profileId?: string | number | null | undefined;
  status?: string | null | undefined;
  unacknowledgedOnly?: boolean | null | undefined;
};

export type PlatformObjectType =
  | 'bank_account'
  | 'bank_transaction'
  | 'cost_center'
  | 'custom_record'
  | 'employee'
  | 'employment'
  | 'journal_entry'
  | 'process_document'
  | 'product'
  | 'project'
  | 'purchase_invoice'
  | 'quote'
  | 'relation'
  | 'sales_invoice'
  | 'worked_hours';

export type PlatformOriginKind =
  | 'app_scheme'
  | 'web';

export type PlatformReportInput = {
  /** YYYY-MM-DD; for positions (balance sheet, aged reports). */
  asOf?: string | null | undefined;
  compare?: ReportCompare | null | undefined;
  /** YYYY-MM-DD */
  from?: string | null | undefined;
  /** general_ledger: cash, bank, revenue, costs or memorial. */
  journalType?: string | null | undefined;
  language?: string | null | undefined;
  ledgerCode?: string | null | undefined;
  limit?: number | null | undefined;
  months?: number | null | undefined;
  offset?: number | null | undefined;
  taxFilingId?: string | number | null | undefined;
  /** YYYY-MM-DD */
  to?: string | null | undefined;
  type: PlatformReportType;
};

export type PlatformReportType =
  | 'aged_payables'
  | 'aged_receivables'
  | 'balance_sheet'
  | 'cashflow'
  | 'forecast'
  | 'general_ledger'
  | 'kpis'
  | 'profit_loss'
  | 'trial_balance'
  | 'vat_position';

export type PlatformStatus =
  | 'active'
  | 'pending'
  | 'suspended'
  | 'terminated';

export type PlatformStatusFilterComparison = {
  eq?: PlatformStatus | null | undefined;
  gt?: PlatformStatus | null | undefined;
  gte?: PlatformStatus | null | undefined;
  iLike?: PlatformStatus | null | undefined;
  in?: Array<PlatformStatus> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: PlatformStatus | null | undefined;
  lt?: PlatformStatus | null | undefined;
  lte?: PlatformStatus | null | undefined;
  neq?: PlatformStatus | null | undefined;
  notILike?: PlatformStatus | null | undefined;
  notIn?: Array<PlatformStatus> | null | undefined;
  notLike?: PlatformStatus | null | undefined;
};

export type PlatformSupportSettingsInput = {
  /** Portal callers: the platform. Tokens: omit. */
  platformId?: string | number | null | undefined;
  /** Empty string clears it. */
  supportEmail?: string | null | undefined;
  supportEscalationEnabled?: boolean | null | undefined;
  supportMode?: SupportMode | null | undefined;
  /** https URL opened by contact-support when the parent page has no handler. Empty string clears it. */
  supportUrl?: string | null | undefined;
};

export type PolicyKind =
  | 'booking_rules'
  | 'category_mapping'
  | 'chart_template'
  | 'company_defaults'
  | 'documents'
  | 'extensions'
  | 'filing_policy'
  | 'messaging'
  | 'quotas'
  | 'roles_mapping';

export type PolicyStatus =
  | 'active'
  | 'archived'
  | 'draft';

export type ProcessDocumentCategory =
  | 'company_extract'
  | 'external_sales_invoice'
  | 'other'
  | 'prior_annual_accounts'
  | 'prior_vat_filing'
  | 'received_document';

export type ProcessDocumentCategoryFilterComparison = {
  eq?: ProcessDocumentCategory | null | undefined;
  gt?: ProcessDocumentCategory | null | undefined;
  gte?: ProcessDocumentCategory | null | undefined;
  iLike?: ProcessDocumentCategory | null | undefined;
  in?: Array<ProcessDocumentCategory> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: ProcessDocumentCategory | null | undefined;
  lt?: ProcessDocumentCategory | null | undefined;
  lte?: ProcessDocumentCategory | null | undefined;
  neq?: ProcessDocumentCategory | null | undefined;
  notILike?: ProcessDocumentCategory | null | undefined;
  notIn?: Array<ProcessDocumentCategory> | null | undefined;
  notLike?: ProcessDocumentCategory | null | undefined;
};

export type ProcessDocumentFilter = {
  and?: Array<ProcessDocumentFilter> | null | undefined;
  bookkeeper?: ProcessDocumentFilterBookkeeperFilter | null | undefined;
  bookkeeperId?: StringFieldComparison | null | undefined;
  category?: ProcessDocumentCategoryFilterComparison | null | undefined;
  concerns?: StringFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdBy?: ProcessDocumentFilterAccountFilter | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  documentRequests?: ProcessDocumentFilterDocumentRequestFilter | null | undefined;
  enterprise?: ProcessDocumentFilterEnterpriseFilter | null | undefined;
  enterpriseId?: StringFieldComparison | null | undefined;
  entryId?: StringFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  extractionModel?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  message?: StringFieldComparison | null | undefined;
  or?: Array<ProcessDocumentFilter> | null | undefined;
  processed?: BooleanFieldComparison | null | undefined;
  processing?: BooleanFieldComparison | null | undefined;
  profile?: ProcessDocumentFilterProfileFilter | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  purchaseInvoice?: ProcessDocumentFilterPurchaseInvoiceFilter | null | undefined;
  purchaseInvoiceId?: StringFieldComparison | null | undefined;
  receivedDate?: DateFieldComparison | null | undefined;
  receiverName?: StringFieldComparison | null | undefined;
  receiverRegistrationNumber?: StringFieldComparison | null | undefined;
  receiverVatNumber?: StringFieldComparison | null | undefined;
  rejected?: BooleanFieldComparison | null | undefined;
  rejectedReason?: StringFieldComparison | null | undefined;
  relation?: ProcessDocumentFilterRelationFilter | null | undefined;
  relationId?: StringFieldComparison | null | undefined;
  salesInvoice?: ProcessDocumentFilterSalesInvoiceFilter | null | undefined;
  salesInvoiceId?: StringFieldComparison | null | undefined;
  senderName?: StringFieldComparison | null | undefined;
  senderRegistrationNumber?: StringFieldComparison | null | undefined;
  senderVatNumber?: StringFieldComparison | null | undefined;
  source?: ProcessDocumentSourceFilterComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type ProcessDocumentFilterAccountFilter = {
  adminId?: StringFieldComparison | null | undefined;
  and?: Array<ProcessDocumentFilterAccountFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
  firstName?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  lastName?: StringFieldComparison | null | undefined;
  or?: Array<ProcessDocumentFilterAccountFilter> | null | undefined;
  phone?: StringFieldComparison | null | undefined;
  picture?: StringFieldComparison | null | undefined;
  secret?: StringFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type ProcessDocumentFilterBookkeeperFilter = {
  and?: Array<ProcessDocumentFilterBookkeeperFilter> | null | undefined;
  beconName?: StringFieldComparison | null | undefined;
  beconNumber?: StringFieldComparison | null | undefined;
  billingProfileId?: StringFieldComparison | null | undefined;
  clientOnboardingInviteEmailEnabled?: BooleanFieldComparison | null | undefined;
  clientPlanActivatedEmailEnabled?: BooleanFieldComparison | null | undefined;
  clientPlanCancelledEmailEnabled?: BooleanFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdByDeveloperId?: StringFieldComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  dataProcessingAgreementUrl?: StringFieldComparison | null | undefined;
  documentAvailableEmailEnabled?: BooleanFieldComparison | null | undefined;
  documentRequestEmailEnabled?: BooleanFieldComparison | null | undefined;
  emailBcc?: StringFieldComparison | null | undefined;
  emailCc?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  inboundEmailDomain?: StringFieldComparison | null | undefined;
  inboundEmailDomainVerifiedAt?: DateFieldComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  logo?: StringFieldComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<ProcessDocumentFilterBookkeeperFilter> | null | undefined;
  payrollModuleEnabled?: BooleanFieldComparison | null | undefined;
  payrollModuleEnabledAt?: DateFieldComparison | null | undefined;
  primaryColor?: StringFieldComparison | null | undefined;
  privacyPolicyUrl?: StringFieldComparison | null | undefined;
  professionalAssociationMemberNumber?: StringFieldComparison | null | undefined;
  professionalAssociationName?: StringFieldComparison | null | undefined;
  registrationCountry?: CountryFilterComparison | null | undefined;
  registrationNumber?: StringFieldComparison | null | undefined;
  senderEmail?: StringFieldComparison | null | undefined;
  smtpEnabled?: BooleanFieldComparison | null | undefined;
  smtpHost?: StringFieldComparison | null | undefined;
  smtpPasswordConfigured?: BooleanFieldComparison | null | undefined;
  smtpPort?: NumberFieldComparison | null | undefined;
  smtpSecure?: BooleanFieldComparison | null | undefined;
  smtpUser?: StringFieldComparison | null | undefined;
  termsOfServiceUrl?: StringFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  url?: StringFieldComparison | null | undefined;
  uuid?: StringFieldComparison | null | undefined;
};

export type ProcessDocumentFilterDocumentRequestFilter = {
  and?: Array<ProcessDocumentFilterDocumentRequestFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  forAccountId?: StringFieldComparison | null | undefined;
  fulfilledAt?: DateFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  lastReminderAt?: DateFieldComparison | null | undefined;
  monetaryAccountPaymentId?: StringFieldComparison | null | undefined;
  notificationPending?: BooleanFieldComparison | null | undefined;
  or?: Array<ProcessDocumentFilterDocumentRequestFilter> | null | undefined;
  processDocumentId?: StringFieldComparison | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  purchaseInvoiceId?: StringFieldComparison | null | undefined;
  salesInvoiceId?: StringFieldComparison | null | undefined;
  status?: DocumentRequestStatusFilterComparison | null | undefined;
  title?: StringFieldComparison | null | undefined;
  type?: DocumentRequestTypeFilterComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type ProcessDocumentFilterEnterpriseFilter = {
  and?: Array<ProcessDocumentFilterEnterpriseFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdByDeveloperId?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<ProcessDocumentFilterEnterpriseFilter> | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  url?: StringFieldComparison | null | undefined;
};

export type ProcessDocumentFilterProfileFilter = {
  and?: Array<ProcessDocumentFilterProfileFilter> | null | undefined;
  billingManagedBy?: BillingManagedByFilterComparison | null | undefined;
  bookkeeperDeactivatedAt?: DateFieldComparison | null | undefined;
  bookkeeperId?: StringFieldComparison | null | undefined;
  bookkeeperServiceMode?: BookkeeperServiceModeFilterComparison | null | undefined;
  budgetRunRateEmailEnabled?: BooleanFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdByDeveloperId?: StringFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currencies?: CurrencyFilterComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  currentPlanId?: StringFieldComparison | null | undefined;
  defaultDueDays?: NumberFieldComparison | null | undefined;
  defaultMonetaryAccountId?: StringFieldComparison | null | undefined;
  emailBcc?: StringFieldComparison | null | undefined;
  emailCc?: StringFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  invoiceNumberFormat?: StringFieldComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  languages?: StringFieldComparison | null | undefined;
  ledgerChart?: StringFieldComparison | null | undefined;
  legalForm?: TaxLegalFormFilterComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  logo?: StringFieldComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<ProcessDocumentFilterProfileFilter> | null | undefined;
  platformId?: IdFilterComparison | null | undefined;
  primaryColor?: StringFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffEnabled?: BooleanFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffMaxAmount?: NumberFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffMaxPercent?: NumberFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchIntervalUnit?: PurchaseInvoicePaymentBatchIntervalUnitFilterComparison | null | undefined;
  purchaseInvoicePaymentBatchIntervalValue?: NumberFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchMode?: PurchaseInvoicePaymentBatchModeFilterComparison | null | undefined;
  purchaseInvoicePaymentBatchNameTemplate?: StringFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchNextRunAt?: DateFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchRunHour?: NumberFieldComparison | null | undefined;
  quoteLayout?: JsonObjectFilterComparison | null | undefined;
  quoteNumberFormat?: StringFieldComparison | null | undefined;
  registrationCountry?: CountryFilterComparison | null | undefined;
  registrationNumber?: StringFieldComparison | null | undefined;
  reminderContent?: JsonObjectFilterComparison | null | undefined;
  reminderEmailEnabled?: BooleanFieldComparison | null | undefined;
  reminderLayout?: JsonObjectFilterComparison | null | undefined;
  reminderNumberFormat?: StringFieldComparison | null | undefined;
  remindersAutomaticEnabled?: BooleanFieldComparison | null | undefined;
  salesInvoiceAutoSendOnClose?: BooleanFieldComparison | null | undefined;
  salesInvoiceFooter?: StringFieldComparison | null | undefined;
  salesInvoiceIncludeUbl?: BooleanFieldComparison | null | undefined;
  salesInvoiceLayout?: JsonObjectFilterComparison | null | undefined;
  salesInvoicePaymentFailedEmailEnabled?: BooleanFieldComparison | null | undefined;
  salesInvoicePaymentSucceededEmailEnabled?: BooleanFieldComparison | null | undefined;
  sellToCountries?: CountryFilterComparison | null | undefined;
  senderEmail?: StringFieldComparison | null | undefined;
  smtpEnabled?: BooleanFieldComparison | null | undefined;
  smtpHost?: StringFieldComparison | null | undefined;
  smtpPasswordConfigured?: BooleanFieldComparison | null | undefined;
  smtpPort?: NumberFieldComparison | null | undefined;
  smtpSecure?: BooleanFieldComparison | null | undefined;
  smtpUser?: StringFieldComparison | null | undefined;
  stripeAccountId?: StringFieldComparison | null | undefined;
  stripeChargesEnabled?: BooleanFieldComparison | null | undefined;
  stripeDetailsSubmitted?: BooleanFieldComparison | null | undefined;
  stripePayoutsEnabled?: BooleanFieldComparison | null | undefined;
  subscriptionInvoiceGenerationEnabled?: BooleanFieldComparison | null | undefined;
  taxThresholdEmailEnabled?: BooleanFieldComparison | null | undefined;
  timezone?: StringFieldComparison | null | undefined;
  units?: UnitsFilterComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  url?: StringFieldComparison | null | undefined;
  vatFilingAcceptedEmailEnabled?: BooleanFieldComparison | null | undefined;
  vatFilingRejectedEmailEnabled?: BooleanFieldComparison | null | undefined;
};

export type ProcessDocumentFilterPurchaseInvoiceFilter = {
  acceptedAt?: DateFieldComparison | null | undefined;
  amount?: NumberFieldComparison | null | undefined;
  and?: Array<ProcessDocumentFilterPurchaseInvoiceFilter> | null | undefined;
  closed?: DateFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  date?: DateFieldComparison | null | undefined;
  disputed?: DateFieldComparison | null | undefined;
  due?: DateFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  number?: StringFieldComparison | null | undefined;
  or?: Array<ProcessDocumentFilterPurchaseInvoiceFilter> | null | undefined;
  paid?: DateFieldComparison | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  reference?: StringFieldComparison | null | undefined;
  relationId?: StringFieldComparison | null | undefined;
  scheduled?: DateFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  uuid?: StringFieldComparison | null | undefined;
};

export type ProcessDocumentFilterRelationFilter = {
  and?: Array<ProcessDocumentFilterRelationFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  defaultCostCenterId?: StringFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  firstName?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  lastName?: StringFieldComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  or?: Array<ProcessDocumentFilterRelationFilter> | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  registrationCountry?: StringFieldComparison | null | undefined;
  registrationNumber?: StringFieldComparison | null | undefined;
  remindersAutomaticDisabled?: BooleanFieldComparison | null | undefined;
  standardDueDays?: NumberFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  uuid?: StringFieldComparison | null | undefined;
};

export type ProcessDocumentFilterSalesInvoiceFilter = {
  and?: Array<ProcessDocumentFilterSalesInvoiceFilter> | null | undefined;
  bookingDate?: DateFieldComparison | null | undefined;
  closed?: DateFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  date?: DateFieldComparison | null | undefined;
  due?: DateFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
  entryId?: StringFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  firstName?: StringFieldComparison | null | undefined;
  footer?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  initialInvoiceId?: StringFieldComparison | null | undefined;
  lastName?: StringFieldComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  memo?: StringFieldComparison | null | undefined;
  number?: StringFieldComparison | null | undefined;
  or?: Array<ProcessDocumentFilterSalesInvoiceFilter> | null | undefined;
  paid?: DateFieldComparison | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  quoteId?: StringFieldComparison | null | undefined;
  recurringId?: StringFieldComparison | null | undefined;
  reference?: StringFieldComparison | null | undefined;
  relationId?: StringFieldComparison | null | undefined;
  uncollectibleAt?: DateFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  uuid?: StringFieldComparison | null | undefined;
  vatNumber?: StringFieldComparison | null | undefined;
  vatReliefClaimedAt?: DateFieldComparison | null | undefined;
};

export type ProcessDocumentSort = {
  direction: SortDirection;
  field: ProcessDocumentSortFields;
  nulls?: SortNulls | null | undefined;
};

export type ProcessDocumentSortFields =
  | 'bookkeeperId'
  | 'category'
  | 'concerns'
  | 'created'
  | 'createdById'
  | 'enterpriseId'
  | 'entryId'
  | 'externalId'
  | 'extractionModel'
  | 'id'
  | 'message'
  | 'processed'
  | 'processing'
  | 'profileId'
  | 'purchaseInvoiceId'
  | 'receivedDate'
  | 'receiverName'
  | 'receiverRegistrationNumber'
  | 'receiverVatNumber'
  | 'rejected'
  | 'rejectedReason'
  | 'relationId'
  | 'salesInvoiceId'
  | 'senderName'
  | 'senderRegistrationNumber'
  | 'senderVatNumber'
  | 'source'
  | 'updated';

export type ProcessDocumentSource =
  | 'app'
  | 'email'
  | 'mailbox'
  | 'message'
  | 'platform'
  | 'upload';

export type ProcessDocumentSourceFilterComparison = {
  eq?: ProcessDocumentSource | null | undefined;
  gt?: ProcessDocumentSource | null | undefined;
  gte?: ProcessDocumentSource | null | undefined;
  iLike?: ProcessDocumentSource | null | undefined;
  in?: Array<ProcessDocumentSource> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: ProcessDocumentSource | null | undefined;
  lt?: ProcessDocumentSource | null | undefined;
  lte?: ProcessDocumentSource | null | undefined;
  neq?: ProcessDocumentSource | null | undefined;
  notILike?: ProcessDocumentSource | null | undefined;
  notIn?: Array<ProcessDocumentSource> | null | undefined;
  notLike?: ProcessDocumentSource | null | undefined;
};

export type ProcessDocumentUploadInput = {
  dataUrl: string;
  filename: string;
  mimeType: string;
};

export type ProcessMonetaryAccountPaymentInput = {
  currentAccountId?: string | number | null | undefined;
  ledgerId?: string | number | null | undefined;
  loanId?: string | number | null | undefined;
  loanInstallmentId?: string | number | null | undefined;
  payslipId?: string | number | null | undefined;
  projectId?: string | number | null | undefined;
  purchaseInvoiceId?: string | number | null | undefined;
  relationId?: string | number | null | undefined;
  reminderId?: string | number | null | undefined;
  salesInvoiceId?: string | number | null | undefined;
  settlementId?: string | number | null | undefined;
  targetProfileId?: string | number | null | undefined;
  taxFilingId?: string | number | null | undefined;
};

export type ProductTypeInput =
  | 'goods'
  | 'services';

export type ProductUpsertFields = {
  active?: boolean | null | undefined;
  code?: string | null | undefined;
  description?: string | null | undefined;
  ean?: string | null | undefined;
  hsCode?: string | null | undefined;
  name: string;
  /** Unit prices in minor units by currency, `{ "EUR": 1999 }`. */
  prices?: Record<string, unknown> | null | undefined;
  purchaseLedger?: string | null | undefined;
  salesLedger?: string | null | undefined;
  sku?: string | null | undefined;
  /** Default tax code per sell-to country, `{ "NL": "NL_2012_HIGH" }`. */
  taxCodesByCountry?: Record<string, unknown> | null | undefined;
  type?: ProductTypeInput | null | undefined;
};

export type ProfileFilter = {
  and?: Array<ProfileFilter> | null | undefined;
  billingManagedBy?: BillingManagedByFilterComparison | null | undefined;
  bookkeeper?: ProfileFilterBookkeeperFilter | null | undefined;
  bookkeeperDeactivatedAt?: DateFieldComparison | null | undefined;
  bookkeeperId?: StringFieldComparison | null | undefined;
  bookkeeperServiceMode?: BookkeeperServiceModeFilterComparison | null | undefined;
  budgetRunRateEmailEnabled?: BooleanFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdBy?: ProfileFilterAccountFilter | null | undefined;
  createdByDeveloper?: ProfileFilterDeveloperFilter | null | undefined;
  createdByDeveloperId?: StringFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currencies?: CurrencyFilterComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  currentPlanId?: StringFieldComparison | null | undefined;
  defaultDueDays?: NumberFieldComparison | null | undefined;
  defaultMonetaryAccount?: ProfileFilterMonetaryAccountFilter | null | undefined;
  defaultMonetaryAccountId?: StringFieldComparison | null | undefined;
  emailBcc?: StringFieldComparison | null | undefined;
  emailCc?: StringFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  invoiceNumberFormat?: StringFieldComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  languages?: StringFieldComparison | null | undefined;
  ledgerChart?: StringFieldComparison | null | undefined;
  legalForm?: TaxLegalFormFilterComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  logo?: StringFieldComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<ProfileFilter> | null | undefined;
  platformId?: IdFilterComparison | null | undefined;
  primaryColor?: StringFieldComparison | null | undefined;
  pspPayments?: ProfileFilterPspPaymentFilter | null | undefined;
  purchaseInvoiceAutoWriteOffEnabled?: BooleanFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffMaxAmount?: NumberFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffMaxPercent?: NumberFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchIntervalUnit?: PurchaseInvoicePaymentBatchIntervalUnitFilterComparison | null | undefined;
  purchaseInvoicePaymentBatchIntervalValue?: NumberFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchMode?: PurchaseInvoicePaymentBatchModeFilterComparison | null | undefined;
  purchaseInvoicePaymentBatchNameTemplate?: StringFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchNextRunAt?: DateFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchRunHour?: NumberFieldComparison | null | undefined;
  quoteAcceptanceProcesses?: ProfileFilterQuoteAcceptanceProcessFilter | null | undefined;
  quoteLayout?: JsonObjectFilterComparison | null | undefined;
  quoteNumberFormat?: StringFieldComparison | null | undefined;
  registrationCountry?: CountryFilterComparison | null | undefined;
  registrationNumber?: StringFieldComparison | null | undefined;
  reminderContent?: JsonObjectFilterComparison | null | undefined;
  reminderEmailEnabled?: BooleanFieldComparison | null | undefined;
  reminderLayout?: JsonObjectFilterComparison | null | undefined;
  reminderNumberFormat?: StringFieldComparison | null | undefined;
  remindersAutomaticEnabled?: BooleanFieldComparison | null | undefined;
  salesInvoiceAutoSendOnClose?: BooleanFieldComparison | null | undefined;
  salesInvoiceFooter?: StringFieldComparison | null | undefined;
  salesInvoiceIncludeUbl?: BooleanFieldComparison | null | undefined;
  salesInvoiceLayout?: JsonObjectFilterComparison | null | undefined;
  salesInvoicePaymentFailedEmailEnabled?: BooleanFieldComparison | null | undefined;
  salesInvoicePaymentSucceededEmailEnabled?: BooleanFieldComparison | null | undefined;
  sellToCountries?: CountryFilterComparison | null | undefined;
  senderEmail?: StringFieldComparison | null | undefined;
  smtpEnabled?: BooleanFieldComparison | null | undefined;
  smtpHost?: StringFieldComparison | null | undefined;
  smtpPasswordConfigured?: BooleanFieldComparison | null | undefined;
  smtpPort?: NumberFieldComparison | null | undefined;
  smtpSecure?: BooleanFieldComparison | null | undefined;
  smtpUser?: StringFieldComparison | null | undefined;
  stripeAccountId?: StringFieldComparison | null | undefined;
  stripeChargesEnabled?: BooleanFieldComparison | null | undefined;
  stripeDetailsSubmitted?: BooleanFieldComparison | null | undefined;
  stripePayoutsEnabled?: BooleanFieldComparison | null | undefined;
  subscriptionInvoiceGenerationEnabled?: BooleanFieldComparison | null | undefined;
  taxThresholdEmailEnabled?: BooleanFieldComparison | null | undefined;
  timezone?: StringFieldComparison | null | undefined;
  units?: UnitsFilterComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  url?: StringFieldComparison | null | undefined;
  vatFilingAcceptedEmailEnabled?: BooleanFieldComparison | null | undefined;
  vatFilingRejectedEmailEnabled?: BooleanFieldComparison | null | undefined;
};

export type ProfileFilterAccountFilter = {
  adminId?: StringFieldComparison | null | undefined;
  and?: Array<ProfileFilterAccountFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
  firstName?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  lastName?: StringFieldComparison | null | undefined;
  or?: Array<ProfileFilterAccountFilter> | null | undefined;
  phone?: StringFieldComparison | null | undefined;
  picture?: StringFieldComparison | null | undefined;
  secret?: StringFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type ProfileFilterBookkeeperFilter = {
  and?: Array<ProfileFilterBookkeeperFilter> | null | undefined;
  beconName?: StringFieldComparison | null | undefined;
  beconNumber?: StringFieldComparison | null | undefined;
  billingProfileId?: StringFieldComparison | null | undefined;
  clientOnboardingInviteEmailEnabled?: BooleanFieldComparison | null | undefined;
  clientPlanActivatedEmailEnabled?: BooleanFieldComparison | null | undefined;
  clientPlanCancelledEmailEnabled?: BooleanFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdByDeveloperId?: StringFieldComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  dataProcessingAgreementUrl?: StringFieldComparison | null | undefined;
  documentAvailableEmailEnabled?: BooleanFieldComparison | null | undefined;
  documentRequestEmailEnabled?: BooleanFieldComparison | null | undefined;
  emailBcc?: StringFieldComparison | null | undefined;
  emailCc?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  inboundEmailDomain?: StringFieldComparison | null | undefined;
  inboundEmailDomainVerifiedAt?: DateFieldComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  logo?: StringFieldComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<ProfileFilterBookkeeperFilter> | null | undefined;
  payrollModuleEnabled?: BooleanFieldComparison | null | undefined;
  payrollModuleEnabledAt?: DateFieldComparison | null | undefined;
  primaryColor?: StringFieldComparison | null | undefined;
  privacyPolicyUrl?: StringFieldComparison | null | undefined;
  professionalAssociationMemberNumber?: StringFieldComparison | null | undefined;
  professionalAssociationName?: StringFieldComparison | null | undefined;
  registrationCountry?: CountryFilterComparison | null | undefined;
  registrationNumber?: StringFieldComparison | null | undefined;
  senderEmail?: StringFieldComparison | null | undefined;
  smtpEnabled?: BooleanFieldComparison | null | undefined;
  smtpHost?: StringFieldComparison | null | undefined;
  smtpPasswordConfigured?: BooleanFieldComparison | null | undefined;
  smtpPort?: NumberFieldComparison | null | undefined;
  smtpSecure?: BooleanFieldComparison | null | undefined;
  smtpUser?: StringFieldComparison | null | undefined;
  termsOfServiceUrl?: StringFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  url?: StringFieldComparison | null | undefined;
  uuid?: StringFieldComparison | null | undefined;
};

export type ProfileFilterDeveloperFilter = {
  and?: Array<ProfileFilterDeveloperFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  kind?: DeveloperKindFilterComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<ProfileFilterDeveloperFilter> | null | undefined;
  platformStatus?: PlatformStatusFilterComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  url?: StringFieldComparison | null | undefined;
};

export type ProfileFilterMonetaryAccountFilter = {
  active?: BooleanFieldComparison | null | undefined;
  and?: Array<ProfileFilterMonetaryAccountFilter> | null | undefined;
  bic?: StringFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  end?: DateFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  externalInstitution?: StringFieldComparison | null | undefined;
  externalProvider?: MonetaryAccountProviderFilterComparison | null | undefined;
  externalStatus?: StringFieldComparison | null | undefined;
  iban?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  initialBalance?: NumberFieldComparison | null | undefined;
  ledger?: StringFieldComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<ProfileFilterMonetaryAccountFilter> | null | undefined;
  parentMonetaryAccountId?: IdFilterComparison | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  start?: DateFieldComparison | null | undefined;
  type?: MonetaryAccountTypeFilterComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type ProfileFilterPspPaymentFilter = {
  amount?: NumberFieldComparison | null | undefined;
  and?: Array<ProfileFilterPspPaymentFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  method?: PspPaymentMethodFilterComparison | null | undefined;
  or?: Array<ProfileFilterPspPaymentFilter> | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  provider?: PspProviderFilterComparison | null | undefined;
  quoteId?: StringFieldComparison | null | undefined;
  relationId?: StringFieldComparison | null | undefined;
  reminderId?: StringFieldComparison | null | undefined;
  salesInvoiceId?: StringFieldComparison | null | undefined;
  state?: PspPaymentStateFilterComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type ProfileFilterQuoteAcceptanceProcessFilter = {
  and?: Array<ProfileFilterQuoteAcceptanceProcessFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<ProfileFilterQuoteAcceptanceProcessFilter> | null | undefined;
  outcome?: QuoteAcceptanceOutcomeFilterComparison | null | undefined;
  paymentPercentage?: NumberFieldComparison | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  requirePayment?: BooleanFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type ProfileLifecycleState =
  | 'active'
  | 'archived'
  | 'closed'
  | 'suspended';

export type ProfileSort = {
  direction: SortDirection;
  field: ProfileSortFields;
  nulls?: SortNulls | null | undefined;
};

export type ProfileSortFields =
  | 'billingManagedBy'
  | 'bookkeeperDeactivatedAt'
  | 'bookkeeperId'
  | 'bookkeeperServiceMode'
  | 'budgetRunRateEmailEnabled'
  | 'created'
  | 'createdByDeveloperId'
  | 'createdById'
  | 'currencies'
  | 'currency'
  | 'currentPlanId'
  | 'defaultDueDays'
  | 'defaultMonetaryAccountId'
  | 'emailBcc'
  | 'emailCc'
  | 'externalId'
  | 'id'
  | 'invoiceNumberFormat'
  | 'language'
  | 'languages'
  | 'ledgerChart'
  | 'legalForm'
  | 'legalName'
  | 'logo'
  | 'name'
  | 'platformId'
  | 'primaryColor'
  | 'purchaseInvoiceAutoWriteOffEnabled'
  | 'purchaseInvoiceAutoWriteOffMaxAmount'
  | 'purchaseInvoiceAutoWriteOffMaxPercent'
  | 'purchaseInvoicePaymentBatchIntervalUnit'
  | 'purchaseInvoicePaymentBatchIntervalValue'
  | 'purchaseInvoicePaymentBatchMode'
  | 'purchaseInvoicePaymentBatchNameTemplate'
  | 'purchaseInvoicePaymentBatchNextRunAt'
  | 'purchaseInvoicePaymentBatchRunHour'
  | 'quoteLayout'
  | 'quoteNumberFormat'
  | 'registrationCountry'
  | 'registrationNumber'
  | 'reminderContent'
  | 'reminderEmailEnabled'
  | 'reminderLayout'
  | 'reminderNumberFormat'
  | 'remindersAutomaticEnabled'
  | 'salesInvoiceAutoSendOnClose'
  | 'salesInvoiceFooter'
  | 'salesInvoiceIncludeUbl'
  | 'salesInvoiceLayout'
  | 'salesInvoicePaymentFailedEmailEnabled'
  | 'salesInvoicePaymentSucceededEmailEnabled'
  | 'sellToCountries'
  | 'senderEmail'
  | 'smtpEnabled'
  | 'smtpHost'
  | 'smtpPasswordConfigured'
  | 'smtpPort'
  | 'smtpSecure'
  | 'smtpUser'
  | 'stripeAccountId'
  | 'stripeChargesEnabled'
  | 'stripeDetailsSubmitted'
  | 'stripePayoutsEnabled'
  | 'subscriptionInvoiceGenerationEnabled'
  | 'taxThresholdEmailEnabled'
  | 'timezone'
  | 'units'
  | 'updated'
  | 'url'
  | 'vatFilingAcceptedEmailEnabled'
  | 'vatFilingRejectedEmailEnabled';

export type ProjectFilter = {
  and?: Array<ProjectFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdBy?: ProjectFilterAccountFilter | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  end?: DateFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<ProjectFilter> | null | undefined;
  profile?: ProjectFilterProfileFilter | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  relation?: ProjectFilterRelationFilter | null | undefined;
  relationId?: StringFieldComparison | null | undefined;
  start?: DateFieldComparison | null | undefined;
  times?: ProjectFilterProjectTimeFilter | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type ProjectFilterAccountFilter = {
  adminId?: StringFieldComparison | null | undefined;
  and?: Array<ProjectFilterAccountFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
  firstName?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  lastName?: StringFieldComparison | null | undefined;
  or?: Array<ProjectFilterAccountFilter> | null | undefined;
  phone?: StringFieldComparison | null | undefined;
  picture?: StringFieldComparison | null | undefined;
  secret?: StringFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type ProjectFilterProfileFilter = {
  and?: Array<ProjectFilterProfileFilter> | null | undefined;
  billingManagedBy?: BillingManagedByFilterComparison | null | undefined;
  bookkeeperDeactivatedAt?: DateFieldComparison | null | undefined;
  bookkeeperId?: StringFieldComparison | null | undefined;
  bookkeeperServiceMode?: BookkeeperServiceModeFilterComparison | null | undefined;
  budgetRunRateEmailEnabled?: BooleanFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdByDeveloperId?: StringFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currencies?: CurrencyFilterComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  currentPlanId?: StringFieldComparison | null | undefined;
  defaultDueDays?: NumberFieldComparison | null | undefined;
  defaultMonetaryAccountId?: StringFieldComparison | null | undefined;
  emailBcc?: StringFieldComparison | null | undefined;
  emailCc?: StringFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  invoiceNumberFormat?: StringFieldComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  languages?: StringFieldComparison | null | undefined;
  ledgerChart?: StringFieldComparison | null | undefined;
  legalForm?: TaxLegalFormFilterComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  logo?: StringFieldComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<ProjectFilterProfileFilter> | null | undefined;
  platformId?: IdFilterComparison | null | undefined;
  primaryColor?: StringFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffEnabled?: BooleanFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffMaxAmount?: NumberFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffMaxPercent?: NumberFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchIntervalUnit?: PurchaseInvoicePaymentBatchIntervalUnitFilterComparison | null | undefined;
  purchaseInvoicePaymentBatchIntervalValue?: NumberFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchMode?: PurchaseInvoicePaymentBatchModeFilterComparison | null | undefined;
  purchaseInvoicePaymentBatchNameTemplate?: StringFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchNextRunAt?: DateFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchRunHour?: NumberFieldComparison | null | undefined;
  quoteLayout?: JsonObjectFilterComparison | null | undefined;
  quoteNumberFormat?: StringFieldComparison | null | undefined;
  registrationCountry?: CountryFilterComparison | null | undefined;
  registrationNumber?: StringFieldComparison | null | undefined;
  reminderContent?: JsonObjectFilterComparison | null | undefined;
  reminderEmailEnabled?: BooleanFieldComparison | null | undefined;
  reminderLayout?: JsonObjectFilterComparison | null | undefined;
  reminderNumberFormat?: StringFieldComparison | null | undefined;
  remindersAutomaticEnabled?: BooleanFieldComparison | null | undefined;
  salesInvoiceAutoSendOnClose?: BooleanFieldComparison | null | undefined;
  salesInvoiceFooter?: StringFieldComparison | null | undefined;
  salesInvoiceIncludeUbl?: BooleanFieldComparison | null | undefined;
  salesInvoiceLayout?: JsonObjectFilterComparison | null | undefined;
  salesInvoicePaymentFailedEmailEnabled?: BooleanFieldComparison | null | undefined;
  salesInvoicePaymentSucceededEmailEnabled?: BooleanFieldComparison | null | undefined;
  sellToCountries?: CountryFilterComparison | null | undefined;
  senderEmail?: StringFieldComparison | null | undefined;
  smtpEnabled?: BooleanFieldComparison | null | undefined;
  smtpHost?: StringFieldComparison | null | undefined;
  smtpPasswordConfigured?: BooleanFieldComparison | null | undefined;
  smtpPort?: NumberFieldComparison | null | undefined;
  smtpSecure?: BooleanFieldComparison | null | undefined;
  smtpUser?: StringFieldComparison | null | undefined;
  stripeAccountId?: StringFieldComparison | null | undefined;
  stripeChargesEnabled?: BooleanFieldComparison | null | undefined;
  stripeDetailsSubmitted?: BooleanFieldComparison | null | undefined;
  stripePayoutsEnabled?: BooleanFieldComparison | null | undefined;
  subscriptionInvoiceGenerationEnabled?: BooleanFieldComparison | null | undefined;
  taxThresholdEmailEnabled?: BooleanFieldComparison | null | undefined;
  timezone?: StringFieldComparison | null | undefined;
  units?: UnitsFilterComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  url?: StringFieldComparison | null | undefined;
  vatFilingAcceptedEmailEnabled?: BooleanFieldComparison | null | undefined;
  vatFilingRejectedEmailEnabled?: BooleanFieldComparison | null | undefined;
};

export type ProjectFilterProjectTimeFilter = {
  and?: Array<ProjectFilterProjectTimeFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  employeeId?: StringFieldComparison | null | undefined;
  end?: DateFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<ProjectFilterProjectTimeFilter> | null | undefined;
  projectId?: StringFieldComparison | null | undefined;
  salesInvoiceLineId?: StringFieldComparison | null | undefined;
  start?: DateFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type ProjectFilterRelationFilter = {
  and?: Array<ProjectFilterRelationFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  defaultCostCenterId?: StringFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  firstName?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  lastName?: StringFieldComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  or?: Array<ProjectFilterRelationFilter> | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  registrationCountry?: StringFieldComparison | null | undefined;
  registrationNumber?: StringFieldComparison | null | undefined;
  remindersAutomaticDisabled?: BooleanFieldComparison | null | undefined;
  standardDueDays?: NumberFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  uuid?: StringFieldComparison | null | undefined;
};

export type ProjectSort = {
  direction: SortDirection;
  field: ProjectSortFields;
  nulls?: SortNulls | null | undefined;
};

export type ProjectSortFields =
  | 'created'
  | 'createdById'
  | 'end'
  | 'externalId'
  | 'id'
  | 'name'
  | 'profileId'
  | 'relationId'
  | 'start'
  | 'updated';

export type ProjectUpsertFields = {
  /** ISO date or date-time. */
  end?: string | null | undefined;
  name: string;
  relation?: ObjectRef | null | undefined;
  /** ISO date or date-time. */
  start?: string | null | undefined;
};

export type ProviderAction =
  | 'camera'
  | 'payment_links'
  | 'payments'
  | 'step_up'
  | 'tax_reservation';

export type ProviderMode =
  | 'both'
  | 'embed'
  | 'webhook';

export type PurchaseInvoiceEventType =
  | 'accepted'
  | 'approval_step_advanced'
  | 'approval_submitted'
  | 'approved'
  | 'closed'
  | 'disputed'
  | 'rejected'
  | 'reopened'
  | 'undisputed';

export type PurchaseInvoiceEventTypeFilterComparison = {
  eq?: PurchaseInvoiceEventType | null | undefined;
  gt?: PurchaseInvoiceEventType | null | undefined;
  gte?: PurchaseInvoiceEventType | null | undefined;
  iLike?: PurchaseInvoiceEventType | null | undefined;
  in?: Array<PurchaseInvoiceEventType> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: PurchaseInvoiceEventType | null | undefined;
  lt?: PurchaseInvoiceEventType | null | undefined;
  lte?: PurchaseInvoiceEventType | null | undefined;
  neq?: PurchaseInvoiceEventType | null | undefined;
  notILike?: PurchaseInvoiceEventType | null | undefined;
  notIn?: Array<PurchaseInvoiceEventType> | null | undefined;
  notLike?: PurchaseInvoiceEventType | null | undefined;
};

export type PurchaseInvoiceFilter = {
  acceptedAt?: DateFieldComparison | null | undefined;
  amount?: NumberFieldComparison | null | undefined;
  and?: Array<PurchaseInvoiceFilter> | null | undefined;
  closed?: DateFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdBy?: PurchaseInvoiceFilterAccountFilter | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  date?: DateFieldComparison | null | undefined;
  disputed?: DateFieldComparison | null | undefined;
  due?: DateFieldComparison | null | undefined;
  events?: PurchaseInvoiceFilterPurchaseInvoiceEventFilter | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  notes?: PurchaseInvoiceFilterPurchaseInvoiceNoteFilter | null | undefined;
  number?: StringFieldComparison | null | undefined;
  or?: Array<PurchaseInvoiceFilter> | null | undefined;
  paid?: DateFieldComparison | null | undefined;
  profile?: PurchaseInvoiceFilterProfileFilter | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  reference?: StringFieldComparison | null | undefined;
  relation?: PurchaseInvoiceFilterRelationFilter | null | undefined;
  relationId?: StringFieldComparison | null | undefined;
  scheduled?: DateFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  uuid?: StringFieldComparison | null | undefined;
};

export type PurchaseInvoiceFilterAccountFilter = {
  adminId?: StringFieldComparison | null | undefined;
  and?: Array<PurchaseInvoiceFilterAccountFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
  firstName?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  lastName?: StringFieldComparison | null | undefined;
  or?: Array<PurchaseInvoiceFilterAccountFilter> | null | undefined;
  phone?: StringFieldComparison | null | undefined;
  picture?: StringFieldComparison | null | undefined;
  secret?: StringFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type PurchaseInvoiceFilterProfileFilter = {
  and?: Array<PurchaseInvoiceFilterProfileFilter> | null | undefined;
  billingManagedBy?: BillingManagedByFilterComparison | null | undefined;
  bookkeeperDeactivatedAt?: DateFieldComparison | null | undefined;
  bookkeeperId?: StringFieldComparison | null | undefined;
  bookkeeperServiceMode?: BookkeeperServiceModeFilterComparison | null | undefined;
  budgetRunRateEmailEnabled?: BooleanFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdByDeveloperId?: StringFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currencies?: CurrencyFilterComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  currentPlanId?: StringFieldComparison | null | undefined;
  defaultDueDays?: NumberFieldComparison | null | undefined;
  defaultMonetaryAccountId?: StringFieldComparison | null | undefined;
  emailBcc?: StringFieldComparison | null | undefined;
  emailCc?: StringFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  invoiceNumberFormat?: StringFieldComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  languages?: StringFieldComparison | null | undefined;
  ledgerChart?: StringFieldComparison | null | undefined;
  legalForm?: TaxLegalFormFilterComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  logo?: StringFieldComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<PurchaseInvoiceFilterProfileFilter> | null | undefined;
  platformId?: IdFilterComparison | null | undefined;
  primaryColor?: StringFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffEnabled?: BooleanFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffMaxAmount?: NumberFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffMaxPercent?: NumberFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchIntervalUnit?: PurchaseInvoicePaymentBatchIntervalUnitFilterComparison | null | undefined;
  purchaseInvoicePaymentBatchIntervalValue?: NumberFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchMode?: PurchaseInvoicePaymentBatchModeFilterComparison | null | undefined;
  purchaseInvoicePaymentBatchNameTemplate?: StringFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchNextRunAt?: DateFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchRunHour?: NumberFieldComparison | null | undefined;
  quoteLayout?: JsonObjectFilterComparison | null | undefined;
  quoteNumberFormat?: StringFieldComparison | null | undefined;
  registrationCountry?: CountryFilterComparison | null | undefined;
  registrationNumber?: StringFieldComparison | null | undefined;
  reminderContent?: JsonObjectFilterComparison | null | undefined;
  reminderEmailEnabled?: BooleanFieldComparison | null | undefined;
  reminderLayout?: JsonObjectFilterComparison | null | undefined;
  reminderNumberFormat?: StringFieldComparison | null | undefined;
  remindersAutomaticEnabled?: BooleanFieldComparison | null | undefined;
  salesInvoiceAutoSendOnClose?: BooleanFieldComparison | null | undefined;
  salesInvoiceFooter?: StringFieldComparison | null | undefined;
  salesInvoiceIncludeUbl?: BooleanFieldComparison | null | undefined;
  salesInvoiceLayout?: JsonObjectFilterComparison | null | undefined;
  salesInvoicePaymentFailedEmailEnabled?: BooleanFieldComparison | null | undefined;
  salesInvoicePaymentSucceededEmailEnabled?: BooleanFieldComparison | null | undefined;
  sellToCountries?: CountryFilterComparison | null | undefined;
  senderEmail?: StringFieldComparison | null | undefined;
  smtpEnabled?: BooleanFieldComparison | null | undefined;
  smtpHost?: StringFieldComparison | null | undefined;
  smtpPasswordConfigured?: BooleanFieldComparison | null | undefined;
  smtpPort?: NumberFieldComparison | null | undefined;
  smtpSecure?: BooleanFieldComparison | null | undefined;
  smtpUser?: StringFieldComparison | null | undefined;
  stripeAccountId?: StringFieldComparison | null | undefined;
  stripeChargesEnabled?: BooleanFieldComparison | null | undefined;
  stripeDetailsSubmitted?: BooleanFieldComparison | null | undefined;
  stripePayoutsEnabled?: BooleanFieldComparison | null | undefined;
  subscriptionInvoiceGenerationEnabled?: BooleanFieldComparison | null | undefined;
  taxThresholdEmailEnabled?: BooleanFieldComparison | null | undefined;
  timezone?: StringFieldComparison | null | undefined;
  units?: UnitsFilterComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  url?: StringFieldComparison | null | undefined;
  vatFilingAcceptedEmailEnabled?: BooleanFieldComparison | null | undefined;
  vatFilingRejectedEmailEnabled?: BooleanFieldComparison | null | undefined;
};

export type PurchaseInvoiceFilterPurchaseInvoiceEventFilter = {
  and?: Array<PurchaseInvoiceFilterPurchaseInvoiceEventFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  message?: StringFieldComparison | null | undefined;
  or?: Array<PurchaseInvoiceFilterPurchaseInvoiceEventFilter> | null | undefined;
  purchaseInvoiceId?: StringFieldComparison | null | undefined;
  type?: PurchaseInvoiceEventTypeFilterComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type PurchaseInvoiceFilterPurchaseInvoiceNoteFilter = {
  and?: Array<PurchaseInvoiceFilterPurchaseInvoiceNoteFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  message?: StringFieldComparison | null | undefined;
  or?: Array<PurchaseInvoiceFilterPurchaseInvoiceNoteFilter> | null | undefined;
  purchaseInvoiceId?: StringFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type PurchaseInvoiceFilterRelationFilter = {
  and?: Array<PurchaseInvoiceFilterRelationFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  defaultCostCenterId?: StringFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  firstName?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  lastName?: StringFieldComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  or?: Array<PurchaseInvoiceFilterRelationFilter> | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  registrationCountry?: StringFieldComparison | null | undefined;
  registrationNumber?: StringFieldComparison | null | undefined;
  remindersAutomaticDisabled?: BooleanFieldComparison | null | undefined;
  standardDueDays?: NumberFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  uuid?: StringFieldComparison | null | undefined;
};

export type PurchaseInvoiceLineUpsertFields = {
  costCenter?: ObjectRef | null | undefined;
  description?: string | null | undefined;
  /** Discount per unit, minor units. */
  discountMinor?: number | null | undefined;
  /** Defaults to the product purchase ledger. */
  ledger?: string | null | undefined;
  name: string;
  /** Unit price in minor units (cents). */
  priceMinor: number;
  product?: ObjectRef | null | undefined;
  project?: ObjectRef | null | undefined;
  /** Defaults to 1. */
  quantity?: number | null | undefined;
  /** The tax amount is derived from the tax code, never taken from the line. */
  taxCode: string;
};

export type PurchaseInvoicePaymentBatchIntervalUnit =
  | 'days'
  | 'hours'
  | 'weeks';

export type PurchaseInvoicePaymentBatchIntervalUnitFilterComparison = {
  eq?: PurchaseInvoicePaymentBatchIntervalUnit | null | undefined;
  gt?: PurchaseInvoicePaymentBatchIntervalUnit | null | undefined;
  gte?: PurchaseInvoicePaymentBatchIntervalUnit | null | undefined;
  iLike?: PurchaseInvoicePaymentBatchIntervalUnit | null | undefined;
  in?: Array<PurchaseInvoicePaymentBatchIntervalUnit> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: PurchaseInvoicePaymentBatchIntervalUnit | null | undefined;
  lt?: PurchaseInvoicePaymentBatchIntervalUnit | null | undefined;
  lte?: PurchaseInvoicePaymentBatchIntervalUnit | null | undefined;
  neq?: PurchaseInvoicePaymentBatchIntervalUnit | null | undefined;
  notILike?: PurchaseInvoicePaymentBatchIntervalUnit | null | undefined;
  notIn?: Array<PurchaseInvoicePaymentBatchIntervalUnit> | null | undefined;
  notLike?: PurchaseInvoicePaymentBatchIntervalUnit | null | undefined;
};

export type PurchaseInvoicePaymentBatchMode =
  | 'automatic'
  | 'manual';

export type PurchaseInvoicePaymentBatchModeFilterComparison = {
  eq?: PurchaseInvoicePaymentBatchMode | null | undefined;
  gt?: PurchaseInvoicePaymentBatchMode | null | undefined;
  gte?: PurchaseInvoicePaymentBatchMode | null | undefined;
  iLike?: PurchaseInvoicePaymentBatchMode | null | undefined;
  in?: Array<PurchaseInvoicePaymentBatchMode> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: PurchaseInvoicePaymentBatchMode | null | undefined;
  lt?: PurchaseInvoicePaymentBatchMode | null | undefined;
  lte?: PurchaseInvoicePaymentBatchMode | null | undefined;
  neq?: PurchaseInvoicePaymentBatchMode | null | undefined;
  notILike?: PurchaseInvoicePaymentBatchMode | null | undefined;
  notIn?: Array<PurchaseInvoicePaymentBatchMode> | null | undefined;
  notLike?: PurchaseInvoicePaymentBatchMode | null | undefined;
};

export type PurchaseInvoicePeriodInput = {
  from?: string | null | undefined;
  to?: string | null | undefined;
};

export type PurchaseInvoiceSort = {
  direction: SortDirection;
  field: PurchaseInvoiceSortFields;
  nulls?: SortNulls | null | undefined;
};

export type PurchaseInvoiceSortFields =
  | 'acceptedAt'
  | 'amount'
  | 'closed'
  | 'created'
  | 'createdById'
  | 'currency'
  | 'date'
  | 'disputed'
  | 'due'
  | 'externalId'
  | 'id'
  | 'number'
  | 'paid'
  | 'profileId'
  | 'reference'
  | 'relationId'
  | 'scheduled'
  | 'updated'
  | 'uuid';

export type PurchaseInvoiceUpsertFields = {
  currency: Currency;
  date: string;
  due?: string | null | undefined;
  expectedTotalMinor?: number | null | undefined;
  /** Confirm (book) the invoice now. Without it the invoice stays a draft. */
  finalise?: boolean | null | undefined;
  lines: Array<PurchaseInvoiceLineUpsertFields>;
  /** The supplier's invoice number. */
  number?: string | null | undefined;
  reference?: string | null | undefined;
  relation?: ObjectRef | null | undefined;
};

export type QuoteAcceptanceOutcome =
  | 'create_invoice'
  | 'create_project';

export type QuoteAcceptanceOutcomeFilterComparison = {
  eq?: QuoteAcceptanceOutcome | null | undefined;
  gt?: QuoteAcceptanceOutcome | null | undefined;
  gte?: QuoteAcceptanceOutcome | null | undefined;
  iLike?: QuoteAcceptanceOutcome | null | undefined;
  in?: Array<QuoteAcceptanceOutcome> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: QuoteAcceptanceOutcome | null | undefined;
  lt?: QuoteAcceptanceOutcome | null | undefined;
  lte?: QuoteAcceptanceOutcome | null | undefined;
  neq?: QuoteAcceptanceOutcome | null | undefined;
  notILike?: QuoteAcceptanceOutcome | null | undefined;
  notIn?: Array<QuoteAcceptanceOutcome> | null | undefined;
  notLike?: QuoteAcceptanceOutcome | null | undefined;
};

export type ReceiptStatus =
  | 'attached'
  | 'missing'
  | 'not_required'
  | 'requested';

export type RecurringCollection =
  | 'automatic'
  | 'invoice_only';

export type RecurringCollectionFilterComparison = {
  eq?: RecurringCollection | null | undefined;
  gt?: RecurringCollection | null | undefined;
  gte?: RecurringCollection | null | undefined;
  iLike?: RecurringCollection | null | undefined;
  in?: Array<RecurringCollection> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: RecurringCollection | null | undefined;
  lt?: RecurringCollection | null | undefined;
  lte?: RecurringCollection | null | undefined;
  neq?: RecurringCollection | null | undefined;
  notILike?: RecurringCollection | null | undefined;
  notIn?: Array<RecurringCollection> | null | undefined;
  notLike?: RecurringCollection | null | undefined;
};

export type RecurringCustomerCancellation =
  | 'merchant_only'
  | 'self_serve';

export type RecurringCustomerCancellationFilterComparison = {
  eq?: RecurringCustomerCancellation | null | undefined;
  gt?: RecurringCustomerCancellation | null | undefined;
  gte?: RecurringCustomerCancellation | null | undefined;
  iLike?: RecurringCustomerCancellation | null | undefined;
  in?: Array<RecurringCustomerCancellation> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: RecurringCustomerCancellation | null | undefined;
  lt?: RecurringCustomerCancellation | null | undefined;
  lte?: RecurringCustomerCancellation | null | undefined;
  neq?: RecurringCustomerCancellation | null | undefined;
  notILike?: RecurringCustomerCancellation | null | undefined;
  notIn?: Array<RecurringCustomerCancellation> | null | undefined;
  notLike?: RecurringCustomerCancellation | null | undefined;
};

export type RecurringFilter = {
  allowedPaymentMethods?: SubscriptionPaymentMethodTypeFilterComparison | null | undefined;
  and?: Array<RecurringFilter> | null | undefined;
  canceled?: DateFieldComparison | null | undefined;
  chargeRetryIntervalDays?: NumberFieldComparison | null | undefined;
  chargeRetryLimit?: NumberFieldComparison | null | undefined;
  closed?: DateFieldComparison | null | undefined;
  collection?: RecurringCollectionFilterComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdBy?: RecurringFilterAccountFilter | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  customerCancellation?: RecurringCustomerCancellationFilterComparison | null | undefined;
  endDate?: DateFieldComparison | null | undefined;
  frequency?: FrequencyFilterComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  invoiceTiming?: RecurringInvoiceTimingFilterComparison | null | undefined;
  minimumTermMonths?: NumberFieldComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  noticePeriodDays?: NumberFieldComparison | null | undefined;
  offset?: NumberFieldComparison | null | undefined;
  or?: Array<RecurringFilter> | null | undefined;
  paymentTermDays?: NumberFieldComparison | null | undefined;
  profile?: RecurringFilterProfileFilter | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  recurringTemplate?: RecurringFilterRecurringTemplateFilter | null | undefined;
  recurringTemplateId?: StringFieldComparison | null | undefined;
  relation?: RecurringFilterRelationFilter | null | undefined;
  relationId?: StringFieldComparison | null | undefined;
  renewal?: RecurringRenewalFilterComparison | null | undefined;
  renewalTermMonths?: NumberFieldComparison | null | undefined;
  startDate?: DateFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  uuid?: StringFieldComparison | null | undefined;
};

export type RecurringFilterAccountFilter = {
  adminId?: StringFieldComparison | null | undefined;
  and?: Array<RecurringFilterAccountFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
  firstName?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  lastName?: StringFieldComparison | null | undefined;
  or?: Array<RecurringFilterAccountFilter> | null | undefined;
  phone?: StringFieldComparison | null | undefined;
  picture?: StringFieldComparison | null | undefined;
  secret?: StringFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type RecurringFilterProfileFilter = {
  and?: Array<RecurringFilterProfileFilter> | null | undefined;
  billingManagedBy?: BillingManagedByFilterComparison | null | undefined;
  bookkeeperDeactivatedAt?: DateFieldComparison | null | undefined;
  bookkeeperId?: StringFieldComparison | null | undefined;
  bookkeeperServiceMode?: BookkeeperServiceModeFilterComparison | null | undefined;
  budgetRunRateEmailEnabled?: BooleanFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdByDeveloperId?: StringFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currencies?: CurrencyFilterComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  currentPlanId?: StringFieldComparison | null | undefined;
  defaultDueDays?: NumberFieldComparison | null | undefined;
  defaultMonetaryAccountId?: StringFieldComparison | null | undefined;
  emailBcc?: StringFieldComparison | null | undefined;
  emailCc?: StringFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  invoiceNumberFormat?: StringFieldComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  languages?: StringFieldComparison | null | undefined;
  ledgerChart?: StringFieldComparison | null | undefined;
  legalForm?: TaxLegalFormFilterComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  logo?: StringFieldComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<RecurringFilterProfileFilter> | null | undefined;
  platformId?: IdFilterComparison | null | undefined;
  primaryColor?: StringFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffEnabled?: BooleanFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffMaxAmount?: NumberFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffMaxPercent?: NumberFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchIntervalUnit?: PurchaseInvoicePaymentBatchIntervalUnitFilterComparison | null | undefined;
  purchaseInvoicePaymentBatchIntervalValue?: NumberFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchMode?: PurchaseInvoicePaymentBatchModeFilterComparison | null | undefined;
  purchaseInvoicePaymentBatchNameTemplate?: StringFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchNextRunAt?: DateFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchRunHour?: NumberFieldComparison | null | undefined;
  quoteLayout?: JsonObjectFilterComparison | null | undefined;
  quoteNumberFormat?: StringFieldComparison | null | undefined;
  registrationCountry?: CountryFilterComparison | null | undefined;
  registrationNumber?: StringFieldComparison | null | undefined;
  reminderContent?: JsonObjectFilterComparison | null | undefined;
  reminderEmailEnabled?: BooleanFieldComparison | null | undefined;
  reminderLayout?: JsonObjectFilterComparison | null | undefined;
  reminderNumberFormat?: StringFieldComparison | null | undefined;
  remindersAutomaticEnabled?: BooleanFieldComparison | null | undefined;
  salesInvoiceAutoSendOnClose?: BooleanFieldComparison | null | undefined;
  salesInvoiceFooter?: StringFieldComparison | null | undefined;
  salesInvoiceIncludeUbl?: BooleanFieldComparison | null | undefined;
  salesInvoiceLayout?: JsonObjectFilterComparison | null | undefined;
  salesInvoicePaymentFailedEmailEnabled?: BooleanFieldComparison | null | undefined;
  salesInvoicePaymentSucceededEmailEnabled?: BooleanFieldComparison | null | undefined;
  sellToCountries?: CountryFilterComparison | null | undefined;
  senderEmail?: StringFieldComparison | null | undefined;
  smtpEnabled?: BooleanFieldComparison | null | undefined;
  smtpHost?: StringFieldComparison | null | undefined;
  smtpPasswordConfigured?: BooleanFieldComparison | null | undefined;
  smtpPort?: NumberFieldComparison | null | undefined;
  smtpSecure?: BooleanFieldComparison | null | undefined;
  smtpUser?: StringFieldComparison | null | undefined;
  stripeAccountId?: StringFieldComparison | null | undefined;
  stripeChargesEnabled?: BooleanFieldComparison | null | undefined;
  stripeDetailsSubmitted?: BooleanFieldComparison | null | undefined;
  stripePayoutsEnabled?: BooleanFieldComparison | null | undefined;
  subscriptionInvoiceGenerationEnabled?: BooleanFieldComparison | null | undefined;
  taxThresholdEmailEnabled?: BooleanFieldComparison | null | undefined;
  timezone?: StringFieldComparison | null | undefined;
  units?: UnitsFilterComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  url?: StringFieldComparison | null | undefined;
  vatFilingAcceptedEmailEnabled?: BooleanFieldComparison | null | undefined;
  vatFilingRejectedEmailEnabled?: BooleanFieldComparison | null | undefined;
};

export type RecurringFilterRecurringTemplateFilter = {
  allowedPaymentMethods?: SubscriptionPaymentMethodTypeFilterComparison | null | undefined;
  and?: Array<RecurringFilterRecurringTemplateFilter> | null | undefined;
  chargeRetryIntervalDays?: NumberFieldComparison | null | undefined;
  chargeRetryLimit?: NumberFieldComparison | null | undefined;
  collection?: RecurringCollectionFilterComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  customerCancellation?: RecurringCustomerCancellationFilterComparison | null | undefined;
  frequency?: FrequencyFilterComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  invoiceTiming?: RecurringInvoiceTimingFilterComparison | null | undefined;
  minimumTermMonths?: NumberFieldComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  noticePeriodDays?: NumberFieldComparison | null | undefined;
  or?: Array<RecurringFilterRecurringTemplateFilter> | null | undefined;
  paymentTermDays?: NumberFieldComparison | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  renewal?: RecurringRenewalFilterComparison | null | undefined;
  renewalTermMonths?: NumberFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type RecurringFilterRelationFilter = {
  and?: Array<RecurringFilterRelationFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  defaultCostCenterId?: StringFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  firstName?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  lastName?: StringFieldComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  or?: Array<RecurringFilterRelationFilter> | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  registrationCountry?: StringFieldComparison | null | undefined;
  registrationNumber?: StringFieldComparison | null | undefined;
  remindersAutomaticDisabled?: BooleanFieldComparison | null | undefined;
  standardDueDays?: NumberFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  uuid?: StringFieldComparison | null | undefined;
};

export type RecurringInvoiceTiming =
  | 'period_end'
  | 'period_start';

export type RecurringInvoiceTimingFilterComparison = {
  eq?: RecurringInvoiceTiming | null | undefined;
  gt?: RecurringInvoiceTiming | null | undefined;
  gte?: RecurringInvoiceTiming | null | undefined;
  iLike?: RecurringInvoiceTiming | null | undefined;
  in?: Array<RecurringInvoiceTiming> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: RecurringInvoiceTiming | null | undefined;
  lt?: RecurringInvoiceTiming | null | undefined;
  lte?: RecurringInvoiceTiming | null | undefined;
  neq?: RecurringInvoiceTiming | null | undefined;
  notILike?: RecurringInvoiceTiming | null | undefined;
  notIn?: Array<RecurringInvoiceTiming> | null | undefined;
  notLike?: RecurringInvoiceTiming | null | undefined;
};

export type RecurringRenewal =
  | 'automatic'
  | 'none';

export type RecurringRenewalFilterComparison = {
  eq?: RecurringRenewal | null | undefined;
  gt?: RecurringRenewal | null | undefined;
  gte?: RecurringRenewal | null | undefined;
  iLike?: RecurringRenewal | null | undefined;
  in?: Array<RecurringRenewal> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: RecurringRenewal | null | undefined;
  lt?: RecurringRenewal | null | undefined;
  lte?: RecurringRenewal | null | undefined;
  neq?: RecurringRenewal | null | undefined;
  notILike?: RecurringRenewal | null | undefined;
  notIn?: Array<RecurringRenewal> | null | undefined;
  notLike?: RecurringRenewal | null | undefined;
};

export type RecurringSort = {
  direction: SortDirection;
  field: RecurringSortFields;
  nulls?: SortNulls | null | undefined;
};

export type RecurringSortFields =
  | 'allowedPaymentMethods'
  | 'canceled'
  | 'chargeRetryIntervalDays'
  | 'chargeRetryLimit'
  | 'closed'
  | 'collection'
  | 'created'
  | 'createdById'
  | 'currency'
  | 'customerCancellation'
  | 'endDate'
  | 'frequency'
  | 'id'
  | 'invoiceTiming'
  | 'minimumTermMonths'
  | 'name'
  | 'noticePeriodDays'
  | 'offset'
  | 'paymentTermDays'
  | 'profileId'
  | 'recurringTemplateId'
  | 'relationId'
  | 'renewal'
  | 'renewalTermMonths'
  | 'startDate'
  | 'updated'
  | 'uuid';

export type RegisterDataSourceInput = {
  autoAttach?: boolean | null | undefined;
  balanceAssertions?: boolean | null | undefined;
  cadence?: DataSourceCadence | null | undefined;
  delivery?: Record<string, unknown> | null | undefined;
  expectedBy?: string | null | undefined;
  gapThresholdMinutes?: number | null | undefined;
  historyMonths?: number | null | undefined;
  key: string;
  name: string;
  settings?: Record<string, unknown> | null | undefined;
  type: DataSourceType;
};

export type RelationBankAccountUpsertFields = {
  bic?: string | null | undefined;
  holderName?: string | null | undefined;
  iban: string;
  isActive?: boolean | null | undefined;
};

export type RelationFilter = {
  and?: Array<RelationFilter> | null | undefined;
  bankAccounts?: RelationFilterRelationBankAccountFilter | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdBy?: RelationFilterAccountFilter | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  defaultCostCenter?: RelationFilterCostCenterFilter | null | undefined;
  defaultCostCenterId?: StringFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  firstName?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  lastName?: StringFieldComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  or?: Array<RelationFilter> | null | undefined;
  profile?: RelationFilterProfileFilter | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  projects?: RelationFilterProjectFilter | null | undefined;
  registrationCountry?: StringFieldComparison | null | undefined;
  registrationNumber?: StringFieldComparison | null | undefined;
  remindersAutomaticDisabled?: BooleanFieldComparison | null | undefined;
  standardDueDays?: NumberFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  uuid?: StringFieldComparison | null | undefined;
};

export type RelationFilterAccountFilter = {
  adminId?: StringFieldComparison | null | undefined;
  and?: Array<RelationFilterAccountFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
  firstName?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  lastName?: StringFieldComparison | null | undefined;
  or?: Array<RelationFilterAccountFilter> | null | undefined;
  phone?: StringFieldComparison | null | undefined;
  picture?: StringFieldComparison | null | undefined;
  secret?: StringFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type RelationFilterCostCenterFilter = {
  active?: BooleanFieldComparison | null | undefined;
  and?: Array<RelationFilterCostCenterFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  number?: StringFieldComparison | null | undefined;
  or?: Array<RelationFilterCostCenterFilter> | null | undefined;
  ownerAccountId?: StringFieldComparison | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type RelationFilterProfileFilter = {
  and?: Array<RelationFilterProfileFilter> | null | undefined;
  billingManagedBy?: BillingManagedByFilterComparison | null | undefined;
  bookkeeperDeactivatedAt?: DateFieldComparison | null | undefined;
  bookkeeperId?: StringFieldComparison | null | undefined;
  bookkeeperServiceMode?: BookkeeperServiceModeFilterComparison | null | undefined;
  budgetRunRateEmailEnabled?: BooleanFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdByDeveloperId?: StringFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currencies?: CurrencyFilterComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  currentPlanId?: StringFieldComparison | null | undefined;
  defaultDueDays?: NumberFieldComparison | null | undefined;
  defaultMonetaryAccountId?: StringFieldComparison | null | undefined;
  emailBcc?: StringFieldComparison | null | undefined;
  emailCc?: StringFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  invoiceNumberFormat?: StringFieldComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  languages?: StringFieldComparison | null | undefined;
  ledgerChart?: StringFieldComparison | null | undefined;
  legalForm?: TaxLegalFormFilterComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  logo?: StringFieldComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<RelationFilterProfileFilter> | null | undefined;
  platformId?: IdFilterComparison | null | undefined;
  primaryColor?: StringFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffEnabled?: BooleanFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffMaxAmount?: NumberFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffMaxPercent?: NumberFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchIntervalUnit?: PurchaseInvoicePaymentBatchIntervalUnitFilterComparison | null | undefined;
  purchaseInvoicePaymentBatchIntervalValue?: NumberFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchMode?: PurchaseInvoicePaymentBatchModeFilterComparison | null | undefined;
  purchaseInvoicePaymentBatchNameTemplate?: StringFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchNextRunAt?: DateFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchRunHour?: NumberFieldComparison | null | undefined;
  quoteLayout?: JsonObjectFilterComparison | null | undefined;
  quoteNumberFormat?: StringFieldComparison | null | undefined;
  registrationCountry?: CountryFilterComparison | null | undefined;
  registrationNumber?: StringFieldComparison | null | undefined;
  reminderContent?: JsonObjectFilterComparison | null | undefined;
  reminderEmailEnabled?: BooleanFieldComparison | null | undefined;
  reminderLayout?: JsonObjectFilterComparison | null | undefined;
  reminderNumberFormat?: StringFieldComparison | null | undefined;
  remindersAutomaticEnabled?: BooleanFieldComparison | null | undefined;
  salesInvoiceAutoSendOnClose?: BooleanFieldComparison | null | undefined;
  salesInvoiceFooter?: StringFieldComparison | null | undefined;
  salesInvoiceIncludeUbl?: BooleanFieldComparison | null | undefined;
  salesInvoiceLayout?: JsonObjectFilterComparison | null | undefined;
  salesInvoicePaymentFailedEmailEnabled?: BooleanFieldComparison | null | undefined;
  salesInvoicePaymentSucceededEmailEnabled?: BooleanFieldComparison | null | undefined;
  sellToCountries?: CountryFilterComparison | null | undefined;
  senderEmail?: StringFieldComparison | null | undefined;
  smtpEnabled?: BooleanFieldComparison | null | undefined;
  smtpHost?: StringFieldComparison | null | undefined;
  smtpPasswordConfigured?: BooleanFieldComparison | null | undefined;
  smtpPort?: NumberFieldComparison | null | undefined;
  smtpSecure?: BooleanFieldComparison | null | undefined;
  smtpUser?: StringFieldComparison | null | undefined;
  stripeAccountId?: StringFieldComparison | null | undefined;
  stripeChargesEnabled?: BooleanFieldComparison | null | undefined;
  stripeDetailsSubmitted?: BooleanFieldComparison | null | undefined;
  stripePayoutsEnabled?: BooleanFieldComparison | null | undefined;
  subscriptionInvoiceGenerationEnabled?: BooleanFieldComparison | null | undefined;
  taxThresholdEmailEnabled?: BooleanFieldComparison | null | undefined;
  timezone?: StringFieldComparison | null | undefined;
  units?: UnitsFilterComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  url?: StringFieldComparison | null | undefined;
  vatFilingAcceptedEmailEnabled?: BooleanFieldComparison | null | undefined;
  vatFilingRejectedEmailEnabled?: BooleanFieldComparison | null | undefined;
};

export type RelationFilterProjectFilter = {
  and?: Array<RelationFilterProjectFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  end?: DateFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<RelationFilterProjectFilter> | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  relationId?: StringFieldComparison | null | undefined;
  start?: DateFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type RelationFilterRelationBankAccountFilter = {
  and?: Array<RelationFilterRelationBankAccountFilter> | null | undefined;
  bic?: StringFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  holderName?: StringFieldComparison | null | undefined;
  iban?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  isActive?: BooleanFieldComparison | null | undefined;
  or?: Array<RelationFilterRelationBankAccountFilter> | null | undefined;
  relationId?: StringFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type RelationKindInput =
  | 'both'
  | 'customer'
  | 'supplier';

export type RelationSort = {
  direction: SortDirection;
  field: RelationSortFields;
  nulls?: SortNulls | null | undefined;
};

export type RelationSortFields =
  | 'created'
  | 'createdById'
  | 'defaultCostCenterId'
  | 'email'
  | 'externalId'
  | 'firstName'
  | 'id'
  | 'language'
  | 'lastName'
  | 'legalName'
  | 'profileId'
  | 'registrationCountry'
  | 'registrationNumber'
  | 'remindersAutomaticDisabled'
  | 'standardDueDays'
  | 'updated'
  | 'uuid';

export type RelationUpsertFields = {
  address?: AddressUpsertFields | null | undefined;
  bankAccounts?: Array<RelationBankAccountUpsertFields> | null | undefined;
  email?: string | null | undefined;
  firstName?: string | null | undefined;
  kind?: RelationKindInput | null | undefined;
  language?: string | null | undefined;
  lastName?: string | null | undefined;
  legalName?: string | null | undefined;
  registrationCountry?: Country | null | undefined;
  registrationNumber?: string | null | undefined;
  remindersAutomaticDisabled?: boolean | null | undefined;
  standardDueDays?: number | null | undefined;
  tags?: Array<string> | null | undefined;
  vatNumber?: string | null | undefined;
};

export type RenderJobStatus =
  | 'accepted'
  | 'received'
  | 'rejected'
  | 'requested'
  | 'timed_out';

export type ReportCompare =
  | 'none'
  | 'previous_period'
  | 'previous_year';

export type ReportFormat =
  | 'PDF'
  | 'XLSX';

export type ReportPaymentRequestStatusInput = {
  failureReason?: string | null | undefined;
  partnerReference?: string | null | undefined;
  paymentRequestId: string | number;
  status: PaymentRequestStatus;
};

export type RevokeTaxAuthorisationInput = {
  companyId: string | number;
  reason?: string | null | undefined;
  /** Default: every tax. */
  taxes?: Array<AuthorisedTax> | null | undefined;
};

export type SalesInvoiceEventType =
  | 'email'
  | 'payment_failed_email'
  | 'payment_succeeded_email'
  | 'reopen';

export type SalesInvoiceEventTypeFilterComparison = {
  eq?: SalesInvoiceEventType | null | undefined;
  gt?: SalesInvoiceEventType | null | undefined;
  gte?: SalesInvoiceEventType | null | undefined;
  iLike?: SalesInvoiceEventType | null | undefined;
  in?: Array<SalesInvoiceEventType> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: SalesInvoiceEventType | null | undefined;
  lt?: SalesInvoiceEventType | null | undefined;
  lte?: SalesInvoiceEventType | null | undefined;
  neq?: SalesInvoiceEventType | null | undefined;
  notILike?: SalesInvoiceEventType | null | undefined;
  notIn?: Array<SalesInvoiceEventType> | null | undefined;
  notLike?: SalesInvoiceEventType | null | undefined;
};

export type SalesInvoiceFilter = {
  and?: Array<SalesInvoiceFilter> | null | undefined;
  bookingDate?: DateFieldComparison | null | undefined;
  closed?: DateFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdBy?: SalesInvoiceFilterAccountFilter | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  date?: DateFieldComparison | null | undefined;
  due?: DateFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
  entryId?: StringFieldComparison | null | undefined;
  events?: SalesInvoiceFilterSalesInvoiceEventFilter | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  firstName?: StringFieldComparison | null | undefined;
  footer?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  initialInvoice?: SalesInvoiceFilterSalesInvoiceFilter | null | undefined;
  initialInvoiceId?: StringFieldComparison | null | undefined;
  lastName?: StringFieldComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  memo?: StringFieldComparison | null | undefined;
  notes?: SalesInvoiceFilterSalesInvoiceNoteFilter | null | undefined;
  number?: StringFieldComparison | null | undefined;
  or?: Array<SalesInvoiceFilter> | null | undefined;
  paid?: DateFieldComparison | null | undefined;
  profile?: SalesInvoiceFilterProfileFilter | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  pspPayments?: SalesInvoiceFilterPspPaymentFilter | null | undefined;
  quote?: SalesInvoiceFilterQuoteFilter | null | undefined;
  quoteId?: StringFieldComparison | null | undefined;
  recurring?: SalesInvoiceFilterRecurringFilter | null | undefined;
  recurringId?: StringFieldComparison | null | undefined;
  reference?: StringFieldComparison | null | undefined;
  relation?: SalesInvoiceFilterRelationFilter | null | undefined;
  relationId?: StringFieldComparison | null | undefined;
  reminders?: SalesInvoiceFilterReminderFilter | null | undefined;
  uncollectibleAt?: DateFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  uuid?: StringFieldComparison | null | undefined;
  vatNumber?: StringFieldComparison | null | undefined;
  vatReliefClaimedAt?: DateFieldComparison | null | undefined;
};

export type SalesInvoiceFilterAccountFilter = {
  adminId?: StringFieldComparison | null | undefined;
  and?: Array<SalesInvoiceFilterAccountFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
  firstName?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  lastName?: StringFieldComparison | null | undefined;
  or?: Array<SalesInvoiceFilterAccountFilter> | null | undefined;
  phone?: StringFieldComparison | null | undefined;
  picture?: StringFieldComparison | null | undefined;
  secret?: StringFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type SalesInvoiceFilterPspPaymentFilter = {
  amount?: NumberFieldComparison | null | undefined;
  and?: Array<SalesInvoiceFilterPspPaymentFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  method?: PspPaymentMethodFilterComparison | null | undefined;
  or?: Array<SalesInvoiceFilterPspPaymentFilter> | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  provider?: PspProviderFilterComparison | null | undefined;
  quoteId?: StringFieldComparison | null | undefined;
  relationId?: StringFieldComparison | null | undefined;
  reminderId?: StringFieldComparison | null | undefined;
  salesInvoiceId?: StringFieldComparison | null | undefined;
  state?: PspPaymentStateFilterComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type SalesInvoiceFilterProfileFilter = {
  and?: Array<SalesInvoiceFilterProfileFilter> | null | undefined;
  billingManagedBy?: BillingManagedByFilterComparison | null | undefined;
  bookkeeperDeactivatedAt?: DateFieldComparison | null | undefined;
  bookkeeperId?: StringFieldComparison | null | undefined;
  bookkeeperServiceMode?: BookkeeperServiceModeFilterComparison | null | undefined;
  budgetRunRateEmailEnabled?: BooleanFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdByDeveloperId?: StringFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currencies?: CurrencyFilterComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  currentPlanId?: StringFieldComparison | null | undefined;
  defaultDueDays?: NumberFieldComparison | null | undefined;
  defaultMonetaryAccountId?: StringFieldComparison | null | undefined;
  emailBcc?: StringFieldComparison | null | undefined;
  emailCc?: StringFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  invoiceNumberFormat?: StringFieldComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  languages?: StringFieldComparison | null | undefined;
  ledgerChart?: StringFieldComparison | null | undefined;
  legalForm?: TaxLegalFormFilterComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  logo?: StringFieldComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  or?: Array<SalesInvoiceFilterProfileFilter> | null | undefined;
  platformId?: IdFilterComparison | null | undefined;
  primaryColor?: StringFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffEnabled?: BooleanFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffMaxAmount?: NumberFieldComparison | null | undefined;
  purchaseInvoiceAutoWriteOffMaxPercent?: NumberFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchIntervalUnit?: PurchaseInvoicePaymentBatchIntervalUnitFilterComparison | null | undefined;
  purchaseInvoicePaymentBatchIntervalValue?: NumberFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchMode?: PurchaseInvoicePaymentBatchModeFilterComparison | null | undefined;
  purchaseInvoicePaymentBatchNameTemplate?: StringFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchNextRunAt?: DateFieldComparison | null | undefined;
  purchaseInvoicePaymentBatchRunHour?: NumberFieldComparison | null | undefined;
  quoteLayout?: JsonObjectFilterComparison | null | undefined;
  quoteNumberFormat?: StringFieldComparison | null | undefined;
  registrationCountry?: CountryFilterComparison | null | undefined;
  registrationNumber?: StringFieldComparison | null | undefined;
  reminderContent?: JsonObjectFilterComparison | null | undefined;
  reminderEmailEnabled?: BooleanFieldComparison | null | undefined;
  reminderLayout?: JsonObjectFilterComparison | null | undefined;
  reminderNumberFormat?: StringFieldComparison | null | undefined;
  remindersAutomaticEnabled?: BooleanFieldComparison | null | undefined;
  salesInvoiceAutoSendOnClose?: BooleanFieldComparison | null | undefined;
  salesInvoiceFooter?: StringFieldComparison | null | undefined;
  salesInvoiceIncludeUbl?: BooleanFieldComparison | null | undefined;
  salesInvoiceLayout?: JsonObjectFilterComparison | null | undefined;
  salesInvoicePaymentFailedEmailEnabled?: BooleanFieldComparison | null | undefined;
  salesInvoicePaymentSucceededEmailEnabled?: BooleanFieldComparison | null | undefined;
  sellToCountries?: CountryFilterComparison | null | undefined;
  senderEmail?: StringFieldComparison | null | undefined;
  smtpEnabled?: BooleanFieldComparison | null | undefined;
  smtpHost?: StringFieldComparison | null | undefined;
  smtpPasswordConfigured?: BooleanFieldComparison | null | undefined;
  smtpPort?: NumberFieldComparison | null | undefined;
  smtpSecure?: BooleanFieldComparison | null | undefined;
  smtpUser?: StringFieldComparison | null | undefined;
  stripeAccountId?: StringFieldComparison | null | undefined;
  stripeChargesEnabled?: BooleanFieldComparison | null | undefined;
  stripeDetailsSubmitted?: BooleanFieldComparison | null | undefined;
  stripePayoutsEnabled?: BooleanFieldComparison | null | undefined;
  subscriptionInvoiceGenerationEnabled?: BooleanFieldComparison | null | undefined;
  taxThresholdEmailEnabled?: BooleanFieldComparison | null | undefined;
  timezone?: StringFieldComparison | null | undefined;
  units?: UnitsFilterComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  url?: StringFieldComparison | null | undefined;
  vatFilingAcceptedEmailEnabled?: BooleanFieldComparison | null | undefined;
  vatFilingRejectedEmailEnabled?: BooleanFieldComparison | null | undefined;
};

export type SalesInvoiceFilterQuoteFilter = {
  acceptanceOutcome?: QuoteAcceptanceOutcomeFilterComparison | null | undefined;
  acceptancePaymentPercentage?: NumberFieldComparison | null | undefined;
  acceptanceProcessId?: StringFieldComparison | null | undefined;
  acceptanceProjectId?: StringFieldComparison | null | undefined;
  acceptanceRequirePayment?: BooleanFieldComparison | null | undefined;
  acceptedAt?: DateFieldComparison | null | undefined;
  acceptedById?: StringFieldComparison | null | undefined;
  and?: Array<SalesInvoiceFilterQuoteFilter> | null | undefined;
  closed?: DateFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  date?: DateFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
  entryId?: StringFieldComparison | null | undefined;
  expiration?: DateFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  firstName?: StringFieldComparison | null | undefined;
  footer?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  lastName?: StringFieldComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  memo?: StringFieldComparison | null | undefined;
  number?: StringFieldComparison | null | undefined;
  or?: Array<SalesInvoiceFilterQuoteFilter> | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  reference?: StringFieldComparison | null | undefined;
  relationId?: StringFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  uuid?: StringFieldComparison | null | undefined;
  vatNumber?: StringFieldComparison | null | undefined;
};

export type SalesInvoiceFilterRecurringFilter = {
  allowedPaymentMethods?: SubscriptionPaymentMethodTypeFilterComparison | null | undefined;
  and?: Array<SalesInvoiceFilterRecurringFilter> | null | undefined;
  canceled?: DateFieldComparison | null | undefined;
  chargeRetryIntervalDays?: NumberFieldComparison | null | undefined;
  chargeRetryLimit?: NumberFieldComparison | null | undefined;
  closed?: DateFieldComparison | null | undefined;
  collection?: RecurringCollectionFilterComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  customerCancellation?: RecurringCustomerCancellationFilterComparison | null | undefined;
  endDate?: DateFieldComparison | null | undefined;
  frequency?: FrequencyFilterComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  invoiceTiming?: RecurringInvoiceTimingFilterComparison | null | undefined;
  minimumTermMonths?: NumberFieldComparison | null | undefined;
  name?: StringFieldComparison | null | undefined;
  noticePeriodDays?: NumberFieldComparison | null | undefined;
  offset?: NumberFieldComparison | null | undefined;
  or?: Array<SalesInvoiceFilterRecurringFilter> | null | undefined;
  paymentTermDays?: NumberFieldComparison | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  recurringTemplateId?: StringFieldComparison | null | undefined;
  relationId?: StringFieldComparison | null | undefined;
  renewal?: RecurringRenewalFilterComparison | null | undefined;
  renewalTermMonths?: NumberFieldComparison | null | undefined;
  startDate?: DateFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  uuid?: StringFieldComparison | null | undefined;
};

export type SalesInvoiceFilterRelationFilter = {
  and?: Array<SalesInvoiceFilterRelationFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  defaultCostCenterId?: StringFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  firstName?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  language?: StringFieldComparison | null | undefined;
  lastName?: StringFieldComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  or?: Array<SalesInvoiceFilterRelationFilter> | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  registrationCountry?: StringFieldComparison | null | undefined;
  registrationNumber?: StringFieldComparison | null | undefined;
  remindersAutomaticDisabled?: BooleanFieldComparison | null | undefined;
  standardDueDays?: NumberFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  uuid?: StringFieldComparison | null | undefined;
};

export type SalesInvoiceFilterReminderFilter = {
  and?: Array<SalesInvoiceFilterReminderFilter> | null | undefined;
  closed?: DateFieldComparison | null | undefined;
  content?: StringFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  date?: DateFieldComparison | null | undefined;
  due?: DateFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
  fees?: NumberFieldComparison | null | undefined;
  firstName?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  interest?: NumberFieldComparison | null | undefined;
  lastName?: StringFieldComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  number?: StringFieldComparison | null | undefined;
  or?: Array<SalesInvoiceFilterReminderFilter> | null | undefined;
  originalFees?: NumberFieldComparison | null | undefined;
  originalInterest?: NumberFieldComparison | null | undefined;
  paid?: DateFieldComparison | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  relationId?: StringFieldComparison | null | undefined;
  sent?: DateFieldComparison | null | undefined;
  stage?: NumberFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  uuid?: StringFieldComparison | null | undefined;
};

export type SalesInvoiceFilterSalesInvoiceEventFilter = {
  and?: Array<SalesInvoiceFilterSalesInvoiceEventFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  event?: SalesInvoiceEventTypeFilterComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  or?: Array<SalesInvoiceFilterSalesInvoiceEventFilter> | null | undefined;
  salesInvoiceId?: StringFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type SalesInvoiceFilterSalesInvoiceFilter = {
  and?: Array<SalesInvoiceFilterSalesInvoiceFilter> | null | undefined;
  bookingDate?: DateFieldComparison | null | undefined;
  closed?: DateFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currency?: CurrencyFilterComparison | null | undefined;
  date?: DateFieldComparison | null | undefined;
  due?: DateFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
  entryId?: StringFieldComparison | null | undefined;
  externalId?: StringFieldComparison | null | undefined;
  firstName?: StringFieldComparison | null | undefined;
  footer?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  initialInvoiceId?: StringFieldComparison | null | undefined;
  lastName?: StringFieldComparison | null | undefined;
  legalName?: StringFieldComparison | null | undefined;
  memo?: StringFieldComparison | null | undefined;
  number?: StringFieldComparison | null | undefined;
  or?: Array<SalesInvoiceFilterSalesInvoiceFilter> | null | undefined;
  paid?: DateFieldComparison | null | undefined;
  profileId?: StringFieldComparison | null | undefined;
  quoteId?: StringFieldComparison | null | undefined;
  recurringId?: StringFieldComparison | null | undefined;
  reference?: StringFieldComparison | null | undefined;
  relationId?: StringFieldComparison | null | undefined;
  uncollectibleAt?: DateFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
  uuid?: StringFieldComparison | null | undefined;
  vatNumber?: StringFieldComparison | null | undefined;
  vatReliefClaimedAt?: DateFieldComparison | null | undefined;
};

export type SalesInvoiceFilterSalesInvoiceNoteFilter = {
  and?: Array<SalesInvoiceFilterSalesInvoiceNoteFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  id?: IdFilterComparison | null | undefined;
  message?: StringFieldComparison | null | undefined;
  or?: Array<SalesInvoiceFilterSalesInvoiceNoteFilter> | null | undefined;
  salesInvoiceId?: StringFieldComparison | null | undefined;
  updated?: DateFieldComparison | null | undefined;
};

export type SalesInvoiceLineUpsertFields = {
  description?: string | null | undefined;
  /** Discount per unit, minor units. */
  discountMinor?: number | null | undefined;
  name: string;
  /** Unit price in minor units (cents). */
  priceMinor: number;
  product?: ObjectRef | null | undefined;
  project?: ObjectRef | null | undefined;
  /** Defaults to 1. */
  quantity?: number | null | undefined;
  /** The tax amount is derived from the tax code, never taken from the line. */
  taxCode: string;
};

export type SalesInvoicePeriodInput = {
  from?: string | null | undefined;
  to?: string | null | undefined;
};

export type SalesInvoiceSort = {
  direction: SortDirection;
  field: SalesInvoiceSortFields;
  nulls?: SortNulls | null | undefined;
};

export type SalesInvoiceSortFields =
  | 'bookingDate'
  | 'closed'
  | 'created'
  | 'createdById'
  | 'currency'
  | 'date'
  | 'due'
  | 'email'
  | 'entryId'
  | 'externalId'
  | 'firstName'
  | 'footer'
  | 'id'
  | 'initialInvoiceId'
  | 'lastName'
  | 'legalName'
  | 'memo'
  | 'number'
  | 'paid'
  | 'profileId'
  | 'quoteId'
  | 'recurringId'
  | 'reference'
  | 'relationId'
  | 'uncollectibleAt'
  | 'updated'
  | 'uuid'
  | 'vatNumber'
  | 'vatReliefClaimedAt';

export type SalesInvoiceUpsertFields = {
  address?: AddressUpsertFields | null | undefined;
  /** Makes this a credit note for one of your finalised invoices; it copies that invoice's lines reversed, so give no lines. */
  creditOf?: ObjectRef | null | undefined;
  currency: Currency;
  /** ISO date, 2026-10-17. */
  date: string;
  /** ISO date. */
  due?: string | null | undefined;
  email?: string | null | undefined;
  /** Gross total you expect (minor units). The call fails with TOTAL_MISMATCH when the lines add up differently. */
  expectedTotalMinor?: number | null | undefined;
  /** Number, date and book the invoice now. Without it the invoice stays a draft. */
  finalise?: boolean | null | undefined;
  firstName?: string | null | undefined;
  footer?: string | null | undefined;
  lastName?: string | null | undefined;
  legalName?: string | null | undefined;
  /** Give lines, or creditOf for a credit note. */
  lines?: Array<SalesInvoiceLineUpsertFields> | null | undefined;
  memo?: string | null | undefined;
  reference?: string | null | undefined;
  relation?: ObjectRef | null | undefined;
  vatNumber?: string | null | undefined;
};

export type SandboxResetMode =
  | 'nightly'
  | 'none';

export type SeedTestCompanyInput = {
  /** Your id for the company. Default: a stable id per template, so seeding again returns the same company. */
  externalId?: string | null | undefined;
  platformId?: string | number | null | undefined;
  /** Keep the company when the sandbox is reset. */
  preserve?: boolean | null | undefined;
  template: TestCompanyTemplate;
  /** Put the company on this test clock. */
  testClockId?: string | number | null | undefined;
  /** Platform users who get admin access to the company. */
  users?: Array<string | number> | null | undefined;
};

export type SetFieldControlInput = {
  companyId?: string | number | null | undefined;
  field: string;
  mode: string;
  presetValue?: Record<string, unknown> | null | undefined;
  view: string;
};

export type SetMessageRoutingInput = {
  category?: string | null | undefined;
  channels?: Array<string> | null | undefined;
  digestWindow?: string | null | undefined;
  /** Omit for the platform default. */
  profileId?: string | number | null | undefined;
  routing: string;
  scope: string;
  type?: string | null | undefined;
};

export type SetNotificationPreferenceInput = {
  category: string;
  channel: string;
  companyId?: string | number | null | undefined;
  digest?: string | null | undefined;
  enabled: boolean;
};

export type SetPlatformFeatureLimitInput = {
  /** Default: true. false is only valid with profileId (show a key the platform default hides). */
  hidden?: boolean | null | undefined;
  key: string;
  platformId?: string | number | null | undefined;
  /** Omit for the platform default. */
  profileId?: string | number | null | undefined;
};

export type SetPlatformMessageCopyInput = {
  locale: string;
  template: string;
  type: string;
  variant: string;
};

export type SetPlatformUserAccessInput = {
  externalUserId?: string | null | undefined;
  /** A role from the platform’s roles_mapping policy. */
  partnerRole?: string | null | undefined;
  platformId?: string | number | null | undefined;
  profileId: string | number;
  /** The role. Omit when partnerRole is given. */
  role?: PermissionSet | null | undefined;
  userId?: string | number | null | undefined;
};

/** Sort Directions */
export type SortDirection =
  | 'ASC'
  | 'DESC';

/** Sort Nulls Options */
export type SortNulls =
  | 'NULLS_FIRST'
  | 'NULLS_LAST';

export type StringFieldComparison = {
  eq?: string | null | undefined;
  gt?: string | null | undefined;
  gte?: string | null | undefined;
  iLike?: string | null | undefined;
  in?: Array<string> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: string | null | undefined;
  lt?: string | null | undefined;
  lte?: string | null | undefined;
  neq?: string | null | undefined;
  notILike?: string | null | undefined;
  notIn?: Array<string> | null | undefined;
  notLike?: string | null | undefined;
};

export type SubscriptionPaymentMethodType =
  | 'card'
  | 'ideal'
  | 'sepa_debit';

export type SubscriptionPaymentMethodTypeFilterComparison = {
  eq?: Array<SubscriptionPaymentMethodType> | null | undefined;
  gt?: Array<SubscriptionPaymentMethodType> | null | undefined;
  gte?: Array<SubscriptionPaymentMethodType> | null | undefined;
  iLike?: Array<SubscriptionPaymentMethodType> | null | undefined;
  in?: Array<Array<SubscriptionPaymentMethodType>> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: Array<SubscriptionPaymentMethodType> | null | undefined;
  lt?: Array<SubscriptionPaymentMethodType> | null | undefined;
  lte?: Array<SubscriptionPaymentMethodType> | null | undefined;
  neq?: Array<SubscriptionPaymentMethodType> | null | undefined;
  notILike?: Array<SubscriptionPaymentMethodType> | null | undefined;
  notIn?: Array<Array<SubscriptionPaymentMethodType>> | null | undefined;
  notLike?: Array<SubscriptionPaymentMethodType> | null | undefined;
};

export type SupportAccessScope =
  | 'read'
  | 'read_write';

export type SupportAccessStatus =
  | 'active'
  | 'denied'
  | 'expired'
  | 'requested'
  | 'revoked';

export type SupportEscalationStatus =
  | 'closed'
  | 'in_progress'
  | 'open'
  | 'resolved'
  | 'waiting_on_platform';

export type SupportMode =
  | 'finbaze_direct'
  | 'partner_first';

export type SupportSeverity =
  | 'high'
  | 'low'
  | 'normal'
  | 'urgent';

export type TaxFilingKind =
  | 'regular'
  | 'suppletie';

export type TaxFilingKindFilterComparison = {
  eq?: TaxFilingKind | null | undefined;
  gt?: TaxFilingKind | null | undefined;
  gte?: TaxFilingKind | null | undefined;
  iLike?: TaxFilingKind | null | undefined;
  in?: Array<TaxFilingKind> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: TaxFilingKind | null | undefined;
  lt?: TaxFilingKind | null | undefined;
  lte?: TaxFilingKind | null | undefined;
  neq?: TaxFilingKind | null | undefined;
  notILike?: TaxFilingKind | null | undefined;
  notIn?: Array<TaxFilingKind> | null | undefined;
  notLike?: TaxFilingKind | null | undefined;
};

export type TaxFilingStatus =
  | 'accepted'
  | 'draft'
  | 'paid'
  | 'ready'
  | 'rejected'
  | 'submitted';

export type TaxFilingStatusFilterComparison = {
  eq?: TaxFilingStatus | null | undefined;
  gt?: TaxFilingStatus | null | undefined;
  gte?: TaxFilingStatus | null | undefined;
  iLike?: TaxFilingStatus | null | undefined;
  in?: Array<TaxFilingStatus> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: TaxFilingStatus | null | undefined;
  lt?: TaxFilingStatus | null | undefined;
  lte?: TaxFilingStatus | null | undefined;
  neq?: TaxFilingStatus | null | undefined;
  notILike?: TaxFilingStatus | null | undefined;
  notIn?: Array<TaxFilingStatus> | null | undefined;
  notLike?: TaxFilingStatus | null | undefined;
};

export type TaxFilingType =
  | 'nl_annual_accounts'
  | 'nl_cit'
  | 'nl_cit_bezwaar'
  | 'nl_cit_uitstel'
  | 'nl_cit_voorlopige_aanslag'
  | 'nl_icp'
  | 'nl_oss'
  | 'nl_pension'
  | 'nl_vat'
  | 'nl_vat_bezwaar'
  | 'nl_vat_eu_refund'
  | 'nl_wage_tax'
  | 'uk_income_tax'
  | 'uk_income_tax_return'
  | 'uk_vat'
  | 'us_cit';

export type TaxFilingTypeFilterComparison = {
  eq?: TaxFilingType | null | undefined;
  gt?: TaxFilingType | null | undefined;
  gte?: TaxFilingType | null | undefined;
  iLike?: TaxFilingType | null | undefined;
  in?: Array<TaxFilingType> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: TaxFilingType | null | undefined;
  lt?: TaxFilingType | null | undefined;
  lte?: TaxFilingType | null | undefined;
  neq?: TaxFilingType | null | undefined;
  notILike?: TaxFilingType | null | undefined;
  notIn?: Array<TaxFilingType> | null | undefined;
  notLike?: TaxFilingType | null | undefined;
};

export type TaxAuthorisationChannel =
  | 'admin'
  | 'embed'
  | 'headless';

export type TaxAuthorisationState =
  | 'active'
  | 'delegated_to_firm'
  | 'missing'
  | 'reconfirmation_due';

export type TaxFilingCellStatus =
  | 'accepted'
  | 'draft'
  | 'due'
  | 'not_due'
  | 'outside_after_end'
  | 'outside_before_start'
  | 'overdue'
  | 'paid'
  | 'ready'
  | 'rejected'
  | 'submitted'
  | 'unsupported';

export type TaxLegalForm =
  | 'gb_llp'
  | 'gb_ltd'
  | 'gb_partnership'
  | 'gb_plc'
  | 'gb_sole_trader'
  | 'nl_bv'
  | 'nl_cooperatie'
  | 'nl_cv'
  | 'nl_eenmanszaak'
  | 'nl_maatschap'
  | 'nl_nv'
  | 'nl_stichting'
  | 'nl_vereniging'
  | 'nl_vof'
  | 'us_c_corp'
  | 'us_llc_disregarded'
  | 'us_llc_partnership'
  | 'us_partnership'
  | 'us_s_corp'
  | 'us_sole_proprietor';

export type TaxLegalFormFilterComparison = {
  eq?: TaxLegalForm | null | undefined;
  gt?: TaxLegalForm | null | undefined;
  gte?: TaxLegalForm | null | undefined;
  iLike?: TaxLegalForm | null | undefined;
  in?: Array<TaxLegalForm> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: TaxLegalForm | null | undefined;
  lt?: TaxLegalForm | null | undefined;
  lte?: TaxLegalForm | null | undefined;
  neq?: TaxLegalForm | null | undefined;
  notILike?: TaxLegalForm | null | undefined;
  notIn?: Array<TaxLegalForm> | null | undefined;
  notLike?: TaxLegalForm | null | undefined;
};

export type TaxObligationFrequency =
  | 'four_weeks'
  | 'month'
  | 'quarter'
  | 'year';

export type TaxObligationNumbersInput = {
  btwId?: string | null | undefined;
  btwNumber?: string | null | undefined;
  hmrcBusinessId?: string | null | undefined;
  iossNumber?: string | null | undefined;
  kvkBasisOfPreparation?: string | null | undefined;
  kvkConsolidated?: boolean | null | undefined;
  kvkPresentationFormat?: string | null | undefined;
  kvkSizeClass?: string | null | undefined;
  nino?: string | null | undefined;
  rsin?: string | null | undefined;
  upaEndpointUrl?: string | null | undefined;
  upaIdLcr?: string | null | undefined;
  upaNmLcr?: string | null | undefined;
  upaRegKnmrk?: string | null | undefined;
  upaRegVrnt?: string | null | undefined;
  upaRelNr?: string | null | undefined;
  upaRelNrAansl?: string | null | undefined;
  vatAnnualAccounting?: boolean | null | undefined;
  vatCashAccounting?: boolean | null | undefined;
  vatExemptionScheme?: boolean | null | undefined;
  vatFlatRate?: boolean | null | undefined;
  vatFlatRateCategory?: string | null | undefined;
  vatFlatRatePercentBps?: number | null | undefined;
  vatKor?: boolean | null | undefined;
  vatMarginScheme?: boolean | null | undefined;
  vatRetailScheme?: string | null | undefined;
  vrn?: string | null | undefined;
  wageTaxNumber?: string | null | undefined;
};

export type TaxObligationType =
  | 'nl_annual_accounts'
  | 'nl_cit'
  | 'nl_icp'
  | 'nl_oss'
  | 'nl_pension'
  | 'nl_vat'
  | 'nl_wage_tax'
  | 'uk_income_tax'
  | 'uk_vat'
  | 'us_cit';

export type TaxSettingsInput = {
  gbAssociatedCompanies?: number | null | undefined;
  gbClaimedRdBefore?: boolean | null | undefined;
  nlBuildingWozValueMinor?: number | null | undefined;
  nlDgaOnPayroll?: boolean | null | undefined;
  nlFiscalUnity?: boolean | null | undefined;
  nlHoursCriterionMet?: boolean | null | undefined;
  nlStarter?: boolean | null | undefined;
  usForeignOwned?: boolean | null | undefined;
  usNaicsCode?: string | null | undefined;
  usSCorpElectionDate?: string | null | undefined;
};

export type TestCompanyTemplate =
  | 'nl_bv_logistics_oss'
  | 'nl_bv_payroll'
  | 'nl_eenmanszaak_services'
  | 'nl_horeca_pos'
  | 'uk_ltd_vat';

export type TodoItemType =
  | 'document_request'
  | 'payment'
  | 'period'
  | 'process_document'
  | 'purchase_invoice'
  | 'reminder'
  | 'risk_case'
  | 'sales_invoice'
  | 'tax_filing'
  | 'tax_signal'
  | 'tax_threshold';

export type TodoUrgency =
  | 'blocked'
  | 'due'
  | 'normal'
  | 'overdue'
  | 'ready';

export type Units =
  | 'imperial'
  | 'metric';

export type UnitsFilterComparison = {
  eq?: Units | null | undefined;
  gt?: Units | null | undefined;
  gte?: Units | null | undefined;
  iLike?: Units | null | undefined;
  in?: Array<Units> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: Units | null | undefined;
  lt?: Units | null | undefined;
  lte?: Units | null | undefined;
  neq?: Units | null | undefined;
  notILike?: Units | null | undefined;
  notIn?: Array<Units> | null | undefined;
  notLike?: Units | null | undefined;
};

export type UpdateCostCenterDto = {
  active?: boolean | null | undefined;
  name?: string | null | undefined;
  number?: string | null | undefined;
  ownerAccountId?: string | null | undefined;
  profileId?: string | null | undefined;
};

export type UpdateDataSourceInput = {
  autoAttach?: boolean | null | undefined;
  balanceAssertions?: boolean | null | undefined;
  cadence?: DataSourceCadence | null | undefined;
  delivery?: Record<string, unknown> | null | undefined;
  expectedBy?: string | null | undefined;
  gapThresholdMinutes?: number | null | undefined;
  historyMonths?: number | null | undefined;
  name?: string | null | undefined;
  settings?: Record<string, unknown> | null | undefined;
  status?: string | null | undefined;
};

export type UpdateExportScheduleInput = {
  companyIds?: Array<string | number> | null | undefined;
  companyScope?: string | null | undefined;
  compression?: string | null | undefined;
  cron?: string | null | undefined;
  datasets?: Array<string> | null | undefined;
  destinationKey?: string | null | undefined;
  format?: string | null | undefined;
  pathTemplate?: string | null | undefined;
  /** active or paused. */
  status?: string | null | undefined;
  timezone?: string | null | undefined;
};

export type UpdateMonetaryAccountDto = {
  active?: boolean | null | undefined;
  bic?: string | null | undefined;
  currency?: Currency | null | undefined;
  end?: string | null | undefined;
  externalId?: string | null | undefined;
  externalInstitution?: string | null | undefined;
  externalProvider?: MonetaryAccountProvider | null | undefined;
  externalStatus?: string | null | undefined;
  iban?: string | null | undefined;
  initialBalance?: number | null | undefined;
  ledger?: string | null | undefined;
  name?: string | null | undefined;
  parentMonetaryAccountId?: string | number | null | undefined;
  profileId?: string | null | undefined;
  start?: string | null | undefined;
  type?: MonetaryAccountType | null | undefined;
};

export type UpdateOneCostCenterInput = {
  /** The id of the record to update */
  id: string | number;
  /** The update to apply. */
  update: UpdateCostCenterDto;
};

export type UpdateOneMonetaryAccountInput = {
  /** The id of the record to update */
  id: string | number;
  /** The update to apply. */
  update: UpdateMonetaryAccountDto;
};

export type UpdateOneProfileInput = {
  /** The id of the record to update */
  id: string | number;
  /** The update to apply. */
  update: UpdateProfileDto;
};

export type UpdateOneProjectInput = {
  /** The id of the record to update */
  id: string | number;
  /** The update to apply. */
  update: UpdateProjectDto;
};

export type UpdateOnePurchaseInvoiceInput = {
  /** The id of the record to update */
  id: string | number;
  /** The update to apply. */
  update: UpdatePurchaseInvoiceDto;
};

export type UpdateOneRecurringInput = {
  /** The id of the record to update */
  id: string | number;
  /** The update to apply. */
  update: UpdateRecurringDto;
};

export type UpdateOneRelationInput = {
  /** The id of the record to update */
  id: string | number;
  /** The update to apply. */
  update: UpdateRelationDto;
};

export type UpdateOneSalesInvoiceInput = {
  /** The id of the record to update */
  id: string | number;
  /** The update to apply. */
  update: UpdateSalesInvoiceDto;
};

export type UpdatePlatformCompanyInput = {
  externalId?: string | null | undefined;
  name?: string | null | undefined;
  platformId?: string | number | null | undefined;
  profileId: string | number;
};

export type UpdatePlatformMessageSettingsInput = {
  ackTimeoutMinutes?: number | null | undefined;
  brandColor?: string | null | undefined;
  brandLogoUrl?: string | null | undefined;
  brandName?: string | null | undefined;
  /** True switches quiet hours off. */
  clearQuietHours?: boolean | null | undefined;
  criticalAckTimeoutMinutes?: number | null | undefined;
  criticalEmailFallback?: boolean | null | undefined;
  digestHourLocal?: number | null | undefined;
  fallbackAfterMinutes?: number | null | undefined;
  includeEmailHtml?: boolean | null | undefined;
  quietHoursEnd?: string | null | undefined;
  quietHoursStart?: string | null | undefined;
  quietHoursTimezone?: string | null | undefined;
  supportEmail?: string | null | undefined;
};

export type UpdatePlatformSandboxSettingsInput = {
  platformId?: string | number | null | undefined;
  /** none (default) or nightly: reset the sandbox companies every night. */
  sandboxReset?: SandboxResetMode | null | undefined;
  /** Templates the reset seeds again, with stable externalIds. */
  sandboxSeedTemplates?: Array<TestCompanyTemplate> | null | undefined;
};

export type UpdatePlatformWebhookEndpointInput = {
  description?: string | null | undefined;
  /** Enabling resets the failure count. */
  enabled?: boolean | null | undefined;
  eventTypes?: Array<string> | null | undefined;
  failoverUrl?: string | null | undefined;
  url?: string | null | undefined;
};

export type UpdateProfileDto = {
  address?: Address | null | undefined;
  billingManagedBy?: BillingManagedBy | null | undefined;
  bookkeeperDeactivatedAt?: string | null | undefined;
  bookkeeperId?: string | null | undefined;
  budgetRunRateEmailEnabled?: boolean | null | undefined;
  createdById?: string | null | undefined;
  currencies?: Array<Currency> | null | undefined;
  currency?: Currency | null | undefined;
  currentPlanId?: string | null | undefined;
  defaultDueDays?: number | null | undefined;
  defaultMonetaryAccountId?: string | null | undefined;
  emailBcc?: Array<string> | null | undefined;
  emailCc?: Array<string> | null | undefined;
  invoiceNumberFormat?: string | null | undefined;
  language?: string | null | undefined;
  languages?: Array<string> | null | undefined;
  ledgerChart?: string | null | undefined;
  legalForm?: TaxLegalForm | null | undefined;
  legalName?: string | null | undefined;
  logo?: string | null | undefined;
  name?: string | null | undefined;
  primaryColor?: string | null | undefined;
  purchaseInvoiceAutoWriteOffEnabled?: boolean | null | undefined;
  purchaseInvoiceAutoWriteOffMaxAmount?: number | null | undefined;
  purchaseInvoiceAutoWriteOffMaxPercent?: number | null | undefined;
  purchaseInvoicePaymentBatchIntervalUnit?: PurchaseInvoicePaymentBatchIntervalUnit | null | undefined;
  purchaseInvoicePaymentBatchIntervalValue?: number | null | undefined;
  purchaseInvoicePaymentBatchMode?: PurchaseInvoicePaymentBatchMode | null | undefined;
  purchaseInvoicePaymentBatchNameTemplate?: string | null | undefined;
  purchaseInvoicePaymentBatchNextRunAt?: string | null | undefined;
  purchaseInvoicePaymentBatchRunHour?: number | null | undefined;
  quoteLayout?: Record<string, unknown> | null | undefined;
  quoteNumberFormat?: string | null | undefined;
  registrationCountry?: Country | null | undefined;
  registrationNumber?: string | null | undefined;
  reminderContent?: Record<string, unknown> | null | undefined;
  reminderEmailEnabled?: boolean | null | undefined;
  reminderFeeRules?: Record<string, unknown> | null | undefined;
  reminderLayout?: Record<string, unknown> | null | undefined;
  reminderNumberFormat?: string | null | undefined;
  reminderStages?: Record<string, unknown> | null | undefined;
  remindersAutomaticEnabled?: boolean | null | undefined;
  salesInvoiceAutoSendOnClose?: boolean | null | undefined;
  salesInvoiceFooter?: string | null | undefined;
  salesInvoiceIncludeUbl?: boolean | null | undefined;
  salesInvoiceLayout?: Record<string, unknown> | null | undefined;
  salesInvoicePaymentFailedEmailEnabled?: boolean | null | undefined;
  salesInvoicePaymentSucceededEmailEnabled?: boolean | null | undefined;
  sellToCountries?: Array<Country> | null | undefined;
  senderEmail?: string | null | undefined;
  smtpEnabled?: boolean | null | undefined;
  smtpHost?: string | null | undefined;
  smtpPassword?: string | null | undefined;
  smtpPasswordConfigured?: boolean | null | undefined;
  smtpPort?: number | null | undefined;
  smtpSecure?: boolean | null | undefined;
  smtpUser?: string | null | undefined;
  stripeAccountId?: string | null | undefined;
  stripeChargesEnabled?: boolean | null | undefined;
  stripeDetailsSubmitted?: boolean | null | undefined;
  stripePayoutsEnabled?: boolean | null | undefined;
  subscriptionInvoiceGenerationEnabled?: boolean | null | undefined;
  taxSettings?: TaxSettingsInput | null | undefined;
  taxThresholdEmailEnabled?: boolean | null | undefined;
  timezone?: string | null | undefined;
  units?: Units | null | undefined;
  url?: string | null | undefined;
  vatFilingAcceptedEmailEnabled?: boolean | null | undefined;
  vatFilingRejectedEmailEnabled?: boolean | null | undefined;
};

export type UpdateProjectDto = {
  createdById?: string | null | undefined;
  end?: string | null | undefined;
  name?: string | null | undefined;
  profileId?: string | null | undefined;
  relationId?: string | null | undefined;
  start?: string | null | undefined;
};

export type UpdatePurchaseInvoiceDto = {
  acceptedAt?: string | null | undefined;
  amount?: number | null | undefined;
  closed?: string | null | undefined;
  createdById?: string | null | undefined;
  currency?: Currency | null | undefined;
  date?: string | null | undefined;
  disputed?: string | null | undefined;
  due?: string | null | undefined;
  number?: string | null | undefined;
  paid?: string | null | undefined;
  period?: PurchaseInvoicePeriodInput | null | undefined;
  profileId?: string | null | undefined;
  reference?: string | null | undefined;
  relationId?: string | null | undefined;
  scheduled?: string | null | undefined;
  uuid?: string | null | undefined;
};

export type UpdateRecurringDto = {
  allowedPaymentMethods?: Array<SubscriptionPaymentMethodType> | null | undefined;
  canceled?: string | null | undefined;
  chargeRetryIntervalDays?: number | null | undefined;
  chargeRetryLimit?: number | null | undefined;
  collection?: RecurringCollection | null | undefined;
  createdById?: string | null | undefined;
  currency?: Currency | null | undefined;
  customerCancellation?: RecurringCustomerCancellation | null | undefined;
  endDate?: string | null | undefined;
  frequency?: Frequency | null | undefined;
  invoiceTiming?: RecurringInvoiceTiming | null | undefined;
  minimumTermMonths?: number | null | undefined;
  name?: string | null | undefined;
  noticePeriodDays?: number | null | undefined;
  offset?: number | null | undefined;
  paymentTermDays?: number | null | undefined;
  profileId?: string | null | undefined;
  recurringTemplateId?: string | null | undefined;
  relationId?: string | null | undefined;
  renewal?: RecurringRenewal | null | undefined;
  renewalTermMonths?: number | null | undefined;
  startDate?: string | null | undefined;
  uuid?: string | null | undefined;
};

export type UpdateRelationDto = {
  address?: Address | null | undefined;
  createdById?: string | null | undefined;
  defaultCostCenterId?: string | null | undefined;
  email?: string | null | undefined;
  firstName?: string | null | undefined;
  language?: string | null | undefined;
  lastName?: string | null | undefined;
  legalName?: string | null | undefined;
  profileId?: string | null | undefined;
  registrationCountry?: string | null | undefined;
  registrationNumber?: string | null | undefined;
  remindersAutomaticDisabled?: boolean | null | undefined;
  standardDueDays?: number | null | undefined;
  tags?: Array<string> | null | undefined;
  usTaxClassification?: UsTaxClassification | null | undefined;
  uuid?: string | null | undefined;
  vatNumber?: string | null | undefined;
  w9ReceivedAt?: string | null | undefined;
};

export type UpdateSalesInvoiceDto = {
  address?: Address | null | undefined;
  bookingDate?: string | null | undefined;
  createdById?: string | null | undefined;
  currency?: Currency | null | undefined;
  date?: string | null | undefined;
  due?: string | null | undefined;
  email?: string | null | undefined;
  entryId?: string | null | undefined;
  firstName?: string | null | undefined;
  footer?: string | null | undefined;
  initialInvoiceId?: string | null | undefined;
  lastName?: string | null | undefined;
  legalName?: string | null | undefined;
  memo?: string | null | undefined;
  paid?: string | null | undefined;
  period?: SalesInvoicePeriodInput | null | undefined;
  profileId?: string | null | undefined;
  recurringId?: string | null | undefined;
  reference?: string | null | undefined;
  relationId?: string | null | undefined;
  uuid?: string | null | undefined;
  vatNumber?: string | null | undefined;
};

export type UpsertCostCenterInput = {
  company: CompanyRef;
  costCenter: CostCenterUpsertFields;
  /** Your id for this object. Unique per company and object type; the match key of the upsert. */
  externalId: string;
  /** String key/values to attach (max 50 keys, 500 characters each). Merge patch: `null` removes a key, `{}` clears all. */
  metadata?: Record<string, unknown> | null | undefined;
  /** Bring an object back that was deleted earlier. Audited. */
  restore?: boolean | null | undefined;
};

export type UpsertCustomActionInput = {
  contextType: string;
  delivery?: string;
  enabled?: boolean;
  icon?: string | null | undefined;
  key: string;
  label: Record<string, unknown>;
  placements: Array<string>;
  visibleWhen?: Record<string, unknown> | null | undefined;
};

export type UpsertCustomFieldDefinitionInput = {
  editableBy?: string;
  entityType: string;
  includeInEvents?: boolean;
  includeOnDocuments?: boolean;
  key: string;
  label: Record<string, unknown>;
  options?: Record<string, unknown> | null | undefined;
  position?: number | null | undefined;
  required?: boolean;
  showIn?: Array<string> | null | undefined;
  type: string;
};

export type UpsertCustomRecordInput = {
  /** CompanyRef: { id } or { externalId }. */
  company: Record<string, unknown>;
  data: Record<string, unknown>;
  externalId: string;
  metadata?: Record<string, unknown> | null | undefined;
  occurredAt?: string | null | undefined;
  /** Left out: the type's initial state for a new record, unchanged for an existing one. */
  status?: string | null | undefined;
  type: string;
};

export type UpsertDocumentTemplateInput = {
  /** Existing asset keys to keep; omit to keep all. */
  assetKeys?: Array<string> | null | undefined;
  assets?: Array<DocumentTemplateAssetInput> | null | undefined;
  css?: string | null | undefined;
  documentType: DocumentType;
  id?: string | number | null | undefined;
  locale?: string | null | undefined;
  name: string;
  source: string;
};

export type UpsertEmployeeInput = {
  company: CompanyRef;
  employee: EmployeeUpsertFields;
  /** Your id for this object. Unique per company and object type; the match key of the upsert. */
  externalId: string;
  /** String key/values to attach (max 50 keys, 500 characters each). Merge patch: `null` removes a key, `{}` clears all. */
  metadata?: Record<string, unknown> | null | undefined;
  /** Bring an object back that was deleted earlier. Audited. */
  restore?: boolean | null | undefined;
};

export type UpsertEmploymentInput = {
  company: CompanyRef;
  employment: EmploymentUpsertFields;
  /** Your id for this object. Unique per company and object type; the match key of the upsert. */
  externalId: string;
  /** String key/values to attach (max 50 keys, 500 characters each). Merge patch: `null` removes a key, `{}` clears all. */
  metadata?: Record<string, unknown> | null | undefined;
  /** Bring an object back that was deleted earlier. Audited. */
  restore?: boolean | null | undefined;
};

export type UpsertJournalEntryInput = {
  company: CompanyRef;
  /** Your id for this object. Unique per company and object type; the match key of the upsert. */
  externalId: string;
  journalEntry: JournalEntryUpsertFields;
  /** String key/values to attach (max 50 keys, 500 characters each). Merge patch: `null` removes a key, `{}` clears all. */
  metadata?: Record<string, unknown> | null | undefined;
  /** Bring an object back that was deleted earlier. Audited. */
  restore?: boolean | null | undefined;
};

export type UpsertLinkTemplateInput = {
  label: Record<string, unknown>;
  resourceType: string;
  urlTemplate: string;
};

export type UpsertPlatformDocumentLayoutInput = {
  companyEditable?: CompanyLayoutEditability;
  documentType: DocumentType;
  id?: string | number | null | undefined;
  layout: Record<string, unknown>;
  locale?: string | null | undefined;
  name: string;
  unlockedBlockIds?: Array<string> | null | undefined;
};

export type UpsertPlatformProviderInput = {
  action: ProviderAction;
  config: Record<string, unknown>;
  enabled?: boolean;
  mode: ProviderMode;
};

export type UpsertPlatformUserInput = {
  /** true disables the user (their tokens stop working); false re-enables. */
  disabled?: boolean | null | undefined;
  externalUserId: string;
  firstName?: string | null | undefined;
  language?: string | null | undefined;
  lastName?: string | null | undefined;
  platformId?: string | number | null | undefined;
};

export type UpsertProductInput = {
  company: CompanyRef;
  /** Your id for this object. Unique per company and object type; the match key of the upsert. */
  externalId: string;
  /** String key/values to attach (max 50 keys, 500 characters each). Merge patch: `null` removes a key, `{}` clears all. */
  metadata?: Record<string, unknown> | null | undefined;
  product: ProductUpsertFields;
  /** Bring an object back that was deleted earlier. Audited. */
  restore?: boolean | null | undefined;
};

export type UpsertProjectInput = {
  company: CompanyRef;
  /** Your id for this object. Unique per company and object type; the match key of the upsert. */
  externalId: string;
  /** String key/values to attach (max 50 keys, 500 characters each). Merge patch: `null` removes a key, `{}` clears all. */
  metadata?: Record<string, unknown> | null | undefined;
  project: ProjectUpsertFields;
  /** Bring an object back that was deleted earlier. Audited. */
  restore?: boolean | null | undefined;
};

export type UpsertPurchaseInvoiceInput = {
  company: CompanyRef;
  /** Your id for this object. Unique per company and object type; the match key of the upsert. */
  externalId: string;
  /** String key/values to attach (max 50 keys, 500 characters each). Merge patch: `null` removes a key, `{}` clears all. */
  metadata?: Record<string, unknown> | null | undefined;
  purchaseInvoice: PurchaseInvoiceUpsertFields;
  /** Bring an object back that was deleted earlier. Audited. */
  restore?: boolean | null | undefined;
};

export type UpsertRelationInput = {
  company: CompanyRef;
  /** Your id for this object. Unique per company and object type; the match key of the upsert. */
  externalId: string;
  /** String key/values to attach (max 50 keys, 500 characters each). Merge patch: `null` removes a key, `{}` clears all. */
  metadata?: Record<string, unknown> | null | undefined;
  relation: RelationUpsertFields;
  /** Bring an object back that was deleted earlier. Audited. */
  restore?: boolean | null | undefined;
};

export type UpsertSalesInvoiceInput = {
  company: CompanyRef;
  /** Your id for this object. Unique per company and object type; the match key of the upsert. */
  externalId: string;
  /** String key/values to attach (max 50 keys, 500 characters each). Merge patch: `null` removes a key, `{}` clears all. */
  metadata?: Record<string, unknown> | null | undefined;
  /** Bring an object back that was deleted earlier. Audited. */
  restore?: boolean | null | undefined;
  salesInvoice: SalesInvoiceUpsertFields;
};

/** `unchanged`: the same data was already stored, nothing was written. `deleted`: the object was deleted earlier and stays deleted unless the call has `restore: true`. */
export type UpsertStatus =
  | 'created'
  | 'deleted'
  | 'unchanged'
  | 'updated';

export type UsTaxClassification =
  | 'c_corporation'
  | 'individual'
  | 'llc_c'
  | 'llc_p'
  | 'llc_s'
  | 'other'
  | 'partnership'
  | 's_corporation'
  | 'single_member_llc'
  | 'sole_proprietor'
  | 'trust_estate';

export type WorkedHoursFeedInput = {
  breakMinutes?: number | null | undefined;
  /** ObjectRef of the employment: { id } or { externalId }. */
  employment: Record<string, unknown>;
  endAt: string;
  externalId: string;
  hourType?: string | null | undefined;
  metadata?: Record<string, unknown> | null | undefined;
  note?: string | null | undefined;
  startAt: string;
  status?: string | null | undefined;
  workDate: string;
};

export type SdkProfileApiCredentialsQueryVariables = Exact<{
  profileId: string | number;
}>;


export type SdkProfileApiCredentialsQuery = { profileApiCredentials: Array<{ id: string, clientId: string, name: string, created: string, updated: string }> };

export type SdkCreateProfileApiCredentialMutationVariables = Exact<{
  profileId: string | number;
  input?: CreateApiCredentialInput | null | undefined;
}>;


export type SdkCreateProfileApiCredentialMutation = { createProfileApiCredential: { id: string, clientId: string, clientSecret: string, name: string, created: string, updated: string } };

export type SdkRotateProfileApiCredentialMutationVariables = Exact<{
  profileId: string | number;
  id: string | number;
}>;


export type SdkRotateProfileApiCredentialMutation = { rotateProfileApiCredential: { id: string, clientId: string, clientSecret: string, name: string, created: string, updated: string } };

export type SdkRevokeProfileApiCredentialMutationVariables = Exact<{
  profileId: string | number;
  id: string | number;
}>;


export type SdkRevokeProfileApiCredentialMutation = { revokeProfileApiCredential: boolean };

export type SdkBookkeeperApiCredentialsQueryVariables = Exact<{
  bookkeeperId: string | number;
}>;


export type SdkBookkeeperApiCredentialsQuery = { bookkeeperApiCredentials: Array<{ id: string, clientId: string, name: string, created: string, updated: string }> };

export type SdkCreateBookkeeperApiCredentialMutationVariables = Exact<{
  bookkeeperId: string | number;
  input?: CreateApiCredentialInput | null | undefined;
}>;


export type SdkCreateBookkeeperApiCredentialMutation = { createBookkeeperApiCredential: { id: string, clientId: string, clientSecret: string, name: string, created: string, updated: string } };

export type SdkRotateBookkeeperApiCredentialMutationVariables = Exact<{
  bookkeeperId: string | number;
  id: string | number;
}>;


export type SdkRotateBookkeeperApiCredentialMutation = { rotateBookkeeperApiCredential: { id: string, clientId: string, clientSecret: string, name: string, created: string, updated: string } };

export type SdkRevokeBookkeeperApiCredentialMutationVariables = Exact<{
  bookkeeperId: string | number;
  id: string | number;
}>;


export type SdkRevokeBookkeeperApiCredentialMutation = { revokeBookkeeperApiCredential: boolean };

export type SdkBankAccountsQueryVariables = Exact<{
  first: number;
  after?: string | null | undefined;
  filter: MonetaryAccountFilter;
}>;


export type SdkBankAccountsQuery = { monetaryAccounts: { edges: Array<{ node: { id: string, name: string, iban: string | null, currency: Currency, type: MonetaryAccountType } }>, pageInfo: { hasNextPage: boolean | null, endCursor: string | null } } };

export type SdkBankAccountQueryVariables = Exact<{
  id: string | number;
}>;


export type SdkBankAccountQuery = { monetaryAccount: { id: string, name: string, iban: string | null, currency: Currency, type: MonetaryAccountType } };

export type SdkTransactionFieldsFragment = { id: string, monetaryAccountId: string | null, externalId: string | null, date: string, amount: number, name: string, description: string | null, iban: string | null, processed: boolean };

export type SdkTransactionsQueryVariables = Exact<{
  first: number;
  after?: string | null | undefined;
  filter: MonetaryAccountPaymentFilter;
  sorting?: Array<MonetaryAccountPaymentSort> | MonetaryAccountPaymentSort | null | undefined;
}>;


export type SdkTransactionsQuery = { monetaryAccountPayments: { edges: Array<{ node: { id: string, monetaryAccountId: string | null, externalId: string | null, date: string, amount: number, name: string, description: string | null, iban: string | null, processed: boolean } }>, pageInfo: { hasNextPage: boolean | null, endCursor: string | null } } };

export type SdkTransactionQueryVariables = Exact<{
  id: string | number;
}>;


export type SdkTransactionQuery = { monetaryAccountPayment: { id: string, monetaryAccountId: string | null, externalId: string | null, date: string, amount: number, name: string, description: string | null, iban: string | null, processed: boolean } };

export type SdkBookingSummariesQueryVariables = Exact<{
  profileId: string | number;
  lookups: Array<BookingLookupInput> | BookingLookupInput;
}>;


export type SdkBookingSummariesQuery = { bookingSummaries: Array<{ transactionId: string, bankAccountId: string, externalId: string | null, processed: boolean, bookingKind: string, categoryLabel: string | null, ledgerAccountCode: string | null, vatLabel: string | null, receiptStatus: string, suggestion: Record<string, unknown> | null } | null> };

export type SdkDocumentFieldsFragment = { id: string, senderName: string | null, summary: string | null, receivedDate: string | null, processed: boolean, rejected: boolean, rejectedReason: string | null, processing: boolean, purchaseInvoiceId: string | null, created: string };

export type SdkDocumentsQueryVariables = Exact<{
  first: number;
  after?: string | null | undefined;
  filter: ProcessDocumentFilter;
  sorting?: Array<ProcessDocumentSort> | ProcessDocumentSort | null | undefined;
}>;


export type SdkDocumentsQuery = { processDocuments: { edges: Array<{ node: { id: string, senderName: string | null, summary: string | null, receivedDate: string | null, processed: boolean, rejected: boolean, rejectedReason: string | null, processing: boolean, purchaseInvoiceId: string | null, created: string } }>, pageInfo: { hasNextPage: boolean | null, endCursor: string | null } } };

export type SdkDocumentQueryVariables = Exact<{
  id: string | number;
}>;


export type SdkDocumentQuery = { processDocument: { id: string, senderName: string | null, summary: string | null, receivedDate: string | null, processed: boolean, rejected: boolean, rejectedReason: string | null, processing: boolean, purchaseInvoiceId: string | null, created: string } };

export type SdkUploadDocumentsMutationVariables = Exact<{
  profileId: string | number;
  files: Array<ProcessDocumentUploadInput> | ProcessDocumentUploadInput;
}>;


export type SdkUploadDocumentsMutation = { uploadProcessDocuments: Array<{ id: string, senderName: string | null, summary: string | null, receivedDate: string | null, processed: boolean, rejected: boolean, rejectedReason: string | null, processing: boolean, purchaseInvoiceId: string | null, created: string }> };

export type SdkUploadReceiptForTransactionMutationVariables = Exact<{
  monetaryAccountPaymentId: string | number;
  file: ProcessDocumentUploadInput;
  contextText?: string | null | undefined;
}>;


export type SdkUploadReceiptForTransactionMutation = { uploadProcessDocumentForPayment: { purchaseInvoiceId: string | null, processDocument: { id: string, senderName: string | null, summary: string | null, receivedDate: string | null, processed: boolean, rejected: boolean, rejectedReason: string | null, processing: boolean, purchaseInvoiceId: string | null, created: string } } };

export type SdkTaxCalendarQueryVariables = Exact<{
  profileId: string | number;
  year: number;
}>;


export type SdkTaxCalendarQuery = { taxFilingOverview: { year: number, rows: Array<{ obligationId: string, obligationType: string, filingType: string, required: boolean, frequency: string, supported: boolean, cells: Array<{ startMonth: number, colSpan: number, from: string, to: string, label: string, status: TaxFilingCellStatus, filingId: string | null }> }>, otherFilings: Array<{ id: string, filingType: string, status: string, submittedAt: string | null, createdAt: string, amountDue: number | null }> } };

export type SdkTaxFilingPaymentSummaryQueryVariables = Exact<{
  filingId: string | number;
}>;


export type SdkTaxFilingPaymentSummaryQuery = { taxFilingPaymentSummary: { amountDue: number, amountPaid: number, amountOpen: number, isPaid: boolean } };

export type SdkActionItemsQueryVariables = Exact<{
  profileId: string | number;
}>;


export type SdkActionItemsQuery = { profileTodoSummary: { totalCount: number, urgentCount: number, readyCount: number, blockedCount: number, priorityQueue: { items: Array<{ id: string, type: TodoItemType, label: string, urgency: TodoUrgency, deadline: string | null, date: string | null, status: string | null }> } } };

export type SdkCostCentersQueryVariables = Exact<{
  first: number;
  after?: string | null | undefined;
  filter: CostCenterFilter;
  sorting?: Array<CostCenterSort> | CostCenterSort | null | undefined;
}>;


export type SdkCostCentersQuery = { costCenters: { edges: Array<{ node: { id: string, number: string, name: string, created: string, updated: string } }>, pageInfo: { hasNextPage: boolean | null, endCursor: string | null } } };

export type SdkCostCenterQueryVariables = Exact<{
  id: string | number;
}>;


export type SdkCostCenterQuery = { costCenter: { id: string, number: string, name: string, created: string, updated: string } };

export type SdkCreateCostCenterMutationVariables = Exact<{
  profileId: string | number;
  input: CreateCostCenterInput;
}>;


export type SdkCreateCostCenterMutation = { createOneCostCenter: { id: string, number: string, name: string } };

export type SdkUpdateCostCenterMutationVariables = Exact<{
  input: UpdateOneCostCenterInput;
}>;


export type SdkUpdateCostCenterMutation = { updateOneCostCenter: { id: string, number: string, name: string, updated: string } };

export type SdkDeleteCostCenterMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkDeleteCostCenterMutation = { deleteOneCostCenter: { id: string | null } };

export type SdkUpsertFieldsFragment = { status: UpsertStatus, id: string, externalId: string };

export type SdkUpsertRelationMutationVariables = Exact<{
  input: UpsertRelationInput;
}>;


export type SdkUpsertRelationMutation = { upsertRelation: { status: UpsertStatus, id: string, externalId: string } };

export type SdkUpsertProductMutationVariables = Exact<{
  input: UpsertProductInput;
}>;


export type SdkUpsertProductMutation = { upsertProduct: { status: UpsertStatus, id: string, externalId: string } };

export type SdkUpsertProjectMutationVariables = Exact<{
  input: UpsertProjectInput;
}>;


export type SdkUpsertProjectMutation = { upsertProject: { status: UpsertStatus, id: string, externalId: string } };

export type SdkUpsertCostCenterMutationVariables = Exact<{
  input: UpsertCostCenterInput;
}>;


export type SdkUpsertCostCenterMutation = { upsertCostCenter: { status: UpsertStatus, id: string, externalId: string } };

export type SdkUpsertSalesInvoiceMutationVariables = Exact<{
  input: UpsertSalesInvoiceInput;
}>;


export type SdkUpsertSalesInvoiceMutation = { upsertSalesInvoice: { status: UpsertStatus, id: string, externalId: string } };

export type SdkUpsertPurchaseInvoiceMutationVariables = Exact<{
  input: UpsertPurchaseInvoiceInput;
}>;


export type SdkUpsertPurchaseInvoiceMutation = { upsertPurchaseInvoice: { status: UpsertStatus, id: string, externalId: string } };

export type SdkUpsertJournalEntryMutationVariables = Exact<{
  input: UpsertJournalEntryInput;
}>;


export type SdkUpsertJournalEntryMutation = { upsertJournalEntry: { status: UpsertStatus, id: string, externalId: string } };

export type SdkUpsertEmployeeMutationVariables = Exact<{
  input: UpsertEmployeeInput;
}>;


export type SdkUpsertEmployeeMutation = { upsertEmployee: { status: UpsertStatus, id: string, externalId: string } };

export type SdkUpsertEmploymentMutationVariables = Exact<{
  input: UpsertEmploymentInput;
}>;


export type SdkUpsertEmploymentMutation = { upsertEmployment: { status: UpsertStatus, id: string, externalId: string } };

export type SdkSetObjectMetadataMutationVariables = Exact<{
  type: PlatformObjectType;
  id: string | number;
  metadata: Record<string, unknown>;
}>;


export type SdkSetObjectMetadataMutation = { setObjectMetadata: boolean };

export type SdkPlatformObjectByExternalIdQueryVariables = Exact<{
  company: CompanyRef;
  type: PlatformObjectType;
  externalId: string;
}>;


export type SdkPlatformObjectByExternalIdQuery = { platformObjectByExternalId: { type: PlatformObjectType, id: string, externalId: string, deleted: boolean } | null };

export type SdkBulkJobFieldsFragment = { id: string, objectType: string, mode: string, status: PlatformBulkJobStatus, lineCount: number, processedCount: number, createdCount: number, updatedCount: number, unchangedCount: number, skippedCount: number, failedCount: number, dryRun: boolean, emitEvents: boolean, created: string, startedAt: string | null, finishedAt: string | null, error: string | null };

export type SdkPlatformBulkJobQueryVariables = Exact<{
  id: string | number;
  first?: number;
  after?: string | null | undefined;
  status?: Array<string> | string | null | undefined;
}>;


export type SdkPlatformBulkJobQuery = { platformBulkJob: { id: string, objectType: string, mode: string, status: PlatformBulkJobStatus, lineCount: number, processedCount: number, createdCount: number, updatedCount: number, unchangedCount: number, skippedCount: number, failedCount: number, dryRun: boolean, emitEvents: boolean, created: string, startedAt: string | null, finishedAt: string | null, error: string | null, results: { endCursor: string | null, hasNextPage: boolean, nodes: Array<{ line: number, status: string, companyId: string | null, objectId: string | null, externalId: string | null, error: { code: string, message: string, path: string | null } | null }> } } | null };

export type SdkPlatformBulkJobsQueryVariables = Exact<{
  first?: number;
  after?: string | null | undefined;
  status?: Array<PlatformBulkJobStatus> | PlatformBulkJobStatus | null | undefined;
}>;


export type SdkPlatformBulkJobsQuery = { platformBulkJobs: { endCursor: string | null, hasNextPage: boolean, nodes: Array<{ id: string, objectType: string, mode: string, status: PlatformBulkJobStatus, lineCount: number, processedCount: number, createdCount: number, updatedCount: number, unchangedCount: number, skippedCount: number, failedCount: number, dryRun: boolean, emitEvents: boolean, created: string, startedAt: string | null, finishedAt: string | null, error: string | null }> } };

export type SdkCancelPlatformBulkJobMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkCancelPlatformBulkJobMutation = { cancelPlatformBulkJob: { id: string, objectType: string, mode: string, status: PlatformBulkJobStatus, lineCount: number, processedCount: number, createdCount: number, updatedCount: number, unchangedCount: number, skippedCount: number, failedCount: number, dryRun: boolean, emitEvents: boolean, created: string, startedAt: string | null, finishedAt: string | null, error: string | null } };

export type SdkWebhookEndpointFieldsFragment = { id: string, url: string, failoverUrl: string | null, description: string | null, eventTypes: Array<string>, enabled: boolean, disabledReason: string | null, apiVersion: string, consecutiveFailures: number, lastSuccessAt: string | null, lastFailureAt: string | null, rotationEndsAt: string | null, created: string };

export type SdkWebhookDeliveryFieldsFragment = { id: string, endpointId: string, eventType: string, eventId: string, companyId: string | null, status: string, attemptCount: number, replayCount: number, nextAttemptAt: string | null, lastAttemptAt: string | null, deliveredVia: string | null, responseStatus: number | null, durationMs: number | null, responseExcerpt: string | null, error: string | null, created: string };

export type SdkPlatformEventCatalogQueryVariables = Exact<{ [key: string]: never; }>;


export type SdkPlatformEventCatalogQuery = { platformEventCatalog: Array<{ type: string, objectType: string | null, module: string | null, description: string, status: PlatformEventTypeStatus, wave: string | null }> };

export type SdkPlatformEventsQueryVariables = Exact<{
  filter?: PlatformEventFilter | null | undefined;
  after?: string | null | undefined;
  first?: number;
}>;


export type SdkPlatformEventsQuery = { platformEvents: { endCursor: string | null, hasNextPage: boolean, nodes: Array<{ id: string, type: string, apiVersion: string, sequence: string, created: string, occurredAt: string, objectType: string | null, objectId: string | null, data: Record<string, unknown>, requestId: string | null, company: { id: string, externalId: string | null } | null }> } };

export type SdkPlatformEventQueryVariables = Exact<{
  id: string | number;
}>;


export type SdkPlatformEventQuery = { platformEvent: { id: string, type: string, apiVersion: string, sequence: string, created: string, occurredAt: string, objectType: string | null, objectId: string | null, data: Record<string, unknown>, requestId: string | null, company: { id: string, externalId: string | null } | null } | null };

export type SdkPlatformWebhookEndpointsQueryVariables = Exact<{ [key: string]: never; }>;


export type SdkPlatformWebhookEndpointsQuery = { platformWebhookEndpoints: Array<{ id: string, url: string, failoverUrl: string | null, description: string | null, eventTypes: Array<string>, enabled: boolean, disabledReason: string | null, apiVersion: string, consecutiveFailures: number, lastSuccessAt: string | null, lastFailureAt: string | null, rotationEndsAt: string | null, created: string }> };

export type SdkPlatformWebhookDeliveriesQueryVariables = Exact<{
  endpointId: string | number;
  filter?: PlatformDeliveryFilter | null | undefined;
  after?: string | null | undefined;
  first?: number;
}>;


export type SdkPlatformWebhookDeliveriesQuery = { platformWebhookDeliveries: { endCursor: string | null, hasNextPage: boolean, nodes: Array<{ id: string, endpointId: string, eventType: string, eventId: string, companyId: string | null, status: string, attemptCount: number, replayCount: number, nextAttemptAt: string | null, lastAttemptAt: string | null, deliveredVia: string | null, responseStatus: number | null, durationMs: number | null, responseExcerpt: string | null, error: string | null, created: string }> } };

export type SdkCreatePlatformWebhookEndpointMutationVariables = Exact<{
  input: CreatePlatformWebhookEndpointInput;
}>;


export type SdkCreatePlatformWebhookEndpointMutation = { createPlatformWebhookEndpoint: { signingSecret: string, endpoint: { id: string, url: string, failoverUrl: string | null, description: string | null, eventTypes: Array<string>, enabled: boolean, disabledReason: string | null, apiVersion: string, consecutiveFailures: number, lastSuccessAt: string | null, lastFailureAt: string | null, rotationEndsAt: string | null, created: string } } };

export type SdkUpdatePlatformWebhookEndpointMutationVariables = Exact<{
  id: string | number;
  input: UpdatePlatformWebhookEndpointInput;
}>;


export type SdkUpdatePlatformWebhookEndpointMutation = { updatePlatformWebhookEndpoint: { id: string, url: string, failoverUrl: string | null, description: string | null, eventTypes: Array<string>, enabled: boolean, disabledReason: string | null, apiVersion: string, consecutiveFailures: number, lastSuccessAt: string | null, lastFailureAt: string | null, rotationEndsAt: string | null, created: string } };

export type SdkRotatePlatformWebhookSecretMutationVariables = Exact<{
  id: string | number;
  keepPreviousHours?: number;
}>;


export type SdkRotatePlatformWebhookSecretMutation = { rotatePlatformWebhookSecret: { signingSecret: string, endpoint: { id: string, url: string, failoverUrl: string | null, description: string | null, eventTypes: Array<string>, enabled: boolean, disabledReason: string | null, apiVersion: string, consecutiveFailures: number, lastSuccessAt: string | null, lastFailureAt: string | null, rotationEndsAt: string | null, created: string } } };

export type SdkDeletePlatformWebhookEndpointMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkDeletePlatformWebhookEndpointMutation = { deletePlatformWebhookEndpoint: boolean };

export type SdkPingPlatformWebhookEndpointMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkPingPlatformWebhookEndpointMutation = { pingPlatformWebhookEndpoint: { id: string, endpointId: string, eventType: string, eventId: string, companyId: string | null, status: string, attemptCount: number, replayCount: number, nextAttemptAt: string | null, lastAttemptAt: string | null, deliveredVia: string | null, responseStatus: number | null, durationMs: number | null, responseExcerpt: string | null, error: string | null, created: string } };

export type SdkReplayPlatformWebhookDeliveryMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkReplayPlatformWebhookDeliveryMutation = { replayPlatformWebhookDelivery: { id: string, endpointId: string, eventType: string, eventId: string, companyId: string | null, status: string, attemptCount: number, replayCount: number, nextAttemptAt: string | null, lastAttemptAt: string | null, deliveredVia: string | null, responseStatus: number | null, durationMs: number | null, responseExcerpt: string | null, error: string | null, created: string } };

export type SdkReplayPlatformWebhookDeliveriesMutationVariables = Exact<{
  endpointId: string | number;
  filter: PlatformDeliveryFilter;
}>;


export type SdkReplayPlatformWebhookDeliveriesMutation = { replayPlatformWebhookDeliveries: { id: string, matched: number, enqueued: number, status: string } };

export type SdkResendPlatformEventMutationVariables = Exact<{
  eventId: string | number;
  endpointId: string | number;
}>;


export type SdkResendPlatformEventMutation = { resendPlatformEvent: { id: string, endpointId: string, eventType: string, eventId: string, companyId: string | null, status: string, attemptCount: number, replayCount: number, nextAttemptAt: string | null, lastAttemptAt: string | null, deliveredVia: string | null, responseStatus: number | null, durationMs: number | null, responseExcerpt: string | null, error: string | null, created: string } };

export type SdkDataSourceFieldsFragment = { id: string, key: string, type: DataSourceType, name: string, status: string, cadence: DataSourceCadence, expectedBy: string | null, gapThresholdMinutes: number, historyMonths: number, balanceAssertions: boolean, delivery: Record<string, unknown>, settings: Record<string, unknown>, autoAttach: boolean };

export type SdkFeedAccountFieldsFragment = { id: string, externalId: string, iban: string | null, name: string, health: FeedHealthStatus, statusSince: string, lastDeliveryAt: string | null, completeThrough: string | null, detail: Record<string, unknown> | null, lastBalance: { date: string, type: string, amountMinor: number, currency: Currency, computedMinor: number | null, differenceMinor: number | null, status: string } | null };

export type SdkDataSourcesQueryVariables = Exact<{ [key: string]: never; }>;


export type SdkDataSourcesQuery = { dataSources: Array<{ id: string, key: string, type: DataSourceType, name: string, status: string, cadence: DataSourceCadence, expectedBy: string | null, gapThresholdMinutes: number, historyMonths: number, balanceAssertions: boolean, delivery: Record<string, unknown>, settings: Record<string, unknown>, autoAttach: boolean }> };

export type SdkDataSourceQueryVariables = Exact<{
  key: string;
}>;


export type SdkDataSourceQuery = { dataSource: { id: string, key: string, type: DataSourceType, name: string, status: string, cadence: DataSourceCadence, expectedBy: string | null, gapThresholdMinutes: number, historyMonths: number, balanceAssertions: boolean, delivery: Record<string, unknown>, settings: Record<string, unknown>, autoAttach: boolean } | null };

export type SdkFeedHealthQueryVariables = Exact<{
  status?: Array<FeedHealthStatus> | FeedHealthStatus | null | undefined;
  first?: number;
  after?: string | null | undefined;
}>;


export type SdkFeedHealthQuery = { feedHealth: { nextCursor: string | null, nodes: Array<{ id: string, externalId: string, iban: string | null, name: string, health: FeedHealthStatus, statusSince: string, lastDeliveryAt: string | null, completeThrough: string | null, detail: Record<string, unknown> | null, lastBalance: { date: string, type: string, amountMinor: number, currency: Currency, computedMinor: number | null, differenceMinor: number | null, status: string } | null }> } };

export type SdkDataSourceFilesQueryVariables = Exact<{
  key: string;
  first?: number;
  after?: string | null | undefined;
}>;


export type SdkDataSourceFilesQuery = { dataSourceFiles: { nextCursor: string | null, nodes: Array<{ id: string, format: string, receivedVia: string, filename: string | null, sha256: string, size: number, status: string, statements: number | null, entries: number | null, imported: number | null, duplicates: number | null, unroutedAccounts: Array<string> | null, error: string | null, created: string }> } };

export type SdkRegisterDataSourceMutationVariables = Exact<{
  input: RegisterDataSourceInput;
}>;


export type SdkRegisterDataSourceMutation = { registerDataSource: { id: string, key: string, type: DataSourceType, name: string, status: string, cadence: DataSourceCadence, expectedBy: string | null, gapThresholdMinutes: number, historyMonths: number, balanceAssertions: boolean, delivery: Record<string, unknown>, settings: Record<string, unknown>, autoAttach: boolean } };

export type SdkUpdateDataSourceMutationVariables = Exact<{
  key: string;
  input: UpdateDataSourceInput;
}>;


export type SdkUpdateDataSourceMutation = { updateDataSource: { id: string, key: string, type: DataSourceType, name: string, status: string, cadence: DataSourceCadence, expectedBy: string | null, gapThresholdMinutes: number, historyMonths: number, balanceAssertions: boolean, delivery: Record<string, unknown>, settings: Record<string, unknown>, autoAttach: boolean } };

export type SdkRetireDataSourceMutationVariables = Exact<{
  key: string;
}>;


export type SdkRetireDataSourceMutation = { retireDataSource: { id: string, key: string, type: DataSourceType, name: string, status: string, cadence: DataSourceCadence, expectedBy: string | null, gapThresholdMinutes: number, historyMonths: number, balanceAssertions: boolean, delivery: Record<string, unknown>, settings: Record<string, unknown>, autoAttach: boolean } };

export type SdkAttachmentFieldsFragment = { id: string, sourceKey: string, companyId: string, companyExternalId: string | null, status: string, attachedAt: string, backfillFrom: string | null, backfillStatus: string, lastDeliveryAt: string | null };

export type SdkAttachDataSourceMutationVariables = Exact<{
  key: string;
  company: CompanyRef;
  backfillFrom?: string | null | undefined;
}>;


export type SdkAttachDataSourceMutation = { attachDataSource: { id: string, sourceKey: string, companyId: string, companyExternalId: string | null, status: string, attachedAt: string, backfillFrom: string | null, backfillStatus: string, lastDeliveryAt: string | null } };

export type SdkPauseDataSourceAttachmentMutationVariables = Exact<{
  key: string;
  company: CompanyRef;
}>;


export type SdkPauseDataSourceAttachmentMutation = { pauseDataSourceAttachment: { id: string, sourceKey: string, companyId: string, companyExternalId: string | null, status: string, attachedAt: string, backfillFrom: string | null, backfillStatus: string, lastDeliveryAt: string | null } };

export type SdkDetachDataSourceMutationVariables = Exact<{
  key: string;
  company: CompanyRef;
}>;


export type SdkDetachDataSourceMutation = { detachDataSource: { id: string, sourceKey: string, companyId: string, companyExternalId: string | null, status: string, attachedAt: string, backfillFrom: string | null, backfillStatus: string, lastDeliveryAt: string | null } };

export type SdkUpsertFeedBankAccountMutationVariables = Exact<{
  source: string;
  company: CompanyRef;
  account: BankAccountFeedInput;
}>;


export type SdkUpsertFeedBankAccountMutation = { upsertFeedBankAccount: { id: string, externalId: string, iban: string | null, name: string, health: FeedHealthStatus, statusSince: string, lastDeliveryAt: string | null, completeThrough: string | null, detail: Record<string, unknown> | null, lastBalance: { date: string, type: string, amountMinor: number, currency: Currency, computedMinor: number | null, differenceMinor: number | null, status: string } | null } };

export type SdkIngestBankTransactionsMutationVariables = Exact<{
  source: string;
  company: CompanyRef;
  account: string;
  transactions: Array<BankTransactionFeedInput> | BankTransactionFeedInput;
}>;


export type SdkIngestBankTransactionsMutation = { ingestBankTransactions: Array<{ line: number, status: string, id: string | null, externalId: string | null, error: { code: string, message: string, path: string | null } | null }> };

export type SdkReportBankBalancesMutationVariables = Exact<{
  source: string;
  company: CompanyRef;
  account: string;
  balances: Array<BankBalanceInput> | BankBalanceInput;
}>;


export type SdkReportBankBalancesMutation = { reportBankBalances: Array<{ date: string, type: string, amountMinor: number, currency: Currency, computedMinor: number | null, differenceMinor: number | null, status: string }> };

export type SdkReportFeedWatermarkMutationVariables = Exact<{
  source: string;
  company: CompanyRef;
  account?: string | null | undefined;
  completeThrough: string;
}>;


export type SdkReportFeedWatermarkMutation = { reportFeedWatermark: boolean };

export type SdkIngestWorkedHoursMutationVariables = Exact<{
  source: string;
  company: CompanyRef;
  entries: Array<WorkedHoursFeedInput> | WorkedHoursFeedInput;
}>;


export type SdkIngestWorkedHoursMutation = { ingestWorkedHours: Array<{ line: number, status: string, id: string | null, externalId: string | null, error: { code: string, message: string, path: string | null } | null }> };

export type SdkBankTransactionBookingsQueryVariables = Exact<{
  company: CompanyRef;
  externalIds: Array<string> | string;
}>;


export type SdkBankTransactionBookingsQuery = { bankTransactionBookings: Array<{ externalId: string, transactionId: string | null, booking: { status: PaymentBookingStatus, taxCode: string | null, vatAmountMinor: number | null, bookedAt: string | null, bookedBy: BookingActorKind | null, reviewReason: string | null, counterpart: { type: string, id: string | null, externalId: string | null, label: string } | null, ledger: { code: string, name: string } | null, legs: Array<{ ledgerCode: string, ledgerName: string, debitMinor: number, creditMinor: number }>, category: { key: string, label: string } | null, receipt: { status: ReceiptStatus, documentIds: Array<string>, requestedAt: string | null } } | null }> };

export type SdkRecordTypeFieldsFragment = { id: string, key: string, version: number, name: string, schema: Record<string, unknown>, states: Array<string>, initialState: string, transitions: Record<string, unknown> | null, displayTemplate: string, deepLinkTemplate: string | null, status: string };

export type SdkCustomRecordFieldsFragment = { id: string, type: string, externalId: string, status: string, data: Record<string, unknown>, metadata: Record<string, unknown> | null, revision: number, occurredAt: string | null, displayName: string, created: string, updated: string, effects: Array<{ stepId: string, objectType: PlatformObjectType, objectId: string, reversed: boolean, flowRunId: string }>, runs: Array<{ id: string, templateKey: string, trigger: string, status: string, error: Record<string, unknown> | null }> };

export type SdkFlowTemplateFieldsFragment = { id: string, key: string, version: number, recordType: string, status: string, sourceFormat: string, source: string, checksum: string, activatedAt: string | null };

export type SdkFlowRunFieldsFragment = { id: string, templateKey: string, templateVersion: number, recordId: string, trigger: string, recordRevision: number, status: string, attempts: number, error: Record<string, unknown> | null, outputs: Record<string, unknown> | null, startedAt: string | null, finishedAt: string | null };

export type SdkPlatformRecordTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type SdkPlatformRecordTypesQuery = { platformRecordTypes: Array<{ id: string, key: string, version: number, name: string, schema: Record<string, unknown>, states: Array<string>, initialState: string, transitions: Record<string, unknown> | null, displayTemplate: string, deepLinkTemplate: string | null, status: string }> };

export type SdkDefinePlatformRecordTypeMutationVariables = Exact<{
  input: DefineRecordTypeInput;
}>;


export type SdkDefinePlatformRecordTypeMutation = { definePlatformRecordType: { id: string, key: string, version: number, name: string, schema: Record<string, unknown>, states: Array<string>, initialState: string, transitions: Record<string, unknown> | null, displayTemplate: string, deepLinkTemplate: string | null, status: string } };

export type SdkUpsertCustomRecordMutationVariables = Exact<{
  input: UpsertCustomRecordInput;
}>;


export type SdkUpsertCustomRecordMutation = { upsertCustomRecord: { status: UpsertStatus, record: { id: string, type: string, externalId: string, status: string, data: Record<string, unknown>, metadata: Record<string, unknown> | null, revision: number, occurredAt: string | null, displayName: string, created: string, updated: string, effects: Array<{ stepId: string, objectType: PlatformObjectType, objectId: string, reversed: boolean, flowRunId: string }>, runs: Array<{ id: string, templateKey: string, trigger: string, status: string, error: Record<string, unknown> | null }> } } };

export type SdkDeleteCustomRecordMutationVariables = Exact<{
  company: CompanyRef;
  type: string;
  externalId: string;
}>;


export type SdkDeleteCustomRecordMutation = { deleteCustomRecord: boolean };

export type SdkCustomRecordQueryVariables = Exact<{
  company: CompanyRef;
  type: string;
  externalId: string;
}>;


export type SdkCustomRecordQuery = { customRecord: { id: string, type: string, externalId: string, status: string, data: Record<string, unknown>, metadata: Record<string, unknown> | null, revision: number, occurredAt: string | null, displayName: string, created: string, updated: string, effects: Array<{ stepId: string, objectType: PlatformObjectType, objectId: string, reversed: boolean, flowRunId: string }>, runs: Array<{ id: string, templateKey: string, trigger: string, status: string, error: Record<string, unknown> | null }> } | null };

export type SdkCustomRecordsQueryVariables = Exact<{
  company: CompanyRef;
  type: string;
  status?: Array<string> | string | null | undefined;
  first?: number;
  after?: string | null | undefined;
}>;


export type SdkCustomRecordsQuery = { customRecords: { nextCursor: string | null, nodes: Array<{ id: string, type: string, externalId: string, status: string, data: Record<string, unknown>, metadata: Record<string, unknown> | null, revision: number, occurredAt: string | null, displayName: string, created: string, updated: string, effects: Array<{ stepId: string, objectType: PlatformObjectType, objectId: string, reversed: boolean, flowRunId: string }>, runs: Array<{ id: string, templateKey: string, trigger: string, status: string, error: Record<string, unknown> | null }> }> } };

export type SdkFlowTemplatesQueryVariables = Exact<{
  key?: string | null | undefined;
}>;


export type SdkFlowTemplatesQuery = { flowTemplates: Array<{ id: string, key: string, version: number, recordType: string, status: string, sourceFormat: string, source: string, checksum: string, activatedAt: string | null }> };

export type SdkSaveFlowTemplateMutationVariables = Exact<{
  source: string;
  format: FlowTemplateFormat;
}>;


export type SdkSaveFlowTemplateMutation = { saveFlowTemplate: { id: string, key: string, version: number, recordType: string, status: string, sourceFormat: string, source: string, checksum: string, activatedAt: string | null } };

export type SdkActivateFlowTemplateMutationVariables = Exact<{
  key: string;
  version: number;
}>;


export type SdkActivateFlowTemplateMutation = { activateFlowTemplate: { id: string, key: string, version: number, recordType: string, status: string, sourceFormat: string, source: string, checksum: string, activatedAt: string | null } };

export type SdkRetireFlowTemplateMutationVariables = Exact<{
  key: string;
}>;


export type SdkRetireFlowTemplateMutation = { retireFlowTemplate: { id: string, key: string, version: number, recordType: string, status: string, sourceFormat: string, source: string, checksum: string, activatedAt: string | null } };

export type SdkTestFlowTemplateMutationVariables = Exact<{
  source: string;
  format: FlowTemplateFormat;
  records: Array<Record<string, unknown>> | Record<string, unknown>;
  company?: CompanyRef | null | undefined;
}>;


export type SdkTestFlowTemplateMutation = { testFlowTemplate: { valid: boolean, errors: Array<{ code: string, message: string, path: string | null }>, runs: Array<{ recordExternalId: string, trigger: string | null, error: { code: string, message: string, path: string | null } | null, plannedObjects: Array<{ stepId: string, objectType: string, action: string, externalId: string, summary: Record<string, unknown> }> }> } };

export type SdkFlowRunsQueryVariables = Exact<{
  status?: Array<string> | string | null | undefined;
  first?: number;
  after?: string | null | undefined;
}>;


export type SdkFlowRunsQuery = { flowRuns: { nextCursor: string | null, nodes: Array<{ id: string, templateKey: string, templateVersion: number, recordId: string, trigger: string, recordRevision: number, status: string, attempts: number, error: Record<string, unknown> | null, outputs: Record<string, unknown> | null, startedAt: string | null, finishedAt: string | null }> } };

export type SdkRetryFlowRunMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkRetryFlowRunMutation = { retryFlowRun: { id: string, templateKey: string, templateVersion: number, recordId: string, trigger: string, recordRevision: number, status: string, attempts: number, error: Record<string, unknown> | null, outputs: Record<string, unknown> | null, startedAt: string | null, finishedAt: string | null } };

export type SdkCompanyDocumentFieldsFragment = { id: string, kind: CompanyDocumentKind, filename: string, contentType: string, size: number, sha256: string, created: string, downloadUrl: string, downloadExpiresAt: string };

export type SdkExportRunFieldsFragment = { id: string, kind: string, runDate: string, status: string, files: Record<string, unknown>, rowCounts: Record<string, unknown> | null, error: string | null, startedAt: string | null, finishedAt: string | null, document: { id: string, kind: CompanyDocumentKind, filename: string, contentType: string, size: number, sha256: string, created: string, downloadUrl: string, downloadExpiresAt: string } | null };

export type SdkExportDestinationFieldsFragment = { id: string, key: string, type: string, bucket: string | null, prefix: string, region: string | null, endpoint: string | null, verifiedAt: string | null, credentialsExpireAt: string | null, lastError: string | null };

export type SdkExportScheduleFieldsFragment = { id: string, key: string, datasets: Array<string>, format: string, cron: string, timezone: string, companyScope: string, pathTemplate: string, compression: string, status: string, lastRunAt: string | null, nextRunAt: string | null, destination: { id: string, key: string, type: string, bucket: string | null, prefix: string, region: string | null, endpoint: string | null, verifiedAt: string | null, credentialsExpireAt: string | null, lastError: string | null } };

export type SdkPlatformReportQueryVariables = Exact<{
  company: CompanyRef;
  input: PlatformReportInput;
}>;


export type SdkPlatformReportQuery = { platformReport: { type: PlatformReportType, currency: Currency, from: string | null, to: string | null, asOf: string | null, generatedAt: string, data: Record<string, unknown> } };

export type SdkPlatformReportDocumentQueryVariables = Exact<{
  company: CompanyRef;
  input: PlatformReportInput;
  format: ReportFormat;
}>;


export type SdkPlatformReportDocumentQuery = { platformReportDocument: { id: string, kind: CompanyDocumentKind, filename: string, contentType: string, size: number, sha256: string, created: string, downloadUrl: string, downloadExpiresAt: string } };

export type SdkCompanyDocumentQueryVariables = Exact<{
  company: CompanyRef;
  kind: CompanyDocumentKind;
  object?: ObjectRef | null | undefined;
  params?: Record<string, unknown> | null | undefined;
}>;


export type SdkCompanyDocumentQuery = { companyDocument: { id: string, kind: CompanyDocumentKind, filename: string, contentType: string, size: number, sha256: string, created: string, downloadUrl: string, downloadExpiresAt: string } };

export type SdkRequestXafExportMutationVariables = Exact<{
  company: CompanyRef;
  financialYear?: number | null | undefined;
  from?: string | null | undefined;
  to?: string | null | undefined;
}>;


export type SdkRequestXafExportMutation = { requestXafExport: { id: string, kind: string, runDate: string, status: string, files: Record<string, unknown>, rowCounts: Record<string, unknown> | null, error: string | null, startedAt: string | null, finishedAt: string | null, document: { id: string, kind: CompanyDocumentKind, filename: string, contentType: string, size: number, sha256: string, created: string, downloadUrl: string, downloadExpiresAt: string } | null } };

export type SdkPlatformExportDestinationsQueryVariables = Exact<{ [key: string]: never; }>;


export type SdkPlatformExportDestinationsQuery = { platformExportDestinations: Array<{ id: string, key: string, type: string, bucket: string | null, prefix: string, region: string | null, endpoint: string | null, verifiedAt: string | null, credentialsExpireAt: string | null, lastError: string | null }> };

export type SdkPlatformExportSchedulesQueryVariables = Exact<{ [key: string]: never; }>;


export type SdkPlatformExportSchedulesQuery = { platformExportSchedules: Array<{ id: string, key: string, datasets: Array<string>, format: string, cron: string, timezone: string, companyScope: string, pathTemplate: string, compression: string, status: string, lastRunAt: string | null, nextRunAt: string | null, destination: { id: string, key: string, type: string, bucket: string | null, prefix: string, region: string | null, endpoint: string | null, verifiedAt: string | null, credentialsExpireAt: string | null, lastError: string | null } }> };

export type SdkPlatformExportRunQueryVariables = Exact<{
  id: string | number;
}>;


export type SdkPlatformExportRunQuery = { platformExportRun: { id: string, kind: string, runDate: string, status: string, files: Record<string, unknown>, rowCounts: Record<string, unknown> | null, error: string | null, startedAt: string | null, finishedAt: string | null, document: { id: string, kind: CompanyDocumentKind, filename: string, contentType: string, size: number, sha256: string, created: string, downloadUrl: string, downloadExpiresAt: string } | null } | null };

export type SdkCreatePlatformExportDestinationMutationVariables = Exact<{
  input: CreateExportDestinationInput;
}>;


export type SdkCreatePlatformExportDestinationMutation = { createPlatformExportDestination: { id: string, key: string, type: string, bucket: string | null, prefix: string, region: string | null, endpoint: string | null, verifiedAt: string | null, credentialsExpireAt: string | null, lastError: string | null } };

export type SdkUpdatePlatformExportDestinationCredentialsMutationVariables = Exact<{
  key: string;
  credentials: Record<string, unknown>;
  credentialsExpireAt?: string | null | undefined;
}>;


export type SdkUpdatePlatformExportDestinationCredentialsMutation = { updatePlatformExportDestinationCredentials: { id: string, key: string, type: string, bucket: string | null, prefix: string, region: string | null, endpoint: string | null, verifiedAt: string | null, credentialsExpireAt: string | null, lastError: string | null } };

export type SdkDeletePlatformExportDestinationMutationVariables = Exact<{
  key: string;
}>;


export type SdkDeletePlatformExportDestinationMutation = { deletePlatformExportDestination: boolean };

export type SdkCreatePlatformExportScheduleMutationVariables = Exact<{
  input: CreateExportScheduleInput;
}>;


export type SdkCreatePlatformExportScheduleMutation = { createPlatformExportSchedule: { id: string, key: string, datasets: Array<string>, format: string, cron: string, timezone: string, companyScope: string, pathTemplate: string, compression: string, status: string, lastRunAt: string | null, nextRunAt: string | null, destination: { id: string, key: string, type: string, bucket: string | null, prefix: string, region: string | null, endpoint: string | null, verifiedAt: string | null, credentialsExpireAt: string | null, lastError: string | null } } };

export type SdkUpdatePlatformExportScheduleMutationVariables = Exact<{
  key: string;
  input: UpdateExportScheduleInput;
}>;


export type SdkUpdatePlatformExportScheduleMutation = { updatePlatformExportSchedule: { id: string, key: string, datasets: Array<string>, format: string, cron: string, timezone: string, companyScope: string, pathTemplate: string, compression: string, status: string, lastRunAt: string | null, nextRunAt: string | null, destination: { id: string, key: string, type: string, bucket: string | null, prefix: string, region: string | null, endpoint: string | null, verifiedAt: string | null, credentialsExpireAt: string | null, lastError: string | null } } };

export type SdkRunPlatformExportNowMutationVariables = Exact<{
  key: string;
}>;


export type SdkRunPlatformExportNowMutation = { runPlatformExportNow: { id: string, kind: string, runDate: string, status: string, files: Record<string, unknown>, rowCounts: Record<string, unknown> | null, error: string | null, startedAt: string | null, finishedAt: string | null, document: { id: string, kind: CompanyDocumentKind, filename: string, contentType: string, size: number, sha256: string, created: string, downloadUrl: string, downloadExpiresAt: string } | null } };

export type SdkDocumentLayoutFieldsFragment = { id: string, documentType: DocumentType, locale: string | null, name: string, layout: Record<string, unknown>, isDefault: boolean, companyEditable: CompanyLayoutEditability, unlockedBlockIds: Array<string>, status: DocumentLayoutStatus, version: number, updated: string, warnings: Array<{ ruleId: string, field: string, message: string, severity: string, legalRef: string, verifyWithAdviser: boolean }> };

export type SdkDocumentTemplateFieldsFragment = { id: string, documentType: DocumentType, locale: string | null, name: string, status: DocumentTemplateStatus, version: number, isDefault: boolean, validationReport: Record<string, unknown> | null, updated: string };

export type SdkDocumentRenderJobFieldsFragment = { id: string, documentType: DocumentType, entityId: string, status: RenderJobStatus, deadline: string, artifactId: string | null, violations: Array<{ ruleId: string, field: string, message: string, severity: string, legalRef: string, verifyWithAdviser: boolean }> };

export type SdkPlatformDocumentLayoutsQueryVariables = Exact<{
  documentType?: DocumentType | null | undefined;
}>;


export type SdkPlatformDocumentLayoutsQuery = { platformDocumentLayouts: Array<{ id: string, documentType: DocumentType, locale: string | null, name: string, layout: Record<string, unknown>, isDefault: boolean, companyEditable: CompanyLayoutEditability, unlockedBlockIds: Array<string>, status: DocumentLayoutStatus, version: number, updated: string, warnings: Array<{ ruleId: string, field: string, message: string, severity: string, legalRef: string, verifyWithAdviser: boolean }> }> };

export type SdkPlatformDocumentLayoutPreviewQueryVariables = Exact<{
  id: string | number;
  format?: string | null | undefined;
}>;


export type SdkPlatformDocumentLayoutPreviewQuery = { platformDocumentLayoutPreview: string };

export type SdkValidateDocumentLayoutQueryVariables = Exact<{
  documentType: DocumentType;
  layout: Record<string, unknown>;
}>;


export type SdkValidateDocumentLayoutQuery = { validateDocumentLayout: Array<{ ruleId: string, field: string, message: string, severity: string, legalRef: string, verifyWithAdviser: boolean }> };

export type SdkUpsertPlatformDocumentLayoutMutationVariables = Exact<{
  input: UpsertPlatformDocumentLayoutInput;
}>;


export type SdkUpsertPlatformDocumentLayoutMutation = { upsertPlatformDocumentLayout: { id: string, documentType: DocumentType, locale: string | null, name: string, layout: Record<string, unknown>, isDefault: boolean, companyEditable: CompanyLayoutEditability, unlockedBlockIds: Array<string>, status: DocumentLayoutStatus, version: number, updated: string, warnings: Array<{ ruleId: string, field: string, message: string, severity: string, legalRef: string, verifyWithAdviser: boolean }> } };

export type SdkActivatePlatformDocumentLayoutMutationVariables = Exact<{
  id: string | number;
  makeDefault: boolean;
}>;


export type SdkActivatePlatformDocumentLayoutMutation = { activatePlatformDocumentLayout: { id: string, documentType: DocumentType, locale: string | null, name: string, layout: Record<string, unknown>, isDefault: boolean, companyEditable: CompanyLayoutEditability, unlockedBlockIds: Array<string>, status: DocumentLayoutStatus, version: number, updated: string, warnings: Array<{ ruleId: string, field: string, message: string, severity: string, legalRef: string, verifyWithAdviser: boolean }> } };

export type SdkArchivePlatformDocumentLayoutMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkArchivePlatformDocumentLayoutMutation = { archivePlatformDocumentLayout: { id: string, documentType: DocumentType, locale: string | null, name: string, layout: Record<string, unknown>, isDefault: boolean, companyEditable: CompanyLayoutEditability, unlockedBlockIds: Array<string>, status: DocumentLayoutStatus, version: number, updated: string, warnings: Array<{ ruleId: string, field: string, message: string, severity: string, legalRef: string, verifyWithAdviser: boolean }> } };

export type SdkChooseDocumentLayoutMutationVariables = Exact<{
  profileId: string | number;
  documentType: DocumentType;
  platformDocumentLayoutId: string | number;
}>;


export type SdkChooseDocumentLayoutMutation = { chooseDocumentLayout: boolean };

export type SdkDocumentTemplatesQueryVariables = Exact<{
  documentType?: DocumentType | null | undefined;
}>;


export type SdkDocumentTemplatesQuery = { documentTemplates: Array<{ id: string, documentType: DocumentType, locale: string | null, name: string, status: DocumentTemplateStatus, version: number, isDefault: boolean, validationReport: Record<string, unknown> | null, updated: string }> };

export type SdkDocumentTemplatePreviewQueryVariables = Exact<{
  id: string | number;
  fixture: string;
}>;


export type SdkDocumentTemplatePreviewQuery = { documentTemplatePreview: string };

export type SdkUpsertDocumentTemplateMutationVariables = Exact<{
  input: UpsertDocumentTemplateInput;
}>;


export type SdkUpsertDocumentTemplateMutation = { upsertDocumentTemplate: { id: string, documentType: DocumentType, locale: string | null, name: string, status: DocumentTemplateStatus, version: number, isDefault: boolean, validationReport: Record<string, unknown> | null, updated: string } };

export type SdkValidateDocumentTemplateMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkValidateDocumentTemplateMutation = { validateDocumentTemplate: { id: string, documentType: DocumentType, locale: string | null, name: string, status: DocumentTemplateStatus, version: number, isDefault: boolean, validationReport: Record<string, unknown> | null, updated: string } };

export type SdkActivateDocumentTemplateMutationVariables = Exact<{
  id: string | number;
  makeDefault: boolean;
}>;


export type SdkActivateDocumentTemplateMutation = { activateDocumentTemplate: { id: string, documentType: DocumentType, locale: string | null, name: string, status: DocumentTemplateStatus, version: number, isDefault: boolean, validationReport: Record<string, unknown> | null, updated: string } };

export type SdkArchiveDocumentTemplateMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkArchiveDocumentTemplateMutation = { archiveDocumentTemplate: { id: string, documentType: DocumentType, locale: string | null, name: string, status: DocumentTemplateStatus, version: number, isDefault: boolean, validationReport: Record<string, unknown> | null, updated: string } };

export type SdkPlatformDocumentRenderSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type SdkPlatformDocumentRenderSettingsQuery = { platformDocumentRenderSettings: Array<{ documentType: DocumentType, mode: DocumentRenderMode, timeoutSeconds: number }> };

export type SdkSetPlatformDocumentRenderSettingMutationVariables = Exact<{
  documentType: DocumentType;
  mode: DocumentRenderMode;
  timeoutSeconds?: number | null | undefined;
}>;


export type SdkSetPlatformDocumentRenderSettingMutation = { setPlatformDocumentRenderSetting: { documentType: DocumentType, mode: DocumentRenderMode, timeoutSeconds: number } };

export type SdkDocumentRenderJobQueryVariables = Exact<{
  id: string | number;
}>;


export type SdkDocumentRenderJobQuery = { documentRenderJob: { id: string, documentType: DocumentType, entityId: string, status: RenderJobStatus, deadline: string, artifactId: string | null, violations: Array<{ ruleId: string, field: string, message: string, severity: string, legalRef: string, verifyWithAdviser: boolean }> } | null };

export type SdkAttachRenderedDocumentMutationVariables = Exact<{
  jobId: string | number;
  pdfBase64?: string | null | undefined;
  uploadId?: string | number | null | undefined;
}>;


export type SdkAttachRenderedDocumentMutation = { attachRenderedDocument: { id: string, documentType: DocumentType, entityId: string, status: RenderJobStatus, deadline: string, artifactId: string | null, violations: Array<{ ruleId: string, field: string, message: string, severity: string, legalRef: string, verifyWithAdviser: boolean }> } };

export type SdkBrandFontsQueryVariables = Exact<{
  ownerType: string;
  ownerId?: string | number | null | undefined;
}>;


export type SdkBrandFontsQuery = { brandFonts: Array<{ id: string, family: string, weight: number, style: string, sizeBytes: number, sha256: string }> };

export type SdkDeleteBrandFontMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkDeleteBrandFontMutation = { deleteBrandFont: boolean };

export type SdkPlatformCustomDomainsQueryVariables = Exact<{ [key: string]: never; }>;


export type SdkPlatformCustomDomainsQuery = { platformCustomDomains: Array<{ id: string, hostname: string, status: CustomDomainStatus, cnameTarget: string, txtName: string, txtValue: string, lastCheckedAt: string | null, error: string | null }> };

export type SdkAddPlatformCustomDomainMutationVariables = Exact<{
  hostname: string;
}>;


export type SdkAddPlatformCustomDomainMutation = { addPlatformCustomDomain: { id: string, hostname: string, status: CustomDomainStatus, cnameTarget: string, txtName: string, txtValue: string, lastCheckedAt: string | null, error: string | null } };

export type SdkCheckPlatformCustomDomainMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkCheckPlatformCustomDomainMutation = { checkPlatformCustomDomain: { id: string, hostname: string, status: CustomDomainStatus, cnameTarget: string, txtName: string, txtValue: string, lastCheckedAt: string | null, error: string | null } };

export type SdkRemovePlatformCustomDomainMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkRemovePlatformCustomDomainMutation = { removePlatformCustomDomain: boolean };

export type SdkCustomActionFieldsFragment = { id: string, key: string, label: Record<string, unknown>, icon: string | null, placements: Array<string>, contextType: string, visibleWhen: Record<string, unknown> | null, delivery: string, enabled: boolean };

export type SdkCustomFieldDefinitionFieldsFragment = { id: string, entityType: string, key: string, label: Record<string, unknown>, type: string, options: Record<string, unknown> | null, required: boolean, editableBy: string, showIn: Array<string>, includeInEvents: boolean, includeOnDocuments: boolean, position: number, archived: boolean };

export type SdkPlatformCustomActionsQueryVariables = Exact<{ [key: string]: never; }>;


export type SdkPlatformCustomActionsQuery = { platformCustomActions: Array<{ id: string, key: string, label: Record<string, unknown>, icon: string | null, placements: Array<string>, contextType: string, visibleWhen: Record<string, unknown> | null, delivery: string, enabled: boolean }> };

export type SdkUpsertCustomActionMutationVariables = Exact<{
  input: UpsertCustomActionInput;
}>;


export type SdkUpsertCustomActionMutation = { upsertCustomAction: { id: string, key: string, label: Record<string, unknown>, icon: string | null, placements: Array<string>, contextType: string, visibleWhen: Record<string, unknown> | null, delivery: string, enabled: boolean } };

export type SdkDeleteCustomActionMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkDeleteCustomActionMutation = { deleteCustomAction: boolean };

export type SdkInvokeCustomActionMutationVariables = Exact<{
  key: string;
  contextType: string;
  contextId: string | number;
}>;


export type SdkInvokeCustomActionMutation = { invokeCustomAction: { key: string, contextType: string, contextId: string, externalId: string | null, links: Array<{ label: string, url: string, resourceType: string }> } };

export type SdkInvokeSlotItemMutationVariables = Exact<{
  slot: string;
  key: string;
  contextType: string;
  contextId: string | number;
}>;


export type SdkInvokeSlotItemMutation = { invokeSlotItem: { key: string, contextType: string, contextId: string, externalId: string | null, links: Array<{ label: string, url: string, resourceType: string }> } };

export type SdkPlatformLinkTemplatesQueryVariables = Exact<{ [key: string]: never; }>;


export type SdkPlatformLinkTemplatesQuery = { platformLinkTemplates: Array<{ id: string, resourceType: string, urlTemplate: string, label: Record<string, unknown> }> };

export type SdkUpsertLinkTemplateMutationVariables = Exact<{
  input: UpsertLinkTemplateInput;
}>;


export type SdkUpsertLinkTemplateMutation = { upsertLinkTemplate: { id: string, resourceType: string, urlTemplate: string, label: Record<string, unknown> } };

export type SdkDeleteLinkTemplateMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkDeleteLinkTemplateMutation = { deleteLinkTemplate: boolean };

export type SdkPartnerLinksQueryVariables = Exact<{
  objectType: string;
  objectId: string | number;
  locale?: string | null | undefined;
}>;


export type SdkPartnerLinksQuery = { partnerLinks: Array<{ label: string, url: string, resourceType: string }> };

export type SdkCustomFieldDefinitionsQueryVariables = Exact<{
  entityType: string;
}>;


export type SdkCustomFieldDefinitionsQuery = { customFieldDefinitions: Array<{ id: string, entityType: string, key: string, label: Record<string, unknown>, type: string, options: Record<string, unknown> | null, required: boolean, editableBy: string, showIn: Array<string>, includeInEvents: boolean, includeOnDocuments: boolean, position: number, archived: boolean }> };

export type SdkUpsertCustomFieldDefinitionMutationVariables = Exact<{
  input: UpsertCustomFieldDefinitionInput;
}>;


export type SdkUpsertCustomFieldDefinitionMutation = { upsertCustomFieldDefinition: { id: string, entityType: string, key: string, label: Record<string, unknown>, type: string, options: Record<string, unknown> | null, required: boolean, editableBy: string, showIn: Array<string>, includeInEvents: boolean, includeOnDocuments: boolean, position: number, archived: boolean } };

export type SdkArchiveCustomFieldDefinitionMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkArchiveCustomFieldDefinitionMutation = { archiveCustomFieldDefinition: { id: string, entityType: string, key: string, label: Record<string, unknown>, type: string, options: Record<string, unknown> | null, required: boolean, editableBy: string, showIn: Array<string>, includeInEvents: boolean, includeOnDocuments: boolean, position: number, archived: boolean } };

export type SdkCustomFieldValuesQueryVariables = Exact<{
  entityType: string;
  entityId: string | number;
}>;


export type SdkCustomFieldValuesQuery = { customFieldValues: Record<string, unknown> };

export type SdkSetCustomFieldValuesMutationVariables = Exact<{
  entityType: string;
  entityId: string | number;
  values: Record<string, unknown>;
}>;


export type SdkSetCustomFieldValuesMutation = { setCustomFieldValues: Record<string, unknown> };

export type SdkFieldControlsQueryVariables = Exact<{
  view: string;
  companyId?: string | number | null | undefined;
}>;


export type SdkFieldControlsQuery = { fieldControls: Array<{ view: string, field: string, mode: string, presetValue: Record<string, unknown> | null, companyId: string | null }> };

export type SdkSetFieldControlMutationVariables = Exact<{
  input: SetFieldControlInput;
}>;


export type SdkSetFieldControlMutation = { setFieldControl: { view: string, field: string, mode: string, presetValue: Record<string, unknown> | null, companyId: string | null } };

export type SdkClearFieldControlMutationVariables = Exact<{
  view: string;
  field: string;
  companyId?: string | number | null | undefined;
}>;


export type SdkClearFieldControlMutation = { clearFieldControl: boolean };

export type SdkCompanyLifecycleFieldsFragment = { state: ProfileLifecycleState, changedAt: string | null, suspendedBy: EngagementSide | null, displayMessage: string | null, closeEffectiveDate: string | null, archivedAt: string | null, retentionUntil: string | null };

export type SdkLifecycleCompanyFieldsFragment = { id: string, platformId: string, externalId: string, legalName: string, lifecycle: { state: ProfileLifecycleState, changedAt: string | null, suspendedBy: EngagementSide | null, displayMessage: string | null, closeEffectiveDate: string | null, archivedAt: string | null, retentionUntil: string | null } };

export type SdkCompanyTransferFieldsFragment = { id: string, companyId: string, target: CompanyTransferTarget, status: CompanyTransferStatus, expiresAt: string, completedAt: string | null };

export type SdkSuspendPlatformCompanyMutationVariables = Exact<{
  companyId: string | number;
  reason?: string | null | undefined;
  displayMessage?: string | null | undefined;
}>;


export type SdkSuspendPlatformCompanyMutation = { suspendPlatformCompany: { id: string, platformId: string, externalId: string, legalName: string, lifecycle: { state: ProfileLifecycleState, changedAt: string | null, suspendedBy: EngagementSide | null, displayMessage: string | null, closeEffectiveDate: string | null, archivedAt: string | null, retentionUntil: string | null } } };

export type SdkReactivatePlatformCompanyMutationVariables = Exact<{
  companyId: string | number;
}>;


export type SdkReactivatePlatformCompanyMutation = { reactivatePlatformCompany: { id: string, platformId: string, externalId: string, legalName: string, lifecycle: { state: ProfileLifecycleState, changedAt: string | null, suspendedBy: EngagementSide | null, displayMessage: string | null, closeEffectiveDate: string | null, archivedAt: string | null, retentionUntil: string | null } } };

export type SdkClosePlatformCompanyMutationVariables = Exact<{
  companyId: string | number;
  effectiveDate: string;
  reason?: string | null | undefined;
}>;


export type SdkClosePlatformCompanyMutation = { closePlatformCompany: { id: string, platformId: string, externalId: string, legalName: string, lifecycle: { state: ProfileLifecycleState, changedAt: string | null, suspendedBy: EngagementSide | null, displayMessage: string | null, closeEffectiveDate: string | null, archivedAt: string | null, retentionUntil: string | null } } };

export type SdkReopenPlatformCompanyMutationVariables = Exact<{
  companyId: string | number;
}>;


export type SdkReopenPlatformCompanyMutation = { reopenPlatformCompany: { id: string, platformId: string, externalId: string, legalName: string, lifecycle: { state: ProfileLifecycleState, changedAt: string | null, suspendedBy: EngagementSide | null, displayMessage: string | null, closeEffectiveDate: string | null, archivedAt: string | null, retentionUntil: string | null } } };

export type SdkArchivePlatformCompanyMutationVariables = Exact<{
  companyId: string | number;
}>;


export type SdkArchivePlatformCompanyMutation = { archivePlatformCompany: { id: string, platformId: string, externalId: string, legalName: string, lifecycle: { state: ProfileLifecycleState, changedAt: string | null, suspendedBy: EngagementSide | null, displayMessage: string | null, closeEffectiveDate: string | null, archivedAt: string | null, retentionUntil: string | null } } };

export type SdkCompanyClosingChecklistQueryVariables = Exact<{
  companyId: string | number;
  effectiveDate?: string | null | undefined;
}>;


export type SdkCompanyClosingChecklistQuery = { companyClosingChecklist: Array<{ key: string, label: string, blocking: boolean, done: boolean, filingId: string | null }> };

export type SdkCompanyTransferStatementQueryVariables = Exact<{
  companyId: string | number;
  target: CompanyTransferTarget;
  locale?: string | null | undefined;
}>;


export type SdkCompanyTransferStatementQuery = { companyTransferStatement: { version: string, locale: string, target: CompanyTransferTarget, title: string, paragraphs: Array<string>, hash: string } };

export type SdkCompanyTransfersQueryVariables = Exact<{
  companyId: string | number;
}>;


export type SdkCompanyTransfersQuery = { companyTransfers: Array<{ id: string, companyId: string, target: CompanyTransferTarget, status: CompanyTransferStatus, expiresAt: string, completedAt: string | null }> };

export type SdkCancelCompanyTransferMutationVariables = Exact<{
  transferId: string | number;
}>;


export type SdkCancelCompanyTransferMutation = { cancelCompanyTransfer: { id: string, companyId: string, target: CompanyTransferTarget, status: CompanyTransferStatus, expiresAt: string, completedAt: string | null } };

export type SdkAcceptCompanyTransferMutationVariables = Exact<{
  code: string;
  externalId?: string | null | undefined;
}>;


export type SdkAcceptCompanyTransferMutation = { acceptCompanyTransfer: { id: string, platformId: string, externalId: string, legalName: string, lifecycle: { state: ProfileLifecycleState, changedAt: string | null, suspendedBy: EngagementSide | null, displayMessage: string | null, closeEffectiveDate: string | null, archivedAt: string | null, retentionUntil: string | null } } };

export type SdkDeprovisionPlatformUserMutationVariables = Exact<{
  userId: string | number;
  anonymise?: boolean | null | undefined;
}>;


export type SdkDeprovisionPlatformUserMutation = { deprovisionPlatformUser: boolean };

export type SdkPlatformAuditLogsQueryVariables = Exact<{
  filter?: PlatformAuditLogFilter | null | undefined;
  first?: number | null | undefined;
  after?: string | null | undefined;
}>;


export type SdkPlatformAuditLogsQuery = { platformAuditLogs: { nextCursor: string | null, edges: Array<{ id: string, at: string, companyId: string | null, action: string, actorKind: AuditActorKind, platformUserId: string | null, platformUserExternalId: string | null, actorLabel: string | null, tokenType: string | null, ip: string | null, userAgent: string | null, stepUpAssertionId: string | null, supportGrantId: string | null, requestId: string | null, targetType: string | null, targetId: string | null, metadata: Record<string, unknown> | null }> } };

export type SdkRequestAuditLogExportMutationVariables = Exact<{
  filter?: PlatformAuditLogFilter | null | undefined;
}>;


export type SdkRequestAuditLogExportMutation = { requestAuditLogExport: { id: string, kind: string, status: string, runDate: string } };

export type SdkMessageFieldsFragment = { id: string, type: string, category: string, priority: string, status: string, routing: string | null, routingReason: string | null, profileId: string | null, ackRequired: boolean, ackDeadline: string | null, acknowledgedAt: string | null, readAt: string | null, escalationStage: number, created: string };

export type SdkMessageRoutingRuleFieldsFragment = { id: string, profileId: string | null, scope: string, category: string | null, type: string | null, routing: string, channels: Array<string>, digestWindow: string | null };

export type SdkMessageSettingsFieldsFragment = { digestHourLocal: number, ackTimeoutMinutes: number, criticalAckTimeoutMinutes: number, criticalEmailFallback: boolean, fallbackAfterMinutes: number, includeEmailHtml: boolean, quietHoursStart: string | null, quietHoursEnd: string | null, quietHoursTimezone: string | null };

export type SdkMessageCatalogueQueryVariables = Exact<{ [key: string]: never; }>;


export type SdkMessageCatalogueQuery = { messageCatalogue: Array<{ type: string, category: string, audiences: Array<string>, priority: string, platformDefault: string, platformMayChange: boolean, allowedRoutings: Array<string>, digestAllowed: boolean }> };

export type SdkPlatformMessagesQueryVariables = Exact<{
  filter?: PlatformMessageFilter | null | undefined;
}>;


export type SdkPlatformMessagesQuery = { platformMessages: Array<{ id: string, type: string, category: string, priority: string, status: string, routing: string | null, routingReason: string | null, profileId: string | null, ackRequired: boolean, ackDeadline: string | null, acknowledgedAt: string | null, readAt: string | null, escalationStage: number, created: string }> };

export type SdkAcknowledgeMessageMutationVariables = Exact<{
  input: AcknowledgeMessageInput;
}>;


export type SdkAcknowledgeMessageMutation = { acknowledgeMessage: { id: string, type: string, category: string, priority: string, status: string, routing: string | null, routingReason: string | null, profileId: string | null, ackRequired: boolean, ackDeadline: string | null, acknowledgedAt: string | null, readAt: string | null, escalationStage: number, created: string } };

export type SdkAcknowledgeMessagesMutationVariables = Exact<{
  inputs: Array<AcknowledgeMessageInput> | AcknowledgeMessageInput;
}>;


export type SdkAcknowledgeMessagesMutation = { acknowledgeMessages: Array<{ id: string, type: string, category: string, priority: string, status: string, routing: string | null, routingReason: string | null, profileId: string | null, ackRequired: boolean, ackDeadline: string | null, acknowledgedAt: string | null, readAt: string | null, escalationStage: number, created: string }> };

export type SdkMarkMessageReadMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkMarkMessageReadMutation = { markMessageRead: { id: string, type: string, category: string, priority: string, status: string, routing: string | null, routingReason: string | null, profileId: string | null, ackRequired: boolean, ackDeadline: string | null, acknowledgedAt: string | null, readAt: string | null, escalationStage: number, created: string } };

export type SdkResendPlatformMessageMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkResendPlatformMessageMutation = { resendPlatformMessage: { id: string, type: string, category: string, priority: string, status: string, routing: string | null, routingReason: string | null, profileId: string | null, ackRequired: boolean, ackDeadline: string | null, acknowledgedAt: string | null, readAt: string | null, escalationStage: number, created: string } };

export type SdkPlatformMessageRoutingQueryVariables = Exact<{
  profileId?: string | number | null | undefined;
}>;


export type SdkPlatformMessageRoutingQuery = { platformMessageRouting: Array<{ id: string, profileId: string | null, scope: string, category: string | null, type: string | null, routing: string, channels: Array<string>, digestWindow: string | null }> };

export type SdkSetPlatformMessageRoutingMutationVariables = Exact<{
  input: SetMessageRoutingInput;
}>;


export type SdkSetPlatformMessageRoutingMutation = { setPlatformMessageRouting: { id: string, profileId: string | null, scope: string, category: string | null, type: string | null, routing: string, channels: Array<string>, digestWindow: string | null } };

export type SdkClearPlatformMessageRoutingMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkClearPlatformMessageRoutingMutation = { clearPlatformMessageRouting: boolean };

export type SdkPlatformMessageSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type SdkPlatformMessageSettingsQuery = { platformMessageSettings: { digestHourLocal: number, ackTimeoutMinutes: number, criticalAckTimeoutMinutes: number, criticalEmailFallback: boolean, fallbackAfterMinutes: number, includeEmailHtml: boolean, quietHoursStart: string | null, quietHoursEnd: string | null, quietHoursTimezone: string | null } };

export type SdkUpdatePlatformMessageSettingsMutationVariables = Exact<{
  input: UpdatePlatformMessageSettingsInput;
}>;


export type SdkUpdatePlatformMessageSettingsMutation = { updatePlatformMessageSettings: { digestHourLocal: number, ackTimeoutMinutes: number, criticalAckTimeoutMinutes: number, criticalEmailFallback: boolean, fallbackAfterMinutes: number, includeEmailHtml: boolean, quietHoursStart: string | null, quietHoursEnd: string | null, quietHoursTimezone: string | null } };

export type SdkSenderDomainFieldsFragment = { id: string, domain: string, fromLocalPart: string, status: string, lastError: string | null, lastCheckedAt: string | null, verifiedAt: string | null, dnsRecords: Array<{ type: string, name: string, value: string, purpose: string }> };

export type SdkPlatformSenderDomainsQueryVariables = Exact<{ [key: string]: never; }>;


export type SdkPlatformSenderDomainsQuery = { platformSenderDomains: Array<{ id: string, domain: string, fromLocalPart: string, status: string, lastError: string | null, lastCheckedAt: string | null, verifiedAt: string | null, dnsRecords: Array<{ type: string, name: string, value: string, purpose: string }> }> };

export type SdkCreatePlatformSenderDomainMutationVariables = Exact<{
  input: CreatePlatformSenderDomainInput;
}>;


export type SdkCreatePlatformSenderDomainMutation = { createPlatformSenderDomain: { id: string, domain: string, fromLocalPart: string, status: string, lastError: string | null, lastCheckedAt: string | null, verifiedAt: string | null, dnsRecords: Array<{ type: string, name: string, value: string, purpose: string }> } };

export type SdkVerifyPlatformSenderDomainMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkVerifyPlatformSenderDomainMutation = { verifyPlatformSenderDomain: { id: string, domain: string, fromLocalPart: string, status: string, lastError: string | null, lastCheckedAt: string | null, verifiedAt: string | null, dnsRecords: Array<{ type: string, name: string, value: string, purpose: string }> } };

export type SdkDisablePlatformSenderDomainMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkDisablePlatformSenderDomainMutation = { disablePlatformSenderDomain: { id: string, domain: string, fromLocalPart: string, status: string, lastError: string | null, lastCheckedAt: string | null, verifiedAt: string | null, dnsRecords: Array<{ type: string, name: string, value: string, purpose: string }> } };

export type SdkPlatformMessageCopyQueryVariables = Exact<{
  type?: string | null | undefined;
}>;


export type SdkPlatformMessageCopyQuery = { platformMessageCopy: Array<{ id: string, type: string, locale: string, variant: string, template: string, version: number }> };

export type SdkPreviewPlatformMessageCopyQueryVariables = Exact<{
  type: string;
  variant: string;
  template: string;
  data: Record<string, unknown>;
}>;


export type SdkPreviewPlatformMessageCopyQuery = { previewPlatformMessageCopy: { text: string, problems: Array<string> } };

export type SdkSetPlatformMessageCopyMutationVariables = Exact<{
  input: SetPlatformMessageCopyInput;
}>;


export type SdkSetPlatformMessageCopyMutation = { setPlatformMessageCopy: { id: string, type: string, locale: string, variant: string, template: string, version: number } };

export type SdkClearPlatformMessageCopyMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkClearPlatformMessageCopyMutation = { clearPlatformMessageCopy: boolean };

export type SdkMyNotificationsQueryVariables = Exact<{
  companyId?: string | number | null | undefined;
  unreadOnly?: boolean | null | undefined;
  first?: number | null | undefined;
  after?: string | null | undefined;
}>;


export type SdkMyNotificationsQuery = { myNotifications: { unreadCount: number, pageInfo: { hasNextPage: boolean, endCursor: string | null }, edges: Array<{ cursor: string, node: { id: string, type: string, category: string, priority: string, title: string, body: string, ctaLabel: string | null, severity: string, deepLink: Record<string, unknown> | null, companyId: string | null, readAt: string | null, created: string } }> } };

export type SdkMarkNotificationsReadMutationVariables = Exact<{
  ids?: Array<string | number> | string | number | null | undefined;
  all?: boolean | null | undefined;
  companyId?: string | number | null | undefined;
}>;


export type SdkMarkNotificationsReadMutation = { markNotificationsRead: number };

export type SdkSetNotificationPreferenceMutationVariables = Exact<{
  input: SetNotificationPreferenceInput;
}>;


export type SdkSetNotificationPreferenceMutation = { setNotificationPreference: { category: string, channel: string, enabled: boolean, digest: string | null, companyId: string | null, locked: boolean } };

export type SdkMonetaryAccountsQueryVariables = Exact<{
  first: number;
  after?: string | null | undefined;
  filter: MonetaryAccountFilter;
  sorting?: Array<MonetaryAccountSort> | MonetaryAccountSort | null | undefined;
}>;


export type SdkMonetaryAccountsQuery = { monetaryAccounts: { edges: Array<{ node: { id: string, type: MonetaryAccountType, name: string, currency: Currency, iban: string | null, active: boolean | null, balance: number, created: string, updated: string } }>, pageInfo: { hasNextPage: boolean | null, endCursor: string | null } } };

export type SdkMonetaryAccountQueryVariables = Exact<{
  id: string | number;
}>;


export type SdkMonetaryAccountQuery = { monetaryAccount: { id: string, type: MonetaryAccountType, name: string, currency: Currency, iban: string | null, bic: string | null, active: boolean | null, balance: number, ledger: string | null, created: string, updated: string } };

export type SdkCreateMonetaryAccountMutationVariables = Exact<{
  profileId: string | number;
  input: CreateMonetaryAccountInput;
}>;


export type SdkCreateMonetaryAccountMutation = { createOneMonetaryAccount: { id: string, name: string } };

export type SdkUpdateMonetaryAccountMutationVariables = Exact<{
  input: UpdateOneMonetaryAccountInput;
}>;


export type SdkUpdateMonetaryAccountMutation = { updateOneMonetaryAccount: { id: string, name: string, updated: string } };

export type SdkDeleteMonetaryAccountMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkDeleteMonetaryAccountMutation = { deleteOneMonetaryAccount: { id: string | null } };

export type SdkMonetaryAccountPaymentsQueryVariables = Exact<{
  first: number;
  after?: string | null | undefined;
  filter: MonetaryAccountPaymentFilter;
  sorting?: Array<MonetaryAccountPaymentSort> | MonetaryAccountPaymentSort | null | undefined;
}>;


export type SdkMonetaryAccountPaymentsQuery = { monetaryAccountPayments: { edges: Array<{ node: { id: string, name: string, description: string | null, amount: number, date: string, processed: boolean, monetaryAccountId: string | null, created: string, updated: string } }>, pageInfo: { hasNextPage: boolean | null, endCursor: string | null } } };

export type SdkMonetaryAccountPaymentQueryVariables = Exact<{
  id: string | number;
}>;


export type SdkMonetaryAccountPaymentQuery = { monetaryAccountPayment: { id: string, name: string, description: string | null, amount: number, date: string, processed: boolean, monetaryAccountId: string | null, created: string, updated: string } };

export type SdkCreateMonetaryAccountPaymentMutationVariables = Exact<{
  monetaryAccountId: string | number;
  input: CreateMonetaryAccountPaymentInput;
}>;


export type SdkCreateMonetaryAccountPaymentMutation = { createOneMonetaryAccountPayment: { id: string } };

export type SdkDeleteMonetaryAccountPaymentMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkDeleteMonetaryAccountPaymentMutation = { deleteOneMonetaryAccountPayment: { id: string | null } };

export type SdkProcessMonetaryAccountPaymentMutationVariables = Exact<{
  id: string | number;
  input: ProcessMonetaryAccountPaymentInput;
}>;


export type SdkProcessMonetaryAccountPaymentMutation = { processMonetaryAccountPayment: { id: string, processed: boolean } };

export type SdkPaymentRequestFieldsFragment = { id: string, companyId: string, kind: PaymentRequestKind, status: PaymentRequestStatus, amountMinor: number, currency: string, dueDate: string, endToEndId: string, taxFilingId: string | null, paymentBatchId: string | null, pain001Url: string | null, partnerReference: string | null, paidAt: string | null, created: string, lines: Array<{ id: string, creditorName: string, iban: string, bic: string | null, amountMinor: number, currency: string, remittance: string | null, structuredReference: string | null, endToEndId: string, paid: boolean }> };

export type SdkPlatformProvidersQueryVariables = Exact<{ [key: string]: never; }>;


export type SdkPlatformProvidersQuery = { platformProviders: Array<{ id: string, action: ProviderAction, mode: ProviderMode, config: Record<string, unknown>, enabled: boolean }> };

export type SdkUpsertPlatformProviderMutationVariables = Exact<{
  input: UpsertPlatformProviderInput;
}>;


export type SdkUpsertPlatformProviderMutation = { upsertPlatformProvider: { id: string, action: ProviderAction, mode: ProviderMode, config: Record<string, unknown>, enabled: boolean } };

export type SdkPaymentRequestsQueryVariables = Exact<{
  company?: CompanyRef | null | undefined;
  status?: Array<PaymentRequestStatus> | PaymentRequestStatus | null | undefined;
  first?: number | null | undefined;
  after?: string | null | undefined;
}>;


export type SdkPaymentRequestsQuery = { paymentRequests: { nextCursor: string | null, items: Array<{ id: string, companyId: string, kind: PaymentRequestKind, status: PaymentRequestStatus, amountMinor: number, currency: string, dueDate: string, endToEndId: string, taxFilingId: string | null, paymentBatchId: string | null, pain001Url: string | null, partnerReference: string | null, paidAt: string | null, created: string, lines: Array<{ id: string, creditorName: string, iban: string, bic: string | null, amountMinor: number, currency: string, remittance: string | null, structuredReference: string | null, endToEndId: string, paid: boolean }> }> } };

export type SdkPaymentRequestQueryVariables = Exact<{
  id: string | number;
}>;


export type SdkPaymentRequestQuery = { paymentRequest: { id: string, companyId: string, kind: PaymentRequestKind, status: PaymentRequestStatus, amountMinor: number, currency: string, dueDate: string, endToEndId: string, taxFilingId: string | null, paymentBatchId: string | null, pain001Url: string | null, partnerReference: string | null, paidAt: string | null, created: string, lines: Array<{ id: string, creditorName: string, iban: string, bic: string | null, amountMinor: number, currency: string, remittance: string | null, structuredReference: string | null, endToEndId: string, paid: boolean }> } | null };

export type SdkCreateTaxPaymentRequestMutationVariables = Exact<{
  company: CompanyRef;
  taxFilingId: string | number;
}>;


export type SdkCreateTaxPaymentRequestMutation = { createTaxPaymentRequest: { id: string, companyId: string, kind: PaymentRequestKind, status: PaymentRequestStatus, amountMinor: number, currency: string, dueDate: string, endToEndId: string, taxFilingId: string | null, paymentBatchId: string | null, pain001Url: string | null, partnerReference: string | null, paidAt: string | null, created: string, lines: Array<{ id: string, creditorName: string, iban: string, bic: string | null, amountMinor: number, currency: string, remittance: string | null, structuredReference: string | null, endToEndId: string, paid: boolean }> } };

export type SdkCreatePaymentRequestFromBatchMutationVariables = Exact<{
  company: CompanyRef;
  paymentBatchId: string | number;
}>;


export type SdkCreatePaymentRequestFromBatchMutation = { createPaymentRequestFromBatch: { id: string, companyId: string, kind: PaymentRequestKind, status: PaymentRequestStatus, amountMinor: number, currency: string, dueDate: string, endToEndId: string, taxFilingId: string | null, paymentBatchId: string | null, pain001Url: string | null, partnerReference: string | null, paidAt: string | null, created: string, lines: Array<{ id: string, creditorName: string, iban: string, bic: string | null, amountMinor: number, currency: string, remittance: string | null, structuredReference: string | null, endToEndId: string, paid: boolean }> } };

export type SdkReportPaymentRequestStatusMutationVariables = Exact<{
  input: ReportPaymentRequestStatusInput;
}>;


export type SdkReportPaymentRequestStatusMutation = { reportPaymentRequestStatus: { id: string, companyId: string, kind: PaymentRequestKind, status: PaymentRequestStatus, amountMinor: number, currency: string, dueDate: string, endToEndId: string, taxFilingId: string | null, paymentBatchId: string | null, pain001Url: string | null, partnerReference: string | null, paidAt: string | null, created: string, lines: Array<{ id: string, creditorName: string, iban: string, bic: string | null, amountMinor: number, currency: string, remittance: string | null, structuredReference: string | null, endToEndId: string, paid: boolean }> } };

export type SdkCancelPaymentRequestMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkCancelPaymentRequestMutation = { cancelPaymentRequest: { id: string, companyId: string, kind: PaymentRequestKind, status: PaymentRequestStatus, amountMinor: number, currency: string, dueDate: string, endToEndId: string, taxFilingId: string | null, paymentBatchId: string | null, pain001Url: string | null, partnerReference: string | null, paidAt: string | null, created: string, lines: Array<{ id: string, creditorName: string, iban: string, bic: string | null, amountMinor: number, currency: string, remittance: string | null, structuredReference: string | null, endToEndId: string, paid: boolean }> } };

export type SdkProvidePaymentLinkMutationVariables = Exact<{
  requestId: string | number;
  url: string;
  expiresAt?: string | null | undefined;
}>;


export type SdkProvidePaymentLinkMutation = { providePaymentLink: { id: string, salesInvoiceId: string | null, amountMinor: number, currency: string, status: string, url: string | null, expiresAt: string | null, deadline: string } };

export type SdkTaxReservationAdviceQueryVariables = Exact<{
  company: CompanyRef;
}>;


export type SdkTaxReservationAdviceQuery = { taxReservationAdvice: Array<{ id: string, companyId: string, taxType: string, periodLabel: string, periodEnd: string, amountMinor: number, currency: string, basis: Record<string, unknown>, status: string, reportedReservedMinor: number | null, created: string }> };

export type SdkReportTaxReservationMutationVariables = Exact<{
  adviceId: string | number;
  reservedMinor: number;
  accountRef?: string | null | undefined;
}>;


export type SdkReportTaxReservationMutation = { reportTaxReservation: { id: string, status: string, reportedReservedMinor: number | null } };

export type SdkStepUpChallengeQueryVariables = Exact<{
  id: string | number;
}>;


export type SdkStepUpChallengeQuery = { stepUpChallenge: { id: string, action: string, summary: Record<string, unknown>, nonce: string, status: string, expiresAt: string } | null };

export type SdkPlatformCompanyFieldsFragment = { id: string, platformId: string, externalId: string, name: string | null, legalName: string, registrationCountry: Country, registrationNumber: string, legalForm: TaxLegalForm | null, currency: Currency, language: string, created: string, updated: string, lifecycle: { state: ProfileLifecycleState, changedAt: string | null, suspendedBy: EngagementSide | null, displayMessage: string | null, closeEffectiveDate: string | null, archivedAt: string | null, retentionUntil: string | null } };

export type SdkPlatformUserFieldsFragment = { id: string, platformId: string, externalUserId: string, firstName: string, lastName: string, language: string | null, disabledAt: string | null, created: string, access: Array<{ profileId: string, externalId: string, role: PermissionSet }> };

export type SdkEmbedSessionFieldsFragment = { id: string, companyId: string, platformUserId: string, kind: EmbedSessionKind, status: EmbedSessionStatus, origin: string | null, expiresAt: string, exchangedAt: string | null, revokedAt: string | null, revokedReason: string | null, created: string, components: Array<{ component: EmbedComponent, features: Record<string, unknown> }> };

export type SdkCreatePlatformCompanyMutationVariables = Exact<{
  input: CreatePlatformCompanyInput;
}>;


export type SdkCreatePlatformCompanyMutation = { createPlatformCompany: { created: boolean, company: { id: string, platformId: string, externalId: string, name: string | null, legalName: string, registrationCountry: Country, registrationNumber: string, legalForm: TaxLegalForm | null, currency: Currency, language: string, created: string, updated: string, lifecycle: { state: ProfileLifecycleState, changedAt: string | null, suspendedBy: EngagementSide | null, displayMessage: string | null, closeEffectiveDate: string | null, archivedAt: string | null, retentionUntil: string | null } }, prefill: { source: string, matched: boolean, fields: Array<string> } | null } };

export type SdkUpdatePlatformCompanyMutationVariables = Exact<{
  input: UpdatePlatformCompanyInput;
}>;


export type SdkUpdatePlatformCompanyMutation = { updatePlatformCompany: { id: string, platformId: string, externalId: string, name: string | null, legalName: string, registrationCountry: Country, registrationNumber: string, legalForm: TaxLegalForm | null, currency: Currency, language: string, created: string, updated: string, lifecycle: { state: ProfileLifecycleState, changedAt: string | null, suspendedBy: EngagementSide | null, displayMessage: string | null, closeEffectiveDate: string | null, archivedAt: string | null, retentionUntil: string | null } } };

export type SdkPlatformCompanyQueryVariables = Exact<{
  profileId?: string | number | null | undefined;
  externalId?: string | null | undefined;
}>;


export type SdkPlatformCompanyQuery = { platformCompany: { id: string, platformId: string, externalId: string, name: string | null, legalName: string, registrationCountry: Country, registrationNumber: string, legalForm: TaxLegalForm | null, currency: Currency, language: string, created: string, updated: string, lifecycle: { state: ProfileLifecycleState, changedAt: string | null, suspendedBy: EngagementSide | null, displayMessage: string | null, closeEffectiveDate: string | null, archivedAt: string | null, retentionUntil: string | null } } | null };

export type SdkPlatformCompaniesQueryVariables = Exact<{
  first: number;
  after?: string | null | undefined;
  filter?: PlatformCompanyFilter | null | undefined;
  lifecycleStates?: Array<ProfileLifecycleState> | ProfileLifecycleState | null | undefined;
  includeArchived?: boolean | null | undefined;
}>;


export type SdkPlatformCompaniesQuery = { platformCompanies: { hasMore: boolean, nextCursor: string | null, edges: Array<{ node: { id: string, platformId: string, externalId: string, name: string | null, legalName: string, registrationCountry: Country, registrationNumber: string, legalForm: TaxLegalForm | null, currency: Currency, language: string, created: string, updated: string, lifecycle: { state: ProfileLifecycleState, changedAt: string | null, suspendedBy: EngagementSide | null, displayMessage: string | null, closeEffectiveDate: string | null, archivedAt: string | null, retentionUntil: string | null } } }> } };

export type SdkOnboardingRequirementsQueryVariables = Exact<{
  profileId: string | number;
}>;


export type SdkOnboardingRequirementsQuery = { onboardingRequirements: Array<{ key: OnboardingRequirementKey, status: string }> };

export type SdkUpsertPlatformUserMutationVariables = Exact<{
  input: UpsertPlatformUserInput;
}>;


export type SdkUpsertPlatformUserMutation = { upsertPlatformUser: { id: string, platformId: string, externalUserId: string, firstName: string, lastName: string, language: string | null, disabledAt: string | null, created: string, access: Array<{ profileId: string, externalId: string, role: PermissionSet }> } };

export type SdkPlatformUserQueryVariables = Exact<{
  userId?: string | number | null | undefined;
  externalUserId?: string | null | undefined;
}>;


export type SdkPlatformUserQuery = { platformUser: { id: string, platformId: string, externalUserId: string, firstName: string, lastName: string, language: string | null, disabledAt: string | null, created: string, access: Array<{ profileId: string, externalId: string, role: PermissionSet }> } | null };

export type SdkPlatformUsersQueryVariables = Exact<{
  first: number;
  after?: string | null | undefined;
  profileId?: string | number | null | undefined;
}>;


export type SdkPlatformUsersQuery = { platformUsers: { hasMore: boolean, nextCursor: string | null, edges: Array<{ node: { id: string, platformId: string, externalUserId: string, firstName: string, lastName: string, language: string | null, disabledAt: string | null, created: string, access: Array<{ profileId: string, externalId: string, role: PermissionSet }> } }> } };

export type SdkSetPlatformUserAccessMutationVariables = Exact<{
  input: SetPlatformUserAccessInput;
}>;


export type SdkSetPlatformUserAccessMutation = { setPlatformUserAccess: { profileId: string, externalId: string, role: PermissionSet } };

export type SdkRemovePlatformUserAccessMutationVariables = Exact<{
  userId: string | number;
  profileId: string | number;
}>;


export type SdkRemovePlatformUserAccessMutation = { removePlatformUserAccess: boolean };

export type SdkCreatePlatformUserTokenMutationVariables = Exact<{
  input: CreatePlatformUserTokenInput;
}>;


export type SdkCreatePlatformUserTokenMutation = { createPlatformUserToken: { accessToken: string, tokenType: string, expiresAt: string, scopes: Array<string> } };

export type SdkCreateEmbedSessionMutationVariables = Exact<{
  input: CreateEmbedSessionInput;
}>;


export type SdkCreateEmbedSessionMutation = { createEmbedSession: { clientSecret: string, expiresAt: string, session: { id: string, companyId: string, platformUserId: string, kind: EmbedSessionKind, status: EmbedSessionStatus, origin: string | null, expiresAt: string, exchangedAt: string | null, revokedAt: string | null, revokedReason: string | null, created: string, components: Array<{ component: EmbedComponent, features: Record<string, unknown> }> } } };

export type SdkEmbedSessionQueryVariables = Exact<{
  id: string | number;
}>;


export type SdkEmbedSessionQuery = { embedSession: { id: string, companyId: string, platformUserId: string, kind: EmbedSessionKind, status: EmbedSessionStatus, origin: string | null, expiresAt: string, exchangedAt: string | null, revokedAt: string | null, revokedReason: string | null, created: string, components: Array<{ component: EmbedComponent, features: Record<string, unknown> }> } | null };

export type SdkEmbedSessionsQueryVariables = Exact<{
  first: number;
  after?: string | null | undefined;
  filter?: EmbedSessionFilterInput | null | undefined;
}>;


export type SdkEmbedSessionsQuery = { embedSessions: { hasMore: boolean, nextCursor: string | null, edges: Array<{ node: { id: string, companyId: string, platformUserId: string, kind: EmbedSessionKind, status: EmbedSessionStatus, origin: string | null, expiresAt: string, exchangedAt: string | null, revokedAt: string | null, revokedReason: string | null, created: string, components: Array<{ component: EmbedComponent, features: Record<string, unknown> }> } }> } };

export type SdkRevokeEmbedSessionMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkRevokeEmbedSessionMutation = { revokeEmbedSession: { id: string, companyId: string, platformUserId: string, kind: EmbedSessionKind, status: EmbedSessionStatus, origin: string | null, expiresAt: string, exchangedAt: string | null, revokedAt: string | null, revokedReason: string | null, created: string, components: Array<{ component: EmbedComponent, features: Record<string, unknown> }> } };

export type SdkRevokeEmbedSessionsForUserMutationVariables = Exact<{
  platformUserId: string | number;
  companyId?: string | number | null | undefined;
}>;


export type SdkRevokeEmbedSessionsForUserMutation = { revokeEmbedSessionsForUser: number };

export type SdkPlatformFeatureAllowanceQueryVariables = Exact<{ [key: string]: never; }>;


export type SdkPlatformFeatureAllowanceQuery = { platformFeatureAllowance: { platformId: string, version: number, note: string | null, updated: string, features: Array<{ key: string, name: string, description: string, group: string, state: string }> } };

export type SdkPlatformFeatureLimitsQueryVariables = Exact<{
  profileId?: string | number | null | undefined;
}>;


export type SdkPlatformFeatureLimitsQuery = { platformFeatureLimits: Array<{ key: string, level: PlatformFeatureLimitLevel, profileId: string | null, hidden: boolean, updated: string }> };

export type SdkSetPlatformFeatureLimitMutationVariables = Exact<{
  input: SetPlatformFeatureLimitInput;
}>;


export type SdkSetPlatformFeatureLimitMutation = { setPlatformFeatureLimit: { key: string, level: PlatformFeatureLimitLevel, profileId: string | null, hidden: boolean, updated: string } };

export type SdkPlatformCompanyFeaturesQueryVariables = Exact<{
  profileId: string | number;
}>;


export type SdkPlatformCompanyFeaturesQuery = { platformCompanyFeatures: Array<{ key: string, enabled: boolean, source: string, blockedBy: string | null }> };

export type SdkPlatformUsageQueryVariables = Exact<{
  month?: string | null | undefined;
}>;


export type SdkPlatformUsageQuery = { platformUsage: { platformId: string, month: string, status: string, currency: Currency, activeCompanies: number, inactiveCompanies: number, ratePerActiveCompanyMinor: number, aiBilledMinor: number, minimumTopUpMinor: number, totalMinor: number, pilot: boolean, computedAt: string } };

export type SdkPlatformUsageCompaniesQueryVariables = Exact<{
  month?: string | null | undefined;
  first: number;
  after?: string | number | null | undefined;
}>;


export type SdkPlatformUsageCompaniesQuery = { platformUsage: { companies: Array<{ profileId: string, externalId: string, reasons: Array<string> }> } };

export type SdkPlatformAllowedOriginsQueryVariables = Exact<{ [key: string]: never; }>;


export type SdkPlatformAllowedOriginsQuery = { platformAllowedOrigins: Array<{ id: string, origin: string, kind: PlatformOriginKind, created: string }> };

export type SdkAddPlatformAllowedOriginMutationVariables = Exact<{
  origin: string;
}>;


export type SdkAddPlatformAllowedOriginMutation = { addPlatformAllowedOrigin: { id: string, origin: string, kind: PlatformOriginKind, created: string } };

export type SdkRemovePlatformAllowedOriginMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkRemovePlatformAllowedOriginMutation = { removePlatformAllowedOrigin: boolean };

export type SdkPolicyVersionFieldsFragment = { id: string, kind: PolicyKind, version: number, status: PolicyStatus, payload: Record<string, unknown>, checksum: string, activatedAt: string | null, promotedFrom: Record<string, unknown> | null };

export type SdkPlatformPoliciesQueryVariables = Exact<{
  kind?: PolicyKind | null | undefined;
  status?: PolicyStatus | null | undefined;
}>;


export type SdkPlatformPoliciesQuery = { platformPolicies: Array<{ id: string, kind: PolicyKind, version: number, status: PolicyStatus, payload: Record<string, unknown>, checksum: string, activatedAt: string | null, promotedFrom: Record<string, unknown> | null }> };

export type SdkPolicySchemasQueryVariables = Exact<{ [key: string]: never; }>;


export type SdkPolicySchemasQuery = { policySchemas: Record<string, unknown> };

export type SdkEffectivePolicyQueryVariables = Exact<{
  kind: PolicyKind;
  companyId: string | number;
}>;


export type SdkEffectivePolicyQuery = { effectivePolicy: Record<string, unknown> };

export type SdkCompanyPolicyOverridesQueryVariables = Exact<{
  companyId: string | number;
}>;


export type SdkCompanyPolicyOverridesQuery = { companyPolicyOverrides: Array<{ kind: PolicyKind, payload: Record<string, unknown>, version: number, setBy: string }> };

export type SdkCreatePolicyDraftMutationVariables = Exact<{
  kind: PolicyKind;
  payload: Record<string, unknown>;
}>;


export type SdkCreatePolicyDraftMutation = { createPolicyDraft: { id: string, kind: PolicyKind, version: number, status: PolicyStatus, payload: Record<string, unknown>, checksum: string, activatedAt: string | null, promotedFrom: Record<string, unknown> | null } };

export type SdkActivatePolicyVersionMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkActivatePolicyVersionMutation = { activatePolicyVersion: { id: string, kind: PolicyKind, version: number, status: PolicyStatus, payload: Record<string, unknown>, checksum: string, activatedAt: string | null, promotedFrom: Record<string, unknown> | null } };

export type SdkSetCompanyPolicyOverrideMutationVariables = Exact<{
  companyId: string | number;
  kind: PolicyKind;
  payload: Record<string, unknown>;
}>;


export type SdkSetCompanyPolicyOverrideMutation = { setCompanyPolicyOverride: Record<string, unknown> };

export type SdkClearCompanyPolicyOverrideMutationVariables = Exact<{
  companyId: string | number;
  kind: PolicyKind;
}>;


export type SdkClearCompanyPolicyOverrideMutation = { clearCompanyPolicyOverride: boolean };

export type SdkPromotePlatformPoliciesMutationVariables = Exact<{
  kinds?: Array<PolicyKind> | PolicyKind | null | undefined;
}>;


export type SdkPromotePlatformPoliciesMutation = { promotePlatformPolicies: string };

export type SdkPreviewPolicyImportMutationVariables = Exact<{
  bundleId: string;
}>;


export type SdkPreviewPolicyImportMutation = { previewPolicyImport: { importId: string, warnings: Array<string>, changes: Array<{ kind: PolicyKind, added: Array<string>, changed: Array<string>, removed: Array<string> }> } };

export type SdkConfirmPolicyImportMutationVariables = Exact<{
  importId: string | number;
}>;


export type SdkConfirmPolicyImportMutation = { confirmPolicyImport: Array<{ id: string, kind: PolicyKind, version: number, status: PolicyStatus, payload: Record<string, unknown>, checksum: string, activatedAt: string | null, promotedFrom: Record<string, unknown> | null }> };

export type SdkProfilesQueryVariables = Exact<{
  first: number;
  after?: string | null | undefined;
  filter: ProfileFilter;
  sorting?: Array<ProfileSort> | ProfileSort | null | undefined;
}>;


export type SdkProfilesQuery = { profiles: { edges: Array<{ node: { id: string, name: string | null, legalName: string, url: string | null, currency: Currency, registrationNumber: string, registrationCountry: Country, bookkeeperId: string | null, created: string, updated: string } }>, pageInfo: { hasNextPage: boolean | null, endCursor: string | null } } };

export type SdkProfileQueryVariables = Exact<{
  id: string | number;
}>;


export type SdkProfileQuery = { profile: { id: string, name: string | null, legalName: string, url: string | null, currency: Currency, registrationNumber: string, registrationCountry: Country, language: string, bookkeeperId: string | null, created: string, updated: string } };

export type SdkUpdateProfileMutationVariables = Exact<{
  input: UpdateOneProfileInput;
}>;


export type SdkUpdateProfileMutation = { updateOneProfile: { id: string, name: string | null, legalName: string, updated: string } };

export type SdkProjectsQueryVariables = Exact<{
  first: number;
  after?: string | null | undefined;
  filter: ProjectFilter;
  sorting?: Array<ProjectSort> | ProjectSort | null | undefined;
}>;


export type SdkProjectsQuery = { projects: { edges: Array<{ node: { id: string, name: string, start: string | null, end: string | null, relationId: string | null, created: string, updated: string } }>, pageInfo: { hasNextPage: boolean | null, endCursor: string | null } } };

export type SdkProjectQueryVariables = Exact<{
  id: string | number;
}>;


export type SdkProjectQuery = { project: { id: string, name: string, start: string | null, end: string | null, relationId: string | null, created: string, updated: string } };

export type SdkCreateProjectMutationVariables = Exact<{
  profileId: string | number;
  input: CreateProjectInput;
}>;


export type SdkCreateProjectMutation = { createOneProject: { id: string, name: string } };

export type SdkUpdateProjectMutationVariables = Exact<{
  input: UpdateOneProjectInput;
}>;


export type SdkUpdateProjectMutation = { updateOneProject: { id: string, name: string, updated: string } };

export type SdkDeleteProjectMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkDeleteProjectMutation = { deleteOneProject: { id: string | null } };

export type SdkPurchaseInvoicesQueryVariables = Exact<{
  first: number;
  after?: string | null | undefined;
  filter: PurchaseInvoiceFilter;
  sorting?: Array<PurchaseInvoiceSort> | PurchaseInvoiceSort | null | undefined;
}>;


export type SdkPurchaseInvoicesQuery = { purchaseInvoices: { edges: Array<{ node: { id: string, uuid: string, number: string | null, reference: string | null, currency: Currency, amount: number | null, date: string | null, due: string | null, paid: string | null, closed: string | null, relationId: string | null, outstanding: number, created: string, updated: string } }>, pageInfo: { hasNextPage: boolean | null, endCursor: string | null } } };

export type SdkPurchaseInvoiceQueryVariables = Exact<{
  id: string | number;
}>;


export type SdkPurchaseInvoiceQuery = { purchaseInvoice: { id: string, uuid: string, number: string | null, reference: string | null, currency: Currency, amount: number | null, date: string | null, due: string | null, paid: string | null, closed: string | null, relationId: string | null, outstanding: number, created: string, updated: string, lines: Array<{ id: string, taxCode: string | null, tax: number | null, price: number, quantity: number, discount: number | null, netAmount: number }> } };

export type SdkCreatePurchaseInvoiceMutationVariables = Exact<{
  profileId: string | number;
  input: CreatePurchaseInvoiceInput;
}>;


export type SdkCreatePurchaseInvoiceMutation = { createOnePurchaseInvoice: { id: string, uuid: string, number: string | null } };

export type SdkUpdatePurchaseInvoiceMutationVariables = Exact<{
  input: UpdateOnePurchaseInvoiceInput;
}>;


export type SdkUpdatePurchaseInvoiceMutation = { updateOnePurchaseInvoice: { id: string, uuid: string, number: string | null, updated: string } };

export type SdkDeletePurchaseInvoiceMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkDeletePurchaseInvoiceMutation = { deleteOnePurchaseInvoice: { id: string | null } };

export type SdkProcessPurchaseInvoiceMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkProcessPurchaseInvoiceMutation = { processPurchaseInvoice: { id: string } };

export type SdkConfirmPurchaseInvoiceMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkConfirmPurchaseInvoiceMutation = { confirmPurchaseInvoice: { id: string } };

export type SdkRecurringsQueryVariables = Exact<{
  first: number;
  after?: string | null | undefined;
  filter: RecurringFilter;
  sorting?: Array<RecurringSort> | RecurringSort | null | undefined;
}>;


export type SdkRecurringsQuery = { recurrings: { edges: Array<{ node: { id: string, uuid: string, name: string, frequency: Frequency, currency: Currency, relationId: string, created: string, updated: string } }>, pageInfo: { hasNextPage: boolean | null, endCursor: string | null } } };

export type SdkRecurringQueryVariables = Exact<{
  id: string | number;
}>;


export type SdkRecurringQuery = { recurring: { id: string, uuid: string, name: string, frequency: Frequency, currency: Currency, relationId: string, startDate: string, endDate: string | null, created: string, updated: string } };

export type SdkCreateRecurringMutationVariables = Exact<{
  profileId: string | number;
  input: CreateRecurringInput;
}>;


export type SdkCreateRecurringMutation = { createOneRecurring: { id: string, uuid: string, name: string } };

export type SdkUpdateRecurringMutationVariables = Exact<{
  input: UpdateOneRecurringInput;
}>;


export type SdkUpdateRecurringMutation = { updateOneRecurring: { id: string, name: string, updated: string } };

export type SdkDeleteRecurringMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkDeleteRecurringMutation = { deleteOneRecurring: { id: string | null } };

export type SdkRelationsQueryVariables = Exact<{
  first: number;
  after?: string | null | undefined;
  filter: RelationFilter;
  sorting?: Array<RelationSort> | RelationSort | null | undefined;
}>;


export type SdkRelationsQuery = { relations: { edges: Array<{ node: { id: string, legalName: string | null, firstName: string | null, lastName: string | null, email: string | null, registrationNumber: string | null, vatNumber: string | null, created: string, updated: string } }>, pageInfo: { hasNextPage: boolean | null, endCursor: string | null } } };

export type SdkRelationQueryVariables = Exact<{
  id: string | number;
}>;


export type SdkRelationQuery = { relation: { id: string, legalName: string | null, firstName: string | null, lastName: string | null, email: string | null, registrationCountry: string | null, registrationNumber: string | null, vatNumber: string | null, created: string, updated: string } };

export type SdkCreateRelationMutationVariables = Exact<{
  profileId: string | number;
  input: CreateRelationInput;
}>;


export type SdkCreateRelationMutation = { createOneRelation: { id: string, legalName: string | null } };

export type SdkUpdateRelationMutationVariables = Exact<{
  input: UpdateOneRelationInput;
}>;


export type SdkUpdateRelationMutation = { updateOneRelation: { id: string, legalName: string | null, updated: string } };

export type SdkDeleteRelationMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkDeleteRelationMutation = { deleteOneRelation: { id: string | null } };

export type SdkSalesInvoicesQueryVariables = Exact<{
  first: number;
  after?: string | null | undefined;
  filter: SalesInvoiceFilter;
  sorting?: Array<SalesInvoiceSort> | SalesInvoiceSort | null | undefined;
}>;


export type SdkSalesInvoicesQuery = { salesInvoices: { edges: Array<{ node: { id: string, uuid: string, number: string | null, reference: string | null, currency: Currency, date: string | null, due: string | null, paid: string | null, closed: string | null, relationId: string | null, outstanding: number, created: string, updated: string } }>, pageInfo: { hasNextPage: boolean | null, endCursor: string | null } } };

export type SdkSalesInvoiceQueryVariables = Exact<{
  id: string | number;
}>;


export type SdkSalesInvoiceQuery = { salesInvoice: { id: string, uuid: string, number: string | null, reference: string | null, currency: Currency, date: string | null, due: string | null, paid: string | null, closed: string | null, bookingDate: string | null, legalName: string | null, firstName: string | null, lastName: string | null, email: string | null, relationId: string | null, vatNumber: string | null, locked: boolean, memo: string | null, footer: string | null, outstanding: number, created: string, updated: string, lines: Array<{ id: string, name: string, description: string | null, taxCode: string | null, tax: number | null, price: number, quantity: number, discount: number | null, netAmount: number }> } };

export type SdkCreateSalesInvoiceMutationVariables = Exact<{
  profileId: string | number;
  input: CreateSalesInvoiceInput;
}>;


export type SdkCreateSalesInvoiceMutation = { createOneSalesInvoice: { id: string, uuid: string, number: string | null } };

export type SdkUpdateSalesInvoiceMutationVariables = Exact<{
  input: UpdateOneSalesInvoiceInput;
}>;


export type SdkUpdateSalesInvoiceMutation = { updateOneSalesInvoice: { id: string, uuid: string, number: string | null, reference: string | null, updated: string } };

export type SdkDeleteSalesInvoiceMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkDeleteSalesInvoiceMutation = { deleteOneSalesInvoice: { id: string | null } };

export type SdkCloseSalesInvoiceMutationVariables = Exact<{
  id: string | number;
  send?: boolean | null | undefined;
}>;


export type SdkCloseSalesInvoiceMutation = { closeSalesInvoice: { id: string, closed: string | null } };

export type SdkReopenSalesInvoiceMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkReopenSalesInvoiceMutation = { reopenSalesInvoice: { id: string, closed: string | null } };

export type SdkCreditSalesInvoiceMutationVariables = Exact<{
  id: string | number;
  close?: boolean | null | undefined;
}>;


export type SdkCreditSalesInvoiceMutation = { creditSalesInvoice: { id: string, uuid: string, number: string | null } };

export type SdkTestClockFieldsFragment = { id: string, name: string, frozenTime: string, status: string, advanceTarget: string | null, companies: Array<string> };

export type SdkSandboxSettingsFieldsFragment = { sandboxReset: SandboxResetMode, sandboxSeedTemplates: Array<TestCompanyTemplate>, lastResetAt: string | null };

export type SdkTestClocksQueryVariables = Exact<{ [key: string]: never; }>;


export type SdkTestClocksQuery = { testClocks: Array<{ id: string, name: string, frozenTime: string, status: string, advanceTarget: string | null, companies: Array<string> }> };

export type SdkCreateTestClockMutationVariables = Exact<{
  name: string;
  frozenTime: string;
}>;


export type SdkCreateTestClockMutation = { createTestClock: { id: string, name: string, frozenTime: string, status: string, advanceTarget: string | null, companies: Array<string> } };

export type SdkAdvanceTestClockMutationVariables = Exact<{
  id: string | number;
  to: string;
  options?: AdvanceTestClockOptionsInput | null | undefined;
}>;


export type SdkAdvanceTestClockMutation = { advanceTestClock: { id: string, name: string, frozenTime: string, status: string, advanceTarget: string | null, companies: Array<string> } };

export type SdkDeleteTestClockMutationVariables = Exact<{
  id: string | number;
}>;


export type SdkDeleteTestClockMutation = { deleteTestClock: boolean };

export type SdkSeedTestCompanyMutationVariables = Exact<{
  input: SeedTestCompanyInput;
}>;


export type SdkSeedTestCompanyMutation = { seedTestCompany: { id: string, platformId: string, externalId: string, legalName: string } };

export type SdkPlatformSandboxSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type SdkPlatformSandboxSettingsQuery = { platformSandboxSettings: { sandboxReset: SandboxResetMode, sandboxSeedTemplates: Array<TestCompanyTemplate>, lastResetAt: string | null } };

export type SdkUpdatePlatformSandboxSettingsMutationVariables = Exact<{
  input: UpdatePlatformSandboxSettingsInput;
}>;


export type SdkUpdatePlatformSandboxSettingsMutation = { updatePlatformSandboxSettings: { sandboxReset: SandboxResetMode, sandboxSeedTemplates: Array<TestCompanyTemplate>, lastResetAt: string | null } };

export type SdkResetPlatformSandboxMutationVariables = Exact<{ [key: string]: never; }>;


export type SdkResetPlatformSandboxMutation = { resetPlatformSandbox: { trigger: string, companiesDeleted: number, companiesKept: number, clocksDeleted: number, errors: Array<string>, startedAt: string, finishedAt: string, companiesSeeded: Array<{ template: string, externalId: string, companyId: string }> } };

export type SdkSupportSettingsFieldsFragment = { supportMode: SupportMode, supportUrl: string | null, supportEmail: string | null, supportEscalationEnabled: boolean };

export type SdkSupportEscalationFieldsFragment = { id: string, companyId: string | null, subject: string, description: string, severity: SupportSeverity, status: SupportEscalationStatus, requestIds: Array<string>, screen: string | null, created: string, updated: string, comments: Array<{ id: string, authorKind: string, body: string, attachments: Array<string>, created: string }> };

export type SdkSupportAccessGrantFieldsFragment = { id: string, companyId: string, reason: string, scope: SupportAccessScope, status: SupportAccessStatus, durationMinutes: number, requestedAt: string, activatedAt: string | null, expiresAt: string | null, revokedAt: string | null, escalationId: string | null, breakGlass: boolean };

export type SdkPlatformSupportSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type SdkPlatformSupportSettingsQuery = { platformSupportSettings: { supportMode: SupportMode, supportUrl: string | null, supportEmail: string | null, supportEscalationEnabled: boolean } };

export type SdkUpdatePlatformSupportSettingsMutationVariables = Exact<{
  input: PlatformSupportSettingsInput;
}>;


export type SdkUpdatePlatformSupportSettingsMutation = { updatePlatformSupportSettings: { supportMode: SupportMode, supportUrl: string | null, supportEmail: string | null, supportEscalationEnabled: boolean } };

export type SdkSupportEscalationsQueryVariables = Exact<{
  status?: Array<SupportEscalationStatus> | SupportEscalationStatus | null | undefined;
  first?: number | null | undefined;
  after?: string | null | undefined;
}>;


export type SdkSupportEscalationsQuery = { supportEscalations: Array<{ id: string, companyId: string | null, subject: string, description: string, severity: SupportSeverity, status: SupportEscalationStatus, requestIds: Array<string>, screen: string | null, created: string, updated: string, comments: Array<{ id: string, authorKind: string, body: string, attachments: Array<string>, created: string }> }> };

export type SdkCreateSupportEscalationMutationVariables = Exact<{
  input: CreateSupportEscalationInput;
}>;


export type SdkCreateSupportEscalationMutation = { createSupportEscalation: { id: string, companyId: string | null, subject: string, description: string, severity: SupportSeverity, status: SupportEscalationStatus, requestIds: Array<string>, screen: string | null, created: string, updated: string, comments: Array<{ id: string, authorKind: string, body: string, attachments: Array<string>, created: string }> } };

export type SdkAddSupportEscalationCommentMutationVariables = Exact<{
  escalationId: string | number;
  body: string;
}>;


export type SdkAddSupportEscalationCommentMutation = { addSupportEscalationComment: { id: string, authorKind: string, body: string, attachments: Array<string>, created: string } };

export type SdkSupportAccessGrantsQueryVariables = Exact<{
  companyId: string | number;
  includeEnded?: boolean | null | undefined;
}>;


export type SdkSupportAccessGrantsQuery = { supportAccessGrants: Array<{ id: string, companyId: string, reason: string, scope: SupportAccessScope, status: SupportAccessStatus, durationMinutes: number, requestedAt: string, activatedAt: string | null, expiresAt: string | null, revokedAt: string | null, escalationId: string | null, breakGlass: boolean }> };

export type SdkDecideSupportAccessMutationVariables = Exact<{
  grantId: string | number;
  approve: boolean;
  attestation?: string | null | undefined;
  stepUpAssertionId?: string | number | null | undefined;
}>;


export type SdkDecideSupportAccessMutation = { decideSupportAccess: { id: string, companyId: string, reason: string, scope: SupportAccessScope, status: SupportAccessStatus, durationMinutes: number, requestedAt: string, activatedAt: string | null, expiresAt: string | null, revokedAt: string | null, escalationId: string | null, breakGlass: boolean } };

export type SdkRevokeSupportAccessMutationVariables = Exact<{
  grantId: string | number;
}>;


export type SdkRevokeSupportAccessMutation = { revokeSupportAccess: { id: string, companyId: string, reason: string, scope: SupportAccessScope, status: SupportAccessStatus, durationMinutes: number, requestedAt: string, activatedAt: string | null, expiresAt: string | null, revokedAt: string | null, escalationId: string | null, breakGlass: boolean } };

export type SdkTaxAuthorisationFieldsFragment = { id: string, companyId: string, taxes: Array<AuthorisedTax>, statementVersion: string, locale: string, channel: TaxAuthorisationChannel, grantedAt: string, stepUp: boolean, revokedAt: string | null, revokedVia: string | null, supersedesId: string | null, grantedBy: { id: string, externalUserId: string, firstName: string, lastName: string } | null };

export type SdkTaxAuthorisationsQueryVariables = Exact<{
  companyId: string | number;
  includeRevoked?: boolean | null | undefined;
}>;


export type SdkTaxAuthorisationsQuery = { taxAuthorisations: Array<{ id: string, companyId: string, taxes: Array<AuthorisedTax>, statementVersion: string, locale: string, channel: TaxAuthorisationChannel, grantedAt: string, stepUp: boolean, revokedAt: string | null, revokedVia: string | null, supersedesId: string | null, grantedBy: { id: string, externalUserId: string, firstName: string, lastName: string } | null }> };

export type SdkTaxAuthorisationStatusQueryVariables = Exact<{
  companyId: string | number;
}>;


export type SdkTaxAuthorisationStatusQuery = { taxAuthorisationStatus: Array<{ tax: AuthorisedTax, state: TaxAuthorisationState, firmName: string | null, authorisation: { id: string, companyId: string, taxes: Array<AuthorisedTax>, statementVersion: string, locale: string, channel: TaxAuthorisationChannel, grantedAt: string, stepUp: boolean, revokedAt: string | null, revokedVia: string | null, supersedesId: string | null, grantedBy: { id: string, externalUserId: string, firstName: string, lastName: string } | null } | null }> };

export type SdkRevokeTaxAuthorisationMutationVariables = Exact<{
  input: RevokeTaxAuthorisationInput;
}>;


export type SdkRevokeTaxAuthorisationMutation = { revokeTaxAuthorisation: Array<{ id: string, companyId: string, taxes: Array<AuthorisedTax>, statementVersion: string, locale: string, channel: TaxAuthorisationChannel, grantedAt: string, stepUp: boolean, revokedAt: string | null, revokedVia: string | null, supersedesId: string | null, grantedBy: { id: string, externalUserId: string, firstName: string, lastName: string } | null }> };

export const SdkTransactionFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkTransactionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MonetaryAccountPayment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"monetaryAccountId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"iban"}},{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}}]} as unknown as DocumentNode<SdkTransactionFieldsFragment, unknown>;
export const SdkDocumentFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDocumentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProcessDocument"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"senderName"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"receivedDate"}},{"kind":"Field","name":{"kind":"Name","value":"processed"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectedReason"}},{"kind":"Field","name":{"kind":"Name","value":"processing"}},{"kind":"Field","name":{"kind":"Name","value":"purchaseInvoiceId"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SdkDocumentFieldsFragment, unknown>;
export const SdkUpsertFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkUpsertFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}}]}}]} as unknown as DocumentNode<SdkUpsertFieldsFragment, unknown>;
export const SdkBulkJobFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkBulkJobFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformBulkJob"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"objectType"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lineCount"}},{"kind":"Field","name":{"kind":"Name","value":"processedCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdCount"}},{"kind":"Field","name":{"kind":"Name","value":"updatedCount"}},{"kind":"Field","name":{"kind":"Name","value":"unchangedCount"}},{"kind":"Field","name":{"kind":"Name","value":"skippedCount"}},{"kind":"Field","name":{"kind":"Name","value":"failedCount"}},{"kind":"Field","name":{"kind":"Name","value":"dryRun"}},{"kind":"Field","name":{"kind":"Name","value":"emitEvents"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"finishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]} as unknown as DocumentNode<SdkBulkJobFieldsFragment, unknown>;
export const SdkWebhookEndpointFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkWebhookEndpointFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformWebhookEndpoint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"failoverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"eventTypes"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"disabledReason"}},{"kind":"Field","name":{"kind":"Name","value":"apiVersion"}},{"kind":"Field","name":{"kind":"Name","value":"consecutiveFailures"}},{"kind":"Field","name":{"kind":"Name","value":"lastSuccessAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastFailureAt"}},{"kind":"Field","name":{"kind":"Name","value":"rotationEndsAt"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SdkWebhookEndpointFieldsFragment, unknown>;
export const SdkWebhookDeliveryFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkWebhookDeliveryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformWebhookDelivery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endpointId"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"}},{"kind":"Field","name":{"kind":"Name","value":"eventId"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"attemptCount"}},{"kind":"Field","name":{"kind":"Name","value":"replayCount"}},{"kind":"Field","name":{"kind":"Name","value":"nextAttemptAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastAttemptAt"}},{"kind":"Field","name":{"kind":"Name","value":"deliveredVia"}},{"kind":"Field","name":{"kind":"Name","value":"responseStatus"}},{"kind":"Field","name":{"kind":"Name","value":"durationMs"}},{"kind":"Field","name":{"kind":"Name","value":"responseExcerpt"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SdkWebhookDeliveryFieldsFragment, unknown>;
export const SdkDataSourceFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDataSourceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataSource"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"cadence"}},{"kind":"Field","name":{"kind":"Name","value":"expectedBy"}},{"kind":"Field","name":{"kind":"Name","value":"gapThresholdMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"historyMonths"}},{"kind":"Field","name":{"kind":"Name","value":"balanceAssertions"}},{"kind":"Field","name":{"kind":"Name","value":"delivery"}},{"kind":"Field","name":{"kind":"Name","value":"settings"}},{"kind":"Field","name":{"kind":"Name","value":"autoAttach"}}]}}]} as unknown as DocumentNode<SdkDataSourceFieldsFragment, unknown>;
export const SdkFeedAccountFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkFeedAccountFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeedAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"iban"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"health"}},{"kind":"Field","name":{"kind":"Name","value":"statusSince"}},{"kind":"Field","name":{"kind":"Name","value":"lastDeliveryAt"}},{"kind":"Field","name":{"kind":"Name","value":"completeThrough"}},{"kind":"Field","name":{"kind":"Name","value":"detail"}},{"kind":"Field","name":{"kind":"Name","value":"lastBalance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"amountMinor"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"computedMinor"}},{"kind":"Field","name":{"kind":"Name","value":"differenceMinor"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<SdkFeedAccountFieldsFragment, unknown>;
export const SdkAttachmentFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkAttachmentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataSourceAttachment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sourceKey"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"companyExternalId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"attachedAt"}},{"kind":"Field","name":{"kind":"Name","value":"backfillFrom"}},{"kind":"Field","name":{"kind":"Name","value":"backfillStatus"}},{"kind":"Field","name":{"kind":"Name","value":"lastDeliveryAt"}}]}}]} as unknown as DocumentNode<SdkAttachmentFieldsFragment, unknown>;
export const SdkRecordTypeFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkRecordTypeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformRecordType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"schema"}},{"kind":"Field","name":{"kind":"Name","value":"states"}},{"kind":"Field","name":{"kind":"Name","value":"initialState"}},{"kind":"Field","name":{"kind":"Name","value":"transitions"}},{"kind":"Field","name":{"kind":"Name","value":"displayTemplate"}},{"kind":"Field","name":{"kind":"Name","value":"deepLinkTemplate"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]} as unknown as DocumentNode<SdkRecordTypeFieldsFragment, unknown>;
export const SdkCustomRecordFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCustomRecordFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"revision"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"effects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stepId"}},{"kind":"Field","name":{"kind":"Name","value":"objectType"}},{"kind":"Field","name":{"kind":"Name","value":"objectId"}},{"kind":"Field","name":{"kind":"Name","value":"reversed"}},{"kind":"Field","name":{"kind":"Name","value":"flowRunId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"runs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"templateKey"}},{"kind":"Field","name":{"kind":"Name","value":"trigger"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<SdkCustomRecordFieldsFragment, unknown>;
export const SdkFlowTemplateFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkFlowTemplateFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlowTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"recordType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"sourceFormat"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"checksum"}},{"kind":"Field","name":{"kind":"Name","value":"activatedAt"}}]}}]} as unknown as DocumentNode<SdkFlowTemplateFieldsFragment, unknown>;
export const SdkFlowRunFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkFlowRunFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlowRun"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"templateKey"}},{"kind":"Field","name":{"kind":"Name","value":"templateVersion"}},{"kind":"Field","name":{"kind":"Name","value":"recordId"}},{"kind":"Field","name":{"kind":"Name","value":"trigger"}},{"kind":"Field","name":{"kind":"Name","value":"recordRevision"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"attempts"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"outputs"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"finishedAt"}}]}}]} as unknown as DocumentNode<SdkFlowRunFieldsFragment, unknown>;
export const SdkCompanyDocumentFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCompanyDocumentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyDocument"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"sha256"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"downloadUrl"}},{"kind":"Field","name":{"kind":"Name","value":"downloadExpiresAt"}}]}}]} as unknown as DocumentNode<SdkCompanyDocumentFieldsFragment, unknown>;
export const SdkExportRunFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkExportRunFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformExportRun"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"runDate"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"files"}},{"kind":"Field","name":{"kind":"Name","value":"rowCounts"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"finishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCompanyDocumentFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCompanyDocumentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyDocument"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"sha256"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"downloadUrl"}},{"kind":"Field","name":{"kind":"Name","value":"downloadExpiresAt"}}]}}]} as unknown as DocumentNode<SdkExportRunFieldsFragment, unknown>;
export const SdkExportDestinationFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkExportDestinationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformExportDestination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"endpoint"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"credentialsExpireAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastError"}}]}}]} as unknown as DocumentNode<SdkExportDestinationFieldsFragment, unknown>;
export const SdkExportScheduleFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkExportScheduleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformExportSchedule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"destination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkExportDestinationFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"datasets"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"cron"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"companyScope"}},{"kind":"Field","name":{"kind":"Name","value":"pathTemplate"}},{"kind":"Field","name":{"kind":"Name","value":"compression"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lastRunAt"}},{"kind":"Field","name":{"kind":"Name","value":"nextRunAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkExportDestinationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformExportDestination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"endpoint"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"credentialsExpireAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastError"}}]}}]} as unknown as DocumentNode<SdkExportScheduleFieldsFragment, unknown>;
export const SdkDocumentLayoutFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDocumentLayoutFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformDocumentLayout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"documentType"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"companyEditable"}},{"kind":"Field","name":{"kind":"Name","value":"unlockedBlockIds"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"warnings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ruleId"}},{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"severity"}},{"kind":"Field","name":{"kind":"Name","value":"legalRef"}},{"kind":"Field","name":{"kind":"Name","value":"verifyWithAdviser"}}]}}]}}]} as unknown as DocumentNode<SdkDocumentLayoutFieldsFragment, unknown>;
export const SdkDocumentTemplateFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDocumentTemplateFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"documentType"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"validationReport"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]} as unknown as DocumentNode<SdkDocumentTemplateFieldsFragment, unknown>;
export const SdkDocumentRenderJobFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDocumentRenderJobFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentRenderJob"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"documentType"}},{"kind":"Field","name":{"kind":"Name","value":"entityId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"artifactId"}},{"kind":"Field","name":{"kind":"Name","value":"violations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ruleId"}},{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"severity"}},{"kind":"Field","name":{"kind":"Name","value":"legalRef"}},{"kind":"Field","name":{"kind":"Name","value":"verifyWithAdviser"}}]}}]}}]} as unknown as DocumentNode<SdkDocumentRenderJobFieldsFragment, unknown>;
export const SdkCustomActionFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCustomActionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformCustomAction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"placements"}},{"kind":"Field","name":{"kind":"Name","value":"contextType"}},{"kind":"Field","name":{"kind":"Name","value":"visibleWhen"}},{"kind":"Field","name":{"kind":"Name","value":"delivery"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}}]}}]} as unknown as DocumentNode<SdkCustomActionFieldsFragment, unknown>;
export const SdkCustomFieldDefinitionFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCustomFieldDefinitionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"options"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"editableBy"}},{"kind":"Field","name":{"kind":"Name","value":"showIn"}},{"kind":"Field","name":{"kind":"Name","value":"includeInEvents"}},{"kind":"Field","name":{"kind":"Name","value":"includeOnDocuments"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"archived"}}]}}]} as unknown as DocumentNode<SdkCustomFieldDefinitionFieldsFragment, unknown>;
export const SdkCompanyLifecycleFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCompanyLifecycleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyLifecycle"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"changedAt"}},{"kind":"Field","name":{"kind":"Name","value":"suspendedBy"}},{"kind":"Field","name":{"kind":"Name","value":"displayMessage"}},{"kind":"Field","name":{"kind":"Name","value":"closeEffectiveDate"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"retentionUntil"}}]}}]} as unknown as DocumentNode<SdkCompanyLifecycleFieldsFragment, unknown>;
export const SdkLifecycleCompanyFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkLifecycleCompanyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformCompany"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"lifecycle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCompanyLifecycleFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCompanyLifecycleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyLifecycle"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"changedAt"}},{"kind":"Field","name":{"kind":"Name","value":"suspendedBy"}},{"kind":"Field","name":{"kind":"Name","value":"displayMessage"}},{"kind":"Field","name":{"kind":"Name","value":"closeEffectiveDate"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"retentionUntil"}}]}}]} as unknown as DocumentNode<SdkLifecycleCompanyFieldsFragment, unknown>;
export const SdkCompanyTransferFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCompanyTransferFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyTransfer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}}]}}]} as unknown as DocumentNode<SdkCompanyTransferFieldsFragment, unknown>;
export const SdkMessageFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkMessageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformMessageView"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"routing"}},{"kind":"Field","name":{"kind":"Name","value":"routingReason"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"ackRequired"}},{"kind":"Field","name":{"kind":"Name","value":"ackDeadline"}},{"kind":"Field","name":{"kind":"Name","value":"acknowledgedAt"}},{"kind":"Field","name":{"kind":"Name","value":"readAt"}},{"kind":"Field","name":{"kind":"Name","value":"escalationStage"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SdkMessageFieldsFragment, unknown>;
export const SdkMessageRoutingRuleFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkMessageRoutingRuleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MessageRoutingRuleView"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"scope"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"routing"}},{"kind":"Field","name":{"kind":"Name","value":"channels"}},{"kind":"Field","name":{"kind":"Name","value":"digestWindow"}}]}}]} as unknown as DocumentNode<SdkMessageRoutingRuleFieldsFragment, unknown>;
export const SdkMessageSettingsFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkMessageSettingsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformMessageSettingsView"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"digestHourLocal"}},{"kind":"Field","name":{"kind":"Name","value":"ackTimeoutMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"criticalAckTimeoutMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"criticalEmailFallback"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackAfterMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"includeEmailHtml"}},{"kind":"Field","name":{"kind":"Name","value":"quietHoursStart"}},{"kind":"Field","name":{"kind":"Name","value":"quietHoursEnd"}},{"kind":"Field","name":{"kind":"Name","value":"quietHoursTimezone"}}]}}]} as unknown as DocumentNode<SdkMessageSettingsFieldsFragment, unknown>;
export const SdkSenderDomainFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkSenderDomainFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformSenderDomain"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}},{"kind":"Field","name":{"kind":"Name","value":"fromLocalPart"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lastError"}},{"kind":"Field","name":{"kind":"Name","value":"lastCheckedAt"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dnsRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}}]}}]}}]} as unknown as DocumentNode<SdkSenderDomainFieldsFragment, unknown>;
export const SdkPaymentRequestFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPaymentRequestFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentRequest"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"amountMinor"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"endToEndId"}},{"kind":"Field","name":{"kind":"Name","value":"taxFilingId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentBatchId"}},{"kind":"Field","name":{"kind":"Name","value":"pain001Url"}},{"kind":"Field","name":{"kind":"Name","value":"partnerReference"}},{"kind":"Field","name":{"kind":"Name","value":"paidAt"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creditorName"}},{"kind":"Field","name":{"kind":"Name","value":"iban"}},{"kind":"Field","name":{"kind":"Name","value":"bic"}},{"kind":"Field","name":{"kind":"Name","value":"amountMinor"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"remittance"}},{"kind":"Field","name":{"kind":"Name","value":"structuredReference"}},{"kind":"Field","name":{"kind":"Name","value":"endToEndId"}},{"kind":"Field","name":{"kind":"Name","value":"paid"}}]}}]}}]} as unknown as DocumentNode<SdkPaymentRequestFieldsFragment, unknown>;
export const SdkPlatformCompanyFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPlatformCompanyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformCompany"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"registrationCountry"}},{"kind":"Field","name":{"kind":"Name","value":"registrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"legalForm"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"lifecycle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"changedAt"}},{"kind":"Field","name":{"kind":"Name","value":"suspendedBy"}},{"kind":"Field","name":{"kind":"Name","value":"displayMessage"}},{"kind":"Field","name":{"kind":"Name","value":"closeEffectiveDate"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"retentionUntil"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformCompanyFieldsFragment, unknown>;
export const SdkPlatformUserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPlatformUserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalUserId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"disabledAt"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"access"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformUserFieldsFragment, unknown>;
export const SdkEmbedSessionFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkEmbedSessionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmbedSession"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"platformUserId"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"exchangedAt"}},{"kind":"Field","name":{"kind":"Name","value":"revokedAt"}},{"kind":"Field","name":{"kind":"Name","value":"revokedReason"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"}},{"kind":"Field","name":{"kind":"Name","value":"features"}}]}}]}}]} as unknown as DocumentNode<SdkEmbedSessionFieldsFragment, unknown>;
export const SdkPolicyVersionFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPolicyVersionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformPolicyVersion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"checksum"}},{"kind":"Field","name":{"kind":"Name","value":"activatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"promotedFrom"}}]}}]} as unknown as DocumentNode<SdkPolicyVersionFieldsFragment, unknown>;
export const SdkTestClockFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkTestClockFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestClock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"frozenTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"advanceTarget"}},{"kind":"Field","name":{"kind":"Name","value":"companies"}}]}}]} as unknown as DocumentNode<SdkTestClockFieldsFragment, unknown>;
export const SdkSandboxSettingsFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkSandboxSettingsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformSandboxSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sandboxReset"}},{"kind":"Field","name":{"kind":"Name","value":"sandboxSeedTemplates"}},{"kind":"Field","name":{"kind":"Name","value":"lastResetAt"}}]}}]} as unknown as DocumentNode<SdkSandboxSettingsFieldsFragment, unknown>;
export const SdkSupportSettingsFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkSupportSettingsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformSupportSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"supportMode"}},{"kind":"Field","name":{"kind":"Name","value":"supportUrl"}},{"kind":"Field","name":{"kind":"Name","value":"supportEmail"}},{"kind":"Field","name":{"kind":"Name","value":"supportEscalationEnabled"}}]}}]} as unknown as DocumentNode<SdkSupportSettingsFieldsFragment, unknown>;
export const SdkSupportEscalationFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkSupportEscalationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SupportEscalation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"severity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"requestIds"}},{"kind":"Field","name":{"kind":"Name","value":"screen"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorKind"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]}}]} as unknown as DocumentNode<SdkSupportEscalationFieldsFragment, unknown>;
export const SdkSupportAccessGrantFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkSupportAccessGrantFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SupportAccessGrant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"scope"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"durationMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"requestedAt"}},{"kind":"Field","name":{"kind":"Name","value":"activatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"revokedAt"}},{"kind":"Field","name":{"kind":"Name","value":"escalationId"}},{"kind":"Field","name":{"kind":"Name","value":"breakGlass"}}]}}]} as unknown as DocumentNode<SdkSupportAccessGrantFieldsFragment, unknown>;
export const SdkTaxAuthorisationFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkTaxAuthorisationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaxAuthorisation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"taxes"}},{"kind":"Field","name":{"kind":"Name","value":"statementVersion"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"channel"}},{"kind":"Field","name":{"kind":"Name","value":"grantedAt"}},{"kind":"Field","name":{"kind":"Name","value":"stepUp"}},{"kind":"Field","name":{"kind":"Name","value":"revokedAt"}},{"kind":"Field","name":{"kind":"Name","value":"revokedVia"}},{"kind":"Field","name":{"kind":"Name","value":"supersedesId"}},{"kind":"Field","name":{"kind":"Name","value":"grantedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalUserId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<SdkTaxAuthorisationFieldsFragment, unknown>;
export const SdkProfileApiCredentialsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkProfileApiCredentials"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileApiCredentials"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkProfileApiCredentialsQuery, SdkProfileApiCredentialsQueryVariables>;
export const SdkCreateProfileApiCredentialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreateProfileApiCredential"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateApiCredentialInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProfileApiCredential"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"clientSecret"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkCreateProfileApiCredentialMutation, SdkCreateProfileApiCredentialMutationVariables>;
export const SdkRotateProfileApiCredentialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkRotateProfileApiCredential"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rotateProfileApiCredential"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"clientSecret"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkRotateProfileApiCredentialMutation, SdkRotateProfileApiCredentialMutationVariables>;
export const SdkRevokeProfileApiCredentialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkRevokeProfileApiCredential"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revokeProfileApiCredential"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<SdkRevokeProfileApiCredentialMutation, SdkRevokeProfileApiCredentialMutationVariables>;
export const SdkBookkeeperApiCredentialsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkBookkeeperApiCredentials"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookkeeperId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookkeeperApiCredentials"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bookkeeperId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookkeeperId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkBookkeeperApiCredentialsQuery, SdkBookkeeperApiCredentialsQueryVariables>;
export const SdkCreateBookkeeperApiCredentialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreateBookkeeperApiCredential"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookkeeperId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateApiCredentialInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBookkeeperApiCredential"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bookkeeperId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookkeeperId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"clientSecret"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkCreateBookkeeperApiCredentialMutation, SdkCreateBookkeeperApiCredentialMutationVariables>;
export const SdkRotateBookkeeperApiCredentialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkRotateBookkeeperApiCredential"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookkeeperId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rotateBookkeeperApiCredential"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bookkeeperId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookkeeperId"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}},{"kind":"Field","name":{"kind":"Name","value":"clientSecret"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkRotateBookkeeperApiCredentialMutation, SdkRotateBookkeeperApiCredentialMutationVariables>;
export const SdkRevokeBookkeeperApiCredentialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkRevokeBookkeeperApiCredential"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookkeeperId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revokeBookkeeperApiCredential"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bookkeeperId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookkeeperId"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<SdkRevokeBookkeeperApiCredentialMutation, SdkRevokeBookkeeperApiCredentialMutationVariables>;
export const SdkBankAccountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkBankAccounts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MonetaryAccountFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monetaryAccounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"paging"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"iban"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<SdkBankAccountsQuery, SdkBankAccountsQueryVariables>;
export const SdkBankAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkBankAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monetaryAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"iban"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<SdkBankAccountQuery, SdkBankAccountQueryVariables>;
export const SdkTransactionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkTransactions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MonetaryAccountPaymentFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MonetaryAccountPaymentSort"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monetaryAccountPayments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"paging"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkTransactionFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkTransactionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MonetaryAccountPayment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"monetaryAccountId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"iban"}},{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}}]} as unknown as DocumentNode<SdkTransactionsQuery, SdkTransactionsQueryVariables>;
export const SdkTransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkTransaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monetaryAccountPayment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkTransactionFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkTransactionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MonetaryAccountPayment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"monetaryAccountId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"iban"}},{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}}]} as unknown as DocumentNode<SdkTransactionQuery, SdkTransactionQueryVariables>;
export const SdkBookingSummariesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkBookingSummaries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lookups"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BookingLookupInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookingSummaries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"lookups"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lookups"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"bankAccountId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"processed"}},{"kind":"Field","name":{"kind":"Name","value":"bookingKind"}},{"kind":"Field","name":{"kind":"Name","value":"categoryLabel"}},{"kind":"Field","name":{"kind":"Name","value":"ledgerAccountCode"}},{"kind":"Field","name":{"kind":"Name","value":"vatLabel"}},{"kind":"Field","name":{"kind":"Name","value":"receiptStatus"}},{"kind":"Field","name":{"kind":"Name","value":"suggestion"}}]}}]}}]} as unknown as DocumentNode<SdkBookingSummariesQuery, SdkBookingSummariesQueryVariables>;
export const SdkDocumentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkDocuments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProcessDocumentFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProcessDocumentSort"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processDocuments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"paging"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkDocumentFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDocumentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProcessDocument"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"senderName"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"receivedDate"}},{"kind":"Field","name":{"kind":"Name","value":"processed"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectedReason"}},{"kind":"Field","name":{"kind":"Name","value":"processing"}},{"kind":"Field","name":{"kind":"Name","value":"purchaseInvoiceId"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SdkDocumentsQuery, SdkDocumentsQueryVariables>;
export const SdkDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processDocument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkDocumentFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDocumentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProcessDocument"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"senderName"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"receivedDate"}},{"kind":"Field","name":{"kind":"Name","value":"processed"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectedReason"}},{"kind":"Field","name":{"kind":"Name","value":"processing"}},{"kind":"Field","name":{"kind":"Name","value":"purchaseInvoiceId"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SdkDocumentQuery, SdkDocumentQueryVariables>;
export const SdkUploadDocumentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUploadDocuments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"files"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProcessDocumentUploadInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadProcessDocuments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"files"},"value":{"kind":"Variable","name":{"kind":"Name","value":"files"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkDocumentFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDocumentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProcessDocument"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"senderName"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"receivedDate"}},{"kind":"Field","name":{"kind":"Name","value":"processed"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectedReason"}},{"kind":"Field","name":{"kind":"Name","value":"processing"}},{"kind":"Field","name":{"kind":"Name","value":"purchaseInvoiceId"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SdkUploadDocumentsMutation, SdkUploadDocumentsMutationVariables>;
export const SdkUploadReceiptForTransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUploadReceiptForTransaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"monetaryAccountPaymentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProcessDocumentUploadInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contextText"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadProcessDocumentForPayment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"monetaryAccountPaymentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"monetaryAccountPaymentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}},{"kind":"Argument","name":{"kind":"Name","value":"contextText"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contextText"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"purchaseInvoiceId"}},{"kind":"Field","name":{"kind":"Name","value":"processDocument"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkDocumentFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDocumentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProcessDocument"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"senderName"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"receivedDate"}},{"kind":"Field","name":{"kind":"Name","value":"processed"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectedReason"}},{"kind":"Field","name":{"kind":"Name","value":"processing"}},{"kind":"Field","name":{"kind":"Name","value":"purchaseInvoiceId"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SdkUploadReceiptForTransactionMutation, SdkUploadReceiptForTransactionMutationVariables>;
export const SdkTaxCalendarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkTaxCalendar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxFilingOverview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"year"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"rows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"obligationId"}},{"kind":"Field","name":{"kind":"Name","value":"obligationType"}},{"kind":"Field","name":{"kind":"Name","value":"filingType"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}},{"kind":"Field","name":{"kind":"Name","value":"supported"}},{"kind":"Field","name":{"kind":"Name","value":"cells"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startMonth"}},{"kind":"Field","name":{"kind":"Name","value":"colSpan"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"filingId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"otherFilings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filingType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"submittedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"amountDue"}}]}}]}}]}}]} as unknown as DocumentNode<SdkTaxCalendarQuery, SdkTaxCalendarQueryVariables>;
export const SdkTaxFilingPaymentSummaryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkTaxFilingPaymentSummary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxFilingPaymentSummary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filingId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filingId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amountDue"}},{"kind":"Field","name":{"kind":"Name","value":"amountPaid"}},{"kind":"Field","name":{"kind":"Name","value":"amountOpen"}},{"kind":"Field","name":{"kind":"Name","value":"isPaid"}}]}}]}}]} as unknown as DocumentNode<SdkTaxFilingPaymentSummaryQuery, SdkTaxFilingPaymentSummaryQueryVariables>;
export const SdkActionItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkActionItems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileTodoSummary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"urgentCount"}},{"kind":"Field","name":{"kind":"Name","value":"readyCount"}},{"kind":"Field","name":{"kind":"Name","value":"blockedCount"}},{"kind":"Field","name":{"kind":"Name","value":"priorityQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"urgency"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SdkActionItemsQuery, SdkActionItemsQueryVariables>;
export const SdkCostCentersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkCostCenters"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CostCenterFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CostCenterSort"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"costCenters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"paging"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<SdkCostCentersQuery, SdkCostCentersQueryVariables>;
export const SdkCostCenterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkCostCenter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"costCenter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkCostCenterQuery, SdkCostCenterQueryVariables>;
export const SdkCreateCostCenterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreateCostCenter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCostCenterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneCostCenter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<SdkCreateCostCenterMutation, SdkCreateCostCenterMutationVariables>;
export const SdkUpdateCostCenterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpdateCostCenter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateOneCostCenterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOneCostCenter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkUpdateCostCenterMutation, SdkUpdateCostCenterMutationVariables>;
export const SdkDeleteCostCenterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkDeleteCostCenter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteOneCostCenter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SdkDeleteCostCenterMutation, SdkDeleteCostCenterMutationVariables>;
export const SdkUpsertRelationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpsertRelation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertRelationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertRelation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkUpsertFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkUpsertFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}}]}}]} as unknown as DocumentNode<SdkUpsertRelationMutation, SdkUpsertRelationMutationVariables>;
export const SdkUpsertProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpsertProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkUpsertFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkUpsertFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}}]}}]} as unknown as DocumentNode<SdkUpsertProductMutation, SdkUpsertProductMutationVariables>;
export const SdkUpsertProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpsertProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertProjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkUpsertFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkUpsertFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}}]}}]} as unknown as DocumentNode<SdkUpsertProjectMutation, SdkUpsertProjectMutationVariables>;
export const SdkUpsertCostCenterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpsertCostCenter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertCostCenterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertCostCenter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkUpsertFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkUpsertFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}}]}}]} as unknown as DocumentNode<SdkUpsertCostCenterMutation, SdkUpsertCostCenterMutationVariables>;
export const SdkUpsertSalesInvoiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpsertSalesInvoice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertSalesInvoiceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertSalesInvoice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkUpsertFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkUpsertFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}}]}}]} as unknown as DocumentNode<SdkUpsertSalesInvoiceMutation, SdkUpsertSalesInvoiceMutationVariables>;
export const SdkUpsertPurchaseInvoiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpsertPurchaseInvoice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertPurchaseInvoiceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertPurchaseInvoice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkUpsertFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkUpsertFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}}]}}]} as unknown as DocumentNode<SdkUpsertPurchaseInvoiceMutation, SdkUpsertPurchaseInvoiceMutationVariables>;
export const SdkUpsertJournalEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpsertJournalEntry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertJournalEntryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertJournalEntry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkUpsertFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkUpsertFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}}]}}]} as unknown as DocumentNode<SdkUpsertJournalEntryMutation, SdkUpsertJournalEntryMutationVariables>;
export const SdkUpsertEmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpsertEmployee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertEmployeeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertEmployee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkUpsertFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkUpsertFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}}]}}]} as unknown as DocumentNode<SdkUpsertEmployeeMutation, SdkUpsertEmployeeMutationVariables>;
export const SdkUpsertEmploymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpsertEmployment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertEmploymentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertEmployment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkUpsertFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkUpsertFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}}]}}]} as unknown as DocumentNode<SdkUpsertEmploymentMutation, SdkUpsertEmploymentMutationVariables>;
export const SdkSetObjectMetadataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkSetObjectMetadata"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformObjectType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"metadata"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setObjectMetadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"metadata"},"value":{"kind":"Variable","name":{"kind":"Name","value":"metadata"}}}]}]}}]} as unknown as DocumentNode<SdkSetObjectMetadataMutation, SdkSetObjectMetadataMutationVariables>;
export const SdkPlatformObjectByExternalIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformObjectByExternalId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRef"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformObjectType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"externalId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformObjectByExternalId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"externalId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"externalId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformObjectByExternalIdQuery, SdkPlatformObjectByExternalIdQueryVariables>;
export const SdkPlatformBulkJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformBulkJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"500"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformBulkJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkBulkJobFields"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"line"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"objectId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkBulkJobFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformBulkJob"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"objectType"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lineCount"}},{"kind":"Field","name":{"kind":"Name","value":"processedCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdCount"}},{"kind":"Field","name":{"kind":"Name","value":"updatedCount"}},{"kind":"Field","name":{"kind":"Name","value":"unchangedCount"}},{"kind":"Field","name":{"kind":"Name","value":"skippedCount"}},{"kind":"Field","name":{"kind":"Name","value":"failedCount"}},{"kind":"Field","name":{"kind":"Name","value":"dryRun"}},{"kind":"Field","name":{"kind":"Name","value":"emitEvents"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"finishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]} as unknown as DocumentNode<SdkPlatformBulkJobQuery, SdkPlatformBulkJobQueryVariables>;
export const SdkPlatformBulkJobsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformBulkJobs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"20"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformBulkJobStatus"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformBulkJobs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkBulkJobFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkBulkJobFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformBulkJob"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"objectType"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lineCount"}},{"kind":"Field","name":{"kind":"Name","value":"processedCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdCount"}},{"kind":"Field","name":{"kind":"Name","value":"updatedCount"}},{"kind":"Field","name":{"kind":"Name","value":"unchangedCount"}},{"kind":"Field","name":{"kind":"Name","value":"skippedCount"}},{"kind":"Field","name":{"kind":"Name","value":"failedCount"}},{"kind":"Field","name":{"kind":"Name","value":"dryRun"}},{"kind":"Field","name":{"kind":"Name","value":"emitEvents"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"finishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]} as unknown as DocumentNode<SdkPlatformBulkJobsQuery, SdkPlatformBulkJobsQueryVariables>;
export const SdkCancelPlatformBulkJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCancelPlatformBulkJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cancelPlatformBulkJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkBulkJobFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkBulkJobFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformBulkJob"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"objectType"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lineCount"}},{"kind":"Field","name":{"kind":"Name","value":"processedCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdCount"}},{"kind":"Field","name":{"kind":"Name","value":"updatedCount"}},{"kind":"Field","name":{"kind":"Name","value":"unchangedCount"}},{"kind":"Field","name":{"kind":"Name","value":"skippedCount"}},{"kind":"Field","name":{"kind":"Name","value":"failedCount"}},{"kind":"Field","name":{"kind":"Name","value":"dryRun"}},{"kind":"Field","name":{"kind":"Name","value":"emitEvents"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"finishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]} as unknown as DocumentNode<SdkCancelPlatformBulkJobMutation, SdkCancelPlatformBulkJobMutationVariables>;
export const SdkPlatformEventCatalogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformEventCatalog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformEventCatalog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"objectType"}},{"kind":"Field","name":{"kind":"Name","value":"module"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"wave"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformEventCatalogQuery, SdkPlatformEventCatalogQueryVariables>;
export const SdkPlatformEventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformEvents"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformEventFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformEvents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"apiVersion"}},{"kind":"Field","name":{"kind":"Name","value":"sequence"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"objectType"}},{"kind":"Field","name":{"kind":"Name","value":"objectId"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"requestId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformEventsQuery, SdkPlatformEventsQueryVariables>;
export const SdkPlatformEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"apiVersion"}},{"kind":"Field","name":{"kind":"Name","value":"sequence"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"objectType"}},{"kind":"Field","name":{"kind":"Name","value":"objectId"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"requestId"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformEventQuery, SdkPlatformEventQueryVariables>;
export const SdkPlatformWebhookEndpointsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformWebhookEndpoints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformWebhookEndpoints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkWebhookEndpointFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkWebhookEndpointFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformWebhookEndpoint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"failoverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"eventTypes"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"disabledReason"}},{"kind":"Field","name":{"kind":"Name","value":"apiVersion"}},{"kind":"Field","name":{"kind":"Name","value":"consecutiveFailures"}},{"kind":"Field","name":{"kind":"Name","value":"lastSuccessAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastFailureAt"}},{"kind":"Field","name":{"kind":"Name","value":"rotationEndsAt"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SdkPlatformWebhookEndpointsQuery, SdkPlatformWebhookEndpointsQueryVariables>;
export const SdkPlatformWebhookDeliveriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformWebhookDeliveries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endpointId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformDeliveryFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"50"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformWebhookDeliveries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"endpointId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endpointId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkWebhookDeliveryFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkWebhookDeliveryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformWebhookDelivery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endpointId"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"}},{"kind":"Field","name":{"kind":"Name","value":"eventId"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"attemptCount"}},{"kind":"Field","name":{"kind":"Name","value":"replayCount"}},{"kind":"Field","name":{"kind":"Name","value":"nextAttemptAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastAttemptAt"}},{"kind":"Field","name":{"kind":"Name","value":"deliveredVia"}},{"kind":"Field","name":{"kind":"Name","value":"responseStatus"}},{"kind":"Field","name":{"kind":"Name","value":"durationMs"}},{"kind":"Field","name":{"kind":"Name","value":"responseExcerpt"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SdkPlatformWebhookDeliveriesQuery, SdkPlatformWebhookDeliveriesQueryVariables>;
export const SdkCreatePlatformWebhookEndpointDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreatePlatformWebhookEndpoint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePlatformWebhookEndpointInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPlatformWebhookEndpoint"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signingSecret"}},{"kind":"Field","name":{"kind":"Name","value":"endpoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkWebhookEndpointFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkWebhookEndpointFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformWebhookEndpoint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"failoverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"eventTypes"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"disabledReason"}},{"kind":"Field","name":{"kind":"Name","value":"apiVersion"}},{"kind":"Field","name":{"kind":"Name","value":"consecutiveFailures"}},{"kind":"Field","name":{"kind":"Name","value":"lastSuccessAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastFailureAt"}},{"kind":"Field","name":{"kind":"Name","value":"rotationEndsAt"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SdkCreatePlatformWebhookEndpointMutation, SdkCreatePlatformWebhookEndpointMutationVariables>;
export const SdkUpdatePlatformWebhookEndpointDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpdatePlatformWebhookEndpoint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePlatformWebhookEndpointInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePlatformWebhookEndpoint"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkWebhookEndpointFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkWebhookEndpointFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformWebhookEndpoint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"failoverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"eventTypes"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"disabledReason"}},{"kind":"Field","name":{"kind":"Name","value":"apiVersion"}},{"kind":"Field","name":{"kind":"Name","value":"consecutiveFailures"}},{"kind":"Field","name":{"kind":"Name","value":"lastSuccessAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastFailureAt"}},{"kind":"Field","name":{"kind":"Name","value":"rotationEndsAt"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SdkUpdatePlatformWebhookEndpointMutation, SdkUpdatePlatformWebhookEndpointMutationVariables>;
export const SdkRotatePlatformWebhookSecretDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkRotatePlatformWebhookSecret"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keepPreviousHours"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"24"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rotatePlatformWebhookSecret"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"keepPreviousHours"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keepPreviousHours"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signingSecret"}},{"kind":"Field","name":{"kind":"Name","value":"endpoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkWebhookEndpointFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkWebhookEndpointFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformWebhookEndpoint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"failoverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"eventTypes"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"disabledReason"}},{"kind":"Field","name":{"kind":"Name","value":"apiVersion"}},{"kind":"Field","name":{"kind":"Name","value":"consecutiveFailures"}},{"kind":"Field","name":{"kind":"Name","value":"lastSuccessAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastFailureAt"}},{"kind":"Field","name":{"kind":"Name","value":"rotationEndsAt"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SdkRotatePlatformWebhookSecretMutation, SdkRotatePlatformWebhookSecretMutationVariables>;
export const SdkDeletePlatformWebhookEndpointDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkDeletePlatformWebhookEndpoint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePlatformWebhookEndpoint"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<SdkDeletePlatformWebhookEndpointMutation, SdkDeletePlatformWebhookEndpointMutationVariables>;
export const SdkPingPlatformWebhookEndpointDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkPingPlatformWebhookEndpoint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pingPlatformWebhookEndpoint"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkWebhookDeliveryFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkWebhookDeliveryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformWebhookDelivery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endpointId"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"}},{"kind":"Field","name":{"kind":"Name","value":"eventId"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"attemptCount"}},{"kind":"Field","name":{"kind":"Name","value":"replayCount"}},{"kind":"Field","name":{"kind":"Name","value":"nextAttemptAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastAttemptAt"}},{"kind":"Field","name":{"kind":"Name","value":"deliveredVia"}},{"kind":"Field","name":{"kind":"Name","value":"responseStatus"}},{"kind":"Field","name":{"kind":"Name","value":"durationMs"}},{"kind":"Field","name":{"kind":"Name","value":"responseExcerpt"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SdkPingPlatformWebhookEndpointMutation, SdkPingPlatformWebhookEndpointMutationVariables>;
export const SdkReplayPlatformWebhookDeliveryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkReplayPlatformWebhookDelivery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"replayPlatformWebhookDelivery"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkWebhookDeliveryFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkWebhookDeliveryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformWebhookDelivery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endpointId"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"}},{"kind":"Field","name":{"kind":"Name","value":"eventId"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"attemptCount"}},{"kind":"Field","name":{"kind":"Name","value":"replayCount"}},{"kind":"Field","name":{"kind":"Name","value":"nextAttemptAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastAttemptAt"}},{"kind":"Field","name":{"kind":"Name","value":"deliveredVia"}},{"kind":"Field","name":{"kind":"Name","value":"responseStatus"}},{"kind":"Field","name":{"kind":"Name","value":"durationMs"}},{"kind":"Field","name":{"kind":"Name","value":"responseExcerpt"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SdkReplayPlatformWebhookDeliveryMutation, SdkReplayPlatformWebhookDeliveryMutationVariables>;
export const SdkReplayPlatformWebhookDeliveriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkReplayPlatformWebhookDeliveries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endpointId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformDeliveryFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"replayPlatformWebhookDeliveries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"endpointId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endpointId"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"matched"}},{"kind":"Field","name":{"kind":"Name","value":"enqueued"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<SdkReplayPlatformWebhookDeliveriesMutation, SdkReplayPlatformWebhookDeliveriesMutationVariables>;
export const SdkResendPlatformEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkResendPlatformEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endpointId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resendPlatformEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"eventId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}},{"kind":"Argument","name":{"kind":"Name","value":"endpointId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endpointId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkWebhookDeliveryFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkWebhookDeliveryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformWebhookDelivery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endpointId"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"}},{"kind":"Field","name":{"kind":"Name","value":"eventId"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"attemptCount"}},{"kind":"Field","name":{"kind":"Name","value":"replayCount"}},{"kind":"Field","name":{"kind":"Name","value":"nextAttemptAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastAttemptAt"}},{"kind":"Field","name":{"kind":"Name","value":"deliveredVia"}},{"kind":"Field","name":{"kind":"Name","value":"responseStatus"}},{"kind":"Field","name":{"kind":"Name","value":"durationMs"}},{"kind":"Field","name":{"kind":"Name","value":"responseExcerpt"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SdkResendPlatformEventMutation, SdkResendPlatformEventMutationVariables>;
export const SdkDataSourcesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkDataSources"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dataSources"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkDataSourceFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDataSourceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataSource"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"cadence"}},{"kind":"Field","name":{"kind":"Name","value":"expectedBy"}},{"kind":"Field","name":{"kind":"Name","value":"gapThresholdMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"historyMonths"}},{"kind":"Field","name":{"kind":"Name","value":"balanceAssertions"}},{"kind":"Field","name":{"kind":"Name","value":"delivery"}},{"kind":"Field","name":{"kind":"Name","value":"settings"}},{"kind":"Field","name":{"kind":"Name","value":"autoAttach"}}]}}]} as unknown as DocumentNode<SdkDataSourcesQuery, SdkDataSourcesQueryVariables>;
export const SdkDataSourceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkDataSource"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dataSource"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkDataSourceFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDataSourceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataSource"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"cadence"}},{"kind":"Field","name":{"kind":"Name","value":"expectedBy"}},{"kind":"Field","name":{"kind":"Name","value":"gapThresholdMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"historyMonths"}},{"kind":"Field","name":{"kind":"Name","value":"balanceAssertions"}},{"kind":"Field","name":{"kind":"Name","value":"delivery"}},{"kind":"Field","name":{"kind":"Name","value":"settings"}},{"kind":"Field","name":{"kind":"Name","value":"autoAttach"}}]}}]} as unknown as DocumentNode<SdkDataSourceQuery, SdkDataSourceQueryVariables>;
export const SdkFeedHealthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkFeedHealth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FeedHealthStatus"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"50"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feedHealth"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkFeedAccountFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nextCursor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkFeedAccountFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeedAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"iban"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"health"}},{"kind":"Field","name":{"kind":"Name","value":"statusSince"}},{"kind":"Field","name":{"kind":"Name","value":"lastDeliveryAt"}},{"kind":"Field","name":{"kind":"Name","value":"completeThrough"}},{"kind":"Field","name":{"kind":"Name","value":"detail"}},{"kind":"Field","name":{"kind":"Name","value":"lastBalance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"amountMinor"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"computedMinor"}},{"kind":"Field","name":{"kind":"Name","value":"differenceMinor"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<SdkFeedHealthQuery, SdkFeedHealthQueryVariables>;
export const SdkDataSourceFilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkDataSourceFiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"50"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dataSourceFiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"receivedVia"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"sha256"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statements"}},{"kind":"Field","name":{"kind":"Name","value":"entries"}},{"kind":"Field","name":{"kind":"Name","value":"imported"}},{"kind":"Field","name":{"kind":"Name","value":"duplicates"}},{"kind":"Field","name":{"kind":"Name","value":"unroutedAccounts"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nextCursor"}}]}}]}}]} as unknown as DocumentNode<SdkDataSourceFilesQuery, SdkDataSourceFilesQueryVariables>;
export const SdkRegisterDataSourceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkRegisterDataSource"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterDataSourceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerDataSource"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkDataSourceFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDataSourceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataSource"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"cadence"}},{"kind":"Field","name":{"kind":"Name","value":"expectedBy"}},{"kind":"Field","name":{"kind":"Name","value":"gapThresholdMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"historyMonths"}},{"kind":"Field","name":{"kind":"Name","value":"balanceAssertions"}},{"kind":"Field","name":{"kind":"Name","value":"delivery"}},{"kind":"Field","name":{"kind":"Name","value":"settings"}},{"kind":"Field","name":{"kind":"Name","value":"autoAttach"}}]}}]} as unknown as DocumentNode<SdkRegisterDataSourceMutation, SdkRegisterDataSourceMutationVariables>;
export const SdkUpdateDataSourceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpdateDataSource"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateDataSourceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDataSource"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkDataSourceFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDataSourceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataSource"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"cadence"}},{"kind":"Field","name":{"kind":"Name","value":"expectedBy"}},{"kind":"Field","name":{"kind":"Name","value":"gapThresholdMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"historyMonths"}},{"kind":"Field","name":{"kind":"Name","value":"balanceAssertions"}},{"kind":"Field","name":{"kind":"Name","value":"delivery"}},{"kind":"Field","name":{"kind":"Name","value":"settings"}},{"kind":"Field","name":{"kind":"Name","value":"autoAttach"}}]}}]} as unknown as DocumentNode<SdkUpdateDataSourceMutation, SdkUpdateDataSourceMutationVariables>;
export const SdkRetireDataSourceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkRetireDataSource"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"retireDataSource"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkDataSourceFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDataSourceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataSource"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"cadence"}},{"kind":"Field","name":{"kind":"Name","value":"expectedBy"}},{"kind":"Field","name":{"kind":"Name","value":"gapThresholdMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"historyMonths"}},{"kind":"Field","name":{"kind":"Name","value":"balanceAssertions"}},{"kind":"Field","name":{"kind":"Name","value":"delivery"}},{"kind":"Field","name":{"kind":"Name","value":"settings"}},{"kind":"Field","name":{"kind":"Name","value":"autoAttach"}}]}}]} as unknown as DocumentNode<SdkRetireDataSourceMutation, SdkRetireDataSourceMutationVariables>;
export const SdkAttachDataSourceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkAttachDataSource"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRef"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"backfillFrom"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachDataSource"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}},{"kind":"Argument","name":{"kind":"Name","value":"backfillFrom"},"value":{"kind":"Variable","name":{"kind":"Name","value":"backfillFrom"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkAttachmentFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkAttachmentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataSourceAttachment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sourceKey"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"companyExternalId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"attachedAt"}},{"kind":"Field","name":{"kind":"Name","value":"backfillFrom"}},{"kind":"Field","name":{"kind":"Name","value":"backfillStatus"}},{"kind":"Field","name":{"kind":"Name","value":"lastDeliveryAt"}}]}}]} as unknown as DocumentNode<SdkAttachDataSourceMutation, SdkAttachDataSourceMutationVariables>;
export const SdkPauseDataSourceAttachmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkPauseDataSourceAttachment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRef"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pauseDataSourceAttachment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkAttachmentFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkAttachmentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataSourceAttachment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sourceKey"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"companyExternalId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"attachedAt"}},{"kind":"Field","name":{"kind":"Name","value":"backfillFrom"}},{"kind":"Field","name":{"kind":"Name","value":"backfillStatus"}},{"kind":"Field","name":{"kind":"Name","value":"lastDeliveryAt"}}]}}]} as unknown as DocumentNode<SdkPauseDataSourceAttachmentMutation, SdkPauseDataSourceAttachmentMutationVariables>;
export const SdkDetachDataSourceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkDetachDataSource"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRef"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"detachDataSource"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkAttachmentFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkAttachmentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DataSourceAttachment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sourceKey"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"companyExternalId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"attachedAt"}},{"kind":"Field","name":{"kind":"Name","value":"backfillFrom"}},{"kind":"Field","name":{"kind":"Name","value":"backfillStatus"}},{"kind":"Field","name":{"kind":"Name","value":"lastDeliveryAt"}}]}}]} as unknown as DocumentNode<SdkDetachDataSourceMutation, SdkDetachDataSourceMutationVariables>;
export const SdkUpsertFeedBankAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpsertFeedBankAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"source"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRef"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"account"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BankAccountFeedInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertFeedBankAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"source"},"value":{"kind":"Variable","name":{"kind":"Name","value":"source"}}},{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}},{"kind":"Argument","name":{"kind":"Name","value":"account"},"value":{"kind":"Variable","name":{"kind":"Name","value":"account"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkFeedAccountFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkFeedAccountFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeedAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"iban"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"health"}},{"kind":"Field","name":{"kind":"Name","value":"statusSince"}},{"kind":"Field","name":{"kind":"Name","value":"lastDeliveryAt"}},{"kind":"Field","name":{"kind":"Name","value":"completeThrough"}},{"kind":"Field","name":{"kind":"Name","value":"detail"}},{"kind":"Field","name":{"kind":"Name","value":"lastBalance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"amountMinor"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"computedMinor"}},{"kind":"Field","name":{"kind":"Name","value":"differenceMinor"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<SdkUpsertFeedBankAccountMutation, SdkUpsertFeedBankAccountMutationVariables>;
export const SdkIngestBankTransactionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkIngestBankTransactions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"source"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRef"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"account"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactions"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BankTransactionFeedInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ingestBankTransactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"source"},"value":{"kind":"Variable","name":{"kind":"Name","value":"source"}}},{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}},{"kind":"Argument","name":{"kind":"Name","value":"account"},"value":{"kind":"Variable","name":{"kind":"Name","value":"account"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactions"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"line"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]} as unknown as DocumentNode<SdkIngestBankTransactionsMutation, SdkIngestBankTransactionsMutationVariables>;
export const SdkReportBankBalancesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkReportBankBalances"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"source"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRef"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"account"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"balances"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BankBalanceInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reportBankBalances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"source"},"value":{"kind":"Variable","name":{"kind":"Name","value":"source"}}},{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}},{"kind":"Argument","name":{"kind":"Name","value":"account"},"value":{"kind":"Variable","name":{"kind":"Name","value":"account"}}},{"kind":"Argument","name":{"kind":"Name","value":"balances"},"value":{"kind":"Variable","name":{"kind":"Name","value":"balances"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"amountMinor"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"computedMinor"}},{"kind":"Field","name":{"kind":"Name","value":"differenceMinor"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<SdkReportBankBalancesMutation, SdkReportBankBalancesMutationVariables>;
export const SdkReportFeedWatermarkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkReportFeedWatermark"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"source"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRef"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"account"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"completeThrough"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reportFeedWatermark"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"source"},"value":{"kind":"Variable","name":{"kind":"Name","value":"source"}}},{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}},{"kind":"Argument","name":{"kind":"Name","value":"account"},"value":{"kind":"Variable","name":{"kind":"Name","value":"account"}}},{"kind":"Argument","name":{"kind":"Name","value":"completeThrough"},"value":{"kind":"Variable","name":{"kind":"Name","value":"completeThrough"}}}]}]}}]} as unknown as DocumentNode<SdkReportFeedWatermarkMutation, SdkReportFeedWatermarkMutationVariables>;
export const SdkIngestWorkedHoursDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkIngestWorkedHours"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"source"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRef"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entries"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WorkedHoursFeedInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ingestWorkedHours"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"source"},"value":{"kind":"Variable","name":{"kind":"Name","value":"source"}}},{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}},{"kind":"Argument","name":{"kind":"Name","value":"entries"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entries"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"line"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]} as unknown as DocumentNode<SdkIngestWorkedHoursMutation, SdkIngestWorkedHoursMutationVariables>;
export const SdkBankTransactionBookingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkBankTransactionBookings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRef"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"externalIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bankTransactionBookings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}},{"kind":"Argument","name":{"kind":"Name","value":"externalIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"externalIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"booking"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"counterpart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ledger"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"legs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ledgerCode"}},{"kind":"Field","name":{"kind":"Name","value":"ledgerName"}},{"kind":"Field","name":{"kind":"Name","value":"debitMinor"}},{"kind":"Field","name":{"kind":"Name","value":"creditMinor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxCode"}},{"kind":"Field","name":{"kind":"Name","value":"vatAmountMinor"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"receipt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"documentIds"}},{"kind":"Field","name":{"kind":"Name","value":"requestedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bookedAt"}},{"kind":"Field","name":{"kind":"Name","value":"bookedBy"}},{"kind":"Field","name":{"kind":"Name","value":"reviewReason"}}]}}]}}]}}]} as unknown as DocumentNode<SdkBankTransactionBookingsQuery, SdkBankTransactionBookingsQueryVariables>;
export const SdkPlatformRecordTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformRecordTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformRecordTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkRecordTypeFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkRecordTypeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformRecordType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"schema"}},{"kind":"Field","name":{"kind":"Name","value":"states"}},{"kind":"Field","name":{"kind":"Name","value":"initialState"}},{"kind":"Field","name":{"kind":"Name","value":"transitions"}},{"kind":"Field","name":{"kind":"Name","value":"displayTemplate"}},{"kind":"Field","name":{"kind":"Name","value":"deepLinkTemplate"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]} as unknown as DocumentNode<SdkPlatformRecordTypesQuery, SdkPlatformRecordTypesQueryVariables>;
export const SdkDefinePlatformRecordTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkDefinePlatformRecordType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DefineRecordTypeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"definePlatformRecordType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkRecordTypeFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkRecordTypeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformRecordType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"schema"}},{"kind":"Field","name":{"kind":"Name","value":"states"}},{"kind":"Field","name":{"kind":"Name","value":"initialState"}},{"kind":"Field","name":{"kind":"Name","value":"transitions"}},{"kind":"Field","name":{"kind":"Name","value":"displayTemplate"}},{"kind":"Field","name":{"kind":"Name","value":"deepLinkTemplate"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]} as unknown as DocumentNode<SdkDefinePlatformRecordTypeMutation, SdkDefinePlatformRecordTypeMutationVariables>;
export const SdkUpsertCustomRecordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpsertCustomRecord"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertCustomRecordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertCustomRecord"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCustomRecordFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCustomRecordFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"revision"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"effects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stepId"}},{"kind":"Field","name":{"kind":"Name","value":"objectType"}},{"kind":"Field","name":{"kind":"Name","value":"objectId"}},{"kind":"Field","name":{"kind":"Name","value":"reversed"}},{"kind":"Field","name":{"kind":"Name","value":"flowRunId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"runs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"templateKey"}},{"kind":"Field","name":{"kind":"Name","value":"trigger"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<SdkUpsertCustomRecordMutation, SdkUpsertCustomRecordMutationVariables>;
export const SdkDeleteCustomRecordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkDeleteCustomRecord"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRef"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"externalId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCustomRecord"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"externalId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"externalId"}}}]}]}}]} as unknown as DocumentNode<SdkDeleteCustomRecordMutation, SdkDeleteCustomRecordMutationVariables>;
export const SdkCustomRecordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkCustomRecord"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRef"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"externalId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customRecord"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"externalId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"externalId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCustomRecordFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCustomRecordFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"revision"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"effects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stepId"}},{"kind":"Field","name":{"kind":"Name","value":"objectType"}},{"kind":"Field","name":{"kind":"Name","value":"objectId"}},{"kind":"Field","name":{"kind":"Name","value":"reversed"}},{"kind":"Field","name":{"kind":"Name","value":"flowRunId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"runs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"templateKey"}},{"kind":"Field","name":{"kind":"Name","value":"trigger"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<SdkCustomRecordQuery, SdkCustomRecordQueryVariables>;
export const SdkCustomRecordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkCustomRecords"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRef"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"50"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customRecords"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCustomRecordFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nextCursor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCustomRecordFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"revision"}},{"kind":"Field","name":{"kind":"Name","value":"occurredAt"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"effects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stepId"}},{"kind":"Field","name":{"kind":"Name","value":"objectType"}},{"kind":"Field","name":{"kind":"Name","value":"objectId"}},{"kind":"Field","name":{"kind":"Name","value":"reversed"}},{"kind":"Field","name":{"kind":"Name","value":"flowRunId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"runs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"templateKey"}},{"kind":"Field","name":{"kind":"Name","value":"trigger"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<SdkCustomRecordsQuery, SdkCustomRecordsQueryVariables>;
export const SdkFlowTemplatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkFlowTemplates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flowTemplates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkFlowTemplateFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkFlowTemplateFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlowTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"recordType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"sourceFormat"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"checksum"}},{"kind":"Field","name":{"kind":"Name","value":"activatedAt"}}]}}]} as unknown as DocumentNode<SdkFlowTemplatesQuery, SdkFlowTemplatesQueryVariables>;
export const SdkSaveFlowTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkSaveFlowTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"source"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"format"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FlowTemplateFormat"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveFlowTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"source"},"value":{"kind":"Variable","name":{"kind":"Name","value":"source"}}},{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"Variable","name":{"kind":"Name","value":"format"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkFlowTemplateFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkFlowTemplateFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlowTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"recordType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"sourceFormat"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"checksum"}},{"kind":"Field","name":{"kind":"Name","value":"activatedAt"}}]}}]} as unknown as DocumentNode<SdkSaveFlowTemplateMutation, SdkSaveFlowTemplateMutationVariables>;
export const SdkActivateFlowTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkActivateFlowTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activateFlowTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"Argument","name":{"kind":"Name","value":"version"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkFlowTemplateFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkFlowTemplateFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlowTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"recordType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"sourceFormat"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"checksum"}},{"kind":"Field","name":{"kind":"Name","value":"activatedAt"}}]}}]} as unknown as DocumentNode<SdkActivateFlowTemplateMutation, SdkActivateFlowTemplateMutationVariables>;
export const SdkRetireFlowTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkRetireFlowTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"retireFlowTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkFlowTemplateFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkFlowTemplateFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlowTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"recordType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"sourceFormat"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"checksum"}},{"kind":"Field","name":{"kind":"Name","value":"activatedAt"}}]}}]} as unknown as DocumentNode<SdkRetireFlowTemplateMutation, SdkRetireFlowTemplateMutationVariables>;
export const SdkTestFlowTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkTestFlowTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"source"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"format"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FlowTemplateFormat"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"records"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRef"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testFlowTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"source"},"value":{"kind":"Variable","name":{"kind":"Name","value":"source"}}},{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"Variable","name":{"kind":"Name","value":"format"}}},{"kind":"Argument","name":{"kind":"Name","value":"records"},"value":{"kind":"Variable","name":{"kind":"Name","value":"records"}}},{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"valid"}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"runs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recordExternalId"}},{"kind":"Field","name":{"kind":"Name","value":"trigger"}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"plannedObjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stepId"}},{"kind":"Field","name":{"kind":"Name","value":"objectType"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SdkTestFlowTemplateMutation, SdkTestFlowTemplateMutationVariables>;
export const SdkFlowRunsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkFlowRuns"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"50"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flowRuns"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkFlowRunFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nextCursor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkFlowRunFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlowRun"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"templateKey"}},{"kind":"Field","name":{"kind":"Name","value":"templateVersion"}},{"kind":"Field","name":{"kind":"Name","value":"recordId"}},{"kind":"Field","name":{"kind":"Name","value":"trigger"}},{"kind":"Field","name":{"kind":"Name","value":"recordRevision"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"attempts"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"outputs"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"finishedAt"}}]}}]} as unknown as DocumentNode<SdkFlowRunsQuery, SdkFlowRunsQueryVariables>;
export const SdkRetryFlowRunDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkRetryFlowRun"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"retryFlowRun"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkFlowRunFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkFlowRunFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlowRun"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"templateKey"}},{"kind":"Field","name":{"kind":"Name","value":"templateVersion"}},{"kind":"Field","name":{"kind":"Name","value":"recordId"}},{"kind":"Field","name":{"kind":"Name","value":"trigger"}},{"kind":"Field","name":{"kind":"Name","value":"recordRevision"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"attempts"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"outputs"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"finishedAt"}}]}}]} as unknown as DocumentNode<SdkRetryFlowRunMutation, SdkRetryFlowRunMutationVariables>;
export const SdkPlatformReportDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformReport"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRef"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformReportInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformReport"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}},{"kind":"Field","name":{"kind":"Name","value":"asOf"}},{"kind":"Field","name":{"kind":"Name","value":"generatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformReportQuery, SdkPlatformReportQueryVariables>;
export const SdkPlatformReportDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformReportDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRef"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformReportInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"format"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReportFormat"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformReportDocument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"Variable","name":{"kind":"Name","value":"format"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCompanyDocumentFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCompanyDocumentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyDocument"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"sha256"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"downloadUrl"}},{"kind":"Field","name":{"kind":"Name","value":"downloadExpiresAt"}}]}}]} as unknown as DocumentNode<SdkPlatformReportDocumentQuery, SdkPlatformReportDocumentQueryVariables>;
export const SdkCompanyDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkCompanyDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRef"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"kind"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyDocumentKind"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectRef"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"params"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyDocument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}},{"kind":"Argument","name":{"kind":"Name","value":"kind"},"value":{"kind":"Variable","name":{"kind":"Name","value":"kind"}}},{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}},{"kind":"Argument","name":{"kind":"Name","value":"params"},"value":{"kind":"Variable","name":{"kind":"Name","value":"params"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCompanyDocumentFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCompanyDocumentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyDocument"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"sha256"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"downloadUrl"}},{"kind":"Field","name":{"kind":"Name","value":"downloadExpiresAt"}}]}}]} as unknown as DocumentNode<SdkCompanyDocumentQuery, SdkCompanyDocumentQueryVariables>;
export const SdkRequestXafExportDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkRequestXafExport"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRef"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"financialYear"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"from"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"to"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestXafExport"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}},{"kind":"Argument","name":{"kind":"Name","value":"financialYear"},"value":{"kind":"Variable","name":{"kind":"Name","value":"financialYear"}}},{"kind":"Argument","name":{"kind":"Name","value":"from"},"value":{"kind":"Variable","name":{"kind":"Name","value":"from"}}},{"kind":"Argument","name":{"kind":"Name","value":"to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"to"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkExportRunFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCompanyDocumentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyDocument"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"sha256"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"downloadUrl"}},{"kind":"Field","name":{"kind":"Name","value":"downloadExpiresAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkExportRunFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformExportRun"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"runDate"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"files"}},{"kind":"Field","name":{"kind":"Name","value":"rowCounts"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"finishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCompanyDocumentFields"}}]}}]}}]} as unknown as DocumentNode<SdkRequestXafExportMutation, SdkRequestXafExportMutationVariables>;
export const SdkPlatformExportDestinationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformExportDestinations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformExportDestinations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkExportDestinationFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkExportDestinationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformExportDestination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"endpoint"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"credentialsExpireAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastError"}}]}}]} as unknown as DocumentNode<SdkPlatformExportDestinationsQuery, SdkPlatformExportDestinationsQueryVariables>;
export const SdkPlatformExportSchedulesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformExportSchedules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformExportSchedules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkExportScheduleFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkExportDestinationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformExportDestination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"endpoint"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"credentialsExpireAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastError"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkExportScheduleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformExportSchedule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"destination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkExportDestinationFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"datasets"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"cron"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"companyScope"}},{"kind":"Field","name":{"kind":"Name","value":"pathTemplate"}},{"kind":"Field","name":{"kind":"Name","value":"compression"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lastRunAt"}},{"kind":"Field","name":{"kind":"Name","value":"nextRunAt"}}]}}]} as unknown as DocumentNode<SdkPlatformExportSchedulesQuery, SdkPlatformExportSchedulesQueryVariables>;
export const SdkPlatformExportRunDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformExportRun"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformExportRun"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkExportRunFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCompanyDocumentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyDocument"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"sha256"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"downloadUrl"}},{"kind":"Field","name":{"kind":"Name","value":"downloadExpiresAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkExportRunFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformExportRun"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"runDate"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"files"}},{"kind":"Field","name":{"kind":"Name","value":"rowCounts"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"finishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCompanyDocumentFields"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformExportRunQuery, SdkPlatformExportRunQueryVariables>;
export const SdkCreatePlatformExportDestinationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreatePlatformExportDestination"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateExportDestinationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPlatformExportDestination"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkExportDestinationFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkExportDestinationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformExportDestination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"endpoint"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"credentialsExpireAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastError"}}]}}]} as unknown as DocumentNode<SdkCreatePlatformExportDestinationMutation, SdkCreatePlatformExportDestinationMutationVariables>;
export const SdkUpdatePlatformExportDestinationCredentialsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpdatePlatformExportDestinationCredentials"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"credentials"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"credentialsExpireAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePlatformExportDestinationCredentials"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"Argument","name":{"kind":"Name","value":"credentials"},"value":{"kind":"Variable","name":{"kind":"Name","value":"credentials"}}},{"kind":"Argument","name":{"kind":"Name","value":"credentialsExpireAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"credentialsExpireAt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkExportDestinationFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkExportDestinationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformExportDestination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"endpoint"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"credentialsExpireAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastError"}}]}}]} as unknown as DocumentNode<SdkUpdatePlatformExportDestinationCredentialsMutation, SdkUpdatePlatformExportDestinationCredentialsMutationVariables>;
export const SdkDeletePlatformExportDestinationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkDeletePlatformExportDestination"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePlatformExportDestination"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}]}}]} as unknown as DocumentNode<SdkDeletePlatformExportDestinationMutation, SdkDeletePlatformExportDestinationMutationVariables>;
export const SdkCreatePlatformExportScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreatePlatformExportSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateExportScheduleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPlatformExportSchedule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkExportScheduleFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkExportDestinationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformExportDestination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"endpoint"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"credentialsExpireAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastError"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkExportScheduleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformExportSchedule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"destination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkExportDestinationFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"datasets"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"cron"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"companyScope"}},{"kind":"Field","name":{"kind":"Name","value":"pathTemplate"}},{"kind":"Field","name":{"kind":"Name","value":"compression"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lastRunAt"}},{"kind":"Field","name":{"kind":"Name","value":"nextRunAt"}}]}}]} as unknown as DocumentNode<SdkCreatePlatformExportScheduleMutation, SdkCreatePlatformExportScheduleMutationVariables>;
export const SdkUpdatePlatformExportScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpdatePlatformExportSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateExportScheduleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePlatformExportSchedule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkExportScheduleFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkExportDestinationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformExportDestination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"endpoint"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"credentialsExpireAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastError"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkExportScheduleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformExportSchedule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"destination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkExportDestinationFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"datasets"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"cron"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"companyScope"}},{"kind":"Field","name":{"kind":"Name","value":"pathTemplate"}},{"kind":"Field","name":{"kind":"Name","value":"compression"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lastRunAt"}},{"kind":"Field","name":{"kind":"Name","value":"nextRunAt"}}]}}]} as unknown as DocumentNode<SdkUpdatePlatformExportScheduleMutation, SdkUpdatePlatformExportScheduleMutationVariables>;
export const SdkRunPlatformExportNowDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkRunPlatformExportNow"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"runPlatformExportNow"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkExportRunFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCompanyDocumentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyDocument"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"sha256"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"downloadUrl"}},{"kind":"Field","name":{"kind":"Name","value":"downloadExpiresAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkExportRunFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformExportRun"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"runDate"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"files"}},{"kind":"Field","name":{"kind":"Name","value":"rowCounts"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"finishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCompanyDocumentFields"}}]}}]}}]} as unknown as DocumentNode<SdkRunPlatformExportNowMutation, SdkRunPlatformExportNowMutationVariables>;
export const SdkPlatformDocumentLayoutsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformDocumentLayouts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"documentType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformDocumentLayouts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"documentType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"documentType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkDocumentLayoutFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDocumentLayoutFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformDocumentLayout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"documentType"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"companyEditable"}},{"kind":"Field","name":{"kind":"Name","value":"unlockedBlockIds"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"warnings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ruleId"}},{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"severity"}},{"kind":"Field","name":{"kind":"Name","value":"legalRef"}},{"kind":"Field","name":{"kind":"Name","value":"verifyWithAdviser"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformDocumentLayoutsQuery, SdkPlatformDocumentLayoutsQueryVariables>;
export const SdkPlatformDocumentLayoutPreviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformDocumentLayoutPreview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"format"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformDocumentLayoutPreview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"Variable","name":{"kind":"Name","value":"format"}}}]}]}}]} as unknown as DocumentNode<SdkPlatformDocumentLayoutPreviewQuery, SdkPlatformDocumentLayoutPreviewQueryVariables>;
export const SdkValidateDocumentLayoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkValidateDocumentLayout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"documentType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"layout"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validateDocumentLayout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"documentType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"documentType"}}},{"kind":"Argument","name":{"kind":"Name","value":"layout"},"value":{"kind":"Variable","name":{"kind":"Name","value":"layout"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ruleId"}},{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"severity"}},{"kind":"Field","name":{"kind":"Name","value":"legalRef"}},{"kind":"Field","name":{"kind":"Name","value":"verifyWithAdviser"}}]}}]}}]} as unknown as DocumentNode<SdkValidateDocumentLayoutQuery, SdkValidateDocumentLayoutQueryVariables>;
export const SdkUpsertPlatformDocumentLayoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpsertPlatformDocumentLayout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertPlatformDocumentLayoutInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertPlatformDocumentLayout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkDocumentLayoutFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDocumentLayoutFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformDocumentLayout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"documentType"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"companyEditable"}},{"kind":"Field","name":{"kind":"Name","value":"unlockedBlockIds"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"warnings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ruleId"}},{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"severity"}},{"kind":"Field","name":{"kind":"Name","value":"legalRef"}},{"kind":"Field","name":{"kind":"Name","value":"verifyWithAdviser"}}]}}]}}]} as unknown as DocumentNode<SdkUpsertPlatformDocumentLayoutMutation, SdkUpsertPlatformDocumentLayoutMutationVariables>;
export const SdkActivatePlatformDocumentLayoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkActivatePlatformDocumentLayout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"makeDefault"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activatePlatformDocumentLayout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"makeDefault"},"value":{"kind":"Variable","name":{"kind":"Name","value":"makeDefault"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkDocumentLayoutFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDocumentLayoutFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformDocumentLayout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"documentType"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"companyEditable"}},{"kind":"Field","name":{"kind":"Name","value":"unlockedBlockIds"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"warnings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ruleId"}},{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"severity"}},{"kind":"Field","name":{"kind":"Name","value":"legalRef"}},{"kind":"Field","name":{"kind":"Name","value":"verifyWithAdviser"}}]}}]}}]} as unknown as DocumentNode<SdkActivatePlatformDocumentLayoutMutation, SdkActivatePlatformDocumentLayoutMutationVariables>;
export const SdkArchivePlatformDocumentLayoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkArchivePlatformDocumentLayout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"archivePlatformDocumentLayout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkDocumentLayoutFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDocumentLayoutFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformDocumentLayout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"documentType"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"companyEditable"}},{"kind":"Field","name":{"kind":"Name","value":"unlockedBlockIds"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"warnings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ruleId"}},{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"severity"}},{"kind":"Field","name":{"kind":"Name","value":"legalRef"}},{"kind":"Field","name":{"kind":"Name","value":"verifyWithAdviser"}}]}}]}}]} as unknown as DocumentNode<SdkArchivePlatformDocumentLayoutMutation, SdkArchivePlatformDocumentLayoutMutationVariables>;
export const SdkChooseDocumentLayoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkChooseDocumentLayout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"documentType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"platformDocumentLayoutId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chooseDocumentLayout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"documentType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"documentType"}}},{"kind":"Argument","name":{"kind":"Name","value":"platformDocumentLayoutId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"platformDocumentLayoutId"}}}]}]}}]} as unknown as DocumentNode<SdkChooseDocumentLayoutMutation, SdkChooseDocumentLayoutMutationVariables>;
export const SdkDocumentTemplatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkDocumentTemplates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"documentType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentTemplates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"documentType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"documentType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkDocumentTemplateFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDocumentTemplateFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"documentType"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"validationReport"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]} as unknown as DocumentNode<SdkDocumentTemplatesQuery, SdkDocumentTemplatesQueryVariables>;
export const SdkDocumentTemplatePreviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkDocumentTemplatePreview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fixture"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentTemplatePreview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"fixture"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fixture"}}}]}]}}]} as unknown as DocumentNode<SdkDocumentTemplatePreviewQuery, SdkDocumentTemplatePreviewQueryVariables>;
export const SdkUpsertDocumentTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpsertDocumentTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertDocumentTemplateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertDocumentTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkDocumentTemplateFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDocumentTemplateFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"documentType"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"validationReport"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]} as unknown as DocumentNode<SdkUpsertDocumentTemplateMutation, SdkUpsertDocumentTemplateMutationVariables>;
export const SdkValidateDocumentTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkValidateDocumentTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validateDocumentTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkDocumentTemplateFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDocumentTemplateFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"documentType"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"validationReport"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]} as unknown as DocumentNode<SdkValidateDocumentTemplateMutation, SdkValidateDocumentTemplateMutationVariables>;
export const SdkActivateDocumentTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkActivateDocumentTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"makeDefault"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activateDocumentTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"makeDefault"},"value":{"kind":"Variable","name":{"kind":"Name","value":"makeDefault"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkDocumentTemplateFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDocumentTemplateFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"documentType"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"validationReport"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]} as unknown as DocumentNode<SdkActivateDocumentTemplateMutation, SdkActivateDocumentTemplateMutationVariables>;
export const SdkArchiveDocumentTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkArchiveDocumentTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"archiveDocumentTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkDocumentTemplateFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDocumentTemplateFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"documentType"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"validationReport"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]} as unknown as DocumentNode<SdkArchiveDocumentTemplateMutation, SdkArchiveDocumentTemplateMutationVariables>;
export const SdkPlatformDocumentRenderSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformDocumentRenderSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformDocumentRenderSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentType"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}},{"kind":"Field","name":{"kind":"Name","value":"timeoutSeconds"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformDocumentRenderSettingsQuery, SdkPlatformDocumentRenderSettingsQueryVariables>;
export const SdkSetPlatformDocumentRenderSettingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkSetPlatformDocumentRenderSetting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"documentType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentRenderMode"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timeoutSeconds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setPlatformDocumentRenderSetting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"documentType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"documentType"}}},{"kind":"Argument","name":{"kind":"Name","value":"mode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mode"}}},{"kind":"Argument","name":{"kind":"Name","value":"timeoutSeconds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timeoutSeconds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentType"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}},{"kind":"Field","name":{"kind":"Name","value":"timeoutSeconds"}}]}}]}}]} as unknown as DocumentNode<SdkSetPlatformDocumentRenderSettingMutation, SdkSetPlatformDocumentRenderSettingMutationVariables>;
export const SdkDocumentRenderJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkDocumentRenderJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentRenderJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkDocumentRenderJobFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDocumentRenderJobFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentRenderJob"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"documentType"}},{"kind":"Field","name":{"kind":"Name","value":"entityId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"artifactId"}},{"kind":"Field","name":{"kind":"Name","value":"violations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ruleId"}},{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"severity"}},{"kind":"Field","name":{"kind":"Name","value":"legalRef"}},{"kind":"Field","name":{"kind":"Name","value":"verifyWithAdviser"}}]}}]}}]} as unknown as DocumentNode<SdkDocumentRenderJobQuery, SdkDocumentRenderJobQueryVariables>;
export const SdkAttachRenderedDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkAttachRenderedDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"jobId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pdfBase64"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uploadId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachRenderedDocument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"jobId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"jobId"}}},{"kind":"Argument","name":{"kind":"Name","value":"pdfBase64"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pdfBase64"}}},{"kind":"Argument","name":{"kind":"Name","value":"uploadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uploadId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkDocumentRenderJobFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDocumentRenderJobFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentRenderJob"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"documentType"}},{"kind":"Field","name":{"kind":"Name","value":"entityId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"artifactId"}},{"kind":"Field","name":{"kind":"Name","value":"violations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ruleId"}},{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"severity"}},{"kind":"Field","name":{"kind":"Name","value":"legalRef"}},{"kind":"Field","name":{"kind":"Name","value":"verifyWithAdviser"}}]}}]}}]} as unknown as DocumentNode<SdkAttachRenderedDocumentMutation, SdkAttachRenderedDocumentMutationVariables>;
export const SdkBrandFontsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkBrandFonts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ownerType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ownerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brandFonts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ownerType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ownerType"}}},{"kind":"Argument","name":{"kind":"Name","value":"ownerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ownerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"family"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"sizeBytes"}},{"kind":"Field","name":{"kind":"Name","value":"sha256"}}]}}]}}]} as unknown as DocumentNode<SdkBrandFontsQuery, SdkBrandFontsQueryVariables>;
export const SdkDeleteBrandFontDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkDeleteBrandFont"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteBrandFont"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<SdkDeleteBrandFontMutation, SdkDeleteBrandFontMutationVariables>;
export const SdkPlatformCustomDomainsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformCustomDomains"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformCustomDomains"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hostname"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"cnameTarget"}},{"kind":"Field","name":{"kind":"Name","value":"txtName"}},{"kind":"Field","name":{"kind":"Name","value":"txtValue"}},{"kind":"Field","name":{"kind":"Name","value":"lastCheckedAt"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformCustomDomainsQuery, SdkPlatformCustomDomainsQueryVariables>;
export const SdkAddPlatformCustomDomainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkAddPlatformCustomDomain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hostname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPlatformCustomDomain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hostname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hostname"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hostname"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"cnameTarget"}},{"kind":"Field","name":{"kind":"Name","value":"txtName"}},{"kind":"Field","name":{"kind":"Name","value":"txtValue"}},{"kind":"Field","name":{"kind":"Name","value":"lastCheckedAt"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<SdkAddPlatformCustomDomainMutation, SdkAddPlatformCustomDomainMutationVariables>;
export const SdkCheckPlatformCustomDomainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCheckPlatformCustomDomain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkPlatformCustomDomain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hostname"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"cnameTarget"}},{"kind":"Field","name":{"kind":"Name","value":"txtName"}},{"kind":"Field","name":{"kind":"Name","value":"txtValue"}},{"kind":"Field","name":{"kind":"Name","value":"lastCheckedAt"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<SdkCheckPlatformCustomDomainMutation, SdkCheckPlatformCustomDomainMutationVariables>;
export const SdkRemovePlatformCustomDomainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkRemovePlatformCustomDomain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removePlatformCustomDomain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<SdkRemovePlatformCustomDomainMutation, SdkRemovePlatformCustomDomainMutationVariables>;
export const SdkPlatformCustomActionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformCustomActions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformCustomActions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCustomActionFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCustomActionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformCustomAction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"placements"}},{"kind":"Field","name":{"kind":"Name","value":"contextType"}},{"kind":"Field","name":{"kind":"Name","value":"visibleWhen"}},{"kind":"Field","name":{"kind":"Name","value":"delivery"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}}]}}]} as unknown as DocumentNode<SdkPlatformCustomActionsQuery, SdkPlatformCustomActionsQueryVariables>;
export const SdkUpsertCustomActionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpsertCustomAction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertCustomActionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertCustomAction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCustomActionFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCustomActionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformCustomAction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"placements"}},{"kind":"Field","name":{"kind":"Name","value":"contextType"}},{"kind":"Field","name":{"kind":"Name","value":"visibleWhen"}},{"kind":"Field","name":{"kind":"Name","value":"delivery"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}}]}}]} as unknown as DocumentNode<SdkUpsertCustomActionMutation, SdkUpsertCustomActionMutationVariables>;
export const SdkDeleteCustomActionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkDeleteCustomAction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCustomAction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<SdkDeleteCustomActionMutation, SdkDeleteCustomActionMutationVariables>;
export const SdkInvokeCustomActionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkInvokeCustomAction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contextType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contextId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invokeCustomAction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"Argument","name":{"kind":"Name","value":"contextType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contextType"}}},{"kind":"Argument","name":{"kind":"Name","value":"contextId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contextId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"contextType"}},{"kind":"Field","name":{"kind":"Name","value":"contextId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"resourceType"}}]}}]}}]}}]} as unknown as DocumentNode<SdkInvokeCustomActionMutation, SdkInvokeCustomActionMutationVariables>;
export const SdkInvokeSlotItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkInvokeSlotItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slot"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contextType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contextId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invokeSlotItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slot"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slot"}}},{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"Argument","name":{"kind":"Name","value":"contextType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contextType"}}},{"kind":"Argument","name":{"kind":"Name","value":"contextId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contextId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"contextType"}},{"kind":"Field","name":{"kind":"Name","value":"contextId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"resourceType"}}]}}]}}]}}]} as unknown as DocumentNode<SdkInvokeSlotItemMutation, SdkInvokeSlotItemMutationVariables>;
export const SdkPlatformLinkTemplatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformLinkTemplates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformLinkTemplates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"resourceType"}},{"kind":"Field","name":{"kind":"Name","value":"urlTemplate"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformLinkTemplatesQuery, SdkPlatformLinkTemplatesQueryVariables>;
export const SdkUpsertLinkTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpsertLinkTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertLinkTemplateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertLinkTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"resourceType"}},{"kind":"Field","name":{"kind":"Name","value":"urlTemplate"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]} as unknown as DocumentNode<SdkUpsertLinkTemplateMutation, SdkUpsertLinkTemplateMutationVariables>;
export const SdkDeleteLinkTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkDeleteLinkTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteLinkTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<SdkDeleteLinkTemplateMutation, SdkDeleteLinkTemplateMutationVariables>;
export const SdkPartnerLinksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPartnerLinks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objectType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"partnerLinks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objectType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objectType"}}},{"kind":"Argument","name":{"kind":"Name","value":"objectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"resourceType"}}]}}]}}]} as unknown as DocumentNode<SdkPartnerLinksQuery, SdkPartnerLinksQueryVariables>;
export const SdkCustomFieldDefinitionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkCustomFieldDefinitions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entityType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customFieldDefinitions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entityType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCustomFieldDefinitionFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCustomFieldDefinitionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"options"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"editableBy"}},{"kind":"Field","name":{"kind":"Name","value":"showIn"}},{"kind":"Field","name":{"kind":"Name","value":"includeInEvents"}},{"kind":"Field","name":{"kind":"Name","value":"includeOnDocuments"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"archived"}}]}}]} as unknown as DocumentNode<SdkCustomFieldDefinitionsQuery, SdkCustomFieldDefinitionsQueryVariables>;
export const SdkUpsertCustomFieldDefinitionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpsertCustomFieldDefinition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertCustomFieldDefinitionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertCustomFieldDefinition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCustomFieldDefinitionFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCustomFieldDefinitionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"options"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"editableBy"}},{"kind":"Field","name":{"kind":"Name","value":"showIn"}},{"kind":"Field","name":{"kind":"Name","value":"includeInEvents"}},{"kind":"Field","name":{"kind":"Name","value":"includeOnDocuments"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"archived"}}]}}]} as unknown as DocumentNode<SdkUpsertCustomFieldDefinitionMutation, SdkUpsertCustomFieldDefinitionMutationVariables>;
export const SdkArchiveCustomFieldDefinitionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkArchiveCustomFieldDefinition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"archiveCustomFieldDefinition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCustomFieldDefinitionFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCustomFieldDefinitionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomFieldDefinition"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"options"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"editableBy"}},{"kind":"Field","name":{"kind":"Name","value":"showIn"}},{"kind":"Field","name":{"kind":"Name","value":"includeInEvents"}},{"kind":"Field","name":{"kind":"Name","value":"includeOnDocuments"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"archived"}}]}}]} as unknown as DocumentNode<SdkArchiveCustomFieldDefinitionMutation, SdkArchiveCustomFieldDefinitionMutationVariables>;
export const SdkCustomFieldValuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkCustomFieldValues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entityType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customFieldValues"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entityType"}}},{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entityId"}}}]}]}}]} as unknown as DocumentNode<SdkCustomFieldValuesQuery, SdkCustomFieldValuesQueryVariables>;
export const SdkSetCustomFieldValuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkSetCustomFieldValues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entityType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"values"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setCustomFieldValues"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entityType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entityType"}}},{"kind":"Argument","name":{"kind":"Name","value":"entityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entityId"}}},{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"Variable","name":{"kind":"Name","value":"values"}}}]}]}}]} as unknown as DocumentNode<SdkSetCustomFieldValuesMutation, SdkSetCustomFieldValuesMutationVariables>;
export const SdkFieldControlsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkFieldControls"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"view"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldControls"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"view"},"value":{"kind":"Variable","name":{"kind":"Name","value":"view"}}},{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"view"}},{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}},{"kind":"Field","name":{"kind":"Name","value":"presetValue"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}}]}}]}}]} as unknown as DocumentNode<SdkFieldControlsQuery, SdkFieldControlsQueryVariables>;
export const SdkSetFieldControlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkSetFieldControl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetFieldControlInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setFieldControl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"view"}},{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}},{"kind":"Field","name":{"kind":"Name","value":"presetValue"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}}]}}]}}]} as unknown as DocumentNode<SdkSetFieldControlMutation, SdkSetFieldControlMutationVariables>;
export const SdkClearFieldControlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkClearFieldControl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"view"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"field"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clearFieldControl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"view"},"value":{"kind":"Variable","name":{"kind":"Name","value":"view"}}},{"kind":"Argument","name":{"kind":"Name","value":"field"},"value":{"kind":"Variable","name":{"kind":"Name","value":"field"}}},{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}}]}]}}]} as unknown as DocumentNode<SdkClearFieldControlMutation, SdkClearFieldControlMutationVariables>;
export const SdkSuspendPlatformCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkSuspendPlatformCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reason"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"displayMessage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"suspendPlatformCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"reason"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reason"}}},{"kind":"Argument","name":{"kind":"Name","value":"displayMessage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"displayMessage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkLifecycleCompanyFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCompanyLifecycleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyLifecycle"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"changedAt"}},{"kind":"Field","name":{"kind":"Name","value":"suspendedBy"}},{"kind":"Field","name":{"kind":"Name","value":"displayMessage"}},{"kind":"Field","name":{"kind":"Name","value":"closeEffectiveDate"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"retentionUntil"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkLifecycleCompanyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformCompany"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"lifecycle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCompanyLifecycleFields"}}]}}]}}]} as unknown as DocumentNode<SdkSuspendPlatformCompanyMutation, SdkSuspendPlatformCompanyMutationVariables>;
export const SdkReactivatePlatformCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkReactivatePlatformCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reactivatePlatformCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkLifecycleCompanyFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCompanyLifecycleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyLifecycle"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"changedAt"}},{"kind":"Field","name":{"kind":"Name","value":"suspendedBy"}},{"kind":"Field","name":{"kind":"Name","value":"displayMessage"}},{"kind":"Field","name":{"kind":"Name","value":"closeEffectiveDate"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"retentionUntil"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkLifecycleCompanyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformCompany"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"lifecycle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCompanyLifecycleFields"}}]}}]}}]} as unknown as DocumentNode<SdkReactivatePlatformCompanyMutation, SdkReactivatePlatformCompanyMutationVariables>;
export const SdkClosePlatformCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkClosePlatformCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"effectiveDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reason"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"closePlatformCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"effectiveDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"effectiveDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"reason"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reason"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkLifecycleCompanyFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCompanyLifecycleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyLifecycle"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"changedAt"}},{"kind":"Field","name":{"kind":"Name","value":"suspendedBy"}},{"kind":"Field","name":{"kind":"Name","value":"displayMessage"}},{"kind":"Field","name":{"kind":"Name","value":"closeEffectiveDate"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"retentionUntil"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkLifecycleCompanyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformCompany"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"lifecycle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCompanyLifecycleFields"}}]}}]}}]} as unknown as DocumentNode<SdkClosePlatformCompanyMutation, SdkClosePlatformCompanyMutationVariables>;
export const SdkReopenPlatformCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkReopenPlatformCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reopenPlatformCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkLifecycleCompanyFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCompanyLifecycleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyLifecycle"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"changedAt"}},{"kind":"Field","name":{"kind":"Name","value":"suspendedBy"}},{"kind":"Field","name":{"kind":"Name","value":"displayMessage"}},{"kind":"Field","name":{"kind":"Name","value":"closeEffectiveDate"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"retentionUntil"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkLifecycleCompanyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformCompany"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"lifecycle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCompanyLifecycleFields"}}]}}]}}]} as unknown as DocumentNode<SdkReopenPlatformCompanyMutation, SdkReopenPlatformCompanyMutationVariables>;
export const SdkArchivePlatformCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkArchivePlatformCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"archivePlatformCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkLifecycleCompanyFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCompanyLifecycleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyLifecycle"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"changedAt"}},{"kind":"Field","name":{"kind":"Name","value":"suspendedBy"}},{"kind":"Field","name":{"kind":"Name","value":"displayMessage"}},{"kind":"Field","name":{"kind":"Name","value":"closeEffectiveDate"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"retentionUntil"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkLifecycleCompanyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformCompany"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"lifecycle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCompanyLifecycleFields"}}]}}]}}]} as unknown as DocumentNode<SdkArchivePlatformCompanyMutation, SdkArchivePlatformCompanyMutationVariables>;
export const SdkCompanyClosingChecklistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkCompanyClosingChecklist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"effectiveDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyClosingChecklist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"effectiveDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"effectiveDate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"blocking"}},{"kind":"Field","name":{"kind":"Name","value":"done"}},{"kind":"Field","name":{"kind":"Name","value":"filingId"}}]}}]}}]} as unknown as DocumentNode<SdkCompanyClosingChecklistQuery, SdkCompanyClosingChecklistQueryVariables>;
export const SdkCompanyTransferStatementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkCompanyTransferStatement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"target"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyTransferTarget"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyTransferStatement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"target"},"value":{"kind":"Variable","name":{"kind":"Name","value":"target"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"paragraphs"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]} as unknown as DocumentNode<SdkCompanyTransferStatementQuery, SdkCompanyTransferStatementQueryVariables>;
export const SdkCompanyTransfersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkCompanyTransfers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyTransfers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCompanyTransferFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCompanyTransferFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyTransfer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}}]}}]} as unknown as DocumentNode<SdkCompanyTransfersQuery, SdkCompanyTransfersQueryVariables>;
export const SdkCancelCompanyTransferDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCancelCompanyTransfer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transferId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cancelCompanyTransfer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transferId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transferId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCompanyTransferFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCompanyTransferFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyTransfer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}}]}}]} as unknown as DocumentNode<SdkCancelCompanyTransferMutation, SdkCancelCompanyTransferMutationVariables>;
export const SdkAcceptCompanyTransferDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkAcceptCompanyTransfer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"externalId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acceptCompanyTransfer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"externalId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"externalId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkLifecycleCompanyFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkCompanyLifecycleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyLifecycle"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"changedAt"}},{"kind":"Field","name":{"kind":"Name","value":"suspendedBy"}},{"kind":"Field","name":{"kind":"Name","value":"displayMessage"}},{"kind":"Field","name":{"kind":"Name","value":"closeEffectiveDate"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"retentionUntil"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkLifecycleCompanyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformCompany"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"lifecycle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkCompanyLifecycleFields"}}]}}]}}]} as unknown as DocumentNode<SdkAcceptCompanyTransferMutation, SdkAcceptCompanyTransferMutationVariables>;
export const SdkDeprovisionPlatformUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkDeprovisionPlatformUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"anonymise"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deprovisionPlatformUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"anonymise"},"value":{"kind":"Variable","name":{"kind":"Name","value":"anonymise"}}}]}]}}]} as unknown as DocumentNode<SdkDeprovisionPlatformUserMutation, SdkDeprovisionPlatformUserMutationVariables>;
export const SdkPlatformAuditLogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformAuditLogs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformAuditLogFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformAuditLogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nextCursor"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"at"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"actorKind"}},{"kind":"Field","name":{"kind":"Name","value":"platformUserId"}},{"kind":"Field","name":{"kind":"Name","value":"platformUserExternalId"}},{"kind":"Field","name":{"kind":"Name","value":"actorLabel"}},{"kind":"Field","name":{"kind":"Name","value":"tokenType"}},{"kind":"Field","name":{"kind":"Name","value":"ip"}},{"kind":"Field","name":{"kind":"Name","value":"userAgent"}},{"kind":"Field","name":{"kind":"Name","value":"stepUpAssertionId"}},{"kind":"Field","name":{"kind":"Name","value":"supportGrantId"}},{"kind":"Field","name":{"kind":"Name","value":"requestId"}},{"kind":"Field","name":{"kind":"Name","value":"targetType"}},{"kind":"Field","name":{"kind":"Name","value":"targetId"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}}]}}]}}]}}]} as unknown as DocumentNode<SdkPlatformAuditLogsQuery, SdkPlatformAuditLogsQueryVariables>;
export const SdkRequestAuditLogExportDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkRequestAuditLogExport"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformAuditLogFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestAuditLogExport"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"runDate"}}]}}]}}]} as unknown as DocumentNode<SdkRequestAuditLogExportMutation, SdkRequestAuditLogExportMutationVariables>;
export const SdkMessageCatalogueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkMessageCatalogue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messageCatalogue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"audiences"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"platformDefault"}},{"kind":"Field","name":{"kind":"Name","value":"platformMayChange"}},{"kind":"Field","name":{"kind":"Name","value":"allowedRoutings"}},{"kind":"Field","name":{"kind":"Name","value":"digestAllowed"}}]}}]}}]} as unknown as DocumentNode<SdkMessageCatalogueQuery, SdkMessageCatalogueQueryVariables>;
export const SdkPlatformMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformMessages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformMessageFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformMessages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkMessageFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkMessageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformMessageView"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"routing"}},{"kind":"Field","name":{"kind":"Name","value":"routingReason"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"ackRequired"}},{"kind":"Field","name":{"kind":"Name","value":"ackDeadline"}},{"kind":"Field","name":{"kind":"Name","value":"acknowledgedAt"}},{"kind":"Field","name":{"kind":"Name","value":"readAt"}},{"kind":"Field","name":{"kind":"Name","value":"escalationStage"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SdkPlatformMessagesQuery, SdkPlatformMessagesQueryVariables>;
export const SdkAcknowledgeMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkAcknowledgeMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AcknowledgeMessageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acknowledgeMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkMessageFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkMessageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformMessageView"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"routing"}},{"kind":"Field","name":{"kind":"Name","value":"routingReason"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"ackRequired"}},{"kind":"Field","name":{"kind":"Name","value":"ackDeadline"}},{"kind":"Field","name":{"kind":"Name","value":"acknowledgedAt"}},{"kind":"Field","name":{"kind":"Name","value":"readAt"}},{"kind":"Field","name":{"kind":"Name","value":"escalationStage"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SdkAcknowledgeMessageMutation, SdkAcknowledgeMessageMutationVariables>;
export const SdkAcknowledgeMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkAcknowledgeMessages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inputs"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AcknowledgeMessageInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acknowledgeMessages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"inputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkMessageFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkMessageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformMessageView"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"routing"}},{"kind":"Field","name":{"kind":"Name","value":"routingReason"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"ackRequired"}},{"kind":"Field","name":{"kind":"Name","value":"ackDeadline"}},{"kind":"Field","name":{"kind":"Name","value":"acknowledgedAt"}},{"kind":"Field","name":{"kind":"Name","value":"readAt"}},{"kind":"Field","name":{"kind":"Name","value":"escalationStage"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SdkAcknowledgeMessagesMutation, SdkAcknowledgeMessagesMutationVariables>;
export const SdkMarkMessageReadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkMarkMessageRead"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markMessageRead"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkMessageFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkMessageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformMessageView"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"routing"}},{"kind":"Field","name":{"kind":"Name","value":"routingReason"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"ackRequired"}},{"kind":"Field","name":{"kind":"Name","value":"ackDeadline"}},{"kind":"Field","name":{"kind":"Name","value":"acknowledgedAt"}},{"kind":"Field","name":{"kind":"Name","value":"readAt"}},{"kind":"Field","name":{"kind":"Name","value":"escalationStage"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SdkMarkMessageReadMutation, SdkMarkMessageReadMutationVariables>;
export const SdkResendPlatformMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkResendPlatformMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resendPlatformMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkMessageFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkMessageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformMessageView"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"routing"}},{"kind":"Field","name":{"kind":"Name","value":"routingReason"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"ackRequired"}},{"kind":"Field","name":{"kind":"Name","value":"ackDeadline"}},{"kind":"Field","name":{"kind":"Name","value":"acknowledgedAt"}},{"kind":"Field","name":{"kind":"Name","value":"readAt"}},{"kind":"Field","name":{"kind":"Name","value":"escalationStage"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SdkResendPlatformMessageMutation, SdkResendPlatformMessageMutationVariables>;
export const SdkPlatformMessageRoutingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformMessageRouting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformMessageRouting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkMessageRoutingRuleFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkMessageRoutingRuleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MessageRoutingRuleView"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"scope"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"routing"}},{"kind":"Field","name":{"kind":"Name","value":"channels"}},{"kind":"Field","name":{"kind":"Name","value":"digestWindow"}}]}}]} as unknown as DocumentNode<SdkPlatformMessageRoutingQuery, SdkPlatformMessageRoutingQueryVariables>;
export const SdkSetPlatformMessageRoutingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkSetPlatformMessageRouting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetMessageRoutingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setPlatformMessageRouting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkMessageRoutingRuleFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkMessageRoutingRuleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MessageRoutingRuleView"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"scope"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"routing"}},{"kind":"Field","name":{"kind":"Name","value":"channels"}},{"kind":"Field","name":{"kind":"Name","value":"digestWindow"}}]}}]} as unknown as DocumentNode<SdkSetPlatformMessageRoutingMutation, SdkSetPlatformMessageRoutingMutationVariables>;
export const SdkClearPlatformMessageRoutingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkClearPlatformMessageRouting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clearPlatformMessageRouting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<SdkClearPlatformMessageRoutingMutation, SdkClearPlatformMessageRoutingMutationVariables>;
export const SdkPlatformMessageSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformMessageSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformMessageSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkMessageSettingsFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkMessageSettingsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformMessageSettingsView"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"digestHourLocal"}},{"kind":"Field","name":{"kind":"Name","value":"ackTimeoutMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"criticalAckTimeoutMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"criticalEmailFallback"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackAfterMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"includeEmailHtml"}},{"kind":"Field","name":{"kind":"Name","value":"quietHoursStart"}},{"kind":"Field","name":{"kind":"Name","value":"quietHoursEnd"}},{"kind":"Field","name":{"kind":"Name","value":"quietHoursTimezone"}}]}}]} as unknown as DocumentNode<SdkPlatformMessageSettingsQuery, SdkPlatformMessageSettingsQueryVariables>;
export const SdkUpdatePlatformMessageSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpdatePlatformMessageSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePlatformMessageSettingsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePlatformMessageSettings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkMessageSettingsFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkMessageSettingsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformMessageSettingsView"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"digestHourLocal"}},{"kind":"Field","name":{"kind":"Name","value":"ackTimeoutMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"criticalAckTimeoutMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"criticalEmailFallback"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackAfterMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"includeEmailHtml"}},{"kind":"Field","name":{"kind":"Name","value":"quietHoursStart"}},{"kind":"Field","name":{"kind":"Name","value":"quietHoursEnd"}},{"kind":"Field","name":{"kind":"Name","value":"quietHoursTimezone"}}]}}]} as unknown as DocumentNode<SdkUpdatePlatformMessageSettingsMutation, SdkUpdatePlatformMessageSettingsMutationVariables>;
export const SdkPlatformSenderDomainsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformSenderDomains"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformSenderDomains"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkSenderDomainFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkSenderDomainFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformSenderDomain"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}},{"kind":"Field","name":{"kind":"Name","value":"fromLocalPart"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lastError"}},{"kind":"Field","name":{"kind":"Name","value":"lastCheckedAt"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dnsRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformSenderDomainsQuery, SdkPlatformSenderDomainsQueryVariables>;
export const SdkCreatePlatformSenderDomainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreatePlatformSenderDomain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePlatformSenderDomainInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPlatformSenderDomain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkSenderDomainFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkSenderDomainFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformSenderDomain"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}},{"kind":"Field","name":{"kind":"Name","value":"fromLocalPart"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lastError"}},{"kind":"Field","name":{"kind":"Name","value":"lastCheckedAt"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dnsRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}}]}}]}}]} as unknown as DocumentNode<SdkCreatePlatformSenderDomainMutation, SdkCreatePlatformSenderDomainMutationVariables>;
export const SdkVerifyPlatformSenderDomainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkVerifyPlatformSenderDomain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyPlatformSenderDomain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkSenderDomainFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkSenderDomainFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformSenderDomain"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}},{"kind":"Field","name":{"kind":"Name","value":"fromLocalPart"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lastError"}},{"kind":"Field","name":{"kind":"Name","value":"lastCheckedAt"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dnsRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}}]}}]}}]} as unknown as DocumentNode<SdkVerifyPlatformSenderDomainMutation, SdkVerifyPlatformSenderDomainMutationVariables>;
export const SdkDisablePlatformSenderDomainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkDisablePlatformSenderDomain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disablePlatformSenderDomain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkSenderDomainFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkSenderDomainFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformSenderDomain"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}},{"kind":"Field","name":{"kind":"Name","value":"fromLocalPart"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"lastError"}},{"kind":"Field","name":{"kind":"Name","value":"lastCheckedAt"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dnsRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}}]}}]}}]} as unknown as DocumentNode<SdkDisablePlatformSenderDomainMutation, SdkDisablePlatformSenderDomainMutationVariables>;
export const SdkPlatformMessageCopyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformMessageCopy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformMessageCopy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"template"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformMessageCopyQuery, SdkPlatformMessageCopyQueryVariables>;
export const SdkPreviewPlatformMessageCopyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPreviewPlatformMessageCopy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"variant"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"template"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"previewPlatformMessageCopy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"variant"},"value":{"kind":"Variable","name":{"kind":"Name","value":"variant"}}},{"kind":"Argument","name":{"kind":"Name","value":"template"},"value":{"kind":"Variable","name":{"kind":"Name","value":"template"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"problems"}}]}}]}}]} as unknown as DocumentNode<SdkPreviewPlatformMessageCopyQuery, SdkPreviewPlatformMessageCopyQueryVariables>;
export const SdkSetPlatformMessageCopyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkSetPlatformMessageCopy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetPlatformMessageCopyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setPlatformMessageCopy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"template"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}}]}}]} as unknown as DocumentNode<SdkSetPlatformMessageCopyMutation, SdkSetPlatformMessageCopyMutationVariables>;
export const SdkClearPlatformMessageCopyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkClearPlatformMessageCopy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clearPlatformMessageCopy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<SdkClearPlatformMessageCopyMutation, SdkClearPlatformMessageCopyMutationVariables>;
export const SdkMyNotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkMyNotifications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"unreadOnly"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myNotifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"unreadOnly"},"value":{"kind":"Variable","name":{"kind":"Name","value":"unreadOnly"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unreadCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"ctaLabel"}},{"kind":"Field","name":{"kind":"Name","value":"severity"}},{"kind":"Field","name":{"kind":"Name","value":"deepLink"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"readAt"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SdkMyNotificationsQuery, SdkMyNotificationsQueryVariables>;
export const SdkMarkNotificationsReadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkMarkNotificationsRead"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"all"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markNotificationsRead"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}},{"kind":"Argument","name":{"kind":"Name","value":"all"},"value":{"kind":"Variable","name":{"kind":"Name","value":"all"}}},{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}}]}]}}]} as unknown as DocumentNode<SdkMarkNotificationsReadMutation, SdkMarkNotificationsReadMutationVariables>;
export const SdkSetNotificationPreferenceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkSetNotificationPreference"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetNotificationPreferenceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setNotificationPreference"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"channel"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"digest"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"locked"}}]}}]}}]} as unknown as DocumentNode<SdkSetNotificationPreferenceMutation, SdkSetNotificationPreferenceMutationVariables>;
export const SdkMonetaryAccountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkMonetaryAccounts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MonetaryAccountFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MonetaryAccountSort"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monetaryAccounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"paging"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"iban"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<SdkMonetaryAccountsQuery, SdkMonetaryAccountsQueryVariables>;
export const SdkMonetaryAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkMonetaryAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monetaryAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"iban"}},{"kind":"Field","name":{"kind":"Name","value":"bic"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"ledger"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkMonetaryAccountQuery, SdkMonetaryAccountQueryVariables>;
export const SdkCreateMonetaryAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreateMonetaryAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMonetaryAccountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneMonetaryAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<SdkCreateMonetaryAccountMutation, SdkCreateMonetaryAccountMutationVariables>;
export const SdkUpdateMonetaryAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpdateMonetaryAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateOneMonetaryAccountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOneMonetaryAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkUpdateMonetaryAccountMutation, SdkUpdateMonetaryAccountMutationVariables>;
export const SdkDeleteMonetaryAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkDeleteMonetaryAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteOneMonetaryAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SdkDeleteMonetaryAccountMutation, SdkDeleteMonetaryAccountMutationVariables>;
export const SdkMonetaryAccountPaymentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkMonetaryAccountPayments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MonetaryAccountPaymentFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MonetaryAccountPaymentSort"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monetaryAccountPayments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"paging"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"processed"}},{"kind":"Field","name":{"kind":"Name","value":"monetaryAccountId"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<SdkMonetaryAccountPaymentsQuery, SdkMonetaryAccountPaymentsQueryVariables>;
export const SdkMonetaryAccountPaymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkMonetaryAccountPayment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"monetaryAccountPayment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"processed"}},{"kind":"Field","name":{"kind":"Name","value":"monetaryAccountId"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkMonetaryAccountPaymentQuery, SdkMonetaryAccountPaymentQueryVariables>;
export const SdkCreateMonetaryAccountPaymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreateMonetaryAccountPayment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"monetaryAccountId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMonetaryAccountPaymentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneMonetaryAccountPayment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"monetaryAccountId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"monetaryAccountId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SdkCreateMonetaryAccountPaymentMutation, SdkCreateMonetaryAccountPaymentMutationVariables>;
export const SdkDeleteMonetaryAccountPaymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkDeleteMonetaryAccountPayment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteOneMonetaryAccountPayment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SdkDeleteMonetaryAccountPaymentMutation, SdkDeleteMonetaryAccountPaymentMutationVariables>;
export const SdkProcessMonetaryAccountPaymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkProcessMonetaryAccountPayment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProcessMonetaryAccountPaymentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processMonetaryAccountPayment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}}]}}]} as unknown as DocumentNode<SdkProcessMonetaryAccountPaymentMutation, SdkProcessMonetaryAccountPaymentMutationVariables>;
export const SdkPlatformProvidersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformProviders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformProviders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformProvidersQuery, SdkPlatformProvidersQueryVariables>;
export const SdkUpsertPlatformProviderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpsertPlatformProvider"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertPlatformProviderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertPlatformProvider"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"mode"}},{"kind":"Field","name":{"kind":"Name","value":"config"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}}]}}]}}]} as unknown as DocumentNode<SdkUpsertPlatformProviderMutation, SdkUpsertPlatformProviderMutationVariables>;
export const SdkPaymentRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPaymentRequests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRef"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentRequestStatus"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkPaymentRequestFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nextCursor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPaymentRequestFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentRequest"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"amountMinor"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"endToEndId"}},{"kind":"Field","name":{"kind":"Name","value":"taxFilingId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentBatchId"}},{"kind":"Field","name":{"kind":"Name","value":"pain001Url"}},{"kind":"Field","name":{"kind":"Name","value":"partnerReference"}},{"kind":"Field","name":{"kind":"Name","value":"paidAt"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creditorName"}},{"kind":"Field","name":{"kind":"Name","value":"iban"}},{"kind":"Field","name":{"kind":"Name","value":"bic"}},{"kind":"Field","name":{"kind":"Name","value":"amountMinor"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"remittance"}},{"kind":"Field","name":{"kind":"Name","value":"structuredReference"}},{"kind":"Field","name":{"kind":"Name","value":"endToEndId"}},{"kind":"Field","name":{"kind":"Name","value":"paid"}}]}}]}}]} as unknown as DocumentNode<SdkPaymentRequestsQuery, SdkPaymentRequestsQueryVariables>;
export const SdkPaymentRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPaymentRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkPaymentRequestFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPaymentRequestFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentRequest"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"amountMinor"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"endToEndId"}},{"kind":"Field","name":{"kind":"Name","value":"taxFilingId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentBatchId"}},{"kind":"Field","name":{"kind":"Name","value":"pain001Url"}},{"kind":"Field","name":{"kind":"Name","value":"partnerReference"}},{"kind":"Field","name":{"kind":"Name","value":"paidAt"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creditorName"}},{"kind":"Field","name":{"kind":"Name","value":"iban"}},{"kind":"Field","name":{"kind":"Name","value":"bic"}},{"kind":"Field","name":{"kind":"Name","value":"amountMinor"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"remittance"}},{"kind":"Field","name":{"kind":"Name","value":"structuredReference"}},{"kind":"Field","name":{"kind":"Name","value":"endToEndId"}},{"kind":"Field","name":{"kind":"Name","value":"paid"}}]}}]}}]} as unknown as DocumentNode<SdkPaymentRequestQuery, SdkPaymentRequestQueryVariables>;
export const SdkCreateTaxPaymentRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreateTaxPaymentRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRef"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taxFilingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTaxPaymentRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}},{"kind":"Argument","name":{"kind":"Name","value":"taxFilingId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taxFilingId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkPaymentRequestFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPaymentRequestFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentRequest"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"amountMinor"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"endToEndId"}},{"kind":"Field","name":{"kind":"Name","value":"taxFilingId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentBatchId"}},{"kind":"Field","name":{"kind":"Name","value":"pain001Url"}},{"kind":"Field","name":{"kind":"Name","value":"partnerReference"}},{"kind":"Field","name":{"kind":"Name","value":"paidAt"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creditorName"}},{"kind":"Field","name":{"kind":"Name","value":"iban"}},{"kind":"Field","name":{"kind":"Name","value":"bic"}},{"kind":"Field","name":{"kind":"Name","value":"amountMinor"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"remittance"}},{"kind":"Field","name":{"kind":"Name","value":"structuredReference"}},{"kind":"Field","name":{"kind":"Name","value":"endToEndId"}},{"kind":"Field","name":{"kind":"Name","value":"paid"}}]}}]}}]} as unknown as DocumentNode<SdkCreateTaxPaymentRequestMutation, SdkCreateTaxPaymentRequestMutationVariables>;
export const SdkCreatePaymentRequestFromBatchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreatePaymentRequestFromBatch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRef"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentBatchId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPaymentRequestFromBatch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentBatchId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentBatchId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkPaymentRequestFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPaymentRequestFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentRequest"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"amountMinor"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"endToEndId"}},{"kind":"Field","name":{"kind":"Name","value":"taxFilingId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentBatchId"}},{"kind":"Field","name":{"kind":"Name","value":"pain001Url"}},{"kind":"Field","name":{"kind":"Name","value":"partnerReference"}},{"kind":"Field","name":{"kind":"Name","value":"paidAt"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creditorName"}},{"kind":"Field","name":{"kind":"Name","value":"iban"}},{"kind":"Field","name":{"kind":"Name","value":"bic"}},{"kind":"Field","name":{"kind":"Name","value":"amountMinor"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"remittance"}},{"kind":"Field","name":{"kind":"Name","value":"structuredReference"}},{"kind":"Field","name":{"kind":"Name","value":"endToEndId"}},{"kind":"Field","name":{"kind":"Name","value":"paid"}}]}}]}}]} as unknown as DocumentNode<SdkCreatePaymentRequestFromBatchMutation, SdkCreatePaymentRequestFromBatchMutationVariables>;
export const SdkReportPaymentRequestStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkReportPaymentRequestStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReportPaymentRequestStatusInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reportPaymentRequestStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkPaymentRequestFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPaymentRequestFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentRequest"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"amountMinor"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"endToEndId"}},{"kind":"Field","name":{"kind":"Name","value":"taxFilingId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentBatchId"}},{"kind":"Field","name":{"kind":"Name","value":"pain001Url"}},{"kind":"Field","name":{"kind":"Name","value":"partnerReference"}},{"kind":"Field","name":{"kind":"Name","value":"paidAt"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creditorName"}},{"kind":"Field","name":{"kind":"Name","value":"iban"}},{"kind":"Field","name":{"kind":"Name","value":"bic"}},{"kind":"Field","name":{"kind":"Name","value":"amountMinor"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"remittance"}},{"kind":"Field","name":{"kind":"Name","value":"structuredReference"}},{"kind":"Field","name":{"kind":"Name","value":"endToEndId"}},{"kind":"Field","name":{"kind":"Name","value":"paid"}}]}}]}}]} as unknown as DocumentNode<SdkReportPaymentRequestStatusMutation, SdkReportPaymentRequestStatusMutationVariables>;
export const SdkCancelPaymentRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCancelPaymentRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cancelPaymentRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkPaymentRequestFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPaymentRequestFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PaymentRequest"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"amountMinor"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"endToEndId"}},{"kind":"Field","name":{"kind":"Name","value":"taxFilingId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentBatchId"}},{"kind":"Field","name":{"kind":"Name","value":"pain001Url"}},{"kind":"Field","name":{"kind":"Name","value":"partnerReference"}},{"kind":"Field","name":{"kind":"Name","value":"paidAt"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creditorName"}},{"kind":"Field","name":{"kind":"Name","value":"iban"}},{"kind":"Field","name":{"kind":"Name","value":"bic"}},{"kind":"Field","name":{"kind":"Name","value":"amountMinor"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"remittance"}},{"kind":"Field","name":{"kind":"Name","value":"structuredReference"}},{"kind":"Field","name":{"kind":"Name","value":"endToEndId"}},{"kind":"Field","name":{"kind":"Name","value":"paid"}}]}}]}}]} as unknown as DocumentNode<SdkCancelPaymentRequestMutation, SdkCancelPaymentRequestMutationVariables>;
export const SdkProvidePaymentLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkProvidePaymentLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requestId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expiresAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"providePaymentLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"requestId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requestId"}}},{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}},{"kind":"Argument","name":{"kind":"Name","value":"expiresAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expiresAt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"salesInvoiceId"}},{"kind":"Field","name":{"kind":"Name","value":"amountMinor"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}}]}}]}}]} as unknown as DocumentNode<SdkProvidePaymentLinkMutation, SdkProvidePaymentLinkMutationVariables>;
export const SdkTaxReservationAdviceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkTaxReservationAdvice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRef"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxReservationAdvice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"taxType"}},{"kind":"Field","name":{"kind":"Name","value":"periodLabel"}},{"kind":"Field","name":{"kind":"Name","value":"periodEnd"}},{"kind":"Field","name":{"kind":"Name","value":"amountMinor"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"basis"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"reportedReservedMinor"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]}}]} as unknown as DocumentNode<SdkTaxReservationAdviceQuery, SdkTaxReservationAdviceQueryVariables>;
export const SdkReportTaxReservationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkReportTaxReservation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"adviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reservedMinor"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountRef"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reportTaxReservation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"adviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"adviceId"}}},{"kind":"Argument","name":{"kind":"Name","value":"reservedMinor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reservedMinor"}}},{"kind":"Argument","name":{"kind":"Name","value":"accountRef"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountRef"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"reportedReservedMinor"}}]}}]}}]} as unknown as DocumentNode<SdkReportTaxReservationMutation, SdkReportTaxReservationMutationVariables>;
export const SdkStepUpChallengeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkStepUpChallenge"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stepUpChallenge"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}}]}}]}}]} as unknown as DocumentNode<SdkStepUpChallengeQuery, SdkStepUpChallengeQueryVariables>;
export const SdkCreatePlatformCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreatePlatformCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePlatformCompanyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPlatformCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkPlatformCompanyFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"prefill"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"matched"}},{"kind":"Field","name":{"kind":"Name","value":"fields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPlatformCompanyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformCompany"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"registrationCountry"}},{"kind":"Field","name":{"kind":"Name","value":"registrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"legalForm"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"lifecycle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"changedAt"}},{"kind":"Field","name":{"kind":"Name","value":"suspendedBy"}},{"kind":"Field","name":{"kind":"Name","value":"displayMessage"}},{"kind":"Field","name":{"kind":"Name","value":"closeEffectiveDate"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"retentionUntil"}}]}}]}}]} as unknown as DocumentNode<SdkCreatePlatformCompanyMutation, SdkCreatePlatformCompanyMutationVariables>;
export const SdkUpdatePlatformCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpdatePlatformCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePlatformCompanyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePlatformCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkPlatformCompanyFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPlatformCompanyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformCompany"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"registrationCountry"}},{"kind":"Field","name":{"kind":"Name","value":"registrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"legalForm"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"lifecycle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"changedAt"}},{"kind":"Field","name":{"kind":"Name","value":"suspendedBy"}},{"kind":"Field","name":{"kind":"Name","value":"displayMessage"}},{"kind":"Field","name":{"kind":"Name","value":"closeEffectiveDate"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"retentionUntil"}}]}}]}}]} as unknown as DocumentNode<SdkUpdatePlatformCompanyMutation, SdkUpdatePlatformCompanyMutationVariables>;
export const SdkPlatformCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"externalId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"externalId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"externalId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkPlatformCompanyFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPlatformCompanyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformCompany"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"registrationCountry"}},{"kind":"Field","name":{"kind":"Name","value":"registrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"legalForm"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"lifecycle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"changedAt"}},{"kind":"Field","name":{"kind":"Name","value":"suspendedBy"}},{"kind":"Field","name":{"kind":"Name","value":"displayMessage"}},{"kind":"Field","name":{"kind":"Name","value":"closeEffectiveDate"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"retentionUntil"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformCompanyQuery, SdkPlatformCompanyQueryVariables>;
export const SdkPlatformCompaniesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformCompanies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformCompanyFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lifecycleStates"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileLifecycleState"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeArchived"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformCompanies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"lifecycleStates"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lifecycleStates"}}},{"kind":"Argument","name":{"kind":"Name","value":"includeArchived"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeArchived"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasMore"}},{"kind":"Field","name":{"kind":"Name","value":"nextCursor"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkPlatformCompanyFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPlatformCompanyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformCompany"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"registrationCountry"}},{"kind":"Field","name":{"kind":"Name","value":"registrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"legalForm"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"lifecycle"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"changedAt"}},{"kind":"Field","name":{"kind":"Name","value":"suspendedBy"}},{"kind":"Field","name":{"kind":"Name","value":"displayMessage"}},{"kind":"Field","name":{"kind":"Name","value":"closeEffectiveDate"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"retentionUntil"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformCompaniesQuery, SdkPlatformCompaniesQueryVariables>;
export const SdkOnboardingRequirementsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkOnboardingRequirements"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onboardingRequirements"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<SdkOnboardingRequirementsQuery, SdkOnboardingRequirementsQueryVariables>;
export const SdkUpsertPlatformUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpsertPlatformUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertPlatformUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertPlatformUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkPlatformUserFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPlatformUserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalUserId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"disabledAt"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"access"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<SdkUpsertPlatformUserMutation, SdkUpsertPlatformUserMutationVariables>;
export const SdkPlatformUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"externalUserId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"externalUserId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"externalUserId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkPlatformUserFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPlatformUserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalUserId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"disabledAt"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"access"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformUserQuery, SdkPlatformUserQueryVariables>;
export const SdkPlatformUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasMore"}},{"kind":"Field","name":{"kind":"Name","value":"nextCursor"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkPlatformUserFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPlatformUserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalUserId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"disabledAt"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"access"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformUsersQuery, SdkPlatformUsersQueryVariables>;
export const SdkSetPlatformUserAccessDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkSetPlatformUserAccess"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetPlatformUserAccessInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setPlatformUserAccess"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<SdkSetPlatformUserAccessMutation, SdkSetPlatformUserAccessMutationVariables>;
export const SdkRemovePlatformUserAccessDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkRemovePlatformUserAccess"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removePlatformUserAccess"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}}]}]}}]} as unknown as DocumentNode<SdkRemovePlatformUserAccessMutation, SdkRemovePlatformUserAccessMutationVariables>;
export const SdkCreatePlatformUserTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreatePlatformUserToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePlatformUserTokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPlatformUserToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"tokenType"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"scopes"}}]}}]}}]} as unknown as DocumentNode<SdkCreatePlatformUserTokenMutation, SdkCreatePlatformUserTokenMutationVariables>;
export const SdkCreateEmbedSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreateEmbedSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateEmbedSessionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEmbedSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientSecret"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"session"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkEmbedSessionFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkEmbedSessionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmbedSession"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"platformUserId"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"exchangedAt"}},{"kind":"Field","name":{"kind":"Name","value":"revokedAt"}},{"kind":"Field","name":{"kind":"Name","value":"revokedReason"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"}},{"kind":"Field","name":{"kind":"Name","value":"features"}}]}}]}}]} as unknown as DocumentNode<SdkCreateEmbedSessionMutation, SdkCreateEmbedSessionMutationVariables>;
export const SdkEmbedSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkEmbedSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"embedSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkEmbedSessionFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkEmbedSessionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmbedSession"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"platformUserId"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"exchangedAt"}},{"kind":"Field","name":{"kind":"Name","value":"revokedAt"}},{"kind":"Field","name":{"kind":"Name","value":"revokedReason"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"}},{"kind":"Field","name":{"kind":"Name","value":"features"}}]}}]}}]} as unknown as DocumentNode<SdkEmbedSessionQuery, SdkEmbedSessionQueryVariables>;
export const SdkEmbedSessionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkEmbedSessions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EmbedSessionFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"embedSessions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasMore"}},{"kind":"Field","name":{"kind":"Name","value":"nextCursor"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkEmbedSessionFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkEmbedSessionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmbedSession"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"platformUserId"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"exchangedAt"}},{"kind":"Field","name":{"kind":"Name","value":"revokedAt"}},{"kind":"Field","name":{"kind":"Name","value":"revokedReason"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"}},{"kind":"Field","name":{"kind":"Name","value":"features"}}]}}]}}]} as unknown as DocumentNode<SdkEmbedSessionsQuery, SdkEmbedSessionsQueryVariables>;
export const SdkRevokeEmbedSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkRevokeEmbedSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revokeEmbedSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkEmbedSessionFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkEmbedSessionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmbedSession"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"platformUserId"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"exchangedAt"}},{"kind":"Field","name":{"kind":"Name","value":"revokedAt"}},{"kind":"Field","name":{"kind":"Name","value":"revokedReason"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"}},{"kind":"Field","name":{"kind":"Name","value":"features"}}]}}]}}]} as unknown as DocumentNode<SdkRevokeEmbedSessionMutation, SdkRevokeEmbedSessionMutationVariables>;
export const SdkRevokeEmbedSessionsForUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkRevokeEmbedSessionsForUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"platformUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revokeEmbedSessionsForUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"platformUserId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"platformUserId"}}},{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}}]}]}}]} as unknown as DocumentNode<SdkRevokeEmbedSessionsForUserMutation, SdkRevokeEmbedSessionsForUserMutationVariables>;
export const SdkPlatformFeatureAllowanceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformFeatureAllowance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformFeatureAllowance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"group"}},{"kind":"Field","name":{"kind":"Name","value":"state"}}]}}]}}]}}]} as unknown as DocumentNode<SdkPlatformFeatureAllowanceQuery, SdkPlatformFeatureAllowanceQueryVariables>;
export const SdkPlatformFeatureLimitsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformFeatureLimits"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformFeatureLimits"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"hidden"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformFeatureLimitsQuery, SdkPlatformFeatureLimitsQueryVariables>;
export const SdkSetPlatformFeatureLimitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkSetPlatformFeatureLimit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetPlatformFeatureLimitInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setPlatformFeatureLimit"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"hidden"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkSetPlatformFeatureLimitMutation, SdkSetPlatformFeatureLimitMutationVariables>;
export const SdkPlatformCompanyFeaturesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformCompanyFeatures"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformCompanyFeatures"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"blockedBy"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformCompanyFeaturesQuery, SdkPlatformCompanyFeaturesQueryVariables>;
export const SdkPlatformUsageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformUsage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"month"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformUsage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"month"},"value":{"kind":"Variable","name":{"kind":"Name","value":"month"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"activeCompanies"}},{"kind":"Field","name":{"kind":"Name","value":"inactiveCompanies"}},{"kind":"Field","name":{"kind":"Name","value":"ratePerActiveCompanyMinor"}},{"kind":"Field","name":{"kind":"Name","value":"aiBilledMinor"}},{"kind":"Field","name":{"kind":"Name","value":"minimumTopUpMinor"}},{"kind":"Field","name":{"kind":"Name","value":"totalMinor"}},{"kind":"Field","name":{"kind":"Name","value":"pilot"}},{"kind":"Field","name":{"kind":"Name","value":"computedAt"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformUsageQuery, SdkPlatformUsageQueryVariables>;
export const SdkPlatformUsageCompaniesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformUsageCompanies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"month"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformUsage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"month"},"value":{"kind":"Variable","name":{"kind":"Name","value":"month"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"reasons"}}]}}]}}]}}]} as unknown as DocumentNode<SdkPlatformUsageCompaniesQuery, SdkPlatformUsageCompaniesQueryVariables>;
export const SdkPlatformAllowedOriginsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformAllowedOrigins"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformAllowedOrigins"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformAllowedOriginsQuery, SdkPlatformAllowedOriginsQueryVariables>;
export const SdkAddPlatformAllowedOriginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkAddPlatformAllowedOrigin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"origin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPlatformAllowedOrigin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"origin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"origin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]}}]} as unknown as DocumentNode<SdkAddPlatformAllowedOriginMutation, SdkAddPlatformAllowedOriginMutationVariables>;
export const SdkRemovePlatformAllowedOriginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkRemovePlatformAllowedOrigin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removePlatformAllowedOrigin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<SdkRemovePlatformAllowedOriginMutation, SdkRemovePlatformAllowedOriginMutationVariables>;
export const SdkPlatformPoliciesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformPolicies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"kind"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PolicyKind"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PolicyStatus"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformPolicies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"kind"},"value":{"kind":"Variable","name":{"kind":"Name","value":"kind"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkPolicyVersionFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPolicyVersionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformPolicyVersion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"checksum"}},{"kind":"Field","name":{"kind":"Name","value":"activatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"promotedFrom"}}]}}]} as unknown as DocumentNode<SdkPlatformPoliciesQuery, SdkPlatformPoliciesQueryVariables>;
export const SdkPolicySchemasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPolicySchemas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"policySchemas"}}]}}]} as unknown as DocumentNode<SdkPolicySchemasQuery, SdkPolicySchemasQueryVariables>;
export const SdkEffectivePolicyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkEffectivePolicy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"kind"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PolicyKind"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"effectivePolicy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"kind"},"value":{"kind":"Variable","name":{"kind":"Name","value":"kind"}}},{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}}]}]}}]} as unknown as DocumentNode<SdkEffectivePolicyQuery, SdkEffectivePolicyQueryVariables>;
export const SdkCompanyPolicyOverridesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkCompanyPolicyOverrides"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyPolicyOverrides"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"setBy"}}]}}]}}]} as unknown as DocumentNode<SdkCompanyPolicyOverridesQuery, SdkCompanyPolicyOverridesQueryVariables>;
export const SdkCreatePolicyDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreatePolicyDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"kind"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PolicyKind"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPolicyDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"kind"},"value":{"kind":"Variable","name":{"kind":"Name","value":"kind"}}},{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkPolicyVersionFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPolicyVersionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformPolicyVersion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"checksum"}},{"kind":"Field","name":{"kind":"Name","value":"activatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"promotedFrom"}}]}}]} as unknown as DocumentNode<SdkCreatePolicyDraftMutation, SdkCreatePolicyDraftMutationVariables>;
export const SdkActivatePolicyVersionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkActivatePolicyVersion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activatePolicyVersion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkPolicyVersionFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPolicyVersionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformPolicyVersion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"checksum"}},{"kind":"Field","name":{"kind":"Name","value":"activatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"promotedFrom"}}]}}]} as unknown as DocumentNode<SdkActivatePolicyVersionMutation, SdkActivatePolicyVersionMutationVariables>;
export const SdkSetCompanyPolicyOverrideDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkSetCompanyPolicyOverride"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"kind"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PolicyKind"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setCompanyPolicyOverride"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"kind"},"value":{"kind":"Variable","name":{"kind":"Name","value":"kind"}}},{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}]}]}}]} as unknown as DocumentNode<SdkSetCompanyPolicyOverrideMutation, SdkSetCompanyPolicyOverrideMutationVariables>;
export const SdkClearCompanyPolicyOverrideDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkClearCompanyPolicyOverride"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"kind"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PolicyKind"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clearCompanyPolicyOverride"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"kind"},"value":{"kind":"Variable","name":{"kind":"Name","value":"kind"}}}]}]}}]} as unknown as DocumentNode<SdkClearCompanyPolicyOverrideMutation, SdkClearCompanyPolicyOverrideMutationVariables>;
export const SdkPromotePlatformPoliciesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkPromotePlatformPolicies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"kinds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PolicyKind"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promotePlatformPolicies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"kinds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"kinds"}}}]}]}}]} as unknown as DocumentNode<SdkPromotePlatformPoliciesMutation, SdkPromotePlatformPoliciesMutationVariables>;
export const SdkPreviewPolicyImportDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkPreviewPolicyImport"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bundleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"previewPolicyImport"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bundleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bundleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"importId"}},{"kind":"Field","name":{"kind":"Name","value":"warnings"}},{"kind":"Field","name":{"kind":"Name","value":"changes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"added"}},{"kind":"Field","name":{"kind":"Name","value":"changed"}},{"kind":"Field","name":{"kind":"Name","value":"removed"}}]}}]}}]}}]} as unknown as DocumentNode<SdkPreviewPolicyImportMutation, SdkPreviewPolicyImportMutationVariables>;
export const SdkConfirmPolicyImportDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkConfirmPolicyImport"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"importId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmPolicyImport"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"importId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"importId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkPolicyVersionFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPolicyVersionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformPolicyVersion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"checksum"}},{"kind":"Field","name":{"kind":"Name","value":"activatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"promotedFrom"}}]}}]} as unknown as DocumentNode<SdkConfirmPolicyImportMutation, SdkConfirmPolicyImportMutationVariables>;
export const SdkProfilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkProfiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileSort"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"paging"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"registrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"registrationCountry"}},{"kind":"Field","name":{"kind":"Name","value":"bookkeeperId"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<SdkProfilesQuery, SdkProfilesQueryVariables>;
export const SdkProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"registrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"registrationCountry"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"bookkeeperId"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkProfileQuery, SdkProfileQueryVariables>;
export const SdkUpdateProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpdateProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateOneProfileInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOneProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkUpdateProfileMutation, SdkUpdateProfileMutationVariables>;
export const SdkProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkProjects"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSort"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"paging"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"relationId"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<SdkProjectsQuery, SdkProjectsQueryVariables>;
export const SdkProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"relationId"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkProjectQuery, SdkProjectQueryVariables>;
export const SdkCreateProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreateProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<SdkCreateProjectMutation, SdkCreateProjectMutationVariables>;
export const SdkUpdateProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpdateProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateOneProjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOneProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkUpdateProjectMutation, SdkUpdateProjectMutationVariables>;
export const SdkDeleteProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkDeleteProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteOneProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SdkDeleteProjectMutation, SdkDeleteProjectMutationVariables>;
export const SdkPurchaseInvoicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPurchaseInvoices"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PurchaseInvoiceFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PurchaseInvoiceSort"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"purchaseInvoices"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"paging"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"reference"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"due"}},{"kind":"Field","name":{"kind":"Name","value":"paid"}},{"kind":"Field","name":{"kind":"Name","value":"closed"}},{"kind":"Field","name":{"kind":"Name","value":"relationId"}},{"kind":"Field","name":{"kind":"Name","value":"outstanding"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<SdkPurchaseInvoicesQuery, SdkPurchaseInvoicesQueryVariables>;
export const SdkPurchaseInvoiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPurchaseInvoice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"purchaseInvoice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"reference"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"due"}},{"kind":"Field","name":{"kind":"Name","value":"paid"}},{"kind":"Field","name":{"kind":"Name","value":"closed"}},{"kind":"Field","name":{"kind":"Name","value":"relationId"}},{"kind":"Field","name":{"kind":"Name","value":"outstanding"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"taxCode"}},{"kind":"Field","name":{"kind":"Name","value":"tax"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"netAmount"}}]}}]}}]}}]} as unknown as DocumentNode<SdkPurchaseInvoiceQuery, SdkPurchaseInvoiceQueryVariables>;
export const SdkCreatePurchaseInvoiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreatePurchaseInvoice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePurchaseInvoiceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOnePurchaseInvoice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]}}]} as unknown as DocumentNode<SdkCreatePurchaseInvoiceMutation, SdkCreatePurchaseInvoiceMutationVariables>;
export const SdkUpdatePurchaseInvoiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpdatePurchaseInvoice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateOnePurchaseInvoiceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOnePurchaseInvoice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkUpdatePurchaseInvoiceMutation, SdkUpdatePurchaseInvoiceMutationVariables>;
export const SdkDeletePurchaseInvoiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkDeletePurchaseInvoice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteOnePurchaseInvoice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SdkDeletePurchaseInvoiceMutation, SdkDeletePurchaseInvoiceMutationVariables>;
export const SdkProcessPurchaseInvoiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkProcessPurchaseInvoice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processPurchaseInvoice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SdkProcessPurchaseInvoiceMutation, SdkProcessPurchaseInvoiceMutationVariables>;
export const SdkConfirmPurchaseInvoiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkConfirmPurchaseInvoice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmPurchaseInvoice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SdkConfirmPurchaseInvoiceMutation, SdkConfirmPurchaseInvoiceMutationVariables>;
export const SdkRecurringsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkRecurrings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RecurringFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RecurringSort"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recurrings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"paging"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"relationId"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<SdkRecurringsQuery, SdkRecurringsQueryVariables>;
export const SdkRecurringDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkRecurring"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recurring"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"relationId"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkRecurringQuery, SdkRecurringQueryVariables>;
export const SdkCreateRecurringDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreateRecurring"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateRecurringInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneRecurring"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<SdkCreateRecurringMutation, SdkCreateRecurringMutationVariables>;
export const SdkUpdateRecurringDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpdateRecurring"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateOneRecurringInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOneRecurring"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkUpdateRecurringMutation, SdkUpdateRecurringMutationVariables>;
export const SdkDeleteRecurringDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkDeleteRecurring"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteOneRecurring"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SdkDeleteRecurringMutation, SdkDeleteRecurringMutationVariables>;
export const SdkRelationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkRelations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RelationFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RelationSort"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"relations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"paging"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"registrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"vatNumber"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<SdkRelationsQuery, SdkRelationsQueryVariables>;
export const SdkRelationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkRelation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"relation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"registrationCountry"}},{"kind":"Field","name":{"kind":"Name","value":"registrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"vatNumber"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkRelationQuery, SdkRelationQueryVariables>;
export const SdkCreateRelationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreateRelation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateRelationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneRelation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}}]}}]}}]} as unknown as DocumentNode<SdkCreateRelationMutation, SdkCreateRelationMutationVariables>;
export const SdkUpdateRelationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpdateRelation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateOneRelationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOneRelation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkUpdateRelationMutation, SdkUpdateRelationMutationVariables>;
export const SdkDeleteRelationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkDeleteRelation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteOneRelation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SdkDeleteRelationMutation, SdkDeleteRelationMutationVariables>;
export const SdkSalesInvoicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkSalesInvoices"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SalesInvoiceFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SalesInvoiceSort"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"salesInvoices"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"paging"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"reference"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"due"}},{"kind":"Field","name":{"kind":"Name","value":"paid"}},{"kind":"Field","name":{"kind":"Name","value":"closed"}},{"kind":"Field","name":{"kind":"Name","value":"relationId"}},{"kind":"Field","name":{"kind":"Name","value":"outstanding"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<SdkSalesInvoicesQuery, SdkSalesInvoicesQueryVariables>;
export const SdkSalesInvoiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkSalesInvoice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"salesInvoice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"reference"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"due"}},{"kind":"Field","name":{"kind":"Name","value":"paid"}},{"kind":"Field","name":{"kind":"Name","value":"closed"}},{"kind":"Field","name":{"kind":"Name","value":"bookingDate"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"relationId"}},{"kind":"Field","name":{"kind":"Name","value":"vatNumber"}},{"kind":"Field","name":{"kind":"Name","value":"locked"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"footer"}},{"kind":"Field","name":{"kind":"Name","value":"outstanding"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"lines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"taxCode"}},{"kind":"Field","name":{"kind":"Name","value":"tax"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"netAmount"}}]}}]}}]}}]} as unknown as DocumentNode<SdkSalesInvoiceQuery, SdkSalesInvoiceQueryVariables>;
export const SdkCreateSalesInvoiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreateSalesInvoice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSalesInvoiceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneSalesInvoice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]}}]} as unknown as DocumentNode<SdkCreateSalesInvoiceMutation, SdkCreateSalesInvoiceMutationVariables>;
export const SdkUpdateSalesInvoiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpdateSalesInvoice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateOneSalesInvoiceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOneSalesInvoice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"reference"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]}}]} as unknown as DocumentNode<SdkUpdateSalesInvoiceMutation, SdkUpdateSalesInvoiceMutationVariables>;
export const SdkDeleteSalesInvoiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkDeleteSalesInvoice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteOneSalesInvoice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SdkDeleteSalesInvoiceMutation, SdkDeleteSalesInvoiceMutationVariables>;
export const SdkCloseSalesInvoiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCloseSalesInvoice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"send"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"closeSalesInvoice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"send"},"value":{"kind":"Variable","name":{"kind":"Name","value":"send"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"closed"}}]}}]}}]} as unknown as DocumentNode<SdkCloseSalesInvoiceMutation, SdkCloseSalesInvoiceMutationVariables>;
export const SdkReopenSalesInvoiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkReopenSalesInvoice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reopenSalesInvoice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"closed"}}]}}]}}]} as unknown as DocumentNode<SdkReopenSalesInvoiceMutation, SdkReopenSalesInvoiceMutationVariables>;
export const SdkCreditSalesInvoiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreditSalesInvoice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"close"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creditSalesInvoice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"close"},"value":{"kind":"Variable","name":{"kind":"Name","value":"close"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]}}]} as unknown as DocumentNode<SdkCreditSalesInvoiceMutation, SdkCreditSalesInvoiceMutationVariables>;
export const SdkTestClocksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkTestClocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testClocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkTestClockFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkTestClockFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestClock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"frozenTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"advanceTarget"}},{"kind":"Field","name":{"kind":"Name","value":"companies"}}]}}]} as unknown as DocumentNode<SdkTestClocksQuery, SdkTestClocksQueryVariables>;
export const SdkCreateTestClockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreateTestClock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"frozenTime"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTestClock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"frozenTime"},"value":{"kind":"Variable","name":{"kind":"Name","value":"frozenTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkTestClockFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkTestClockFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestClock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"frozenTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"advanceTarget"}},{"kind":"Field","name":{"kind":"Name","value":"companies"}}]}}]} as unknown as DocumentNode<SdkCreateTestClockMutation, SdkCreateTestClockMutationVariables>;
export const SdkAdvanceTestClockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkAdvanceTestClock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"to"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AdvanceTestClockOptionsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"advanceTestClock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"to"}}},{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkTestClockFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkTestClockFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestClock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"frozenTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"advanceTarget"}},{"kind":"Field","name":{"kind":"Name","value":"companies"}}]}}]} as unknown as DocumentNode<SdkAdvanceTestClockMutation, SdkAdvanceTestClockMutationVariables>;
export const SdkDeleteTestClockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkDeleteTestClock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTestClock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<SdkDeleteTestClockMutation, SdkDeleteTestClockMutationVariables>;
export const SdkSeedTestCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkSeedTestCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SeedTestCompanyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seedTestCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}}]}}]}}]} as unknown as DocumentNode<SdkSeedTestCompanyMutation, SdkSeedTestCompanyMutationVariables>;
export const SdkPlatformSandboxSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformSandboxSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformSandboxSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkSandboxSettingsFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkSandboxSettingsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformSandboxSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sandboxReset"}},{"kind":"Field","name":{"kind":"Name","value":"sandboxSeedTemplates"}},{"kind":"Field","name":{"kind":"Name","value":"lastResetAt"}}]}}]} as unknown as DocumentNode<SdkPlatformSandboxSettingsQuery, SdkPlatformSandboxSettingsQueryVariables>;
export const SdkUpdatePlatformSandboxSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpdatePlatformSandboxSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePlatformSandboxSettingsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePlatformSandboxSettings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkSandboxSettingsFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkSandboxSettingsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformSandboxSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sandboxReset"}},{"kind":"Field","name":{"kind":"Name","value":"sandboxSeedTemplates"}},{"kind":"Field","name":{"kind":"Name","value":"lastResetAt"}}]}}]} as unknown as DocumentNode<SdkUpdatePlatformSandboxSettingsMutation, SdkUpdatePlatformSandboxSettingsMutationVariables>;
export const SdkResetPlatformSandboxDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkResetPlatformSandbox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPlatformSandbox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trigger"}},{"kind":"Field","name":{"kind":"Name","value":"companiesDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"companiesKept"}},{"kind":"Field","name":{"kind":"Name","value":"clocksDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"companiesSeeded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"template"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"finishedAt"}}]}}]}}]} as unknown as DocumentNode<SdkResetPlatformSandboxMutation, SdkResetPlatformSandboxMutationVariables>;
export const SdkPlatformSupportSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformSupportSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformSupportSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkSupportSettingsFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkSupportSettingsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformSupportSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"supportMode"}},{"kind":"Field","name":{"kind":"Name","value":"supportUrl"}},{"kind":"Field","name":{"kind":"Name","value":"supportEmail"}},{"kind":"Field","name":{"kind":"Name","value":"supportEscalationEnabled"}}]}}]} as unknown as DocumentNode<SdkPlatformSupportSettingsQuery, SdkPlatformSupportSettingsQueryVariables>;
export const SdkUpdatePlatformSupportSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpdatePlatformSupportSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformSupportSettingsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePlatformSupportSettings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkSupportSettingsFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkSupportSettingsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformSupportSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"supportMode"}},{"kind":"Field","name":{"kind":"Name","value":"supportUrl"}},{"kind":"Field","name":{"kind":"Name","value":"supportEmail"}},{"kind":"Field","name":{"kind":"Name","value":"supportEscalationEnabled"}}]}}]} as unknown as DocumentNode<SdkUpdatePlatformSupportSettingsMutation, SdkUpdatePlatformSupportSettingsMutationVariables>;
export const SdkSupportEscalationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkSupportEscalations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SupportEscalationStatus"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"supportEscalations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkSupportEscalationFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkSupportEscalationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SupportEscalation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"severity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"requestIds"}},{"kind":"Field","name":{"kind":"Name","value":"screen"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorKind"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]}}]} as unknown as DocumentNode<SdkSupportEscalationsQuery, SdkSupportEscalationsQueryVariables>;
export const SdkCreateSupportEscalationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreateSupportEscalation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSupportEscalationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSupportEscalation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkSupportEscalationFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkSupportEscalationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SupportEscalation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"severity"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"requestIds"}},{"kind":"Field","name":{"kind":"Name","value":"screen"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorKind"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]}}]} as unknown as DocumentNode<SdkCreateSupportEscalationMutation, SdkCreateSupportEscalationMutationVariables>;
export const SdkAddSupportEscalationCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkAddSupportEscalationComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"escalationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addSupportEscalationComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"escalationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"escalationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorKind"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]}}]} as unknown as DocumentNode<SdkAddSupportEscalationCommentMutation, SdkAddSupportEscalationCommentMutationVariables>;
export const SdkSupportAccessGrantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkSupportAccessGrants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeEnded"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"supportAccessGrants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"includeEnded"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeEnded"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkSupportAccessGrantFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkSupportAccessGrantFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SupportAccessGrant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"scope"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"durationMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"requestedAt"}},{"kind":"Field","name":{"kind":"Name","value":"activatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"revokedAt"}},{"kind":"Field","name":{"kind":"Name","value":"escalationId"}},{"kind":"Field","name":{"kind":"Name","value":"breakGlass"}}]}}]} as unknown as DocumentNode<SdkSupportAccessGrantsQuery, SdkSupportAccessGrantsQueryVariables>;
export const SdkDecideSupportAccessDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkDecideSupportAccess"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"grantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"approve"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attestation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stepUpAssertionId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"decideSupportAccess"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"grantId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"grantId"}}},{"kind":"Argument","name":{"kind":"Name","value":"approve"},"value":{"kind":"Variable","name":{"kind":"Name","value":"approve"}}},{"kind":"Argument","name":{"kind":"Name","value":"attestation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attestation"}}},{"kind":"Argument","name":{"kind":"Name","value":"stepUpAssertionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stepUpAssertionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkSupportAccessGrantFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkSupportAccessGrantFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SupportAccessGrant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"scope"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"durationMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"requestedAt"}},{"kind":"Field","name":{"kind":"Name","value":"activatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"revokedAt"}},{"kind":"Field","name":{"kind":"Name","value":"escalationId"}},{"kind":"Field","name":{"kind":"Name","value":"breakGlass"}}]}}]} as unknown as DocumentNode<SdkDecideSupportAccessMutation, SdkDecideSupportAccessMutationVariables>;
export const SdkRevokeSupportAccessDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkRevokeSupportAccess"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"grantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revokeSupportAccess"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"grantId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"grantId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkSupportAccessGrantFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkSupportAccessGrantFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SupportAccessGrant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"scope"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"durationMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"requestedAt"}},{"kind":"Field","name":{"kind":"Name","value":"activatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"revokedAt"}},{"kind":"Field","name":{"kind":"Name","value":"escalationId"}},{"kind":"Field","name":{"kind":"Name","value":"breakGlass"}}]}}]} as unknown as DocumentNode<SdkRevokeSupportAccessMutation, SdkRevokeSupportAccessMutationVariables>;
export const SdkTaxAuthorisationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkTaxAuthorisations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeRevoked"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxAuthorisations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"includeRevoked"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeRevoked"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkTaxAuthorisationFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkTaxAuthorisationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaxAuthorisation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"taxes"}},{"kind":"Field","name":{"kind":"Name","value":"statementVersion"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"channel"}},{"kind":"Field","name":{"kind":"Name","value":"grantedAt"}},{"kind":"Field","name":{"kind":"Name","value":"stepUp"}},{"kind":"Field","name":{"kind":"Name","value":"revokedAt"}},{"kind":"Field","name":{"kind":"Name","value":"revokedVia"}},{"kind":"Field","name":{"kind":"Name","value":"supersedesId"}},{"kind":"Field","name":{"kind":"Name","value":"grantedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalUserId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<SdkTaxAuthorisationsQuery, SdkTaxAuthorisationsQueryVariables>;
export const SdkTaxAuthorisationStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkTaxAuthorisationStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxAuthorisationStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tax"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"firmName"}},{"kind":"Field","name":{"kind":"Name","value":"authorisation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkTaxAuthorisationFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkTaxAuthorisationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaxAuthorisation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"taxes"}},{"kind":"Field","name":{"kind":"Name","value":"statementVersion"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"channel"}},{"kind":"Field","name":{"kind":"Name","value":"grantedAt"}},{"kind":"Field","name":{"kind":"Name","value":"stepUp"}},{"kind":"Field","name":{"kind":"Name","value":"revokedAt"}},{"kind":"Field","name":{"kind":"Name","value":"revokedVia"}},{"kind":"Field","name":{"kind":"Name","value":"supersedesId"}},{"kind":"Field","name":{"kind":"Name","value":"grantedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalUserId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<SdkTaxAuthorisationStatusQuery, SdkTaxAuthorisationStatusQueryVariables>;
export const SdkRevokeTaxAuthorisationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkRevokeTaxAuthorisation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RevokeTaxAuthorisationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revokeTaxAuthorisation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkTaxAuthorisationFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkTaxAuthorisationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaxAuthorisation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"taxes"}},{"kind":"Field","name":{"kind":"Name","value":"statementVersion"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"channel"}},{"kind":"Field","name":{"kind":"Name","value":"grantedAt"}},{"kind":"Field","name":{"kind":"Name","value":"stepUp"}},{"kind":"Field","name":{"kind":"Name","value":"revokedAt"}},{"kind":"Field","name":{"kind":"Name","value":"revokedVia"}},{"kind":"Field","name":{"kind":"Name","value":"supersedesId"}},{"kind":"Field","name":{"kind":"Name","value":"grantedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalUserId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<SdkRevokeTaxAuthorisationMutation, SdkRevokeTaxAuthorisationMutationVariables>;