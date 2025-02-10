import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserLayout } from "./components/UserLayout";
import { useForm } from "./forms/FormContext";
import Cookies from "js-cookie";
import axios from "axios";
import ThankYouPage from "./forms/ThankYouPage";

export const UserDashboard = () => {
  document.title = "User Dashboard";
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const [status, setStatus] = useState("")
  const { formData, handleChange } = useForm();
  const userId = Cookies.get("userId");
  const apiUrl = `${process.env.REACT_APP_BASE_URL}/api/v1/admission-application/check-user-paid/${userId}`;
  const checkUserStatus = async () => {
    try {
      const response = await axios.get(apiUrl);
      if (!response?.data?.success) {
        const status = response.data.data;
        setStatus(status);
        setAlreadySubmitted(true);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);  
    }
  };
  useEffect(() => {
    handleChange("user", "user", userId);
    checkUserStatus();
  }, []);

  return (
    <>
      <UserLayout />
      {alreadySubmitted ? (
        <div className="p-4 py-6 lg:p-6 sm:ml-64 dark:bg-gray-800 min-h-screen">
          <div className="border-2 border-gray-200 rounded-lg dark:border-white mt-14 bg-white dark:bg-gray-700 shadow-lg">
            <ThankYouPage status={status} />
          </div>
        </div>
      ) : (
        <div className="p-4 py-6 lg:p-6 sm:ml-64 dark:bg-gray-800 min-h-screen">
          <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white mt-14 bg-white dark:bg-gray-700 shadow-lg">
            <Link to="/user/steps">
              <button className="mt-2 px-5 py-1.5 bg-white text-indigo-600 text-xs font-semibold rounded-lg shadow-md hover:bg-indigo-200 focus:outline-none dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-500">
                Your Application
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
