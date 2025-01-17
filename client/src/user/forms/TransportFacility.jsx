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

    // Validate the form
    const newErrors = {};
    if (
      formData.transport_facility === null ||
      formData.transport_facility === undefined
    ) {
      newErrors.transport_facility =
        "Please select an option for transport facility";
    }
    if (!formData.declaration) {
      newErrors.declaration = "You must agree to the declaration";
    }

    setErrors(newErrors);

    // If no errors, proceed to the next step
    if (Object.keys(newErrors).length === 0) {
      console.log(
        "Transport Facility and Declaration Form Submitted Successfully!",
        formData
      );

      console.log("Transport facility : " ,formData.transport_facility);
      console.log("Declaration : " ,formData.declaration);


      // Ensure all fields are defined before submission
      const allFormData = {
        general_information: formData.general_information || {},
        personal_details: formData.personal_details || {},
        health_information: formData.health_information || {},
        educational_background: formData.educational_background || {},
        parents_information: formData.parents_information || {},
        other_relatives: formData.other_relatives || [], // Ensure this is an array
        transport_facility: formData.transport_facility,
        declaration: formData.declaration,
      };

      console.log("All form data submitted", allFormData);

      try {
        const admissionApplicationResponse = await apiUrl.postRequest(
          allFormData
        );

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
    }
  };

  return (
    <>
      <UserLayout />
      <div className="lg:p-6 sm:ml-64 dark:bg-gray-800 min-h-screen">
        <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white mt-14 bg-white dark:bg-gray-700 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">Transport Facility and Declaration</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Transport Facility (Radio Buttons mapped to Boolean) */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Do you require bus facility?
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center dark:text-white">
                  <input
                    type="radio"
                    name="transport_facility"
                    value={true} // Set value as boolean true
                    onChange={() => handleChange(null, "transport_facility", true)} // Update directly
                    className="mr-2 dark:text-white"
                  />
                  Yes
                </label>
                <label className="flex items-center dark:text-white">
                  <input
                    type="radio"
                    name="transport_facility"
                    value={false} // Set value as boolean false
                    
                    onChange={() => handleChange(null, "transport_facility", false)} // Update directly
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

            {/* Declaration */}
            <div className="space-y-4">
              <label className="flex items-center dark:text-white">
                <input
                  type="checkbox"
                  name="declaration"
                  onChange={(e) => handleChange("declaration", e.target.checked)} // Update directly
                  className="mr-2 dark:text-white"
                />
                I agree to the terms and conditions.
              </label>
              {errors.declaration && (
                <span className="text-red-500 text-sm">
                  {errors.declaration}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};