import process from 'process';

import dotenv from 'dotenv';
import {Client} from '@notionhq/client';

dotenv.config();

const notion = new Client({auth: process.env.NOTION_API_KEY});

(async () => {
  const pageId = 'b970b14eaabf49209d0dee4bbfa01db1';
  const response = await notion.pages.properties.retrieve({
    page_id: pageId,
    property_id: 'K~yF',
  });
  console.log(response);
})();
