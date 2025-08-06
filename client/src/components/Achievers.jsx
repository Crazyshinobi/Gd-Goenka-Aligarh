import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Topper from '../assets/Toppers.jpg';
import Topper1 from '../assets/Toppers1.jpg';
import Topper2 from '../assets/Toppers2.jpg';
import Topper3 from '../assets/Toppers3.jpg';
import Topper4 from '../assets/Toppers4.jpg';
import bg from '../assets/imagebg.jpg'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const CustomButtonGroup = ({ next, previous }) => {
  return (
    <div className="flex justify-center gap-4 mt-4 ">
      <button
        onClick={previous}
        className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-600">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={next}
        className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-600">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  )
}

function Achievers(){
  return (
    <div className=" w-full mx-auto px-1 pt-4 pb-4 bg-cover bg-center flex flex-col items-center" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", }}>
      <div className="text-center  text-xs text-gray-600 pt-10 mb-8">
        <h1 className='text-5xl font-bold text-[#2a3c7e]'>Student Achievers @ GDGPS</h1>
        <h3 className='text-2xl font-semibold text-[#2a3c7e]'>CLASS XII:2023-24</h3>
      </div>
      
      <Carousel
        responsive={responsive}
        infinite={true}
        customButtonGroup={<CustomButtonGroup />}
        arrows={false}
        renderButtonGroupOutside={true}
        className="relative  max-w-[1280px] w-full"
      >
        
        {/* Perfect 100 Slide */}
        <div className="px-2 ">
          <div className="bg-gradient-to-r text-red-300 from-gray-100 to-white rounded-lg">
            <img src={Topper} alt="Perfect 100 Toppers" className="rounded-lg" />
          </div>
        </div>

        {/* Class XII Stream Slide */}
        <div className="px-2">
          <div className="bg-gradient-to-r from-gray-100 to-white rounded-lg">
            <img src={Topper1} alt="Class XII" className="rounded-lg" />
          </div>
        </div>

        {/* Commerce Stream Slide */}
        <div className="px-2">
          <div className="bg-gradient-to-r from-gray-100 to-white rounded-lg">
            <img src={Topper2} alt="Commerce Topper" className="rounded-lg" />
          </div>
        </div>

        {/* Humanities Stream Slide */}
        <div className="px-2">
          <div className="bg-gradient-to-r from-gray-100 to-white rounded-lg">
            <img src={Topper4} alt="Humanities Topper" className="rounded-lg" />
          </div>
        </div>

        {/* Science Slide */}
        <div className="px-2">
          <div className="bg-gradient-to-r from-gray-100 to-white rounded-lg">
            <img src={Topper3} alt="Science Toppers" className="rounded-lg" />
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Achievers;
