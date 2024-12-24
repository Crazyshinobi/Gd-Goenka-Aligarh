import React from 'react'
import { Layout } from '../components/Layout'
import FeesStructureImage from '../assets/FEE-STRUTURE-FOR-THE-SESSION-2022-23-docx-Google-Docs-789x1024-1.png'
import feesBanner from '../assets/fee-structure-banner.png'
import NavigationPages from './NavigationPages'

const FeeStructure = () => {
  return (
    <Layout>
              <div className="relative bgImage">
        <h1  className="absolute bottom-6 left-8 text-4xl font-bold text-red-600 bg-white bg-opacity-80 px-4 py-2 rounded-lg shadow-lg">
          ACADEMICS
        </h1>
        <img
          src={feesBanner}
          alt="Fees Structure banner"
          className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[55vh] w-full object-fill"
        />
      </div>

      {/* Navigation Section */}
      <NavigationPages/>


        <div className='flex py-10 flex-row justify-center w-full '>
        <img src={FeesStructureImage} alt="" className='max-w-7xl w-full lg:w-3/6 rounded-md shadow-md'/>
        </div>
      
    </Layout>
  )
}

export default FeeStructure
