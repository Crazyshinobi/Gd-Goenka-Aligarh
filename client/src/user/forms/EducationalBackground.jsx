import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "./FormContext";
import { UserLayout } from "../components/UserLayout";

export const EducationalBackground = () => {
  const { formData, handleChange } = useForm();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let newErrors = {};
    const { attended_school, previous_school, city, from_grade, to_grade, expelled, expelled_reason } = formData.educational_background;

    if (attended_school && !previous_school) newErrors.previous_school = "Previous school name is required.";
    if (attended_school && !city) newErrors.city = "City of school is required.";
    if (attended_school && !from_grade) newErrors.from_grade = "From grade is required.";
    if (attended_school && !to_grade) newErrors.to_grade = "To grade is required.";
    if (expelled && !expelled_reason) newErrors.expelled_reason = "Reason for expulsion is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Educational background : " , formData.educational_background)
      navigate("/user/parent-information");
    }
  };

  return (
    <>
      <UserLayout />
      <div className="lg:p-6 sm:ml-64 dark:bg-gray-800 min-h-screen">
        <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white mt-14 bg-white dark:bg-gray-700 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Educational Background</h2>
          <form onSubmit={handleSubmit}>
            {/* Attended School */}
            <div className="mb-4">
              <label className="block mb-2">Have you attended school?</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="attended_school"
                    checked={formData.educational_background.attended_school}
                    onChange={(e) =>
                      handleChange("educational_background", "attended_school", e.target.checked)
                    }
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="attended_school"
                    checked={!formData.educational_background.attended_school}
                    onChange={(e) =>
                      handleChange("educational_background", "attended_school", !e.target.checked)
                    }
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>

            {/* School Details (only shown if attended_school is true) */}
            {formData.educational_background.attended_school && (
              <>
                <div className="mb-4">
                  <label className="block mb-2">Name(s) of previous and present School(s) attended</label>
                  <input
                    type="text"
                    name="previous_school"
                    value={formData.educational_background.previous_school}
                    onChange={(e) =>
                      handleChange("educational_background", "previous_school", e.target.value)
                    }
                    className="w-full p-2 border rounded"
                  />
                  {errors.previous_school && <p className="text-red-500">{errors.previous_school}</p>}
                </div>

                <div className="mb-4">
                  <label className="block mb-2">City of School</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.educational_background.city}
                    onChange={(e) =>
                      handleChange("educational_background", "city", e.target.value)
                    }
                    className="w-full p-2 border rounded"
                  />
                  {errors.city && <p className="text-red-500">{errors.city}</p>}
                </div>

                <div className="mb-4">
                  <label className="block mb-2">From Grade</label>
                  <input
                    type="text"
                    name="from_grade"
                    value={formData.educational_background.from_grade}
                    onChange={(e) =>
                      handleChange("educational_background", "from_grade", e.target.value)
                    }
                    className="w-full p-2 border rounded"
                  />
                  {errors.from_grade && <p className="text-red-500">{errors.from_grade}</p>}
                </div>

                <div className="mb-4">
                  <label className="block mb-2">To Grade</label>
                  <input
                    type="text"
                    name="to_grade"
                    value={formData.educational_background.to_grade}
                    onChange={(e) =>
                      handleChange("educational_background", "to_grade", e.target.value)
                    }
                    className="w-full p-2 border rounded"
                  />
                  {errors.to_grade && <p className="text-red-500">{errors.to_grade}</p>}
                </div>
              </>
            )}

            {/* Expelled */}
            <div className="mb-4">
              <label className="block mb-2">Has the child ever been expelled/resticated/not promoted to the next class by any school?</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="expelled"
                    checked={formData.educational_background.expelled}
                    onChange={(e) =>
                      handleChange("educational_background", "expelled", e.target.checked)
                    }
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="expelled"
                    checked={!formData.educational_background.expelled}
                    onChange={(e) =>
                      handleChange("educational_background", "expelled", !e.target.checked)
                    }
                    className="mr-2"
                  />
                  No
                </label>
              </div>
              {errors.expelled && <p className="text-red-500">{errors.expelled}</p>}
            </div>

            {/* Expelled Reason (only shown if expelled is true) */}
            {formData.educational_background.expelled && (
              <div className="mb-4">
                <label className="block mb-2">Please provide details:</label>
                <textarea
                  name="expelled_reason"
                  value={formData.educational_background.expelled_reason}
                  onChange={(e) =>
                    handleChange("educational_background", "expelled_reason", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                  rows="4"
                />
                {errors.expelled_reason && <p className="text-red-500">{errors.expelled_reason}</p>}
              </div>
            )}

            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
