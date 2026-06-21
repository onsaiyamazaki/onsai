export const dynamic = "force-dynamic";

import { Metadata } from 'next';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getArticleBySlug, getArticles } from '@/lib/notion';
import { generateMetadata as generateSEO } from '@/lib/seo';
import ArticleCard from '@/components/ArticleCard';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return generateSEO({
    title: article.title,
    description: article.excerpt,
    image: article.thumbnail,
    url: `/articles/${article.slug}`,
    type: 'article',
  });
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return (
      <>
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-serif font-bold text-sacred-green">
              Article Not Found
            </h1>
            <p className="mb-8 text-gray-600">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/articles">
              <button className="rounded-lg bg-deep-gold px-8 py-3 font-semibold text-charcoal transition-transform hover:scale-105">
                Back to Articles
              </button>
            </Link>
          </div>
        </section>
      </>
    );
  }

  // Fetch related articles
  const primaryTag = article.tags[0];
  const allArticles = primaryTag ? await getArticles(primaryTag) : [];
  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <>
      {/* Article Header */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Navigation */}
          <div className="mb-8 flex items-center gap-2 text-sm text-gray-600">
            <Link href="/articles" className="hover:text-deep-gold">
              Articles
            </Link>
            {article.tags.length > 0 && (
              <>
                <span>/</span>
                <Link
                  href={`/articles?tag=${encodeURIComponent(article.tags[0])}`}
                  className="hover:text-deep-gold"
                >
                  {article.tags[0]}
                </Link>
              </>
            )}
            <span>/</span>
            <span className="text-charcoal">{article.title}</span>
          </div>

          {/* Meta */}
          <div className="mb-8">
            <div className="mb-4 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <div key={tag} className="inline-block rounded-full bg-deep-gold/10 px-4 py-1">
                  <span className="text-sm font-semibold text-deep-gold">
                    {tag}
                  </span>
                </div>
              ))}
            </div>

            <h1 className="mb-4 text-5xl font-serif font-bold text-sacred-green">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <time dateTime={article.published}>
                {new Date(article.published).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>•</span>
              <span>
                {Math.ceil(
                  (article.content?.split(' ').length || 0) / 200
                )}{' '}
                min read
              </span>
            </div>
          </div>

          {/* Featured Image */}
          {article.thumbnail && (
            <div className="mb-12 overflow-hidden rounded-lg">
              <img
                src={article.thumbnail}
                alt={article.title}
                className="h-96 w-full object-cover"
              />
            </div>
          )}

          {/* Excerpt */}
          <p className="mb-8 text-xl leading-relaxed text-gray-700">
            {article.excerpt}
          </p>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12 text-gray-800">
            {article.content ? (
              <ReactMarkdown
                components={{
                  h1: ({node, ...props}) => <h1 className="text-3xl font-serif font-bold text-sacred-green mt-8 mb-4" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-2xl font-serif font-bold text-sacred-green mt-6 mb-3" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-xl font-serif font-bold text-sacred-green mt-4 mb-2" {...props} />,
                  p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
                  li: ({node, ...props}) => <li className="mb-1" {...props} />,
                  blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-deep-gold pl-4 italic text-gray-700 my-4" {...props} />,
                  img: ({node, ...props}) => <img className="rounded-lg my-6 max-w-full h-auto" {...props} />,
                  a: ({node, ...props}) => <a className="text-deep-gold hover:underline" {...props} />,
                }}
              >
                {article.content}
              </ReactMarkdown>
            ) : (
              <div className="rounded-lg border-2 border-dashed border-sacred-green/20 bg-sacred-green/5 p-8 text-center text-gray-600">
                <p className="mb-2">📝 No content yet</p>
                <p className="text-sm">
                  Add content in Markdown format to the "Contents" field in your Notion database
                </p>
              </div>
            )}
          </div>

          {/* Related Tours Section */}
          <section className="mb-12 rounded-lg border-2 border-sacred-green/10 bg-cream/50 p-8">
            <h2 className="mb-6 text-2xl font-serif font-bold text-sacred-green">
              Experience This Destination
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Sample tour cards */}
              <div className="rounded-lg border border-sacred-green/20 bg-white p-6">
                <h4 className="mb-2 font-serif font-bold text-sacred-green">
                  Guided Shrine Tour
                </h4>
                <p className="mb-4 text-sm text-gray-600">
                  Explore sacred shrines with an expert guide
                </p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-sacred-green">
                    From $45
                  </span>
                </div>
                <button className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition-transform hover:scale-105">
                  View on Viator
                </button>
              </div>

              <div className="rounded-lg border border-sacred-green/20 bg-white p-6">
                <h4 className="mb-2 font-serif font-bold text-sacred-green">
                  Spiritual Experience
                </h4>
                <p className="mb-4 text-sm text-gray-600">
                  Immerse yourself in Japanese spiritual practices
                </p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-sacred-green">
                    From $60
                  </span>
                </div>
                <button className="w-full rounded-lg bg-green-600 py-2 font-semibold text-white transition-transform hover:scale-105">
                  View on GetYourGuide
                </button>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section>
              <h2 className="mb-8 text-3xl font-serif font-bold text-sacred-green">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {relatedArticles.map((relatedArticle) => (
                  <ArticleCard
                    key={relatedArticle.id}
                    article={relatedArticle}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  );
}
