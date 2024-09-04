// import { NextResponse, NextRequest } from 'next/server';

// export const GET = async (request: NextRequest) => {
//   try {
//     const token = request.cookies.get('token');
//     if (!token || token.value === '') {
//       return NextResponse.json(
//         { message: 'already logged out' },
//         { status: 400 }
//       );
//     }

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
