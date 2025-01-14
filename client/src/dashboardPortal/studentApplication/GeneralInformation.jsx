import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setFormStep, getFormStep } from "../../utils/status"; 
import Timeline from './Timeline';
import { usePostRequest } from "../../hooks/usePostRequest";

const GeneralInformation = () => {
  const [formData, setFormData] = useState({
    grade: "",
    applied_before: false,
    applied_year: "",
    applied_grade: "",
  });
  const [submitted, setSubmitted] = useState(false); 
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const currentStep = getFormStep(); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validate form data
  const validateForm = () => {
    let newErrors = {};

    if (!formData.grade) newErrors.grade = "Grade is required";

    if (formData.applied_before) {
      if (!formData.applied_year) newErrors.applied_year = "Academic year is required";
      if (!formData.applied_grade) newErrors.applied_grade = "Applied grade/class is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/admission-application/`;
  const { postRequest, error } = usePostRequest(apiURL);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await postRequest(formData);
  
        if (response && response.success) {
          setFormStep(1);  
          setSubmitted(true);  
          console.log("General Information Form Submitted Successfully!");
          navigate("/student-application/personal-details");
        } else {
          console.error("Form submission failed:", error);
          alert(error); 
        }
      } catch (err) {
        console.error("Error occurred during form submission:", err);
      }
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Timeline - Show only for current step on large screens */}
      <div className="w-full hidden sm:block">
        <Timeline currentStep={currentStep} />
      </div>

      {/* Form Container - Centered vertically in the remaining space */}
      <div className="flex-grow flex items-center justify-center py-8">
        <div className="w-full max-w-4xl sm:max-w-2xl lg:max-w-3xl bg-white rounded-lg shadow-md p-6 sm:px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">General Information</h2>
          
          <form onSubmit={handleSubmit}>
            {/* Grade/Class Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">We are considering enrollment in Grade/Class</label>
              <input
                type="text"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.grade ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="Enter grade/class"
              />
              {errors.grade && <p className="text-red-500 text-sm mt-2">{errors.grade}</p>}
            </div>

            {/* Applied Before Checkbox */}
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                name="applied_before"
                checked={formData.applied_before}
                onChange={handleChange}
                className="mr-3 h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="text-sm text-gray-700">Have you ever applied for admission at G.D. Goenka Schools?</label>
            </div>

            {/* Conditional Inputs for Previous Application */}
            {formData.applied_before && (
              <div className="space-y-6">
                {/* Academic Year Input */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Academic year</label>
                  <input
                    type="number"
                    name="applied_year"
                    value={formData.applied_year}
                    onChange={handleChange}
                    className={`w-full p-3 border ${errors.applied_year ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Enter academic year"
                  />
                  {errors.applied_year && <p className="text-red-500 text-sm mt-2">{errors.applied_year}</p>}
                </div>

                {/* Applied Grade/Class Input */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Which class</label>
                  <input
                    type="number"
                    name="applied_grade"
                    value={formData.applied_grade}
                    onChange={handleChange}
                    className={`w-full p-3 border ${errors.applied_grade ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Enter applied grade/class"
                  />
                  {errors.applied_grade && <p className="text-red-500 text-sm mt-2">{errors.applied_grade}</p>}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
