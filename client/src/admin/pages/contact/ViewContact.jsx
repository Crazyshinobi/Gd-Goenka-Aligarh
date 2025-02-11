import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { AdminLayout } from "../../components/AdminLayout";
import { useFetchData } from "../../../hooks/useFetchData";
import { BasicTable } from "../../components/BasicTable";

export const ViewContact = () => {
  document.title = "Admin - View Contact";
  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/contact`;
  const { data, loading, error, refetch } = useFetchData(apiURL);

  // Prepare data for the DataTable
  const contacts = data?.data || [];

  const columns = [
    {
      header: "S.No",
      body: (rowData, { rowIndex }) => rowIndex + 1,
    },
    { field: "name", header: "Name" },
    { field: "email", header: "Email Adress" },
    { field: "mobile", header: "Mobile" },
    { field: "message", header: "Message" },
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
      <Toaster />
      <AdminLayout />
      <div className="p-4 py-6 sm:ml-64 dark:bg-gray-700 min-h-screen">
        <div className="p-2 border-2 border-gray-200 rounded-lg dark:border-none mt-14">
          <h3 className="text-xl lg:text-2xl font-semibold text-center text-gray-900 dark:text-white py-5">
            View Contact Form Enquiries
          </h3>
          <BasicTable
            data={contacts}
            refetch={refetch}
            apiURL={apiURL}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
};
