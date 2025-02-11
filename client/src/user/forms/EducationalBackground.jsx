import React, { useEffect, useState } from "react";
import { useForm } from "./FormContext";
import { UserLayout } from "../components/UserLayout";
import axios from "axios";
import Cookies from "js-cookie";

export const EducationalBackground = ({ onNext, onBack }) => {
  const { formData, handleChange } = useForm();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    const {
      attended_school,
      previous_school,
      city,
      from_grade,
      to_grade,
      transfer_certificate,
      image,
      transfer_certificate_date,
      expelled,
      expelled_reason,
    } = formData.educational_background;

    if (attended_school && !previous_school)
      newErrors.previous_school = "Previous school name is required.";
    else if (!/^[A-Za-z\s]+$/.test(previous_school))
      newErrors.previous_school = "School name must only contain alphabets.";
    if (attended_school && !city)
      newErrors.city = "City of school is required.";
    if (attended_school && !from_grade)
      newErrors.from_grade = "From grade is required.";
    if (attended_school && !to_grade)
      newErrors.to_grade = "To grade is required.";
    if (transfer_certificate && !image) {
      newErrors.image = "Transfer Certificate Image is required.";
    }
    if (!transfer_certificate && !transfer_certificate_date) {
      newErrors.transfer_certificate_date =
        "Transfer Certificate date is required.";
    }
    if (expelled && !expelled_reason)
      newErrors.expelled_reason = "Reason for expulsion is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/v1/upload`, // Your file upload endpoint
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.data.success) {
          // Save the file path or URL in the form data
          handleChange(
            "educational_background",
            "image",
            response.data.fileUrl
          );
        } else {
          console.error("Failed to upload file:", response.data.message);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onNext();
    }
  };

  const fetchDetails = async () => {
    const user = Cookies.get("userId");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/admission-application/get-admission-form/3`,
        { user }
      );
      if (response?.data?.success) {
        const admissionData = response?.data?.admission;
        const fields = [
          "attended_school",
          "previous_school",
          "city",
          "from_grade",
          "to_grade",
          "transfer_certificate",
          "image",
          "transfer_certificate_date",
          "expelled",
          "expelled_reason",
        ];

        fields.forEach((field) => {
          if (admissionData.educational_background[field]) {
            let value = admissionData.educational_background[field];

            if (field === "transfer_certificate_date") {
              value = new Date(value).toISOString().split("T")[0]; // Format date
            }

            handleChange(
              "educational_background",
              field,
              admissionData.educational_background[field]
            );
          }
        });
      } else {
        console.log("Failed to fetch details:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <UserLayout />
      <div className="p-4 py-6 sm:ml-64 dark:bg-gray-800 min-h-screen">
        <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white  bg-white dark:bg-gray-700 shadow-lg">
          <h2 className="text-center lg:text-lg text-2xl font-bold mb-4">
            Educational Background
          </h2>
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
                      handleChange(
                        "educational_background",
                        "attended_school",
                        e.target.checked
                      )
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
                      handleChange(
                        "educational_background",
                        "attended_school",
                        !e.target.checked
                      )
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
                  <label className="block mb-2">
                    Name(s) of previous and present School(s) attended
                    <span className="text-red-500 text-2xl">*</span>
                  </label>
                  <input
                    type="text"
                    name="previous_school"
                    value={formData.educational_background.previous_school}
                    onChange={(e) =>
                      handleChange(
                        "educational_background",
                        "previous_school",
                        e.target.value
                      )
                    }
                    className="w-full p-2 border rounded"
                  />
                  {errors.previous_school && (
                    <p className="text-red-500">{errors.previous_school}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block mb-2">
                    City of School
                    <span className="text-red-500 text-2xl">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.educational_background.city}
                    onChange={(e) =>
                      handleChange(
                        "educational_background",
                        "city",
                        e.target.value
                      )
                    }
                    className="w-full p-2 border rounded"
                  />
                  {errors.city && <p className="text-red-500">{errors.city}</p>}
                </div>

                <div className="mb-4">
                  <label className="block mb-2">
                    From Grade<span className="text-red-500 text-2xl">*</span>
                  </label>
                  <input
                    type="text"
                    name="from_grade"
                    value={formData.educational_background.from_grade}
                    onChange={(e) =>
                      handleChange(
                        "educational_background",
                        "from_grade",
                        e.target.value
                      )
                    }
                    className="w-full p-2 border rounded"
                  />
                  {errors.from_grade && (
                    <p className="text-red-500">{errors.from_grade}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block mb-2">
                    To Grade<span className="text-red-500 text-2xl">*</span>
                  </label>
                  <input
                    type="text"
                    name="to_grade"
                    value={formData.educational_background.to_grade}
                    onChange={(e) =>
                      handleChange(
                        "educational_background",
                        "to_grade",
                        e.target.value
                      )
                    }
                    className="w-full p-2 border rounded"
                  />
                  {errors.to_grade && (
                    <p className="text-red-500">{errors.to_grade}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block mb-2">
                    Do you have Transfer Certificate?
                    <span className="text-red-500 text-2xl">*</span>
                  </label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="transfer_certificate"
                        checked={
                          formData.educational_background.transfer_certificate
                        }
                        onChange={(e) =>
                          handleChange(
                            "educational_background",
                            "transfer_certificate",
                            e.target.checked
                          )
                        }
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="transfer_certificate"
                        checked={
                          !formData.educational_background.transfer_certificate
                        }
                        onChange={(e) =>
                          handleChange(
                            "educational_background",
                            "transfer_certificate",
                            !e.target.checked
                          )
                        }
                        className="mr-2"
                      />
                      No
                    </label>
                  </div>
                </div>

                {formData.educational_background.transfer_certificate ? (
                  <>
                    {/* Upload TC */}
                    <div className="mb-4">
                      <label className="block mb-2">
                        Upload Transfer Certificate
                        <span className="text-red-500 text-2xl">*</span>
                      </label>
                      <div className="flex items-center space-x-4">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                        {errors.image && (
                          <p className="text-red-500">{errors.image}</p>
                        )}
                      </div>
                      {formData.educational_background.image && (
                        <div>
                          <h3>Uploaded Image:</h3>
                          <img
                            src={`${formData.educational_background.image}`}
                            alt="Educational background"
                            style={{ width: "100px", height: "auto" }}
                          />
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-4">
                      <label className="block mb-2">
                        When will you get the transfer certificate?
                        <span className="text-red-500 text-2xl">*</span>
                      </label>
                      <input
                        type="date"
                        name="transfer_certificate_date"
                        value={
                          formData.educational_background
                            .transfer_certificate_date
                        }
                        onChange={(e) =>
                          handleChange(
                            "educational_background",
                            "transfer_certificate_date",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                      />
                      {errors.transfer_certificate_date && (
                        <p className="text-red-500">{errors.transfer_certificate_date}</p>
                      )}
                    </div>
                  </>
                )}
              </>
            )}

            {/* Expelled */}
            <div className="mb-4">
              <label className="block mb-2">
                Has the child ever been expelled/restricted/not promoted to the
                next class by any school?
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="expelled"
                    checked={formData.educational_background.expelled}
                    onChange={(e) =>
                      handleChange(
                        "educational_background",
                        "expelled",
                        e.target.checked
                      )
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
                      handleChange(
                        "educational_background",
                        "expelled",
                        !e.target.checked
                      )
                    }
                    className="mr-2"
                  />
                  No
                </label>
              </div>
              {errors.expelled && (
                <p className="text-red-500">{errors.expelled}</p>
              )}
            </div>

            {/* Expelled Reason (only shown if expelled is true) */}
            {formData.educational_background.expelled && (
              <div className="mb-4">
                <label className="block mb-2">
                  Please provide details:
                  <span className="text-red-500 text-2xl">*</span>
                </label>
                <textarea
                  name="expelled_reason"
                  value={formData.educational_background.expelled_reason}
                  onChange={(e) =>
                    handleChange(
                      "educational_background",
                      "expelled_reason",
                      e.target.value
                    )
                  }
                  className="w-full p-2 border rounded"
                  rows="4"
                />
                {errors.expelled_reason && (
                  <p className="text-red-500">{errors.expelled_reason}</p>
                )}
              </div>
            )}

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={onBack}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Go Back
              </button>
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
