import React from "react";
import { AdminLayout } from "../../components/AdminLayout";
import { useFetchData } from "../../../hooks/useFetchData";
import { CrudTable } from "../../components/CrudTable";

export const ViewFaculty = () => {
  document.title = "Admin - View Faculty";
  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/faculty/`;
  const { data, loading, error, refetch } = useFetchData(apiURL);
  const gallery = data?.data || [];

  const columns = [
    {
      header: "S.No",
      body: (rowData, { rowIndex }) => rowIndex + 1,
    },
    { field: "name", header: "Faculty Name" },
    {
      field: "image",
      header: "Image",
      body: (rowData) => (
        <img
          src={`${rowData.image}`}
          alt={rowData.image}
          className="w-[200px] h-[100px] shadow-2 rounded-lg"
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

  const fields = [
    { name: "name", label: "Faculty Name", type: "text" },
    { name: "image", label: "  Upload 1 file (JPEG, PNG, JPG or WEBP - MAX. 5 MB)", type: "file" },
  ];
  return (
    <>
      <AdminLayout />
      <div className="p-4 py-6 sm:ml-64 dark:bg-gray-700 min-h-screen">
        <div className="p-2 border-2 border-gray-200 rounded-lg dark:border-white mt-14">
          <h3 className="text-xl lg:text-2xl font-semibold text-center text-gray-900 dark:text-white py-5">
            View Faculty
          </h3>
          <CrudTable
            fields={fields}
            data={gallery}
            refetch={refetch}
            apiURL={apiURL}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
};
