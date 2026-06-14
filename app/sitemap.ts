import { MetadataRoute } from 'next';
import { getArticles, getTags } from '@/lib/notion';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://onsai.com';

  const articles = await getArticles();
  const tags = await getTags();

  const articleEntries = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: article.published,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const tagEntries = tags.map((tag) => ({
    url: `${baseUrl}/articles?tag=${encodeURIComponent(tag)}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...tagEntries,
    ...articleEntries,
  ];
}
