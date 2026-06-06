import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://starkindle.com';
  
  const paths = [
    { url: '', changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: '/premium-portfolio', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: '/etymology-space', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/etymology-publishing', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/domain-escrow-security', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/domain-age-seo-value', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/brand-naming-synergy', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/aerospace-telemetry-branding', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/digital-publishing-growth', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/trademark-availability-guide', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/whois-registration-history', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/faq-domain-acquisition', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/sitemap', changeFrequency: 'weekly' as const, priority: 0.7 },
  ];

  return paths.map((p) => ({
    url: `${baseUrl}${p.url}`,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
