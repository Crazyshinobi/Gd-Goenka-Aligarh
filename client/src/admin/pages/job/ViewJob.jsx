import React from "react";
import { AdminLayout } from "../../components/AdminLayout";
import { useFetchData } from "../../../hooks/useFetchData";
import { CrudTable } from "../../components/CrudTable";

export const ViewJob = () => {
  document.title = "Admin - View Jobs";
  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/job/`;
  const { data, loading, error, refetch } = useFetchData(apiURL);
  const jobs = data?.data || [];

  const columns = [
    {
      header: "S.No",
      body: (rowData, { rowIndex }) => rowIndex + 1,
    },
    { field: "name", header: "Name of Job" },
    { field: "subject", header: "Subject" },
    {
      field: "createdAt",
      header: "Date",
      sortable: true,
      body: (rowData) =>
        new Date(rowData.createdAt).toLocaleDateString("en-GB"),
    },
  ];

  const fields = [
    { name: "name", label: "Name of Job", required: true, type:"text" },
    { name: "subject", label: "Subject", required: true, type:"text" },
  ];

  return (
    <>
      <AdminLayout />
      <div className="p-4 py-6 sm:ml-64 dark:bg-gray-700 min-h-screen">
        <div className="p-2 border-2 border-gray-200 rounded-lg dark:border-white mt-14">
          <h3 className="text-xl lg:text-2xl font-semibold text-center text-gray-900 dark:text-white py-5">
            View Jobs Posted
          </h3>
          <CrudTable
            fields={fields}
            data={jobs}
            refetch={refetch}
            apiURL={apiURL}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
};
