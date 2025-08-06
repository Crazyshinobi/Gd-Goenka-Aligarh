import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion"; // Import framer-motion
import "../css/BeyondAcademics.css";
import ParentChild from "../assets/Family.jpg";
import SummerCamp from "../assets/SummerCamp.jpeg";
import YogaImage from "../assets/YogaImage.jpeg";
import TeejCelebration from "../assets/TeejCelebration.jpeg";
import SportsActivity from '../assets/SportsActivity.jpeg'
import bg from "../assets/imagebg.jpg";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1536 }, items: 3 },
  desktop: { breakpoint: { max: 1536, min: 1024 }, items: 2 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

const cardsData = [
  {
    title: "Parent-Child Activities",
    image: ParentChild,
    description:
      "GD Goenka Public School, Aligarh, strengthens family bonds through engaging parent-child activities and collaborative events.",
  },
 {
    title: "Teej Celebration",
    image: TeejCelebration,
    description:
      "The vibrant Teej celebration at GD Goenka Public School brings traditional customs alive, teaching students the value of cultural heritage.",
  },
  {
    title: "Summer Camp",
    image: SummerCamp,
    description:
      "The Summer Camp at GD Goenka Public School offers students a fun-filled environment to learn, play, and grow during the holidays.",
  },
  {
    title: "Yoga",
    image: YogaImage,
    description:
      "Regular yoga sessions at GD Goenka Public School promote mindfulness, flexibility, and overall well-being among students.",
  },
  {
    title: "Sports Activity",
    image: SportsActivity,
    description:
      "Exciting sports activities nurture a healthy competitive spirit and encourage physical fitness among students.",
  },
];

function BeyondAcademics() {
  return (
    <section
      className="py-16 px-4 w-full sm:px-6 lg:px-8 bg-cover bg-center font-polymath font-normal"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2a3c7e] mb-4">
            Beyond Academics
          </h2>
          <p className="text-lg text-gray-600 italic leading-relaxed">
            "You don't have to be great to start, but you have to start to be
            great."
            <br />
            <span className="text-sm mt-2 block">— Zig Ziglar</span>
          </p>
        </motion.div>

        <div className="hidden lg:flex space-x-4 justify-center mb-8">
          <a href="/beyond-academics">
            <button className="bg-[#2a3c7e] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Explore More
            </button>
          </a>
          {/* <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded transition duration-300">
            Our Programs
          </button> */}
        </div>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            arrows={true}
            showDots={true}
            swipeable={true}
            draggable={true}
            containerClass="carousel-container"
            itemClass="px-2 py-4"
            dotListClass="custom-dot-list-style"
            className="z-20"
          >
            {cardsData.map((card, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:bg-gray-100 h-full flex flex-col"
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
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <a
                    href="/beyond-academics"
                    className="inline-flex items-center text-[#2a3c7e] hover:text-[#2a3c7e] transition-colors mt-auto"
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
              </motion.div>
            ))}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}

export default BeyondAcademics;
