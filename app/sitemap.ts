import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://revoticai.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://revoticai.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://revoticai.com/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://revoticai.com/services/ai-ml', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://revoticai.com/services/automation', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://revoticai.com/services/web-app', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://revoticai.com/services/ui-ux', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://revoticai.com/services/game-dev', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://revoticai.com/case-studies', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://revoticai.com/industries', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://revoticai.com/process', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://revoticai.com/blogs', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://revoticai.com/career', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://revoticai.com/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://revoticai.com/portfolio', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://revoticai.com/experts', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://revoticai.com/pricing', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://revoticai.com/products', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
