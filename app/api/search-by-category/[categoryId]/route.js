import axios from 'axios';
import { NextResponse, NextRequest } from 'next/server';

export const POST = async (request, { params }) => {
  const { categoryId } = params;
  let items = [];
  console.log('came to get-all-items route');
  // console.log(request);

  try {
    const response = await axios.post(
      'https://connect.squareup.com/v2/catalog/search-catalog-items',
      {
        sort_order: 'ASC',
        category_ids: [categoryId],
      },
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
