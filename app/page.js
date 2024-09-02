import HomePage from '@/components/pages/HomePage';
import axios from 'axios';

export default async function Page() {
  try {
    const response = await axios.get(
      'https://connect.squareup.com/v2/catalog/list',
      {
        headers: {
          Authorization:
            'Bearer EAAAlsVtQA5CmiZu39b_6yP5QmfuX_r-poR4KQrRU1l9kcuuACiQibh9mJnY9YCP',
          'Square-Version': '2023-08-16',
        },
      }
    );

    return <HomePage data={response.data} />;
  } catch (error) {
    return <div>{error.message}</div>;
  }
}
