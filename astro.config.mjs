import { defineConfig } from 'astro/config';

// Демо нового лендинга TargetFactory /flowers на GitHub Pages
export default defineConfig({
  site: 'https://korolevuiux-glitch.github.io',
  base: '/tema-mail-tf-flowers-v2',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
