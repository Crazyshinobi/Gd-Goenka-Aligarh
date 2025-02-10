import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { useForm } from "../forms/FormContext";
import { UserLayout } from "../components/UserLayout";

export const StudentDataPdf = () => {
  const { formData } = useForm(); // Access formData from context
  const [isGenerating, setIsGenerating] = useState(false);


  const generatePDF = () => {
    setIsGenerating(true);
    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(18);
    doc.text("Form Data", 14, 10);

    let yPosition = 20;

    // Personal Details
    doc.setFontSize(12);
    doc.text("Personal Details:", 14, yPosition);
    yPosition += 10;
    doc.text(`First Name: ${formData.personal_details.first_name}`, 14, yPosition);
    yPosition += 6;
    doc.text(`Last Name: ${formData.personal_details.last_name}`, 14, yPosition);
    yPosition += 6;
    doc.text(`Date of Birth: ${formData.personal_details.dob}`, 14, yPosition);
    yPosition += 6;
    doc.text(`Nationality: ${formData.personal_details.nationality}`, 14, yPosition);
    yPosition += 6;
    doc.text(`Gender: ${formData.personal_details.gender}`, 14, yPosition);
    yPosition += 6;
    doc.text(`Email: ${formData.personal_details.email}`, 14, yPosition);
    yPosition += 6;
    doc.text(`Mobile: ${formData.personal_details.mobile}`, 14, yPosition);
    yPosition += 6;
    doc.text(`Emergency Mobile: ${formData.personal_details.emergency_mobile}`, 14, yPosition);
    yPosition += 10;

    // General Information
    doc.text("General Information:", 14, yPosition);
    yPosition += 10;
    doc.text(`Grade: ${formData.general_information.grade}`, 14, yPosition);
    yPosition += 6;
    doc.text(`Applied Before: ${formData.general_information.applied_before ? "Yes" : "No"}`, 14, yPosition);
    yPosition += 6;
    doc.text(`Applied Year: ${formData.general_information.applied_year}`, 14, yPosition);
    yPosition += 6;
    doc.text(`Applied Grade: ${formData.general_information.applied_grade}`, 14, yPosition);
    yPosition += 10;

    // Educational Background
    doc.text("Educational Background:", 14, yPosition);
    yPosition += 10;
    doc.text(`Attended School: ${formData.educational_background.attended_school ? "Yes" : "No"}`, 14, yPosition);
    yPosition += 6;
    doc.text(`Previous School: ${formData.educational_background.previous_school}`, 14, yPosition);
    yPosition += 6;
    doc.text(`City: ${formData.educational_background.city}`, 14, yPosition);
    yPosition += 6;
    doc.text(`From Grade: ${formData.educational_background.from_grade}`, 14, yPosition);
    yPosition += 6;
    doc.text(`To Grade: ${formData.educational_background.to_grade}`, 14, yPosition);
    yPosition += 6;
    doc.text(`Expelled: ${formData.educational_background.expelled ? "Yes" : "No"}`, 14, yPosition);
    yPosition += 6;
    doc.text(`Expelled Reason: ${formData.educational_background.expelled_reason}`, 14, yPosition);
    yPosition += 10;

    // Health Information
    doc.text("Health Information:", 14, yPosition);
    yPosition += 10;
    doc.text(`Allergy: ${formData.health_information.allergy}`, 14, yPosition);
    yPosition += 6;
    doc.text(`Physical Handicap: ${formData.health_information.physical_handicap}`, 14, yPosition);
    yPosition += 6;
    doc.text(`Other: ${formData.health_information.other}`, 14, yPosition);
    yPosition += 10;

    // Parents Information (Handle the first parent)
    if (formData.parents_information.length > 0) {
      const parent = formData.parents_information[0]; // Assuming there is at least one parent in the array
      doc.text("Parents Information:", 14, yPosition);
      yPosition += 10;
      doc.text(`Father's Name: ${parent.father_name || ""}`, 14, yPosition);
      yPosition += 6;
      doc.text(`Mother's Name: ${parent.mother_name || ""}`, 14, yPosition);
      yPosition += 6;
      doc.text(`Guardian's Name: ${parent.guardian_name || ""}`, 14, yPosition);
      yPosition += 10;
    }

    // Transport Facility and Declaration
    doc.text("Transport Facility: " + (formData.transport_facility ? "Yes" : "No"), 14, yPosition);
    yPosition += 6;
    doc.text("Declaration: " + (formData.declaration ? "Yes" : "No"), 14, yPosition);

    // Save the PDF
    setIsGenerating(false)
    doc.save("form-data.pdf");
  };

  return (
    <>
     <UserLayout />
     <div className="p-4 lg:mt-12 lg:p-6 sm:ml-64 dark:bg-gray-800 min-h-screen">
       <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white bg-white dark:bg-gray-700 shadow-lg">
         <h2 className="text-xl lg:text-2xl font-bold mb-8 text-center dark:text-white">
           Admission Application
         </h2>
        
        <div className="flex flex-row justify-end">
        <button
           onClick={generatePDF}
           disabled={isGenerating}
           className={`px-4 py-2 rounded-lg ${
             isGenerating ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
           } text-white transition duration-200`}
         >
           {isGenerating ? "Generating PDF..." : "Download PDF"}
         </button>
        </div>

        {/* General Information */}
        <div className="mb-8 bg-gray-50 dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold dark:text-white mb-4 border-b pb-2">
            General Information
          </h3>
          <div className="space-y-3">
            <p className="dark:text-white">
              <strong>Grade:</strong>{" "}
              {formData.general_information?.grade || "N/A"}
            </p>
            <p className="dark:text-white text-lg text-blue-600">
              <strong>Applied Before:</strong>{" "}
              {formData.general_information?.applied_before ? "YES" : "NO"}
            </p>
            {formData.general_information?.applied_before && (
              <>
                <p className="dark:text-white">
                  <strong>Academic Year:</strong>{" "}
                  {formData.general_information?.applied_year || "N/A"}
                </p>
                <p className="dark:text-white">
                  <strong>Class:</strong>{" "}
                  {formData.general_information?.applied_grade || "N/A"}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Personal Details */}
        <div className="mb-8 bg-gray-50 dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold dark:text-white mb-4 border-b pb-2">
            Personal Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="dark:text-white">
              <strong>First Name:</strong>{" "}
              {formData.personal_details?.first_name || "N/A"}
            </p>
            <p className="dark:text-white">
              <strong>Middle Name:</strong>{" "}
              {formData.personal_details?.middle_name || "N/A"}
            </p>
            <p className="dark:text-white">
              <strong>Last Name:</strong>{" "}
              {formData.personal_details?.last_name || "N/A"}
            </p>
            <p className="dark:text-white">
              <strong>Date of Birth:</strong>{" "}
              {formData.personal_details?.dob || "N/A"}
            </p>
            <p className="dark:text-white">
              <strong>Nationality:</strong>{" "}
              {formData.personal_details?.nationality || "N/A"}
            </p>
            <p className="dark:text-white">
              <strong>Gender:</strong>{" "}
              {formData.personal_details?.gender || "N/A"}
            </p>
            <p className="dark:text-white">
              <strong>Address:</strong>{" "}
              {formData.personal_details?.address || "N/A"}
            </p>
            <p className="dark:text-white">
              <strong>City:</strong>{" "}
              {formData.personal_details?.city || "N/A"}
            </p>
            <p className="dark:text-white">
              <strong>Pincode:</strong>{" "}
              {formData.personal_details?.pincode || "N/A"}
            </p>
            <p className="dark:text-white">
              <strong>Email:</strong>{" "}
              {formData.personal_details?.email || "N/A"}
            </p>
            <p className="dark:text-white">
              <strong>Mobile:</strong>{" "}
              {formData.personal_details?.mobile || "N/A"}
            </p>
            <p className="dark:text-white">
              <strong>Emergency Number:</strong>{" "}
              {formData.personal_details?.emergency_mobile || "N/A"}
            </p>
          </div>
        </div>

        {/* Health Information */}
        <div className="mb-8 bg-gray-50 dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold dark:text-white mb-4 border-b pb-2">
            Health Information
          </h3>
          <div className="space-y-3">
            <p className="dark:text-white">
              <strong>Allergies:</strong>{" "}
              {formData.health_information?.allergy || "N/A"}
            </p>
            <p className="dark:text-white">
              <strong>Physical Handicap:</strong>{" "}
              {formData.health_information?.physical_handicap || "N/A"}
            </p>
            <p className="dark:text-white">
              <strong>Other Health Problems:</strong>{" "}
              {formData.health_information?.other || "N/A"}
            </p>
          </div>
        </div>

        {/* Educational Background */}
        <div className="mb-8 bg-gray-50 dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold dark:text-white mb-4 border-b pb-2">
            Educational Background
          </h3>
          <div className="space-y-3">
            <p className="dark:text-white">
              <strong>Last School Attended:</strong>{" "}
              {formData.educational_background?.attended_school
                ? "YES"
                : "NO"}
            </p>
            {formData.educational_background?.attended_school && (
              <>
                <p className="dark:text-white">
                  <strong>Last School Name:</strong>{" "}
                  {formData.educational_background?.previous_school || "N/A"}
                </p>
                <p className="dark:text-white">
                  <strong>City:</strong>{" "}
                  {formData.educational_background?.city || "N/A"}
                </p>
                <p className="dark:text-white">
                  <strong>From Grade:</strong>{" "}
                  {formData.educational_background?.from_grade || "N/A"}
                </p>
                <p className="dark:text-white">
                  <strong>To Grade:</strong>{" "}
                  {formData.educational_background?.to_grade || "N/A"}
                </p>
              </>
            )}
            <p className="dark:text-white text-lg text-blue-600 ">
              <strong>Expelled/Restricted:</strong>{" "}
              {formData.educational_background?.expelled ? "YES" : "NO"}
            </p>
            {formData.educational_background?.expelled && (
              <p className="dark:text-white">
                <strong>Details of Expulsion:</strong>{" "}
                {formData.educational_background?.expelled_reason || "N/A"}
              </p>
            )}
          </div>
        </div>

        {/* Parents Information */}
        <div className="mb-8 bg-gray-50 dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold dark:text-white mb-4 border-b pb-2">
            Parents Information
          </h3>
          {formData.parents_information &&
          formData.parents_information.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formData.parents_information.map((parent, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm"
                >
                  <p className="dark:text-white font-semibold mb-2">
                    Parent {index + 1}
                  </p>
                  <div className="space-y-2">
                    <p className="dark:text-white">
                      <strong>Relation:</strong> {parent.parent_type || "N/A"}
                    </p>
                    <p className="dark:text-white">
                      <strong>Name:</strong> {parent.name || "N/A"}
                    </p>
                    <p className="dark:text-white">
                      <strong>Age:</strong> {parent.age || "N/A"}
                    </p>
                    <p className="dark:text-white">
                      <strong>Nationality:</strong>{" "}
                      {parent.nationality || "N/A"}
                    </p>
                    <p className="dark:text-white">
                      <strong>Education:</strong> {parent.education || "N/A"}
                    </p>
                    <p className="dark:text-white">
                      <strong>Profession:</strong>{" "}
                      {parent.profession || "N/A"}
                    </p>
                    <p className="dark:text-white">
                      <strong>Income:</strong> {parent.income || "N/A"}
                    </p>
                    <p className="dark:text-white">
                      <strong>Office Address:</strong>{" "}
                      {parent.office_address || "N/A"}
                    </p>
                    <p className="dark:text-white">
                      <strong>Email:</strong> {parent.email || "N/A"}
                    </p>
                    {parent.parent_type === "guardian" && (
                      <p className="dark:text-white">
                        <strong>Relationship with Child:</strong>{" "}
                        {parent.relationship_with_child || "N/A"}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="dark:text-white">No parent information provided.</p>
          )}
        </div>

        {/* Other Relatives */}
        <div className="mb-8 bg-gray-50 dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold dark:text-white mb-4 border-b pb-2">
            Other Relatives
          </h3>
          {formData.other_relatives && formData.other_relatives.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formData.other_relatives.map((relative, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm"
                >
                  <p className="dark:text-white font-semibold mb-2">
                    Relative {index + 1}
                  </p>
                  <div className="space-y-2">
                    <p className="dark:text-white">
                      <strong>Name:</strong> {relative.name || "N/A"}
                    </p>
                    <p className="dark:text-white">
                      <strong>Relationship:</strong>{" "}
                      {relative.relation || "N/A"}
                    </p>
                    <p className="dark:text-white">
                      <strong>Age:</strong> {relative.age || "N/A"}
                    </p>
                    <p className="dark:text-white">
                      <strong>School:</strong> {relative.school || "N/A"}
                    </p>
                    <p className="dark:text-white">
                      <strong>Grade:</strong> {relative.grade || "N/A"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="dark:text-white">
              No relatives information provided.
            </p>
          )}
        </div>

        {/* Transport Facility */}
        <div className="mb-8 bg-gray-50 dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold dark:text-white mb-4 border-b pb-2">
            Transport Facility
          </h3>
          <p className="dark:text-white">
            <strong>Requires Bus Facility:</strong>{" "}
            {formData.transport_facility ? "Yes" : "No"}
          </p>
        </div>

        {/* Declaration */}
        <div className="mb-8 bg-gray-50 dark:bg-gray-600 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold dark:text-white mb-4 border-b pb-2">
            Declaration
          </h3>
          <p className="dark:text-white">
            <strong>Agreed to Terms:</strong>{" "}
            {formData.declaration ? "Yes" : "No"}
          </p>
        </div>

      
      </div>
    </div>
  </>
  );
};

