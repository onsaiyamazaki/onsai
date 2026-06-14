export type Tag = 'Shrines' | 'Fortune Telling' | 'Power Spots' | 'Omamori' | 'Onmyoji' | 'Zen & Temples' | 'Rituals';

export interface Article {
  id: string;
  title: string;
  slug: string;
  tags: Tag[];
  published: string;
  thumbnail?: string;
  excerpt: string;
  content?: string;
  relatedTours?: Tour[];
}

export interface Tour {
  id: string;
  name: string;
  price: number;
  currency: string;
  url: string;
  platform: 'viator' | 'getyourguide';
  duration?: string;
  rating?: number;
}

export interface SEOMetadata {
  title: string;
  description: string;
  image?: string;
  url: string;
  type?: 'website' | 'article' | 'profile';
}
