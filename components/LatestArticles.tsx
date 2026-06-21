'use client';

import { useState, useEffect } from 'react';
import ArticleCard from '@/components/ArticleCard';
import { Article } from '@/types';
import { DUMMY_ARTICLES } from '@/lib/dummy-articles';

export default function LatestArticles() {
  const [articles, setArticles] = useState<Article[]>(DUMMY_ARTICLES.slice(0, 3));

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles');
        const data = await response.json();
        if (data && data.length > 0) {
          setArticles(data.slice(0, 3)); // 最新3件
        }
      } catch (error) {
        console.error('Failed to fetch articles:', error);
        // エラー時はダミーを使用
        setArticles(DUMMY_ARTICLES.slice(0, 3));
      } finally {
        // Fetch completed
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
