import React from "react";
import { AdminLayout } from "../../components/AdminLayout";
import { useFetchData } from "../../../hooks/useFetchData";
import { BasicTable } from "../../components/BasicTable";

export const ViewJobApplication = () => {
  document.title = "Admin - View Job Applications";
  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/job-application/`;
  const { data, loading, error, refetch } = useFetchData(apiURL);
  const jobApplications = data?.data || [];

  const columns = [
    {
      header: "S.No",
      body: (rowData, { rowIndex }) => rowIndex + 1,
      style: { width: "50px" },
    },
    {
      field: "name",
      header: "Name",
    },
    {
      field: "email",
      header: "Email Address",
    },
    {
      field: "phone",
      header: "Mobile Number",
    },
    {
      field: "qualification",
      header: "Qualification",
    },
    {
      field: "expected_salary",
      header: "Expected Salary",
    },
    {
      field: "last_organization",
      header: "Last Organization",
    },
    {
      field: "last_salary",
      header: "Last Salary",
    },
    {
      field: "experience",
      header: "Experience",
    },
    {
      field: "address",
      header: "Address",
    },
    {
      field: "job.name",
      header: "Applied For",
      body: (rowData) => rowData.job.name
    },
    {
      field: "job.subject",
      header: "Applied For  Subjects",
      body: (rowData) => rowData.job.subject
    },
    {
      field: "createdAt",
      header: "Date",
      sortable: true,
      body: (rowData) =>
        new Date(rowData.createdAt).toLocaleDateString("en-GB"),
    },
    {
      field: "image",
      header: "Profile",
      body: (rowData) => (
        <a
          href={`${rowData.image}`}
          target="_blank"
        >
          <button
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2"
            target="_blank"
          >
            <div className="flex gap-2 items-center">
              <svg
                className="w-4 h-4 text-white"
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

              <p>View</p>
            </div>
          </button>
        </a>
      ),
    },

    {
      field: "resume",
      header: "Resume",
      body: (rowData) => (
        <a
          href={`${rowData.resume}`}
          target="_blank"
        >
          <button
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg  text-sm px-3 py-1.5 text-center me-2 mb-2"
            target="_blank"
          >
            <div className="flex gap-2 items-center">
              <svg
                className="w-4 h-4 text-white"
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

              <p>View</p>
            </div>
          </button>
        </a>
      ),
    },
  ];

  return (
    <>
      <AdminLayout />
      <div className="p-4 py-6 sm:ml-64 dark:bg-gray-700 min-h-screen">
        <div className="p-2 border-2 border-gray-200 rounded-lg dark:border-white mt-14">
          <h3 className="text-xl lg:text-2xl font-semibold text-center text-gray-900 dark:text-white py-5">
            View Job Applications
          </h3>
          <BasicTable
            data={jobApplications}
            refetch={refetch}
            apiURL={apiURL}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
};
