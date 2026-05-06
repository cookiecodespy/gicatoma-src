import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use relative asset paths so the build works on GitHub Pages,
// subfolders, and static previews without extra server config.
export default defineConfig({
  base: './',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
