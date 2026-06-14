import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const readingTime = Math.ceil((article.content?.split(' ').length || 0) / 200);

  return (
    <Link href={`/articles/${article.slug}`}>
      <article className="group overflow-hidden rounded-lg border border-sacred-green/10 bg-white transition-shadow hover:shadow-lg">
        {article.thumbnail && (
          <div className="relative h-48 w-full overflow-hidden bg-sacred-green/5">
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}

        <div className="p-6">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {article.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="inline-block rounded-full bg-deep-gold/10 px-3 py-1 text-xs font-semibold text-deep-gold">
                {tag}
              </span>
            ))}
            {readingTime > 0 && (
              <span className="ml-auto text-xs text-gray-500">{readingTime} min read</span>
            )}
          </div>

          <h3 className="mb-2 line-clamp-2 text-xl font-serif font-bold text-sacred-green group-hover:text-deep-gold">
            {article.title}
          </h3>

          <p className="mb-4 line-clamp-2 text-gray-600">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <time dateTime={article.published}>
              {new Date(article.published).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="text-deep-gold font-semibold">Read →</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
