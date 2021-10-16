import process from 'process';

import dotenv from 'dotenv';
import {Client} from '@notionhq/client';

dotenv.config();

const notion = new Client({auth: process.env.NOTION_API_KEY});

(async () => {
  const response = await notion.databases.create({
    parent: {
      type: 'page_id',
      page_id: 'fb030175a87949f68b31188461bfeabd',
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
    title: [
      {
        type: 'text',
        text: {
          content: 'Grocery List',
          link: null,
        },
      },
    ],
    properties: {
      'Name': {
        title: {},
      },
      'Description': {
        rich_text: {},
      },
      'In stock': {
        checkbox: {},
      },
      'Food group': {
        select: {
          options: [
            {
              name: '🥦Vegetable',
              color: 'green',
            },
            {
              name: '🍎Fruit',
              color: 'red',
            },
            {
              name: '💪Protein',
              color: 'yellow',
            },
          ],
        },
      },
      'Price': {
        number: {
          format: 'dollar',
        },
      },
      'Last ordered': {
        date: {},
      },
      'Meals': {
        relation: {
          database_id: '76354a006abb4ecea62a8665c90cb3db',
        },
      },
      'Number of meals': {
        rollup: {
          rollup_property_name: 'Name',
          relation_property_name: 'Meals',
          function: 'count',
        },
      },
      'Store availability': {
        type: 'multi_select',
        multi_select: {
          options: [
            {
              name: 'Duc Loi Market',
              color: 'blue',
            },
            {
              name: 'Rainbow Grocery',
              color: 'gray',
            },
            {
              name: 'Nijiya Market',
              color: 'purple',
            },
            {
              name: "Gus'''s Community Market",
              color: 'yellow',
            },
          ],
        },
      },
      '+1': {
        people: {},
      },
      'Photo': {
        files: {},
      },
    },
  });
  console.log(response);
})();
