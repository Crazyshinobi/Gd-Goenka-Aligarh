import React, { useState } from "react";
import { AdminLayout } from "../../components/AdminLayout";
import { usePostRequest } from "../../../hooks/usePostRequest";
import toast, { Toaster } from "react-hot-toast";

export const AddAdmin = () => {
  document.title = "Admin - Add Admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/admin/signup`;

  const { postRequest, loading, error } = usePostRequest(apiURL);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    const response = await postRequest(data);

    if (response && response.success) {
      toast.success("Admin added successfully!");
      setEmail("");
      setPassword("");
    } else if (error) {
      toast.error(error);
      console.error("Error adding admin:", error);
    }
  };

  return (
    <>
      <Toaster />
      <AdminLayout />
      <div class="p-4 py-6 sm:ml-64 dark:bg-gray-700 h-screen">
        <div class="p-4 border-2 border-gray-200 rounded-lg dark:border-white mt-14">
          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-12 gap-5">
              <div className="col-span-12">
                <h3 className="text-lg md:text-xl lg:text-3xl text-center text-black dark:text-white">
                  Add Admin
                </h3>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <label
                  for="email"
                  class="block mb-2 text-xs md:text-sm lg:text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  class="bg-transparent border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-1 lg:p-2.5 dark:text-white"
                />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-xs md:text-sm lg:text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"} // Toggle between text and password
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-transparent border border-gray-300 outline-none text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-1 lg:p-2.5 dark:text-white"
                    required
                  />
                  {/* Show/Hide Password Button */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)} // Toggle show/hide password
                    className="absolute right-0 top-[50%] transform -translate-y-[50%] p-2 rounded-e-lg text-gray-600 dark:bg-white focus:outline-none"
                  >
                    {showPassword ? (
                      <span>
                        <svg
                          className="w-4 h-4 lg:w-6 lg:h-6 text-gray-800"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeWidth="2"
                            d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                          />
                          <path
                            stroke="currentColor"
                            strokeWidth="2"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      </span> // Eye icon for showing password
                    ) : (
                      <span>
                        <svg
                          className="w-4 h-4 lg:w-6 lg:h-6 text-gray-800"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      </span> // Eye with a slash for hiding password
                    )}
                  </button>
                </div>
              </div>
              <div className="col-span-12">
                <button
                  type="submit"
                  class="text-white bg-fuchsia-500 font-medium rounded-lg text-sm px-5 py-1 lg:py-2 mr-2 mb-2 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
