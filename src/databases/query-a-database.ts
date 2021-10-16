import process from 'process';

import dotenv from 'dotenv';
import {Client} from '@notionhq/client';

dotenv.config();

const notion = new Client({auth: process.env.NOTION_API_KEY});

(async () => {
  const databaseId = '76354a006abb4ecea62a8665c90cb3db';
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: 'Food group',
          select: {
            equals: 'Vegetable',
          },
        },
        {
          property: 'Price',
          number: {
            greater_than_or_equal_to: 2,
          },
        },
      ],
    },
    sorts: [
      {
        property: 'Price',
        direction: 'ascending',
      },
    ],
  });
  console.log(response);
})();
