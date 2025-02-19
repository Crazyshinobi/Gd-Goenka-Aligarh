import React from 'react'
import EntranceExam from '../assets/Syllabus-of-Entrance-Exam-2025-2026.pdf'

const EntranceExampdf = () => {
  document.title = 'Entrance Exam Syllabus 2024-25 - GDGPS Aligarh'
  return (
    <div className="w-screen h-screen flex items-center justify-center">
        <iframe
        src={EntranceExam}
        title="Fees Structure Pdf"
        className="w-full h-full" 
        frameBorder="0"
      ></iframe>          
      </div>
  )
}

export default EntranceExampdf
