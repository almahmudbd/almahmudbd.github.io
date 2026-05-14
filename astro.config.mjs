// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://almahmudbd.github.io/',
  vite: {
    server: {
      host: true,
      allowedHosts: [
        "almahmud.pro.bd"
      ]
    }
  },
  redirects: {
    '/consulting': '/appointment',
    '/blog': '/social',
    '/serial': '/appointment',
    '/consult': '/appointment',
    '/raqilist': 'https://amarbokbok.vercel.app/blogs/raqilist',
    '/fb': 'https://www.facebook.com/almahmud1234',
    '/page': 'https://www.facebook.com/thealmahmud2',
    '/yt': 'https://youtube.com/c/thealmahmud',
  }
});
