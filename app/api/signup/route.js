// import { connectDb } from '../../../../configure/connectDb';
// import { NextResponse, NextRequest } from 'next/server';
// import User from '@/models/User';
// import bcrypt from 'bcryptjs';
// import { paramCase } from 'param-case';
// import { sendEmail } from '../send-email/route';

// connectDb();

// export const POST = async (request: NextRequest) => {
//   try {
//     const reqBody = await request.json();
//     const { email, password, username } = reqBody;

//     //check user already exists
//     const user = await User.findOne({ email: email }).exec();

//     if (user) {
//       return NextResponse.json(
//         { error: 'User Already Exists' },
//         { status: 400 }
//       );
//     }

//     //hash password
//    const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(password, salt);

//     //create new user
//     const userParam = paramCase(username);
//     console.log(userParam);
//     const newUser = new User({
//       email,
//       password: hashedPassword,
//       username,
//       userParam: userParam,
//     });

//     const savedUser = await newUser.save();

//     await sendEmail({
//       email,
//       emailType: 'VERIFY',
//       userId: savedUser._id,
//     });
//     return NextResponse.json({
//       message: 'Successfully created new User',
//       success: true,
//       savedUser,
//     });
//     console.log('request sent');
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// };
