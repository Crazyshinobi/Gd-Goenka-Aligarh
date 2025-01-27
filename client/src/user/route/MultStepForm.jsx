import React, { useEffect, useState } from "react";
import CustomizedStepper from "../route/CustomizedStepper";
import { HealthInformation } from "../forms/HealthInformation";
import { GeneralInformation } from "../forms/GeneralInformation";
import { PersonalDetails } from "../forms/PersonalDetails";
import { UserLayout } from "../components/UserLayout";
import { EducationalBackground } from "../forms/EducationalBackground";
import { ParentInformation } from "../forms/ParentInformation";
import { OtherRelatives } from "../forms/OtherRelatives";
import { TransportFacility } from "../forms/TransportFacility";
import { useForm } from "../forms/FormContext";
import { SummaryPage } from "../submittedData/SummaryPage";

export const MultiStepForm = () => {
  const { formData, handleChange, setFormData } = useForm();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "General Information",
    "Personal Details",
    "Health Information",
    "Educational Background",
    "Parent Details",
    "Other Relatives",
    "Declaration",
    "Verify Details",
  ];

  useEffect(() => {
    const savedStep = localStorage.getItem("activeStep");
    const savedFormData = localStorage.getItem("formData");

    if (savedStep && savedFormData) {
      setActiveStep(parseInt(savedStep, 10));
      setFormData(JSON.parse(savedFormData));
    }
  }, [setFormData]);

  const saveProgress = (step) => {
    localStorage.setItem("activeStep", step);
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  // Step navigation handlers
  const handleNext = () => {
    const nextStep = Math.min(activeStep + 1, steps.length - 1);
    setActiveStep(nextStep);
    saveProgress(nextStep);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({}); // reset form data to initial state
    localStorage.removeItem("activeStep");
    localStorage.removeItem("formData");
  };

  // Render forms based on the active step
  const renderForm = () => {
    switch (activeStep) {
      case 0:
        return <GeneralInformation onNext={handleNext} />;
      case 1:
        return <PersonalDetails onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <HealthInformation onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <EducationalBackground onNext={handleNext} onBack={handleBack} />
      case 4:
        return <ParentInformation onNext={handleNext} onBack={handleBack} />;
      case 5:
        return <OtherRelatives onNext={handleNext} onBack={handleBack} />;
      case 6:
        return <TransportFacility onNext={handleNext} onBack={handleBack} />;
      case 7:
        return <SummaryPage onBack={handleBack} />;
      default:
        return <GeneralInformation onNext={handleNext} />;
    }
  };

  return (
    <>
      <UserLayout />
      <div>
        <CustomizedStepper activeStep={activeStep} steps={steps} />
        <div>{renderForm()}</div>
      </div>
    </>
  );
};
