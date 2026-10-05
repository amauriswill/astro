import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://amauriswill.github.io',
  base: '/astro',
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
    },
  },
});
