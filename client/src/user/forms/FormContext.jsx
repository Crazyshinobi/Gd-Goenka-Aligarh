import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    general_information: {
      grade: '',
      applied_before: false,
      applied_year: '',
      applied_grade: '',
    },
    personal_details: {
      first_name: '',
      middle_name: '',
      last_name: '',
      dob: '',
      nationality: '',
      gender: '',
      address: '',
      city: '',
      pincode: '',
      email: '',
      mobile: '',
      emergency_mobile: '',
    },
    health_information: {
      allergy: '',
      physical_handicap: '',
      other: '',
    },
    educational_background: {
      attended_school: false,
      previous_school: '',
      city: '',
      from_grade: '',
      to_grade: '',
      expelled: false,
      expelled_reason: '',
    },
    parents_information: {
      father: {
        name: '',
        age: '',
        nationality: '',
        education: '',
        profession: '',
        income: '',
        office_address: '',
        email: '',
      },
      mother: {
        name: '',
        age: '',
        nationality: '',
        education: '',
        profession: '',
        income: '',
        office_address: '',
        email: '',
      },
      guardian: {
        name: '',
        age: '',
        relationshipWithChild: '',
      },
    },
    other_relatives: [],
    transport_facility: false,
    declaration: false,
  });

  const handleChange = (section, field, value, subsection = null) => {
    setFormData((prevData) => {
      if (subsection) {
        return {
          ...prevData,
          [section]: {
            ...prevData[section],
            [subsection]: {
              ...prevData[section][subsection],
              [field]: value,
            },
          },
        };
      } else {
        return {
          ...prevData,
          [section]: {
            ...prevData[section],
            [field]: value, // This will work for boolean values as well
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
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
}; 