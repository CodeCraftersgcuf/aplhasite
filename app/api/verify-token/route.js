//writing  validation function in next backend to check whether token is valid

import axios from 'axios';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request) {
  //   const { token } = await request.json();
  const cookieStore = cookies(); // Get cookies from the request
  const token = cookieStore.get('token')?.value;
  console.log(token);
  if (!token) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 400 });
  }
  try {
    const decoded = jwt.verify(token, process.env.NEXT_TOKEN_KEY);
    console.log(decoded);
    if (decoded) {
      return NextResponse.json(
        { email: decoded.email, message: 'verified' },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ message: 'Invalid token' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 400 });
  }
}
