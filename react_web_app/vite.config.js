import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Set base path for GitHub Pages so assets resolve correctly
  base: '/mcp-gene-variant-annotation/',
});
