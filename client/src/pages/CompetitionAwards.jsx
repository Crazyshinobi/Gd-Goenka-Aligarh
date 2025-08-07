import React, { useEffect } from "react";
import { Layout } from "../components/Layout";
import NavigationPages from "./NavigationPages";
import AwardBanner from "../assets/Awards.PNG";
import Student2 from "../assets/Student2.JPG";
import Carousel from "react-multi-carousel";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import bgDesign from '../assets/bgdesign3.jpg'
import { Helmet } from "react-helmet";

const CompetitionAwards = () => {
  useEffect(() => {
   
    // GSAP Scroll Trigger Animation
    gsap.fromTo(
      ".award-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "easeOut" }
    );
    gsap.fromTo(
      ".award-description",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "easeOut", delay: 0.5 }
    );
    gsap.fromTo(
      ".carousel-img",
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "easeOut", delay: 1 }
    );
  }, []);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <Layout>
      <Helmet>
  <title>Competitions and Awards - GD Goenka Public School Aligarh</title>
  <meta name="description" content="View our achievements and awards in inter-school competitions, academic excellence, and extracurricular events." />
</Helmet>

      {/* Banner Section */}
      <div className="relative">
        <motion.img
          src={AwardBanner}
          alt="Competitions Awards"
          className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] w-[100%] object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="absolute bottom-6 text-3xl md:text-5xl left-8  font-bold text-[#2a3c7e] bg-white bg-opacity-80 px-4 py-2 rounded-lg shadow-md"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          ACADEMICS
        </motion.h1>
      </div>

      {/* Navigation Section */}
      <NavigationPages />

      {/* Main Content Section */}
      <div className="principalMessageSection px-4 py-12 bg-pattern font-polymath">
        <h1 className="text-center text-3xl font-black text-[#2a3c7e] mb-8 award-title">
          Competition & Awards
        </h1>
        
        <section className="container mx-auto max-w-7xl py-12 flex flex-col lg:flex-row items-center justify-center">
          {/* Left Content */}
          <motion.div
            className="w-[90%] md:w-[80%] lg:w-[45%] bg-gray-100 text-gray-800 rounded-lg shadow-lg p-8 h-auto flex flex-col justify-between award-description"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className=" pr-4 h-[20rem]">
              <p className="text-lg leading-relaxed mb-4">
                To celebrate and glorify excellence in Academic performance,
                the scholastic excellence awards are conferred upon students who
                have demonstrated a high level of academic performance over a
                period of two to three years at various levels.
              </p>
              <p className="text-lg leading-relaxed">
                The students are presented the award in the form of a trophy
                and a certificate in a special ceremony attended by proud
                parents.
              </p>
            </div>
          </motion.div>

          {/* Right Slider */}
          <motion.div
            className="w-[90%] lg:w-[45%] md:w-[80%] cursor-grab overflow-hidden shadow-lg carousel-img"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
          >
            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000} showDots={false} arrows={false}>
              <img src={Student2} alt="Students" className="w-full h-[27rem] object-cover" />
            </Carousel>
          </motion.div>
        </section>

        {/* Cards Section */}
        <section className="container mx-auto bg-slate-200 py-14 flex justify-center">
          <div className="w-full max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Card */}
            <motion.div
              className="bg-white shadow-xl rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#2a3c7e] mb-4">Roll of Honour</h2>
                <p className="text-gray-600 leading-relaxed">
                  The Roll of Honour celebrates excellence and success,
                  recognizing brilliance and diligence among students.
                </p>
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div
              className="bg-white shadow-xl rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#2a3c7e] mb-4">Certificate of Appreciation</h2>
                <p className="text-gray-600 leading-relaxed">
                  Scholastic performance is applauded with certificates,
                  encouraging every effort made by students.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="container mx-auto bg-blue-900 text-white py-12 rounded-lg shadow-lg">
          <div className="max-w-[1280px] w-[90%] mx-auto space-y-8">
            <h3 className="text-xl leading-relaxed">Our school has gained a firm foothold on the National arena...</h3>
            <p className="text-xl leading-relaxed">
            Our constant aim to excel in academics forums and National level examinations is evident in various endeavours that we explore to enhance the Global talent pool.
          </p>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Every year the students of G.D.Goenka display their talent in</h3>
            <ul className="space-y-4 ">
              <li className="flex items-start gap-2 ">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-300" />
                <span>Maths, Science, English and Cyber Olympiad (classes III- XII)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-300" />
                <span>National Talent Search Examination (N.T.S.E for class X)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-300" />
                <span>Junior Science Talent Search Examination (J.S.T.S for class IX)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-300" />
                <span>ARYABHATTA (Interschool Maths examination class VIII)</span>
              </li>
            </ul>
          </div>
          <p className="text-xl leading-relaxed">
            Time to time students have won good scores and received certificates of appreciation. N.T.S.E is a national-level scholarship program to identify and recognize students with high intellect and academic talent. Participating and preparing for exams like, NTSE, JSTSE, NSO, IMO, NCO and IEO helps in development of student's IQ, logical and analytical thinking from very young age which helps in later stage when they prepare for JEE, NEET and other competitive exams.
          </p>
          </div>
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

export default CompetitionAwards;
