import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { usePostRequest } from "../hooks/usePostRequest";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    parent_name: "",    
    student_name: "",
    parent_email_address: "",
    mobile: "",
    state: "",
    city: "",
    grade: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.parent_name) newErrors.parent_name = "Parent name is required";
    if (!formData.student_name) newErrors.student_name = "Student name is required";
    if (!formData.parent_email_address) newErrors.parent_email_address = "Parent email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.parent_email_address)) {
      newErrors.parent_email_address = "Invalid email address";
    }
    if (!formData.mobile) newErrors.mobile = "Student mobile number is required";
    else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Invalid mobile number";
    }
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.grade) newErrors.grade = "Class is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/contact/`;

  const { postRequest, error } = usePostRequest(apiURL);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const response = await postRequest(formData);

      if (response && response.success) {
        toast.success("Thank you for your enquiry!");
        setFormData({
          parent_name: "",
          student_name: "",
          parent_email_address: "",
          mobile: "",
          state: "",
          city: "",
          grade: "",
        });
      } else {
        toast.error("Failed to submit the form.");
        console.error("Error Submitting form:", error);
      }
    }
  };

  return (
    <div className="w-full bg-gradient-to-r p-3 from-blue-500 to-indigo-600 rounded-lg shadow-lg">
      <div className="mb-2 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">Get In Touch</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-1 sm:space-y-1">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
          {/* Form fields */}
          <div className="col-span-1 sm:col-span-2">
            <label htmlFor="parentName" className="block text-sm font-semibold text-white mb-1">
              Parent Name
            </label>
            <input
              type="text"
              id="parentName"
              name="parent_name"
              value={formData.parent_name}
              onChange={handleChange}
              className="mt-1 p-2 sm:p-3 block w-full rounded-lg border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
              placeholder="Enter parent's full name"
            />
            {errors.parent_name && (
              <p className="mt-1 text-sm text-red-300">{errors.parent_name}</p>
            )}
          </div>

          <div>
            <label htmlFor="studentName" className="block text-sm font-semibold text-white mb-1">
              Student Name
            </label>
            <input
              type="text"
              id="studentName"
              name="student_name"
              value={formData.student_name}
              onChange={handleChange}
              className="mt-1 p-2 sm:p-3 block w-full rounded-lg border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
              placeholder="Enter student's full name"
            />
            {errors.student_name && (
              <p className="mt-1 text-sm text-red-300">{errors.student_name}</p>
            )}
          </div>

          <div>
            <label htmlFor="parent_email_address" className="block text-sm font-semibold text-white mb-1">
              Parent Email
            </label>
            <input
              type="email"
              id="parentEmail"
              name="parent_email_address"
              value={formData.parent_email_address}
              onChange={handleChange}
              className="mt-1 p-2 sm:p-3 block w-full rounded-lg border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
              placeholder="Enter parent's email"
            />
            {errors.parent_email_address && (
              <p className="mt-1 text-sm text-red-300">
                {errors.parent_email_address}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="studentMobile" className="block text-sm font-semibold text-white mb-1">
              Student Mobile No.
            </label>
            <input
              type="tel"
              id="studentMobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 p-2 sm:p-3 block w-full rounded-lg border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
              placeholder="Enter 10-digit mobile number"
            />
            {errors.mobile && (
              <p className="mt-1 text-sm text-red-300">{errors.mobile}</p>
            )}
          </div>

          <div>
            <label htmlFor="state" className="block text-sm font-semibold text-white mb-1">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 p-2 sm:p-3 block w-full rounded-lg border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
              placeholder="Enter state"
            />
            {errors.state && (
              <p className="mt-1 text-sm text-red-300">{errors.state}</p>
            )}
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-semibold text-white mb-1">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 p-2 sm:p-3 block w-full rounded-lg border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
              placeholder="Enter city"
            />
            {errors.city && (
              <p className="mt-1 text-sm text-red-300">{errors.city}</p>
            )}
          </div>

          <div>
            <label htmlFor="class" className="block text-sm font-semibold text-white mb-1">
              Class
            </label>
            <select
              id="class"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="mt-1 p-2 sm:p-3 block w-full rounded-lg border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
            >
              <option value="">Select Class</option>
              <option value="classI">Class I</option>
              <option value="classII">Class II</option>
              <option value="classIII">Class III</option>
              <option value="classIV">Class IV</option>
              <option value="classV">Class V</option>
              <option value="classVI">Class VI</option>
              <option value="classVII">Class VII</option>
              <option value="classVIII">Class VIII</option>
              <option value="classIX">Class IX</option>
              <option value="classX">Class X</option>
              <option value="classXI">Class XI</option>
              <option value="classXII">Class XII</option>
            </select>
            {errors.grade && (
              <p className="mt-1 text-sm text-red-300">{errors.grade}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 sm:py-3 px-4 bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 rounded-lg shadow-md text-white text-base sm:text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105"
        >
          Enquiry now
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default EnquiryForm;

