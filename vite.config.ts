import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/sales-dashboard/",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
