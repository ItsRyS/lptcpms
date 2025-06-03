import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
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
