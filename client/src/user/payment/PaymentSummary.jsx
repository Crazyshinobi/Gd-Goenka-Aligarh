import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UserLayout } from "../components/UserLayout";
import { FaSchool, FaMoneyBillWave, FaWallet, FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const PaymentSummary = () => {
  const [admission, setAdmission] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    txnid: "",
    amount: "",
    name: "",
    email: "",
    phone: "",
    productinfo: "",
    udf1: "",
    udf2: "",
    udf3: "",
    udf4: "",
    udf5: "",
    udf6: "",
    udf7: "",
    udf8: "",
    udf9: "",
    udf10: "",
    surl: `${process.env.REACT_APP_BASE_URL}/api/v1/payment/response`,
    furl: `${process.env.REACT_APP_BASE_URL}/api/v1/payment/response`,
  });
  const navigate = useNavigate();

  const handleGoToPayment = async () => {
    setLoading(true);
    const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/payment/initiate_payment`;
    try {
      const response = await axios.post(apiURL, formData);
      if (response?.data?.url) {
        window.location.href = response.data.url;
      } else {
        navigate("/payment-failure");
      }
    } catch (error) {
      console.error("Payment initiation failed:", error);
      navigate("/payment-failure");
    } finally {
      setLoading(false);
    }
  };

  const fetchDetails = async () => {
    const user = Cookies.get("userId");
    const apiUrl = `${process.env.REACT_APP_BASE_URL}/api/v1/admission-application/get-admission-form/7`;
    try {
      const response = await axios.post(apiUrl, { user });
      if (response?.data?.success) {
        setAdmission(response.data.admission);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error fetching admission details:", error);
    }
  };

  // Update formData when admission changes
  useEffect(() => {
    if (admission?.personal_details) {
      setFormData((prevData) => ({
        ...prevData,
        name: `${admission.personal_details.first_name} ${admission.personal_details.last_name}`,
        email: admission.personal_details.email,
        phone: admission.personal_details.mobile.toString(),
        productinfo: admission.general_information.grade,
      }));
    }
  }, [admission]);

  // Fetch admission details on component mount
  useEffect(() => {
    fetchDetails();
  }, []);

  let registrationFees, admissionFees;

  if (
    admission?.general_information?.grade === "Nursery" ||
    admission?.general_information?.grade === "LKG" ||
    admission?.general_information?.grade === "UKG" ||
    admission?.general_information?.grade === "Class I" ||
    admission?.general_information?.grade === "Class II" ||
    admission?.general_information?.grade === "Class III" ||
    admission?.general_information?.grade === "Class IV" ||
    admission?.general_information?.grade === "Class V"
  ) {
    registrationFees = 500.0;
    admissionFees = 10000.0;
  } else if (
    admission?.general_information?.grade === "Class VI" ||
    admission?.general_information?.grade === "Class VII" ||
    admission?.general_information?.grade === "Class VIII"
  ) {
    registrationFees = 750.0;
    admissionFees = 10000.0;
  } else if (
    admission?.general_information?.grade === "Class IX" ||
    admission?.general_information?.grade === "Class X"
  ) {
    registrationFees = 1000.0;
    admissionFees = 12500.0;
  } else {
    registrationFees = 1250.0;
    admissionFees = 12500.0;
  }

  const totalFees = registrationFees + admissionFees;

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" },
    tap: { scale: 0.95 },
  };

  return (
    <>
      <UserLayout />
      <div className="lg:p-6 sm:ml-64 dark:bg-gray-900 min-h-screen">
        <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6 dark:from-gray-800 dark:to-gray-900">
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full dark:bg-gray-800 border-2 border-transparent hover:border-gradient relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            style={{
              background: "linear-gradient(145deg, #ffffff, #f9fafb)",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Header */}
            <motion.h1
              className="text-3xl font-bold text-gray-800 mb-6 text-center dark:text-black"
              variants={itemVariants}
            >
              Payment Summary
            </motion.h1>

            {/* Grade Field */}
            <motion.div
              className="mb-6 flex items-center space-x-4"
              variants={itemVariants}
            >
              <FaSchool className="text-2xl text-blue-600 dark:text-blue-400" />
              <div className="flex-1">
                <span className="text-gray-600 text-lg dark:text-black">
                  Grade
                </span>
                <span className="text-gray-800 font-semibold text-lg dark:text-black block">
                  {admission?.general_information?.grade}
                </span>
              </div>
            </motion.div>

            {/* Registration Fees */}
            <motion.div
              className="mb-6 flex items-center space-x-4"
              variants={itemVariants}
            >
              <FaMoneyBillWave className="text-2xl text-purple-600 dark:text-purple-400" />
              <div className="flex-1">
                <span className="text-gray-600 text-lg dark:text-black">
                  Registration Fees
                </span>
                <span className="text-gray-800 font-semibold text-lg dark:text-black block">
                  ₹{registrationFees.toLocaleString()}
                </span>
              </div>
            </motion.div>

            {/* Admission Fees */}
            <motion.div
              className="mb-6 flex items-center space-x-4"
              variants={itemVariants}
            >
              <FaMoneyBillWave className="text-2xl text-green-600 dark:text-green-400" />
              <div className="flex-1">
                <span className="text-gray-600 text-lg dark:dark:text-black">
                  Admission Fees
                </span>
                <span className="text-gray-800 font-semibold text-lg dark:text-black block">
                  ₹{admissionFees.toLocaleString()}
                </span>
              </div>
            </motion.div>

            {/* Total Fees */}
            <motion.div
              className="mb-6 flex items-center space-x-4"
              variants={itemVariants}
            >
              <FaWallet className="text-2xl text-orange-600 dark:text-orange-400" />
              <div className="flex-1">
                <span className="text-gray-600 text-lg dark:text-black">
                  Total Fees
                </span>
                <span className="text-blue-600 font-bold text-2xl dark:text-blue-400 block">
                  ₹{totalFees.toLocaleString()}
                </span>
              </div>
            </motion.div>

            {/* Payment Button */}
            <motion.div className="mt-8" variants={itemVariants}>
              <motion.button
                className={`w-full py-3 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                }`}
                variants={buttonVariants}
                whileHover={!loading && "hover"}
                whileTap={!loading && "tap"}
                onClick={!loading ? handleGoToPayment : null}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  <>
                    <FaWallet className="mr-2" />
                    Proceed to Payment
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PaymentSummary;