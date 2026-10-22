/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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

export type CostCenterFilter = {
  active?: BooleanFieldComparison | null | undefined;
  and?: Array<CostCenterFilter> | null | undefined;
  created?: DateFieldComparison | null | undefined;
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
  | 'id'
  | 'name'
  | 'number'
  | 'ownerAccountId'
  | 'profileId'
  | 'updated';

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
  timezone?: string | null | undefined;
  vatNumber?: string | null | undefined;
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
  eq?: Array<Currency> | null | undefined;
  gt?: Array<Currency> | null | undefined;
  gte?: Array<Currency> | null | undefined;
  iLike?: Array<Currency> | null | undefined;
  in?: Array<Array<Currency>> | null | undefined;
  is?: boolean | null | undefined;
  isNot?: boolean | null | undefined;
  like?: Array<Currency> | null | undefined;
  lt?: Array<Currency> | null | undefined;
  lte?: Array<Currency> | null | undefined;
  neq?: Array<Currency> | null | undefined;
  notILike?: Array<Currency> | null | undefined;
  notIn?: Array<Array<Currency>> | null | undefined;
  notLike?: Array<Currency> | null | undefined;
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
  | 'action_centre'
  | 'booking_chip'
  | 'icp_return'
  | 'notification_banner'
  | 'onboarding'
  | 'oss_return'
  | 'purchase_inbox'
  | 'receipt_button'
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
  actionCentre?: EmbedBasicComponentInput | null | undefined;
  bookingChip?: EmbedBookingChipComponentInput | null | undefined;
  icpReturn?: EmbedSubmitComponentInput | null | undefined;
  notificationBanner?: EmbedBasicComponentInput | null | undefined;
  onboarding?: EmbedOnboardingComponentInput | null | undefined;
  ossReturn?: EmbedSubmitComponentInput | null | undefined;
  purchaseInbox?: EmbedPurchaseInboxComponentInput | null | undefined;
  receiptButton?: EmbedBasicComponentInput | null | undefined;
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
  submit?: boolean | null | undefined;
};

export type EmbedTaxAuthorisationComponentInput = {
  enabled?: boolean;
  features?: EmbedTaxAuthorisationFeaturesInput | null | undefined;
};

export type EmbedTaxAuthorisationFeaturesInput = {
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
  payment?: boolean | null | undefined;
  submit?: boolean | null | undefined;
  suppletie?: boolean | null | undefined;
};

export type FinancialYearGranularity =
  | 'half_year'
  | 'month'
  | 'quarter'
  | 'year';

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
  bic?: StringFieldComparison | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdBy?: MonetaryAccountPaymentFilterAccountFilter | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  currentAccount?: MonetaryAccountPaymentFilterCurrentAccountFilter | null | undefined;
  currentAccountId?: StringFieldComparison | null | undefined;
  date?: DateFieldComparison | null | undefined;
  description?: StringFieldComparison | null | undefined;
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
  | 'bic'
  | 'created'
  | 'createdById'
  | 'currentAccountId'
  | 'date'
  | 'description'
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
  | 'updated';

export type MonetaryAccountProvider =
  | 'adyen'
  | 'amazon'
  | 'bol'
  | 'camt053'
  | 'lunchflow'
  | 'mollie'
  | 'mt940'
  | 'paynl'
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

export type OnboardingRequirementKey =
  | 'bookkeeping_financial_year'
  | 'bookkeeping_ledger_chart'
  | 'company_address'
  | 'company_legal_form'
  | 'company_registration'
  | 'tax_nl_vat_authorisation'
  | 'tax_obligations'
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

export type PermissionSet =
  | 'admin'
  | 'member'
  | 'viewer';

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

export type PlatformFeatureLimitLevel =
  | 'company'
  | 'platform';

