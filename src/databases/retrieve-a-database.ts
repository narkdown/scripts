import process from 'process';

import dotenv from 'dotenv';
import {Client} from '@notionhq/client';

dotenv.config();

const notion = new Client({auth: process.env.NOTION_API_KEY});

(async () => {
  const databaseId = '76354a006abb4ecea62a8665c90cb3db';
  const response = await notion.databases.retrieve({database_id: databaseId});
  console.log(response);
})();
