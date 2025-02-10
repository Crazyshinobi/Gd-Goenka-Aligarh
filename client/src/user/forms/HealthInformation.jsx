import React, { useEffect } from "react";
import { useForm } from "./FormContext";
import { UserLayout } from "../components/UserLayout";
import axios from "axios";
import Cookies from "js-cookie";

export const HealthInformation = ({ onNext, onBack }) => {
  const { formData, handleChange } = useForm();
  const handleSubmit = async (e) => {
    e.preventDefault();
    onNext();
  };

  const fetchDetails = async () => {
    const user = Cookies.get("userId");
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/v1/admission-application/get-admission-form/3`,
      { user }
    );
    if (response?.data?.success) {
      const admissionData = response.data.admission;
      // Update health information fields
      const healthInfoFields = ["allergy", "physical_handicap", "other"];
      healthInfoFields.forEach((field) => {
        if (admissionData.health_information) {
          if (admissionData.health_information[field]) {
            handleChange(
              "health_information",
              field,
              admissionData.health_information[field]
            );
          }
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
      <div className="p-4 py-6 lg:p-6 sm:ml-64 dark:bg-gray-800 min-h-screen">
        <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white  bg-white dark:bg-gray-700 shadow-lg">
          <h2 className="text-center lg:text-left text-2xl font-bold mb-4">
            Health Information
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Allergy */}
            <div className="mb-4">
              <label className="block mb-2">
                Allergy/Chronic ailment{" "}
                <span className="text-gray-400">(if any)</span>
              </label>
              <input
                type="text"
                name="allergy"
                value={formData.health_information?.allergy}
                onChange={(e) =>
                  handleChange("health_information", "allergy", e.target.value)
                }
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Physical Handicap */}
            <div className="mb-4">
              <label className="block mb-2">
                Physical Handicap/Disability{" "}
                <span className="text-gray-400">(if any)</span>
              </label>
              <input
                type="text"
                name="physical_handicap"
                value={formData.health_information?.physical_handicap}
                onChange={(e) =>
                  handleChange(
                    "health_information",
                    "physical_handicap",
                    e.target.value
                  )
                }
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Other Health Conditions */}
            <div className="mb-4">
              <label className="block mb-2">Other Health Conditions</label>
              <textarea
                name="other"
                value={formData.health_information?.other}
                onChange={(e) =>
                  handleChange("health_information", "other", e.target.value)
                }
                className="w-full p-2 border rounded"
                rows="4"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <div>
                <button
                  onClick={onBack}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 w-full sm:w-auto"
                >
                  Go Back
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Save & Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
