import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
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
    parents_information: [
      {
        parent_type: "father",
        name: "",
        age: "",
        nationality: "",
        education: "",
        profession: "",
        income: "",
        office_address: "",
        email: "",
      },
      {
        parent_type: "mother",
        name: "",
        age: "",
        nationality: "",
        education: "",
        profession: "",
        income: "",
        office_address: "",
        email: "",
      },
    ],
    other_relatives: [], // This is the array we need to update
    transport_facility: false,
    declaration: false,
  });

  const handleChange = (section, field, value, index = null) => {
    setFormData((prevData) => {
      if (section === "parents_information" && index !== null) {
        // Update a specific parent object in the array
        return {
          ...prevData,
          [section]: prevData[section].map((parent, i) =>
            i === index ? { ...parent, [field]: value } : parent
          ),
        };
      } else if (section === "parents_information") {
        // Check if the field is a parentType (e.g., "father", "mother", "guardian")
        const parentTypes = ["father", "mother", "guardian"];
        if (parentTypes.includes(field)) {
          // Add a new parent object if it doesn't exist
          const parentExists = prevData[section].some(
            (parent) => parent.parent_type === field
          );

          if (!parentExists) {
            const newParent = {
              parent_type: field,
              name: "",
              age: "",
              nationality: "",
              education: "",
              profession: "",
              income: "",
              office_address: "",
              email: "",
            };

            if (field === "guardian") {
              newParent.relationship_with_child = "";
            }

            return {
              ...prevData,
              [section]: [...prevData[section], newParent],
            };
          }
        }
      }
      else if (section === "transport_facility" || section === "declaration") {
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
    });
  };

  return (
    <FormContext.Provider value={{ formData, handleChange }}>
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
