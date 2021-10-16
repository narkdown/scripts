import process from 'process';

import dotenv from 'dotenv';
import {Client} from '@notionhq/client';

dotenv.config();

const notion = new Client({auth: process.env.NOTION_API_KEY});

(async () => {
  const pageId = '7e1baf20e3f34f668d391bc9333a2cb7';
  const response = await notion.pages.update({
    page_id: pageId,
    icon: {
      type: 'emoji',
      emoji: '☝🏻',
    },
    properties: {
      'Name': {
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'update-a-page',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
          },
        ],
      },
      'In stock': {
        checkbox: true,
      },
    },
  });
  console.log(response);
})();
