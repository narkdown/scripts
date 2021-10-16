import process from 'process';

import dotenv from 'dotenv';
import {Client} from '@notionhq/client';

dotenv.config();

const notion = new Client({auth: process.env.NOTION_API_KEY});

(async () => {
  const response = await notion.databases.update({
    database_id: '902fdcb431074936b12080f551038530',
    title: [
      {
        type: 'text',
        text: {
          content: 'update-a-database',
        },
      },
    ],
  });
  console.log(response);
})();
