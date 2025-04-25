import React from "react";
import { AdminLayout } from "../../components/AdminLayout";
import { useFetchData } from "../../../hooks/useFetchData";
import { CrudTable } from "../../components/CrudTable";

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
          Applicant Information
        </div>
      ),
    },
    { field: "user.name", header: "Student Name" },
    { field: "user.email", header: "Student Email " },
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
      field: "personal_details.permanent_education_number",
      header: "Permanent Education Number (PEN)",
    },
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
    {
      field: "personal_details.image",
      header: "Student Image",
      body: (rowData) => (
        <a
          href={`${rowData.personal_details.image}`}
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
      field: "educational_background.transfer_certificate",
      header: "Transfer Certificate",
    },
    {
      field: "educational_background.transfer_certificate_date",
      header: "Transfer Certificate Date",
    },
    {
      field: "educational_background.image",
      header: "Transfer Certificate Image",
      body: (rowData) => (
        <a
          href={
            rowData.educational_background.image
              ? `${rowData.educational_background.image}`
              : ""
          }
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
        header: `Parent-${parentIndex + 1} Education`,
        body: (rowData) =>
          rowData.parents_information[parentIndex]?.education || "-",
      },
      {
        header: `Parent-${parentIndex + 1} Adhaar No.`,
        body: (rowData) =>
          rowData.parents_information[parentIndex]?.adhaar_number || "-",
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
        header: `Parent-${parentIndex + 1} Image`,
        body: (rowData) => (
          <a
            href={`${rowData.parents_information[parentIndex]?.image}`}
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
    // Transport Area
    {
      field: "transport_area",
      header: "Transport Area",
    },
    // Declaration
    {
      field: "declaration",
      header: "Declaration",
      body: (rowData) => (rowData.declaration ? "Yes" : "No"),
    },
    // Fees paid
    {
      field: "feesPaid",
      header: "Fees Paid",
      body: (rowData) => (rowData.feesPaid ? "Yes" : "No"),
    },
    // Status
    {
      field: "status",
      header: "Status",
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
    {
      name: "status",
      label:
        "Status of Application (Only write pending, under review or approved)",
      required: true,
      type: "text",
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
          <CrudTable
            fields={fields}
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
