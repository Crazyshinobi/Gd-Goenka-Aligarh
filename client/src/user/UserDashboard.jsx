import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserLayout } from "./components/UserLayout";

export const UserDashboard = () => {
  document.title = "User Dashboard";

  return (
    <>
      <UserLayout />
      <div className="lg:p-6 sm:ml-64 dark:bg-gray-800 min-h-screen">
        <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white mt-14 bg-white dark:bg-gray-700 shadow-lg">
             <Link to="/user/general-information">
                <button className="mt-2 px-5 py-1.5 bg-white text-indigo-600 text-xs font-semibold rounded-lg shadow-md hover:bg-indigo-200 focus:outline-none dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-500">
                  Your Application
                </button>
              </Link>       
         </div>
       
      </div>
    </>
  );
};
