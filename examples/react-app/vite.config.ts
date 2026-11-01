import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// /finbaze/session is the example-node-server endpoint.
export default defineConfig({ plugins: [react()], server: { port: 3000, proxy: { "/finbaze": "http://localhost:4001" } } });
