import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { AdminLayout } from "../../components/AdminLayout";
import { useFetchData } from "../../../hooks/useFetchData";
import { DataTable } from "../../components/DataTable";

export const ViewContact = () => {
  document.title = "Admin - View Contact";
  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/contact`;
  const { data, loading, error, refetch } = useFetchData(apiURL);

  // Prepare data for the DataTable
  const contacts = data?.data || [];

  // Define columns for the DataTable
  const columns = React.useMemo(
    () => [
      {
        Header: "S.No.",
        accessor: (_, index) => index + 1, // Serial number
      },
      {
        Header: "Parent Name",
        accessor: "parent_name",
      },
      {
        Header: "Student's Name",
        accessor: "student_name",
      },
      {
        Header: "Parent's Email Address",
        accessor: "parent_email_address",
      },
      {
        Header: "Mobile Number",
        accessor: "mobile",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "Class",
        accessor: "grade",
      },
    ],
    []
  );

  return (
    <>
      <Toaster />
      <AdminLayout />
      <div className="p-4 py-6 sm:ml-64 dark:bg-gray-700 min-h-screen">
        <div className="p-2 border-2 border-gray-200 rounded-lg dark:border-none mt-14">
          <div className="flex justify-end my-5">
            <button
              onClick={refetch}
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-green-700 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
            >
              Refetch
            </button>
          </div>
          {loading && (
            <div
              className="flex justify-center items-center h-[85vh]"
              role="status"
            >
              {/* Loading spinner */}
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG paths here */}
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
          {error && (
            <div className="flex justify-center items-center h-[90vh]">
              <h1>Error: {error}</h1>
            </div>
          )}
          {!loading && !error && contacts.length > 0 && (
            <DataTable data={contacts} columns={columns} />
          )}
        </div>
      </div>
    </>
  );
};