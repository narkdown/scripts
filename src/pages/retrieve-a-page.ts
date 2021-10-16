import process from 'process';

import dotenv from 'dotenv';
import {Client} from '@notionhq/client';

dotenv.config();

const notion = new Client({auth: process.env.NOTION_API_KEY});

(async () => {
  const pageId = '66eeeccb1ba44248a627cf90c966931a';
  const response = await notion.pages.retrieve({page_id: pageId});
  console.log(response);
})();
