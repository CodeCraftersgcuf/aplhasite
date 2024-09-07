import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/User'; // Ensure correct path to your User model
import { connectDb } from '@/configure/connectDb'; // Ensure correct path to your database connection

// Connect to the database
connectDb();

export const POST = async (request) => {
  try {
    const reqBody = await request.json();
    console.log(reqBody);
    const { firstName, lastName, email, password } = reqBody;

    // Basic validation
    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      );
    }

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password, // Password will be hashed by pre-save hook
    });

    // Save the user to the database
    await newUser.save();

    return NextResponse.json(
      { message: 'User registered successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error during signup:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
};
