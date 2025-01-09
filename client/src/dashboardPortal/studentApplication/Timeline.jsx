// Timeline.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Timeline = () => {
  const location = useLocation();
  const currentStep = location.pathname;

  const steps = [
    { path: "/form1", label: "Step 1" },
    { path: "/form2", label: "Step 2" },
    { path: "/form3", label: "Step 3" },
    { path: "/form4", label: "Step 4" },
    { path: "/form5", label: "Step 5" },
  ];

  return (
    <div className="flex justify-center items-center mb-8">
      <div className="relative flex space-x-8">
        <div className="absolute w-full h-1 bg-gray-300 top-1/2" />
        {steps.map((step, index) => {
          const isActive = currentStep === step.path;
          const isCompleted = index < steps.findIndex(s => s.path === currentStep);
          return (
            <div key={index} className="relative flex items-center">
              <Link
                to={step.path}
                className={`h-8 w-8 rounded-full flex items-center justify-center border-2 ${
                  isActive
                    ? "bg-blue-500 border-blue-500 text-white"
                    : isCompleted
                    ? "bg-green-500 border-green-500 text-white"
                    : "bg-gray-300 border-gray-300"
                }`}
              >
                {index + 1}
              </Link>
              {index < steps.length - 1 && (
                <div
                  className={`w-8 h-1 absolute top-1/2 transform -translate-y-1/2 ${
                    isCompleted ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
