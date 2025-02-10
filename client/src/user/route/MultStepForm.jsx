import { useEffect, useState } from "react"
import CustomizedStepper from "../route/CustomizedStepper"
import { HealthInformation } from "../forms/HealthInformation"
import { GeneralInformation } from "../forms/GeneralInformation"
import { PersonalDetails } from "../forms/PersonalDetails"
import { UserLayout } from "../components/UserLayout"
import { EducationalBackground } from "../forms/EducationalBackground"
import { ParentInformation } from "../forms/ParentInformation"
import { OtherRelatives } from "../forms/OtherRelatives"
import { TransportFacility } from "../forms/TransportFacility"
import { useForm } from "../forms/FormContext"
import { SummaryPage } from "../submittedData/SummaryPage"
import Cookies from "js-cookie"

export const MultiStepForm = () => {
  const { formData, setFormData } = useForm()
  const [activeStep, setActiveStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState(Array(8).fill(false))

  const steps = [
    "General Information",
    "Student Details",
    "Health Information",
    "Educational Background",
    "Parent Details",
    "Other Relatives",
    "Declaration",
    "Verify Details",
  ]

  useEffect(() => {
    const userToken = Cookies.get("userToken")
    const userId = Cookies.get("userId")

    if (userToken && userId) {
      const savedStep = localStorage.getItem(`activeStep_${userId}`)
      const savedCompletedSteps = localStorage.getItem(`completedSteps_${userId}`)
      const savedFormData = localStorage.getItem(`formData_${userId}`)

      if (savedStep && savedCompletedSteps && savedFormData) {
        // Returning user, load saved progress
        setActiveStep(Number.parseInt(savedStep, 10))
        setCompletedSteps(JSON.parse(savedCompletedSteps))
        setFormData(JSON.parse(savedFormData))
      } else {
        // New logged-in user, start fresh
        initializeForm()
      }
    } else {
      // Not logged in, start fresh
      initializeForm()
    }
  }, [setFormData])

  const initializeForm = () => {
    setActiveStep(0)
    setCompletedSteps(Array(8).fill(false))
    setFormData({
      user: "",
      general_information: {
        grade: "",
        applied_before: false,
        applied_year: "",
        applied_grade: "",
      },
      personal_details: {
        first_name: "",
        middle_name: "",
        last_name: "",
        dob: "",
        nationality: "",
        gender: "",
        address: "",
        city: "",
        pincode: "",
        email: "",
        permanent_education_number: "",
        mobile: "",
        emergency_mobile: "",
      },
      health_information: {
        allergy: "",
        physical_handicap: "",
        other: "",
      },
      educational_background: {
        attended_school: false,
        previous_school: "",
        city: "",
        from_grade: "",
        to_grade: "",
        expelled: false,
        expelled_reason: "",
      },
      parents_information: [],
      other_relatives: [],
      transport_facility: false,
      declaration: false,
    })
  }

  const saveProgress = () => {
    const userToken = Cookies.get("userToken")
    const userId = Cookies.get("userId")

    if (userToken && userId) {
      localStorage.setItem(`activeStep_${userId}`, activeStep)
      localStorage.setItem(`completedSteps_${userId}`, JSON.stringify(completedSteps))
      localStorage.setItem(`formData_${userId}`, JSON.stringify(formData))
    }
  }

  const handleNext = () => {
    const nextStep = Math.min(activeStep + 1, steps.length - 1)
    setActiveStep(nextStep)
    setCompletedSteps((prev) => {
      const newCompleted = [...prev]
      newCompleted[activeStep] = true
      return newCompleted
    })
    saveProgress()
  }

  const handleBack = () => {
    const prevStep = Math.max(activeStep - 1, 0)
    setActiveStep(prevStep)
    saveProgress()
  }

  const handleStepClick = (step) => {
    if (completedSteps[step] || step <= activeStep) {
      setActiveStep(step)
      saveProgress()
    }
  }

  const renderForm = () => {
    switch (activeStep) {
      case 0:
        return <GeneralInformation onNext={handleNext} />
      case 1:
        return <PersonalDetails onNext={handleNext} onBack={handleBack} />
      case 2:
        return <HealthInformation onNext={handleNext} onBack={handleBack} />
      case 3:
        return <EducationalBackground onNext={handleNext} onBack={handleBack} />
      case 4:
        return <ParentInformation onNext={handleNext} onBack={handleBack} />
      case 5:
        return <OtherRelatives onNext={handleNext} onBack={handleBack} />
      case 6:
        return <TransportFacility onNext={handleNext} onBack={handleBack} />
      case 7:
        return <SummaryPage onBack={handleBack} />
      default:
        return <GeneralInformation onNext={handleNext} />
    }
  }

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
  )
}

