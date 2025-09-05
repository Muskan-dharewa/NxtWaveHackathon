export default defineConfig(({ mode }) => ({
  base: "/NxtWaveHackathon/", // add this line
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

