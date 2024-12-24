import React from "react";
import { AdminLayout } from "../../components/AdminLayout";
import { CrudTable } from "../../components/CrudTable";
import { useFetchData } from "../../../hooks/useFetchData";

export const ViewContent = () => {
  document.title = "Admin - View Content";
  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/content/`;
  const { data, loading, error, refetch } = useFetchData(apiURL);
  const content = data?.data || [];
  const columns = [
    {
      header: "S.No",
      body: (rowData, { rowIndex }) => rowIndex + 1,
    },
    { field: "type", header: "Content Type" },
    {
      field: "title",
      header: "Title",
    },
    {
      field: "description",
      header: "Description",
      body: (rowData) => rowData.description.slice(0,50) + "..."
    },
    {
      field: "images",
      header: "Images",
      body: (rowData) => {
        return (
          <div className="flex items-center gap-3">
            {rowData.images &&
              rowData.images.map((image, index) => (
                <img
                  key={index}
                  src={`${process.env.REACT_APP_BASE_URL}/${image}`}
                  alt={`Image ${index}`}
                  className="w-[200px] h-[100px] shadow-2 rounded-lg"
                />
              ))}
          </div>
        );
      },
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
    { name: "type", label: "Content Type (Only - club, blog, assembly, event, news)", type: "text", required: true },
    { name: "title", label: "Title", type: "text", required: true },
    {
      name: "description",
      label: "Description",
      type: "text",
      required: true,
    },
    {
      name: "images",
      label: "Upload Images (JPEG, PNG, JPG or WEBP - MAX. 5 MB)",
      type: "file-multiple",
      required: false,
    },
  ];

  return (
    <>
      <AdminLayout />
      <div className="p-4 py-6 sm:ml-64 dark:bg-gray-700 min-h-screen">
        <div className="p-2 border-2 border-gray-200 rounded-lg dark:border-white mt-14">
          <h3 className="text-xl lg:text-2xl font-semibold text-center text-gray-900 dark:text-white py-5">
            View Content
          </h3>
          <CrudTable
            fields={fields}
            data={content}
            refetch={refetch}
            apiURL={apiURL}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
};
