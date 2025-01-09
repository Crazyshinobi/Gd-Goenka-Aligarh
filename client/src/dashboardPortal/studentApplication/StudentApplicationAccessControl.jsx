// dashboard/studentApplication/StudentApplicationAccessControl.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getApplicationStatus, getFormStep } from "../../utils/status";  // Import status functions

const StudentApplicationAccessControl = ({ children }) => {
  const navigate = useNavigate();
  const applicationSubmitted = getApplicationStatus();  // Check if the application has been submitted
  const currentStep = getFormStep();  // Get the current form step

  useEffect(() => {
    // If the user hasn't submitted the application form, redirect to the admission form
    if (!applicationSubmitted) {
      navigate("/admission/application-form");  // Assuming '/form' is the route for the admission form
    }

    // If the user is trying to access a form out of sequence, redirect to the appropriate form
    if (currentStep < 1) {
      navigate("/student-application/general-information");  // Redirect to the admission form if not authorized to access
    }
  }, [applicationSubmitted, currentStep, navigate]);

  return <>{children}</>;  // Render the children (form) if the user has access
};

export default StudentApplicationAccessControl;
