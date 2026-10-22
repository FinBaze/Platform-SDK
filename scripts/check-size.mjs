// Fails when the ESM entry grows past its budget (gzip). The generated documents are tree-shaken per import,
// so this guards the shared core: client, HTTP, errors, webhooks, OAuth, resources.
import { readFileSync } from 'node:fs';
import { gzipSync } from 'node:zlib';

// 24 KB in 1.0; Wave 3 adds the data namespaces (upserts, bulk, feeds, records, events, reports, exports).
const BUDGET_BYTES = 40 * 1024;
const size = gzipSync(readFileSync(new URL('../dist/index.js', import.meta.url))).length;
console.log(`dist/index.js: ${(size / 1024).toFixed(1)} KB gzip (budget ${BUDGET_BYTES / 1024} KB)`);
if (size > BUDGET_BYTES) {
  console.error('The SDK bundle is over budget.');
  process.exit(1);
}
