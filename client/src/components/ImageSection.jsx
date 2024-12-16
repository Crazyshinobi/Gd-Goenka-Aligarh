import React from 'react'
import mainImage from '../assets/admission_banner.jpeg'
import '../css/ImageSection.css'

function ImageSection() {
  return (
    <div className='imageSection w-full flex flex-col'>
      <div className="img  w-full">
        <img className='w-full object-contain lg:rounded-b-[250px] lg:transition-all lg:duration-300 lg:ease-in-out lg:hover:rounded-b-none' src={mainImage} alt="Gd-Goenka-School"/>
        </div>
    </div>     
    
  )
}

export default ImageSection

