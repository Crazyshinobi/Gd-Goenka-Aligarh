import React, { useState, useRef } from "react";
import { AdminLayout } from "../../components/AdminLayout";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "../../components/Button";
import { usePostRequest } from "../../../hooks/usePostRequest";

export const AddFaculty = () => {
  document.title = "Admin - Add Faculty";
  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/faculty/`;
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  // Reference to the file input
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const { postRequest, loading, error } = usePostRequest(apiURL);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !file) {
      toast.error("Both name and image are required.");
      return;
    }

    // Create a new FormData object
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", file);

    // Send the request with the FormData
    try {
      const response = await postRequest(formData);

      if (response && response.success) {
        toast.success(response.message);
        setName("");
        setFile(null);

        // Reset the file input field
        fileInputRef.current.value = null;
      } else {
        toast.error(response.message || "Something went wrong!");
      }
    } catch (err) {
      toast.error("An error occurred while adding the faculty image.");
      console.error("Error adding Faculty:", err);
    }
  };

  return (
    <>
      <Toaster />
      <AdminLayout />
      <div className="p-6 sm:ml-64 dark:bg-gray-800 h-screen">
        <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white mt-14 bg-white dark:bg-gray-700 shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-12 gap-6">
              <div className="col-span-12">
                <h3 className="text-xl lg:text-2xl font-semibold text-center text-gray-900 dark:text-white">
                  Add Faculty
                </h3>
              </div>
              <div className="col-span-12">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Faculty Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="w-full outline-none p-1 lg:p-2 bg-transparent border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-300 focus:border-fuchsia-300 dark:text-white dark:border-gray-500 dark:outline-none dark:bg-gray-600"
                  required
                />
              </div>
              <div className="col-span-12">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="file_input"
                >
                  Upload file (1 file)
                </label>
                <input
                  ref={fileInputRef}
                  className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
                <p
                  className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  id="file_input_help"
                >
                  JPEG, PNG, JPG or WEBP (MAX. 5 MB).
                </p>
              </div>
              <div className="col-span-12 text-center">
                <Button name="Submit" loading={loading} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
