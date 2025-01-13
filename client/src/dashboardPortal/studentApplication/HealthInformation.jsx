import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setFormStep ,getFormStep  } from "../../utils/status";  
import Timeline from "./Timeline";


const HealthInformation = () => {
  const navigate = useNavigate();
  const currentStep = getFormStep();
  const [submitted, setSubmitted] = useState(false); 


  const [formData, setFormData] = useState({
    allergy: "",
    physical_handicap: "",
    other: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();

    setFormStep(3)
    setSubmitted(true)
    navigate('/student-application/educational-background')
  }
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mb-8">
      <Timeline currentStep={currentStep}/>
      <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Health Information</h2>
      <form>
        {/* Allergy */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Allergy <span className="text-gray-400">(if any)</span></label>
          <input
            type="text"
            name="allergy"
            value={formData.allergy}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Physical Handicap */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Physical Handicap/disability</label>
          <input
            type="text"
            name="physical_handicap"
            value={formData.physical_handicap}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Other Health Conditions */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Other Health Problems</label>
          <textarea
            name="other"
            value={formData.other}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </div>

        <button onClick={handleSubmit}
          type="submit"
          className="bg-blue-500 text-white py-2 px-6 rounded-full mt-4 hover:bg-blue-600 transition duration-300"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default HealthInformation;
