import React from "react";
import { useFetchData } from "../../../hooks/useFetchData";
import { AdminLayout } from "../../components/AdminLayout";
import { BasicTable } from "../../components/BasicTable";

export const ViewAdmissionApplicationQuery = () => {
  document.title = "Admin - View Admission Application";
  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/admission-application-query/`;
  const { data, loading, error, refetch } = useFetchData(apiURL);
  const admissionApplicationQuery = data?.data || [];
  const columns = [
    {
      header: "S.No",
      body: (rowData, { rowIndex }) => rowIndex + 1,
      style: { width: "50px" },
    },
    { field: "name", header: "Name" },
    { field: "email", header: "Email Address" },
    {
      field: "message",
      header: "Message",
      body: (rowData) => (
        <textarea
          value={rowData.message}
          readOnly
          disabled
          className="w-full p-2 border rounded-md resize-none"
          rows={3}
        />
      ),
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
      <div className="p-4 py-6 sm:ml-64 dark:bg-gray-700 min-h-screen">
        <div className="p-2 border-2 border-gray-200 rounded-lg dark:border-white mt-14">
          <h3 className="text-xl lg:text-2xl font-semibold text-center text-gray-900 dark:text-white py-5">
            View Student Admission Queries
          </h3>
          <BasicTable
            data={admissionApplicationQuery}
            refetch={refetch}
            apiURL={apiURL}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
};
