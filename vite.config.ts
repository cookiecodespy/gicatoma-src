import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repositoryBase = '/gicatoma-src/';

// https://vitejs.dev/config/
export default defineConfig({
  base: repositoryBase,
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
