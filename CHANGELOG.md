# Changelog

## Unreleased

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
