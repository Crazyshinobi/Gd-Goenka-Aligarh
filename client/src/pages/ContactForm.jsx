import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import NavigationPages from "./NavigationPages";
import ContactBanner from "../assets/ContactUsBanner.jpeg";
import { motion } from "framer-motion";
import bgdesign from "../assets/bgdesign3.jpg";
import toast, { Toaster } from "react-hot-toast";
import { usePostRequest } from "../hooks/usePostRequest";
import { Helmet } from "react-helmet";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
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
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email Address is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.mobile)
      newErrors.mobile = "Student mobile number is required";
    else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Invalid mobile number";
    }
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/contact/`;

  const { postRequest, error } = usePostRequest(apiURL);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      try {
        console.log("Sending data:", formData);
        const response = await postRequest(formData);
        console.log("Response from backend:", response);
        if (response && response.success) {
          setFormData({ name: "", email: "", mobile: "", message: "" });
          toast.success("Form submitted successfully");
        } else {
          toast.error(response?.message || "Failed to submit the form.");
        }
      } catch (err) {
        console.error("Submit error:", err);
        toast.error("An error occurred during submission.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Layout>
      <Toaster />
      <Helmet>
        <title>Contact Us - GD Goenka Public School Aligarh</title>
        <meta
          name="description"
          content="Get in touch with GD Goenka Public School Aligarh through our easy-to-use contact form."
        />
      </Helmet>

      <div className="relative bgImage">
        <motion.img
          src={ContactBanner}
          alt="Contact Us Banner"
          className="md:h-[40vh] lg:h-[55vh] w-full h-[26vh] object-fill"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="absolute uppercase bottom-4 md:bottom-6 left-4 md:left-8 text-xl md:text-5xl font-bold text-[#2a3c7e] bg-white bg-opacity-80 px-4 py-2 rounded shadow-md"
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
            <div className="w-full lg:flex-[40%] md:flex-1 md:w-1/3 bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2a3c7e] mb-6">
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
                <div className="flex items-center space-x-4  transition duration-300 ease-in-out transform hover:scale-105">
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
                  <span className="text-base flex flex-col  md:text-lg font-medium">
                  <div className="hover:text-blue-600">
                      <a href="mailto:admission@gdgpsaligarh.com" >
                      admission@gdgpsaligarh.com
                    </a>
                  </div>
                   
                    

                   
                    
                  </span>

                  
                </div>


                 <div className="flex items-center space-x-4  transition duration-300 ease-in-out transform hover:scale-105">
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
              
                   <span className="text-base flex flex-col  md:text-lg font-medium">
                     <div className="hover:text-blue-600">
                       <a href="mailto:hr@gdgpsaligarh.com">
                      For Jobs(Send Cv): hr@gdgpsaligarh.com
                    </a>
                    </div>
                  </span>
                  
                </div>
 





              </div>
            </div>

            {/* Registration Form */}
            <div className="w-full lg:flex-[60%] md:w-2/3 md:flex-1 p-6 md:p-8 bg-white rounded-lg shadow-lg border-2 border-[#bea05a]">
              <div className="mb-6 md:mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2a3c7e]">
                  Get In Touch
                </h2>
                <p className="text-center text-gray-600 mt-2">
                  Drop us your details for a quick response
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* First row: Name and Email */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 p-2 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 p-2 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Second row: Mobile number */}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="mobile"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mobile No.
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="mt-1 p-2 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Enter 10-digit mobile number"
                    />
                    {errors.mobile && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.mobile}
                      </p>
                    )}
                  </div>

                  {/* Third row: Message */}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 p-2 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Enter your message"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#bea05a] hover:bg-[#bea05a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out transform hover:scale-105"
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
