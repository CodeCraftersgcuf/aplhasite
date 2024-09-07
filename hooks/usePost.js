import { useState } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

const usePost = () => {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resData, setResData] = useState('');

  async function postData({ url, data }) {
    setResData('');
    setIsError(false);
    setIsSuccess(false);
    setIsLoading(true);
    try {
      const res = await axios.post(url, data);
      console.log(res.data);
      setResData(res.data);
      setIsSuccess(true);
    } catch (error) {
      setIsError(error.response?.data || error.message);
      console.log(error.response?.data || error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isError,
    setIsError,
    isLoading,
    isSuccess,
    setIsSuccess,
    postData,
    resData,
  };
};

export default usePost;
