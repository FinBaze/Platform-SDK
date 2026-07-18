# @finbaze/platform-sdk

Stripe-style TypeScript SDK for the FinBaze v2 GraphQL API. Works in Node 18+ and modern browsers.

## Install

```bash
npm install @finbaze/platform-sdk
```

## Authenticate

### Access token

```ts
import Finbaze from "@finbaze/platform-sdk";

const finbaze = new Finbaze({
  baseUrl: "https://api.platform.finbaze.com", // optional; this is the default
  accessToken: process.env.FINBAZE_ACCESS_TOKEN,
});
```

### API credentials (client_credentials)

Create credentials in the FinBaze app:

- **Profile (Scale plan):** Settings → API access
- **Bookkeeper:** Settings → API credentials (any attached client `profile_id`)

```ts
const finbaze = new Finbaze({
  clientId: process.env.FINBAZE_CLIENT_ID,
  clientSecret: process.env.FINBAZE_CLIENT_SECRET,
  profileId: process.env.FINBAZE_PROFILE_ID,
});
```

## Resource examples

```ts
const invoices = await finbaze.profiles.salesInvoices.list(profileId, {
  limit: 50,
});

for (const invoice of invoices.data) {
  console.log(invoice.number);
}

if (invoices.has_more && invoices.next_cursor) {
  const next = await finbaze.profiles.salesInvoices.list(profileId, {
    limit: 50,
    starting_after: invoices.next_cursor,
  });
}

await invoices.autoPagingEach(async (invoice) => {
  console.log(invoice.id);
});

const created = await finbaze.profiles.salesInvoices.create(profileId, {
  /* CreateSalesInvoiceInput */
});

await finbaze.profiles.salesInvoices.update(created.id, { reference: "PO-1" });
await finbaze.profiles.salesInvoices.retrieve(created.id);
await finbaze.profiles.salesInvoices.close(created.id);
```

### API credentials via SDK

```ts
const cred = await finbaze.profiles.apiCredentials.create(profileId, {
  name: "CI",
});
// cred.clientId / cred.clientSecret (secret shown once)

await finbaze.bookkeepers.apiCredentials.create(bookkeeperId, {
  name: "Firm integration",
});
```

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
// or: finbaze.graphql.query / .mutate with a string or TypedDocumentNode
```

## Pagination

List methods return:

```ts
{
  object: "list",
  data: T[],
  has_more: boolean,
  next_cursor: string | null,
}
```

Use `starting_after` / `ending_before` (mapped to GraphQL cursors) and `autoPagingEach` / `autoPagingToArray`.
