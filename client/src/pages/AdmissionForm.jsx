import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { usePostRequest } from "../hooks/usePostRequest";
import { Layout } from "../components/Layout";
import AdmissionBanner from "../assets/AdmissionBanner.jpeg";
import NavigationPages from "./NavigationPages";
import bgdesign from "../assets/bgdesign3.jpg";
import AdmissionSideBanner from '../assets/AdmissionFormSideImg.png'

const AdmissionForm = () => {
  document.title = "Admission - GDGPS Aligarh";

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    mobile: "",
    academic_year: "",
    board: "",
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
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }
    if (!formData.academic_year) newErrors.academic_year = "Academic year is required";
    if (!formData.board) newErrors.board = "Board is required";
    if (!formData.grade) newErrors.grade = "Class is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/admission/`;

  const { postRequest, error } = usePostRequest(apiURL);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      const response = await postRequest(formData);

      if (response && response.success) {
        setFormData({
          name: "",
          dob: "",
          email: "",
          mobile: "",
          academic_year: "",
          board: "",
          grade: "",
        });
        setTimeout(() => {
          setLoading(false);
          toast.success("Form submitted successfully");
        });
      } else {
        toast.error("Failed to submit the form.");
        console.error("Error Submitting form:", error);
        setLoading(false);
      }
    }
  };

  return (
    <Layout>
      <Toaster />
      <div className="relative bgImage">
        <motion.img
          src={AdmissionBanner}
          alt="Admission Banner"
          className="h-[50vh] md:h-[40vh] lg:h-[55vh] w-full object-cover"
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
          Admission
        </motion.h1>
      </div>

      <NavigationPages />

      {/* ADMISSION FORM */}
      <div
        className="min-h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 md:p-8"
        style={{
          backgroundImage: `url(${bgdesign})`,
        }}
      >
        <div className="w-full max-w-7xl  bg-opacity-90  overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Admission Information */}
            <div className="w-full lg:flex-[60%] md:flex-1 md:w-1/3 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col justify-center">
             <img src={AdmissionSideBanner} alt="Admission Side Banner" />
            </div>

            {/* Registration Form */}
            <div className="w-full lg:flex-[55%] md:w-2/3 md:flex-1 p-6 md:p-8 bg-white rounded-lg shadow-lg border-2 border-red-500">
              <div className="mb-6 md:mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600">
                  Admission Form
                </h2>
                <p className="text-center text-gray-600 mt-2">
                  Fill out the form below to apply for admission
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 p-3 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Enter full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="mt-1 p-3 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                    />
                    {errors.dob && (
                      <p className="mt-1 text-sm text-red-600">{errors.dob}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 p-3 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile No.
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="mt-1 p-3 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Enter 10-digit mobile number"
                    />
                    {errors.mobile && (
                      <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="academic_year" className="block text-sm font-medium text-gray-700 mb-1">
                      Academic Year
                    </label>
                    <select
                      id="academic_year"
                      name="academic_year"
                      value={formData.academic_year}
                      onChange={handleChange}
                      className="mt-1 p-3 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                    >
                      <option value="">Select academic year</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                      <option value="2030">2030</option>
                    </select>
                    {errors.academic_year && (
                      <p className="mt-1 text-sm text-red-600">{errors.academic_year}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="board" className="block text-sm font-medium text-gray-700 mb-1">
                      Board
                    </label>
                    <input
                      type="text"
                      id="board"
                      name="board"
                      value={formData.board}
                      onChange={handleChange}
                      className="mt-1 p-3 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Enter board name"
                    />
                    {errors.board && (
                      <p className="mt-1 text-sm text-red-600">{errors.board}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">
                      Class
                    </label>
                    <select
                      id="grade"
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className="mt-1 p-3 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
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
                      <p className="mt-1 text-sm text-red-600">{errors.grade}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out transform hover:scale-105"
                >
                  {loading ? <div className="loader"></div> : "Submit Application"}
                </button>
              </form>
            </div>
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

export default AdmissionForm;

