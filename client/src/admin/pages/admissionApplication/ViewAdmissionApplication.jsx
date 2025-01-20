import React from "react";
import { AdminLayout } from "../../components/AdminLayout";
import { useFetchData } from "../../../hooks/useFetchData";
import { BasicTable } from "../../components/BasicTable";

export const ViewAdmissionApplication = () => {
  document.title = "Admin - View Admission Application";
  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/admission-application/`;
  const { data, loading, error, refetch } = useFetchData(apiURL);
  const admissionApplication = data?.data || [];
  const maxParents = Math.max(
    ...admissionApplication.map((row) => row.parents_information?.length || 0)
  );
  const maxRelatives = Math.max(
    ...admissionApplication.map((row) => row.other_relatives?.length || 0)
  );
  const columns = [
    {
      header: "S.No",
      body: (rowData, { rowIndex }) => rowIndex + 1,
      style: { width: "50px" },
    },
     // User Information
     {
      // header: "General Information",
      separator: true,
      body: (rowData) => (
        <div className="rounded-lg font-bold bg-[#f9f9f9] text-[#555] px-3 py-2">
          User Information
        </div>
      ),
    },
    { field: "user.name", header: "User Name" },
    { field: "user.email", header: "User Email Address" },
    // General Information
    {
      // header: "General Information",
      separator: true,
      body: (rowData) => (
        <div className="rounded-lg font-bold bg-[#f9f9f9] text-[#555] px-3 py-2">
          General Information
        </div>
      ),
    },
    { field: "general_information.grade", header: "Grade" },
    {
      field: "general_information.applied_before",
      header: "Applied Before",
      body: (rowData) =>
        rowData.general_information.applied_before ? "Yes" : "No",
    },
    { field: "general_information.applied_year", header: "Applied Year" },
    { field: "general_information.applied_grade", header: "Applied Grade" },

    // Personal Details
    {
      separator: true,
      body: (rowData) => (
        <div className="rounded-lg font-bold bg-[#f9f9f9] text-[#555] px-3 py-2">
          Personal Details
        </div>
      ),
    },
    { field: "personal_details.first_name", header: "First Name" },
    { field: "personal_details.middle_name", header: "Middle Name" },
    { field: "personal_details.last_name", header: "Last Name" },
    {
      field: "personal_details.dob",
      header: "Date of Birth",
      body: (rowData) =>
        new Date(rowData.personal_details.dob).toLocaleDateString("en-GB"),
    },
    { field: "personal_details.nationality", header: "Nationality" },
    { field: "personal_details.gender", header: "Gender" },
    { field: "personal_details.address", header: "Address" },
    { field: "personal_details.city", header: "City" },
    { field: "personal_details.pincode", header: "Pincode" },
    { field: "personal_details.email", header: "Email" },
    { field: "personal_details.mobile", header: "Mobile" },
    { field: "personal_details.emergency_mobile", header: "Emergency Mobile" },

    // Health Information
    {
      separator: true,
      body: (rowData) => (
        <div className="rounded-lg font-bold bg-[#f9f9f9] text-[#555] px-3 py-2">
          Health Information
        </div>
      ),
    },
    { field: "health_information.allergy", header: "Allergy" },
    {
      field: "health_information.physical_handicap",
      header: "Physical Handicap",
    },
    { field: "health_information.other", header: "Other Allergy/Disease" },

    // Educational Background
    {
      separator: true,
      body: (rowData) => (
        <div className="rounded-lg font-bold bg-[#f9f9f9] text-[#555] px-3 py-2">
          Educational Background
        </div>
      ),
    },
    {
      field: "educational_background.attended_school",
      header: "Attended School",
      body: (rowData) =>
        rowData.educational_background.attended_school ? "Yes" : "No",
    },
    {
      field: "educational_background.previous_school",
      header: "Previous School",
    },
    { field: "educational_background.city", header: "City" },
    { field: "educational_background.from_grade", header: "From Grade" },
    { field: "educational_background.to_grade", header: "To Grade" },
    {
      field: "educational_background.expelled",
      header: "Expelled",
      body: (rowData) =>
        rowData.educational_background.expelled ? "Yes" : "No",
    },
    {
      field: "educational_background.expelled_reason",
      header: "Expelled Reason",
      body: (rowData) =>
        rowData.educational_background.expelled_reason === ""
          ? "N/A"
          : rowData.educational_background.expelled_reason,
    },
    // Parents Information
    {
      separator: true,
      body: (rowData) => (
        <div className="rounded-lg font-bold bg-[#f9f9f9] text-[#555] px-3 py-2">
          Parents Information
        </div>
      ),
    },
    ...Array.from({ length: maxParents }).flatMap((_, parentIndex) => [
      {
        header: `Parent-${parentIndex + 1} Type`,
        body: (rowData) =>
          rowData.parents_information[parentIndex]?.parent_type || "-",
      },
      {
        header: `Parent-${parentIndex + 1} Name`,
        body: (rowData) =>
          rowData.parents_information[parentIndex]?.name || "-",
      },
      {
        header: `Parent-${parentIndex + 1} Age`,
        body: (rowData) => rowData.parents_information[parentIndex]?.age || "-",
      },
      {
        header: `Parent-${parentIndex + 1} Nationality`,
        body: (rowData) =>
          rowData.parents_information[parentIndex]?.nationality || "-",
      },
      {
        header: `Parent-${parentIndex + 1} Education`,
        body: (rowData) =>
          rowData.parents_information[parentIndex]?.education || "-",
      },
      {
        header: `Parent-${parentIndex + 1} Profession`,
        body: (rowData) =>
          rowData.parents_information[parentIndex]?.profession || "-",
      },
      {
        header: `Parent-${parentIndex + 1} Income`,
        body: (rowData) =>
          rowData.parents_information[parentIndex]?.income || "-",
      },
      {
        header: `Parent-${parentIndex + 1} Email`,
        body: (rowData) =>
          rowData.parents_information[parentIndex]?.email || "-",
      },
    ]),
    // Other Relatives
    {
      separator: true,
      body: (rowData) => (
        <div className="rounded-lg font-bold bg-[#f9f9f9] text-[#555] px-3 py-2">
          Other Relatives
        </div>
      ),
    },
    ...Array.from({ length: maxRelatives }).flatMap((_, relativeIndex) => [
      {
        header: `Relative-${relativeIndex + 1} Relation`,
        body: (rowData) =>
          rowData.other_relatives[relativeIndex]?.relation || "-",
      },
      {
        header: `Relative-${relativeIndex + 1} Name`,
        body: (rowData) => rowData.other_relatives[relativeIndex]?.name || "-",
      },
      {
        header: `Relative-${relativeIndex + 1} Age`,
        body: (rowData) => rowData.other_relatives[relativeIndex]?.age || "-",
      },
      {
        header: `Relative-${relativeIndex + 1} School`,
        body: (rowData) =>
          rowData.other_relatives[relativeIndex]?.school || "-",
      },
      {
        header: `Relative-${relativeIndex + 1} Grade`,
        body: (rowData) => rowData.other_relatives[relativeIndex]?.grade || "-",
      },
    ]),
    // Transport Facility
    {
      field: "transport_facility",
      header: "Transport Facility",
      body: (rowData) => (rowData.transport_facility ? "Yes" : "No"),
    },
    // Declaration
    {
      field: "declaration",
      header: "Declaration",
      body: (rowData) => (rowData.declaration ? "Yes" : "No"),
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
            View Admission Applications
          </h3>
          <BasicTable
            data={admissionApplication}
            refetch={refetch}
            apiURL={apiURL}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
};
