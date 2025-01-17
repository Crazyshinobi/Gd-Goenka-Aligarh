import React from "react";
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";

const Timeline = ({ currentStep }) => {
  return (
    <div className="flex justify-center mt-8">
      <div className="relative flex items-center space-x-8">
        {[0, 1, 2, 3, 4].map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                currentStep > step ? "bg-green-500" : "bg-blue-500"
              }`}
            >
              {currentStep > step ? (
                <FaCheckCircle className="text-white" />
              ) : (
                <FaRegCircle className="text-white" />
              )}
            </div>
            {step < 4 && <div className="w-16 h-1 bg-gray-300"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
