import { getArticles, getArticleBySlug } from '@/lib/notion';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get('tag') || undefined;
  const slug = searchParams.get('slug') || undefined;

  try {
    if (slug) {
      const article = await getArticleBySlug(slug);
      return Response.json(article);
    }

    const articles = await getArticles(tag as any);
    return Response.json(articles);
  } catch (error) {
    console.error('API Error:', error);
    return Response.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}
