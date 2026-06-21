import { MetadataRoute } from 'next';
import { getArticles } from '@/lib/notion';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://onsai-site.vercel.app';

  // 静的ページ
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // 記事ページ（Notion から動的取得）
  try {
    const articles = await getArticles();
    const articlePages: MetadataRoute.Sitemap = articles
      .filter((article) => article.slug)
      .map((article) => ({
        url: `${baseUrl}/articles/${article.slug}`,
        lastModified: article.published ? new Date(article.published) : new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }));

    return [...staticPages, ...articlePages];
  } catch (error) {
    console.error('Failed to fetch articles for sitemap:', error);
    return staticPages;
  }
}
