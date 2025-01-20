import React, { useEffect, useRef } from "react";
import { UserLayout } from "../components/UserLayout";
import { useForm } from "./FormContext";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import Confetti from "react-confetti"; // For confetti animation

export const SuccessPage = () => {
  const { formData } = useForm(); // Access the form data from the context
  const navigate = useNavigate();
  const controls = useAnimation(); // Framer Motion controls for animations
  const successRef = useRef(null); // Ref for the success message
  const buttonRef = useRef(null); // Ref for the buttons

  // GSAP Animation on component mount
  useEffect(() => {
    // Animate the success message
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    });

    // Animate the buttons
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5, ease: "easeOut" },
    });
  }, [controls]);

  // Function to navigate back to the home page
  const goToHomePage = () => {
    navigate("/user/dashboard");
  };

  // Function to display the submitted form data
  const displayFormData = () => {
    alert(JSON.stringify(formData, null, 2)); // Display form data in a readable format
  };

  return (
    <>
      <UserLayout />
      <div className="lg:p-6 sm:ml-64 dark:bg-gray-800 min-h-screen">
        {/* Confetti Animation */}
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false} // Stop confetti after a few seconds
          numberOfPieces={500} // Number of confetti pieces
        />

        <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white mt-14 bg-white dark:bg-gray-700 shadow-lg">
          {/* Success Message */}
          <motion.div
            ref={successRef}
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            className="text-center space-y-4"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Form Submitted Successfully!
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Thank you for submitting the form. Your information has been
              successfully recorded.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            ref={buttonRef}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            className="flex flex-col items-center space-y-4 mt-8"
          >
            {/* Display Submitted Data Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={displayFormData}
              className="w-full max-w-xs bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-transform"
            >
              View Submitted Data
            </motion.button>

            {/* Go to Home Page Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goToHomePage}
              className="w-full max-w-xs bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-transform"
            >
              Go to Home Page
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
};