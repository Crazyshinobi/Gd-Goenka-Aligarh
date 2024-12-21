import React, { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AdminLayout } from "../../components/AdminLayout";
import { Button } from "../../components/Button";
import { usePostRequest } from "../../../hooks/usePostRequest";

export const AddContent = () => {
  document.title = "Admin - Add Content";
  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/content`;

  const [contentType, setContentType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState(null);

  // Reference to the file input
  const fileInputRef = useRef(null);

  const { postRequest, loading, error } = usePostRequest(apiURL);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !contentType ||
      !title ||
      !description ||
      !files ||
      files.length === 0
    ) {
      toast.error("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("type", contentType);
    formData.append("title", title);
    formData.append("description", description);

    // Append files
    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }
    }

    try {
      const response = await postRequest(formData);
      if (response?.success) {
        toast.success(response.message);

        // Clear the form fields
        setContentType("");
        setTitle("");
        setDescription("");
        setFiles(null);

        // Reset the file input field
        fileInputRef.current.value = null;
      } else {
        toast.error(response?.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("An error occurred while adding the content.");
      console.error("Error adding gallery:", error);
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
                  Add Content
                </h3>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <label
                  htmlFor="content_type"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an option*
                </label>
                <select
                  id="content_type"
                  value={contentType}
                  onChange={(e) => setContentType(e.target.value)}
                  className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option value="">Choose a Content type</option>
                  <option value="assembly">Assembly</option>
                  <option value="blog">Blog</option>
                  <option value="club">Club</option>
                  <option value="event">Event</option>
                  <option value="news">News</option>
                </select>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="title"
                  className="w-full outline-none p-1 lg:p-2 bg-transparent border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-300 focus:border-fuchsia-300 dark:text-white dark:border-gray-500 dark:outline-none dark:bg-gray-600"
                  required
                />
              </div>
              <div className="col-span-12">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="4"
                  className="block outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></textarea>
              </div>
              <div className="col-span-12">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="multiple_files"
                >
                  Upload images (Multiple Images)
                </label>
                <input
                  ref={fileInputRef} // Attach the ref here
                  onChange={(e) => setFiles(e.target.files)}
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="multiple_files"
                  type="file"
                  accept="image/*"
                  multiple
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
