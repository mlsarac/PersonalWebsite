import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  /** Yerel: .env içinde VITE_SITE_URL. Netlify: panelde tanımlayabilirsin; tanımlı değilse build’de otomatik gelen URL kullanılır. */
  const siteUrl = (
    env.VITE_SITE_URL ||
    process.env.URL ||
    process.env.DEPLOY_PRIME_URL ||
    ''
  )
    .trim()
    .replace(/\/$/, '');

  return {
    plugins: [
      react(),
      {
        name: 'html-site-url',
        transformIndexHtml(html) {
          if (!siteUrl) {
            return html
              .replace(/\s*<link rel="canonical" href="__SITE_BASE__\/" \/>\r?\n?/g, '')
              .replace(/\s*<meta property="og:url" content="__SITE_BASE__\/" \/>\r?\n?/g, '');
          }
          return html.replaceAll('__SITE_BASE__', siteUrl);
        },
      },
    ],
  };
});
