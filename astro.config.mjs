import { defineConfig } from 'astro/config';

// Демо нового лендинга TargetFactory /flowers на GitHub Pages
export default defineConfig({
  site: 'https://deford2027.github.io',
  base: '/tf-flowers',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
