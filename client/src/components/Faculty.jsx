import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import KrishnaKuntal from "../assets/KrishnaKuntal.jpeg";
import KomitUjjwal from "../assets/KomitUjjwal.jpeg";
import DivyaChauhan from "../assets/DivyaChauhan.jpeg";
import PinkyMahour from "../assets/PinkyMahour.jpeg";
import DiptiVerma from "../assets/DiptiVerma.jpeg";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1536 }, items: 4 },
  desktop: { breakpoint: { max: 1536, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

const facultyData = [
  {
    name: "Mr. Krishna Kuntal",
    image: KrishnaKuntal
  },
  {
    name: "Mr. Komit Ujjwal",
    image: KomitUjjwal
  },
  {
    name: "Ms. Divya Chauhan",
    image: DivyaChauhan
  },
  {
    name: "Ms. Pinky Mahour",
    image: PinkyMahour
  },
  {
    name: "Ms. Dipti Verma",
    image: DiptiVerma
  }
];

function Faculty() {
  return (
    <section className="py-12 px-4 w-full bg-white">
      <div className="mx-auto max-w-7xl">
      <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2a3c7e] mb-4">
          Meet Our Expert Faculty
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our team of experienced educators and industry experts
          </p>
        </motion.div>

        <div className="hidden lg:flex justify-center mb-8">
          <NavLink to={"/our-faculty"}>
            <button className="bg-[#2a3c7e] text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
              Explore More Faculty
            </button>
          </NavLink>
        </div>

        <div className="px-2 py-2">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            arrows={true}
            showDots={false}
            swipeable={true}
            draggable={true}
            containerClass="carousel-container"
            itemClass="px-2"
            className="z-20"
          >
            {facultyData.map((faculty, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col items-center p-2"
              >
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-800 text-center">
                  {faculty.name}
                </h3>
              </motion.div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Faculty;