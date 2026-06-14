# ONSAI Project Structure

```
onsai/
├── app/                           # Next.js App Router
│   ├── api/                       # API routes
│   ├── articles/                  # Articles listing & detail
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── category/                  # Category pages
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── about/                     # About page
│   │   └── page.tsx
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Homepage
│
├── components/                    # React components
│   ├── ArticleCard.tsx           # Article preview card
│   ├── AffiliateCard.tsx         # Tour affiliate card
│   ├── Header.tsx                # Site header (to create)
│   ├── Footer.tsx                # Site footer (to create)
│   └── ui/                       # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Badge.tsx
│
├── lib/                          # Utility functions
│   ├── notion.ts                # Notion API client
│   └── seo.ts                   # SEO helper functions
│
├── types/                        # TypeScript type definitions
│   └── index.ts
│
├── styles/                       # Global CSS
│   └── globals.css
│
├── public/                       # Static assets
│   ├── images/
│   └── icons/
│
├── config/                       # Configuration files (to create)
│   ├── categories.ts            # Category definitions
│   └── constants.ts             # App constants
│
├── .env.example                 # Environment variables template
├── .eslintrc.json              # ESLint config
├── .gitignore
├── next.config.js              # Next.js config
├── package.json                # Dependencies
├── postcss.config.js           # PostCSS config
├── README.md
├── tailwind.config.ts          # Tailwind CSS config
├── tsconfig.json               # TypeScript config
└── PROJECT_STRUCTURE.md        # This file
```

## Key Files Overview

### App Router (`app/`)
- **layout.tsx**: Root layout with global metadata
- **page.tsx**: Homepage with hero and featured articles
- **articles/page.tsx**: Article listing with filters
- **articles/[slug]/page.tsx**: Individual article pages
- **category/[slug]/page.tsx**: Category-specific articles
- **about/page.tsx**: About page

### Components (`components/`)
- **ArticleCard**: Displays article preview with thumbnail, title, category, reading time
- **AffiliateCard**: Tour booking card with Viator/GetYourGuide links
- **Header**: Navigation and branding
- **Footer**: Links and copyright

### Libraries (`lib/`)
- **notion.ts**: Notion API integration
  - `getArticles()`: Fetch all articles (with optional category filter)
  - `getArticleBySlug()`: Get single article
  - `getCategories()`: List available categories
- **seo.ts**: SEO utilities
  - `generateMetadata()`: Create Next.js metadata
  - `generateStructuredData()`: JSON-LD schema
  - `generateArticleSchema()`: Article-specific schema

### Types (`types/`)
- **Article**: Article document structure
- **Category**: Category enum
- **Tour**: Affiliate tour data
- **SEOMetadata**: SEO metadata structure

## Next Steps

1. Create Header & Footer components
2. Implement article listing page with filtering
3. Implement article detail page with Notion content rendering
4. Create category pages
5. Set up Notion API integration for real content
6. Add sitemap.xml and robots.txt
7. Deploy to Vercel

## Environment Setup

Create `.env.local` with:
```
NOTION_API_KEY=your_key
NOTION_DATABASE_ID=your_id
VIATOR_AFFILIATE_ID=your_id
GYG_AFFILIATE_ID=your_id
NEXT_PUBLIC_SITE_URL=https://onsai.com
```
