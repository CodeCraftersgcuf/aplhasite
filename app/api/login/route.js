import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/User'; // Ensure User model is correctly imported
import { connectDb } from '@/configure/connectDb'; // Ensure correct path
// Connect to the database
connectDb();

export const POST = async (request) => {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // Check if the user exists
    const isUser = await User.findOne({ email }).exec();
    if (!isUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 400 });
    }

    // Check validity of password
    const validPassword = await isUser.comparePassword(password);
    if (!validPassword) {
      return NextResponse.json(
        { message: 'Invalid password' },
        { status: 400 }
      );
    }

    // Generate JWT token
    const token = jwt.sign({ id: isUser._id }, process.env.NEXT_TOKEN_KEY, {
      expiresIn: '1d',
    });

    // Set the token in a cookie and return success response
    const response = NextResponse.json({
      message: 'Login Successful',
      success: true,
    });
    response.cookies.set('token', token, { httpOnly: true });

    return response;
  } catch (error) {
    console.error('Error during authentication:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
};
