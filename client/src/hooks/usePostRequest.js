import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const usePostRequest = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postRequest = async (data) => {
    setLoading(true);
    setError(null); 
    try {
      const response = await axios.post(url, data);
      return response.data; 
    } catch (err) {
      console.error(err);
      setError(err);
      toast.error(err.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return { postRequest, loading, error };
};
