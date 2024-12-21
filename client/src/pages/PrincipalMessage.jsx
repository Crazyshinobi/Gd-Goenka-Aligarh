import React, { useEffect } from "react";
import { Layout } from "../components/Layout";
import NavigationPages from "./NavigationPages";
import { motion } from "framer-motion"; // Import framer-motion for animations
import School from "../assets/School.jpg";
import PrincipalPhoto from "../assets/principal1.jpeg";

const PrincipalMessage = () => {
  document.title = 'Principal Message - GDGPS Aligarh'
 

  return (
    <Layout>
      {/* Banner Section */}
      <div className="relative bgImage">
        <motion.img
          src={School}
          alt="GD Goenka School"
          className="h-[50vh] md:h-[40vh] lg:h-[75vh] w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="absolute bottom-4 md:bottom-6 left-4 md:left-8 text-3xl md:text-5xl font-bold text-red-600 bg-white bg-opacity-80 px-4 py-2 rounded"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ABOUT
        </motion.h1>
      </div>

      {/* Navigation Section */}
      <NavigationPages />

      {/* Principal's Message Section */}
      <motion.div
        className="principalMessageSection px-4 py-8 md:py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-center text-2xl md:text-4xl font-bold text-blue-900 mb-6"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Principal's Message
        </motion.h1>

        <motion.section
          className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden"
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
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.img
              src={PrincipalPhoto}
              alt="Dr. Anubhav Lodhi"
              className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] object-cover rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="w-full md:w-2/3 p-4 sm:p-6 md:p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 mb-2"
              whileHover={{ color: "#003963" }}
            >
              Dr. ANUBHAV LODHI
            </motion.h2>
            <p className="italic text-gray-500 mb-4 text-sm sm:text-base">
              - Principal | M.Com, LLB, B.Ed, Ph.D
            </p>

            {/* Paragraphs */}
            {[
              "With an illustrious academic background and a passion for education, Dr. Anubhav Lodhi has dedicated his life to shaping the future of students. His qualifications, including M.Com, LLB, B.Ed, and Ph.D., reflect his commitment to excellence and deep knowledge in diverse fields.",
              "Dr. Lodhi brings years of experience in education, administration, and leadership. His vision for GD Goenka Public School, Aligarh, focuses on holistic development, combining academic excellence with personal growth and character building.",
              "He firmly believes in providing a nurturing and inclusive learning environment where students are encouraged to discover their potential, develop critical thinking skills, and become responsible global citizens.",
              "Under his leadership, GD Goenka Public School continues to set new benchmarks in education, innovation, and student well-being. His guidance ensures that every child receives the tools they need to thrive in an ever-changing world.",
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </motion.section>
      </motion.div>
    </Layout>
  );
};

export default PrincipalMessage;
