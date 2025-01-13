import React, { useState } from "react";

const ParentInformationForm = () => {
  const [parentType, setParentType] = useState("father");
  const [formData, setFormData] = useState({
    father: {
      name: "",
      age: "",
      nationality: "",
      education: "",
      profession : "",
      income : "",
      office_address : "",
      email : "",
    },
    mother: {
      name: "",
      age: "",
      nationality: "",
      education: "",
      image: null,
    },
    guardian: {
      name: "",
      age: "",
      relationshipWithChild: "",
    },
  });

  const handleInputChange = (e, section, field) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parentType === "father") {
      console.log("Father data submitted", formData.father);
      console.log("Mother data submitted", formData.mother);
    } else if (parentType === "guardian") {
      console.log("Guardian data submitted", formData.guardian);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
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
                  value={formData.father.name}
                  onChange={(e) => handleInputChange(e, "father", "name")}
                  required
                />
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
                  value={formData.father.age}
                  onChange={(e) => handleInputChange(e, "father", "age")}
                  required
                />
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
                  value={formData.father.nationality}
                  onChange={(e) =>
                    handleInputChange(e, "father", "nationality")
                  }
                  required
                />
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
                  value={formData.father.education}
                  onChange={(e) => handleInputChange(e, "father", "education")}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="fatherEducation" className="font-medium">
                Father's profession:
                </label>
                <input
                  type="text"
                  id="fatherProfession"
                  className="p-2 border rounded-md"
                  placeholder="Enter father profession"
                  value={formData.father.profession}
                  onChange={(e) => handleInputChange(e, "father", "profession")}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="fatherEducation" className="font-medium">
                 Father's Annual income:
                </label>
                <input
                  type="number"
                  id="fatherIncome"
                  className="p-2 border rounded-md"
                  placeholder="Enter father income"
                  value={formData.father.income}
                  onChange={(e) => handleInputChange(e, "father", "income")}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="fatherEducation" className="font-medium">
                 Office address:
                </label>
                <input
                  type="text"
                  id="fatherOfficeAddress"
                  className="p-2 border rounded-md"
                  placeholder="Enter office address"
                  value={formData.father.office_address}
                  onChange={(e) => handleInputChange(e, "father", "office_address")}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="fatherEducation" className="font-medium">
                email:
                </label>
                <input
                  type="email"
                  id="fatheremail"
                  className="p-2 border rounded-md"
                  placeholder="Enter email"
                  value={formData.father.email}
                  onChange={(e) => handleInputChange(e, "father", "email")}
                  required
                />
              </div>
             
            </div>

            {/* Mother's Information */}
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
                  value={formData.mother.name}
                  onChange={(e) => handleInputChange(e, "mother", "name")}
                  required
                />
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
                  value={formData.mother.age}
                  onChange={(e) => handleInputChange(e, "mother", "age")}
                  required
                />
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
                  value={formData.mother.nationality}
                  onChange={(e) =>
                    handleInputChange(e, "mother", "nationality")
                  }
                  required
                />
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
                  value={formData.mother.education}
                  onChange={(e) => handleInputChange(e, "mother", "education")}
                  required
                />
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
                value={formData.guardian.name}
                onChange={(e) => handleInputChange(e, "guardian", "name")}
                required
              />
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
                value={formData.guardian.age}
                onChange={(e) => handleInputChange(e, "guardian", "age")}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="relationshipWithChild" className="font-medium">
                Relationship with Child:
              </label>
              <input
                type="text"
                id="relationshipWithChild"
                className="p-2 border rounded-md"
                placeholder="Enter relationship"
                value={formData.guardian.relationshipWithChild}
                onChange={(e) =>
                  handleInputChange(e, "guardian", "relationshipWithChild")
                }
                required
              />
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
  );
};

export default ParentInformationForm;
