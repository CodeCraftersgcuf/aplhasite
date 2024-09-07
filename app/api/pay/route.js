// import { Client } from 'square';
// import { randomUUID } from 'crypto';
// import { NextResponse } from 'next/server';

// // Manually hardcode the Square Access Token
// const accessToken =
//   'EAAAl1LNQl5Goarm04j3AoKhyvNETQNC2QGiIYb_yEO8kveKktSkzRGTKA-z7vDe';

// BigInt.prototype.toJSON = function () {
//   return this.toString();
// };

// // Initialize the Square Client with the hardcoded token
// const { paymentsApi } = new Client({
//   accessToken: accessToken, // Using the hardcoded access token
//   environment: 'sandbox',
// });

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { sourceId, amount } = body;

//     if (!sourceId) {
//       throw new Error('sourceId is required');
//     }

//     const { result } = await paymentsApi.createPayment({
//       idempotencyKey: randomUUID(),
//       sourceId: sourceId,
//       amountMoney: {
//         currency: 'USD',
//         amount: Number(amount), // $1.00 charge (amount in cents)
//       },
//     });

//     return NextResponse.json(result);
//   } catch (error) {
//     console.error('Payment error:', error);
//     return NextResponse.json(
//       error.result || { message: 'Payment processing failed' }
//     );
//   }
// }
