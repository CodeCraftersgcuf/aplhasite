import axios from 'axios';
import { cookies } from 'next/headers';

export async function fetchWithAuth(url, options = {}) {
  // Access cookies from the request using Next.js headers API
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  try {
    // Make the API request with the token attached
    const response = await axios.get(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`, // Attach JWT token if available
        'x-refresh-token': refreshToken, // Attach refresh token in custom header
      },
      withCredentials: true, // Ensure cookies are sent
    });

    return response.data; // Return the data from the response
  } catch (error) {
    // console.error(
    //   'Error fetching data:',
    //   error.response?.status,
    //   error.message
    // );)
    throw error.response?.data || { message: error.message, status: '500' }; // Rethrow the error to handle it in the calling component
  }
}
