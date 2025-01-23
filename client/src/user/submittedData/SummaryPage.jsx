import React, { useState } from "react";
import { useForm } from "../forms/FormContext";
import { useNavigate } from "react-router-dom";
import { UserLayout } from "../components/UserLayout";
import axios from "axios";

export const SummaryPage = () => {
  const { formData } = useForm();
  const navigate = useNavigate();
  const [FormData, setFormData] = useState({
    txnid: "",
    amount: "",
    name:  formData.personal_details.first_name + ' ' + formData.personal_details.last_name,
    email: formData.personal_details.email,
    phone: formData.personal_details.mobile,
    productinfo: formData.general_information.grade ,
    udf1: "",
    udf2: "",
    udf3: "",
    udf4: "",
    udf5: "",
    udf6: "",
    udf7: "",
    udf8: "",
    udf9: "",
    udf10: "",
    surl: `${process.env.REACT_APP_BASE_URL}/api/v1/payment/response`,
    furl: `${process.env.REACT_APP_BASE_URL}/api/v1/payment/response`,
  });

  const handleGoToPayment = async () => {
    const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/payment/initiate_payment`;
    try {
      const response = await axios.post(apiURL, FormData);
      console.log(response)

      if (response?.data?.url) {
        window.location.href = response.data.url;
      } else {
        navigate("/payment-failure");
      }
    } catch (error) {
      console.error("Payment initiation failed:", error);
      navigate("/payment-failure");
    }
  };

  const handleGoBack = () => {
    navigate("/user/transport-facility"); 
  };

  return (
    <>
      <UserLayout />
      <div className="p-4 py-6 lg:p-6 sm:ml-64 dark:bg-gray-800 min-h-screen">
        <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white mt-14 bg-white dark:bg-gray-700 shadow-lg">
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
                {formData.general_information?.grade || "N/A"}
              </p>
              <p className="dark:text-white text-lg text-blue-600">
                <strong>Applied Before:</strong>{" "}
                {formData.general_information?.applied_before ? "YES" : "NO"}
              </p>
              {formData.general_information?.applied_before && (
                <>
                  <p className="dark:text-white">
                    <strong>Academic Year:</strong>{" "}
                    {formData.general_information?.applied_year || "N/A"}
                  </p>
                  <p className="dark:text-white">
                    <strong>Class:</strong>{" "}
                    {formData.general_information?.applied_grade || "N/A"}
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Personal Details */}
          <div className="mb-8 bg-gray-50 dark:bg-gray-600 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold dark:text-white mb-4 border-b pb-2">
              Personal Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="dark:text-white">
                <strong>First Name:</strong>{" "}
                {formData.personal_details?.first_name || "N/A"}
              </p>
              <p className="dark:text-white">
                <strong>Middle Name:</strong>{" "}
                {formData.personal_details?.middle_name || "N/A"}
              </p>
              <p className="dark:text-white">
                <strong>Last Name:</strong>{" "}
                {formData.personal_details?.last_name || "N/A"}
              </p>
              <p className="dark:text-white">
                <strong>Date of Birth:</strong>{" "}
                {formData.personal_details?.dob || "N/A"}
              </p>
              <p className="dark:text-white">
                <strong>Nationality:</strong>{" "}
                {formData.personal_details?.nationality || "N/A"}
              </p>
              <p className="dark:text-white">
                <strong>Gender:</strong>{" "}
                {formData.personal_details?.gender || "N/A"}
              </p>
              <p className="dark:text-white">
                <strong>Address:</strong>{" "}
                {formData.personal_details?.address || "N/A"}
              </p>
              <p className="dark:text-white">
                <strong>City:</strong>{" "}
                {formData.personal_details?.city || "N/A"}
              </p>
              <p className="dark:text-white">
                <strong>Pincode:</strong>{" "}
                {formData.personal_details?.pincode || "N/A"}
              </p>
              <p className="dark:text-white">
                <strong>Email:</strong>{" "}
                {formData.personal_details?.email || "N/A"}
              </p>
              <p className="dark:text-white">
                <strong>Mobile:</strong>{" "}
                {formData.personal_details?.mobile || "N/A"}
              </p>
              <p className="dark:text-white">
                <strong>Emergency Number:</strong>{" "}
                {formData.personal_details?.emergency_mobile || "N/A"}
              </p>
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
                {formData.health_information?.allergy || "N/A"}
              </p>
              <p className="dark:text-white">
                <strong>Physical Handicap:</strong>{" "}
                {formData.health_information?.physical_handicap || "N/A"}
              </p>
              <p className="dark:text-white">
                <strong>Other Health Problems:</strong>{" "}
                {formData.health_information?.other || "N/A"}
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
                {formData.educational_background?.attended_school
                  ? "YES"
                  : "NO"}
              </p>
              {formData.educational_background?.attended_school && (
                <>
                  <p className="dark:text-white">
                    <strong>Last School Name:</strong>{" "}
                    {formData.educational_background?.previous_school || "N/A"}
                  </p>
                  <p className="dark:text-white">
                    <strong>City:</strong>{" "}
                    {formData.educational_background?.city || "N/A"}
                  </p>
                  <p className="dark:text-white">
                    <strong>From Grade:</strong>{" "}
                    {formData.educational_background?.from_grade || "N/A"}
                  </p>
                  <p className="dark:text-white">
                    <strong>To Grade:</strong>{" "}
                    {formData.educational_background?.to_grade || "N/A"}
                  </p>
                </>
              )}
              <p className="dark:text-white text-lg text-blue-600 ">
                <strong>Expelled/Restricted:</strong>{" "}
                {formData.educational_background?.expelled ? "YES" : "NO"}
              </p>
              {formData.educational_background?.expelled && (
                <p className="dark:text-white">
                  <strong>Details of Expulsion:</strong>{" "}
                  {formData.educational_background?.expelled_reason || "N/A"}
                </p>
              )}
            </div>
          </div>

          {/* Parents Information */}
          <div className="mb-8 bg-gray-50 dark:bg-gray-600 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold dark:text-white mb-4 border-b pb-2">
              Parents Information
            </h3>
            {formData.parents_information &&
            formData.parents_information.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formData.parents_information.map((parent, index) => (
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
                        <strong>Nationality:</strong>{" "}
                        {parent.nationality || "N/A"}
                      </p>
                      <p className="dark:text-white">
                        <strong>Education:</strong> {parent.education || "N/A"}
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
                        <strong>Email:</strong> {parent.email || "N/A"}
                      </p>
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
            {formData.other_relatives && formData.other_relatives.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formData.other_relatives.map((relative, index) => (
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
              {formData.transport_facility ? "Yes" : "No"}
            </p>
          </div>

          {/* Declaration */}
          <div className="mb-8 bg-gray-50 dark:bg-gray-600 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold dark:text-white mb-4 border-b pb-2">
              Declaration
            </h3>
            <p className="dark:text-white">
              <strong>Agreed to Terms:</strong>{" "}
              {formData.declaration ? "Yes" : "No"}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handleGoBack}
              className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
            >
              Back
            </button>
            <button
              onClick={handleGoToPayment}
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
            >
              Go to Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
