import React, { useEffect } from "react";
import { Layout } from "../components/Layout";
import NavigationPages from "./NavigationPages";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Bannerbg from "../assets/visionBanner1.jpeg";
import vision from "../assets/vision.jpeg";
import mission from "../assets/mission.jpeg";
import { Helmet } from "react-helmet";

gsap.registerPlugin(ScrollTrigger);

const VisionAndMission = () => {
  useEffect(() => {
    gsap.fromTo(
      ".section-heading",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".section-heading",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".section-content",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".section-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".section-image",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".section-image",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <Layout>
      <Helmet>
  <title>Vision and Mission - GD Goenka Public School Aligarh</title>
  <meta name="description" content="Learn about our school’s mission and vision focused on holistic education and leadership." />
</Helmet>

      {/* Banner Section */}
      <div className="relative">
        <motion.img
          src={Bannerbg}
          alt="Vision And Mission"
          className="h-[35vh] sm:h-[40vh] md:h-[50vh] lg:h-[62vh] w-full object-fill"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="absolute bottom-4 md:bottom-6 shadow-md left-4 md:left-8 text-3xl md:text-5xl font-bold text-[#2a3c7e] bg-white bg-opacity-80 px-4 py-2 rounded"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          ABOUT
        </motion.h1>
      </div>

      {/* Navigation Section */}
      <NavigationPages />

      {/* Vision Section */}
      <div className="space-y-12 sm:space-y-16 md:space-y-20 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-polymath">
        <section className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center">
            {/* Vision Image */}
            <motion.div
              className="relative order-1 md:order-2 mt-8 md:mt-0 section-image"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img src={vision} alt="Vision" className="w-full h-auto" />
              </div>
            </motion.div>

            {/* Vision Content */}
            <motion.div
              className="relative order-2 md:order-1 section-content "
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="absolute -z-10 top-0 left-0 text-gray-100 text-[80px] sm:text-[100px] md:text-[120px] lg:text-[180px] font-bold leading-none opacity-50">
                VISION
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2a3c7e] mb-4 sm:mb-6">
                VISION
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-6">
                In our vision for the school, each and every student should
                develop and mould their ambitions towards perfection.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed ">
                The goal is to support and nurture the student's and our own
                natural desire to be lifelong learners. We anticipate creativity
                and initiative, enterprise and innovation, and cognitive
                strategies for progressive learning. Our vision is to prepare
                and motivate our students for a rapidly changing world, by
                instilling in them critical thinking skills, a global
                perspective, and a respect for core values of honesty, loyalty,
                perseverance, and compassion. Students will have success for
                today and be prepared for tomorrow.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center">
            {/* Mission Image */}
            <motion.div
              className="relative order-1 md:order-1 mt-8 md:mt-0 section-image z-10" // Ensure it's above background text
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={mission}
                  alt="Mission"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Mission Content */}
            <motion.div
              className="relative order-2 md:order-2 section-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="absolute -z-10 top-0 lg:-left-48 left-0 md:-left-40 text-gray-100 text-[80px] sm:text-[100px] md:text-[120px] lg:text-[180px] font-bold leading-none opacity-50">
                MISSION
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2a3c7e] mb-4 sm:mb-6">
                MISSION
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-6">
                The school motto{" "}
                <span className="text-[#2a3c7e] font-semibold">
                  HIGHER STRONGER BRIGHTER
                </span>{" "}
                takes its core idea from a quest for excellence, an insatiable
                thirst for knowledge, and a limitless craving for the latest.
              </p>
              <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>
                  Our school aspires to be a national leader in developing
                  educated contributors, career-ready learners, and global
                  citizens, and in generating a meaningful, high-impact,
                  progressive, and sustainable partnership with society.
                </p>
                <p>
                  Our mission is to provide a safe haven where everyone is
                  valued and respected. The faculty, in partnership with parents
                  and families, are fully committed to student's college and
                  career readiness.
                </p>
                <p>
                  We honour achievement and promote pride in ourselves, our
                  school, and our country.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default VisionAndMission;
