import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://QUICKSTART.com",
  output: "hybrid",
  prefetch: true,
  adapter: cloudflare(),
  experimental: {
    contentCollectionCache: true,
  },
  integrations: [solidJs(), tailwind({ applyBaseStyles: false })],
});
