import { VitePWA } from 'vite-plugin-pwa';
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
  plugins: [
    react(),
    eslintPlugin(),
    VitePWA({
      manifest: {
        icons: [
          {
            sizes: '256x256',
            src: '/icon-256x256.png',
            type: 'image/png'
          },
          {
            sizes: '512x512',
            src: '/icon-512x512.png',
            type: 'image/png'
          },
          {
            sizes: '1024x1024',
            src: '/icon-1024x1024.png',
            type: 'image/png'
          }
        ],
        name: 'Controle de frotas',
        short_name: 'Controle de frotas',
        theme_color: '#151519'
      }
    })
  ],
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
