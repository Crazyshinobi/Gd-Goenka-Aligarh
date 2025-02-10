import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { jsPDF } from "jspdf";
import Cookies from "js-cookie";
import axios from "axios";
import SchoolLogo from "../../assets/GD-Goenka-logo.png";
import "jspdf-autotable";

// Statuses
const statuses = ["pending", "under review", "approved"];
const steps = [
  { label: "Application Completed", status: "pending" },
  { label: "Application Under Review", status: "under review" },
  { label: "Application Approved", status: "approved" },
];

const ThankYouPage = ({ status }) => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({});
  const [feeData, setFeeData] = useState({});
  const user = Cookies.get("userId");
  const activeStep = statuses.indexOf(status.toLowerCase());

  // Fetch admission data
  const fetchAdmissionData = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/admission-application/get-admission-form/1`,
        { user }
      );
      if (response?.data?.success) {
        setFormData(response.data.admission);
      }
    } catch (error) {
      console.error("Error fetching admission data:", error);
    }
  };

  // Fetch fee details
  const fetchFeeDetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/v1/payment-transaction/${user}`
      );
      if (response?.data?.success) {
        setFeeData(response.data.paymentTransactions);
      }
    } catch (error) {
      console.error("Error fetching fee details:", error);
    }
  };

  // Fetch all data on component mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchAdmissionData(), fetchFeeDetails()]);
      setLoading(false); // Reset loading state after both requests complete
    };
    // console.log(formData);
    fetchData();
  }, []);

  // Generate Fee Receipt
  const generateFeeReceipt = () => {
    if (loading || !feeData) {
      alert("Fee data is still loading. Please try again later.");
      return;
    }

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let yPosition = margin;

    // School Logo
    const logo = new Image();
    logo.src = SchoolLogo;
    doc.addImage(logo, "PNG", 10, 10, 50, 25);

    // School Header
    yPosition = 40;

    doc.setFontSize(20);
    doc.setTextColor(0, 0, 139);
    doc.text("G.D. Goenka Public School, Aligarh", pageWidth / 2, 20, {
      align: "center",
    });

    yPosition += 10;
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text(
      "Ramghat Road, Aligarh, Uttar Pradesh - 202001",
      pageWidth / 2,
      30,
      { align: "center" }
    );

    yPosition += 10;

    // Receipt Title
    yPosition += 15;
    doc.setFontSize(18); // Slightly larger
    doc.setTextColor(231, 76, 60); // A subtle red for emphasis
    doc.text("FEE RECEIPT", pageWidth / 2, 55, { align: "center" });

    // Receipt Details
    doc.setFontSize(12);
    doc.setTextColor(39, 55, 70); // Darker text for details
    doc.text(`Receipt No: ${feeData[0]._id}`, 15, yPosition);
    doc.text(
      `Date: ${new Date(feeData[0].addedon).toLocaleDateString("en-GB")}`,
      pageWidth - 45,
      yPosition
    );

    // Table Data
    const tableData = [
      ["Student Name", feeData[0].firstname],
      ["Grade", feeData[0].productinfo],
      ["Payment Source", feeData[0].payment_source],
      ["Amount", `Rs.${feeData[0].amount}`],
      ["Payment Mode", feeData[0].mode],
      ["Transaction ID", feeData[0].txnid],
      ["Status", feeData[0].status === "success" ? "Paid" : "Unsuccessful"],
    ];

    // Table Styling
    doc.autoTable({
      startY: 80,
      head: [],
      body: tableData,
      headStyles: {
        fillColor: [52, 73, 94], // Dark blue-gray
        textColor: [255, 255, 255],
        fontStyle: "bold",
        fontSize: 13,
      },
      styles: {
        overflow: "linebreak",
        fontSize: 11,
        textColor: [39, 55, 70], // Dark blue-gray
        cellPadding: 8,
        lineColor: [220, 220, 220],
      },
      columnStyles: {
        0: {
          cellWidth: "auto", // Let the content determine width
          fontStyle: "bold",
          textColor: [44, 62, 80], // Darker blue-gray
        },
        1: {
          cellWidth: "auto", // Let the content determine width
        },
      },
      tableWidth: "auto", // Important: Set tableWidth to 'auto'
      alternateRowStyles: {
        fillColor: [241, 246, 249], // Light blue-gray
      },
      tableLineWidth: 0.5,
      tableLineColor: [200, 200, 200],
    });

    // Footer Notes
    const finalY = doc.previousAutoTable.finalY + 15; // Reduced spacing
    doc.setFontSize(10);
    doc.setTextColor(149, 165, 166); // Muted gray
    doc.text("Note:", margin, finalY);
    doc.setFontSize(9); // Smaller font for notes
    const notes = [
      "• This is a computer-generated receipt and does not require a signature.",
      "• Please keep this receipt for your future reference.",
      "• For any queries, please contact the school office.",
    ];
    let noteY = finalY + 8;
    notes.forEach((note) => {
      doc.text(note, margin + 5, noteY);
      noteY += 5;
    });

    // Save PDF
    doc.save(`Fee_Receipt_${feeData[0]._id}.pdf`);
  };

  // Updated PDF generation with better formatting
  const generateAdmissionApplication = async () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let yPosition = margin;

    // Helper function to add section headings
    const addHeading = (text, y = null) => {
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      if (y) yPosition = y;
      doc.text(text, 14, yPosition);
      yPosition += 8;
    };

    // Helper function to check for page breaks
    const checkPageBreak = (spaceNeeded) => {
      if (
        yPosition + spaceNeeded >
        doc.internal.pageSize.getHeight() - margin
      ) {
        doc.addPage();
        yPosition = margin;
      }
    };

    const logo = new Image();
    logo.src = SchoolLogo;
    doc.addImage(logo, "PNG", 10, 10, 50, 25);
    yPosition = 40;

    doc.setFontSize(20);
    doc.setTextColor(0, 0, 139);
    doc.text("G.D. Goenka Public School, Aligarh", pageWidth / 2, 20, {
      align: "center",
    });

    yPosition += 10;
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text(
      "Ramghat Road, Aligarh, Uttar Pradesh - 202001",
      pageWidth / 2,
      30,
      { align: "center" }
    );

    yPosition += 10;

    // Document Header
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("ADMISSION APPLICATION", pageWidth / 2, yPosition, {
      align: "center",
    });
    yPosition += 10;

    // Application ID & Date
    const applicationId = formData._id || "N/A";
    const date = new Date().toLocaleDateString("en-GB");
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(`Application ID: ${applicationId}`, 15, yPosition);
    doc.text(`Date: ${date}`, pageWidth - 45, yPosition);
    yPosition += 20;

    // **Section: Student Details**
    addHeading("General Information");

    doc.autoTable({
      startY: yPosition,
      theme: "grid",
      headStyles: { fillColor: [0, 0, 139], textColor: [255, 255, 255] },
      body: [
        ["Grade Applied for", formData.general_information?.grade || "N/A"],
        [
          "Applied Before",
          formData.general_information?.applied_before ? "Yes" : "No" || "N/A",
        ],
        ["Applied Year", formData.general_information?.applied_year || "N/A"],
        ["Applied Grade", formData.general_information?.applied_grade || "N/A"],
      ],
    });

    yPosition = doc.lastAutoTable.finalY + 10;
    checkPageBreak(40);

    // **Section: Student Details**
    addHeading("Student Details");

    doc.autoTable({
      startY: yPosition,
      theme: "grid",
      headStyles: { fillColor: [0, 0, 139], textColor: [255, 255, 255] },
      body: [
        [
          "Full Name",
          `${formData.personal_details?.first_name} ${formData.personal_details?.last_name}` ||
            "N/A",
        ],
        ["Email", formData.personal_details?.email || "N/A"],
        [
          "Date of Birth",
          new Date(formData.personal_details?.dob).toLocaleDateString(
            "en-GB"
          ) || "N/A",
        ],
        ["Gender", formData.personal_details?.gender.toUpperCase() || "N/A"],
        ["Nationality", formData.personal_details?.nationality || "N/A"],
        ["Address", formData.personal_details?.address || "N/A"],
        ["City", formData.personal_details?.city || "N/A"],
        ["Pincode", formData.personal_details?.pincode || "N/A"],
        ["Mobile", formData.personal_details?.mobile || "N/A"],
        [
          "Emergency Contact",
          formData.personal_details?.emergency_mobile || "N/A",
        ],
        [
          "Student Photo",
          process.env.REACT_APP_BASE_URL +
            "/" +
            formData.personal_details?.image || "N/A",
        ],
      ],
    });

    yPosition = doc.lastAutoTable.finalY + 10;
    checkPageBreak(40);

    // **Section: Educational Background**
    addHeading("Educational Background");

    doc.autoTable({
      startY: yPosition,
      theme: "grid",
      headStyles: { fillColor: [0, 0, 139], textColor: [255, 255, 255] },
      body: [
        [
          "Previous School",
          formData.educational_background?.previous_school || "N/A",
        ],
        ["City", formData.educational_background?.city || "N/A"],
        [
          "Grade Range",
          `${formData.educational_background?.from_grade} to ${formData.educational_background?.to_grade}` ||
            "N/A",
        ],
        [
          "Expelled",
          formData.educational_background?.expelled
            ? `Yes - ${formData.educational_background?.expelled_reason}`
            : "No",
        ],
      ],
    });

    yPosition = doc.lastAutoTable.finalY + 10;
    checkPageBreak(40);

    if (formData.health_information) {
      // **Section: Educational Background**
      addHeading("Health Information");
      doc.autoTable({
        startY: yPosition,
        theme: "grid",
        headStyles: { fillColor: [0, 0, 139], textColor: [255, 255, 255] },
        body: [
          ["Allergy", formData.health_information?.allergy || "N/A"],
          [
            "Physical Handicap",
            formData.health_information?.physical_handicap || "N/A",
          ],
          ["Other", formData.health_information?.other || "N/A"],
        ],
      });

      yPosition = doc.lastAutoTable.finalY + 10;
      checkPageBreak(40);
    }

    if (formData.parents_information?.length) {
      // **Section: Parents Information**
      addHeading("Parents Information");
      const parentRows = formData.parents_information.map((parent) => [
        parent.parent_type.toUpperCase(),
        parent.name || "N/A",
        parent.age || "N/A",
        parent.education || "N/A",
        parent.profession || "N/A",
        parent.adhaar_number || "N/A",
        process.env.REACT_APP_BASE_URL + "/" + parent.image || "N/A",
      ]);

      doc.autoTable({
        startY: yPosition,
        theme: "grid",
        head: [
          [
            "Type",
            "Name",
            "Age",
            "Education",
            "Profession",
            "Aadhaar",
            "Image",
          ],
        ],
        headStyles: { fillColor: [0, 0, 139], textColor: [255, 255, 255] },
        body: parentRows,
      });

      yPosition = doc.lastAutoTable.finalY + 10;
      checkPageBreak(40);
    }

    if (formData.other_relatives?.length) {
      addHeading("Other Relatives");

      const relativeRows = formData.other_relatives.map((other_relative) => [
        other_relative.relation.toUpperCase() || "N/A",
        other_relative.name || "N/A",
        other_relative.age || "N/A",
        other_relative.school || "N/A",
        other_relative.grade || "N/A",
      ]);

      doc.autoTable({
        startY: yPosition,
        theme: "grid",
        head: [["Relation", "Name", "Age", "School", "Grade"]],
        headStyles: { fillColor: [0, 0, 139], textColor: [255, 255, 255] },
        body: relativeRows,
      });

      yPosition = doc.lastAutoTable.finalY + 10;
      checkPageBreak(40);
    }

    // **Section: Transport Facility**
    addHeading("Transport Facility");

    doc.autoTable({
      startY: yPosition,
      theme: "grid",
      body: [
        ["Requires Bus Facility", formData.transport_facility ? "Yes" : "No"],
      ],
    });

    yPosition = doc.lastAutoTable.finalY + 10;
    checkPageBreak(40);

    if (formData.transport_area) {
      addHeading("Transport Area");
      doc.autoTable({
        startY: yPosition,
        theme: "grid",
        body: [["Transport Area", formData.transport_area || "N/A"]],
      });

      yPosition = doc.lastAutoTable.finalY + 10;
      checkPageBreak(40);
    }

    // **Section: Declaration**
    addHeading("Declaration");

    doc.autoTable({
      startY: yPosition,
      theme: "grid",
      body: [["Agreed to Terms", formData.declaration ? "Yes" : "No"]],
    });

    yPosition = doc.lastAutoTable.finalY + 10;
    checkPageBreak(40);

    // Footer (Page Numbering)
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(10);
      doc.setTextColor(100);
      doc.text(
        `Page ${i} of ${pageCount}`,
        pageWidth / 2,
        doc.internal.pageSize.getHeight() - 10,
        { align: "center" }
      );
    }

    // Save the PDF
    doc.save(
      `${formData.personal_details?.first_name}_Admission_Application.pdf`
    );
  };

  return (
    <div className="h-[85vh] bg-gradient-to-r rounded-sm from-blue-500 to-purple-600 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-8 rounded-lg shadow-2xl text-center max-w-md w-full"
      >
        {/* Thank You Header */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Thank You!
        </motion.h1>

        {/* Status Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-gray-600 mb-6"
          dangerouslySetInnerHTML={{
            __html: `
            You have already submitted your application.<br />
            <strong>Your application status is:</strong> ${status.toUpperCase()}.<br /><br />
            <em>Note: The review process takes approximately <strong>24-48 hours</strong>. We appreciate your patience.</em>
          `,
          }}
        />

        {/* Stepper */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="w-full mb-6"
        >
          <div className="flex justify-between relative">
            {/* Progress Line */}
            <div
              className="absolute top-[25%] left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"
              style={{ zIndex: 0 }}
            />
            <div
              className="absolute top-[25%] left-0 h-1 bg-green-500 transform -translate-y-1/2"
              style={{
                width: `${(activeStep / (steps.length - 1)) * 100}%`,
                zIndex: 1,
              }}
            />

            {/* Steps */}
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative"
                style={{ zIndex: 2 }}
              >
                {/* Step Circle */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center ${
                    index <= activeStep ? "bg-green-500" : "bg-gray-200"
                  }`}
                >
                  {index <= activeStep ? (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  ) : (
                    <span className="text-gray-600">{index + 1}</span>
                  )}
                </div>

                {/* Step Label */}
                <span
                  className={`mt-2 text-sm ${
                    index <= activeStep ? "text-green-500" : "text-gray-600"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-col space-y-4">
          <button
            disabled={loading}
            onClick={generateFeeReceipt}
            className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-200 ${
              loading ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            {loading ? "Loading..." : "Download Fee Receipt"}
          </button>

          <button
            disabled={loading}
            onClick={generateAdmissionApplication}
            className={`bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200 ${
              loading ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            Download Admission Application
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYouPage;
