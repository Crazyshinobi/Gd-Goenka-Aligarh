import React, { useState } from "react";
import { UserLayout } from "../components/UserLayout";
import { useForm } from "./FormContext";

export const TransportFacility = ({ onNext, onBack }) => {
  const { formData, handleChange } = useForm();
  const [errors, setErrors] = useState({});
  const [showDropdown, setShowDropdown] = useState(
    formData.transport_facility === true
  );

  const handleTransportChange = (value) => {
    handleChange("transport_facility", "transport_facility", value);
    setShowDropdown(value);
    if (!value) {
      handleChange("bus_stop", "bus_stop", ""); // Reset bus stop if "No" is selected
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (formData.transport_facility === null || formData.transport_facility === undefined) {
      newErrors.transport_facility = "Please select an option for transport facility";
    }

    if (formData.transport_facility && !formData.bus_stop) {
      newErrors.bus_stop = "Please select a bus stop";
    }

    if (!formData.declaration) {
      newErrors.declaration = "You must agree to the declaration";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onNext();
    }
  };

  return (
    <>
      <UserLayout />
      <div className="p-4 py-6 lg:p-6 sm:ml-64 dark:bg-gray-800 min-h-screen">
        <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white bg-white dark:bg-gray-700 shadow-lg">
          <h2 className="text-xl lg:text-2xl font-bold mb-6 text-center dark:text-white">
            Transport Facility and Declaration
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Do you require bus facility?
                <span className="text-red-500 text-2xl">*</span>
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center dark:text-white">
                  <input
                    type="radio"
                    name="transport_facility"
                    value="yes"
                    checked={formData.transport_facility === true}
                    onChange={() => handleTransportChange(true)}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center dark:text-white">
                  <input
                    type="radio"
                    name="transport_facility"
                    value="no"
                    checked={formData.transport_facility === false}
                    onChange={() => handleTransportChange(false)}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
              {errors.transport_facility && (
                <span className="text-red-500 text-sm">{errors.transport_facility}</span>
              )}
            </div>

            {/* Bus Stop Selection (Shown if "Yes" is selected) */}
            {showDropdown && (
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Select your bus stop:
                  <span className="text-red-500 text-2xl">*</span>
                </label>
                <select
                  name="bus_stop"
                  value={formData.bus_stop || ""}
                  onChange={(e) => handleChange("bus_stop", "bus_stop", e.target.value)}
                  className="w-full p-2 border rounded-md dark:bg-gray-600 dark:text-white"
                >
                  <option value="" disabled>Select your bus stop</option>
                  <option value="Sasni Gate">Sasni Gate and the Area Around</option>
                  <option value="Ramghat Road">Ramghat Road and the Area Around</option>
                  <option value="Sootmill Crossing">Sootmill Crossing and the Area Around</option>
                  <option value="Khereshwar Crossing">Khereshwar Crossing and the Area Around</option>
                  <option value="Suburban Areas">Suburban Areas as Khair, Panethi, etc.</option>
                </select>
                {errors.bus_stop && (
                  <span className="text-red-500 text-sm">{errors.bus_stop}</span>
                )}
              </div>
            )}

            {/* Declaration Checkbox */}
            <div className="space-y-4">
              <label className="flex items-center dark:text-white">
                <input
                  type="checkbox"
                  name="declaration"
                  checked={formData.declaration}
                  onChange={(e) => handleChange("declaration", "declaration", e.target.checked)}
                  className="mr-2"
                />
                I agree to the terms and conditions.
                <span className="text-red-500 text-2xl">*</span>
              </label>
              {errors.declaration && (
                <span className="text-red-500 text-sm">{errors.declaration}</span>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <button
                onClick={onBack}
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
