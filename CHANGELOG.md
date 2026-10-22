# Changelog

## 1.0.0

- **Auth.** `secretKey` (platform secret and restricted keys), with the API host chosen by key (`fb_sk_test_…` → sandbox). `asUser()` returns a client acting as one platform user, with the token minted and cached for you.
- **Requests.** `FinBaze-Version`, `User-Agent` (with `appInfo`) and `Idempotency-Key` headers; retries with backoff for network errors, 429 and 503 (mutations only with an idempotency key, which is generated when retries are on); per-attempt timeout; `AbortSignal`.
- **Errors.** `FinbazeRateLimitError`, `FinbazeSignatureVerificationError`; `requestId`, `code`, `param` and `docUrl` on errors; a refused cached token is dropped.
- **`platform.*`.** Companies, users, user tokens, embed sessions, features (allowance, limits, effective), usage, allowed origins.
- **`companies.*`.** `bankAccounts`, `transactions` (list, retrieve, by your own id, `bookings`, `attachReceipt`), `documents` (list, retrieve, upload), `filings.paymentSummary`, `taxCalendar`, `actionItems`. `profiles` stays as an alias.
- **Webhooks.** `webhooks.constructEvent` and `generateTestHeader` (WebCrypto).
- **OAuth.** `Finbaze.oauth({ clientId })`: authorize URL, PKCE, code exchange, refresh; `decodeAccessToken`.

Not yet: `filings.list` / `retrieve` / `paymentInstruction` / `pdf` (the API has no root query for them), generated `finbaze.operations`.
