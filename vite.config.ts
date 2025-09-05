import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base path for deployment (GitHub Pages)
  base: "/NxtWaveHackathon/",

  // Dev server configuration (for local development)
  server: {
    host: "::", // listens on all IPv6 interfaces
    port: 8080,
  },

  // Plugins
  plugins: [
    react(),                        // React plugin
    mode === "development" && componentTagger(), // Only in dev mode
  ].filter(Boolean),

  // Resolve aliases
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // '@' points to ./src
    },
  },
}));


