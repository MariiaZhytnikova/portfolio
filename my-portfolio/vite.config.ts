import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/portfolio/' : '/',
    plugins: [react(), svgr()],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes("node_modules")) {
              return undefined;
            }

            if (id.includes("pixi.js")) return "pixi";
            if (id.includes("matter-js")) return "matter";
            if (id.includes("styled-components")) return "styled-components";
            if (id.includes("framer-motion")) return "framer-motion";

            return "vendor";
          },
        },
      },
    },
  }
})