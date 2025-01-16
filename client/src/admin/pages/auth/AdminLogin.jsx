import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import adminBg from "../../assets/adminBg.jpg";
import { Button } from "../../components/Button";

export const AdminLogin = () => {
  document.title = "Admin Login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/admin/login`;
    try {
      const response = await axios.post(apiURL, { email, password });
      if (response.data.success ) {
        localStorage.setItem("username", response?.data?.name);
        Cookies.set("token", response.data.token, {
          expires: 1,
          secure: true,
          sameSite: "Strict",
        });
        navigate("/admin/dashboard");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again!");
      }
      setEmail("");
      setPassword("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div
        className="h-screen flex justify-center items-center"
        style={{
          background: `url(${adminBg}) no-repeat top / cover`,
        }}
      >
        <div className="bg-white h-auto w-[90%] md:w-[60%] lg:w-[40%] rounded-xl">
          <form onSubmit={handleLogin}>
            <div className="grid sm:grid-cols-12 gap-3 lg:gap-5 m-5 lg:mx-8 lg:my-5 ">
              <div className="col-span-12 ">
                <h3 className="text-black text-lg md:text-xl lg:text-3xl text-center lg:py-3">
                  Admin Login
                </h3>
                <p className="text-xs md:text-sm lg:text-lg text-center dark:text-black text-black py-3">
                  Welcome back! Unlock the power of administrative controls.
                </p>
              </div>

              <div className="col-span-12">
                <label
                  htmlFor="email"
                  className="block mb-2 text-xs md:text-sm lg:text-sm font-medium text-gray-900"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2 lg:p-2.5"
                  required
                />
              </div>

              
              <div className="col-span-12">
                <label
                  htmlFor="password"
                  className="block mb-2 text-xs md:text-sm lg:text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"} // Toggle between text and password
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2 lg:p-2.5"
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
                      </span> // Eye icon for showing password
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
                      </span> // Eye with a slash for hiding password
                    )}
                  </button>
                </div>
              </div>
              <div className="col-span-12">
                <Button name="Login" loading={loading} />
              </div>
              <div className="col-span-12">
                <div className="flex justify-end">
                  <Link to="/admin/forgot-password">
                    <p className="text-black hover:underline text-xs md:text-sm lg:text-lg">
                      Forgot Password?
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
