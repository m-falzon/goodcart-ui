import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// The docs site lives in docs/; components are imported from src/ exactly as consumers get them.
export default defineConfig({
  root: 'docs',
  base: './',
  plugins: [react()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  css: { postcss: fileURLToPath(new URL('./postcss.config.cjs', import.meta.url)) },
  server: { port: 9010, fs: { allow: ['..'] } },
  build: { outDir: '../dist', emptyOutDir: true },
});
