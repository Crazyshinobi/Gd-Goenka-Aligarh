import React from 'react'
import mainImage from '../assets/admission_banner.jpeg'
import '../css/ImageSection.css'

function ImageSection() {
  return (
    <div className='imageSection w-full flex flex-col'>
      <div className="img  w-full">
        <img className='w-full  object-contain' src={mainImage} alt="Gd-Goenka-School"/>
        </div>
    </div>     
    
  )
}

export default ImageSection

