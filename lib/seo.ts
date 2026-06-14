import { Metadata } from 'next';
import { SEOMetadata } from '@/types';

const defaultSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://onsai.com';
const siteName = 'ONSAI';
const defaultDescription = 'Discover Japanese shrines, fortune telling, and power spots. Your guide to spiritual travel in Japan.';

export function generateMetadata(seo: SEOMetadata): Metadata {
  const url = `${defaultSiteUrl}${seo.url}`;

  return {
    title: `${seo.title} | ${siteName}`,
    description: seo.description || defaultDescription,
    metadataBase: new URL(defaultSiteUrl),
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: url,
      type: (seo.type as any) || 'website',
      siteName,
      images: seo.image ? [{ url: seo.image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: seo.image ? [seo.image] : [],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateStructuredData(data: any) {
  return {
    __html: JSON.stringify(data),
  };
}

export function generateArticleSchema(article: {
  title: string;
  excerpt: string;
  published: string;
  thumbnail?: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: article.thumbnail,
    datePublished: article.published,
    dateModified: article.published,
    author: {
      '@type': 'Organization',
      name: 'ONSAI',
    },
  };
}
