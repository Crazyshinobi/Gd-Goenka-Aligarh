import React, { useEffect, useState } from "react";
import { UserLayout } from "../components/UserLayout";
import { useForm } from "./FormContext"; // Accessing form data and handleChange from context
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";

export const OtherRelatives = ({ onNext, onBack }) => {
  const { formData, handleChange } = useForm(); // Accessing form context
  const [errors, setErrors] = useState({}); // Error state for form validation
  const [showAddRelativeForm, setShowAddRelativeForm] = useState(false); // Toggle for showing the form
  const [newRelative, setNewRelative] = useState({
    relation: "",
    name: "",
    age: "",
    school: "",
    grade: "",
  }); // State for the new relative's form data

  // Ensure the relatives state is an array
  const relatives = Array.isArray(formData.other_relatives)
    ? formData.other_relatives
    : [];

  // Handle changes in the new relative form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRelative((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Validate the new relative form
  const validateForm = () => {
    const newErrors = {};
    if (showAddRelativeForm) {
      // Only validate if the add relative form is visible
      if (!newRelative.relation) newErrors.relation = "Relation is required";
      if (!newRelative.name) newErrors.name = "Name is required";
      if (!newRelative.age || newRelative.age <= 0)
        newErrors.age = "Age must be a positive number";
      if (!newRelative.school) newErrors.school = "School is required";
      if (!newRelative.grade) newErrors.grade = "Grade is required";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle the submission of the new relative form
  const handleRelativeSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Add the new relative to the list
      const updatedRelatives = [...relatives, newRelative];
      handleChange("other_relatives", null, updatedRelatives); // Update the form context with the new relative

      // Clear the form and hide it
      setNewRelative({
        relation: "",
        name: "",
        age: "",
        school: "",
        grade: "",
      });
      setShowAddRelativeForm(false); // Hide the form after submission
      setErrors({});
      toast.success("Relative added successfully!");
    }
  };

  const handleCancel = () => {
    setShowAddRelativeForm(false);
    setNewRelative({
      relation: "",
      name: "",
      age: "",
      school: "",
      grade: "",
    });
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate that at least the existing relatives are valid
    const existingRelatives = Array.isArray(formData.other_relatives) 
      ? formData.other_relatives 
      : [];
  
    try {
      const user = Cookies.get("userId");
      const submitData = {
        user,
        other_relatives: existingRelatives
      };
  
      // console.log('Submitting data:', submitData);
  
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/admission-application/admission-form/6`,
        submitData
      );
  
      if (response?.data?.success) {
        toast.success('Relatives information saved successfully!');
        onNext();
      } else {
        toast.error(response?.data?.message || 'Failed to save relatives information');
      }
    } catch (error) {
      console.error('Error submitting relatives:', error);
      toast.error('An error occurred while saving relatives information');
    }
  };
  
  const fetchDetails = async () => {
    try {
      const user = Cookies.get("userId");
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/admission-application/get-admission-form/6`,
        { user }
      );
  
      if (response?.data?.success && response.data.admission?.other_relatives) {
        // Update the form context with the fetched relatives
        const relatives = response.data.admission.other_relatives;
        
        // Ensure the data is in the correct format
        const formattedRelatives = relatives.map(relative => ({
          relation: relative.relation || "",
          name: relative.name || "",
          age: relative.age || "",
          school: relative.school || "",
          grade: relative.grade || "",
        }));
  
        // Update form context
        handleChange("other_relatives", null, formattedRelatives);
        
        // console.log('Fetched relatives:', formattedRelatives);
      }
    } catch (error) {
      console.error('Error fetching relatives:', error);
      toast.error('Failed to fetch existing relatives');
    }
  };
  

  // Add useEffect to fetch data when component mounts
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <UserLayout />
      <Toaster />
      <div className="p-4 py-6 lg:p-6 sm:ml-64 dark:bg-gray-800 min-h-screen">
        <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white  bg-white dark:bg-gray-700 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Other Relatives Information
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Button to Add Relative */}
            <button
              type="button"
              onClick={() => setShowAddRelativeForm(true)} // Show the form when clicked
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Add Relative
            </button>

            {/* Show form for adding relative when 'showAddRelativeForm' is true */}
            {showAddRelativeForm && (
              <div className="space-y-4 mt-6">
                {/* Relation (Dropdown for Brother/Sister) */}
                <div className="flex flex-col">
                  <label className="font-medium">
                    Relation:<span className="text-red-500 text-2xl">*</span>
                  </label>
                  <select
                    name="relation"
                    value={newRelative.relation}
                    onChange={handleInputChange}
                    className="p-2 border rounded-md"
                  >
                    <option value="">Select Relation</option>
                    <option value="brother">Brother</option>
                    <option value="sister">Sister</option>
                  </select>
                  {errors.relation && (
                    <span className="text-red-500 text-sm">
                      {errors.relation}
                    </span>
                  )}
                </div>

                {/* Name */}
                <div className="flex flex-col">
                  <label className="font-medium">
                    Name:<span className="text-red-500 text-2xl">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newRelative.name}
                    onChange={handleInputChange}
                    className="p-2 border rounded-md"
                    placeholder="Enter name"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">{errors.name}</span>
                  )}
                </div>

                {/* Age */}
                <div className="flex flex-col">
                  <label className="font-medium">
                    Age:<span className="text-red-500 text-2xl">*</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={newRelative.age}
                    onChange={handleInputChange}
                    className="p-2 border rounded-md"
                    placeholder="Enter age"
                  />
                  {errors.age && (
                    <span className="text-red-500 text-sm">{errors.age}</span>
                  )}
                </div>

                {/* School */}
                <div className="flex flex-col">
                  <label className="font-medium">
                    School:<span className="text-red-500 text-2xl">*</span>
                  </label>
                  <input
                    type="text"
                    name="school"
                    value={newRelative.school}
                    onChange={handleInputChange}
                    className="p-2 border rounded-md"
                    placeholder="Enter school name"
                  />
                  {errors.school && (
                    <span className="text-red-500 text-sm">
                      {errors.school}
                    </span>
                  )}
                </div>

                {/* Grade */}
                <div className="flex flex-col">
                  <label className="font-medium">
                    Grade:<span className="text-red-500 text-2xl">*</span>
                  </label>
                  <input
                    type="text"
                    name="grade"
                    value={newRelative.grade}
                    onChange={handleInputChange}
                    className="p-2 border rounded-md"
                    placeholder="Enter grade"
                  />
                  {errors.grade && (
                    <span className="text-red-500 text-sm">{errors.grade}</span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleRelativeSubmit}
                  className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
                >
                  Add Relative
                </button>

                {/* Cancel Button */}
                <button
                  type="button"
                  onClick={handleCancel}
                  className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 mt-4"
                >
                  Cancel
                </button>
              </div>
            )}

            {/* Display the list of relatives (for viewing) */}
            <div className="mt-6">
              <h3 className="text-xl font-bold">Relatives Added:</h3>
              <ul>
                {relatives.length > 0 ? (
                  relatives.map((relative, index) => (
                    <li key={index} className="my-2">
                      <strong>{relative.name}</strong> ({relative.relation}) -{" "}
                      {relative.age} years old
                    </li>
                  ))
                ) : (
                  <li>No relatives added yet.</li>
                )}
              </ul>
            </div>

            {/* Submit Button */}
            <div className="flex justify-between mt-6">
              <button
                onClick={onBack}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Go Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
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
