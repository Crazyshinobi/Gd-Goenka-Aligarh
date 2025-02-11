import React from "react";
import { AdminLayout } from "../../components/AdminLayout";
import { useFetchData } from "../../../hooks/useFetchData";
import { BasicTable } from "../../components/BasicTable";

export const ViewAddmission = () => {
  document.title = "Admin - View Admission";

  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/admission-enquiry/`;
  const { data, loading, error, refetch } = useFetchData(apiURL);
  const admission = data?.data || [];

  const columns = [
    {
      header: "S.No",
      body: (rowData, { rowIndex }) => rowIndex + 1, 
      style: { width: "50px" },
    },
    { field: "parent_name", header: "Parent Name" },
    { field: "student_name", header: "Student Name" },
    { field: "parent_email_address", header: "Parent Email Address" },
    { field: "mobile", header: "Mobile Number" },
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
      <div className="p-4 py-6 sm:ml-64 dark:bg-gray-700 min-h-screen">
        <div className="p-2 border-2 border-gray-200 rounded-lg dark:border-white mt-14">
          <h3 className="text-xl lg:text-2xl font-semibold text-center text-gray-900 dark:text-white py-5">
            View Admission Enquiries
          </h3>
          <BasicTable
            data={admission}
            refetch={refetch}
            apiURL={apiURL}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
};
