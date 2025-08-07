import React, { useEffect } from "react";
import TeachingBanner from "../assets/Teaching1.jpeg";
import { Layout } from "../components/Layout";
import NavigationPages from "./NavigationPages";
import Student1 from "../assets/Student1.JPG";
import Student2 from "../assets/Student2.JPG";
import Carousel from "react-multi-carousel";
import { motion } from "framer-motion";
import bgDesign from '../assets/bgdesign3.jpg'
import { Helmet } from "react-helmet";


const TeachingMethodology = () => {
 

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <Layout>
      <Helmet>
  <title>Teaching Methodology - GD Goenka Public School Aligarh</title>
  <meta name="description" content="Discover innovative and student-friendly teaching methodologies adopted at GD Goenka Public School Aligarh." />
</Helmet>

      {/* Banner Section */}
      <div className="relative">
        <motion.img
          src={TeachingBanner}
          alt="Teaching Methodology"
          className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="absolute bottom-4 shadow-md md:bottom-6 left-4 md:left-8 text-3xl md:text-5xl font-bold text-[#2a3c7e] bg-white bg-opacity-80 px-4 py-2 rounded"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          ACADEMICS
        </motion.h1>
      </div>

      {/* Navigation Section */}
      <NavigationPages />

      <div className=" px-4 py-8 md:py-12 bg-pattern font-polymath">
        <motion.h1
          className="text-center text-2xl md:text-4xl font-semibold text-blue-900 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Teaching Methodology
        </motion.h1>

        <section className="container mx-auto max-w-7xl py-12 flex flex-col lg:flex-row items-center justify-center">
          {/* Left Content */}
          <motion.div
            className="w-[90%] md:w-[80%] lg:w-[45%] bg-gray-100 text-gray-800 rounded-l shadow-lg p-8 h-[26rem] flex items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="w-full h-[20rem] overflow-y-scroll pr-4 scrollable-content">
              <p className="text-lg leading-relaxed mb-4">
                GDGPS ALIGARH aims at nurturing individuals with paramount values and
                multivalent competencies. As we continue our vision, a dynamic
                new curriculum developed by an accomplished team ensures not
                only academic excellence with pedagogical discipline but an
                entirely new approach to education. The best practices of
                interactive and creative shift in learning and teaching are
                reinvented for progressive engagement of the students. The
                inclusion of a digital, online matrix, technology and AI aided
                tools, holistic sensitivity and a re-alignment of strategies
                gives the school an edge over others.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                An upgraded and advanced school ethos with mentorship that is
                innovative has provided an activity-based, blended learning
                experience at its core.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                New frontiers of standards are evident here. All students become
                lifelong learners through efficient systems and processes to
                optimally realize their potential. An all-embracing new
                curriculum design meets the demands of the NEP with a stress on
                meta-cognitive awareness that facilitates the process of
                Innovation and research.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                The interdisciplinary projects-based blended learning with
                focus on a progressive pedagogy, nurtures the emotional health
                and social awareness and responsibility of the students.
              </p>
              <p className="text-lg leading-relaxed ">
                A brand new, child-oriented environment, where classrooms are
                arranged for challenging play and learning choices for a range
                of developmental levels has been redone with new design
                elements.
              </p>
            </div>
          </motion.div>

          {/* Right Slider */}
          <motion.div
            className="w-[90%] lg:w-[45%] md:w-[80%] cursor-grab overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              arrows={false}
            >
              <motion.img
                src={Student1}
                alt="Students"
                className="w-full h-[27rem] object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <motion.img
                src={Student2}
                alt="Students"
                className="w-full h-[27rem] object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </Carousel>
          </motion.div>
        </section>
      </div>
      <style>{`
        .bg-pattern {
          background-image: url(${bgDesign}); // Use the imported image here
          background-size: 10px;
          background-repeat: repeat;
        }
      `}</style>
    </Layout>
  );
};

export default TeachingMethodology;
