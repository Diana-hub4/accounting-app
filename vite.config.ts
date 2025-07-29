import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [
    angular({
      tsconfig: 'tsconfig.json',
      jit: true
    })
  ],
  server: {
    port: 5173,
    strictPort: true
  },
  build: {
    target: 'es2022'
  }
});