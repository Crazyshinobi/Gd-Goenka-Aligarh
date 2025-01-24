import React, { useState } from "react";
import { UserLayout } from "../components/UserLayout";
import { useForm } from "./FormContext";
import { useNavigate } from "react-router-dom";
import { usePostRequest } from "../../hooks/usePostRequest";

export const TransportFacility = () => {
  const { formData, handleChange } = useForm();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const apiUrl = usePostRequest(
    `${process.env.REACT_APP_BASE_URL}/api/v1/admission-application/`
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data Before Submission: ", formData); // Debug log before submit

    const newErrors = {};

    if (formData.transport_facility === null || formData.transport_facility === undefined) {
      newErrors.transport_facility = "Please select an option for transport facility";
    }

    if (!formData.declaration) {
      newErrors.declaration = "You must agree to the declaration";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Transport Facility and Declaration Form Submitted Successfully!", formData);
      navigate("/user/summary");

      // Uncomment the following code if you want to submit the form data to an API
      /*
      const allFormData = {
        general_information: formData.general_information || {},
        personal_details: formData.personal_details || {},
        health_information: formData.health_information || {},
        educational_background: formData.educational_background || {},
        parents_information: formData.parents_information || [],
        other_relatives: formData.other_relatives || [],
        transport_facility: formData.transport_facility,
        declaration: formData.declaration,
      };

      try {
        const admissionApplicationResponse = await apiUrl.postRequest(allFormData);

        if (admissionApplicationResponse?.success) {
          console.log("Application submitted successfully! Thank You!");
          navigate("/user/success");
        }
      } catch (error) {
        console.log("Error Submitting the Form", error);
        setErrors({
          form: "There was an error submitting the form. Please try again!",
        });
      }
      */
    }
  };

  const handleGoBack = () => {
    navigate("/user/other-relatives"); // Navigate to the previous page
  };

  return (
    <>
      <UserLayout />
      <div className="lg:p-6 sm:ml-64 dark:bg-gray-800 min-h-screen">
        <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white mt-14 bg-white dark:bg-gray-700 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">
            Transport Facility and Declaration
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Do you require bus facility?<span className="text-red-500 text-2xl">*</span>
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center dark:text-white">
                  <input
                    type="radio"
                    name="transport_facility"
                    value={true}
                    onChange={() => handleChange("transport_facility", "transport_facility", true)}
                    className="mr-2 dark:text-white"
                  />
                  Yes
                </label>
                <label className="flex items-center dark:text-white">
                  <input
                    type="radio"
                    name="transport_facility"
                    value={false}
                    onChange={() => handleChange("transport_facility", "transport_facility", false)}
                    className="mr-2 dark:text-white"
                  />
                  No
                </label>
              </div>
              {errors.transport_facility && (
                <span className="text-red-500 text-sm">
                  {errors.transport_facility}
                </span>
              )}
            </div>

            <div className="space-y-4">
              <label className="flex items-center dark:text-white">
                <input
                  type="checkbox"
                  name="declaration"
                  checked={formData.declaration}
                  onChange={(e) => handleChange("declaration", "declaration", e.target.checked)}
                  className="mr-2 dark:text-white"
                />
                I agree to the terms and conditions.<span className="text-red-500 text-2xl">*</span>
              </label>
              {errors.declaration && (
                <span className="text-red-500 text-sm">
                  {errors.declaration}
                </span>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={handleGoBack}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Go Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};