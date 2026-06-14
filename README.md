# ONSAI - Japanese Fortune & Power Spots Tourism Site

A Next.js-based English tourism website specializing in Japanese fortune telling, shrines, and power spots for international visitors.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Notion API
- **Hosting**: Vercel
- **Affiliate**: Viator & GetYourGuide

## Project Structure

```
onsai/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── articles/          # Article pages
│   ├── about/             # About page
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── robots.ts          # robots.txt
│   └── api/               # API routes
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── AffiliateCard.tsx
│   └── ArticleCard.tsx
├── lib/                   # Utilities
│   ├── notion.ts         # Notion API integration
│   ├── seo.ts            # SEO utilities
│   └── dummy-articles.ts # Sample articles
├── types/                # TypeScript types
├── config/               # Configuration
│   ├── tags.ts          # Tag definitions
│   └── constants.ts     # App constants
├── public/               # Static assets
└── styles/               # Global CSS
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.example .env.local
```

Add your Notion API key and database ID.

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

- `NOTION_API_KEY`: Your Notion API key
- `NOTION_DATABASE_ID`: Your articles database ID
- `VIATOR_AFFILIATE_ID`: Viator affiliate ID
- `GYG_AFFILIATE_ID`: GetYourGuide affiliate ID
- `NEXT_PUBLIC_SITE_URL`: Site URL

## Notion Database Schema

### Articles Database

| Property | Type | Description |
|----------|------|-------------|
| Title | Title | Article title |
| Slug | Text | URL slug |
| Tags | Multi-select | Shrines / Fortune Telling / Power Spots / Omamori / Onmyoji / Zen & Temples / Rituals |
| Published | Date | Publication date |
| Thumbnail | Files & media | Featured image |
| Excerpt | Text | Short description |
| Content | Rich text | Article body |

## Features

- [x] Project initialization
- [x] Header & Footer components
- [x] Homepage with hero section & tag cloud
- [x] Notion API integration
- [x] Article listing & tag filtering
- [x] Article detail pages with tags
- [x] Affiliate card component
- [x] About page
- [x] SEO optimization
- [x] Sitemap & robots.txt (dynamic)
- [x] Dummy articles for preview
- [x] lucide-react icons
- [x] Tag-based structure (no categories)

## Affiliate Links

Articles can include related tour recommendations with affiliate links to:
- **Viator**: https://www.viator.com/
- **GetYourGuide**: https://www.getyourguide.com/

## Design System

- **Primary Color**: Sacred Green (#1a4d3e)
- **Accent Color**: Deep Gold (#d4af37)
- **Background**: Cream (#faf8f3)
- **Text**: Charcoal (#2d2d2d)

## License

MIT
