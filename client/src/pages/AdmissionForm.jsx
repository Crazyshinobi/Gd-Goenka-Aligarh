import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Add useLocation
import { Layout } from "../components/Layout";
import AdmissionBanner from "../assets/AdmissionBanner.jpeg";
import NavigationPages from "./NavigationPages";
import bgdesign from "../assets/bgdesign3.jpg";
import AdmissionSideBanner from "../assets/AdmissionFormSideImg.png";
import { usePostRequest } from "../hooks/usePostRequest";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet";

const AdmissionForm = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  const [loading, setLoading] = useState(false);

  const admissionApi = usePostRequest(
    `${process.env.REACT_APP_BASE_URL}/api/v1/admission-application/admission-form/0`
  );
  const loginApi = usePostRequest(
    `${process.env.REACT_APP_BASE_URL}/api/v1/user/login`
  );

  const [isLogin, setIsLogin] = useState(false); // State to toggle between login and register forms
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    dob: "",
    email: "",
    mobile: "",
    grade: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Sync the isLogin state with the current URL
  useEffect(() => {
    if (location.pathname === "/admission/application-form/login") {
      setIsLogin(true); // Show the login form
    } else {
      setIsLogin(false); // Show the registration form
    }
  }, [location.pathname]); // Re-run this effect when the URL changes

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (RegistervalidateForm()) {
      setLoading(true);

      try {
        window.gtag("event", "conversion", {
          send_to: "AW-11435073187/mTffCPbYoYwaEKO91cwq",
          value: 1.0,
          currency: "INR",
        });

        // Submit admission form
        const admissionResponse = await admissionApi.postRequest(formData);

        if (admissionResponse?.success) {
          setFormData({
            name: "",
            dob: "",
            email: "",
            mobile: "",
            grade: "",
          });

          toast.success("Application submitted successfully!");
          navigate("/admission/application-submission");
        } else {
          toast.error("Admission submission failed!");
        }
      } catch (error) {
        console.error("Error in form submission:", error);
        toast.error("An error occurred. Please try again later.");
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Please fill in all required fields correctly.");
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    // console.log("Login form submitted");

    if (LoginValidateForm()) {
      setLoading(true);
      // console.log("Form validated successfully");
      try {
        const response = await loginApi.postRequest(loginData);
        if (response?.success && response?.userToken) {
          // console.log("Login successful, setting token in cookies");
          Cookies.set("userToken", response.userToken, {
            expires: 1,
            secure: true,
            sameSite: "Strict",
          });
          Cookies.set("userId", response.userID, {
            expires: 1,
            secure: true,
            sameSite: "Strict",
          });

          if (response.name) {
            localStorage.setItem("studentname", response.name);
          }

          // Transfer temporary form data to user-specific storage
          const tempActiveStep = sessionStorage.getItem("tempActiveStep");
          const tempCompletedSteps =
            sessionStorage.getItem("tempCompletedSteps");
          const tempFormData = sessionStorage.getItem("tempFormData");

          if (tempActiveStep && tempCompletedSteps && tempFormData) {
            localStorage.setItem(
              `activeStep_${response.userID}`,
              tempActiveStep
            );
            localStorage.setItem(
              `completedSteps_${response.userID}`,
              tempCompletedSteps
            );
            localStorage.setItem(`formData_${response.userID}`, tempFormData);

            // Clear temporary data
            sessionStorage.removeItem("tempActiveStep");
            sessionStorage.removeItem("tempCompletedSteps");
            sessionStorage.removeItem("tempFormData");
          } else {
            // No temporary data, mark as a new user
            localStorage.setItem(`isNewUser_${response.userID}`, "true");
          }

          toast.success("Login successful");
          setTimeout(() => {
            navigate(`/user/dashboard/`);
          }, 1000);
        } else {
          toast.error("Login failed");
        }
      } catch (error) {
        console.error("Login error:", error);
        toast.error("An error occurred. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
  };

  const RegistervalidateForm = () => {
    let newErrors = {};
    if (!formData.full_name.trim()) newErrors.full_name = "Name is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }
    if (!formData.academic_year)
      newErrors.academic_year = "Academic year is required";
    if (!formData.grade) newErrors.grade = "Class is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const LoginValidateForm = () => {
    let newErrors = {};
    if (!loginData.email) newErrors.email = "Username or email is required";
    if (!loginData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleToggleForm = (isLogin) => {
    setIsLogin(isLogin);
    if (isLogin) {
      navigate("/admission/application-form/login"); // Navigate to login route
    } else {
      navigate("/admission/application-form"); // Navigate back to the main form
    }
  };

  return (
    <Layout>
      <Toaster />
      <Helmet>
        <title>Admission Form - GD Goenka Public School Aligarh</title>
        <meta name="description" content="Apply online to GD Goenka Public School Aligarh. Complete the admission form easily and take the first step toward a quality education." />
      </Helmet>

      <div className="relative bgImage">
        <motion.img
          src={AdmissionBanner}
          alt="Admission Banner"
          className="h-[35vh] md:h-[40vh] lg:h-[55vh] w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="absolute uppercase bottom-4 md:bottom-6 left-4 md:left-8 text-3xl md:text-5xl font-bold text-[#bea05a] bg-white bg-opacity-80 px-4 py-2 rounded shadow-md"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Admission
        </motion.h1>
      </div>

      <NavigationPages />

      <div
        className="min-h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 md:p-8 font-polymath"
        style={{
          backgroundImage: `url(${bgdesign})`,
        }}
      >
        <div className="w-full max-w-7xl bg-opacity-90 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full lg:flex-[60%] md:flex-1 md:w-1/3 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col justify-center">
              <img src={AdmissionSideBanner} alt="Admission Side Banner" />
            </div>

            <div className="w-full lg:flex-[55%] md:w-2/3 md:flex-1 p-6 md:p-8 bg-white rounded-lg shadow-lg border-2 border-[#bea05a]">
              <div className="mb-6 md:mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#bea05a]">
                  {isLogin ? "Login" : "Admission Form"}
                </h2>
                <p className="text-center text-gray-600 mt-2">
                  {isLogin
                    ? "Login to your account"
                    : "Fill out the form below to apply for admission"}
                </p>
              </div>

              <div className="flex justify-center space-x-6 mb-6">
                <button
                  onClick={() => handleToggleForm(false)} // Navigate to the main form
                  className={`py-2 px-4 text-sm font-medium ${
                    !isLogin
                      ? "bg-[#2a3c7e] text-white"
                      : "bg-gray-200 text-gray-700"
                  } rounded-md`}
                >
                  Register
                </button>
                <button
                  onClick={() => handleToggleForm(true)} // Navigate to the login route
                  className={`py-2 px-4 text-sm font-medium ${
                    isLogin
                      ? "bg-[#2a3c7e] text-white"
                      : "bg-gray-200 text-gray-700"
                  } rounded-md`}
                >
                  Login
                </button>
              </div>

              {isLogin ? (
                <form
                  onSubmit={handleLoginSubmit}
                  className="space-y-6 md:space-y-8"
                >
                  {/* Login form fields */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email or Username
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={loginData.email}
                      onChange={(e) =>
                        setLoginData({
                          ...loginData,
                          email: e.target.value,
                        })
                      }
                      className="mt-1 p-3 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Enter email or username"
                    />
                    {errors.email && (
                       <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={loginData.password}
                        onChange={(e) =>
                          setLoginData({
                            ...loginData,
                            password: e.target.value,
                          })
                        }
                        className="mt-1 p-3 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-[50%] transform -translate-y-[50%] text-gray-600 focus:outline-none"
                      >
                        {showPassword ? (
                          <span>
                            <svg
                              className="w-4 h-4 lg:w-6 lg:h-6 text-gray-800"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="2"
                                d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                              />
                              <path
                                stroke="currentColor"
                                strokeWidth="2"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                            </svg>
                          </span>
                        ) : (
                          <span>
                            <svg
                              className="w-4 h-4 lg:w-6 lg:h-6 text-gray-800"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                            </svg>
                          </span>
                        )}
                      </button>
                      {errors.password && (
                         <p className="mt-1 text-sm text-red-600">
                          {errors.password}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-span-12">
                    <div className="flex justify-end">
                      <Link to="/user/forgot-password">
                        <p className="text-black hover:underline text-xs md:text-sm lg:text-lg">
                          Forgot Password?
                        </p>
                      </Link>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2a3c7e] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
                  >
                    {loading ? <div className="loader"></div> : "Login"}
                  </button>
                </form>
              ) : (
                <form
                  onSubmit={handleRegisterSubmit}
                  className="space-y-6 md:space-y-8"
                >
                  {/* Registration form fields */}
                  <div className="grid grid-cols-1 gap-4 md:gap-6">
                    <div>
                      <label
                        htmlFor="full_name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Student Name
                      </label>
                      <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleRegisterChange}
                        className="mt-1 p-3 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                        placeholder="Enter Student full name"
                      />
                      {errors.full_name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.full_name}
                        </p>
                      )}
                    </div>
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
                        onChange={handleRegisterChange}
                        className="mt-1 p-3 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      />
                      {errors.dob && (
                         <p className="mt-1 text-sm text-red-600">
                          {errors.dob}
                        </p>
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
                        onChange={handleRegisterChange}
                        className="mt-1 p-3 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                         <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

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
                        onChange={handleRegisterChange}
                        className="mt-1 p-3 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
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
                        htmlFor="academic_year"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Academic Year
                      </label>
                      <select
                        id="academic_year"
                        name="academic_year"
                        value={formData.academic_year}
                        onChange={handleRegisterChange}
                        className="mt-1 p-3 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      >
                        <option value="">Select academic year</option>
                        <option value="2025">2025-26</option>
                      </select>
                      {errors.academic_year && (
                         <p className="mt-1 text-sm text-red-600">
                          {errors.academic_year}
                        </p>
                      )}
                    </div>

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
                        onChange={handleRegisterChange}
                        className="mt-1 p-3 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      >
                        <option value="">Select Class</option>
                        <option value="Nursery">Nursery</option>
                        <option value="LKG">LKG</option>
                        <option value="UKG">UKG</option>
                        <option value="Class I">Class I</option>
                        <option value="Class II">Class II</option>
                        <option value="Class III">Class III</option>
                        <option value="Class IV">Class IV</option>
                        <option value="Class V">Class V</option>
                        <option value="Class VI">Class VI</option>
                        <option value="Class VII">Class VII</option>
                        <option value="Class VIII">Class VIII</option>
                        <option value="Class IX">Class IX</option>
                        <option value="Class X">Class X</option>
                        <option value="Class XI">Class XI</option>
                        <option value="Class XII">Class XII</option>
                      </select>
                      {errors.grade && (
                         <p className="mt-1 text-sm text-red-600">
                          {errors.grade}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2a3c7e] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#bea05a] transition duration-150 ease-in-out"
                  >
                    {loading ? <div className="loader"></div> : "Apply now"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`.loader {
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
        }`}</style>
    </Layout>
  );
};

export default AdmissionForm;
