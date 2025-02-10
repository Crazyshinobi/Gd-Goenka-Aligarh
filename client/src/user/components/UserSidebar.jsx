import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const UserSidebar = ({ mobileMenu }) => {
  const navigate = useNavigate();

  const signOut = () => {
    Cookies.remove("userToken");
    localStorage.removeItem("studentname");
    localStorage.removeItem("formData");
    navigate("/admission/application-form/login");
  };

  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 bg-white sm:translate-x-0 ${
        mobileMenu ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-label="Sidebar"
    >
      <div className="h-full px-4 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        {/* Sidebar Links */}
        <ul className="space-y-4 font-medium">
          {/* Dashboard  */}
          <li>
            <NavLink
              to="/user/dashboard"
              className={({ isActive }) =>
                `flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group transition duration-200 ${
                  isActive ? "bg-gray-200 dark:bg-gray-600" : ""
                }`
              }
            >
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-transform"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">All Applications</span>
            </NavLink>
          </li>
          {/* Contact Form  */}
          <li>
            <NavLink
              to="/user/admission-query"
              className={({ isActive }) =>
                `flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group transition duration-200 ${
                  isActive ? "bg-gray-200 dark:bg-gray-600" : ""
                }`
              }
            >
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-transform"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="flex-1 ms-3">Queries</span>
            </NavLink>
          </li>
         </ul>

        {/* Sign-out Button */}
        <button
          className="w-full mt-5 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
          onClick={signOut}
        >
          Sign out
        </button>
      </div>
    </aside>
  );
};
