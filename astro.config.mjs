// @ts-check
import { defineConfig } from 'astro/config';

import db from '@astrojs/db';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [db()],
  adapter: cloudflare()
});