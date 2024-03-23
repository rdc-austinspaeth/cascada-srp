import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin({ identifiers: 'short' })],
  server: {
    port: 8888,
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/index.js`,
      },
    },
  }
});
