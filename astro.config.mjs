import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://amauriswill.github.io',
  base: '/astroauriswill.github.io',
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
