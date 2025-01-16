import React, { useState } from "react";
import { AdminLayout } from "../../components/AdminLayout";
import { Button } from "../../components/Button";
import { usePostRequest } from "../../../hooks/usePostRequest";
import toast, { Toaster } from "react-hot-toast";

export const AddUser = () => {
  document.title = "Admin - Add User";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/admin/signup`;

  const { postRequest, loading, error } = usePostRequest(apiURL);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
      role,
    };
    const response = await postRequest(data);

    if (response && response.success) {
      toast.success("Admin added successfully!");
      setName("");
      setEmail("");
      setRole("");
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
      <div className="p-6 sm:ml-64 dark:bg-gray-800 h-screen">
        <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white mt-14 bg-white dark:bg-gray-700 shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-12 gap-6">
              <div className="col-span-12">
                <h3 className="text-xl lg:text-2xl font-semibold text-center text-gray-900 dark:text-white">
                  Create User
                </h3>
              </div>

              <div className="col-span-12 lg:col-span-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="w-full p-1 lg:p-2 bg-transparent border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-300 focus:border-fuchsia-300 dark:text-white dark:border-gray-500 outline-none dark:bg-gray-600"
                />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <label
                  htmlFor="role"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select a role*
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option value="">Choose a Role*</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
              <div className="col-span-12">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="w-full p-1 lg:p-2 bg-transparent border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-300 focus:border-fuchsia-300 dark:text-white dark:border-gray-500 outline-none dark:bg-gray-600"
                />
              </div>
              <div className="col-span-12">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-1 lg:p-2 bg-transparent border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-300 focus:border-fuchsia-300 dark:text-white dark:border-gray-500 outline-none dark:bg-gray-600"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-[50%] transform -translate-y-[50%] p-2 text-gray-600 dark:text-gray-300"
                  >
                    {showPassword ? (
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
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
