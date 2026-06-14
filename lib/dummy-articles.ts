import { Article } from '@/types';

export const DUMMY_ARTICLES: Article[] = [
  {
    id: 'dummy-1',
    title: 'Top 5 Power Spots in Kyoto',
    slug: 'top-5-power-spots-kyoto',
    tags: ['Power Spots'],
    published: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    excerpt: 'Discover the most spiritually significant locations in Kyoto and how to experience their transformative energy.',
    thumbnail: 'https://images.unsplash.com/photo-1522383507177-1a5c74f4e0d9?w=600&h=400&fit=crop',
    content: 'Kyoto is home to some of Japan\'s most powerful spiritual sites...',
  },
  {
    id: 'dummy-2',
    title: 'How to Read Your Omikuji',
    slug: 'how-to-read-omikuji',
    tags: ['Shrines', 'Rituals'],
    published: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    excerpt: 'Learn the meaning behind omikuji fortune slips and how to interpret the messages from the shrine.',
    thumbnail: 'https://images.unsplash.com/photo-1516214104703-3e922bb539fe?w=600&h=400&fit=crop',
    content: 'Omikuji are small fortune slips drawn at shrines across Japan...',
  },
  {
    id: 'dummy-3',
    title: 'Fortune Telling in Tokyo: A Beginner\'s Guide',
    slug: 'fortune-telling-tokyo-guide',
    tags: ['Fortune Telling', 'Rituals'],
    published: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    excerpt: 'Explore the diverse fortune telling practices available in Tokyo and find the perfect experience for you.',
    thumbnail: 'https://images.unsplash.com/photo-1518531933037-91b2f5f9cc6f?w=600&h=400&fit=crop',
    content: 'Tokyo offers numerous opportunities to experience traditional fortune telling...',
  },
];
