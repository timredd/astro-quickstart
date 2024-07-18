import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import solidJs from "@astrojs/solid-js";
import { passthroughImageService } from "astro/config";

export default defineConfig({
  // site: "http://<QUICKSTART>.com",
  output: "server",
  prefetch: true,
  integrations: [solidJs(), tailwind({ applyBaseStyles: false })],
  image: { service: passthroughImageService() },
  adapter: cloudflare({
    platformProxy: { enabled: true },
  }),
  experimental: {
    contentCollectionCache: true,
    env: {
      schema: {
        API_URL: envField.string({
          context: "client",
          access: "public",
          optional: true,
        }),
        PORT: envField.number({
          context: "server",
          access: "public",
          default: 4321,
        }),
        API_SECRET: envField.string({ context: "server", access: "secret" }),
      },
    },
  },
});
