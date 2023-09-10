import { defineConfig } from "astro/config";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://martinstanicio.github.io",
  base: "/desvelados",
  integrations: [tailwind(), sitemap(), prefetch()],
});
