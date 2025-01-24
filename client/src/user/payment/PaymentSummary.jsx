import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserLayout } from "../components/UserLayout";
import { FaSchool, FaMoneyBillWave, FaWallet } from "react-icons/fa";

const PaymentSummary = () => {
  // Dummy data for fees
  const registrationFees = 5000;
  const admissionFees = 10000;
  const totalFees = registrationFees + admissionFees;
  const grade = "Grade 10"; // Example grade

  // State for confetti animation

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

  // Handle payment submission
  const handlePayment = () => {
  
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
                  {grade}
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
            <motion.div
              className="mt-8"
              variants={itemVariants}
            >
              <motion.button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={handlePayment}
              >
                <FaWallet className="mr-2" />
                Proceed to Payment
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PaymentSummary;