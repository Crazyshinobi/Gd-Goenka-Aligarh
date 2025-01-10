
export const setApplicationStatus = (status) => {
    localStorage.setItem('applicationSubmitted', status); 
  };
  
  export const getApplicationStatus = () => {
    return localStorage.getItem('applicationSubmitted') === 'true'; 
  };
  
  export const setFormStep = (step) => {
    localStorage.setItem('formStep', step);  
  };
  
  export const getFormStep = () => {
    return parseInt(localStorage.getItem('formStep')) || 1;  
  };
  