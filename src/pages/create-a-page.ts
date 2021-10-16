import process from 'process';

import dotenv from 'dotenv';
import {Client} from '@notionhq/client';

dotenv.config();

const notion = new Client({auth: process.env.NOTION_API_KEY});

(async () => {
  const response = await notion.pages.create({
    parent: {
      database_id: 'cccb9abd22b7489587b91e591e4ca765',
    },
    icon: {
      type: 'emoji',
      emoji: '🎉',
    },
    cover: {
      type: 'external',
      external: {
        url: 'https://website.domain/images/image.png',
      },
    },
    properties: {
      'Name': {
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: 'create-a-page',
            },
          },
        ],
      },
      'Description': {
        type: 'rich_text',
        rich_text: [
          {
            text: {
              content: 'A dark green leafy vegetable',
            },
          },
        ],
      },
      'Food group': {
        select: {
          name: '🥦 Vegetable',
        },
      },
      'Price': {
        number: 2.5,
      },
    },
    children: [
      {
        object: 'block',
        type: 'heading_2',
        heading_2: {
          text: [
            {
              type: 'text',
              text: {
                content: 'Lacinato kale',
              },
            },
          ],
        },
      },
      {
        object: 'block',
        type: 'paragraph',
        paragraph: {
          text: [
            {
              type: 'text',
              text: {
                content:
                  'Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.',
                link: {
                  url: 'https://en.wikipedia.org/wiki/Lacinato_kale',
                },
              },
            },
          ],
        },
      },
    ],
  });
  console.log(response);
})();
