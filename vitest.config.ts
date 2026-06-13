import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    exclude: ['**/node_modules/**', '**/dist/**', '**/src/test/e2e/**'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['src/test/**/*', 'src/main.tsx', 'vite.config.ts', 'src/types.ts', 'src/types/**/*', 'src/hooks/useAuth.tsx', 'src/services/firebase.ts', 'src/services/bigqueryService.ts', 'server.ts', 'src/App.tsx'],
    },
  },
});
