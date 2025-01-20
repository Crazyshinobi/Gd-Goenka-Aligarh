import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "./FormContext";
import { UserLayout } from "../components/UserLayout";

export const PersonalDetails = () => {
  const { formData, handleChange } = useForm();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let newErrors = {};
    const { first_name, last_name, dob, nationality, gender, address, city, pincode, email, mobile, emergency_mobile } = formData.personal_details;

    if (!first_name) newErrors.first_name = "First name is required";
    if (!last_name) newErrors.last_name = "Last name is required";
    if (!dob) newErrors.dob = "Date of birth is required";
    if (!nationality) newErrors.nationality = "Nationality is required";
    if (!gender) newErrors.gender = "Gender is required";
    if (!address) newErrors.address = "Address is required";
    if (!city) newErrors.city = "City is required";
    if (!pincode) {
      newErrors.pincode = "Pincode is required";
    } else if (pincode.length !== 6) {
      newErrors.pincode = "Pincode must be exactly 6 digits";
    }
    if (!email) newErrors.email = "Email is required";
    if (!mobile) newErrors.mobile = "Mobile number is required";
    if (!emergency_mobile) newErrors.emergency_mobile = "Emergency Mobile number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Personal data : ", formData.personal_details);
      navigate("/user/health-information");
    }
  };

  const handleGoBack = () => {
    navigate("/user/general-information"); // Navigate to the previous page
  };

  return (
    <>
      <UserLayout />
      <div className="lg:p-6 sm:ml-64 dark:bg-gray-800 min-h-screen">
        <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white mt-14 bg-white dark:bg-gray-700 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">First Name</label>
              <input
                type="text"
                name="first_name"
                value={formData.personal_details.first_name}
                onChange={(e) =>
                  handleChange("personal_details", "first_name", e.target.value)
                }
                className="w-full p-2 border rounded"
              />
              {errors.first_name && <p className="text-red-500">{errors.first_name}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-2">Middle Name</label>
              <input
                type="text"
                name="middle_name"
                value={formData.personal_details.middle_name}
                onChange={(e) =>
                  handleChange("personal_details", "middle_name", e.target.value)
                }
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Last Name</label>
              <input
                type="text"
                name="last_name"
                value={formData.personal_details.last_name}
                onChange={(e) =>
                  handleChange("personal_details", "last_name", e.target.value)
                }
                className="w-full p-2 border rounded"
              />
              {errors.last_name && <p className="text-red-500">{errors.last_name}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-2">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.personal_details.dob}
                onChange={(e) =>
                  handleChange("personal_details", "dob", e.target.value)
                }
                className="w-full p-2 border rounded"
              />
              {errors.dob && <p className="text-red-500">{errors.dob}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-2">Nationality</label>
              <input
                type="text"
                name="nationality"
                value={formData.personal_details.nationality}
                onChange={(e) =>
                  handleChange("personal_details", "nationality", e.target.value)
                }
                className="w-full p-2 border rounded"
              />
              {errors.nationality && <p className="text-red-500">{errors.nationality}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-2">Gender</label>
              <select
                name="gender"
                value={formData.personal_details.gender}
                onChange={(e) =>
                  handleChange("personal_details", "gender", e.target.value)
                }
                className="w-full p-2 border rounded"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <p className="text-red-500">{errors.gender}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-2">Address</label>
              <textarea
                name="address"
                value={formData.personal_details.address}
                onChange={(e) =>
                  handleChange("personal_details", "address", e.target.value)
                }
                className="w-full p-2 border rounded"
              ></textarea>
              {errors.address && <p className="text-red-500">{errors.address}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-2">City</label>
              <input
                type="text"
                name="city"
                value={formData.personal_details.city}
                onChange={(e) =>
                  handleChange("personal_details", "city", e.target.value)
                }
                className="w-full p-2 border rounded"
              />
              {errors.city && <p className="text-red-500">{errors.city}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-2">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={formData.personal_details.pincode}
                onChange={(e) =>
                  handleChange("personal_details", "pincode", e.target.value)
                }
                className="w-full p-2 border rounded"
              />
              {errors.pincode && <p className="text-red-500">{errors.pincode}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.personal_details.email}
                onChange={(e) =>
                  handleChange("personal_details", "email", e.target.value)
                }
                className="w-full p-2 border rounded"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-2">Mobile</label>
              <input
                type="tel"
                name="mobile"
                value={formData.personal_details.mobile}
                onChange={(e) =>
                  handleChange("personal_details", "mobile", e.target.value)
                }
                className="w-full p-2 border rounded"
              />
              {errors.mobile && <p className="text-red-500">{errors.mobile}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-2">Emergency Mobile</label>
              <input
                type="tel"
                name="emergency_mobile"
                value={formData.personal_details.emergency_mobile}
                onChange={(e) =>
                  handleChange("personal_details", "emergency_mobile", e.target.value)
                }
                className="w-full p-2 border rounded"
              />
              {errors.emergency_mobile && <p className="text-red-500">{errors.emergency_mobile}</p>}
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={handleGoBack}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Go Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};