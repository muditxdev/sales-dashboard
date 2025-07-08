import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "sales-dashboard";

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
