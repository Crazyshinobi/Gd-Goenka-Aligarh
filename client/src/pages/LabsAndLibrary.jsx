import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LabsAndLibraryBanner from "../assets/Library.jpg";
import NavigationPages from "./NavigationPages";
import { Layout } from "../components/Layout";
import Carousel from "react-multi-carousel";
import lab2 from "../assets/Lab.jpg";
import lab from "../assets/Lab2.jpg";
import bgDesign from "../assets/bgdesign4.webp";
import { Helmet } from "react-helmet";

gsap.registerPlugin(ScrollTrigger);

const LabsAndLibrary = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const bannerRef = useRef(null);
  const sectionsRef = useRef([]);

  const { scrollYProgress } = useScroll();
  const bannerScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);

  useEffect(() => {
    gsap.to(bannerRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%", 
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <Layout>
      <Helmet>
  <title>Labs and Library - GD Goenka Public School Aligarh</title>
  <meta name="description" content="Explore our state-of-the-art laboratories and extensive library facilities designed to support student learning." />
</Helmet>

      {/* Enhanced Banner Section */}
      <motion.div
        className="relative h-[35vh] md:h-[60vh] lg:h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.img
          src={LabsAndLibraryBanner}
          alt="Labs and Library"
          className="h-full w-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />

        <motion.h1
          className="absolute shadow-md bottom-4 md:bottom-6 left-4 md:left-8 text-3xl md:text-5xl font-bold text-[#2a3c7e] bg-white bg-opacity-80 px-4 py-2 rounded"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          OUR CAMPUS
        </motion.h1>
      </motion.div>

      <NavigationPages />

      <motion.div
        className="px-4 py-12 md:py-20 flex flex-col items-center bg-gradient-to-b from-gray-50 to-white bg-pattern font-polymath"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-center text-3xl md:text-5xl font-bold text-[#2a3c7e] mb-8"
          variants={fadeInUp}
        >
          Labs and Library
        </motion.h1>
        <motion.p
          className="text-center mb-12 text-gray-600 max-w-3xl"
          variants={fadeInUp}
        >
          Our School takes great pride in reinventing and renovating
          state-of-the-art facilities for Goenkans. The School Laboratories are
          an exemplary arena where students learn, explore, experiment and
          enhance their objectives!
        </motion.p>

        {[
          {
            image: lab2,
            content: `The school has made a strong impact in the educational scenario with its unique philosophy and futuristic thinking. The school has taken a lead and initiated very robust changes in the laboratories and the school library.
          
          The three Science labs are specially designed for well-equipped learning stations and flexible approach to seating. The active learning experience for Physics, Chemistry, Biology and Computer Science students takes cognizance of the best apparatus, tools, aids, AI based technology and the latest hands on subject related elements.`,
          },
          {
            image: lab,
            content: `The Math and Language labs endorse the convergent and divergent thinking approach to the subjects. All activities are explored in these evolved arenas of space and the students get a platform to enhance their concepts and skills.
          
          A dynamic Virtual Reality lab encourages young thinkers to expand their horizons. An exciting addition is the Tab lab that combines daily classes with a three-dimensional teaching aid.`,
          },
          {
            image: LabsAndLibraryBanner,
            content: `The glorious ambience of the Library is the jewel in the Goenkan crown because of its excellent and highly endorsed collection of books, journals, reference material and academic resources. All these spaces are fitted with safe and conducive interiors and an aesthetic environment friendly ambience.
          
          Every step of AI aided teaching methodology is aimed at harnessing the skills and optimization of the potential of each child.`,
          },
        ].map((section, index) => (
          <motion.section
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className={`container mx-auto max-w-6xl py-16 flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center justify-center gap-12`}
          >
            <motion.div
              className="w-full lg:w-1/2 overflow-hidden rounded-xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                showDots={false}
                arrows={false}
                className="rounded-xl"
              >
                <img
                  src={section.image}
                  alt={`Lab ${index + 1}`}
                  className="w-full h-[400px] object-cover"
                />
              </Carousel>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 bg-white rounded-xl shadow-xl p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="prose prose-lg text-gray-700 max-w-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {section.content.split("\n\n").map((paragraph, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
          </motion.section>
        ))}
      </motion.div>

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

export default LabsAndLibrary;
