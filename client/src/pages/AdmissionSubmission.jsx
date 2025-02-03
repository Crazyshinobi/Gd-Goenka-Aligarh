import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AdmissionSubmission = () => {
  const navigate = useNavigate();
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const [confettiCount] = useState(30);
  const [showTip, setShowTip] = useState(true);

  const confetti = [...Array(confettiCount)].map((_, i) => ({
    x: Math.random() * 100 - 50,
    y: -(Math.random() * 50 + 50),
    rotation: Math.random() * 360,
    color: ['#FF69B4', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C'][Math.floor(Math.random() * 5)],
    key: i,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4 overflow-hidden">
      {/* Floating Confetti */}
      {confetti.map((piece) => (
        <motion.div
          key={piece.key}
          initial={{ 
            x: 0, 
            y: 0, 
            rotate: 0,
            scale: 0
          }}
          animate={{ 
            x: piece.x + 'vw', 
            y: piece.y + 'vh', 
            rotate: piece.rotation,
            scale: 1
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
          className="absolute w-3 h-3"
          style={{ backgroundColor: piece.color }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-auto text-center relative"
      >
        {/* Success Check Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mb-6"
          whileHover={{ rotate: 360 }}
        >
          <svg 
            className="w-20 h-20 mx-auto text-green-500"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </motion.div>

        {/* Main Content */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          Thank You for Applying!
        </motion.h1>

        {/* Interactive Email Message */}
        <motion.div
          onHoverStart={() => setIsEmailHovered(true)}
          onHoverEnd={() => setIsEmailHovered(false)}
          className="relative cursor-pointer mb-8"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600"
          >
            Please check your email for further instructions.
          </motion.p>
          
          <AnimatePresence>
            {isEmailHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute -bottom-12 left-0 right-0 bg-indigo-100 p-2 rounded-lg text-sm text-indigo-700"
              >
                We've sent detailed next steps to your registered email address
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/admission/application-form/login')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 w-full mb-4"
        >
          Back to Home
        </motion.button>

        {/* Helpful Tip */}
        <AnimatePresence>
          {showTip && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="relative"
            >
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800">
                <button 
                  onClick={() => setShowTip(false)}
                  className="absolute top-2 right-2 text-yellow-600 hover:text-yellow-800"
                >
                  ×
                </button>
                Tip: Keep an eye on your spam folder if you don't see our email within 5 minutes
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AdmissionSubmission;