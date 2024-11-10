import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://jacob-mounir.github.io',
  base: '/portfolio',
  integrations: [tailwind(), react()],
  output: 'static'
});