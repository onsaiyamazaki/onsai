import { Client } from '@notionhq/client';
import { Article, Tag } from '@/types';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID || '';

interface NotionPage {
  id: string;
  properties: {
    Title?: { title: Array<{ plain_text: string }> };
    Slug?: { rich_text: Array<{ plain_text: string }> };
    Tags?: { multi_select: Array<{ name: Tag }> };
    Published?: { date: { start: string } };
    Thumbnail?: { files: Array<{ file?: { url: string } }> } | { url: string } | { rich_text: Array<{ plain_text: string }> };
    Excerpt?: { rich_text: Array<{ plain_text: string }> };
    Contents?: { rich_text: Array<{ plain_text: string }> };
  };
}

export async function getArticles(
  tag?: Tag
): Promise<Article[]> {
  try {
    const query: Parameters<typeof notion.databases.query>[0] = {
      database_id: DATABASE_ID,
    };

    if (tag) {
      query.filter = {
        property: 'Tags',
        multi_select: {
          contains: tag,
        },
      };
    }

    const response = await notion.databases.query(query);

    return response.results
      .map((page) => {
        const p = page as unknown as NotionPage;
        return {
          id: page.id,
          title:
            p.properties.Title?.title[0]?.plain_text || 'Untitled',
          slug:
            p.properties.Slug?.rich_text[0]?.plain_text || '',
          tags:
            p.properties.Tags?.multi_select?.map((t) => t.name) || [],
          published:
            p.properties.Published?.date?.start || new Date().toISOString(),
          thumbnail: (() => {
            const thumb = p.properties.Thumbnail;
            // Files & media 型
            if (thumb && 'files' in thumb && Array.isArray(thumb.files)) {
              return thumb.files[0]?.file?.url;
            }
            // URL 型（外部リンク）
            if (thumb && 'url' in thumb) {
              return thumb.url;
            }
            // Text 型（URL がテキストとして入力されている場合）
            if (thumb && 'rich_text' in thumb && Array.isArray(thumb.rich_text)) {
              return thumb.rich_text[0]?.plain_text;
            }
            return undefined;
          })(),
          excerpt:
            p.properties.Excerpt?.rich_text[0]?.plain_text || '',
          content:
            p.properties.Contents?.rich_text.map((rt) => rt.plain_text).join('') || undefined,
        };
      })
      .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());
  } catch (error) {
    console.error('Error fetching articles from Notion:', error);
    return [];
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug,
        },
      },
    });

    if (response.results.length === 0) {
      return null;
    }

    const page = response.results[0] as unknown as NotionPage;
    return {
      id: page.id,
      title: page.properties.Title?.title[0]?.plain_text || 'Untitled',
      slug: page.properties.Slug?.rich_text[0]?.plain_text || '',
      tags: page.properties.Tags?.multi_select?.map((t) => t.name) || [],
      published: page.properties.Published?.date?.start || new Date().toISOString(),
      thumbnail: (() => {
        const thumb = page.properties.Thumbnail;
        // Files & media 型
        if (thumb && 'files' in thumb && Array.isArray(thumb.files)) {
          return thumb.files[0]?.file?.url;
        }
        // URL 型
        if (thumb && 'url' in thumb) {
          return thumb.url;
        }
        // Text 型
        if (thumb && 'rich_text' in thumb && Array.isArray(thumb.rich_text)) {
          return thumb.rich_text[0]?.plain_text;
        }
        return undefined;
      })(),
      excerpt: page.properties.Excerpt?.rich_text[0]?.plain_text || '',
      content: page.properties.Contents?.rich_text.map((rt) => rt.plain_text).join('') || undefined,
    };
  } catch (error) {
    console.error('Error fetching article from Notion:', error);
    return null;
  }
}

export async function getTags(): Promise<Tag[]> {
  return [
    'Shrines',
    'Fortune Telling',
    'Power Spots',
    'Omamori',
    'Onmyoji',
    'Zen & Temples',
    'Rituals',
  ];
}
