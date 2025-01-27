import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserLayout } from "./components/UserLayout";
import { useForm } from "./forms/FormContext";
import Cookies from "js-cookie";

export const UserDashboard = () => {
  document.title = "User Dashboard";
  const { formData, handleChange } = useForm();
  const userId = Cookies.get("userId");

  useEffect(() => {
    handleChange("user", "user" ,userId);
    console.log("Formdata User ID set Successfully");
  }, []);

  return (
    <>
      <UserLayout />
      <div className="p-4 py-6 lg:p-6 sm:ml-64 dark:bg-gray-800 min-h-screen">
        <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white mt-14 bg-white dark:bg-gray-700 shadow-lg">
          <Link to="/user/steps">
            <button className="mt-2 px-5 py-1.5 bg-white text-indigo-600 text-xs font-semibold rounded-lg shadow-md hover:bg-indigo-200 focus:outline-none dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-500">
              Your Application
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
