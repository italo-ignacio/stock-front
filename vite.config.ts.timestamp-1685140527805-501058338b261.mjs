// vite.config.ts
import { VitePWA } from 'file:///C:/Users/iti/Desktop/projeto-estoque/node_modules/vite-plugin-pwa/dist/index.js';
import { defineConfig } from 'file:///C:/Users/iti/Desktop/projeto-estoque/node_modules/vite/dist/node/index.js';
import { resolve } from 'path';
import eslintPlugin from 'file:///C:/Users/iti/Desktop/projeto-estoque/node_modules/vite-plugin-eslint/dist/index.mjs';
import react from 'file:///C:/Users/iti/Desktop/projeto-estoque/node_modules/@vitejs/plugin-react/dist/index.mjs';

const __vite_injected_original_dirname = 'C:\\Users\\iti\\Desktop\\projeto-estoque';
const vite_config_default = defineConfig({
  build: {
    chunkSizeWarningLimit: 1e3,
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
            src: '/icon2.svg',
            type: 'image/svg'
          }
        ],
        name: 'Controle de frotas',
        short_name: 'Controle de frotas',
        theme_color: '#000'
      }
    })
  ],
  resolve: {
    alias: [
      {
        find: 'data',
        replacement: resolve(__vite_injected_original_dirname, 'src/data')
      },
      {
        find: 'domain',
        replacement: resolve(__vite_injected_original_dirname, 'src/domain')
      },
      {
        find: 'infra',
        replacement: resolve(__vite_injected_original_dirname, 'src/infra')
      },
      {
        find: 'main',
        replacement: resolve(__vite_injected_original_dirname, 'src/main')
      },
      {
        find: 'presentation',
        replacement: resolve(__vite_injected_original_dirname, 'src/presentation')
      },
      {
        find: 'validation',
        replacement: resolve(__vite_injected_original_dirname, 'src/validation')
      },
      {
        find: 'store',
        replacement: resolve(__vite_injected_original_dirname, 'src/store')
      }
    ]
  }
});

export { vite_config_default as default };
// # sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxpdGlcXFxcRGVza3RvcFxcXFxwcm9qZXRvLWVzdG9xdWVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGl0aVxcXFxEZXNrdG9wXFxcXHByb2pldG8tZXN0b3F1ZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvaXRpL0Rlc2t0b3AvcHJvamV0by1lc3RvcXVlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCBlc2xpbnRQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50JztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbi8vICBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYnVpbGQ6IHtcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDEwMDAsXG4gICAgb3V0RGlyOiAnLi9idWlsZCdcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgZXNsaW50UGx1Z2luKCksXG4gICAgVml0ZVBXQSh7XG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNpemVzOiAnMjU2eDI1NicsXG4gICAgICAgICAgICBzcmM6ICcvaWNvbjIuc3ZnJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9zdmcnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBuYW1lOiAnQ29udHJvbGUgZGUgZnJvdGFzJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ0NvbnRyb2xlIGRlIGZyb3RhcycsXG4gICAgICAgIHRoZW1lX2NvbG9yOiAnIzAwMCdcbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IFtcbiAgICAgIHtcbiAgICAgICAgZmluZDogJ2RhdGEnLFxuICAgICAgICByZXBsYWNlbWVudDogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvZGF0YScpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmaW5kOiAnZG9tYWluJyxcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2RvbWFpbicpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmaW5kOiAnaW5mcmEnLFxuICAgICAgICByZXBsYWNlbWVudDogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5mcmEnKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmluZDogJ21haW4nLFxuICAgICAgICByZXBsYWNlbWVudDogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvbWFpbicpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmaW5kOiAncHJlc2VudGF0aW9uJyxcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3ByZXNlbnRhdGlvbicpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmaW5kOiAndmFsaWRhdGlvbicsXG4gICAgICAgIHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy92YWxpZGF0aW9uJylcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZpbmQ6ICdzdG9yZScsXG4gICAgICAgIHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9zdG9yZScpXG4gICAgICB9XG4gICAgXVxuICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1MsU0FBUyxlQUFlO0FBQ2hVLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsZUFBZTtBQUN4QixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLFdBQVc7QUFKbEIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsdUJBQXVCO0FBQUEsSUFDdkIsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGFBQWE7QUFBQSxJQUNiLFFBQVE7QUFBQSxNQUNOLFVBQVU7QUFBQSxRQUNSLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRSxPQUFPO0FBQUEsWUFDUCxLQUFLO0FBQUEsWUFDTCxNQUFNO0FBQUEsVUFDUjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLE1BQU07QUFBQSxRQUNOLFlBQVk7QUFBQSxRQUNaLGFBQWE7QUFBQSxNQUNmO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsUUFBUSxrQ0FBVyxVQUFVO0FBQUEsTUFDNUM7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLFFBQVEsa0NBQVcsWUFBWTtBQUFBLE1BQzlDO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxRQUFRLGtDQUFXLFdBQVc7QUFBQSxNQUM3QztBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsUUFBUSxrQ0FBVyxVQUFVO0FBQUEsTUFDNUM7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLFFBQVEsa0NBQVcsa0JBQWtCO0FBQUEsTUFDcEQ7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLFFBQVEsa0NBQVcsZ0JBQWdCO0FBQUEsTUFDbEQ7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLFFBQVEsa0NBQVcsV0FBVztBQUFBLE1BQzdDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
