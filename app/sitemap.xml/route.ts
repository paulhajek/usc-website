import type { MetadataRoute } from 'next';
import { siteConfig } from '../../config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.seo.baseUrl;
  const routes = ['/', '/verein', '/training', '/mitgliedschaft', '/kontakt', '/impressum', '/datenschutz', '/satzung', '/spenden'];
  return routes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.6
  }));
}
