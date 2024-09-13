import axios from 'axios';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
  console.log('reached');
  let items = [];
  let cursor = null;
  const limit = 55; // Set the limit to fetch 55 items in total
  let fetchedCount = 0; // Track the number of fetched items

  try {
    do {
      const response = await axios.get(
        'https://connect.squareup.com/v2/catalog/list',
        {
          headers: {
            Authorization:
              'Bearer EAAAlsVtQA5CmiZu39b_6yP5QmfuX_r-poR4KQrRU1l9kcuuACiQibh9mJnY9YCP',
            'Square-Version': '2023-08-16',
            'Content-Type': 'application/json',
          },
          params: {
            types: 'ITEM', // Fetch only objects of type ITEM
            cursor: cursor ? cursor : undefined, // Use cursor if available
            limit: Math.min(limit - fetchedCount, 100), // Limit items per request, up to 100
          },
        }
      );

      items = items.concat(response.data.objects);
      fetchedCount += response.data.objects.length; // Update fetched count
      cursor = response.data.cursor;

      // Stop if we have fetched the desired number of items
      if (fetchedCount >= limit) {
        break;
      }
    } while (cursor);

    // If fetched more than needed, slice the array to the limit
    items = items.slice(0, limit);

    return NextResponse.json(items); // Return the items;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
