'use client';

export const dynamic = "force-dynamic";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ArticleCard from '@/components/ArticleCard';
import { Article, Tag } from '@/types';
import { TAG_LIST } from '@/config/tags';
import { DUMMY_ARTICLES } from '@/lib/dummy-articles';

export default function ArticlesPage() {
  const searchParams = useSearchParams();
  const tagParam = searchParams.get('tag') as Tag | null;

  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedTag, setSelectedTag] = useState<Tag | null>(tagParam);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const url = selectedTag
          ? `/api/articles?tag=${encodeURIComponent(selectedTag)}`
          : '/api/articles';
        const response = await fetch(url);
        const data = await response.json();

        if (data.length === 0) {
          setArticles(
            selectedTag
              ? DUMMY_ARTICLES.filter((a) => a.tags.includes(selectedTag))
              : DUMMY_ARTICLES
          );
        } else {
          setArticles(data);
        }
        setError(null);
      } catch (err) {
        setError('Failed to load articles. Please try again later.');
        console.error(err);
        setArticles(DUMMY_ARTICLES);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [selectedTag]);

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-sacred-green/10 to-transparent py-16">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-5xl font-serif font-bold text-sacred-green">
            Articles & Guides
          </h1>
          <p className="max-w-2xl text-gray-600">
            Discover in-depth guides about Japanese spiritual sites, fortune
            telling practices, and travel recommendations
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter Bar */}
          <div className="mb-12 flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedTag(null)}
              className={`rounded-full px-6 py-2 font-semibold transition-colors ${
                selectedTag === null
                  ? 'bg-deep-gold text-charcoal'
                  : 'border-2 border-sacred-green/30 text-sacred-green hover:border-deep-gold'
              }`}
            >
              All
            </button>
            {TAG_LIST.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`rounded-full px-6 py-2 font-semibold transition-colors ${
                  selectedTag === tag
                    ? 'bg-deep-gold text-charcoal'
                    : 'border-2 border-sacred-green/30 text-sacred-green hover:border-deep-gold'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="py-12 text-center">
              <div className="mb-4 inline-block">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-deep-gold border-t-sacred-green" />
              </div>
              <p className="text-gray-600">Loading articles...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="rounded-lg border-2 border-red-200 bg-red-50 p-6 text-center text-red-700">
              {error}
            </div>
          )}

          {/* Articles Grid */}
          {!isLoading && articles.length > 0 && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}

          {/* Empty State */}
          {!isLoading && articles.length === 0 && !error && (
            <div className="rounded-lg border-2 border-dashed border-sacred-green/20 bg-sacred-green/5 p-12 text-center">
              <h3 className="mb-2 text-xl font-semibold text-sacred-green">
                No articles found
              </h3>
              <p className="text-gray-600">
                Try selecting a different tag
              </p>
            </div>
          )}

          {/* Setup Guide */}
          <div className="mt-12 rounded-lg border-l-4 border-deep-gold bg-cream p-6">
            <h3 className="mb-2 font-semibold text-sacred-green">
              Getting Started
            </h3>
            <p className="text-sm text-gray-600">
              To populate this page with your own articles:
            </p>
            <ol className="mt-3 space-y-1 text-sm text-gray-600">
              <li>1. Create a Notion database with article data</li>
              <li>2. Add NOTION_API_KEY and NOTION_DATABASE_ID to .env.local</li>
              <li>3. Articles will appear here automatically</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
