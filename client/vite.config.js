import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
    watch: {
      usePolling: true,
      interval: 100,
    },
    host: "0.0.0.0",
    strictPort: true,
    port: 5173,
  },
  build: {
    outDir: "dist",
  },
});
