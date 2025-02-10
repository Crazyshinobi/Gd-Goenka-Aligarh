import React from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import SchoolLogo from '../../assets/GD-Goenka-logo.png'

export const PaymentReceipt = ({ receiptData }) => {
  const defaultData = {
    receiptNo: "GDG/2024-25/1234",
    studentName: "John Doe",
    class: "X-A",
    admissionNo: "GDG2024/001",
    feeFor: "January 2025",
    paymentDate: "2025-02-03",
    amount: "25,000",
    paymentMode: "Online",
    transactionId: "GDGPMT123456",
    status: "Paid"
  };

  const data = { ...defaultData, ...receiptData };

  const handlePrint = () => {
    window.print();
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Add school logo to PDF
    const logo = new Image();
    logo.src = SchoolLogo;
    doc.addImage(logo, 'PNG', 10, 10, 50, 25);  // Adjust positioning and size
    
    // Add school header
    doc.setFontSize(20);
    doc.setTextColor(0, 0, 139);
    doc.text("G.D. Goenka Public School", 105, 20, { align: "center" });
    doc.setFontSize(16);
    doc.text("Aligarh", 105, 30, { align: "center" });
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text("Ramghat Road, Aligarh, Uttar Pradesh - 202001", 105, 40, { align: "center" });
    
    // Add Receipt title
    doc.setFontSize(16);
    doc.setTextColor(0);
    doc.text("FEE RECEIPT", 105, 55, { align: "center" });
    
    // Add receipt details
    doc.setFontSize(12);
    doc.text(`Receipt No: ${data.receiptNo}`, 15, 70);
    doc.text(`Date: ${data.paymentDate}`, 140, 70);
    
    // Create table data
    const tableData = [
      ["Student Name", data.studentName],
      ["Class", data.class],
      ["Admission No.", data.admissionNo],
      ["Fee For", data.feeFor],
      ["Amount", `${data.amount}`],
      ["Payment Mode", data.paymentMode],
      ["Transaction ID", data.transactionId],
      ["Status", data.status]
    ];
    
    // Add table
    doc.autoTable({
      startY: 80,
      head: [],
      body: tableData,
      theme: 'striped',
      headStyles: { fillColor: [0, 0, 139] },
      styles: { overflow: 'linebreak', fontSize: 12 },
      columnStyles: {
        0: { cellWidth: 60, fontStyle: 'bold' },  // Adjust column width
        1: { cellWidth: 100 }
      }
    });
    
    // Add footer notes
    const finalY = doc.previousAutoTable.finalY + 20;
    doc.setFontSize(10);
    doc.text("Note:", 20, finalY);
    doc.text("• This is a computer generated receipt and does not require signature.", 25, finalY + 10);
    doc.text("• Please keep this receipt for your future reference.", 25, finalY + 15);
    doc.text("• For any queries, please contact the school office.", 25, finalY + 20);
  
    // Save PDF
    doc.save(`Fee_Receipt_${data.receiptNo}.pdf`);
  };
  

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg print:shadow-none">
        {/* Header */}
        <div className="border-b p-6 bg-blue-50 rounded-t-lg">
          <div className="flex items-center gap-6">
            <div className="">
              <img 
                src={SchoolLogo}
                width={60}
                height={60}
                alt="School Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 text-center">
              <h1 className="text-2xl font-bold text-blue-900">
                G.D. Goenka Public School
              </h1>
              <h2 className="text-lg text-blue-800">Aligarh</h2>
              <p className="text-sm text-gray-600 mt-1">
                Ramghat Road, Aligarh, Uttar Pradesh - 202001
              </p>
              <p className="text-sm text-gray-600">
                Phone: +91-XXXXXXXXXX | Email: info@gdgoenkaaligarh.com
              </p>
            </div>
          </div>
          <h3 className="text-center font-bold mt-4 text-xl text-blue-900">
            FEE RECEIPT
          </h3>
        </div>

        {/* Receipt Content */}
        <div className="p-6">
          {/* Receipt Details */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Receipt No:</p>
              <p className="font-semibold">{data.receiptNo}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Date:</p>
              <p className="font-semibold">{data.paymentDate}</p>
            </div>
          </div>

          {/* Student Details */}
          <div className="mt-6">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border">
                  <td className="border p-3 bg-gray-50 font-semibold w-1/3">Student Name</td>
                  <td className="border p-3">{data.studentName}</td>
                </tr>
                <tr className="border">
                  <td className="border p-3 bg-gray-50 font-semibold">Class</td>
                  <td className="border p-3">{data.class}</td>
                </tr>
                <tr className="border">
                  <td className="border p-3 bg-gray-50 font-semibold">Admission No.</td>
                  <td className="border p-3">{data.admissionNo}</td>
                </tr>
                <tr className="border">
                  <td className="border p-3 bg-gray-50 font-semibold">Fee For</td>
                  <td className="border p-3">{data.feeFor}</td>
                </tr>
                <tr className="border">
                  <td className="border p-3 bg-gray-50 font-semibold">Amount</td>
                  <td className="border p-3">₹ {data.amount}</td>
                </tr>
                <tr className="border">
                  <td className="border p-3 bg-gray-50 font-semibold">Payment Mode</td>
                  <td className="border p-3">{data.paymentMode}</td>
                </tr>
                <tr className="border">
                  <td className="border p-3 bg-gray-50 font-semibold">Transaction ID</td>
                  <td className="border p-3">{data.transactionId}</td>
                </tr>
                <tr className="border">
                  <td className="border p-3 bg-gray-50 font-semibold">Status</td>
                  <td className="border p-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
                      {data.status}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="mt-8 text-sm text-gray-600">
            <p>Note:</p>
            <ul className="list-disc ml-4 mt-2">
              <li>This is a computer generated receipt and does not require signature.</li>
              <li>Please keep this receipt for your future reference.</li>
              <li>For any queries, please contact the school office.</li>
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 border-t flex justify-end gap-4 print:hidden">
          <button 
            onClick={handlePrint}
            className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Print Receipt
          </button>
          <button 
            onClick={generatePDF}
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};
