// @ts-check
// @ts-check
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server", // keep server output if you need SSR / server routes
  integrations: [tailwind()],
  redirects: {
    "/": "/en",
  },
  adapter: netlify(),
});
