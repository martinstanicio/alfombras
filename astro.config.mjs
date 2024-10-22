import { defineConfig } from "astro/config";
import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://martinstanicio.github.io",
  base: "/alfombras",
  integrations: [tailwind(), prefetch()],
});
