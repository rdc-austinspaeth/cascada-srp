import { defineConfig } from 'vite';
import { compression } from 'vite-plugin-compression2'

import react from '@vitejs/plugin-react-swc';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin({ identifiers: 'short' }),
    compression(),
  ],
  server: {
    port: 8000,
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/index.js`,
      },
    },
  }
});
