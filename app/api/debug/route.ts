import { getArticles } from '@/lib/notion';

export async function GET() {
  const articles = await getArticles();
  return Response.json(articles[0], { headers: { 'Content-Type': 'application/json' } });
}
