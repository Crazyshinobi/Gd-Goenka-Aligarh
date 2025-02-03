import React, { useEffect, useState, useLayoutEffect } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

import user from "../assets/user.png";

export const AdminNavbar = ({ mobileMenu, setMobileMenu }) => {
  const [profile, setProfile] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  const changeTheme = () => {
    let themeLink = document.getElementById("app-theme");
    if (isDarkMode) {
      themeLink.href = "/themes/lara-light-cyan/theme.css";
    } else {
      themeLink.href = "/themes/lara-dark-teal/theme.css";
    }
  };

  const toggleDark = () => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  };

  const handleThemeToggle = () => {
    const currentTheme = localStorage.getItem("color-theme");
    if (currentTheme === "dark") {
      localStorage.setItem("color-theme", "light");
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      localStorage.setItem("color-theme", "dark");
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
    changeTheme();
  };

  const handleProfile = () => {
    setProfile(!profile);
  };

  const signOut = () => {
    Cookies.remove("token");
    navigate("/admin");
  };

  useEffect(() => {
    toggleDark();
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-md">
      <div className="px-4 py-3 lg:px-6 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <Link to="/admin" className="flex items-center space-x-3">
              <span className="hidden lg:block text-2xl font-semibold text-black dark:text-white">
                GD Goenka Public School Aligarh
              </span> 
            </Link>
          </div>

          <div className="flex items-center gap-5">
            {/* Theme Toggle */}
            <button
              onClick={handleThemeToggle}
              className="flex items-center justify-center p-2 rounded-full text-gray-800 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
            >
              <svg
                className={`w-6 h-6 transition-all duration-500 transform ${
                  isDarkMode ? "opacity-0" : "opacity-100"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
                  clipRule="evenodd"
                />
              </svg>

              <svg
                className={`w-6 h-6 transition-all duration-500 transform ${
                  isDarkMode ? "opacity-100" : "opacity-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                />
              </svg>
            </button>

            <div>
              <p className="dark:text-white">Welcome {localStorage.getItem("username").split(" ")[0] || "Guest"}! </p>
            </div>
            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={handleProfile}
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-user"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src={user}
                  alt="user photo"
                />
              </button>
              <div
                className={`${
                  profile ? "hidden" : "absolute z-50 my-4"
                } text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 right-0 top-4 w-24`}
                id="dropdown-user"
              >
                <ul className="py-1">
                  <li>
                    <button
                      onClick={signOut}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
