import { Hono } from "hono";

import type { APIRoute } from "astro";

const app = new Hono().basePath("/api");

export const ALL: APIRoute = (context) => app.fetch(context.request);
export type App = typeof app;
