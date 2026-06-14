import { defineConfig } from 'vite';

// Base is relative so the build works both at the domain root and in subpaths.
export default defineConfig({
  base: './',
  build: { outDir: 'dist', emptyOutDir: true },
});
