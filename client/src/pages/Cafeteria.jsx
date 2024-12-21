import React, { useEffect, useRef } from "react";
import CafeBanner from "../assets/cafeBanner.jpg";
import { Layout } from "../components/Layout";
import NavigationPages from "./NavigationPages";
import Carousel from "react-multi-carousel";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
document.title = 'Cafeteria - GDGPS Aligarh'

const Cafeteria = () => {
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  useEffect(() => {
    

    // GSAP animations for left and right content sections
    gsap.fromTo(
      leftContentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: leftContentRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(
      rightContentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: rightContentRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <Layout>
      {/* Banner Section */}
      <motion.div className="relative bgImage" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 className="text-3xl md:text-5xl font-bold absolute bottom-4 md:bottom-6 left-4 md:left-8 text-[#e1b671]">
          OUR CAMPUS
        </h1>
        <motion.img
          src={CafeBanner}
          alt="Cafeteria"
          className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[65vh] w-full object-fill"
          whileInView={{ scale: 1.05 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      {/* Navigation Section */}
      <NavigationPages />

      <motion.div className="px-4 py-8 md:py-12">
        <motion.h1
          className="text-center text-2xl md:text-4xl font-bold text-blue-900 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Cafeteria
        </motion.h1>

        <section className="container mx-auto max-w-7xl py-12 flex flex-col lg:flex-row items-center justify-center">
          {/* Left Content */}
          <motion.div
            ref={leftContentRef}
            className="w-[90%] md:w-[80%] lg:w-[45%] bg-gray-100 text-gray-800 rounded-l shadow-lg p-8 h-[26rem] flex items-center"
          >
            <div className="w-full h-[20rem] overflow-y-scroll pr-4 scrollable-content">
              <p className="text-lg leading-relaxed mb-4">
                The School Cafeteria has a designated staff of cooks, helpers
                and servers. The Catering Manager is under vigilant supervision
                of the school authorities. Healthy, attractive meals are packed
                and served that are child-friendly and of high nutrition value.
                No 'junk food' or 'colas' is served as part of School policy.
                The Cafeteria follows strict standards of hygiene and safety.
                Three designated breaks are scheduled for Primary, Middle and
                Senior school. All staff members and students have access to tea
                and coffee dispensers. Only mineral water is served in the
                School Cafeteria.
              </p>
              <p className="text-lg leading-relaxed">
                Mineral water is provided to all the students and staff in
                disposable glasses through dispensers kept at all strategic
                locations all over the building.
              </p>
            </div>
          </motion.div>

          {/* Right Slider */}
          <motion.div
            ref={rightContentRef}
            className="w-[90%] lg:w-[45%] md:w-[80%] cursor-grab overflow-hidden shadow-lg"
          >
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              showDots={false}
              arrows={false}
            >
              <img
                src={CafeBanner}
                alt="Cafeteria"
                className="w-full h-[27rem] object-cover"
              />
            </Carousel>
          </motion.div>
        </section>
      </motion.div>
    </Layout>
  );
};

export default Cafeteria;
