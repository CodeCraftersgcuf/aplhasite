import HomePage from '@/app/HomePage';
import axios from 'axios';
// import { cookies } from 'next/headers';

export default async function Page() {
  // const cookieStore = cookies(); // Get cookies from the request
  // const token = cookieStore.get('token'); // Fetch the 'token' cookie
  try {
    const itemsResponse = await axios.get(
      `${process.env.NEXT_VERCEL_DOMAIN_URL}/api/get-all-items`,
      {
        withCredentials: true,
      }
    );

    const categoryResponse = await axios.get(
      `${process.env.NEXT_VERCEL_DOMAIN_URL}/api/get-all-categories`,
      {
        withCredentials: true,
      }
    );

    const response = {
      items: itemsResponse?.data,
      categories: categoryResponse?.data,
    };
    // const dataArray = Object.values(response?.data);
    // const reversedDataArray = dataArray.reverse();
    return <HomePage data={response} />;
  } catch (error) {
    // console.log(error);
    return <div>Error: {error.message}</div>;
  }
}

// export default async function Page() {
//   try {
//     const response = await axios.post(
//       'https://connect.squareup.com/v2/catalog/search',
//       {
//         begin_time: '2018-10-17T18:34:18.185Z',
//       },
//       {
//         headers: {
//           Authorization:
//             'Bearer EAAAlsVtQA5CmiZu39b_6yP5QmfuX_r-poR4KQrRU1l9kcuuACiQibh9mJnY9YCP',
//           'Square-Version': '2023-08-16',
//         },
//       }
//     );

//     return <HomePage data={response.data} />;
//   } catch (error) {
//     return <div>{error.message}</div>;
//   }
// }
