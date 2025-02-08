import React from "react";
import { AdminLayout } from "../../components/AdminLayout";
import { BasicTable } from "../../components/BasicTable";
import { useFetchData } from "../../../hooks/useFetchData";

export const ViewUser = () => {
  document.title = "Admin - View User";
  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/admin`;
  const { data, loading, error, refetch } = useFetchData(apiURL);
  const admins = data?.data || [];
  const columns = [
    {
      header: "S.No",
      body: (rowData, { rowIndex }) => rowIndex + 1,
    },
    { field: "name", header: "Name" },
    {
      field: "email",
      header: "Email",
    },
    {
      field: "role",
      header: "Role",
      sortable: true,
      body: (rowData) => (rowData.role === "admin" ? "Admin" : "User"),
    },
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
      <div className="p-6 sm:ml-64 dark:bg-gray-800 min-h-screen">
        <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white mt-14 bg-white dark:bg-gray-700 shadow-lg">
          <h3 className="text-xl lg:text-2xl font-semibold text-center text-gray-900 dark:text-white py-5">
            View Users
          </h3>
          <BasicTable
            data={admins}
            refetch={refetch}
            apiURL={apiURL}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
};
