import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const AdminSidebar = ({ mobileMenu }) => {
  const navigate = useNavigate();

  const signOut = () => {
    Cookies.remove("token");
    navigate("/admin");
  };

  const [accordions, setAccordions] = useState([true, true, true, true, true]);

  const handleAccordion = (index) => {
    const newAccordions = [...accordions];
    newAccordions[index] = !newAccordions[index];
    setAccordions(newAccordions);
  };

  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 bg-white sm:translate-x-0 ${
        mobileMenu ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-label="Sidebar"
    >
      <div
        className="h-full px-4 pb-4 overflow-y-auto bg-white dark:bg-gray-800"
        id="side-menu"
      >
        {/* Sidebar Links */}
        <ul className="space-y-4 font-medium">
          {/* Dashboard  */}
          <li>
            <NavLink
              to="/admin/dashboard"
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
              <span className="ms-3">Dashboard</span>
            </NavLink>
          </li>
          {/* Contact Form  */}
          <li>
            <NavLink
              to="/admin/view-contact"
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
              <span className="flex-1 ms-3">Inbox (Contact Enquiry)</span>
            </NavLink>
          </li>
          {/* Gallery  */}
          <li>
            <button
              onClick={() => handleAccordion(0)}
              type="button"
              className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white group hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-transform"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ms-3">Gallery</span>
              <svg
                className="w-3 h-3 ml-2 transition-transform"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <ul
              id="dropdown-example"
              className={accordions[0] ? "hidden" : "py-2 space-y-2"}
            >
              <li>
                <NavLink
                  to="/admin/add-gallery"
                  className={({ isActive }) =>
                    `flex items-center p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 ${
                      isActive ? "bg-gray-200 dark:bg-gray-600" : ""
                    }`
                  }
                >
                  Add Gallery Images
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/view-gallery"
                  className={({ isActive }) =>
                    `flex items-center p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 ${
                      isActive ? "bg-gray-200 dark:bg-gray-600" : ""
                    }`
                  }
                >
                  View Gallery Images
                </NavLink>
              </li>
            </ul>
          </li>
          {/* Faculty  */}
          <li>
            <button
              onClick={() => handleAccordion(1)}
              type="button"
              className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white group hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-transform"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.4472 4.10557c-.2815-.14076-.6129-.14076-.8944 0L2.76981 8.49706l9.21949 4.39024L21 8.38195l-8.5528-4.27638Z" />
                <path d="M5 17.2222v-5.448l6.5701 3.1286c.278.1325.6016.1293.8771-.0084L19 11.618v5.6042c0 .2857-.1229.5583-.3364.7481l-.0025.0022-.0041.0036-.0103.009-.0119.0101-.0181.0152c-.024.02-.0562.0462-.0965.0776-.0807.0627-.1942.1465-.3405.2441-.2926.195-.7171.4455-1.2736.6928C15.7905 19.5208 14.1527 20 12 20c-2.15265 0-3.79045-.4792-4.90614-.9751-.5565-.2473-.98098-.4978-1.27356-.6928-.14631-.0976-.2598-.1814-.34049-.2441-.04036-.0314-.07254-.0576-.09656-.0776-.01201-.01-.02198-.0185-.02991-.0253l-.01038-.009-.00404-.0036-.00174-.0015-.0008-.0007s-.00004 0 .00978-.0112l-.00009-.0012-.01043.0117C5.12215 17.7799 5 17.5079 5 17.2222Zm-3-6.8765 2 .9523V17c0 .5523-.44772 1-1 1s-1-.4477-1-1v-6.6543Z" />
              </svg>

              <span className="ms-3">Faculty</span>
              <svg
                className="w-3 h-3 ml-2 transition-transform"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <ul
              id="dropdown-example"
              className={accordions[1] ? "hidden" : "py-2 space-y-2"}
            >
              <li>
                <NavLink
                  to="/admin/add-faculty"
                  className={({ isActive }) =>
                    `flex items-center p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 ${
                      isActive ? "bg-gray-200 dark:bg-gray-600" : ""
                    }`
                  }
                >
                  Add Faculty
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/view-faculty"
                  className={({ isActive }) =>
                    `flex items-center p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 ${
                      isActive ? "bg-gray-200 dark:bg-gray-600" : ""
                    }`
                  }
                >
                  View Faculty
                </NavLink>
              </li>
            </ul>
          </li>
          {/* Content  */}
          {/* <li>
            <button
              onClick={() => handleAccordion(1)}
              type="button"
              className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white group hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-transform"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M19.003 3A2 2 0 0 1 21 5v2h-2V5.414L17.414 7h-2.828l2-2h-2.172l-2 2H9.586l2-2H9.414l-2 2H3V5a2 2 0 0 1 2-2h14.003ZM3 9v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Zm2-2.414L6.586 5H5v1.586Zm4.553 4.52a1 1 0 0 1 1.047.094l4 3a1 1 0 0 1 0 1.6l-4 3A1 1 0 0 1 9 18v-6a1 1 0 0 1 .553-.894Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ms-3">Content</span>
              <svg
                className="w-3 h-3 ml-2 transition-transform"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <ul
              id="dropdown-example"
              className={accordions[1] ? "hidden" : "py-2 space-y-2"}
            >
              <li>
                <NavLink
                  to="/admin/add-content"
                  className={({ isActive }) =>
                    `flex items-center p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 ${
                      isActive ? "bg-gray-200 dark:bg-gray-600" : ""
                    }`
                  }
                >
                  Add Content
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/view-content"
                  className={({ isActive }) =>
                    `flex items-center p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 ${
                      isActive ? "bg-gray-200 dark:bg-gray-600" : ""
                    }`
                  }
                >
                  View Content
                </NavLink>
              </li>
            </ul>
          </li> */}
          {/* Job */}
          <li>
            <button
              onClick={() => handleAccordion(2)}
              type="button"
              className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white group hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-transform"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ms-3">Job</span>
              <svg
                className="w-3 h-3 ml-2 transition-transform"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <ul
              id="dropdown-example"
              className={accordions[2] ? "hidden" : "py-2 space-y-2"}
            >
              <li>
                <NavLink
                  to="/admin/add-job"
                  className={({ isActive }) =>
                    `flex items-center p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 ${
                      isActive ? "bg-gray-200 dark:bg-gray-600" : ""
                    }`
                  }
                >
                  Create Job
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/view-job"
                  className={({ isActive }) =>
                    `flex items-center p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 ${
                      isActive ? "bg-gray-200 dark:bg-gray-600" : ""
                    }`
                  }
                >
                  View Jobs
                </NavLink>
              </li>
            </ul>
          </li>
          {/* Job Applications */}
          <li>
            <NavLink
              to="/admin/view-job-applications"
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
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.35 0 .687.06 1 .17V5a2 2 0 0 0-2-2H5Zm4 10H3v2a2 2 0 0 0 2 2h4v-4Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ms-3">Job Applications</span>
            </NavLink>
          </li>
          {/* Admission Enquiry */}
          <li>
            <NavLink
              to="/admin/view-admission"
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
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.4472 4.10557c-.2815-.14076-.6129-.14076-.8944 0L2.76981 8.49706l9.21949 4.39024L21 8.38195l-8.5528-4.27638Z" />
                <path d="M5 17.2222v-5.448l6.5701 3.1286c.278.1325.6016.1293.8771-.0084L19 11.618v5.6042c0 .2857-.1229.5583-.3364.7481l-.0025.0022-.0041.0036-.0103.009-.0119.0101-.0181.0152c-.024.02-.0562.0462-.0965.0776-.0807.0627-.1942.1465-.3405.2441-.2926.195-.7171.4455-1.2736.6928C15.7905 19.5208 14.1527 20 12 20c-2.15265 0-3.79045-.4792-4.90614-.9751-.5565-.2473-.98098-.4978-1.27356-.6928-.14631-.0976-.2598-.1814-.34049-.2441-.04036-.0314-.07254-.0576-.09656-.0776-.01201-.01-.02198-.0185-.02991-.0253l-.01038-.009-.00404-.0036-.00174-.0015-.0008-.0007s-.00004 0 .00978-.0112l-.00009-.0012-.01043.0117C5.12215 17.7799 5 17.5079 5 17.2222Zm-3-6.8765 2 .9523V17c0 .5523-.44772 1-1 1s-1-.4477-1-1v-6.6543Z" />
              </svg>

              <span className="ms-3">Admission Enquiry</span>
            </NavLink>
          </li>

          {/* Admission Applications */}
          <li>
            <NavLink
              to="/admin/view-admission-application"
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
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2v14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2V5a1 1 0 0 1-1-1Zm5 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1Zm-5 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1Zm-3 4a2 2 0 0 0-2 2v3h2v-3h2v3h2v-3a2 2 0 0 0-2-2h-2Z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="ms-3">Admission Application</span>
            </NavLink>
          </li>
          {/* Admission Application Query */}
          <li>
            <NavLink
              to="/admin/view-admission-application-query"
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
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ms-3">Student Admission Query</span>
            </NavLink>
          </li>
          {/* Admission Application Payment */}
          <li>
            <NavLink
              to="/admin/view-payment-transaction"
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
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
                  clipRule="evenodd"
                />
                <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
              </svg>
              <span className="ms-3">Payment Transactions</span>
            </NavLink>
          </li>
          {/* Admin Section */}
          <li>
            <button
              onClick={() => handleAccordion(3)}
              type="button"
              className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white group hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-transform"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM10 12a6.957 6.957 0 0 1-1.264-.931A6.432 6.432 0 0 1 9 9v-2A6.439 6.439 0 0 1 9 2v2a6.444 6.444 0 0 1 2-.3v-1a3.963 3.963 0 0 0-1.4.267A3.963 3.963 0 0 0 9.5 2c.95 0 2 .318 2.625.75 1.125-.748 3.03-.843 3.5-.675-.98-.6 5.036-1.635-.266-2.62Z" />
              </svg>
              <span className="ms-3">Users</span>
              <svg
                className="w-3 h-3 ml-2 transition-transform"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <ul
              id="dropdown-example"
              className={accordions[3] ? "hidden" : "py-2 space-y-2"}
            >
              <li>
                <NavLink
                  to="/admin/add-user"
                  className={({ isActive }) =>
                    `flex items-center p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 ${
                      isActive ? "bg-gray-200 dark:bg-gray-600" : ""
                    }`
                  }
                >
                  Add User
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/view-user"
                  className={({ isActive }) =>
                    `flex items-center p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 ${
                      isActive ? "bg-gray-200 dark:bg-gray-600" : ""
                    }`
                  }
                >
                  View User
                </NavLink>
              </li>
            </ul>
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
