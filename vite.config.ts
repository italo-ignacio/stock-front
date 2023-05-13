import { defineConfig } from 'vite';
import { resolve } from 'path';
import eslintPlugin from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';

//  https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
    outDir: './build'
  },
  plugins: [react(), eslintPlugin()],
  resolve: {
    alias: [
      {
        find: 'data',
        replacement: resolve(__dirname, 'src/data')
      },
      {
        find: 'domain',
        replacement: resolve(__dirname, 'src/domain')
      },
      {
        find: 'infra',
        replacement: resolve(__dirname, 'src/infra')
      },
      {
        find: 'main',
        replacement: resolve(__dirname, 'src/main')
      },
      {
        find: 'presentation',
        replacement: resolve(__dirname, 'src/presentation')
      },
      {
        find: 'validation',
        replacement: resolve(__dirname, 'src/validation')
      },
      {
        find: 'store',
        replacement: resolve(__dirname, 'src/store')
      }
    ]
  }
});
