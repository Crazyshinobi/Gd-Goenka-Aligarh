// utils/status.js

export const setApplicationStatus = (status) => {
    localStorage.setItem('applicationSubmitted', status);  // Track if the application was submitted
  };
  
  export const getApplicationStatus = () => {
    return localStorage.getItem('applicationSubmitted') === 'true';  // Check if application is submitted
  };
  
  export const setFormStep = (step) => {
    localStorage.setItem('formStep', step);  // Track the current form step
  };
  
  export const getFormStep = () => {
    return parseInt(localStorage.getItem('formStep')) || 1;  // Return the current form step, default to 1 if not set
  };
  