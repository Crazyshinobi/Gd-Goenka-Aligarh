import React from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

export const ExcelExport = ({ data, columns }) => {
  const exportExcel = () => {
    // Map data to only include the columns you want
    const filteredData = data.map((rowData, index) => {
      const row = {
        // Add S.No manually, increment based on index
        "S.No": index + 1, // This is to add the S.No column dynamically
      };

      columns.forEach((col) => {
        // Check if the column has a field (standard field-based columns)
        if (col.field) {
          row[col.header] = rowData[col.field];
        } else {
          // If there's no 'field' (like for custom columns such as 'S.No')
          row[col.header] = col.body
            ? col.body(rowData, { rowIndex: index })
            : null;
        }
      });

      return row;
    });

    // Convert to sheet
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };

    // Export as Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    saveAsExcelFile(excelBuffer, "Report");
  };

  const saveAsExcelFile = (buffer, fileName) => {
    const EXCEL_TYPE =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const EXCEL_EXTENSION = ".xlsx";
    const data = new Blob([buffer], {
      type: EXCEL_TYPE,
    });

    saveAs(
      data,
      fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
    );
  };

  return (
    <button
      onClick={exportExcel}
      type="button"
      className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 py-1 lg:px-5 lg:py-2 text-center me-2 mb-2"
    >
      <div className="flex items-center gap-2">
        <svg
          className="w-5 h-5 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 10V4a1 1 0 0 0-1-1H9.914a1 1 0 0 0-.707.293L5.293 7.207A1 1 0 0 0 5 7.914V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2M10 3v4a1 1 0 0 1-1 1H5m5 6h9m0 0-2-2m2 2-2 2"
          />
        </svg>
        <p>Export to Excel</p>
      </div>
    </button>
  );
};
