import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url)
      setIsLoading(false)
      setData(response.data)
    } catch (error) {
      setIsLoading(false)
      setError(error.response)
    }
  };

  const postData = async (postBody) => {
    try {
      setIsLoading(true);
      const response = await axios.post(url, postBody);
      setIsLoading(false);
      console.log("POST request successful:", response);
      setData(response.data);
    } catch (error) {
      setIsLoading(false);
      console.error("POST request error:", error);
      setError(error.response);
    }
  }

  const putData = async (id, putBody) => {
    try {
      setIsLoading(true);
      const response = await axios.put(`${url}/${id}`, putBody);
      setIsLoading(false);
      setData(response.data);
    } catch (error) {
      setIsLoading(false);
      setError(error.response.statusText);
    }
  };

  const deleteData = async (id) => {
    try {
      setIsLoading(true);
      await axios.delete(`${url}/${id}`);
      setIsLoading(false);
      fetchData(); // Re-fetch data after delete
    } catch (error) {
      setIsLoading(false);
      setError(error.response.statusText);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, error, postData, putData, deleteData};
};

export default useFetch;
