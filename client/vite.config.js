import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: {
    port: 4000,
  },
  build: {
    outDir: "../docs",
  },
  plugins: [react()],
});
