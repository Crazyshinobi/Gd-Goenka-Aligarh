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

    if (parentType === "father") {
      // Validate father's fields
      const fatherData = formData.parents_information.find(
        (parent) => parent.parent_type === "father"
      );
      if (!fatherData?.name) {
        newErrors.father.name = "Father's name is required";
        isValid = false;
      }
      if (!fatherData?.age || fatherData.age <= 0) {
        newErrors.father.age = "Father's age must be a positive number";
        isValid = false;
      }
      if (!fatherData?.nationality) {
        newErrors.father.nationality = "Father's nationality is required";
        isValid = false;
      }
      if (!fatherData?.education) {
        newErrors.father.education = "Father's education is required";
        isValid = false;
      }
      if (!fatherData?.profession) {
        newErrors.father.profession = "Father's profession is required";
        isValid = false;
      }
      if (!fatherData?.income || fatherData.income <= 0) {
        newErrors.father.income = "Father's income must be a positive number";
        isValid = false;
      }
      if (!fatherData?.office_address) {
        newErrors.father.office_address = "Father's office address is required";
        isValid = false;
      }
      if (!fatherData?.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fatherData.email)) {
        newErrors.father.email = "Father's email is invalid";
        isValid = false;
      }

      // Validate mother's fields
      const motherData = formData.parents_information.find(
        (parent) => parent.parent_type === "mother"
      );
      if (!motherData?.name) {
        newErrors.mother.name = "Mother's name is required";
        isValid = false;
      }
      if (!motherData?.age || motherData.age <= 0) {
        newErrors.mother.age = "Mother's age must be a positive number";
        isValid = false;
      }
      if (!motherData?.nationality) {
        newErrors.mother.nationality = "Mother's nationality is required";
        isValid = false;
      }
      if (!motherData?.education) {
        newErrors.mother.education = "Mother's education is required";
        isValid = false;
      }
      if (!motherData?.profession) {
        newErrors.mother.profession = "Mother's profession is required";
        isValid = false;
      }
      
      
      if (!motherData?.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(motherData.email)) {
        newErrors.mother.email = "Mother's email is invalid";
        isValid = false;
      }
    }

    if (parentType === "guardian") {
      // Validate guardian's fields
      const guardianData = formData.parents_information.find(
        (parent) => parent.parent_type === "guardian"
      );
      if (!guardianData?.name) {
        newErrors.guardian.name = "Guardian's name is required";
        isValid = false;
      }
      if (!guardianData?.age || guardianData.age <= 0) {
        newErrors.guardian.age = "Guardian's age must be a positive number";
        isValid = false;
      }
      if (!guardianData?.relationship_with_child) {
        newErrors.guardian.relationship_with_child =
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
      setErrors({
        father: {},
        mother: {},
        guardian: {},
      });

      // let submittedData = { parents_information : [] }
      // if (parentType === "father") {
      //   submittedData = {
      //     father: formData.parents_information.find(
      //       (parent) => parent.parent_type === "father"
      //     ),
      //     mother: formData.parents_information.find(
      //       (parent) => parent.parent_type === "mother"
      //     ),
      //   };
      // } else if (parentType === "guardian") {
      //   submittedData = {
      //     guardian: formData.parents_information.find(
      //       (parent) => parent.parent_type === "guardian"
      //     ),
      //   };
      // }
      const submittedData = formData.parents_information.filter((parent)=>{
        if(parentType === "father"){
          return parent.parent_type === "father" || parent.parent_type === "mother"
        }else if(parentType === "guardian"){
          return parent.parent_type === "guardian"
        }
      }
        
      )

      console.log("Parents information submitted", submittedData);
      navigate("/user/other-relatives");
    }
  };

  const handleInputChange = (e, field, parentType) => {
    const value = e.target.value;

    // Find the index of the selected parent type in the parents_information array
    const parentIndex = formData.parents_information.findIndex(
      (parent) => parent.parent_type === parentType
    );

    // Update the specific parent object in the parents_information array
    handleChange("parents_information", field, value, parentIndex);
  };

  const handleParentTypeChange = (selectedParentType) => {
    setParentType(selectedParentType);
  
    // Add the selected parent type to the form data if it doesn't exist
    const parentExists = formData.parents_information.some(
      (parent) => parent.parent_type === selectedParentType
    );  
  
    if (!parentExists) {
      handleChange("parents_information", selectedParentType);
    }
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
                  onChange={() => handleParentTypeChange("father")}
                  className="mr-2"
                />
                Father and Mother
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="parentType"
                  value="guardian"
                  checked={parentType === "guardian"}
                  onChange={() => handleParentTypeChange("guardian")}
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
                      value={
                        formData.parents_information.find(
                          (parent) => parent.parent_type === "father"
                        )?.name || ""
                      }
                      onChange={(e) => handleInputChange(e, "name", "father")}
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
                      value={
                        formData.parents_information.find(
                          (parent) => parent.parent_type === "father"
                        )?.age || ""
                      }
                      onChange={(e) => handleInputChange(e, "age", "father")}
                    />
                    {errors.father.age && (
                      <span className="text-red-500 text-sm">
                        {errors.father.age}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="fatherNationality" className="font-medium">
                      Father's Nationality:
                    </label>
                    <input
                      type="text"
                      id="fatherNationality"
                      className="p-2 border rounded-md"
                      placeholder="Enter nationality"
                      value={
                        formData.parents_information.find(
                          (parent) => parent.parent_type === "father"
                        )?.nationality || ""
                      }
                      onChange={(e) => handleInputChange(e, "nationality", "father")}
                    />
                    {errors.father.nationality && (
                      <span className="text-red-500 text-sm">
                        {errors.father.nationality}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="fatherEducation" className="font-medium">
                      Father's Education:
                    </label>
                    <input
                      type="text"
                      id="fatherEducation"
                      className="p-2 border rounded-md"
                      placeholder="Enter education"
                      value={
                        formData.parents_information.find(
                          (parent) => parent.parent_type === "father"
                        )?.education || ""
                      }
                      onChange={(e) => handleInputChange(e, "education", "father")}
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
                      placeholder="Enter profession"
                      value={
                        formData.parents_information.find(
                          (parent) => parent.parent_type === "father"
                        )?.profession || ""
                      }
                      onChange={(e) => handleInputChange(e, "profession", "father")}
                    />
                    {errors.father.profession && (
                      <span className="text-red-500 text-sm">
                        {errors.father.profession}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="fatherIncome" className="font-medium">
                      Father's Income:
                    </label>
                    <input
                      type="number"
                      id="fatherIncome"
                      className="p-2 border rounded-md"
                      placeholder="Enter income"
                      value={
                        formData.parents_information.find(
                          (parent) => parent.parent_type === "father"
                        )?.income || ""
                      }
                      onChange={(e) => handleInputChange(e, "income", "father")}
                    />
                    {errors.father.income && (
                      <span className="text-red-500 text-sm">
                        {errors.father.income}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="fatherOfficeAddress" className="font-medium">
                      Father's Office Address:
                    </label>
                    <input
                      type="text"
                      id="fatherOfficeAddress"
                      className="p-2 border rounded-md"
                      placeholder="Enter office address"
                      value={
                        formData.parents_information.find(
                          (parent) => parent.parent_type === "father"
                        )?.office_address || ""
                      }
                      onChange={(e) => handleInputChange(e, "office_address", "father")}
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
                      value={
                        formData.parents_information.find(
                          (parent) => parent.parent_type === "father"
                        )?.email || ""
                      }
                      onChange={(e) => handleInputChange(e, "email", "father")}
                    />
                    {errors.father.email && (
                      <span className="text-red-500 text-sm">
                        {errors.father.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Mother's Information */}
                <h2 className="text-2xl text-blue-600 mt-6">Mother's Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="motherName" className="font-medium">
                      Mother's Name:
                    </label>
                    <input
                      type="text"
                      id="motherName"
                      className="p-2 border rounded-md"
                      placeholder="Enter name"
                      value={
                        formData.parents_information.find(
                          (parent) => parent.parent_type === "mother"
                        )?.name || ""
                      }
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
                      value={
                        formData.parents_information.find(
                          (parent) => parent.parent_type === "mother"
                        )?.age || ""
                      }
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
                      Mother's Nationality:
                    </label>
                    <input
                      type="text"
                      id="motherNationality"
                      className="p-2 border rounded-md"
                      placeholder="Enter nationality"
                      value={
                        formData.parents_information.find(
                          (parent) => parent.parent_type === "mother"
                        )?.nationality || ""
                      }
                      onChange={(e) => handleInputChange(e, "nationality", "mother")}
                    />
                    {errors.mother.nationality && (
                      <span className="text-red-500 text-sm">
                        {errors.mother.nationality}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="motherEducation" className="font-medium">
                      Mother's Education:
                    </label>
                    <input
                      type="text"
                      id="motherEducation"
                      className="p-2 border rounded-md"
                      placeholder="Enter education"
                      value={
                        formData.parents_information.find(
                          (parent) => parent.parent_type === "mother"
                        )?.education || ""
                      }
                      onChange={(e) => handleInputChange(e, "education", "mother")}
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
                      placeholder="Enter profession"
                      value={
                        formData.parents_information.find(
                          (parent) => parent.parent_type === "mother"
                        )?.profession || ""
                      }
                      onChange={(e) => handleInputChange(e, "profession", "mother")}
                    />
                    {errors.mother.profession && (
                      <span className="text-red-500 text-sm">
                        {errors.mother.profession}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="motherIncome" className="font-medium">
                      Mother's Income:
                    </label>
                    <input
                      type="number"
                      id="motherIncome"
                      className="p-2 border rounded-md"
                      placeholder="Enter income"
                      value={
                        formData.parents_information.find(
                          (parent) => parent.parent_type === "mother"
                        )?.income || ""
                      }
                      onChange={(e) => handleInputChange(e, "income", "mother")}
                    />
                   
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="motherOfficeAddress" className="font-medium">
                      Mother's Office Address:
                    </label>
                    <input
                      type="text"
                      id="motherOfficeAddress"
                      className="p-2 border rounded-md"
                      placeholder="Enter office address"
                      value={
                        formData.parents_information.find(
                          (parent) => parent.parent_type === "mother"
                        )?.office_address || ""
                      }
                      onChange={(e) => handleInputChange(e, "office_address", "mother")}
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
                      value={
                        formData.parents_information.find(
                          (parent) => parent.parent_type === "mother"
                        )?.email || ""
                      }
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
                    value={
                      formData.parents_information.find(
                        (parent) => parent.parent_type === "guardian"
                      )?.name || ""
                    }
                    onChange={(e) => handleInputChange(e, "name", "guardian")}
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
                    value={
                      formData.parents_information.find(
                        (parent) => parent.parent_type === "guardian"
                      )?.age || ""
                    }
                    onChange={(e) => handleInputChange(e, "age", "guardian")}
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
                    placeholder="Enter relationship with child"
                    value={
                      formData.parents_information.find(
                        (parent) => parent.parent_type === "guardian"
                      )?.relationship_with_child || ""
                    }
                    onChange={(e) =>
                      handleInputChange(e, "relationship_with_child", "guardian")
                    }
                  />
                  {errors.guardian.relationship_with_child && (
                    <span className="text-red-500 text-sm">
                      {errors.guardian.relationship_with_child}
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