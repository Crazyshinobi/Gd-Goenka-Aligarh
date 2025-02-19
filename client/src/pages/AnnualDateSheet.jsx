import React from 'react'
import AnnualDateSheetPDf from '../assets/AnnualExamDateSheet24-25.pdf'

const AnnualDateSheet = () => {
  document.title = 'Annual Exam Date Sheet 2024-25 - GDGPS Aligarh'
  return (
    <div className="w-screen h-screen flex items-center justify-center">
        <iframe
        src={AnnualDateSheetPDf}
        title="Fees Structure Pdf"
        className="w-full h-full" 
        frameBorder="0"
      ></iframe>          
      </div>
  )
}

export default AnnualDateSheet
