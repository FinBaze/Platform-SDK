/**
 * A partner backend: creates companies and users, and hands the browser a client secret.
 *
 *   FINBAZE_SECRET_KEY=fb_sk_test_… npx tsx server.ts
 */
import { createServer } from "node:http";

import Finbaze from "@finbaze/platform-sdk";

const finbaze = new Finbaze({ secretKey: process.env.FINBAZE_SECRET_KEY, appInfo: { name: "example-node-server", version: "1.0.0" } });

/** Your own user store would go here. */
const demoUser = { id: "user-42", companyExternalId: "acme-1" };

async function ensureCompany() {
  return finbaze.platform.companies.create({ externalId: demoUser.companyExternalId, registrationCountry: "NL", registrationNumber: "12345678" });
}

createServer(async (req, res) => {
  if (req.method === "POST" && req.url === "/finbaze/session") {
    let body = "";
    for await (const chunk of req) body += chunk;
    const { previousSessionId } = JSON.parse(body || "{}") as { previousSessionId?: string };
    const company = await ensureCompany();
    const user = await finbaze.platform.users.upsert({ externalUserId: demoUser.id, firstName: "Demo", lastName: "User" });
    await finbaze.platform.users.setAccess({ userId: user.id, companyId: company.id, role: "admin" });
    const session = await finbaze.platform.embedSessions.create({
      company: company.id,
      user: { id: user.id },
      components: { taxCalendar: { enabled: true }, transactions: { enabled: true } },
      previousSessionId,
    });
    res.writeHead(200, { "content-type": "application/json" }).end(JSON.stringify({ clientSecret: session.clientSecret }));
    return;
  }
  res.writeHead(404).end();
}).listen(4001, () => console.log("http://localhost:4001"));
