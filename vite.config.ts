import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 👈 This is important
    strictPort: false,
    port: 5173,
    allowedHosts: [".csb.app"], // 👈 This line fixes the "host not allowed" error
  },
});
