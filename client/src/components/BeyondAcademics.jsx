import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../css/BeyondAcademics.css";
import ParentChild from "../assets/Family.jpg";
import Sports from "../assets/Sports.JPG";
import Music from "../assets/MusicAndDance.jpg";
import Art from '../assets/Art.jpg';
import bg from '../assets/imagebg.jpg';
import CulturalFestivals from '../assets/Festival.JPG';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1536 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const cardsData = [
  {
    title: "Parent-Child Activities",
  image: ParentChild,
  description: "GD Goenka Public School, Aligarh, strengthens family bonds through engaging parent-child activities and collaborative events.",
  },
  {
    title: "Sport",
    image: Sports,
    description: "At GD Goenka Public School, Aligarh, sports training instills a sense of discipline, teamwork, and physical fitness, fostering well-rounded development among students.",
  },
  {
    title: "Music & Dance",
    image: Music,
    description: "Learning at GD Goenka Public School, Aligarh, extends beyond the classrooms into the vibrant world of music and dance, fostering creativity and self-expression.",
  },
  {
    title: "Cultural Festivals",
    image: CulturalFestivals,
    description: "Cultural festivals at GD Goenka Public School, Aligarh, celebrate diversity, traditions, and heritage, fostering unity and cultural appreciation among students."
  },
  {
    title: "Art & Craft",
    image: Art,
    description: "GD Goenka Public School, Aligarh, encourages artistic expression through a vibrant art and craft curriculum. Students explore various mediums, developing their creativity and artistic skills."
  }
];

function BeyondAcademics() {
  return (
    <section className="py-16 px-4 w-full sm:px-6 lg:px-8 bg-cover bg-center" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", }}>
      <div className=" mx-auto max-w-[1280px] ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Section */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">Beyond Academics</h2>
            <p className="text-lg text-gray-600 italic leading-relaxed mb-8">
              "You don't have to be great to start, but you have to start to be great."
              <br />
              <span className="text-sm mt-2 block">— Zig Ziglar</span>
            </p>
            <div className="hidden lg:flex space-x-4 justify-center lg:justify-start">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                Explore More
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded transition duration-300">
                Our Programs
              </button>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="lg:col-span-2">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              arrows={true}
              showDots={true}
              swipeable={true}
              draggable={true}
              containerclassName="carousel-container"
              itemclassName="px-2 py-4"
              dotListclassName="custom-dot-list-style"
              customLeftArrow={<CustomArrow direction="left" />}
              customRightArrow={<CustomArrow direction="right" />}
            >
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl h-full flex flex-col"
                >
                  <div className="relative h-48 sm:h-64">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{card.description}</p>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors mt-auto"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

const CustomArrow = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`absolute ${direction === 'left' ? 'left-0' : 'right-0'} top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition duration-300 z-10`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-blue-900"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={direction === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
        />
      </svg>
    </button>
  );
};

export default BeyondAcademics;
