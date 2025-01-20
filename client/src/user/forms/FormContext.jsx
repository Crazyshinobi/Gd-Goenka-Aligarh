import React, { createContext, useContext, useState } from "react";
import { useParams } from "react-router-dom";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    user: id,
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
    parents_information: [], // Initialize as an empty array
    other_relatives: [],
    transport_facility: false,
    declaration: false,
  });

  const handleChange = (section, field, value, index = null) => {
    setFormData((prevData) => {
      if (section === "parents_information" && index !== null) {
        const updatedParents = [...prevData.parents_information];
        updatedParents[index] = { ...updatedParents[index], [field]: value };
        return { ...prevData, parents_information: updatedParents };
      } else if (
        section === "father" ||
        section === "mother" ||
        section === "guardian"
      ) {
        return {
          ...prevData,
          [section]: {
            ...prevData[section],
            [field]: value,
          },
        };
      } else if (
        section === "transport_facility" ||
        section === "declaration"
      ) {
        return {
          ...prevData,
          [section]: value, // Directly update the boolean value
        };
      } else if (Array.isArray(prevData[section])) {
        // Handle arrays (e.g., other_relatives)
        return {
          ...prevData,
          [section]: value, // Directly update the array
        };
      } else {
        // Handle regular fields
        return {
          ...prevData,
          [section]: {
            ...prevData[section],
            [field]: value,
          },
        };
      }
      return prevData; // Fallback to prevent undefined state
    });
  };

  console.log("FormProvider Context Value:", {
    formData,
    setFormData,
    handleChange,
  });

  return (
    <FormContext.Provider value={{ formData, setFormData, handleChange }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};
