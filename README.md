# @finbaze/platform-sdk

Stripe-style TypeScript SDK for the FinBaze v2 GraphQL API. Works in Node 18+ and modern browsers.

## Install

```bash
npm install @finbaze/platform-sdk
```

## Authenticate

### Platform key (your backend)

```ts
import Finbaze from "@finbaze/platform-sdk";

const finbaze = new Finbaze({
  secretKey: process.env.FINBAZE_SECRET_KEY, // fb_sk_live_… / fb_sk_test_… / fb_rk_…
});
```

Test keys use the sandbox API (`https://sandbox.api.platform.finbaze.com`), live keys the live API. Override with `baseUrl`.

### Access token

```ts
const finbaze = new Finbaze({ accessToken: process.env.FINBAZE_ACCESS_TOKEN });
```

### API credentials (client_credentials)

```ts
const finbaze = new Finbaze({
  clientId: process.env.FINBAZE_CLIENT_ID,
  clientSecret: process.env.FINBAZE_CLIENT_SECRET,
  profileId: process.env.FINBAZE_PROFILE_ID,
});
```

### Options

| Option | Default | |
|---|---|---|
| `maxNetworkRetries` | 2 | Network errors, 429 and 503. Mutations retry only with an idempotency key (one is generated when this is above 0). |
| `timeoutMs` | 30 000 | Per attempt |
| `apiVersion` | `2026-11-01` | Sent as `FinBaze-Version` |
| `appInfo` | | `{ name, version, url }`, appended to the User-Agent |
| `fetch` | global | Bring your own |

Every call accepts `{ idempotencyKey, signal }` as its last argument where it writes.

## Platforms

```ts
const company = await finbaze.platform.companies.create({
  externalId: "acme-1", // your id; the same id returns the same company
  registrationCountry: "NL",
  registrationNumber: "12345678",
});

const user = await finbaze.platform.users.upsert({ externalUserId: "user-42", firstName: "Sam", lastName: "Jansen" });
await finbaze.platform.users.setAccess({ userId: user.id, companyId: company.id, role: "admin" });

// In your "create session" endpoint:
const session = await finbaze.platform.embedSessions.create({
  company: company.id,
  user: { externalId: "user-42" },
  components: { taxCalendar: { enabled: true }, vatReturn: { enabled: true, features: { submit: false } } },
  previousSessionId: req.body.previousSessionId,
});
res.json({ clientSecret: session.clientSecret }); // single use; mint a new one every time

await finbaze.platform.users.removeAccess({ userId: user.id, companyId: company.id }); // also revokes the user's sessions
```

Also: `platform.userTokens`, `platform.features` (allowance, limits, effective), `platform.usage`, `platform.origins`. Lists page with `limit` / `starting_after` and have `autoPagingEach` and `autoPagingToArray`.

### Act as one user

```ts
const asUser = finbaze.asUser({ externalUserId: "user-42" }, { companyIds: [company.id] });
const calendar = await asUser.companies.taxCalendar.retrieve(company.id, { year: 2026 });
```

The user token is minted on demand, cached until a minute before it expires and replaced when it lapses.

## Company resources

```ts
const txs = await asUser.companies.transactions.list(company.id, { processed: false, limit: 50 });
const [booking] = await asUser.companies.transactions.bookings(company.id, [{ bankAccountId, externalId: "your-id" }]);
await asUser.companies.transactions.attachReceipt(txs.data[0].id, { file: bytes, filename: "r.pdf", contentType: "application/pdf" });

const docs = await asUser.companies.documents.list(company.id);
await asUser.companies.documents.upload(company.id, { file: bytes, filename: "bill.pdf", contentType: "application/pdf" });

const items = await asUser.companies.actionItems.list(company.id);
const summary = await asUser.companies.filings.paymentSummary(filingId);
```

The existing resources are unchanged and also live under `finbaze.companies` (`finbaze.profiles` is an alias):

```ts
const invoices = await finbaze.companies.salesInvoices.list(companyId, { limit: 50 });
await invoices.autoPagingEach(async (invoice) => console.log(invoice.number));
const created = await finbaze.companies.salesInvoices.create(companyId, { /* CreateSalesInvoiceInput */ });
await finbaze.companies.salesInvoices.close(created.id);
```

## Webhooks

```ts
app.post("/webhooks/finbaze", express.raw({ type: "application/json" }), async (req, res) => {
  try {
    const event = await finbaze.webhooks.constructEvent(req.body, req.header("x-finbaze-signature")!, process.env.FINBAZE_WEBHOOK_SECRET!);
    // dedupe on event.eventId
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400); // FinbazeSignatureVerificationError
  }
});
```

Pass the raw body, not parsed JSON. `constructEvent` returns a Promise (WebCrypto is async; Stripe's is sync). In tests, `generateTestHeader({ payload, secret })` makes a valid header.

## OAuth for marketplace apps

```ts
import Finbaze, { generatePkce } from "@finbaze/platform-sdk";

const oauth = Finbaze.oauth({ clientId: "my-app" }); // clientSecret for confidential apps
const pkce = await generatePkce();
const url = oauth.authorizeUrl({ webBaseUrl: "https://platform.finbaze.com", redirectUri, scopes: ["relations:write"], state, codeChallenge: pkce.challenge });
// … after the redirect:
const tokens = await oauth.exchangeCode({ code, redirectUri, codeVerifier: pkce.verifier });
const refreshed = await oauth.refresh(tokens.refresh_token!);
const client = new Finbaze({ accessToken: tokens.access_token });
```

## Every operation, typed

```ts
import { operations } from "@finbaze/platform-sdk/operations";

const ops = operations(finbaze);
const { platformCompany } = await ops.platformCompany({ externalId: "acme-1" });
```

One typed function per root field a platform key or token can reach (about 850), generated from the schema and selecting scalar fields to depth 2. It is a separate entry point because it is large (about 160 KB gzipped); the core client does not include it. For other selections use `finbaze.graphql`.

## Errors

| Class | When |
|---|---|
| `FinbazeGraphQLError` | The API returned errors. `code` (e.g. `FEATURE_DISABLED`, `BAD_USER_INPUT`), `param`, `requestId`. |
| `FinbazeAuthenticationError` | Bad credentials or a refused token. |
| `FinbazeRateLimitError` | 429 after the retries; `retryAfterSeconds`. |
| `FinbazeSignatureVerificationError` | Webhook verification failed. |

## Raw GraphQL

```ts
import { graphql } from "@finbaze/platform-sdk/graphql";

const MyQuery = graphql(`
  query MyQuery($id: ID!) {
    salesInvoice(id: $id) {
      id
      number
    }
  }
`);

const data = await finbaze.graphql.request(MyQuery, { id: "..." });
```

## Development

The GraphQL types and documents are generated from `apps/api/schema.gql` in the platform monorepo (`FINBAZE_SCHEMA` points elsewhere):

```bash
npm install
npm run build   # codegen + tsup
npm test
npm run typecheck
```
