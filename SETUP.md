# ONSAI - Setup & Deployment Guide

## Quick Start

### 1. Install Dependencies
```bash
cd projects/onsai
npm install
```

### 2. Configure Environment Variables
```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:
```env
# Notion API Configuration
NOTION_API_KEY=your_notion_api_key
NOTION_DATABASE_ID=your_notion_database_id

# Affiliate IDs (optional for development)
VIATOR_AFFILIATE_ID=your_viator_id
GYG_AFFILIATE_ID=your_gyg_id

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Notion Database Setup

### Create Articles Database

1. Create a new Notion database with the following properties:

| Property | Type | Notes |
|----------|------|-------|
| Title | Title | Article headline |
| Slug | Text | URL slug (e.g., `japan-shrines-guide`) |
| Category | Select | Shrines / Fortune Telling / Power Spots / Onmyoji |
| Published | Date | Publication date |
| Thumbnail | Files & media | Featured image |
| Excerpt | Text | Short description (max 200 chars) |
| Content | Rich text | Full article body |

### Connect to ONSAI

1. Create a Notion Integration at https://www.notion.so/my-integrations
2. Create an API key and copy it
3. Share your database with the integration
4. Get your database ID from the URL: `https://notion.so/{workspace_id}/{DATABASE_ID}?v={view_id}`
5. Add both to `.env.local`

## Project Structure

```
onsai/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   ├── articles/
│   │   ├── page.tsx         # Articles listing
│   │   └── [slug]/
│   │       └── page.tsx     # Article detail
│   ├── category/
│   │   └── [slug]/
│   │       └── page.tsx     # Category pages
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── sitemap.ts           # Dynamic sitemap.xml
│   └── robots.ts            # robots.txt
│
├── components/              # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ArticleCard.tsx
│   └── AffiliateCard.tsx
│
├── lib/
│   ├── notion.ts           # Notion API client
│   └── seo.ts              # SEO utilities
│
├── types/
│   └── index.ts            # TypeScript types
│
├── config/
│   ├── categories.ts       # Category definitions
│   └── constants.ts        # App constants
│
├── styles/
│   └── globals.css         # Global styles
│
└── public/                 # Static assets
```

## Available Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npm run type-check
```

## Features Implemented

### Pages
- ✅ Homepage with hero section and category showcase
- ✅ Articles listing page with category filters
- ✅ Article detail pages (dynamic routes)
- ✅ Category pages (Shrines, Fortune Telling, Power Spots, Onmyoji)
- ✅ About page
- ✅ Dynamic sitemap.xml
- ✅ robots.txt

### Components
- ✅ Sticky Header with mobile navigation
- ✅ Footer with links and copyright
- ✅ ArticleCard (preview with image, category, reading time)
- ✅ AffiliateCard (tour booking with Viator/GetYourGuide links)

### Integrations
- ✅ Notion API for article management
- ✅ Dynamic static page generation from Notion
- ✅ SEO metadata and Open Graph tags
- ✅ JSON-LD structured data

### Design
- ✅ Tailwind CSS with custom color scheme
- ✅ Responsive mobile-first layout
- ✅ Smooth animations and transitions
- ✅ Japanese spiritual aesthetic (sacred green, gold, cream)

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Select your ONSAI repository
5. Configure environment variables in Vercel dashboard
6. Deploy!

### Set Environment Variables in Vercel

Add these to your Vercel project settings:
- `NOTION_API_KEY`
- `NOTION_DATABASE_ID`
- `VIATOR_AFFILIATE_ID` (optional)
- `GYG_AFFILIATE_ID` (optional)
- `NEXT_PUBLIC_SITE_URL`

### Update Production URL

Once deployed, update `.env.local` with your production URL:
```env
NEXT_PUBLIC_SITE_URL=https://onsai-your-domain.com
```

## SEO Optimization

### Already Configured
- ✅ Meta tags (title, description, robots)
- ✅ Open Graph tags (OG:title, OG:description, OG:image)
- ✅ Twitter card meta tags
- ✅ JSON-LD structured data (Article schema)
- ✅ Dynamic sitemap.xml with all pages
- ✅ robots.txt for search engines
- ✅ Canonical URLs

### To Improve Further
1. Add schema.org Organization schema
2. Implement breadcrumb schema
3. Set up Google Search Console
4. Submit sitemap to search engines
5. Create blog feed (RSS/Atom)

## Content Strategy

### Article Categories

**Shrines**: Sacred temples, their history, and spiritual significance
- Fushimi Inari (1000 red gates)
- Meiji Shrine (urban sanctuary)
- Ise Shrine (Imperial shrine)

**Fortune Telling**: Japanese divination practices and experiences
- Tarot readings in Tokyo
- Astrology consultations
- Traditional fortune telling methods

**Power Spots**: Energetically significant locations
- Mount Fuji spiritual sites
- Vortex locations in Sedona-like regions
- Temple meditation spots

**Onmyoji**: Ancient mysticism and magical traditions
- History of Onmyoji
- Modern practitioners
- Influence in Japanese culture

## Affiliate Program Setup

### Viator
1. Sign up at [Viator Affiliate Program](https://www.viatoraffiliates.com/)
2. Get your affiliate ID
3. Add to `VIATOR_AFFILIATE_ID` in environment variables
4. Use affiliate links in tour recommendations

### GetYourGuide
1. Sign up at [GetYourGuide Partner Program](https://www.getyourguide.com/partner)
2. Get your affiliate ID
3. Add to `GYG_AFFILIATE_ID` in environment variables
4. Use affiliate links in tour cards

## Troubleshooting

### Articles not loading?
1. Check your Notion API key is correct
2. Verify database ID is correct
3. Ensure integration has access to database
4. Check `.env.local` is in root directory

### Images not loading?
1. Notion image URLs expire after ~1 hour
2. Consider downloading images and hosting in `/public`
3. Or use Notion's image export feature

### Build failing?
1. Run `npm run type-check` to verify types
2. Check for any console errors
3. Ensure all environment variables are set

## Next Steps

1. **Content Creation**: Add articles to your Notion database
2. **Image Optimization**: Add high-quality images for articles
3. **Social Media**: Set up OG images for sharing
4. **Analytics**: Add Google Analytics tracking
5. **Newsletter**: Implement email subscription
6. **Comments**: Add user comments (Disqus, Utterances, etc.)
7. **Search**: Add full-text search functionality
8. **Multi-language**: Consider Japanese translations

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Notion API](https://developers.notion.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vercel Deployment](https://vercel.com/docs)

## License

MIT
