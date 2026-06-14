// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  outDir: '../glow-and-harmony.web.app',
  vite: {
    plugins: [tailwindcss()],
  },
});