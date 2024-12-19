import React, { useEffect } from "react";
import { Layout } from "../components/Layout";
import NavigationPages from "./NavigationPages";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import School from "../assets/School.jpg"; // Replace with relevant image path
import PrincipalPhoto from "../assets/principal1.jpeg"; // Replace with the actual image path for Dr. Anubhav Lodhi

gsap.registerPlugin(ScrollTrigger);

const ManagementPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

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
      {/* Banner Section */}
      <div className="bgImage relative">
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

      {/* Management Content Section */}
      <div className="managementMessageSection px-4 py-8 md:py-12">
        <motion.h1
          className="text-center text-4xl text-blue-900 mb-8 fade-in"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Management Message
        </motion.h1>

        {/* Principal's Section */}
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
              src={PrincipalPhoto}
              alt="Dr. Anubhav Lodhi"
              className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] object-cover rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* Principal's Content */}
          <motion.div
            className="w-full md:w-2/3 p-6 md:p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-blue-700 mb-2"
              whileHover={{ color: "#003963" }}
            >
              Dr. ANUBHAV LODHI
            </motion.h2>
            <p className="italic text-gray-500 mb-4">M.Com, LLB, B.Ed, Ph.D.</p>
            <p className="text-gray-700 leading-relaxed mb-4 fade-in">
              “Education is not merely about filling a child’s mind with
              information but nurturing their ability to think critically,
              innovate, and embrace lifelong learning.”
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 fade-in">
              Dr. Anubhav Lodhi, the Principal of GD Goenka Public School,
              Aligarh, brings over two decades of expertise in education.
              Holding multiple prestigious degrees—M.Com, LLB, B.Ed, and
              Ph.D.—he is a dynamic leader committed to academic excellence and
              holistic student development. His vision is to create a learning
              environment that fosters curiosity, creativity, and leadership.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 fade-in">
              Under Dr. Lodhi’s leadership, GD Goenka Public School has emerged
              as a beacon of innovation and excellence, focusing on building
              strong values, critical thinking, and adaptability among students.
              His philosophy centers on empowering students with knowledge,
              ethics, and the confidence to face the challenges of a globalized
              world.
            </p>
          </motion.div>
        </motion.section>

        {/* Co-Manager Section */}
        <motion.section
          className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-8 p-6 md:p-8 fade-in"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">
            Mrs. [Name of Co-Manager/Director]
          </h2>
          <p className="italic text-gray-500 mb-4">- Co-Manager/Director</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As part of the leadership team, Mrs. [Co-Manager's Name] is
            dedicated to ensuring the seamless operation of the school. Her
            passion for student welfare and attention to detail help create a
            positive, nurturing environment where children thrive academically
            and emotionally.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Together with Dr. Lodhi, she strives to maintain GD Goenka
            Aligarh’s reputation as a school committed to academic excellence,
            innovation, and student-centric education.
          </p>
        </motion.section>
      </div>
    </Layout>
  );
};

export default ManagementPage;
