import React, { useState } from "react";
import { useForm } from "./FormContext";
import { UserLayout } from "../components/UserLayout";
import axios from "axios";

export const PersonalDetails = ({ onNext, onBack }) => {
  const { formData, handleChange } = useForm();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    const {
      first_name,
      last_name,
      dob,
      nationality,
      gender,
      address,
      city,
      pincode,
      email,
      mobile,
      emergency_mobile,
    } = formData.personal_details;

    if (!first_name) newErrors.first_name = "First name is required";
    else if (!/^[A-Za-z\s]+$/.test(first_name))
      newErrors.first_name = "First name must only contain alphabets";

    if (!last_name) newErrors.last_name = "Last name is required";
    else if (!/^[A-Za-z\s]+$/.test(last_name))
      newErrors.last_name = "Last name must only contain alphabets";

    if (!dob) newErrors.dob = "Date of birth is required";
    if (!nationality) newErrors.nationality = "Nationality is required";
    else if (!/^[A-Za-z\s]+$/.test(nationality))
      newErrors.nationality = "Nationality must only contain alphabets";
    if (!gender) newErrors.gender = "Gender is required";
    if (!address) newErrors.address = "Address is required";
    if (!city) newErrors.city = "City is required";
    if (!pincode) {
      newErrors.pincode = "Pincode is required";
    } else if (pincode.length !== 6) {
      newErrors.pincode = "Pincode must be exactly 6 digits";
    }
    if (!email) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Please provide a valid email.";
      }
    }

    if (!mobile) {
      newErrors.mobile = "Mobile number is required";
    } else {
      const mobileRegex = /^[9876]{1}[0-9]{9}$/;
      if (mobile.length !== 10) {
        newErrors.mobile = "Mobile number must be exactly 10 digits";
      } else if (!mobileRegex.test(mobile)) {
        newErrors.mobile =
          "Invalid mobile number (must start with 9, 8, 7, or 6 and be 10 digits long)";
      }
    }

    if (!emergency_mobile) {
      newErrors.emergency_mobile = "Emergency Mobile number is required";
    } else {
      const emergency_mobileRegex = /^[9876]{1}[0-9]{9}$/;
      if (emergency_mobile.length !== 10) {
        newErrors.emergency_mobile = "Mobile number must be exactly 10 digits";
      } else if (!emergency_mobileRegex.test(emergency_mobile)) {
        newErrors.emergency_mobile =
          "Invalid mobile number (must start with 9, 8, 7, or 6 and be 10 digits long)";
      }
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

  return (
    <>
      <UserLayout />

      <div className="p-4 lg:p-6 sm:ml-64 dark:bg-gray-800 min-h-screen">
        <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white bg-white dark:bg-gray-700 shadow-lg">
          <h2 className="text-center lg:text-left text-2xl font-bold mb-4">
            Personal Details
          </h2>
          <form onSubmit={handleSubmit}>
            {/* First Row: First Name, Middle Name, Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block mb-2">
                  First Name<span className="text-red-500 text-2xl">*</span>
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.personal_details.first_name}
                  onChange={(e) => {
                    const regex = /^[A-Za-z\s]*$/;
                    const value = e.target.value;

                    if (regex.test(value) || value === "") {
                      handleChange("personal_details", "first_name", value);
                    }
                  }}
                  className="w-full p-2 border rounded"
                />
                {errors.first_name && (
                  <p className="text-red-500">{errors.first_name}</p>
                )}
              </div>

              <div>
                <label className="block mb-2">
                  Middle Name<span className="text-red-500 text-2xl"></span>
                </label>
                <input
                  type="text"
                  name="middle_name"
                  value={formData.personal_details.middle_name}
                  onChange={(e) => {
                    const regex = /^[A-Za-z\s]*$/;
                    const value = e.target.value;

                    if (regex.test(value) || value === "") {
                      handleChange("personal_details", "middle_name", value);
                    }
                  }}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block mb-2">
                  Last Name<span className="text-red-500 text-2xl">*</span>
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.personal_details.last_name}
                  onChange={(e) => {
                    const regex = /^[A-Za-z\s]*$/;
                    const value = e.target.value;

                    if (regex.test(value) || value === "") {
                      handleChange("personal_details", "last_name", value);
                    }
                  }}
                  className="w-full p-2 border rounded"
                />
                {errors.last_name && (
                  <p className="text-red-500">{errors.last_name}</p>
                )}
              </div>
            </div>

            {/* Second Row: Date of Birth, Nationality, Gender */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block mb-2">
                  Date of Birth<span className="text-red-500 text-2xl">*</span>
                </label>
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

              <div>
                <label className="block mb-2">
                  Nationality<span className="text-red-500 text-2xl">*</span>
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.personal_details.nationality}
                  onChange={(e) => {
                    const regex = /^[A-Za-z\s]*$/;
                    const value = e.target.value;

                    if (regex.test(value) || value === "") {
                      handleChange("personal_details", "nationality", value);
                    }
                  }}
                  className="w-full p-2 border rounded py-2"
                />
                {errors.nationality && (
                  <p className="text-red-500">{errors.nationality}</p>
                )}
              </div>

              <div>
                <label className="block mb-2">
                  Gender<span className="text-red-500 text-2xl">*</span>
                </label>
                <select
                  name="gender"
                  value={formData.personal_details.gender}
                  onChange={(e) =>
                    handleChange("personal_details", "gender", e.target.value)
                  }
                  className="w-full p-2 py-3 border rounded"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500">{errors.gender}</p>
                )}
              </div>
            </div>

            {/* Third Row: Address, City, Pincode */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="md:col-span-1">
                <label className="block mb-2">
                  Address<span className="text-red-500 text-2xl">*</span>
                </label>
                <textarea
                  name="address"
                  rows={1}
                  value={formData.personal_details.address}
                  onChange={(e) =>
                    handleChange("personal_details", "address", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                ></textarea>
                {errors.address && (
                  <p className="text-red-500">{errors.address}</p>
                )}
              </div>

              <div>
                <label className="block mb-2">
                  City<span className="text-red-500 text-2xl">*</span>
                </label>
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

              <div>
                <label className="block mb-2">
                  Pincode<span className="text-red-500 text-2xl">*</span>
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.personal_details.pincode}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) {
                      handleChange("personal_details", "pincode", value);
                    }
                  }}
                  className="w-full p-2 border rounded"
                />
                {errors.pincode && (
                  <p className="text-red-500">{errors.pincode}</p>
                )}
              </div>
            </div>

            {/* Fourth Row: Email, Mobile, Emergency Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block mb-2">
                  Email<span className="text-red-500 text-2xl">*</span>
                </label>
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

              <div>
                <label className="block mb-2">
                  Mobile<span className="text-red-500 text-2xl">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.personal_details.mobile}
                  onChange={(e) => {
                    const value = e.target.value;
                    const numericValue = value.replace(/[^0-9]/g, "");
                    if (numericValue.length <= 10) {
                      handleChange("personal_details", "mobile", numericValue);
                    }
                  }}
                  className="w-full p-2 border rounded"
                />
                {errors.mobile && (
                  <p className="text-red-500">{errors.mobile}</p>
                )}
              </div>

              <div>
                <label className="block mb-2">
                  Emergency Mobile
                  <span className="text-red-500 text-2xl">*</span>
                </label>
                <input
                  type="tel"
                  name="emergency_mobile"
                  value={formData.personal_details.emergency_mobile}
                  onChange={(e) => {
                    const value = e.target.value;
                    const numericValue = value.replace(/[^0-9]/g, "");
                    if (numericValue.length <= 10) {
                      handleChange(
                        "personal_details",
                        "emergency_mobile",
                        numericValue
                      );
                    }
                  }}
                  className="w-full p-2 border rounded"
                />
                {errors.emergency_mobile && (
                  <p className="text-red-500">{errors.emergency_mobile}</p>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between mt-6">
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
