// import { NextResponse, NextRequest } from 'next/server';

// export const GET = async (request: NextRequest) => {
//   try {
//     const token = request.cookies.get('token');

//     const response = NextResponse.json({
//       message: 'logout Successfully',
//       success: true,
//     });

//     response.cookies.set('token', '', { httpOnly: true });

//     return response;
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// };
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request) => {
  try {
    // Create a response object
    const response = NextResponse.json(
      { message: 'Logout successful' },
      { status: 200 }
    );

    // Clear the authentication token from the cookies
    response.cookies.set('token', '', { httpOnly: true, expires: new Date(0) });

    return response;
  } catch (error) {
    console.error('Error during logout:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
};
