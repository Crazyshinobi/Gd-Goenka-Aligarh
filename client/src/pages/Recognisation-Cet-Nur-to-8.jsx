import React from 'react';
import RecognisationPdf from '../assets/Recognisation-Cet-Nur-to-8.pdf';

const RecognisationCet = () => {
  document.title = 'Mandatory Disclosure - GDGPS Aligarh';
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <iframe
        src={RecognisationPdf}
        title="RecognisationPdf"
        className="w-full h-full" 
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default RecognisationCet;
