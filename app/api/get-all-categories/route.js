import axios from 'axios';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (request) => {
  try {
    const response = await axios.get(
      `https://connect.squareup.com/v2/catalog/list`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_SQUARE_ACCESS_TOKEN_PROD}`,
          'Square-Version': '2023-08-16',
          'Content-Type': 'application/json',
        },
        // params: cursor ? { cursor } : {},
        params: {
          types: 'CATEGORY', // Fetch only objects of type ITEM
        },
      }
    );
    return NextResponse.json(response?.data?.objects, { status: 200 }); // Return the items;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
