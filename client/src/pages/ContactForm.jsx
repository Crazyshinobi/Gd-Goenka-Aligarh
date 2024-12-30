import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import NavigationPages from "./NavigationPages";
import ContactBanner from "../assets/ContactBanner.jpg";
import { motion } from "framer-motion";
import bgdesign from "../assets/bgdesign3.jpg";
import toast, { Toaster } from "react-hot-toast";
import { usePostRequest } from "../hooks/usePostRequest";

const ContactForm = () => {
  document.title = "Contact Us - GDGPS Aligarh";

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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.parent_name)
      newErrors.parent_name = "Parent name is required";
    if (!formData.student_name)
      newErrors.student_name = "Student name is required";
    if (!formData.parent_email_address)
      newErrors.parent_email_address = "Parent email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.parent_email_address
      )
    ) {
      newErrors.parent_email_address = "Invalid email address";
    }
    if (!formData.mobile)
      newErrors.mobile = "Student mobile number is required";
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

    setLoading(true);
    const response = await postRequest(formData);

    if (response && response.success) {
      setFormData({
        parent_name: "",
        student_name: "",
        parent_email_address: "",
        mobile: "",
        state: "",
        city: "",
        grade: "",
      });
      setTimeout(() => {
        setLoading(false);
        toast.success("Form submitted successfully");
      });
    } else {
      toast.error("Failed to submit the form.");
      console.error("Error Submitting form:", error);
    }
  }
  };

  return (
    <Layout>
      <Toaster />
      <div className="relative bgImage">
        <motion.img
          src={ContactBanner}
          alt="Contact Us Banner"
          className="h-[50vh] md:h-[40vh] lg:h-[50vh] w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="absolute uppercase bottom-4 md:bottom-6 left-4 md:left-8 text-3xl md:text-5xl font-bold text-red-600 bg-white bg-opacity-80 px-4 py-2 rounded shadow-md"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Contact us
        </motion.h1>
      </div>

      <NavigationPages />

      {/* CONTACT FORM */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 md:p-8"
        style={{
          backgroundImage: `url(${bgdesign})`,
        }}
      >
        <div className="w-full max-w-7xl bg-white bg-opacity-90 rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Contact Information */}
            <div className="w-full lg:flex-[33%] md:flex-1 md:w-1/3 bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 mb-6">
                Contact Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 md:h-6 md:w-6 text-blue-600 hover:text-blue-800 transition duration-300 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-base md:text-lg font-medium mt-2 md:mt-0">
                    3KMs Stone, Mathura Rd, Sasni Gate, Aligarh - Uttar Pradesh
                    202001
                  </span>
                </div>

                <div className="flex items-center space-x-4 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600 hover:text-blue-800 transition duration-300 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-base md:text-lg font-medium">
                    <a href="tel:011-43060860">011-43060860,</a>
                    <a href="tel:+91-9810054878"> 9810054878, </a>
                    <a href="tel:+91-8126747489"> 8126747489 </a>
                  </span>
                </div>
                <div className="flex items-center space-x-4 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 md:h-6 md:w-6 text-blue-600 hover:text-blue-800 transition duration-300 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-base md:text-lg font-medium">
                    <a href="mailto:admission@gdgpsaligarh.com">
                      admission@gdgpsaligarh.com
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="w-full lg:flex-[66%] md:w-2/3 md:flex-1 p-6 md:p-8 bg-white rounded-lg shadow-lg border-2 border-red-500">
              <div className="mb-6 md:mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600">
                  Get In Touch
                </h2>
                <p className="text-center text-gray-600 mt-2">
                  Drop us your details for a quick response
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label
                      htmlFor="parentName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Parent Name
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parent_name"
                      value={formData.parent_name}
                      onChange={handleChange}
                      className="mt-1 p-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Enter parent's full name"
                    />
                    {errors.parent_name && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.parent_name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="studentName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Student Name
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="student_name"
                      value={formData.student_name}
                      onChange={handleChange}
                      className="mt-1 p-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Enter student's full name"
                    />
                    {errors.student_name && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.student_name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="parent_email_address"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Parent Email
                    </label>
                    <input
                      type="email"
                      id="parentEmail"
                      name="parent_email_address"
                      value={formData.parent_email_address}
                      onChange={handleChange}
                      className="mt-1 p-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Enter parent's email"
                    />
                    {errors.parent_email_address && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.parent_email_address}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="studentMobile"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Student Mobile No.
                    </label>
                    <input
                      type="tel"
                      id="studentMobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="mt-1 p-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Enter 10-digit mobile number"
                    />
                    {errors.mobile && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.mobile}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="mt-1 p-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Enter state"
                    />
                    {errors.state && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.state}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="mt-1 p-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Enter city"
                    />
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="class"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Class
                    </label>
                    <select
                      id="class"
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className="mt-1  p-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
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
                    {errors.class && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.class}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out transform hover:scale-105"
                >
                  {loading ? <div className="loader"></div> : "Submit"}
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full h-64 md:h-96 bg-gray-300 mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.521571144797!2d78.05832377492838!3d27.855244218953768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a39c30eca7ff%3A0x220038272b28523d!2sGD%20Goenka%20Public%20School%20Aligarh!5e0!3m2!1sen!2sin!4v1734762838109!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <style>{`
        .loader {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid #fff;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          animation: spin 1s linear infinite;
          margin: 0 auto;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Layout>
  );
};

export default ContactForm;
