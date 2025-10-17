import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/admin/',
          '/*?preview=true*',  // Block preview pages
          '/search?*'          // Block all search query variations
        ],
      },
      {
        userAgent: ['GPTBot', 'Google-Extended', 'ChatGPT-User'], // Blocks AI crawlers
        disallow: '/',
      }
    ],
    sitemap: ['https://machwristbands.lk/sitemap.xml','https://machwristbands.lk/sitemap_image.xml'],
    host: 'https://machwristbands.lk',
  };
}
