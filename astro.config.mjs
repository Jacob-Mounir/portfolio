import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  base: '/portfolio',
  integrations: [tailwind(), react()],
  output: 'static'
});