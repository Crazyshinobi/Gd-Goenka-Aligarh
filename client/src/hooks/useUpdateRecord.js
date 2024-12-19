import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const useUpdateRecord = (url, data) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateRecord = async (id) => {
    setLoading(true);
    setError(null); // Reset error state
    try {
      const response = await axios.patch(`${url}/${id}`, data);
      toast.success("Record updated successfully!");
      return response.data; // Return the response data if needed
    } catch (err) {
      console.error(err);
      setError(err);
      toast.error("Failed to update record.");
    } finally {
      setLoading(false);
    }
  };

  return { updateRecord, loading, error };
};
