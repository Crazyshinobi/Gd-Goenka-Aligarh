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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Card 1 */}
           This is user dashboard
          </div>
          
        </div>
      </div>
    </>
  );
};
