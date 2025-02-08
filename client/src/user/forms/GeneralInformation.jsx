import React, { useEffect, useState } from "react";
import { UserLayout } from "../components/UserLayout";
import { useForm } from "./FormContext";
import axios from "axios";
import Cookies from "js-cookie";

export const GeneralInformation = ({ onNext }) => {
  const { formData, handleChange } = useForm();
  const [errors, setErrors] = useState({});

  // Validate form data
  const validateForm = () => {
    let newErrors = {};
    const { grade, applied_before, applied_year, applied_grade } =
      formData.general_information;

    if (!grade) newErrors.grade = "Grade is required";
    if (applied_before) {
      if (!applied_year) newErrors.applied_year = "Academic year is required";
      if (!applied_grade)
        newErrors.applied_grade = "Applied grade/class is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
        onNext();
    }
  };

  // List of grades/classes
  const grades = [
    "Nursery",
    "LKG",
    "UKG",
    "Class I",
    "Class II",
    "Class III",
    "Class IV",
    "Class V",
    "Class VI",
    "Class VII",
    "Class VIII",
    "Class IX",
    "Class X",
    "Class XI",
    "Class XII",
  ];

  const fetchDetails = async () => {
    const user = Cookies.get("userId");
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/v1/admission-application/get-admission-form/1`,
      { user }
    );

    if (response?.data?.success) {
      const admissionData = response.data.admission.general_information;

      const fieldsToUpdate = [
        "grade",
        "applied_before",
        "applied_year",
        "applied_grade",
      ];

      fieldsToUpdate.forEach((field) => {
        if (admissionData[field]) {
          handleChange("general_information", field, admissionData[field]);
        }
      });
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <UserLayout />
      <div className="p-4 lg:p-6 sm:ml-64 dark:bg-gray-700 min-h-screen">
        <div className="flex-grow flex items-center justify-center ">
          <div className="w-full max-w-4xl sm:max-w-2xl lg:max-w-3xl bg-white rounded-lg shadow-md p-6 sm:px-4 md:px-6">
            <h2 className="text-2xl lg:text-3xl font-semibold text-center text-gray-800 mb-8">
              General Information
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Grade/Class Dropdown */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  We are considering enrollment in Grade/Class{" "}
                  <span className="text-red-500 text-2xl">*</span>
                </label>
                <select
                  name="grade"
                  value={formData.general_information.grade}
                  onChange={(e) =>
                    handleChange("general_information", "grade", e.target.value)
                  }
                  className={`w-full p-3 border ${
                    errors.grade ? "border-red-500" : "border-gray-300"
                  } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                >
                  <option value="">Select Grade/Class</option>
                  {grades.map((grade, index) => (
                    <option key={index} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
                {errors.grade && (
                  <p className="text-red-500 text-sm mt-2">{errors.grade}</p>
                )}
              </div>

              {/* Applied Before Checkbox */}
              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  name="applied_before"
                  checked={formData.general_information.applied_before}
                  onChange={(e) =>
                    handleChange(
                      "general_information",
                      "applied_before",
                      e.target.checked
                    )
                  }
                  className="mr-3 h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="text-sm text-gray-700">
                  Have you ever applied for admission at G.D. Goenka Schools?
                </label>
              </div>

              {/* Conditional Inputs for Previous Application */}
              {formData.general_information.applied_before && (
                <div className="space-y-6">
                  {/* Academic Year Input */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Academic year
                      <span className="text-red-500 text-2xl">*</span>
                    </label>
                    <input
                      type="number"
                      name="applied_year"
                      value={formData.general_information.applied_year}
                      onChange={(e) =>
                        handleChange(
                          "general_information",
                          "applied_year",
                          e.target.value
                        )
                      }
                      className={`w-full p-3 border ${
                        errors.applied_year
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="Enter academic year"
                    />
                    {errors.applied_year && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.applied_year}
                      </p>
                    )}
                  </div>

                  {/* Applied Grade/Class Input */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Which class
                      <span className="text-red-500 text-2xl">*</span>
                    </label>
                    <input
                      type="number"
                      name="applied_grade"
                      value={formData.general_information.applied_grade}
                      onChange={(e) =>
                        handleChange(
                          "general_information",
                          "applied_grade",
                          e.target.value
                        )
                      }
                      className={`w-full p-3 border ${
                        errors.applied_grade
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="Enter applied grade/class"
                    />
                    {errors.applied_grade && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.applied_grade}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 lg:py-3 lg:px-8 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
