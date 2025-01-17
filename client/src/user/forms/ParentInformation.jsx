import React, { useState } from "react";
import { UserLayout } from "../components/UserLayout";
import { useForm } from "./FormContext";
import { useNavigate } from "react-router-dom";

export const ParentInformation = () => {
  const { formData, handleChange } = useForm();
  const [parentType, setParentType] = useState("father");
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    father: {},
    mother: {},
    guardian: {},
  });

  const validateForm = () => {
    const newErrors = {
      father: {},
      mother: {},
      guardian: {},
    };

    let isValid = true;

    // Validate father's fields if parentType is "father"
    if (parentType === "father") {
      const fatherData = formData.parents_information.father;

      if (!fatherData.name) {
        newErrors.father.name = "Father's name is required";
        isValid = false;
      }
      if (!fatherData.age || fatherData.age <= 0) {
        newErrors.father.age = "Father's age must be a positive number";
        isValid = false;
      }
      if (!fatherData.nationality) {
        newErrors.father.nationality = "Father's nationality is required";
        isValid = false;
      }
      if (!fatherData.education) {
        newErrors.father.education = "Father's education is required";
        isValid = false;
      }
      if (!fatherData.profession) {
        newErrors.father.profession = "Father's profession is required";
        isValid = false;
      }
      if (!fatherData.income || fatherData.income <= 0) {
        newErrors.father.income = "Father's income must be a positive number";
        isValid = false;
      }
      if (!fatherData.office_address) {
        newErrors.father.office_address = "Father's office address is required";
        isValid = false;
      }
      if (!fatherData.email || !/\S+@\S+\.\S+/.test(fatherData.email)) {
        newErrors.father.email = "Invalid email address";
        isValid = false;
      }

      // Validate mother's fields as well when parentType is "father"
      const motherData = formData.parents_information.mother;

      if (!motherData.name) {
        newErrors.mother.name = "Mother's name is required";
        isValid = false;
      }
      if (!motherData.age || motherData.age <= 0) {
        newErrors.mother.age = "Mother's age must be a positive number";
        isValid = false;
      }
      if (!motherData.nationality) {
        newErrors.mother.nationality = "Mother's nationality is required";
        isValid = false;
      }
      if (!motherData.education) {
        newErrors.mother.education = "Mother's education is required";
        isValid = false;
      }
      if (!motherData.profession) {
        newErrors.mother.profession = "Mother's profession is required";
        isValid = false;
      }
      if (!motherData.income || motherData.income <= 0) {
        newErrors.mother.income = "Mother's income must be a positive number";
        isValid = false;
      }
      if (!motherData.office_address) {
        newErrors.mother.office_address = "Mother's office address is required";
        isValid = false;
      }
      if (!motherData.email || !/\S+@\S+\.\S+/.test(motherData.email)) {
        newErrors.mother.email = "Invalid email address";
        isValid = false;
      }
    }

    // Validate mother's fields if parentType is "mother"
    if (parentType === "mother") {
      const motherData = formData.parents_information.mother;

      if (!motherData.name) {
        newErrors.mother.name = "Mother's name is required";
        isValid = false;
      }
      if (!motherData.age || motherData.age <= 0) {
        newErrors.mother.age = "Mother's age must be a positive number";
        isValid = false;
      }
      if (!motherData.nationality) {
        newErrors.mother.nationality = "Mother's nationality is required";
        isValid = false;
      }
      if (!motherData.education) {
        newErrors.mother.education = "Mother's education is required";
        isValid = false;
      }
      if (!motherData.profession) {
        newErrors.mother.profession = "Mother's profession is required";
        isValid = false;
      }
   
      if (!motherData.email || !/\S+@\S+\.\S+/.test(motherData.email)) {
        newErrors.mother.email = "Invalid email address";
        isValid = false;
      }
    }

    // Validate guardian's fields if parentType is "guardian"
    if (parentType === "guardian") {
      const guardianData = formData.parents_information.guardian;

      if (!guardianData.name) {
        newErrors.guardian.name = "Guardian's name is required";
        isValid = false;
      }
      if (!guardianData.age || guardianData.age <= 0) {
        newErrors.guardian.age = "Guardian's age must be a positive number";
        isValid = false;
      }
      if (!guardianData.relationshipWithChild) {
        newErrors.guardian.relationshipWithChild =
          "Relationship with child is required";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Reset the error state if the form is valid
      setErrors({
        father: {},
        mother: {},
        guardian: {},
      });

      console.log(
        `${parentType} data submitted`,
        formData.parents_information[parentType]
      );
      navigate("/user/other-relatives");
    }
  };

  const handleInputChange = (e, field, subsection = null) => {
    const value = e.target.value;
    handleChange("parents_information", field, value, subsection || parentType);
  };

  return (
    <>
      <UserLayout />
      <div className="lg:p-6 sm:ml-64 dark:bg-gray-800 min-h-screen">
        <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white mt-14 bg-white dark:bg-gray-700 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Parents/Guardians Information
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Parent Type Selection */}
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="parentType"
                  value="father"
                  checked={parentType === "father"}
                  onChange={() => setParentType("father")}
                  className="mr-2"
                />
                Father
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="parentType"
                  value="guardian"
                  onChange={() => setParentType("guardian")}
                  className="mr-2"
                />
                Guardian
              </label>
            </div>

            {/* Father's and Mother's Fields */}
            {parentType === "father" && (
              <>
                {/* Father's Information */}
                <h2 className="text-2xl text-blue-600">Father's Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <div className="flex flex-col">
                    <label htmlFor="fatherName" className="font-medium">
                      Father's Name:
                    </label>
                    <input
                      type="text"
                      id="fatherName"
                      className="p-2 border rounded-md"
                      placeholder="Enter name"
                      value={formData.parents_information.father.name}
                      onChange={(e) => handleInputChange(e, "name")}
                    />
                    {errors.father.name && (
                      <span className="text-red-500 text-sm">
                        {errors.father.name}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="fatherAge" className="font-medium">
                      Father's Age:
                    </label>
                    <input
                      type="number"
                      id="fatherAge"
                      className="p-2 border rounded-md"
                      placeholder="Enter age"
                      value={formData.parents_information.father.age}
                      onChange={(e) => handleInputChange(e, "age")}
                    />
                    {errors.father.age && (
                      <span className="text-red-500 text-sm">
                        {errors.father.age}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="fatherNationality" className="font-medium">
                      Nationality:
                    </label>
                    <input
                      type="text"
                      id="fatherNationality"
                      className="p-2 border rounded-md"
                      placeholder="Enter nationality"
                      value={formData.parents_information.father.nationality}
                      onChange={(e) => handleInputChange(e, "nationality")}
                    />
                    {errors.father.nationality && (
                      <span className="text-red-500 text-sm">
                        {errors.father.nationality}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="fatherEducation" className="font-medium">
                      Education/University:
                    </label>
                    <input
                      type="text"
                      id="fatherEducation"
                      className="p-2 border rounded-md"
                      placeholder="Enter education/university"
                      value={formData.parents_information.father.education}
                      onChange={(e) => handleInputChange(e, "education")}
                    />
                    {errors.father.education && (
                      <span className="text-red-500 text-sm">
                        {errors.father.education}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="fatherProfession" className="font-medium">
                      Father's Profession:
                    </label>
                    <input
                      type="text"
                      id="fatherProfession"
                      className="p-2 border rounded-md"
                      placeholder="Enter father's profession"
                      value={formData.parents_information.father.profession}
                      onChange={(e) => handleInputChange(e, "profession")}
                    />
                    {errors.father.profession && (
                      <span className="text-red-500 text-sm">
                        {errors.father.profession}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="fatherIncome" className="font-medium">
                      Father's Annual Income:
                    </label>
                    <input
                      type="number"
                      id="fatherIncome"
                      className="p-2 border rounded-md"
                      placeholder="Enter father's income"
                      value={formData.parents_information.father.income}
                      onChange={(e) => handleInputChange(e, "income")}
                    />
                    {errors.father.income && (
                      <span className="text-red-500 text-sm">
                        {errors.father.income}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="fatherOfficeAddress"
                      className="font-medium"
                    >
                      Office Address:
                    </label>
                    <input
                      type="text"
                      id="fatherOfficeAddress"
                      className="p-2 border rounded-md"
                      placeholder="Enter office address"
                      value={formData.parents_information.father.office_address}
                      onChange={(e) => handleInputChange(e, "office_address")}
                    />
                    {errors.father.office_address && (
                      <span className="text-red-500 text-sm">
                        {errors.father.office_address}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="fatherEmail" className="font-medium">
                      Father's Email:
                    </label>
                    <input
                      type="email"
                      id="fatherEmail"
                      className="p-2 border rounded-md"
                      placeholder="Enter email"
                      value={formData.parents_information.father.email}
                      onChange={(e) => handleInputChange(e, "email")}
                    />
                    {errors.father.email && (
                      <span className="text-red-500 text-sm">
                        {errors.father.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Mother's Information */}
                <h2 className="text-2xl text-blue-600">Mother's Information </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex flex-col">
                    <label htmlFor="motherName" className="font-medium">
                      Mother's Name:
                    </label>
                    <input
                      type="text"
                      id="motherName"
                      className="p-2 border rounded-md"
                      placeholder="Enter name"
                      value={formData.parents_information.mother.name}
                      onChange={(e) => handleInputChange(e, "name", "mother")}
                    />
                    {errors.mother.name && (
                      <span className="text-red-500 text-sm">
                        {errors.mother.name}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="motherAge" className="font-medium">
                      Mother's Age:
                    </label>
                    <input
                      type="number"
                      id="motherAge"
                      className="p-2 border rounded-md"
                      placeholder="Enter age"
                      value={formData.parents_information.mother.age}
                      onChange={(e) => handleInputChange(e, "age", "mother")}
                    />
                    {errors.mother.age && (
                      <span className="text-red-500 text-sm">
                        {errors.mother.age}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="motherNationality" className="font-medium">
                      Nationality:
                    </label>
                    <input
                      type="text"
                      id="motherNationality"
                      className="p-2 border rounded-md"
                      placeholder="Enter nationality"
                      value={formData.parents_information.mother.nationality}
                      onChange={(e) =>
                        handleInputChange(e, "nationality", "mother")
                      }
                    />
                    {errors.mother.nationality && (
                      <span className="text-red-500 text-sm">
                        {errors.mother.nationality}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="motherEducation" className="font-medium">
                      Education/University:
                    </label>
                    <input
                      type="text"
                      id="motherEducation"
                      className="p-2 border rounded-md"
                      placeholder="Enter education/university"
                      value={formData.parents_information.mother.education}
                      onChange={(e) =>
                        handleInputChange(e, "education", "mother")
                      }
                    />
                    {errors.mother.education && (
                      <span className="text-red-500 text-sm">
                        {errors.mother.education}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="motherProfession" className="font-medium">
                      Mother's Profession:
                    </label>
                    <input
                      type="text"
                      id="motherProfession"
                      className="p-2 border rounded-md"
                      placeholder="Enter mother's profession"
                      value={formData.parents_information.mother.profession}
                      onChange={(e) =>
                        handleInputChange(e, "profession", "mother")
                      }
                    />
                    {errors.mother.profession && (
                      <span className="text-red-500 text-sm">
                        {errors.mother.profession}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="motherIncome" className="font-medium">
                      Mother's Annual Income:
                    </label>
                    <input
                      type="number"
                      id="motherIncome"
                      className="p-2 border rounded-md"
                      placeholder="Enter mother's income"
                      value={formData.parents_information.mother.income}
                      onChange={(e) => handleInputChange(e, "income", "mother")}
                    />
                  
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="motherOfficeAddress"
                      className="font-medium"
                    >
                      Office Address:
                    </label>
                    <input
                      type="text"
                      id="motherOfficeAddress"
                      className="p-2 border rounded-md"
                      placeholder="Enter office address"
                      value={formData.parents_information.mother.office_address}
                      onChange={(e) =>
                        handleInputChange(e, "office_address", "mother")
                      }
                    />
                 
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="motherEmail" className="font-medium">
                      Mother's Email:
                    </label>
                    <input
                      type="email"
                      id="motherEmail"
                      className="p-2 border rounded-md"
                      placeholder="Enter email"
                      value={formData.parents_information.mother.email}
                      onChange={(e) => handleInputChange(e, "email", "mother")}
                    />
                    {errors.mother.email && (
                      <span className="text-red-500 text-sm">
                        {errors.mother.email}
                      </span>
                    )}
                  </div>
                </div>
              </>
            )}
            {/* Guardian's Fields */}
            {parentType === "guardian" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="guardianName" className="font-medium">
                    Guardian's Name:
                  </label>
                  <input
                    type="text"
                    id="guardianName"
                    className="p-2 border rounded-md"
                    placeholder="Enter guardian's name"
                    value={formData.parents_information.guardian.name}
                    onChange={(e) => handleInputChange(e, "name")}
                  />
                  {errors.guardian.name && (
                    <span className="text-red-500 text-sm">
                      {errors.guardian.name}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="guardianAge" className="font-medium">
                    Guardian's Age:
                  </label>
                  <input
                    type="number"
                    id="guardianAge"
                    className="p-2 border rounded-md"
                    placeholder="Enter guardian's age"
                    value={formData.parents_information.guardian.age}
                    onChange={(e) => handleInputChange(e, "age")}
                  />
                  {errors.guardian.age && (
                    <span className="text-red-500 text-sm">
                      {errors.guardian.age}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="guardianRelationship" className="font-medium">
                    Relationship with Child:
                  </label>
                  <input
                    type="text"
                    id="guardianRelationship"
                    className="p-2 border rounded-md"
                    placeholder="Enter relationship"
                    value={
                      formData.parents_information.guardian
                        .relationshipWithChild
                    }
                    onChange={(e) =>
                      handleInputChange(e, "relationshipWithChild")
                    }
                  />
                  {errors.guardian.relationshipWithChild && (
                    <span className="text-red-500 text-sm">
                      {errors.guardian.relationshipWithChild}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};