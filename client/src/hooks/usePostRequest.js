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
      console.log("Sending POST request to:", url, "with data:", data);
      const response = await axios.post(url, data);
      console.log("Response from server:", response.data);
      return response.data; 
    } catch (err) {
      console.error("POST request failed:", err);
      setError(err);
      toast.error(err.response?.data?.message || "An error occurred.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { postRequest, loading, error };
};
