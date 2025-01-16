import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import OtpInput from "react-otp-input";
import greentick from "../../assets/greentick.png";
import { Button } from "../../admin/components/Button";
import { motion } from "framer-motion"; // For animations
import { gsap } from "gsap"; // For GSAP animations
import Confetti from "react-confetti"; // For confetti animation

export const UserForgotPassword = () => {
  document.title = "User - Forgot Password";
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [step, setStep] = useState("email");

  // GSAP Animation Ref
  const formRef = useRef(null);

  // GSAP Animation on Mount
  useEffect(() => {
    gsap.from(formRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/admin/forgot-password`,
        { email }
      );
      if (response.data.success) {
        setStep("otp");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/admin/verify-otp`,
        { email, otp }
      );
      if (response.data.success) {
        setStep("reset");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message || "Verification failed.");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Incorrect OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Both passwords must match");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/admin/reset-password`,
        { email, newPassword: password }
      );
      if (response.data.success) {
        setStep("success");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message || "Failed to reset password.");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const renderForm = () => {
    switch (step) {
      case "email":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleEmailSubmit}>
              <div className="grid sm:grid-cols-12 gap-5 lg:gap-10 m-5 lg:mx-8 lg:my-5">
                <div className="col-span-12">
                  <h3 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:py-3">
                    Forgot your password?
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-center text-gray-600 py-3">
                    No worries! Simply enter your email address below to receive
                    an OTP.
                  </p>
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm md:text-base lg:text-lg font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm md:text-base lg:text-lg rounded-lg w-full p-2.5 md:p-3 lg:p-3.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    required
                  />
                </div>
                <div className="col-span-12">
                  <Button name="Send OTP" loading={loading} />
                </div>
                <div className="col-span-12 flex justify-start">
                  <Link to="/admission/application-form/login">
                    <p className="text-blue-600 hover:underline text-sm md:text-base lg:text-lg">
                      Back to Login
                    </p>
                  </Link>
                </div>
              </div>
            </form>
          </motion.div>
        );
      case "otp":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleOtpSubmit}>
              <div className="grid sm:grid-cols-12 gap-5 lg:gap-10 m-5 lg:mx-8 lg:my-5">
                <div className="col-span-12">
                  <h3 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:py-3">
                    Verify OTP
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-center text-gray-600 py-3">
                    Enter the OTP sent to your email address below to reset your
                    password.
                  </p>
                </div>
                <div className="col-span-12 flex justify-center mb-5">
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderInput={(props) => (
                      <input
                        {...props}
                        className="h-12 w-12 lg:w-14 md:w-14 lg:h-14 mx-1 lg:mx-2 text-center border bg-white text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        style={{ fontSize: "24px" }}
                      />
                    )}
                  />
                </div>
                <div className="col-span-12">
                  <Button name="Verify OTP" loading={loading} />
                </div>
                <div className="col-span-12 flex justify-start">
                  <Link to="/admission/application-form/login">
                    <p className="text-blue-600 hover:underline text-sm md:text-base lg:text-lg">
                      Back to Login
                    </p>
                  </Link>
                </div>
              </div>
            </form>
          </motion.div>
        );
      case "reset":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleResetSubmit}>
              <div className="grid sm:grid-cols-12 gap-5 lg:gap-10 m-5 lg:mx-8 lg:my-5">
                <div className="col-span-12">
                  <h3 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:py-3">
                    Reset Password
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-center text-gray-600 py-3">
                    Please enter your new password below to secure your account.
                  </p>
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm md:text-base lg:text-lg font-medium text-gray-700"
                  >
                    Enter Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm md:text-base lg:text-lg rounded-lg w-full p-2.5 md:p-3 lg:p-3.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-[50%] transform -translate-y-[50%] text-gray-600 focus:outline-none"
                    >
                      {showPassword ? (
                        <span>
                          <svg
                            className="w-5 h-5 lg:w-6 lg:h-6 text-gray-800"
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
                            className="w-5 h-5 lg:w-6 lg:h-6 text-gray-800"
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
                  </div>
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm md:text-base lg:text-lg font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm md:text-base lg:text-lg rounded-lg w-full p-2.5 md:p-3 lg:p-3.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-[50%] transform -translate-y-[50%] text-gray-600 focus:outline-none"
                    >
                      {showConfirmPassword ? (
                        <span>
                          <svg
                            className="w-5 h-5 lg:w-6 lg:h-6 text-gray-800"
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
                            className="w-5 h-5 lg:w-6 lg:h-6 text-gray-800"
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
                  </div>
                </div>
                <div className="col-span-12">
                  <Button name="Reset Password" loading={loading} />
                </div>
              </div>
            </form>
          </motion.div>
        );
      case "success":
        return (
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-3 lg:gap-6 h-full py-3"
          >
            <Confetti width={window.innerWidth} height={window.innerHeight} /> 
            <motion.img
              src={greentick}
              alt="Success"
              className="h-[80px] w-[80px] lg:h-[100px] lg:w-[100px]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.h3
              className="text-black text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:py-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Password changed successfully!
            </motion.h3>
            <motion.p
              className="text-sm md:text-base lg:text-lg text-center text-gray-600 py-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Your password has been changed successfully.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link to="/admission/application-form/login">
                <Button name="Back to Login" loading={false} />
              </Link>
            </motion.div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Toaster />
      <div
        className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-50 to-purple-50"
      >
        <div
          ref={formRef}
          className="bg-white h-auto w-[90%] md:w-[60%] lg:w-[40%] rounded-xl shadow-2xl flex flex-col justify-around overflow-hidden"
        >
          {renderForm()}
        </div>
      </div>
    </>
  );
};