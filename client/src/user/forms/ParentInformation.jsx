import React, { useEffect, useState } from "react";
import { UserLayout } from "../components/UserLayout";
import { useForm } from "./FormContext";
import axios from "axios";
import Cookies from "js-cookie";

export const ParentInformation = ({ onBack, onNext }) => {
  const { formData, setFormData, handleChange } = useForm();
  const [parentType, setParentType] = useState("father_mother"); // Default to "father_mother"

  const [errors, setErrors] = useState({});

  const handleParentTypeChange = (e) => {
    const newParentType = e.target.value;
    setParentType(newParentType);

    // Reset only the parents_information field based on the selected parent type
    if (newParentType === "father_mother") {
      setFormData((prevData) => ({
        ...prevData, // Keep the rest of the formData unchanged
        parents_information: [{}, {}], // Reset to two empty objects for father_mother
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
      if (!formData.parents_information[0]?.profession) {
        newErrors.father_profession = "Father's profession is required.";
      }
      if (!formData.parents_information[0]?.adhaar_number) {
        newErrors.father_adhaar_number = "Father's Adhaar Number is required.";
      }

      if (!formData.parents_information[0]?.image) {
        newErrors.father_image = "Father's image is required.";
      }

      if (formData.parents_information[0]?.adhaar_number) {
        if (
          formData.parents_information[0]?.adhaar_number.toString().length !==
          12
        ) {
          newErrors.father_adhaar_number =
            "Adhaar number should be of exactly 12 length";
        }
      }

      if (!formData.parents_information[0]?.income) {
        newErrors.father_income = "Father's Income is required";
      }

      if (!formData.parents_information[0]?.office_address) {
        newErrors.father_office_address = "Father's Office address is required";
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
      if (!formData.parents_information[1]?.profession) {
        newErrors.mother_profession = "Mother's profession is required.";
      }
      if (!formData.parents_information[1]?.adhaar_number) {
        newErrors.mother_adhaar_number = "Mother's Adhaar Number is required.";
      }

      if (!formData.parents_information[1]?.image) {
        newErrors.mother_image = "Mother's image is required.";
      }

      if (formData.parents_information[1]?.adhaar_number) {
        if (
          formData.parents_information[1]?.adhaar_number.toString().length !==
          12
        ) {
          newErrors.mother_adhaar_number =
            "Adhaar number should be of exactly 12 length";
        }
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

      if (!formData.parents_information[0]?.adhaar_number) {
        newErrors.gaurdian_adhaar_number =
          "Gaurdian's Adhaar Number is required.";
      }

      if (formData.parents_information[0]?.adhaar_number) {
        if (
          formData.parents_information[0]?.adhaar_number.toString().length !==
          12
        ) {
          newErrors.gaurdian_adhaar_number =
            "Adhaar number should be of exactly 12 length";
        }
      }

      if (!formData.parents_information[0]?.image) {
        newErrors.guardian_image = "Guardian's image is required.";
      }
    }

    setErrors(newErrors); // Update the errors state
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateFields();
    if (!isValid) {
      alert("Please fill in all required fields correctly");
      return;
    }

    let updatedFormData = { ...formData };

    if (parentType === "father_mother") {
      const father = {
        parent_type: "father", // Ensure parent_type is present
        name: formData.parents_information[0]?.name || "",
        age: formData.parents_information[0]?.age || "",
        education: formData.parents_information[0]?.education || "",
        profession: formData.parents_information[0]?.profession || "",
        income: formData.parents_information[0]?.income || "",
        office_address: formData.parents_information[0]?.office_address || "",
        adhaar_number: formData.parents_information[0]?.adhaar_number || "",
        image: formData.parents_information[0]?.image || "",
      };

      const mother = {
        parent_type: "mother", // Ensure parent_type is present
        name: formData.parents_information[1]?.name || "",
        age: formData.parents_information[1]?.age || "",
        education: formData.parents_information[1]?.education || "",
        profession: formData.parents_information[1]?.profession || "",
        income: formData.parents_information[1]?.income || "",
        office_address: formData.parents_information[1]?.office_address || "",
        adhaar_number: formData.parents_information[1]?.adhaar_number || "",
        image: formData.parents_information[1]?.image || "",
      };

      updatedFormData.parents_information = [father, mother];
    } else if (parentType === "guardian") {
      const guardian = {
        parent_type: "guardian", // Ensure parent_type is present
        name: formData.parents_information[0]?.name || "",
        age: formData.parents_information[0]?.age || "",
        education: formData.parents_information[0]?.education || "",
        profession: formData.parents_information[0]?.profession || "",
        income: formData.parents_information[0]?.income || "",
        office_address: formData.parents_information[0]?.office_address || "",
        relationship_with_child:
          formData.parents_information[0]?.relationship_with_child || "",
        adhaar_number: formData.parents_information[0]?.adhaar_number || "",
        image: formData.parents_information[0]?.image || "",
      };

      updatedFormData.parents_information = [guardian];
    }

    // Force state update to ensure parent_type is stored
    setFormData((prev) => ({
      ...prev,
      parents_information: updatedFormData.parents_information,
    }));

    try {
      const user = Cookies.get("userId");
      updatedFormData.user = user;

      const apiUrl = `${process.env.REACT_APP_BASE_URL}/api/v1/admission-application/admission-form/5`;
      const response = await axios.post(apiUrl, updatedFormData);

      if (response?.data?.success) {
        // console.log("Success:", response.data);
        onNext();
      } else {
        console.error("API Error:", response.data);
        alert("Failed to save parents' information");
      }
    } catch (error) {
      console.error("Request Error:", error);
    }
  };

  const handleFileChange = async (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/v1/upload`, // Your file upload endpoint
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.data.success) {
          // Save the file path or URL in the form data
          handleChange(
            "parents_information",
            "image",
            response.data.fileUrl,
            index
          );
        } else {
          console.error("Failed to upload file:", response.data.message);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const fetchDetails = async () => {
    try {
      const user = Cookies.get("userId");

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/admission-application/get-admission-form/5`,
        { user }
      );

      if (
        response?.data?.success &&
        response.data.admission?.parents_information
      ) {
        const parentsInfo = response.data.admission.parents_information;
        let updatedFormData = { ...formData };

        if (parentsInfo.some((p) => p.parent_type === "guardian")) {
          setParentType("guardian");

          const guardian = parentsInfo.find(
            (p) => p.parent_type === "guardian"
          );
          updatedFormData.parents_information = [
            {
              parent_type: "guardian",
              name: guardian?.name || "",
              age: guardian?.age || "",
              education: guardian?.education || "",
              adhaar_number: guardian?.adhaar_number || "",
              image: guardian?.image || "",
              relationship_with_child: guardian?.relationship_with_child || "",
              profession: guardian?.profession || "",
              income: guardian?.income || "",
              office_address: guardian?.office_address || "",
            },
          ];
        } else {
          setParentType("father_mother");

          const father =
            parentsInfo.find((p) => p.parent_type === "father") || {};
          const mother =
            parentsInfo.find((p) => p.parent_type === "mother") || {};

          updatedFormData.parents_information = [
            {
              parent_type: "father",
              name: father?.name || "",
              age: father?.age || "",
              education: father?.education || "",
              adhaar_number: father?.adhaar_number || "",
              image: father?.image || "",
              profession: father?.profession || "",
              income: father?.income || "",
              office_address: father?.office_address || "",
            },
            {
              parent_type: "mother",
              name: mother?.name || "",
              age: mother?.age || "",
              education: mother?.education || "",
              adhaar_number: mother?.adhaar_number || "",
              image: mother?.image || "",
              profession: mother?.profession || "",
              income: mother?.income || "",
              office_address: mother?.office_address || "",
            },
          ];
        }

        // Ensure parent_type is saved correctly
        setFormData(updatedFormData);
      }
    } catch (error) {
      console.error("Error fetching details:", error);
      alert("Failed to fetch existing details");
    }
  };

  useEffect(() => {
    // fetchDetails();
    console.log("Updated formData:", formData);
  }, [formData]); // Log changes whenever formData updates

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

                    {/* Second Row: Education, Profession, Income */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                          type="number"
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
                      <div>
                        <label className="block text-sm font-medium">
                          Adhaar Number
                          <span className="text-red-500 text-2xl">*</span>
                        </label>
                        <input
                          type="number"
                          maxLength={12}
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
                          Upload Father's Image
                          <span className="text-red-500 text-2xl">*</span>
                        </label>
                        <input
                          type="file"
                          onChange={(e) => handleFileChange(e, 0)} // Pass index for father (0)
                          className="w-full p-2 border rounded dark:bg-white dark:border-black"
                        />
                        {errors.father_image && (
                          <p className="text-red-500 text-sm">
                            {errors.father_image}
                          </p>
                        )}
                      </div>
                      <div>
                        {formData.parents_information[0]?.image && (
                          <img
                            src={`${formData.parents_information[0].image}`}
                            alt="Father's Image"
                            className="w-20 h-20"
                          />
                        )}
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

                    {/* Second Row: Education, Profession, Income */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                          type="number"
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

                      <div>
                        <label className="block text-sm font-medium">
                          Adhaar Number
                          <span className="text-red-500 text-2xl">*</span>
                        </label>
                        <input
                          type="number"
                          maxLength={12}
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
                          Upload Mother's Image
                          <span className="text-red-500 text-2xl">*</span>
                        </label>
                        <input
                          type="file"
                          onChange={(e) => handleFileChange(e, 1)} // Pass index for mother (1)
                          className="w-full p-2 border rounded dark:bg-white dark:border-black"
                        />
                        {errors.mother_image && (
                          <p className="text-red-500 text-sm">
                            {errors.mother_image}
                          </p>
                        )}
                      </div>

                      <div>
                        {formData.parents_information[1]?.image && (
                          <img
                            src={`${formData.parents_information[1].image}`}
                            alt="Mother's Image"
                            className="w-20 h-20"
                          />
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
                        Education
                        <span className="text-red-500 text-2xl">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.parents_information[0]?.education || ""}
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
                      {errors.guardian_education && (
                        <p className="text-red-500 text-sm">
                          {errors.guardian_education}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Second Row: Education, Profession, Income */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                      {errors.guardian_profession && (
                        <p className="text-red-500 text-sm">
                          {errors.guardian_profession}
                        </p>
                      )}
                    </div>
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
                        type="number"
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
                      {errors.guardian_income && (
                        <p className="text-red-500 text-sm">
                          {errors.guardian_income}
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
                          formData.parents_information[0]?.office_address || ""
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
                      {errors.guardian_office_address && (
                        <p className="text-red-500 text-sm">
                          {errors.guardian_office_address}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        Adhaar Number
                        <span className="text-red-500 text-2xl">*</span>
                      </label>
                      <input
                        type="number"
                        maxLength={12}
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
                      {errors.gaurdian_adhaar_number && (
                        <p className="text-red-500 text-sm">
                          {errors.gaurdian_adhaar_number}
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

                    <div>
                      <label className="block text-sm font-medium">
                        Upload Guardian's Image
                        <span className="text-red-500 text-2xl">*</span>
                      </label>
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, 0)} // Pass index for guardian (0)
                        className="w-full p-2 border rounded dark:bg-white dark:border-black"
                      />
                      {errors.guardian_image && (
                        <p className="text-red-500 text-sm">
                          {errors.guardian_image}
                        </p>
                      )}
                    </div>

                    <div>
                      {formData.parents_information[0]?.image && (
                        <img
                          src={`${formData.parents_information[0].image}`}
                          alt="Guardian's Image"
                          className="w-20 h-20"
                        />
                      )}
                    </div>
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
