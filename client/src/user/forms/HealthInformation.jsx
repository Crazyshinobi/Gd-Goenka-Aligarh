import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "./FormContext";
import { UserLayout } from "../components/UserLayout";

export const HealthInformation = () => {
  const { formData, handleChange } = useForm();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Health information :", formData.health_information);
    navigate("/user/educational-background");
  };

 

  return (
    <>
      <UserLayout />
      <div className="p-4 py-6 lg:p-6 sm:ml-64 dark:bg-gray-800 min-h-screen">
        <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white mt-14 bg-white dark:bg-gray-700 shadow-lg">
          <h2 className="text-center lg:text-left text-2xl font-bold mb-4">Health Information</h2>
          <form onSubmit={handleSubmit}>
            {/* Allergy */}
            <div className="mb-4">
              <label className="block mb-2">
                Allergy/Chronic ailment <span className="text-gray-400">(if any)</span>
              </label>
              <input
                type="text"
                name="allergy"
                value={formData.health_information.allergy}
                onChange={(e) =>
                  handleChange("health_information", "allergy", e.target.value)
                }
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Physical Handicap */}
            <div className="mb-4">
              <label className="block mb-2">
                Physical Handicap/Disability <span className="text-gray-400">(if any)</span>
              </label>
              <input
                type="text"
                name="physical_handicap"
                value={formData.health_information.physical_handicap}
                onChange={(e) =>
                  handleChange("health_information", "physical_handicap", e.target.value)
                }
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Other Health Conditions */}
            <div className="mb-4">
              <label className="block mb-2">Other Health Conditions</label>
              <textarea
                name="other"
                value={formData.health_information.other}
                onChange={(e) =>
                  handleChange("health_information", "other", e.target.value)
                }
                className="w-full p-2 border rounded"
                rows="4"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
            <Link to={'/user/personal-details'}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 w-full sm:w-auto"
              >
                Go Back
              </Link>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
              Save & Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};