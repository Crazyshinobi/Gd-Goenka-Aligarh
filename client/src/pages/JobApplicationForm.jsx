import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'; // Import useLocation
import { Layout } from "../components/Layout";


export default function JobApplicationForm() {
  const { state } = useLocation(); 
  const { job } = state || {}; // Destructure the job data

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profile: "",
    qualification: "",
    expectedSalary: "",
    lastOrganization: "",
    lastSalary: "",
    experience: "",
    address: "",
  });

  useEffect(() => {
    if (job) {
      setFormData((prev) => ({
        ...prev,
        profile: job.name,
      }));
    }
  }, [job]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Layout>
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-gray-600">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            placeholder="Enter Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Profile pre-filled with job name */}
        <div className="space-y-2">
          <label htmlFor="applyFor" className="block text-gray-600">
            Profile <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="applyFor"
            name="profile" // Correct the field name to match
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-500 bg-slate-200 focus:ring-1 focus:ring-gray-400"
            placeholder="Job Apply For"
            required
            value={formData.profile}
            disabled
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="qualification" className="block text-gray-600">
            Your Qualification <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            placeholder="Your Qualification"
            required
            value={formData.qualification}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="expectedSalary" className="block text-gray-600">
            Expected Salary <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="expectedSalary"
            name="expectedSalary"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            placeholder="Your Expected Salary"
            required
            value={formData.expectedSalary}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lastOrganization" className="block text-gray-600">
            Last Organization <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastOrganization"
            name="lastOrganization"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            placeholder="Your Last Organization"
            required
            value={formData.lastOrganization}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lastSalary" className="block text-gray-600">
            Last Salary <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastSalary"
            name="lastSalary"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            placeholder="Your Last Salary"
            required
            value={formData.lastSalary}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="experience" className="block text-gray-600">
            Experience <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="experience"
            name="experience"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            placeholder="Your Experience"
            required
            value={formData.experience}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="cv" className="block text-gray-600">
            Upload CV <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            id="cv"
            name="cv"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="address" className="block text-gray-600">
            Address <span className="text-red-500">*</span>
          </label>
          <textarea
            id="address"
            name="address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            placeholder="Your address"
            required
            value={formData.address}
            onChange={handleChange}
            rows={3}
          />
        </div>
      </div>

    
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md transition-colors"
      >
        Send
      </button>
    </form>
    </Layout>
  );
}
