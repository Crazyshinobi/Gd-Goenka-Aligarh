import React, { useState } from "react";
import { UserLayout } from "../components/UserLayout";
import { useForm } from "./FormContext";
import axios from "axios";

export const ParentInformation = ({ onBack, onNext }) => {
  const { formData, setFormData, handleChange } = useForm();
  const [parentType, setParentType] = useState("father_mother"); // Default to "Father and Mother"

  const [errors, setErrors] = useState({});

  const handleParentTypeChange = (e) => {
    const newParentType = e.target.value;
    setParentType(newParentType);

    // Reset only the parents_information field based on the selected parent type
    if (newParentType === "father_mother") {
      setFormData((prevData) => ({
        ...prevData, // Keep the rest of the formData unchanged
        parents_information: [{}, {}], // Reset to two empty objects for father and mother
      }));
    } else if (newParentType === "guardian") {
      setFormData((prevData) => ({
        ...prevData, // Keep the rest of the formData unchanged
        parents_information: [{}], // Reset to one empty object for guardian
      }));
    }

    setErrors({}); // Clear errors when switching parent type
  };

  const validateFields = () => {
    const newErrors = {};

    if (parentType === "father_mother") {
      // Validate Father's fields
      if (!formData.parents_information[0]?.name) {
        newErrors.father_name = "Father's name is required.";
      }
      if (
        !formData.parents_information[0]?.age ||
        formData.parents_information[0]?.age <= 0
      ) {
        newErrors.father_age = "Father's age must be a positive number.";
      }

      if (!formData.parents_information[0]?.education) {
        newErrors.father_education = "Father's education is required.";
      }
      if (!formData.parents_information[0]?.adhaar_number) {
        newErrors.father_adhaar_number = "Father's Aadhaar number is required.";
      }
      if (
        formData.parents_information[0]?.adhaar_number &&
        formData.parents_information[0]?.adhaar_number.length !== 12
      ) {
        newErrors.father_adhaar_number =
          "Aadhaar number must be exactly 12 digits.";
      }
      if (!formData.parents_information[0]?.profession) {
        newErrors.father_profession = "Father's profession is required.";
      }
      if (!formData.parents_information[0]?.image) {
        newErrors.father_image = "Father's image is required.";
      }

      // Validate Mother's fields
      if (!formData.parents_information[1]?.name) {
        newErrors.mother_name = "Mother's name is required.";
      }
      if (
        !formData.parents_information[1]?.age ||
        formData.parents_information[1]?.age <= 0
      ) {
        newErrors.mother_age = "Mother's age must be a positive number.";
      }

      if (!formData.parents_information[1]?.education) {
        newErrors.mother_education = "Mother's education is required.";
      }
      if (!formData.parents_information[1]?.adhaar_number) {
        newErrors.mother_adhaar_number = "Mother's Aadhaar number is required.";
      }
      if (
        formData.parents_information[1]?.adhaar_number &&
        formData.parents_information[1]?.adhaar_number.length !== 12
      ) {
        newErrors.mother_adhaar_number =
          "Aadhaar number must be exactly 12 digits.";
      }
      if (!formData.parents_information[1]?.profession) {
        newErrors.mother_profession = "Mother's profession is required.";
      }
      if (!formData.parents_information[0]?.image) {
        newErrors.mother_image = "Mother's image is required.";
      }
    } else if (parentType === "guardian") {
      // Validate Guardian's fields
      if (!formData.parents_information[0]?.name) {
        newErrors.guardian_name = "Guardian's name is required.";
      }
      if (
        !formData.parents_information[0]?.age ||
        formData.parents_information[0]?.age <= 0
      ) {
        newErrors.guardian_age = "Guardian's age must be a positive number.";
      }
      if (!formData.parents_information[0]?.relationship_with_child) {
        newErrors.guardian_relationship =
          "Relationship with child is required.";
      }
    }

    setErrors(newErrors); // Update the errors state
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateFields(); // Validate fields before submission
    if (!isValid) {
      return; // Stop submission if there are errors
    }

    let updatedFormData = { ...formData };

    if (parentType === "father_mother") {
      const father = {
        parent_type: "father",
        name: formData.parents_information[0]?.name || "",
        age: formData.parents_information[0]?.age || "",
        education: formData.parents_information[0]?.education || "",
        adhaar_number: formData.parents_information[0]?.adhaar_number || "",
        profession: formData.parents_information[0]?.profession || "",
        income: formData.parents_information[0]?.income || "",
        office_address: formData.parents_information[0]?.office_address || "",
        image: formData.parents_information[0]?.image || "",
      };
      const mother = {
        parent_type: "mother",
        name: formData.parents_information[1]?.name || "",
        age: formData.parents_information[1]?.age || "",
        education: formData.parents_information[1]?.education || "",
        adhaar_number: formData.parents_information[1]?.adhaar_number || " ",
        profession: formData.parents_information[1]?.profession || "",
        income: formData.parents_information[1]?.income || "",
        office_address: formData.parents_information[1]?.office_address || "",
        image: formData.parents_information[1]?.image || "",
      };

      updatedFormData = {
        ...updatedFormData,
        parents_information: [father, mother],
      };
    } else if (parentType === "guardian") {
      const guardian = {
        parent_type: "guardian",
        name: formData.parents_information[0]?.name || "",
        age: formData.parents_information[0]?.age || "",
        education: formData.parents_information[0]?.education || " ",
        adhaar_number: formData.parents_information[0]?.adhaar_number || " ",
        profession: formData.parents_information[0]?.profession || " ",
        income: formData.parents_information[0]?.income || " ",
        office_address: formData.parents_information[0]?.office_address || " ",
        image: formData.parents_information[0]?.image || "",
        relationship_with_child:
          formData.parents_information[0]?.relationship_with_child || "",
      };

      updatedFormData = {
        ...updatedFormData,
        parents_information: [guardian],
      };
    }
    setFormData(updatedFormData);
    setParentType("father_mother");
    setErrors({});
    onNext();
  };

  return (
    <>
      <UserLayout />
      <div className="p-4 py-6 lg:p-6 sm:ml-64 dark:bg-gray-800 min-h-screen">
        <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white  bg-white dark:bg-gray-700 shadow-lg">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Parent Type Selection */}
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <label className="flex items-center mb-2 sm:mb-0">
                <input
                  type="radio"
                  value="father_mother"
                  checked={parentType === "father_mother"}
                  onChange={handleParentTypeChange}
                  className="mr-2"
                />
                Father and Mother
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="guardian"
                  checked={parentType === "guardian"}
                  onChange={handleParentTypeChange}
                  className="mr-2"
                />
                Guardian
              </label>
            </div>

            {parentType === "father_mother" ? (
              <div className="space-y-6">
                {/* Father's Information */}
                <div className="dark:bg-gray-100 dark:text-black p-4 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">
                    Father's Information
                  </h3>
                  <div className="space-y-4">
                    {/* First Row: Name, Age, Nationality */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium">
                          Name<span className="text-red-500 text-2xl">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.parents_information[0]?.name || ""}
                          onChange={(e) =>
                            handleChange(
                              "parents_information",
                              "name",
                              e.target.value,
                              0
                            )
                          }
                          className="w-full p-2 border rounded dark:bg-white dark:border-black"
                        />
                        {errors.father_name && (
                          <p className="text-red-500 text-sm">
                            {errors.father_name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium">
                          Age<span className="text-red-500 text-2xl">*</span>
                        </label>
                        <input
                          type="number"
                          value={formData.parents_information[0]?.age || ""}
                          onChange={(e) =>
                            handleChange(
                              "parents_information",
                              "age",
                              e.target.value,
                              0
                            )
                          }
                          className="w-full p-2 border rounded dark:bg-white dark:border-black"
                        />
                        {errors.father_age && (
                          <p className="text-red-500 text-sm">
                            {errors.father_age}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium">
                          Education
                          <span className="text-red-500 text-2xl">*</span>
                        </label>
                        <input
                          type="text"
                          value={
                            formData.parents_information[0]?.education || ""
                          }
                          onChange={(e) =>
                            handleChange(
                              "parents_information",
                              "education",
                              e.target.value,
                              0
                            )
                          }
                          className="w-full p-2 border rounded dark:bg-white dark:border-black"
                        />
                        {errors.father_education && (
                          <p className="text-red-500 text-sm">
                            {errors.father_education}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Second Row: Profession , Aadhar*/}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium">
                          Aadhar No.
                          <span className="text-gray-400">
                            {" "}
                            (must be in number)
                          </span>
                          <span className="text-red-500 text-2xl">*</span>
                        </label>
                        <input
                          type="number"
                          value={
                            formData.parents_information[0]?.adhaar_number || ""
                          }
                          onChange={(e) =>
                            handleChange(
                              "parents_information",
                              "adhaar_number",
                              e.target.value,
                              0
                            )
                          }
                          className="w-full p-2 border rounded dark:bg-white dark:border-black"
                        />
                        {errors.father_adhaar_number && (
                          <p className="text-red-500 text-sm">
                            {errors.father_adhaar_number}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium">
                          Profession
                          <span className="text-red-500 text-2xl">*</span>
                        </label>
                        <input
                          type="text"
                          value={
                            formData.parents_information[0]?.profession || ""
                          }
                          onChange={(e) =>
                            handleChange(
                              "parents_information",
                              "profession",
                              e.target.value,
                              0
                            )
                          }
                          className="w-full p-2 border rounded dark:bg-white dark:border-black"
                        />
                        {errors.father_profession && (
                          <p className="text-red-500 text-sm">
                            {errors.father_profession}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Third Row:  Profession, Income */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium">
                          Income per year
                          <span className="text-gray-400">
                            {" "}
                            (must be in number)
                          </span>
                          <span className="text-red-500 text-2xl">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.parents_information[0]?.income || ""}
                          onChange={(e) =>
                            handleChange(
                              "parents_information",
                              "income",
                              e.target.value,
                              0
                            )
                          }
                          className="w-full p-2 border rounded dark:bg-white dark:border-black"
                        />
                        {errors.father_income && (
                          <p className="text-red-500 text-sm">
                            {errors.father_income}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium">
                          Office Address
                          <span className="text-red-500 text-2xl">*</span>
                        </label>
                        <input
                          type="text"
                          value={
                            formData.parents_information[0]?.office_address ||
                            ""
                          }
                          onChange={(e) =>
                            handleChange(
                              "parents_information",
                              "office_address",
                              e.target.value,
                              0
                            )
                          }
                          className="w-full p-2 border rounded dark:bg-white dark:border-black"
                        />
                        {errors.father_office_address && (
                          <p className="text-red-500 text-sm">
                            {errors.father_office_address}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Fourth row : Image  */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                      {/* Father Image  */}
                    <div className="grid grid-cols-1  gap-4">
                      <div>
                        <label className="block text-sm font-medium">
                          Father Image
                          <span className="text-red-500 text-2xl">*</span>
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleChange(
                              "parents_information",
                              "image",
                              e.target.files[0],
                              0
                            )
                          }
                          className="w-full p-2 border rounded dark:bg-white dark:border-black"
                        />
                        {formData.parents_information[0]?.image && (
                          <div className="mt-2">
                            <img
                              src={URL.createObjectURL(
                                formData.parents_information[0].image
                              )}
                              alt="Father's Preview"
                              className="w-40 h-28 object-cover rounded"
                            />
                          </div>
                        )}
                        {errors.father_image && (
                          <p className="text-red-500 text-sm">
                            {errors.father_image}
                          </p>
                        )}
                      </div>
                    </div>
                    </div>
                  </div>
                </div>

                {/* Mother's Information */}
                <div className="dark:bg-gray-100 dark:text-black p-4 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">
                    Mother's Information
                  </h3>
                  <div className="space-y-4">
                    {/* First Row: Name, Age, Nationality */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium">
                          Name<span className="text-red-500 text-2xl">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.parents_information[1]?.name || ""}
                          onChange={(e) =>
                            handleChange(
                              "parents_information",
                              "name",
                              e.target.value,
                              1
                            )
                          }
                          className="w-full p-2 border rounded dark:bg-white dark:border-black"
                        />
                        {errors.mother_name && (
                          <p className="text-red-500 text-sm">
                            {errors.mother_name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium">
                          Age<span className="text-red-500 text-2xl">*</span>
                        </label>
                        <input
                          type="number"
                          value={formData.parents_information[1]?.age || ""}
                          onChange={(e) =>
                            handleChange(
                              "parents_information",
                              "age",
                              e.target.value,
                              1
                            )
                          }
                          className="w-full p-2 border rounded dark:bg-white dark:border-black"
                        />
                        {errors.mother_age && (
                          <p className="text-red-500 text-sm">
                            {errors.mother_age}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium">
                          Education
                          <span className="text-red-500 text-2xl">*</span>
                        </label>
                        <input
                          type="text"
                          value={
                            formData.parents_information[1]?.education || ""
                          }
                          onChange={(e) =>
                            handleChange(
                              "parents_information",
                              "education",
                              e.target.value,
                              1
                            )
                          }
                          className="w-full p-2 border rounded dark:bg-white dark:border-black"
                        />
                        {errors.mother_education && (
                          <p className="text-red-500 text-sm">
                            {errors.mother_education}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Second Row: Aadhar number, Profession */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium">
                          Aadhar No.
                          <span className="text-gray-400">
                            {" "}
                            (must be in number)
                          </span>
                          <span className="text-red-500 text-2xl">*</span>
                        </label>
                        <input
                          type="number"
                          value={
                            formData.parents_information[1]?.adhaar_number || ""
                          }
                          onChange={(e) =>
                            handleChange(
                              "parents_information",
                              "adhaar_number",
                              e.target.value,
                              1
                            )
                          }
                          className="w-full p-2 border rounded dark:bg-white dark:border-black"
                        />
                        {errors.mother_adhaar_number && (
                          <p className="text-red-500 text-sm">
                            {errors.mother_adhaar_number}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium">
                          Profession
                          <span className="text-red-500 text-2xl">*</span>
                        </label>
                        <input
                          type="text"
                          value={
                            formData.parents_information[1]?.profession || ""
                          }
                          onChange={(e) =>
                            handleChange(
                              "parents_information",
                              "profession",
                              e.target.value,
                              1
                            )
                          }
                          className="w-full p-2 border rounded dark:bg-white dark:border-black"
                        />
                        {errors.mother_profession && (
                          <p className="text-red-500 text-sm">
                            {errors.mother_profession}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Third Row:  Income , Office Address */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium">
                          Income per year
                          <span className="text-gray-400">
                            {" "}
                            (must be in number)
                          </span>
                          <span className="text-red-500 text-2xl"></span>
                        </label>
                        <input
                          type="text"
                          value={formData.parents_information[1]?.income || ""}
                          onChange={(e) =>
                            handleChange(
                              "parents_information",
                              "income",
                              e.target.value,
                              1
                            )
                          }
                          className="w-full p-2 border rounded dark:bg-white dark:border-black"
                        />
                        {errors.mother_income && (
                          <p className="text-red-500 text-sm">
                            {errors.mother_income}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium">
                          Office Address
                          <span className="text-red-500 text-2xl "></span>
                        </label>
                        <input
                          type="text"
                          value={
                            formData.parents_information[1]?.office_address ||
                            ""
                          }
                          onChange={(e) =>
                            handleChange(
                              "parents_information",
                              "office_address",
                              e.target.value,
                              1
                            )
                          }
                          className="w-full p-2 border rounded dark:bg-white dark:border-black"
                        />
                        {errors.mother_office_address && (
                          <p className="text-red-500 text-sm">
                            {errors.mother_office_address}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Mother Image  */}
                    <div className="grid grid-cols-1  gap-4">
                      <div>
                        <label className="block text-sm font-medium">
                          Mother Image
                          <span className="text-red-500 text-2xl">*</span>
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleChange(
                              "parents_information",
                              "image",
                              e.target.files[0],
                              1
                            )
                          }
                          className="w-full p-2 border rounded dark:bg-white dark:border-black"
                        />
                        {formData.parents_information[1]?.image && (
                          <div className="mt-2">
                            <img
                              src={URL.createObjectURL(
                                formData.parents_information[1].image
                              )}
                              alt="Mother's Preview"
                              className="w-24 h-24 object-cover rounded"
                            />
                          </div>
                        )}
                        {errors.mother_image && (
                          <p className="text-red-500 text-sm">
                            {errors.mother_image}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-lg dark:bg-gray-100 dark:text-black">
                <h3 className="text-xl font-bold mb-4">
                  Guardian's Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium">
                      Name<span className="text-red-500 text-2xl">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.parents_information[0]?.name || ""}
                      onChange={(e) =>
                        handleChange(
                          "parents_information",
                          "name",
                          e.target.value,
                          0
                        )
                      }
                      className="w-full p-2 border rounded dark:bg-white dark:border-black"
                    />
                    {errors.guardian_name && (
                      <p className="text-red-500 text-sm">
                        {errors.guardian_name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      Age<span className="text-red-500 text-2xl">*</span>
                    </label>
                    <input
                      type="number"
                      value={formData.parents_information[0]?.age || ""}
                      onChange={(e) =>
                        handleChange(
                          "parents_information",
                          "age",
                          e.target.value,
                          0
                        )
                      }
                      className="w-full p-2 border rounded dark:bg-white dark:border-black"
                    />
                    {errors.guardian_age && (
                      <p className="text-red-500 text-sm">
                        {errors.guardian_age}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      Relationship with Child
                      <span className="text-red-500 text-2xl">*</span>
                    </label>
                    <input
                      type="text"
                      value={
                        formData.parents_information[0]
                          ?.relationship_with_child || ""
                      }
                      onChange={(e) =>
                        handleChange(
                          "parents_information",
                          "relationship_with_child",
                          e.target.value,
                          0
                        )
                      }
                      className="w-full p-2 border rounded dark:bg-white dark:border-black"
                    />
                    {errors.guardian_relationship && (
                      <p className="text-red-500 text-sm">
                        {errors.guardian_relationship}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-between mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onBack}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 w-full sm:w-auto"
              >
                Go Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full sm:w-auto"
              >
                Save & Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
