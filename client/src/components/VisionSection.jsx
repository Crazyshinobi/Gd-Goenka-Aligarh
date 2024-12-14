import React from 'react';
import principal from '../assets/Principal.jpeg'
import icon from '../assets/prin_icon1.png'
import { IoIosArrowRoundForward } from "react-icons/io";

function VisionSection() {
  return (
    <div className='max-w-[1380px] w-full mx-auto px-4 py-8 sm:py-12 lg:py-16'>
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* PRINCIPAL SECTION */}
        <div className="w-full lg:w-[50%]">
          <div className="border border-black p-4 sm:p-3 relative">
            <div className="relative">
              <img src={principal} alt="Principal" className='w-full sm:w-4/5 mx-auto h-auto border border-black' />
              <img src={icon} alt="icon" className='absolute bottom-0 left-0 w-1/4 sm:w-1/5' />
            </div>
            <div className='mt-4 sm:mt-3 text-center'>
              <h2 className='text-3xl sm:text-3xl lg:text-5xl text-[#003963] mb-2'>Principal's Message</h2>
              <p className='text-red-400 sm:text-sm mb-2'>Mr. Pradeep Kumar</p>
              <p className='text-[#666666] sm:text-sm mb-4'>GD Goenka Public School provides every student with the opportunity to achieve their best in academics, sports, and personal development, shaping a bright future.</p>
              <div className='flex justify-end'>
                <IoIosArrowRoundForward className="text-4xl sm:text-5xl lg:text-6xl cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* VISION AND MISSION */}
        <div className="w-full lg:w-[30%] space-y-8">
          <div className="bg-[#003963] p-6 rounded-md">
            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4'>Vision</h2>
            <p className='text-white text-lg mb-4'>To create an inspiring environment that fosters creativity, curiosity, and growth, where learning becomes a journey of limitless possibilities.</p>
            <div className='flex justify-end'>
              <IoIosArrowRoundForward className="text-4xl sm:text-5xl lg:text-6xl text-white cursor-pointer" />
            </div>
          </div>
          <div className="bg-[#003963] p-6 rounded-md">
            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4'>Mission</h2>
            <p className='text-white text-lg mb-4'>GD Goenka Aligarh empowers students with knowledge, skills, and leadership to thrive in a dynamic world and meet future challenges with confidence.</p>
            <div className='flex justify-end'>
              <IoIosArrowRoundForward className="text-4xl sm:text-5xl lg:text-6xl text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* TERM */}
        <div className="w-full lg:w-[35%]">
          <div className='bg-white rounded-md shadow-md overflow-hidden'>
            <div className="bg-[#003963] text-3xl sm:text-4xl lg:text-5xl text-white p-6 text-center">
              Term-2
            </div>
            <div className="p-6 space-y-4 text-lg text-[#212529]">
              <p>Celebration of Folk Dances of India (Grade 7) | 29.11.24</p>
              <p>PREBOARD-1 (Grade 12) | 02.12.24 -23.12.24</p>
              <p>Tongue Twisters / Role Play (Grades 9-12; Grades Activity) | 03.12.24</p>
              <p>Spell Bee/ Quiz /Spin a Story/Poetry creation (Grades 9-12) | 05.12.24</p>
              <p>Meet the Author- Read-Aloud Session (Grades 3-12)| 06.12.24</p>
              <p>Scholastic Excellence Award Ceremony (Grades 3-12) | 07.12.2024</p>
            </div>
          </div>
          <div className='text-center mt-4'>
            <a href="#" className='text-blue-500 hover:underline'>Read more</a>
          </div>
        </div>
      </div>

      <div className="mt-8 lg:mt-16 italic text-[#666666] text-xl sm:text-2xl lg:text-3xl text-center">
        <p>We believe in unlocking each individual's full potential. Education is the foundation that shapes young minds, empowering them to grow, innovate, and succeed.</p>
      </div>
    </div>
  )
}

export default VisionSection;

