import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const useDeleteRecord = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteRecord = async (id) => {
    setLoading(true);
    setError(null); // Reset error state
    try {
      const response = await axios.delete(`${url}/${id}`);
      toast.success("Record deleted successfully!");
      return response.data; // Return the response data if needed
    } catch (err) {
      console.error(err);
      setError(err);
      toast.error("Failed to delete record.");
    } finally {
      setLoading(false);
    }
  };

  return { deleteRecord, loading, error };
};
