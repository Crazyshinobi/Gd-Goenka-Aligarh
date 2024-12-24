import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "../components/Layout";

export default function JobApplicationForm() {
  document.title = "Job Application - GDGPS Aligarh";
  const { state } = useLocation();
  const { job } = state || {};

  const [formData, setFormData] = useState({
    name: "",
    profile: "",
    qualification: "",
    expectedSalary: "",
    lastOrganization: "",
    lastSalary: "",
    experience: "",
    address: "",
    profilePhoto: null,
    resume: null,
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (job) {
      setFormData((prev) => ({
        ...prev,
        profile: job.name,
      }));
    }
  }, [job]);

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.qualification)
      errors.qualification = "Qualification is required.";
    if (!formData.expectedSalary)
      errors.expectedSalary = "Expected Salary is required.";
    if (!formData.lastOrganization)
      errors.lastOrganization = "Last Organization is required.";
    if (!formData.lastSalary) errors.lastSalary = "Last Salary is required.";
    if (!formData.experience) errors.experience = "Experience is required.";
    if (!formData.address) errors.address = "Address is required.";
    if (!formData.profilePhoto)
      errors.profilePhoto = "Profile photo is required.";
    if (!formData.resume) errors.resume = "Resume is required.";
    console.log("Validation errors found:", errors);
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submission triggered");

    console.log("Form Data before validation:", formData);
    console.log("Form Errors before validation:", formErrors);
    // Validate the form and check for errors
    const errors = validateForm();
    console.log("Validation Errors:", errors);
    setFormErrors(errors); // This sets errors into the state, but they won't appear immediately in the component

    if (Object.keys(errors).length === 0) {
      console.log("No validation errors, logging form data:");
      console.log("Form Data:", formData);

      // Create a FormData object to handle file inputs
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      console.log("FormData object:");
      for (let [key, value] of formDataToSend.entries()) {
        console.log(key, value);
      }

      // Simulate form submission
      setIsSubmitting(true);
      setTimeout(() => {
        console.log("Form submission completed");
        setIsSubmitting(false);
        alert("Form data logged to console. Check browser developer tools.");
      }, 2000);
    } else {
      console.log("Errors present, submission halted.");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (name === "profilePhoto") {
        if (file && file.size > 5 * 1024 * 1024) {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            profilePhoto: "Profile photo must be under 5 mb",
          }));
          return;
        }

        setFormData((prev) => ({
          ...prev,
          profilePhoto: file,
        }));

        setFormErrors((prevErrors) => ({
          ...prevErrors,
          profilePhoto: null,
        }));
      } else if (name === "cv") {
        if (file && file.type !== "application/pdf") {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            resume: `Only Pdf's are accepted`,
          }));
          setFormData((prev) => ({
            ...prev,
            resume: null,
          }));
          return;
        }
        setFormData((prev) => ({
          ...prev,
          resume: file,
        }));

        setFormErrors((prevErrors) => ({
          ...prevErrors,
          resume: null,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    console.log("Updated Form Data:", formData);
  };

  return (
    <Layout>
      <form  onSubmit={handleSubmit}
        className="max-w-6xl mx-auto p-6 space-y-6 bg-white shadow-lg rounded-md"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Job Application
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-gray-600">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full px-4 py-2 border ${
                formErrors.name ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400`}
              placeholder="Enter Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && (
              <span className="text-red-500 text-sm">{formErrors.name}</span>
            )}
          </div>

          {/* Profile */}
          <div className="space-y-2">
            <label htmlFor="applyFor" className="block text-gray-600">
              Profile <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="applyFor"
              name="profile"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-200 text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400"
              value={formData.profile}
              disabled
            />
          </div>
        </div>

        {/* Profile Photo Upload */}
        <div className="space-y-2">
          <label htmlFor="profilePhoto" className="block text-gray-600">
            Profile Photo <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            id="profilePhoto"
            name="profilePhoto"
            className={`w-full px-4 py-2 border ${
              formErrors.profilePhoto ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400`}
            onChange={handleChange}
            accept="image/*"
            required
          />
          {formErrors.profilePhoto && (
            <span className="text-red-500 text-sm">
              {formErrors.profilePhoto}
            </span>
          )}
        </div>

        {/* Qualification & Salary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="qualification" className="block text-gray-600">
              Your Qualification <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              className={`w-full px-4 py-2 border ${
                formErrors.qualification ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400`}
              placeholder="Your Qualification"
              required
              value={formData.qualification}
              onChange={handleChange}
            />
            {formErrors.qualification && (
              <span className="text-red-500 text-sm">
                {formErrors.qualification}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="expectedSalary" className="block text-gray-600">
              Expected Salary <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="expectedSalary"
              name="expectedSalary"
              className={`w-full px-4 py-2 border ${
                formErrors.expectedSalary ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400`}
              placeholder="Your Expected Salary"
              required
              value={formData.expectedSalary}
              onChange={handleChange}
            />
            {formErrors.expectedSalary && (
              <span className="text-red-500 text-sm">
                {formErrors.expectedSalary}
              </span>
            )}
          </div>
        </div>

        {/* Last Organization, Last Salary, Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="lastOrganization" className="block text-gray-600">
              Last Organization <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastOrganization"
              name="lastOrganization"
              className={`w-full px-4 py-2 border ${
                formErrors.lastOrganization
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400`}
              placeholder="Your Last Organization"
              required
              value={formData.lastOrganization}
              onChange={handleChange}
            />
            {formErrors.lastOrganization && (
              <span className="text-red-500 text-sm">
                {formErrors.lastOrganization}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="lastSalary" className="block text-gray-600">
              Last Salary <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastSalary"
              name="lastSalary"
              className={`w-full px-4 py-2 border ${
                formErrors.lastSalary ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400`}
              placeholder="Your Last Salary"
              required
              value={formData.lastSalary}
              onChange={handleChange}
            />
            {formErrors.lastSalary && (
              <span className="text-red-500 text-sm">
                {formErrors.lastSalary}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="experience" className="block text-gray-600">
              Experience <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              className={`w-full px-4 py-2 border ${
                formErrors.experience ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400`}
              placeholder="Your Experience"
              required
              value={formData.experience}
              onChange={handleChange}
            />
            {formErrors.experience && (
              <span className="text-red-500 text-sm">
                {formErrors.experience}
              </span>
            )}
          </div>
        </div>

        {/* CV Upload & Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="cv" className="block text-gray-600">
              Upload Resume <span className="text-red-500">*</span>{" "}
              <span>(Only Pdf's are accepted)</span>
            </label>
            <input
              type="file"
              id="cv"
              name="cv"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              required
              accept=".pdf"
              onChange={handleChange}
            />
            {formErrors.resume && (
              <span className="text-red-500 text-sm">{formErrors.resume}</span>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="address" className="block text-gray-600">
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              id="address"
              name="address"
              className={`w-full px-4 py-2 border ${
                formErrors.address ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400`}
              placeholder="Your address"
              required
              value={formData.address}
              onChange={handleChange}
              rows={3}
            />
            {formErrors.address && (
              <span className="text-red-500 text-sm">{formErrors.address}</span>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-3 rounded-md transition-colors text-white ${
            isSubmitting
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
          disabled={isSubmitting || Object.keys(formErrors).length > 0}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
          
        </button>
        
      </form>
    </Layout>
  );
}
