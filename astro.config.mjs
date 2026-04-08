// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://flux.com",
  devToolbar: {
    enabled: false, // <-- Correct way to disable the DevToolbar
  },
  integrations: [sitemap(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
