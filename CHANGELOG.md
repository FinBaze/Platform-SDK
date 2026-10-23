# Changelog

## Unreleased

Wave 5.1: filing consent.

- **`platform.taxAuthorisations`.** `list(companyId, { includeRevoked })`, `status(companyId)` (per tax: `active`, `missing`, `reconfirmation_due`, `delegated_to_firm`) and `revoke(companyId, { taxes, reason })`. There is no `grant`: only the company's own user can consent, in an embed or headless session.
- **Events.** `tax_authorisation.granted`, `tax_authorisation.revoked` and `company.requirements.updated` join `PlatformControlEvent` (`TaxAuthorisationGrantedEvent`, `TaxAuthorisationRevokedEvent`, `CompanyRequirementsUpdatedEvent`).
- **Messages.** The type `tax_authorisation.revoked` (`MessageData<'tax_authorisation.revoked'>`): FinBaze sends nothing itself, route it like any other.
- **Embed sessions.** `components.onboarding.features.filingConsent`, `components.taxAuthorisation.features.grant` and `inlineConsent` on `vatReturn`, `icpReturn` and `ossReturn`.

Wave 5.3: accountants on platform companies.

- **`platform.firms.*`.** `listEngagements(companyId, { includeEnded })` and `end(engagementId, { reason })` (scopes `platform_firms:read` and `platform_firms:write`; a platform may end with `firm_access_hidden`, `company_closed`, `company_transferred` or `platform_request`).
- **Firm events.** `PlatformFirmEvent` and `isFirmEvent` cover `firm.access_requested`, `firm.connection_requested`, `firm.connected`, `firm.connection_declined`, `firm.connection_expired`, `firm.disconnect_scheduled`, `firm.disconnected` and `firm.authority_changed`. The embed component `accountant-connect` emits `firm.connected` and `firm.disconnected`.

Wave 5.4: lifecycle, deprovisioning and the audit log.

- **`platform.companies`.** `suspend`, `reactivate`, `close`, `reopen`, `archive` and `closingChecklist`; companies carry a `lifecycle` (`state`, `suspendedBy`, `displayMessage`, `closeEffectiveDate`, `retentionUntil`). `list` hides archived companies unless you pass `includeArchived` or `lifecycleStates`.
- **`platform.transfers`.** `statement`, `list`, `cancel` and, on the receiving platform, `accept(code, externalId)`. The company admin consents in the embedded `company-transfer` element.
- **`platform.users.deprovision`.** Ends a user's tokens and embed sessions at once; `upsert` with the same `externalUserId` brings the user back.
- **`platform.audit`.** `list` (keyset pages, `nextCursor`), `iterate` and `export` over the audit log with platform context (token type, IP, request id, step-up assertion). Needs the `audit:read` scope and an admin role.

Wave 4.1: messages.

- **`platform.messages.*`.** `list` (offset paging), `acknowledge`, `acknowledgeMany`, `markRead`, `resend`, `catalogue`, `routing.list/set/clear` and `settings.retrieve/update`.
- **Message events.** `MessageCreatedEvent`, `MessageUnacknowledgedEvent` and `isMessageEvent`; `message.type` narrows `message.data` to the type's payload (`MessageData<'tax.filing_ready'>`), generated from the catalogue by `scripts/generate-message-types.ts`.

Wave 4: control surfaces.

- **Delegated actions.** `platform.providers`, `platform.paymentRequests` (list, retrieve, create for a tax filing or batch, report status, cancel), `platform.paymentLinks.provide`, `platform.taxReservation` and `platform.stepUp`. `signStepUp` signs the `FinBaze-Step-Up` assertion (ES256, EdDSA, RS256; Node only).
- **Policies.** `platform.policies`: schemas, list, `createDraft`, `activate`, `effective`, company `overrides` and sandbox to production `bundle` (`export`, `preview`, `confirm`).
- **Extensions.** `platform.extensions`: `customActions`, `slots`, `linkTemplates`, `customFields` and `fieldControl`.
- **Documents.** `platform.documentLayouts` (presets), `documentTemplates`, `documentRendering` (settings, jobs, `attach` by base64 or `uploadId`, `upload`), `documentFonts` (including `upload`) and `customDomains`.
- **Messaging extras.** `platform.messages.copy`, `senderDomains` and `notifications`; message types regenerated from the current catalogue (50 types).
- **Events.** `PlatformControlEvent` and `isControlEvent` cover `payment_request.*`, `payment_link.requested`, `tax_reservation.advised`, `step_up.required`, `document.render_*`, `document.official_copy_created`, `custom_domain.status_changed`, `custom_action.invoked`, `policy.activated` and `quota.reached`.

## 1.1.0

Wave 3: data in and out.

- **`platform.upsert.*`.** Create or update relations, products, projects, cost centers, sales and purchase invoices, journal entries, employees and employments by your own id (`unchanged` when nothing differs); `setMetadata` and `lookup`.
- **`platform.bulk.*`.** NDJSON uploads over REST (`create`), `retrieve` with per-line results, `list`, `cancel` and `wait`.
- **`platform.dataSources.*`, `platform.bankFeed.*`.** Register and attach sources, deliver bank accounts, transactions, balances, watermarks and worked hours, upload camt.053/052 and MT940 files, read feed health.
- **`platform.bankTransactions.bookings`.** What happened to your transactions in the books.
- **`platform.records.*`, `platform.flowTemplates.*`.** Record types and records, flow templates (save, test, activate) and their runs.
- **`platform.events.*`, `platform.webhookEndpoints.*`.** The event catalogue and ordered event feed; webhook endpoints with secret rotation, deliveries, replay and resend.
- **`platform.reports`, `platform.documents`, `platform.exports`.** Reports, documents behind signed links, the audit file, and export destinations and schedules.
- **Webhooks.** `webhooks.constructPlatformEvent` (typed envelope) and `constructEvent` both take one secret or a list, so a rotation needs no gap.
- **HTTP.** `FinbazeHttpClient.rest` for the two REST endpoints (bulk jobs, statement files).

## 1.0.0

- **Auth.** `secretKey` (platform secret and restricted keys), with the API host chosen by key (`fb_sk_test_…` → sandbox). `asUser()` returns a client acting as one platform user, with the token minted and cached for you.
- **Requests.** `FinBaze-Version`, `User-Agent` (with `appInfo`) and `Idempotency-Key` headers; retries with backoff for network errors, 429 and 503 (mutations only with an idempotency key, which is generated when retries are on); per-attempt timeout; `AbortSignal`.
- **Errors.** `FinbazeRateLimitError`, `FinbazeSignatureVerificationError`; `requestId`, `code`, `param` and `docUrl` on errors; a refused cached token is dropped.
- **`platform.*`.** Companies, users, user tokens, embed sessions, features (allowance, limits, effective), usage, allowed origins.
- **`companies.*`.** `bankAccounts`, `transactions` (list, retrieve, by your own id, `bookings`, `attachReceipt`), `documents` (list, retrieve, upload), `filings.paymentSummary`, `taxCalendar`, `actionItems`. `profiles` stays as an alias.
- **Webhooks.** `webhooks.constructEvent` and `generateTestHeader` (WebCrypto).
- **OAuth.** `Finbaze.oauth({ clientId })`: authorize URL, PKCE, code exchange, refresh; `decodeAccessToken`.

- **Operations.** `@finbaze/platform-sdk/operations`: a typed function for every operation a platform key or token can reach (separate entry point; `finbaze.operations` as a property would have put about 160 KB gzipped into every bundle).

Not yet: `filings.list` / `retrieve` / `paymentInstruction` / `pdf` (the API has no root query for them).
