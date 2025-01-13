
export const setFormStep = (step) => {
  localStorage.setItem("currentFormStep", step); 
};

export const getFormStep = () => {
  return parseInt(localStorage.getItem("currentFormStep") || "0"); 
};

export const getApplicationStatus = () => {
  const status = localStorage.getItem("applicationSubmitted");
  return status === "true"; 
};

export const setApplicationStatus = (status) => {
  localStorage.setItem("applicationSubmitted", status); 
};

export const resetFormStep = () => {
  sessionStorage.removeItem("isNewForm");
  localStorage.removeItem("currentFormStep");
};

export const isNewForm = () => {
  sessionStorage.setItem("isNewForm", "true");
};
