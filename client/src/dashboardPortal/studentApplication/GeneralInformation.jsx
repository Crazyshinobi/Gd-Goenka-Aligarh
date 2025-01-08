import React, { useState } from "react";

const GeneralInformation = () => {
  const [formData, setFormData] = useState({
    grade: "",
    applied_before: false,
    applied_year: "",
    applied_grade: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">General Information</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Grade</label>
          <input
            type="text"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="applied_before"
            checked={formData.applied_before}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-sm text-gray-700">Applied Before?</label>
        </div>

        {formData.applied_before && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Applied Year</label>
              <input
                type="text"
                name="applied_year"
                value={formData.applied_year}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Applied Grade</label>
              <input
                type="text"
                name="applied_grade"
                value={formData.applied_grade}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </>
        )}

        <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-full mt-4">
          Save
        </button>
      </form>
    </div>
  );
};

export default GeneralInformation;
