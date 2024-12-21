import React, { useEffect, useState } from "react";
import { AdminLayout } from "./components/AdminLayout";
import axios from "axios";
import { Link } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";
import { BasicTable } from "./components/BasicTable";

export const Dashboard = () => {
  document.title = "Admin Dashboard";

  // State to store counts of each item
  const [counts, setCounts] = useState({
    admin: 0,
    contact: 0,
    gallery: 0,
    content: 0,
    admission: 0,
    job: 0,
    jobApplication: 0,
  });

  const fetchCount = async () => {
    const countItems = [
      "admin",
      "contact",
      "gallery",
      "content",
      "admission",
      "job",
      "job-application",
    ];

    // Fetch the count data for each item
    const countData = {};

    for (let item of countItems) {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/v1/${item}/count`
        );
        if (item === "job-application") {
          countData.jobApplication = response.data.data; // Assign to camelCase key
        } else {
          countData[item] = response.data.data;
        }
      } catch (error) {
        console.error(`Error fetching ${item} count:`, error);
      }
    }
    setCounts(countData);
  };

  useEffect(() => {
    fetchCount();
  }, []);

  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/contact`;
  const { data, loading, error, refetch } = useFetchData(apiURL);

  // Prepare data for the DataTable
  const contacts = data?.data || [];

  const columns = [
    {
      header: "S.No",
      body: (rowData, { rowIndex }) => rowIndex + 1,
    },
    { field: "parent_name", header: "Parent Name" },
    { field: "student_name", header: "Student Name" },
    { field: "parent_email_address", header: "Parent Email" },
    { field: "mobile", header: "Mobile" },
    { field: "state", header: "State" },
    { field: "city", header: "City" },
    { field: "grade", header: "Grade" },
    {
      field: "createdAt",
      header: "Date",
      sortable: true,
      body: (rowData) =>
        new Date(rowData.createdAt).toLocaleDateString("en-GB"),
    },
  ];

  return (
    <>
      <AdminLayout />
      <div className="lg:p-6 sm:ml-64 dark:bg-gray-800 min-h-screen">
        <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white mt-14 bg-white dark:bg-gray-700 shadow-lg">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Card 1 */}
            <div className="flex flex-col gap-2 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 dark:bg-gradient-to-r dark:from-indigo-400 dark:via-indigo-500 dark:to-indigo-600 shadow-md p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
              <h2 className="text-sm font-semibold text-white dark:text-gray-100">
                Total Admin
              </h2>
              <p className="text-xl font-bold text-white dark:text-gray-200">
                {counts.admin}
              </p>
              <Link to="/admin/add-admin">
                <button className="mt-2 px-5 py-1.5 bg-white text-indigo-600 text-xs font-semibold rounded-lg shadow-md hover:bg-indigo-200 focus:outline-none dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-500">
                  View Details
                </button>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-2 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 via-green-600 to-green-700 dark:bg-gradient-to-r dark:from-green-400 dark:via-green-500 dark:to-green-600 shadow-md p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
              <h2 className="text-sm font-semibold text-white dark:text-gray-100">
                Total Enquiries
              </h2>
              <p className="text-xl font-bold text-white dark:text-gray-200">
                {counts.contact}
              </p>
              <Link to="/admin/view-contact">
                <button className="mt-2 px-5 py-1.5 bg-white text-green-600 text-xs font-semibold rounded-lg shadow-md hover:bg-green-200 focus:outline-none dark:bg-green-600 dark:text-white dark:hover:bg-green-500">
                  View Details
                </button>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-2 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 dark:bg-gradient-to-r dark:from-blue-400 dark:via-blue-500 dark:to-blue-600 shadow-md p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
              <h2 className="text-sm font-semibold text-white dark:text-gray-100">
                Total Gallery
              </h2>
              <p className="text-xl font-bold text-white dark:text-gray-200">
                {counts.gallery}
              </p>
              <Link to="/admin/view-gallery">
                <button className="mt-2 px-5 py-1.5 bg-white text-blue-600 text-xs font-semibold rounded-lg shadow-md hover:bg-blue-200 focus:outline-none dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500">
                  View Details
                </button>
              </Link>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col gap-2 items-center justify-center rounded-lg bg-gradient-to-r from-red-500 via-red-600 to-red-700 dark:bg-gradient-to-r dark:from-red-400 dark:via-red-500 dark:to-red-600 shadow-md p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
              <h2 className="text-sm font-semibold text-white dark:text-gray-100">
                Total Content
              </h2>
              <p className="text-xl font-bold text-white dark:text-gray-200">
                {counts.content}
              </p>
              <Link to="/admin/view-content">
                <button className="mt-2 px-5 py-1.5 bg-white text-red-600 text-xs font-semibold rounded-lg shadow-md hover:bg-red-200 focus:outline-none dark:bg-red-600 dark:text-white dark:hover:bg-red-500">
                  View Details
                </button>
              </Link>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col gap-2 items-center justify-center rounded-lg bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 dark:bg-gradient-to-r dark:from-yellow-400 dark:via-yellow-500 dark:to-yellow-600 shadow-md p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
              <h2 className="text-sm font-semibold text-white dark:text-gray-100">
                Total Admission Applications
              </h2>
              <p className="text-xl font-bold text-white dark:text-gray-200">
                {counts.admission}
              </p>
              <Link to="/admin/view-admission">
                <button className="mt-2 px-5 py-1.5 bg-white text-yellow-600 text-xs font-semibold rounded-lg shadow-md hover:bg-yellow-200 focus:outline-none dark:bg-yellow-600 dark:text-white dark:hover:bg-yellow-500">
                  View Details
                </button>
              </Link>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col gap-2 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 dark:bg-gradient-to-r dark:from-purple-400 dark:via-purple-500 dark:to-purple-600 shadow-md p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
              <h2 className="text-sm font-semibold text-white dark:text-gray-100">
                Total Jobs
              </h2>
              <p className="text-xl font-bold text-white dark:text-gray-200">
                {counts.job}
              </p>
              <Link to="/admin/view-job">
                <button className="mt-2 px-5 py-1.5 bg-white text-purple-600 text-xs font-semibold rounded-lg shadow-md hover:bg-purple-200 focus:outline-none dark:bg-purple-600 dark:text-white dark:hover:bg-purple-500">
                  View Details
                </button>
              </Link>
            </div>

            {/* Card 7 */}
            <div className="flex flex-col gap-2 items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 dark:bg-gradient-to-r dark:from-teal-400 dark:via-teal-500 dark:to-teal-600 shadow-md p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
              <h2 className="text-sm font-semibold text-white dark:text-gray-100">
                Total Job Applications
              </h2>
              <p className="text-xl font-bold text-white dark:text-gray-200">
                {counts.jobApplication}
              </p>
              <Link to="/admin/view-job-applications">
                <button className="mt-2 px-5 py-1.5 bg-white text-teal-600 text-xs font-semibold rounded-lg shadow-md hover:bg-teal-200 focus:outline-none dark:bg-teal-600 dark:text-white dark:hover:bg-teal-500">
                  View Details
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-10">
            <BasicTable
              data={contacts}
              refetch={refetch}
              apiURL={apiURL}
              columns={columns}
            />
          </div>
        </div>
      </div>
    </>
  );
};
