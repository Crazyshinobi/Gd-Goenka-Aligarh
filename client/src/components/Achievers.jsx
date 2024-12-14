    import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Topper from '../assets/Toppers.jpg';
import Topper1 from '../assets/Toppers1.jpg';
import Topper2 from '../assets/Toppers2.jpg';
import Topper3 from '../assets/Toppers3.jpg';
import Topper4 from '../assets/Toppers4.jpg';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const CustomButtonGroup = ({ next, previous }) => {
  return (
    <div className="flex justify-center gap-4 mt-4">
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

const Achievers = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-xs text-gray-600 mb-4">
        Flagship school owned and operated by the GD Goenka Promoters
      </div>
      
      <Carousel
        responsive={responsive}
        infinite={true}
        customButtonGroup={<CustomButtonGroup />}
        arrows={false}
        renderButtonGroupOutside={true}
        className="relative"
      >
        {/* Science Stream Slide */}
        <div className="px-4">
          <div className="bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg">
            <div className="flex justify-between items-start mb-6">
              <div className="w-32">
                <img src={Topper} alt="GD Goenka Logo" className="w-full" />
              </div>
              <div className="w-20">
                <div className="rounded-full bg-red-100 p-2 text-center">
                  <span className="text-[#003366] font-bold">29</span>
                  <span className="block text-xs">YEARS</span>
                </div>
              </div>
            </div>
            <h3 className="text-3xl font-semibold text-center text-[#003366] mb-8">
              <span className="block text-[#8B6B4C] font-cursive text-2xl mb-2">Congratulations</span>
              Goenkan CBSE Toppers
            </h3>
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <img src={Topper1} alt="Dishita Setia" className="mx-auto mb-4 rounded-lg w-full" />
                <h4 className="font-semibold text-lg">Dishita Setia</h4>
                <p className="text-2xl font-bold text-[#8B6B4C]">93.0%</p>
              </div>
              <div className="text-center">
                <img src={Topper2} alt="Shreyansh Dayal" className="mx-auto mb-4 rounded-lg w-full" />
                <h4 className="font-semibold text-lg">Shreyansh Dayal</h4>
                <p className="text-2xl font-bold text-[#8B6B4C]">92.0%</p>
              </div>
              <div className="text-center">
                <img src={Topper3} alt="Mahek Arora" className="mx-auto mb-4 rounded-lg w-full" />
                <h4 className="font-semibold text-lg">Mahek Arora</h4>
                <p className="text-2xl font-bold text-[#8B6B4C]">91.8%</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-2xl text-[#8B6B4C]">Science Stream</p>
              <p className="text-gray-600 mt-2">Goenkan Achievers Deserve a Grand Felicitation</p>
              <p className="font-semibold mt-1">CLASS XII | 2024</p>
            </div>
          </div>
        </div>

        {/* Perfect 100 Slide */}
        <div className="px-4">
          <div className="bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg">
            <div className="flex justify-between items-start mb-6">
              <div className="w-32">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toppers.jpg" alt="GD Goenka Logo" className="w-full" />
              </div>
              <div className="w-20">
                <div className="rounded-full bg-red-100 p-2 text-center">
                  <span className="text-[#003366] font-bold">29</span>
                  <span className="block text-xs">YEARS</span>
                </div>
              </div>
            </div>
            <h3 className="text-3xl font-semibold text-center text-[#003366] mb-8">
              <span className="block text-[#8B6B4C] font-cursive text-2xl mb-2">Congratulations</span>
              Goenkan Toppers
            </h3>
            <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toppers.jpg" alt="Baani Ahuja" className="mx-auto mb-4 rounded-lg w-full" />
                <h4 className="font-semibold text-lg">Baani Ahuja</h4>
                <p className="text-sm text-[#8B6B4C]">Psychology & Painting</p>
              </div>
              <div className="text-center">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toppers.jpg" alt="Alysa Anand" className="mx-auto mb-4 rounded-lg w-full" />
                <h4 className="font-semibold text-lg">Alysa Anand</h4>
                <p className="text-sm text-[#8B6B4C]">Psychology</p>
              </div>
              <div className="text-center">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toppers.jpg" alt="Devanshi Chawla" className="mx-auto mb-4 rounded-lg w-full" />
                <h4 className="font-semibold text-lg">Devanshi Chawla</h4>
                <p className="text-sm text-[#8B6B4C]">Psychology</p>
              </div>
              <div className="text-center">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toppers.jpg" alt="Kashika Saluja" className="mx-auto mb-4 rounded-lg w-full" />
                <h4 className="font-semibold text-lg">Kashika Saluja</h4>
                <p className="text-sm text-[#8B6B4C]">Painting</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <h4 className="text-2xl font-bold text-[#003366]">PERFECT 100</h4>
              <p className="text-gray-600">CLASS XII | 2024</p>
            </div>
          </div>
        </div>

        {/* Commerce Stream Slide */}
        <div className="px-4">
          <div className="bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg">
            <div className="flex justify-between items-start mb-6">
              <div className="w-32">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toppers2.jpg" alt="GD Goenka Logo" className="w-full" />
              </div>
              <div className="w-20">
                <div className="rounded-full bg-red-100 p-2 text-center">
                  <span className="text-[#003366] font-bold">29</span>
                  <span className="block text-xs">YEARS</span>
                </div>
              </div>
            </div>
            <h3 className="text-3xl font-semibold text-center text-[#003366] mb-8">
              <span className="block text-[#8B6B4C] font-cursive text-2xl mb-2">Congratulations</span>
              Goenkan CBSE Toppers
            </h3>
            <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toppers2.jpg" alt="Devina Saxena" className="mx-auto mb-4 rounded-lg w-full" />
                <h4 className="font-semibold text-lg">Devina Saxena</h4>
                <p className="text-2xl font-bold text-[#8B6B4C]">97.0%</p>
              </div>
              <div className="text-center">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toppers2.jpg" alt="Ishani Makhija" className="mx-auto mb-4 rounded-lg w-full" />
                <h4 className="font-semibold text-lg">Ishani Makhija</h4>
                <p className="text-2xl font-bold text-[#8B6B4C]">96.6%</p>
              </div>
              <div className="text-center">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toppers2.jpg" alt="Abhimanyu Mathur" className="mx-auto mb-4 rounded-lg w-full" />
                <h4 className="font-semibold text-lg">Abhimanyu Mathur</h4>
                <p className="text-2xl font-bold text-[#8B6B4C]">96.6%</p>
              </div>
              <div className="text-center">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toppers2.jpg" alt="Baani Ahuja" className="mx-auto mb-4 rounded-lg w-full" />
                <h4 className="font-semibold text-lg">Baani Ahuja</h4>
                <p className="text-2xl font-bold text-[#8B6B4C]">96.2%</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-2xl text-[#8B6B4C]">Commerce Stream</p>
              <p className="text-gray-600 mt-2">Goenkan Achievers Deserve a Grand Felicitation</p>
              <p className="font-semibold mt-1">CLASS XII | 2024</p>
            </div>
          </div>
        </div>

        {/* Humanities Stream Slide */}
        <div className="px-4">
          <div className="bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg">
            <div className="flex justify-between items-start mb-6">
              <div className="w-32">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toppers4.jpg" alt="GD Goenka Logo" className="w-full" />
              </div>
              <div className="w-20">
                <div className="rounded-full bg-red-100 p-2 text-center">
                  <span className="text-[#003366] font-bold">29</span>
                  <span className="block text-xs">YEARS</span>
                </div>
              </div>
            </div>
            <h3 className="text-3xl font-semibold text-center text-[#003366] mb-8">
              <span className="block text-[#8B6B4C] font-cursive text-2xl mb-2">Congratulations</span>
              Goenkan CBSE Toppers
            </h3>
            <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toppers4.jpg" alt="Devika Chauhan" className="mx-auto mb-4 rounded-lg w-full" />
                <h4 className="font-semibold text-lg">Devika Chauhan</h4>
                <p className="text-2xl font-bold text-[#8B6B4C]">93.6%</p>
              </div>
              <div className="text-center">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Toppers4.jpg" alt="Saishaa Mehta" className="mx-auto mb-4 rounded-lg w-full" />
                <h4 className="font-semibold text-lg">Saishaa Mehta</h4>
                <p className="text-2xl font-bold text-[#8B6B4C]">92.4%</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-2xl text-[#8B6B4C]">Humanities Stream</p>
              <p className="text-gray-600 mt-2">Goenkan Achievers Deserve a Grand Felicitation</p>
              <p className="font-semibold mt-1">CLASS XII | 2024</p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Achievers

