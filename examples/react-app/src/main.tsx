import { FinBazeProvider, FinBazeTaxCalendar, FinBazeTransactions } from "@finbaze/embed-react";
import { createRoot } from "react-dom/client";

async function fetchClientSecret({ previousSessionId }: { previousSessionId?: string }) {
  const res = await fetch("/finbaze/session", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ previousSessionId }),
  });
  if (!res.ok) throw new Error("Could not start a FinBaze session");
  return ((await res.json()) as { clientSecret: string }).clientSecret;
}

createRoot(document.getElementById("root")!).render(
  <FinBazeProvider publishableKey={import.meta.env.VITE_FINBAZE_PUBLISHABLE_KEY} fetchClientSecret={fetchClientSecret} appearance={{ theme: "auto" }}>
    <h1>Taxes</h1>
    <FinBazeTaxCalendar />
    <h1>Transactions</h1>
    <FinBazeTransactions />
  </FinBazeProvider>,
);
