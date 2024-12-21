import React, { useState } from "react";
import { AdminLayout } from "../../components/AdminLayout";
import { Button } from "../../components/Button";
import { usePostRequest } from "../../../hooks/usePostRequest";
import toast, { Toaster } from "react-hot-toast";

export const AddJob = () => {
  document.title = "Admin - Add Job"
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/job/`;

  const { postRequest, loading, error } = usePostRequest(apiURL);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      subject,
    };
    const response = await postRequest(data);

    if (response && response.success) {
      toast.success(response.message);
      setName("");
      setSubject("");
    } else if (error) {
      toast.error(error);
      console.error("Error adding jobs:", error);
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
                  Create Job
                </h3>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="w-full outline-none p-1 lg:p-2 bg-transparent border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-300 focus:border-fuchsia-300 dark:text-white dark:border-gray-500  dark:outline-none  dark:bg-gray-600"
                />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Enter Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full  outline-none p-1 lg:p-2 bg-transparent border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-300 focus:border-fuchsia-300 dark:text-white dark:border-gray-500  dark:outline-none  dark:bg-gray-600"
                  required
                />
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
