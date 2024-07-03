import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      '@/*': './src/*',
    },
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
    },
    prerender: {
      entries: ['/'],
    },
  },
  preprocess: vitePreprocess(),
};

export default config;