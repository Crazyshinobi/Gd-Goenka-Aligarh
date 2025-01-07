import React from 'react'
import yellowbg from '../assets/yellow-bg-2.png'
import '../css/Activities.css'
import pe from '../assets/Physical-Education-activities.jpg'
import pa from '../assets/Personalize-Attention-activities.jpg'
import pv from '../assets/Promoting-Values-activities.jpg'

function Activities() {
  return (
    <div className='activities max-w-[1380px] w-full h-auto lg:h-auto md:h-auto   lg:pt-14 md:pt-10 pt-4 '>
         
         <div className='w-full h-36 lg:h-20  md:h-24 lg:text-7xl md:text-6xl text-5xl ps-6 '> Activities <img  className="img_animate lg:ms-[160px] md:ms-[100px] ms-[50px]" src={yellowbg} alt="" />  </div>

         <div className='pictures cursor-pointer w-full h-full  flex flex-col md:flex md:flex-row md:justify-center lg:flex lg:flex-row gap-14 items-center p-0 md:p-0 lg:p-8 lg:pt-16s text-center' >

            <div className='md:w-[25%] md:h-3/5 lg:w-[30%] lg:h-[70%] w-[80%]  flex flex-col items-center gap-4 text-center'>
                <div className="img1"><img src={pe} alt="Physical Education"  className='rounded-[50%]' width={320} height={320}/> </div>
                <div className="text1 text-2xl font-bold lg:text-3xl">Physical Education</div>
            </div>


            <div className='md:w-[25%] md:h-3/5 lg:w-[30%] lg:h-[70%] w-[80%]  flex flex-col items-center gap-4'>
                <div className="img1"><img src={pv} alt="Promoting Values"  className='rounded-[50%]' width={320} height={320}/> </div>
                <div className="text1 text-2xl font-bold lg:text-3xl">Promoting Values</div>
            </div>

            <div className='md:w-[25%] md:h-3/5 lg:w-[30%] lg:h-[70%] w-[80%]  flex flex-col items-center gap-4 text-center'>
                <div className="img1"><img src={pa} alt="Personalised Attention"  className='rounded-[50%]'  width={320} height={320}/> </div>
                <div className="text1 text-2xl font-bold lg:text-3xl md:text-xl">Personalised Attention</div>
            </div>
         </div>

    </div>
  )
}

export default Activities