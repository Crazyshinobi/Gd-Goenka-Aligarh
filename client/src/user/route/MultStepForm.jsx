import { useEffect, useState } from "react";
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
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const MultiStepForm = () => {
  const navigate = useNavigate();
  const { formData, handleChange, setFormData } = useForm();
  const [admission, setAdmission] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(Array(8).fill(false));
  const [loading, setLoading] = useState(true); // Loading state

  const steps = [
    "General Information",
    "Student Details",
    "Health Information",
    "Educational Background",
    "Parent Details",
    "Other Relatives",
    "Declaration",
    "Verify Details",
  ];

  // Fetch admission data on component mount
  const fetchAdmissionData = async () => {
    const user = Cookies.get("userId"); // Get the logged-in user ID
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/admission-application/get-admission-form/1`,
        { user }
      );
      if (response?.data?.success) {
        const fetchedAdmission = response.data.admission;

        setAdmission(fetchedAdmission);
        setActiveStep(fetchedAdmission.current_step || 0);

        const newCompletedSteps = steps.map(
          (_, index) => index < fetchedAdmission.current_step
        );

        setCompletedSteps(newCompletedSteps);

        // Update form data with fetched data
        setFormData(fetchedAdmission);
      }
    } catch (error) {
      console.error("Error fetching admission data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmissionData();
  }, []);

  const saveProgress = async (step) => {
    try {
      formData.current_step = step;
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/admission-application/admission-form/${step}`,
        formData
      );
    } catch (error) {
      alert("error");
      console.error("Error saving progress:", error);
    }
  };

  const handleNext = () => {
    if (activeStep >= 7) {
      navigate("/summary"); // Redirect to summary page if it's the last step
      return;
    }
    const nextStep = Math.min(activeStep + 1, steps.length - 1);
    setActiveStep(nextStep);
    setCompletedSteps((prev) => {
      const newCompleted = [...prev];
      newCompleted[activeStep] = true;
      return newCompleted;
    });
    saveProgress(nextStep); // Save progress to the database
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleStepClick = (step) => {
    if (completedSteps[step] || step <= activeStep) {
      setActiveStep(step);
    }
  };

  const renderForm = () => {
    if (loading) {
      return <div>Loading...</div>; // Or you can show a loading spinner
    }

    switch (activeStep) {
      case 0:
        return <GeneralInformation onNext={handleNext} />;
      case 1:
        return <PersonalDetails onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <HealthInformation onNext={handleNext} onBack={handleBack} />;
      case 3:
        return (
          <EducationalBackground onNext={handleNext} onBack={handleBack} />
        );
      case 4:
        return <ParentInformation onNext={handleNext} onBack={handleBack} />;
      case 5:
        return <OtherRelatives onNext={handleNext} onBack={handleBack} />;
      case 6:
        return <TransportFacility onNext={handleNext} onBack={handleBack} />;
      case 7:
        return <SummaryPage onBack={handleBack} />;
      default:
        return <SummaryPage onBack={handleBack} />;
    }
  };

  return (
    <>
      <UserLayout />
      <div>
        <CustomizedStepper
          activeStep={activeStep}
          steps={steps}
          completedSteps={completedSteps}
          onStepClick={handleStepClick}
        />
        <div>{renderForm()}</div>
      </div>
    </>
  );
};
