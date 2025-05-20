import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy all calls starting with /ai to the target API server
      '/ai': {
        target: 'https://extensions.aitopia.ai',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/ai/, '/ai'),
      },
      '/languages': {
        target: 'https://extensions.aitopia.ai',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/languages/, '/languages'),
      },
      '/extensions': {
        target: 'https://extensions.aitopia.ai',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/extensions/, '/extensions'),
      },
    },
  },
});
