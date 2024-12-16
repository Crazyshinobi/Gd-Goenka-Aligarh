import React, { useState } from "react";
import adminBg from "../../assets/adminBg.jpg";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import OtpInput from "react-otp-input";
import { Button } from "../../components/Button";
import greentick from "../../assets/greentick.jpg";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [step, setStep] = useState("email"); // Track current step (email, otp, reset)

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
          <>
            <h3 className="text-3xl text-center py-5">Forgot your password?</h3>
            <p className="text-center text-black">
              No worries! Simply enter your email address below to receive an
              OTP.
            </p>
            <form onSubmit={handleEmailSubmit}>
              <div className="grid sm:grid-cols-12 gap-10 m-10">
                <div className="col-span-12">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                    required
                  />
                </div>
                <div className="col-span-12">
                  <Button name="Send OTP" loading={loading} />
                </div>
                <div className="col-span-12 flex justify-start">
                  <Link to="/admin">
                    <p className="hover:underline">Back</p>
                  </Link>
                </div>
              </div>
            </form>
          </>
        );
      case "otp":
        return (
          <>
            <h3 className="text-3xl text-center py-5">Verify OTP</h3>
            <p className="text-center text-black mb-5">
              Enter the OTP sent to your email address below to reset your
              password.
            </p>
            <form onSubmit={handleOtpSubmit}>
              <div className="grid sm:grid-cols-12 gap-10 m-10">
                <div className="col-span-12 flex justify-center mb-5">
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderInput={(props) => (
                      <input
                        {...props}
                        className="w-12 h-12 mx-2 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{ fontSize: "24px" }}
                      />
                    )}
                  />
                </div>
                <div className="col-span-12">
                  <Button name="Verify OTP" loading={loading} />
                </div>
                <div className="col-span-12 flex justify-start">
                  <Link to="/admin">
                    <p className="hover:underline">Back</p>
                  </Link>
                </div>
              </div>
            </form>
          </>
        );
      case "reset":
        return (
          <>
            <h3 className="text-3xl text-center py-5">Reset Password</h3>
            <p className="text-center text-black">
              Please enter your new password below to secure your account.
            </p>
            <form onSubmit={handleResetSubmit}>
              <div className="grid sm:grid-cols-12 gap-5 m-10">
                <div className="col-span-12">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Enter Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                      required
                    />
                    {/* Show/Hide Password Button */}
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)} // Toggle show/hide password
                      className="absolute right-2 top-[50%] transform -translate-y-[50%] text-gray-600 focus:outline-none"
                    >
                      {showPassword ? (
                        <span>
                          <svg
                            class="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-width="2"
                              d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                            />
                            <path
                              stroke="currentColor"
                              stroke-width="2"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </span> // Eye icon for showing password
                      ) : (
                        <span>
                          <svg
                            class="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </span> // Eye with a slash for hiding password
                      )}
                    </button>
                  </div>
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                      required
                    />
                    {/* Show/Hide Password Button */}
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle show/hide password
                      className="absolute right-2 top-[50%] transform -translate-y-[50%] text-gray-600 focus:outline-none"
                    >
                      {showPassword ? (
                        <span>
                          <svg
                            class="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-width="2"
                              d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                            />
                            <path
                              stroke="currentColor"
                              stroke-width="2"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </span> // Eye icon for showing password
                      ) : (
                        <span>
                          <svg
                            class="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </span> // Eye with a slash for hiding password
                      )}
                    </button>
                  </div>
                </div>
                <div className="col-span-12">
                  <Button name="Reset Password" loading={loading} />
                </div>
              </div>
            </form>
          </>
        );
      case "success":
        return (
          <div className="flex flex-col items-center justify-center gap-6 h-full">
            <img
              src={greentick}
              alt="Success"
              className="h-[100px] w-[100px]"
            />
            <h3 className="text-2xl text-center py-3">
              Password changed successfully!
            </h3>
            <p className="text-center text-black">
              Your password has been changed successfully.
            </p>
            <Link to="/admin">
              <Button name="Back to Login" loading={false} />
            </Link>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Toaster />
      <div
        className="h-screen flex justify-center items-center"
        style={{ background: `url(${adminBg}) no-repeat top / cover` }}
      >
        <div className="bg-white h-[60vh] w-[40%] rounded-xl flex flex-col justify-around">
          {renderForm()}
        </div>
      </div>
    </>
  );
};
