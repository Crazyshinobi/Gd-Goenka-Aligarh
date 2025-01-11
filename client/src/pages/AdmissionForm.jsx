import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { usePostRequest } from "../hooks/usePostRequest";
import { Layout } from "../components/Layout";
import AdmissionBanner from "../assets/AdmissionBanner.jpeg";
import NavigationPages from "./NavigationPages";
import bgdesign from "../assets/bgdesign3.jpg";
import { useNavigate } from "react-router-dom";
import { setApplicationStatus, setFormStep } from "../utils/status";

const AdmissionForm = () => {
  document.title = "Admission -GDGPS Aligarh";
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    mobile: "",
    academic_year: "",
    board: "",
    grade: "",
  });
  const navigate = useNavigate();

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

    // Validate Name
    if (!formData.name) newErrors.name = "Name is required";

    // Validate Date of Birth
    if (!formData.dob) newErrors.dob = "Date of birth is required";

    // Validate Email
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    // Validate Mobile
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    // Validate Academic Year
    if (!formData.academic_year)
      newErrors.academic_year = "Academic year is required";

    // Validate Board
    if (!formData.board) newErrors.board = "Board is required";

    // Validate Grade
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
        //   setApplicationStatus(true);
        // setFormStep(1);
        // navigate("/student-application/general-information");
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
        <h1 className="absolute bottom-4 md:bottom-6 left-4 md:left-8 text-3xl md:text-5xl font-bold text-red-600 bg-white bg-opacity-80 px-4 py-2 rounded shadow-md">
          ADMISSION
        </h1>
        <img
          src={AdmissionBanner}
          alt="Admission Banner"
          className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] w-full object-cover"
        />
      </div>

      <NavigationPages />

      <div
        style={{
          backgroundImage: `url(${bgdesign})`,
        }}
      >
        <div className="w-full mx-auto  lg:flex-[66%] md:w-2/3 md:flex-1 p-6 my-6 md:p-8 bg-white rounded-lg shadow-lg border-2 border-red-500">
          <div className="mb-6 md:mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600">
              Registration Form
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Name */}
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
                  className="mt-1 p-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Enter full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Date of Birth */}
              <div>
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="mt-1 p-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                />
                {errors.dob && (
                  <p className="mt-1 text-sm text-red-600">{errors.dob}</p>
                )}
              </div>

              {/* Email */}
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
                  className="mt-1 p-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Mobile No */}
              <div>
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
                  className="mt-1 p-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Enter 10-digit mobile number"
                />
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
                )}
              </div>

              {/* Academic Year */}
              <div>
                <label
                  htmlFor="academicyear"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Academic Year
                </label>
                <select
                  id="academicyear"
                  name="academic_year"
                  value={formData.academic_year}
                  onChange={handleChange}
                  className="mt-1 p-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
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
                  <p className="mt-1 text-sm text-red-600">
                    {errors.academic_year}
                  </p>
                )}
              </div>

              {/* Board */}
              <div>
                <label
                  htmlFor="board"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Board
                </label>
                <input
                  type="text"
                  id="board"
                  name="board"
                  value={formData.board}
                  onChange={handleChange}
                  className="mt-1 p-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Enter your board"
                />
                {errors.board && (
                  <p className="mt-1 text-sm text-red-600">{errors.board}</p>
                )}
              </div>

              {/* Grade */}
              <div>
                <label
                  htmlFor="grade"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Class
                </label>
                <select
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  className="mt-1 p-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out transform hover:scale-105"
            >
              {loading ? <div className="loader2"></div> : "Apply now"}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .loader2 {
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
