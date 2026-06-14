import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID || '';

export async function debugArticles() {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
  });

  console.log('=== NOTION RAW DATA ===');
  console.log(JSON.stringify(response.results[0].properties, null, 2));
}
