import React from 'react'
import Banner1 from '../assets/beyond-banner1.JPG';
import Banner2 from '../assets/beyond-banner2.JPG';
import Banner3 from '../assets/beyond-banner3.JPG';

const BeyondAcademics = () => {
  return (
    <Layout>
    {/* Banner Section */}
    <div className="relative bgImage">
      <h1 className="text-3xl md:text-5xl font-bold absolute bottom-4 md:bottom-6 left-4 md:left-8 text-[#e1b671]">
        ACADEMICS
      </h1>
      <img
        src={IgnitingBanner}
        alt="Teaching Methodology"
        className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[65vh] w-full object-fill"
      />
    </div>

    {/* Navigation Section */}
    <NavigationPages />

    </Layout>
  )
}

export default BeyondAcademics  
