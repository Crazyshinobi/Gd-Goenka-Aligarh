import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFormStep, isNewForm } from "../../utils/status";

const StudentApplicationAccessControl = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkApplicationStatus = () => {
      const savedFormData = localStorage.getItem("admissionFormData");
      const isNew = isNewForm();

      if (savedFormData) {
        if (isNew) {
          // New form submission, reset step and redirect to General Information
          sessionStorage.removeItem("isNewForm");
          navigate("/student-application/general-information");
        } else {
          // Redirect to the last saved step
          const currentStep = getFormStep();
          navigateToStep(currentStep);
        }
      } else {
        // No form data, redirect to admission form
        navigate("/admission");
      }
      setLoading(false);
    };

    checkApplicationStatus();
  }, [navigate]);

  const navigateToStep = (step) => {
    const routes = [
      "/student-application/general-information",
      "/student-application/personal-details",
      "/student-application/health-information",
      "/student-application/educational-background",
      "/student-application/parent-information",
      "/student-application/other-relatives",
    ];

    if (step >= 0 && step < routes.length) {
      navigate(routes[step]);
    } else {
      navigate("/admission");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default StudentApplicationAccessControl;