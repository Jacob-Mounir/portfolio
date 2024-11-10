import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name',
  integrations: [tailwind(), react()],
  output: 'static'
});