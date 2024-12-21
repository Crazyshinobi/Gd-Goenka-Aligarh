import React from 'react';
import MandatoryDisclosurePdf from '../assets/MandatoryDisclosure-SARAS-5.0.pdf';

const MandatoryDisclosure = () => {
  document.title = 'Mandatory Disclosure - GDGPS Aligarh';
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <iframe
        src={MandatoryDisclosurePdf}
        title="MandatoryDisclosure"
        className="w-full h-full" 
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default MandatoryDisclosure;