export type PlatformOriginKind =
  | 'app_scheme'
  | 'web';

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
  | 'id'
  | 'name'
  | 'profileId'
  | 'relationId'
  | 'start'
  | 'updated';

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
  | 'id'
  | 'number'
  | 'paid'
  | 'profileId'
  | 'reference'
  | 'relationId'
  | 'scheduled'
  | 'updated'
  | 'uuid';

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

export type RelationFilter = {
  and?: Array<RelationFilter> | null | undefined;
  bankAccounts?: RelationFilterRelationBankAccountFilter | null | undefined;
  created?: DateFieldComparison | null | undefined;
  createdBy?: RelationFilterAccountFilter | null | undefined;
  createdById?: StringFieldComparison | null | undefined;
  defaultCostCenter?: RelationFilterCostCenterFilter | null | undefined;
  defaultCostCenterId?: StringFieldComparison | null | undefined;
  email?: StringFieldComparison | null | undefined;
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

export type SetPlatformFeatureLimitInput = {
  /** Default: true. false is only valid with profileId (show a key the platform default hides). */
  hidden?: boolean | null | undefined;
  key: string;
  platformId?: string | number | null | undefined;
  /** Omit for the platform default. */
  profileId?: string | number | null | undefined;
};

export type SetPlatformUserAccessInput = {
  externalUserId?: string | null | undefined;
  platformId?: string | number | null | undefined;
  profileId: string | number;
  role: PermissionSet;
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

export type UpsertPlatformUserInput = {
  /** true disables the user (their tokens stop working); false re-enables. */
  disabled?: boolean | null | undefined;
  externalUserId: string;
  firstName?: string | null | undefined;
  language?: string | null | undefined;
  lastName?: string | null | undefined;
  platformId?: string | number | null | undefined;
};

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

export type SdkPlatformCompanyFieldsFragment = { id: string, platformId: string, externalId: string, name: string | null, legalName: string, registrationCountry: Country, registrationNumber: string, legalForm: TaxLegalForm | null, currency: Currency, language: string, created: string, updated: string };

export type SdkPlatformUserFieldsFragment = { id: string, platformId: string, externalUserId: string, firstName: string, lastName: string, language: string | null, disabledAt: string | null, created: string, access: Array<{ profileId: string, externalId: string, role: PermissionSet }> };

export type SdkEmbedSessionFieldsFragment = { id: string, companyId: string, platformUserId: string, kind: EmbedSessionKind, status: EmbedSessionStatus, origin: string | null, expiresAt: string, exchangedAt: string | null, revokedAt: string | null, revokedReason: string | null, created: string, components: Array<{ component: EmbedComponent, features: Record<string, unknown> }> };

export type SdkCreatePlatformCompanyMutationVariables = Exact<{
  input: CreatePlatformCompanyInput;
}>;


export type SdkCreatePlatformCompanyMutation = { createPlatformCompany: { created: boolean, company: { id: string, platformId: string, externalId: string, name: string | null, legalName: string, registrationCountry: Country, registrationNumber: string, legalForm: TaxLegalForm | null, currency: Currency, language: string, created: string, updated: string }, prefill: { source: string, matched: boolean, fields: Array<string> } | null } };

export type SdkUpdatePlatformCompanyMutationVariables = Exact<{
  input: UpdatePlatformCompanyInput;
}>;


export type SdkUpdatePlatformCompanyMutation = { updatePlatformCompany: { id: string, platformId: string, externalId: string, name: string | null, legalName: string, registrationCountry: Country, registrationNumber: string, legalForm: TaxLegalForm | null, currency: Currency, language: string, created: string, updated: string } };

export type SdkPlatformCompanyQueryVariables = Exact<{
  profileId?: string | number | null | undefined;
  externalId?: string | null | undefined;
}>;


export type SdkPlatformCompanyQuery = { platformCompany: { id: string, platformId: string, externalId: string, name: string | null, legalName: string, registrationCountry: Country, registrationNumber: string, legalForm: TaxLegalForm | null, currency: Currency, language: string, created: string, updated: string } | null };

export type SdkPlatformCompaniesQueryVariables = Exact<{
  first: number;
  after?: string | null | undefined;
  filter?: PlatformCompanyFilter | null | undefined;
}>;


export type SdkPlatformCompaniesQuery = { platformCompanies: { hasMore: boolean, nextCursor: string | null, edges: Array<{ node: { id: string, platformId: string, externalId: string, name: string | null, legalName: string, registrationCountry: Country, registrationNumber: string, legalForm: TaxLegalForm | null, currency: Currency, language: string, created: string, updated: string } }> } };

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

export const SdkTransactionFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkTransactionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MonetaryAccountPayment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"monetaryAccountId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"iban"}},{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}}]} as unknown as DocumentNode<SdkTransactionFieldsFragment, unknown>;
export const SdkDocumentFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkDocumentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProcessDocument"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"senderName"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"receivedDate"}},{"kind":"Field","name":{"kind":"Name","value":"processed"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"rejectedReason"}},{"kind":"Field","name":{"kind":"Name","value":"processing"}},{"kind":"Field","name":{"kind":"Name","value":"purchaseInvoiceId"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SdkDocumentFieldsFragment, unknown>;
export const SdkPlatformCompanyFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPlatformCompanyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformCompany"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"registrationCountry"}},{"kind":"Field","name":{"kind":"Name","value":"registrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"legalForm"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]} as unknown as DocumentNode<SdkPlatformCompanyFieldsFragment, unknown>;
export const SdkPlatformUserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPlatformUserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalUserId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"disabledAt"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"access"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<SdkPlatformUserFieldsFragment, unknown>;
export const SdkEmbedSessionFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkEmbedSessionFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmbedSession"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"platformUserId"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"exchangedAt"}},{"kind":"Field","name":{"kind":"Name","value":"revokedAt"}},{"kind":"Field","name":{"kind":"Name","value":"revokedReason"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"}},{"kind":"Field","name":{"kind":"Name","value":"features"}}]}}]}}]} as unknown as DocumentNode<SdkEmbedSessionFieldsFragment, unknown>;
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
export const SdkCreatePlatformCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkCreatePlatformCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePlatformCompanyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPlatformCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkPlatformCompanyFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"prefill"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"matched"}},{"kind":"Field","name":{"kind":"Name","value":"fields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPlatformCompanyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformCompany"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"registrationCountry"}},{"kind":"Field","name":{"kind":"Name","value":"registrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"legalForm"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]} as unknown as DocumentNode<SdkCreatePlatformCompanyMutation, SdkCreatePlatformCompanyMutationVariables>;
export const SdkUpdatePlatformCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SdkUpdatePlatformCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePlatformCompanyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePlatformCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkPlatformCompanyFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPlatformCompanyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformCompany"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"registrationCountry"}},{"kind":"Field","name":{"kind":"Name","value":"registrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"legalForm"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]} as unknown as DocumentNode<SdkUpdatePlatformCompanyMutation, SdkUpdatePlatformCompanyMutationVariables>;
export const SdkPlatformCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"externalId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"externalId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"externalId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkPlatformCompanyFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPlatformCompanyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformCompany"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"registrationCountry"}},{"kind":"Field","name":{"kind":"Name","value":"registrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"legalForm"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]} as unknown as DocumentNode<SdkPlatformCompanyQuery, SdkPlatformCompanyQueryVariables>;
export const SdkPlatformCompaniesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SdkPlatformCompanies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformCompanyFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platformCompanies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasMore"}},{"kind":"Field","name":{"kind":"Name","value":"nextCursor"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SdkPlatformCompanyFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SdkPlatformCompanyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformCompany"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"registrationCountry"}},{"kind":"Field","name":{"kind":"Name","value":"registrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"legalForm"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}}]}}]} as unknown as DocumentNode<SdkPlatformCompaniesQuery, SdkPlatformCompaniesQueryVariables>;
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