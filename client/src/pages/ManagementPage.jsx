import React, { useEffect } from "react";
import { Layout } from "../components/Layout";
import NavigationPages from "./NavigationPages";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import School from "../assets/School.jpg"; // Replace with relevant image path
import managementPhoto from "../assets/Management1.jpg";
import managementPhoto2 from "../assets/Management2.jpg";

import bgDesign from "../assets/bgdesign3.jpg";
import { Helmet } from "react-helmet";

gsap.registerPlugin(ScrollTrigger);

const ManagementPage = () => {
  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".fade-in",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <Layout>
      <Helmet>
  <title>Management - GD Goenka Public School Aligarh</title>
  <meta name="description" content="Meet the school management team and learn about the leadership driving GD Goenka Aligarh." />
</Helmet>

      {/* Banner Section */}
      <div className="bgImage relative">
        <motion.img
          src={School}
          alt="GD Goenka School"
          className="h-[35vh] md:h-[40vh] lg:h-[60vh] w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="absolute bottom-4 md:bottom-6 shadow-md left-4 md:left-8 text-3xl md:text-5xl font-bold text-[#003963] bg-white bg-opacity-80 px-4 py-2 rounded"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ABOUT
        </motion.h1>
      </div>

      {/* Navigation Section */}
      <NavigationPages />

      {/* Management Content Section */}
      <div className="managementMessageSection px-4 py-8 md:py-12 bg-pattern">
        <motion.h1
          className="text-center text-4xl text-[#bea05a] mb-8 fade-in font-polymath" 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Management Message
        </motion.h1>

        {/* Principal's Section */}
        <motion.section
          className="max-w-6xl mx-auto font-polymath bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden fade-in"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Photo Section */}
          <motion.div
            className="w-full md:w-1/3 flex justify-center items-center p-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={managementPhoto}
              alt="Anjani kumar goenka"
              className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] object-cover rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* ManagementContent */}
          <motion.div
            className="w-full md:w-2/3 p-6 md:p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-[#2a3c7e] mb-2"
              whileHover={{ color: "#003963" }}
            >
              “I don’t teach children, but create conditions for them to learn.”
              - Albert Einstein
            </motion.h2>
            <p className="italic text-gray-500 mb-4 font-bold">
              Founder & Visionary - Mr. Anjani Kumar Goenka
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 fade-in">
              G.D. Goenka Public School Aligarh is the realization of a dream of
              a visionary, Mr. Anjani Kumar Goenka, a noted businessman whose
              experience across multiple industries has shaped his dynamic and
              revolutionary approach. His relentless pursuit of excellence is
              reflected in the school, which strives for the highest standards
              in education and holistic development.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 fade-in">
              Mrs. Renu Goenka plays a crucial role behind the scenes, ensuring
              every detail adds to the extraordinary nature of the school.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4 fade-in">
              The school continues to excel academically and in co-curricular
              activities, with numerous students securing top ranks and
              representing the state in national competitions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 fade-in">
              Affiliated with CBSE, G.D. Goenka Public School Aligarh is
              committed to creating an environment where students can thrive and
              achieve their fullest potential.
            </p>
            <p className="text-black leading-relaxed mb-4 fade-in font-bold  text-xl">
              Mr. Anjani Kumar Goenka
            </p>
          </motion.div>
        </motion.section>

        {/* Co-Manager Section */}
        <motion.section
          className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden fade-in"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Photo Section */}
          <motion.div
            className="w-full md:w-1/3 flex justify-center items-center p-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={managementPhoto2} // Replace with the appropriate image path for Ms. Renu Goenka
              alt="Ms. Renu Goenka"
              className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] object-cover rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* Management Content */}
          <motion.div
            className="w-full md:w-2/3 p-6 md:p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-xl md:text-3xl font-bold text-[#2a3c7e] mb-2"
              whileHover={{ color: "#003963" }}
            >
              “Stories have no end; countries have no lines. Everything you feel
              you know may be worked upon and bettered.”
            </motion.h2>

            <p className="text-gray-700 leading-relaxed mb-4 fade-in">
              Ms. Renu Goenka plays a vital role in shaping the vision and
              direction of G.D. Goenka Public School Aligarh, ensuring every
              detail adds to the school's success. Her dedication to student
              welfare and excellence makes her a cornerstone of the school’s
              extraordinary journey.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 fade-in">
              With a strong focus on holistic development, she works
              relentlessly to uphold the institution's reputation for academic
              excellence, innovation, and co-curricular achievements.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 fade-in">
              Enjoy every part of this journey that leads to your future. It is
              the only time you are not burdened by responsibilities. Listen to
              your parents talk about their childhood and notice how their eyes
              sparkle. That is the joy of childhood. Make the most of it to
              enrich yourselves and work steadily to build your future.
            </p>
            <p className="text-black leading-relaxed mb-4 fade-in font-bold  text-xl">
              Ms. Renu Goenka
            </p>
          </motion.div>
        </motion.section>
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

export default ManagementPage;
