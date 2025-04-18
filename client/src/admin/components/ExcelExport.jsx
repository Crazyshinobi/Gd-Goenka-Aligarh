import React from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

export const ExcelExport = ({ data, columns, fileName = "Report" }) => {
  // Helper to get nested property values
  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((o, p) => (o ? o[p] : null), obj);
  };

  // Format value for Excel export
  const formatValue = (value) => {
    if (value === null || value === undefined) return '-';
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    if (value instanceof Date) return value.toLocaleDateString("en-GB");
    return value;
  };

  const exportExcel = () => {
    if (!data || !columns) return;

    const processedData = data.map((rowData, rowIndex) => {
      const row = {};

      columns.forEach((col) => {
        // Skip separator columns
        if (col.separator) return;

        // Handle standard fields (including nested paths)
        if (col.field) {
          const value = getNestedValue(rowData, col.field);
          row[col.header] = formatValue(value);
        }
        // Handle custom body columns
        else if (col.body) {
          const result = col.body(rowData, { rowIndex });
          // Handle JSX elements (like buttons) by extracting text content
          if (React.isValidElement(result)) {
            row[col.header] = result.props.children || '-';
          } else {
            row[col.header] = formatValue(result);
          }
        }
        // Handle columns with header but no field/body (like S.No)
        else if (col.header) {
          row[col.header] = rowIndex + 1;
        }
      });

      // Handle array fields (like parents_information, other_relatives)
      // This automatically detects and flattens array fields
      Object.keys(rowData).forEach(key => {
        if (Array.isArray(rowData[key])) {
          rowData[key].forEach((item, index) => {
            if (typeof item === 'object') {
              Object.keys(item).forEach(prop => {
                row[`${key}_${index+1}_${prop}`] = formatValue(item[prop]);
              });
            } else {
              row[`${key}_${index+1}`] = formatValue(item);
            }
          });
        }
      });

      return row;
    });

    // Convert to worksheet
    const worksheet = XLSX.utils.json_to_sheet(processedData);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };

    // Export as Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    saveAsExcelFile(excelBuffer, fileName);
  };

  const saveAsExcelFile = (buffer, fileName) => {
    const EXCEL_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const EXCEL_EXTENSION = ".xlsx";
    const data = new Blob([buffer], { type: EXCEL_TYPE });

    saveAs(data, `${fileName}_${new Date().getTime()}${EXCEL_EXTENSION}`);
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