import React from "react";
import { AdminLayout } from "../../components/AdminLayout";
import { useFetchData } from "../../../hooks/useFetchData";
import { BasicTable } from "../../components/BasicTable";

export const ViewJobApplication = () => {
  document.title = "Admin - View Job Applications";
  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/job-application/`;
  const { data, loading, error, refetch } = useFetchData(apiURL);
  const jobApplications = data?.data || [];

  const columns = [
    {
      header: "S.No",
      body: (rowData, { rowIndex }) => rowIndex + 1,
      style: { width: "50px" },
    },
    {
      field: "personal_details.name",
      header: "Name",
      body: (rowData) => rowData.personal_details.name,
    },
    {
      field: "personal_details.gender",
      header: "Gender",
      body: (rowData) => rowData.personal_details.gender,
    },
    {
      field: "personal_details.nationality",
      header: "Nationality",
      body: (rowData) => rowData.personal_details.nationality,
    },
    {
      field: "personal_details.father_name",
      header: "Father's Name",
      body: (rowData) => rowData.personal_details.father_name,
    },
    {
      field: "personal_details.occupation",
      header: "Occupation",
      body: (rowData) => rowData.personal_details.occupation,
    },
    {
      field: "personal_details.children",
      header: "Children",
      body: (rowData) => rowData.personal_details.children,
    },
    {
      field: "personal_details.age",
      header: "Age",
      body: (rowData) => rowData.personal_details.age,
    },
    {
      field: "address.house_no",
      header: "House Number",
      body: (rowData) => rowData.address.house_no,
    },
    {
      field: "address.lane",
      header: "Lane",
      body: (rowData) => rowData.address.lane,
    },
    {
      field: "address.street",
      header: "Street",
      body: (rowData) => rowData.address.street,
    },
    {
      field: "address.city",
      header: "City",
      body: (rowData) => rowData.address.city,
    },
    {
      field: "address.country",
      header: "Country",
      body: (rowData) => rowData.address.country,
    },
    {
      field: "address.mobile",
      header: "Mobile",
      body: (rowData) => rowData.address.mobile,
    },
    {
      field: "address.state",
      header: "State",
      body: (rowData) => rowData.address.state,
    },
    {
      field: "address.pincode",
      header: "Pincode",
      body: (rowData) => rowData.address.pincode,
    },
    {
      field: "address.email",
      header: "Email",
      body: (rowData) => rowData.address.email,
    },
    {
      field: "academic_details.degree",
      header: "Degree",
      body: (rowData) => rowData.academic_details.degree,
    },
    {
      field: "academic_details.institute",
      header: "Institute",
      body: (rowData) => rowData.academic_details.institute,
    },
    {
      field: "academic_details.dissertation",
      header: "Dissertation",
      body: (rowData) => rowData.academic_details.dissertation,
    },
    {
      field: "academic_details.advisor",
      header: "Advisor",
      body: (rowData) => rowData.academic_details.advisor,
    },
    {
      field: "academic_details.registration_date",
      header: "Registration Date",
      body: (rowData) =>
        new Date(rowData.academic_details.registration_date).toLocaleDateString(
          "en-GB"
        ),
    },
    {
      field: "academic_details.submission_date",
      header: "Submission Date",
      body: (rowData) =>
        new Date(rowData.academic_details.submission_date).toLocaleDateString(
          "en-GB"
        ),
    },
    {
      field: "educational_qualification.type",
      header: "Degree - (UG/PG)",
      body: (rowData) => rowData.educational_qualification.type,
    },
    {
      field: "educational_qualification.degree",
      header: "Degree Name",
      body: (rowData) => rowData.educational_qualification.degree,
    },
    {
      field: "educational_qualification.institute",
      header: "Institute Name",
      body: (rowData) => rowData.educational_qualification.institute,
    },
    {
      field: "educational_qualification.start_year",
      header: "Start Year",
      body: (rowData) => rowData.educational_qualification.start_year,
    },
    {
      field: "educational_qualification.end_year",
      header: "End Year",
      body: (rowData) => rowData.educational_qualification.end_year,
    },
    {
      field: "educational_qualification.specialization",
      header: "Degree Specialization",
      body: (rowData) => rowData.educational_qualification.specialization,
    },
    {
      field: "educational_qualification.marks",
      header: "Marks",
      body: (rowData) => rowData.educational_qualification.marks,
    },
    {
      field: "educational_qualification.division",
      header: "Division",
      body: (rowData) => rowData.educational_qualification.division,
    },
    {
      field: "educational_qualification.ctet",
      header: "CTET",
      body: (rowData) => rowData.educational_qualification.ctet,
    },
    {
      field: "teaching_experience.institute",
      header: "Experience - Institute",
      body: (rowData) => rowData.teaching_experience.institute,
    },
    {
      field: "teaching_experience.designation",
      header: "Designation",
      body: (rowData) => rowData.teaching_experience.designation,
    },
    {
      field: "teaching_experience.start_date",
      header: "Start Date",
      body: (rowData) =>
        new Date(rowData.teaching_experience.start_date).toLocaleDateString(
          "en-GB"
        ),
    },
    {
      field: "teaching_experience.end_date",
      header: "End Date",
      body: (rowData) =>
        new Date(rowData.teaching_experience.end_date).toLocaleDateString(
          "en-GB"
        ),
    },
    {
      field: "teaching_experience.classes_taught",
      header: "Classes Taught",
      body: (rowData) => rowData.teaching_experience.classes_taught,
    },
    {
      field: "teaching_experience.years",
      header: "Experience (in yrs)",
      body: (rowData) => rowData.teaching_experience.years,
    },
    {
      field: "job.name",
      header: "Applied for Job",
      body: (rowData) => rowData.job.name,
    },
    {
      field: "job.subject",
      header: "Applied for Subject",
      body: (rowData) => rowData.job.subject,
    },
    {
      field: "subject",
      header: "Subject",
      body: (rowData) => rowData.subject,
    },
    {
      field: "experience",
      header: "Experience",
      body: (rowData) => rowData.experience,
    },
    {
      field: "achievement",
      header: "Achievement",
      body: (rowData) => rowData.achievement,
    },
    {
      field: "references.name",
      header: "References - Name",
      body: (rowData) => rowData.references.name,
    },
    {
      field: "references.designation",
      header: "References - Designation",
      body: (rowData) => rowData.references.designation,
    },
    {
      field: "references.address",
      header: "References - Address",
      body: (rowData) => rowData.references.address,
    },
    {
      field: "createdAt",
      header: "Date",
      sortable: true,
      body: (rowData) =>
        new Date(rowData.createdAt).toLocaleDateString("en-GB"),
    },
    {
      field: "image",
      header: "Profile",
      body: (rowData) => (
        <a
          href={`${process.env.REACT_APP_BASE_URL}/${rowData.image}`}
          target="_blank"
        >
          <button
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2"
            target="_blank"
          >
            <div className="flex gap-2 items-center">
              <svg
                class="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                />
                <path
                  stroke="currentColor"
                  stroke-width="2"
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
      field: "resume",
      header: "Resume",
      body: (rowData) => (
        <a
          href={`${process.env.REACT_APP_BASE_URL}/${rowData.resume}`}
          target="_blank"
        >
          <button
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg  text-sm px-3 py-1.5 text-center me-2 mb-2"
            target="_blank"
          >
            <div className="flex gap-2 items-center">
              <svg
                class="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                />
                <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <p>View</p>
            </div>
          </button>
        </a>
      ),
    },
  ];

  return (
    <>
      <AdminLayout />
      <div className="p-4 py-6 sm:ml-64 dark:bg-gray-700 min-h-screen">
        <div className="p-2 border-2 border-gray-200 rounded-lg dark:border-white mt-14">
          <h3 className="text-xl lg:text-2xl font-semibold text-center text-gray-900 dark:text-white py-5">
            View Job Applications
          </h3>
          <BasicTable
            data={jobApplications}
            refetch={refetch}
            apiURL={apiURL}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
};
