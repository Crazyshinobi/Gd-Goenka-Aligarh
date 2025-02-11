import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserLayout } from "../components/UserLayout";
import axios from "axios";
import Cookies from "js-cookie";

export const SummaryPage = ({ onBack }) => {
  const navigate = useNavigate();
  const [admission, setAdmission] = useState({});

  const handleAdmissionForm = async () => {
    if (admission.formCompleted) {
      navigate("/user/payment-summary");
    } else {
      alert("Complete the form");
    }
  };

  const fetchDetails = async () => {
    const user = Cookies.get("userId");
    if (!user) {
      alert("User is not logged in.");
      return;
    }

    try {
      const apiUrl = `${process.env.REACT_APP_BASE_URL}/api/v1/admission-application/get-admission-form/7`;

      const response = await axios.post(apiUrl, { user });

      if (response?.data?.success) {
        const fetchedAdmission = response.data.admission;
        setAdmission(fetchedAdmission);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error fetching admission details:", error);
      alert("There was an issue fetching the admission details.");
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <UserLayout />
      <div className="p-4  lg:p-6 sm:ml-64 dark:bg-gray-800 min-h-screen">
        <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white  bg-white dark:bg-gray-700 shadow-lg">
          <h2 className="text-xl lg:text-2xl font-bold mb-8 text-center dark:text-white">
            Please Verify the Details Below
          </h2>

          {/* General Information */}
          <div className="mb-8 bg-gray-50 dark:bg-gray-600 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold dark:text-white mb-4 border-b pb-2">
              General Information
            </h3>
            <div className="space-y-3">
              <p className="dark:text-white">
                <strong>Grade:</strong>{" "}
                {admission.general_information?.grade || "N/A"}
              </p>
              <p className="dark:text-white text-lg text-blue-600">
                <strong>Applied Before:</strong>{" "}
                {admission.general_information?.applied_before ? "YES" : "NO"}
              </p>
              {admission.general_information?.applied_before && (
                <>
                  <p className="dark:text-white">
                    <strong>Academic Year:</strong>{" "}
                    {admission.general_information?.applied_year || "N/A"}
                  </p>
                  <p className="dark:text-white">
                    <strong>Class:</strong>{" "}
                    {admission.general_information?.applied_grade || "N/A"}
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Student Details */}
          <div className="lg:flex mb-8 bg-gray-50 dark:bg-gray-600 p-6 rounded-lg shadow-sm">
            <div className="basis-[30%]">
              <h3 className="text-xl font-semibold dark:text-white mb-4 border-b pb-2">
                Student's Image
              </h3>
              <div className="mb-3">
                <img
                  src={`${admission?.personal_details?.image}`}
                  className="h-[200px] w-[200px] object-cover"
                  alt="Student Image"
                />
              </div>
            </div>
            <div className="basis-[70%]">
              <h3 className="text-xl font-semibold dark:text-white mb-4 border-b pb-2">
                Student Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p className="dark:text-white">
                  <strong>First Name:</strong>{" "}
                  {admission.personal_details?.first_name || "N/A"}
                </p>
                <p className="dark:text-white">
                  <strong>Middle Name:</strong>{" "}
                  {admission.personal_details?.middle_name || "N/A"}
                </p>
                <p className="dark:text-white">
                  <strong>Last Name:</strong>{" "}
                  {admission.personal_details?.last_name || "N/A"}
                </p>
                <p className="dark:text-white">
                  <strong>Date of Birth:</strong>{" "}
                  {(admission.personal_details?.dob &&
                    new Date(admission.personal_details?.dob)
                      .toISOString()
                      .split("T")[0]) ||
                    "N/A"}
                </p>
                <p className="dark:text-white">
                  <strong>Nationality:</strong>{" "}
                  {admission.personal_details?.nationality || "N/A"}
                </p>
                <p className="dark:text-white">
                  <strong>Gender:</strong>{" "}
                  {admission.personal_details?.gender || "N/A"}
                </p>
                <p className="dark:text-white">
                  <strong>Address:</strong>{" "}
                  {admission.personal_details?.address || "N/A"}
                </p>
                <p className="dark:text-white">
                  <strong>City:</strong>{" "}
                  {admission.personal_details?.city || "N/A"}
                </p>
                <p className="dark:text-white">
                  <strong>Pincode:</strong>{" "}
                  {admission.personal_details?.pincode || "N/A"}
                </p>
                <p className="dark:text-white">
                  <strong>Email:</strong>{" "}
                  {admission.personal_details?.email || "N/A"}
                </p>
                <p className="dark:text-white">
                  <strong>Mobile:</strong>{" "}
                  {admission.personal_details?.mobile || "N/A"}
                </p>
                <p className="dark:text-white">
                  <strong>Emergency Number:</strong>{" "}
                  {admission.personal_details?.emergency_mobile || "N/A"}
                </p>
                <p className="dark:text-white">
                  <strong>Permanent Education Number (PEN):</strong>{" "}
                  {admission.personal_details?.permanent_education_number ||
                    "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Health Information */}
          <div className="mb-8 bg-gray-50 dark:bg-gray-600 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold dark:text-white mb-4 border-b pb-2">
              Health Information
            </h3>
            <div className="space-y-3">
              <p className="dark:text-white">
                <strong>Allergies:</strong>{" "}
                {admission.health_information?.allergy || "N/A"}
              </p>
              <p className="dark:text-white">
                <strong>Physical Handicap:</strong>{" "}
                {admission.health_information?.physical_handicap || "N/A"}
              </p>
              <p className="dark:text-white">
                <strong>Other Health Problems:</strong>{" "}
                {admission.health_information?.other || "N/A"}
              </p>
            </div>
          </div>

          {/* Educational Background */}
          <div className="mb-8 bg-gray-50 dark:bg-gray-600 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold dark:text-white mb-4 border-b pb-2">
              Educational Background
            </h3>
            <div className="space-y-3">
              <p className="dark:text-white">
                <strong>Last School Attended:</strong>{" "}
                {admission.educational_background?.attended_school
                  ? "YES"
                  : "NO"}
              </p>
              {admission.educational_background?.attended_school && (
                <>
                  <p className="dark:text-white">
                    <strong>Last School Name:</strong>{" "}
                    {admission.educational_background?.previous_school || "N/A"}
                  </p>
                  <p className="dark:text-white">
                    <strong>City:</strong>{" "}
                    {admission.educational_background?.city || "N/A"}
                  </p>
                  <p className="dark:text-white">
                    <strong>From Grade:</strong>{" "}
                    {admission.educational_background?.from_grade || "N/A"}
                  </p>
                  <p className="dark:text-white">
                    <strong>To Grade:</strong>{" "}
                    {admission.educational_background?.to_grade || "N/A"}
                  </p>
                </>
              )}
              {admission.educational_background?.transfer_certificate ? (
                <>
                  <p className="dark:text-white">
                    <strong>Do you have Transfer Certificate?:</strong>{" "}
                    {admission.educational_background?.transfer_certificate
                      ? "Yes"
                      : "No" || "N/A"}
                  </p>
                  <p className="dark:text-white">
                    <strong>Transfer Certificate:</strong>
                  </p>
                  <img
                    src={`${admission?.educational_background?.image}`}
                    className="h-[150px] w-[200px]"
                    alt="Transfer Certficate"
                  />
                </>
              ) : (
                <>
                  <p className="dark:text-white">
                    <strong>Transfer Certificate:</strong>{" "}
                    {admission.educational_background?.transfer_certificate
                      ? "Yes"
                      : "No" || "N/A"}
                  </p>
                  <p className="dark:text-white">
                    <strong>Transfer Certificate Date:</strong>{" "}
                    {admission.educational_background
                      ?.transfer_certificate_date || "N/A"}
                  </p>
                </>
              )}
              <p className="dark:text-white text-lg text-blue-600 ">
                <strong>Expelled/Restricted:</strong>{" "}
                {admission.educational_background?.expelled ? "YES" : "NO"}
              </p>
              {admission.educational_background?.expelled && (
                <p className="dark:text-white">
                  <strong>Details of Expulsion:</strong>{" "}
                  {admission.educational_background?.expelled_reason || "N/A"}
                </p>
              )}
            </div>
          </div>

          {/* Parents Information */}
          <div className="mb-8 bg-gray-50 dark:bg-gray-600 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold dark:text-white mb-4 border-b pb-2">
              Parents Information
            </h3>
            {admission.parents_information &&
            admission.parents_information.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {admission.parents_information.map((parent, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm"
                  >
                    <p className="dark:text-white font-semibold mb-2">
                      Parent {index + 1}
                    </p>
                    <div className="space-y-2">
                      <p className="dark:text-white">
                        <strong>Relation:</strong> {parent.parent_type || "N/A"}
                      </p>
                      <p className="dark:text-white">
                        <strong>Name:</strong> {parent.name || "N/A"}
                      </p>
                      <p className="dark:text-white">
                        <strong>Age:</strong> {parent.age || "N/A"}
                      </p>
                      <p className="dark:text-white">
                        <strong>Education:</strong> {parent.education || "N/A"}
                      </p>
                      <p className="dark:text-white">
                        <strong>Adhaar Number:</strong>{" "}
                        {parent.adhaar_number || "N/A"}
                      </p>
                      <p className="dark:text-white">
                        <strong>Profession:</strong>{" "}
                        {parent.profession || "N/A"}
                      </p>
                      <p className="dark:text-white">
                        <strong>Income:</strong> {parent.income || "N/A"}
                      </p>
                      <p className="dark:text-white">
                        <strong>Office Address:</strong>{" "}
                        {parent.office_address || "N/A"}
                      </p>
                      <p className="dark:text-white">
                        <strong>Parent's Image:</strong>{" "}
                      </p>
                      <img
                        src={`${parent.image}`}
                        alt="Parent Image"
                        className="h-[150px] w-[150px]"
                      />
                      {parent.parent_type === "guardian" && (
                        <p className="dark:text-white">
                          <strong>Relationship with Child:</strong>{" "}
                          {parent.relationship_with_child || "N/A"}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="dark:text-white">No parent information provided.</p>
            )}
          </div>

          {/* Other Relatives */}
          <div className="mb-8 bg-gray-50 dark:bg-gray-600 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold dark:text-white mb-4 border-b pb-2">
              Other Relatives
            </h3>
            {admission.other_relatives &&
            admission.other_relatives.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {admission.other_relatives.map((relative, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm"
                  >
                    <p className="dark:text-white font-semibold mb-2">
                      Relative {index + 1}
                    </p>
                    <div className="space-y-2">
                      <p className="dark:text-white">
                        <strong>Name:</strong> {relative.name || "N/A"}
                      </p>
                      <p className="dark:text-white">
                        <strong>Relationship:</strong>{" "}
                        {relative.relation || "N/A"}
                      </p>
                      <p className="dark:text-white">
                        <strong>Age:</strong> {relative.age || "N/A"}
                      </p>
                      <p className="dark:text-white">
                        <strong>School:</strong> {relative.school || "N/A"}
                      </p>
                      <p className="dark:text-white">
                        <strong>Grade:</strong> {relative.grade || "N/A"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="dark:text-white">
                No relatives information provided.
              </p>
            )}
          </div>

          {/* Transport Facility */}
          <div className="mb-8 bg-gray-50 dark:bg-gray-600 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold dark:text-white mb-4 border-b pb-2">
              Transport Facility
            </h3>
            <p className="dark:text-white">
              <strong>Requires Bus Facility:</strong>{" "}
              {admission.transport_facility ? "Yes" : "No"}
            </p>
          </div>

          {/* Transport Area */}
          <div className="mb-8 bg-gray-50 dark:bg-gray-600 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold dark:text-white mb-4 border-b pb-2">
              Transport Area
            </h3>
            <p className="dark:text-white">
              <strong>Selected Bus Stop:</strong>{" "}
              {admission.transport_area || "N/A"}
            </p>
          </div>

          {/* Declaration */}
          <div className="mb-8 bg-gray-50 dark:bg-gray-600 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold dark:text-white mb-4 border-b pb-2">
              Declaration
            </h3>
            <p className="dark:text-white">
              <strong>Agreed to Terms:</strong>{" "}
              {admission.declaration ? "Yes" : "No"}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={onBack}
              className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
            >
              Back
            </button>
            <Link
              onClick={handleAdmissionForm}
              to={"/user/payment-summary"}
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
            >
              Go to Payment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
