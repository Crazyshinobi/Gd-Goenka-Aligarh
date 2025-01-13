import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setFormStep } from "../../utils/status";  

const EducationalBackground = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    attended_school: "",
    previous_school: "",
    city: "",
    from_grade: "",
    to_grade: "",
    expelled: false,
    expelled_reason: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e)=>{
    setFormStep(4)
    navigate('/student-application/parent-information')
  }
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mb-8">
      <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
        Educational Background
      </h2>
      <form>
        {/* Attended School */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
           Have you attend school?
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="attended_school"
                checked={formData.attended_school}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="attended_school"
                checked={!formData.attended_school}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        {/* School Details (only shown if attended_school is true) */}
        {formData.attended_school && (
          <>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
              Name(s) of previous and present School(s) attended
              </label>
              <input
                type="text"
                name="previous_school"
                value={formData.previous_school}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                City of School
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                From Grade
              </label>
              <input
                type="text"
                name="from_grade"
                value={formData.from_grade}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                To Grade
              </label>
              <input
                type="text"
                name="to_grade"
                value={formData.to_grade}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </>
        )}

        {/* Expelled */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Has the child ever been Expelled/Resticated/Not promoted to next class by any School?
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="expelled"
                checked={formData.expelled}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="expelled"
                checked={!formData.expelled}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        {/* Expelled Reason (only shown if expelled is true) */}
        {formData.expelled && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Please give Details:
            </label>
            <textarea
              name="expelled_reason"
              value={formData.expelled_reason}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          </div>
        )}

        <button onClick={handleSubmit}
          type="submit"
          className="bg-blue-500 text-white py-2 px-6 rounded-full mt-4 hover:bg-blue-600 transition duration-300"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EducationalBackground;
