// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwindcss from '@tailwindcss/vite';

sitemap({
  filenameBase: 'sitemap'   // This makes it generate sitemap.xml + sitemap-index.xml
})

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  site: "https://watchhillguide.com",
  vite: {
    plugins: [tailwindcss()]
  }
});