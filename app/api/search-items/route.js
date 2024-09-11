import axios from 'axios';
import { NextResponse, NextRequest } from 'next/server';

export const POST = async (request) => {
  const reqBody = await request.json();
  console.log(reqBody);
  const { categoryId, searchTerm } = reqBody;

  let queryBody;
  let items = [];

  if (!categoryId && searchTerm.trim() === '') {
    return NextResponse.json('All fields are required', { status: 400 });
  }

  if (!searchTerm) {
    queryBody = {
      sort_order: 'ASC',
      category_ids: [categoryId],
    };
  } else {
    if (!categoryId) {
      queryBody = {
        sort_order: 'ASC',
        text_filter: searchTerm,
      };
    } else {
      queryBody = {
        sort_order: 'ASC',
        category_ids: [categoryId],
        text_filter: searchTerm,
      };
    }
  }

  console.log('query body:', queryBody);
  try {
    const response = await axios.post(
      'https://connect.squareup.com/v2/catalog/search-catalog-items',
      queryBody,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_SQUARE_ACCESS_TOKEN_PROD}`,
          'Square-Version': '2024-08-21',
        },
      }
    );

    items = Object.values(response?.data.items) || [];
    // console.log(response);
    // console.log(items);
    return NextResponse.json(items, { status: 200 }); // Return the items;
  } catch (error) {
    console.log('errored');
    console.log(error);
    return NextResponse.error(error.response?.data || error.message);
  }
};
