# Examples

- `node-server`: a backend that creates a company and user and an embed session (`POST /finbaze/session`).
- `react-app`: a Vite app that shows the tax calendar and transactions with `@finbaze/embed-react`, using that endpoint.

Run against the sandbox: start the server with `FINBAZE_SECRET_KEY=fb_sk_test_…`, then the app with
`VITE_FINBAZE_PUBLISHABLE_KEY=fb_pk_test_… npm run dev`. Add `http://localhost:3000` to your platform's allowed origins first.
