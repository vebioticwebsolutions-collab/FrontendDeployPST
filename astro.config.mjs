import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://primesteeltech.com', // REQUIRED — sitemap needs your live domain to generate correct URLs
  output: 'static', // <-- This tells Astro to build normal HTML files that Hostinger expects
  integrations: [
    sitemap()
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});