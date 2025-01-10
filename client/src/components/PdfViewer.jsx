// src/components/PdfViewer.js

import React from "react";
import { useParams } from "react-router-dom";
import { Document, Page } from "react-pdf";
import { useState } from "react";
import { useEffect } from "react";

const PdfViewer = () => {
  // Capture the PDF name from the URL
  const { pdfName } = useParams();

  // Construct the PDF file path from the public folder
  const pdfPath = `/mandatory-disclosure-link/${pdfName}`;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onLoadSuccess = ({ numPages }) => setNumPages(numPages);

  return (
    <div className="pdf-viewer-container">
      <h1>Viewing PDF: {pdfName}</h1>

      {/* Render the PDF using react-pdf */}
      <Document file={pdfPath} onLoadSuccess={onLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>

      {/* Page controls */}
      <div>
        <button
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          Previous
        </button>
        <span>
          Page {pageNumber} of {numPages}
        </span>
        <button
          disabled={pageNumber >= numPages}
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;
