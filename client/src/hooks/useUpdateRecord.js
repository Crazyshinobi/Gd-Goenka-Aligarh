import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const useUpdateRecord = (url, data) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateRecord = async (id) => {
    setLoading(true);
    setError(null); // Reset error state

    const formData = new FormData();
    let hasFiles = false; 

    // Append all fields (both text and files) to FormData
    Object.keys(data).forEach((key) => {
      // console.log(`Processing field: ${key} with value:`, data[key]);

      if (Array.isArray(data[key])) {
        // Handle multiple files
        data[key].forEach((file) => {
          if (file instanceof File) {
            formData.append(key, file); // Append each file separately
            hasFiles = true; // Set flag to true if files are found
          }
        });
      } else if (data[key] instanceof File) {
        // Handle single file
        formData.append(key, data[key]); // Append the single file
        hasFiles = true; // Set flag to true if a file is found
      } else if (data[key] !== undefined && data[key] !== null) {
        // Append text field or non-file data
        formData.append(key, data[key]);
      }
    });

    // Log the FormData after appending
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    // Set content-type header only if there are files
    const headers = hasFiles
      ? {
          "Content-Type": "multipart/form-data", 
        }
      : { "Content-Type": "application/json",};

    try {
      // Make the PATCH request with the formData
      const response = await axios.patch(`${url}/${id}`, formData, {
        headers: headers,
      });
      toast.success("Record updated successfully!");
      return response.data; 
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
