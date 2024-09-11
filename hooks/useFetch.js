import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

const useFetch = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  async function fetchData(url) {
    setIsError(false);
    setIsSuccess(false);
    try {
      setIsLoading(true);
      const res = await axios.get(url);
      const resData = res.data;
      setData(resData);
      setIsSuccess(true);
      setIsError(false);
    } catch (error) {
      console.log(error.response?.data || error.message);
      setIsError(error.response?.data || error.message);
    } finally {
      setIsLoading(false);
    }
  }
  return {
    data,
    isLoading,
    isError,
    fetchData,
    isSuccess,
    setIsSuccess,
  };
};

export default useFetch;
