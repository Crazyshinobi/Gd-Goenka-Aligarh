import GoenkanPursuitsPdf from '../assets/GOENKANPURSITS-2024-25.pdf'
import React from 'react'

const GoenkanPursuits = () => {
    document.title = 'Goenkan Pursuits - GDGPS Aligarh';
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <iframe
        src={GoenkanPursuitsPdf}
        title="Goenkan Pursuits"
        className="w-full h-full" 
        frameBorder="0"
      ></iframe>
    </div>
  )
}

export default GoenkanPursuits
