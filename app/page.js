import HomePage from '@/components/pages/HomePage';
import axios from 'axios';

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
export default async function Page() {
  try {
    const response = await axios.get(
      `${process.env.VERCEL_DOMAIN_URL}/api/get-all-items`
    );
    // const dataArray = Object.values(response?.data);
    // const reversedDataArray = dataArray.reverse();
    return <HomePage data={response?.data} />;
  } catch (error) {
    // console.log(error);
    return <div>Error: {error.message}</div>;
  }
}
