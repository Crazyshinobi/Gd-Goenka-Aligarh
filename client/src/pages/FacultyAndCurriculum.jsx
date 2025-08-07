import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Academics from "../assets/academics.jpg";

import nurseryStudentImage from "../assets/nurseryStudent.jpg";
import fifthClassImage from "../assets/fifthClass.jpg";
import eightClassImage from "../assets/eightClass.jpg";
import ninthClassImage from "../assets/ninthClass.jpg";

import { Layout } from "../components/Layout";
import NavigationPages from "./NavigationPages";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../css/Faculty.css";
import Marquee from "react-fast-marquee";
import icon1 from "../assets/smart-icon1.png";
import icon2 from "../assets/smart-icon2.png";
import icon3 from "../assets/smart-icon3.png";
import icon4 from "../assets/smart-icon4.png";
import icon5 from "../assets/smart-icon5.png";

import BadmintonCourt from "../assets/BadmintonCourt.JPG";
import HorseRiding from "../assets/HorseRiding.jpg";
import Robotics from "../assets/Robotics.JPG";
import Gymnastics from "../assets/Gymnastics.JPG";
import OutdoorActivity from "../assets/OutdoorActivity2.jpg";
import Outdoor from "../assets/Outdoor.jpg";
import IndoorGames from "../assets/IndoorGames.JPG";
import TableTennis from "../assets/TableTennis.JPG";
import bg1 from "../assets/bg2.jpg";
import CricketGround from "../assets/Cricket.jpeg";
import { Helmet } from "react-helmet";

gsap.registerPlugin(ScrollTrigger);

const FacultyAndCurriculum = () => {
  document.title = "Faculty and Curriculum - GDGPS Aligarh";
  const bannerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Banner animation
    gsap.from(bannerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  
    // Sections animation with ScrollTrigger
    sectionRefs.current.forEach((section, index) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 90%", 
          end: "bottom 10%", 
          toggleActions: "play none none reverse", 
        },
        delay: index * 0.2, // Stagger the animations by 0.2 seconds
      });
    });
  }, []);
  

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const url = [
    { icon: icon1 },
    { icon: icon2 },
    { icon: icon3 },
    { icon: icon4 },
    { icon: icon5 },
  ];

  const sportsData = [
    {
      id: 1,
      title: "Basketball Ground",
      description:
        "Our Basketball Court offers a spacious and well-maintained area for students to learn and play basketball. The court is equipped with regulation-sized markings, high-quality hoops, and safety features, ensuring a safe and enjoyable environment for both practice and competitive matches.",
      image: CricketGround, // Keep the image as the existing one
    },
    {
      id: 2,
      title: "Badminton Court",
      description:
        "Our Badminton court provides a safe and well-maintained space for children to learn and play the game. The court is designed with kid-friendly dimensions and equipment, ensuring an exciting and enjoyable experience.",
      image: BadmintonCourt, // Keep the image as the existing one
    },

    {
      id: 3,
      title: "Outdoor Games Area",
      description:
        "Our outdoor games area features a variety of activities. It’s designed to give children the opportunity to engage in fun games that improve their agility, balance, and coordination.",
      image: Outdoor, // You can keep the same image or change it
    },
    {
      id: 4,
      title: "Horse Riding",
      description:
        "Children can experience the joy and thrill of horse riding in a safe and supervised environment. Our horse riding program is designed to introduce kids to equestrian skills and help them build confidence, balance, and coordination.",
      image: HorseRiding, // You can change the image if needed
    },
    {
      id: 5,
      title: "Outdoor Activity Zone",
      description:
        "The outdoor activity zone offers kids the chance to participate in a variety of physical activities such as obstacle courses, rock climbing, and team-building games. These activities encourage teamwork, problem-solving, and physical fitness.",
      image: OutdoorActivity, // Keep the same image or swap for something more fitting
    },
    {
      id: 6,
      title: "Indoor Games Area",
      description:
        "Our indoor games area features fun and interactive games such as chess, carrom, and table tennis. These games help children develop strategic thinking, hand-eye coordination, and social skills in a relaxed indoor environment.",
      image: IndoorGames,
    },
    {
      id: 7,
      title: "Robotics for Kids",
      description:
        "Our robotics program introduces children to the exciting world of technology and engineering. Kids learn how to build and program robots, which helps improve problem-solving skills, creativity, and teamwork while fostering an interest in STEM fields.",
      image: Robotics, // You can change the image for something more relevant to Robotics
    },
    {
      id: 8,
      title: "Gymnastics for Kids",
      description:
        "Gymnastics classes for children are designed to improve balance, coordination, and flexibility through fun activities. The kids are taught basic gymnastics moves that enhance their motor skills and build strength.",
      image: Gymnastics,
    },
    {
      id: 9,
      title: "Table Tennis for Kids",
      description:
        "Our Table Tennis section offers a fun, fast-paced environment for children to learn and play the game. It helps improve hand-eye coordination, reflexes, and focus while allowing kids to enjoy friendly competition.",
      image: TableTennis, // This image can be used for the Table Tennis section
    },
  ];

  return (
    <Layout>
      <Helmet>
  <title>Faculty and Curriculum - GD Goenka Public School Aligarh</title>
  <meta name="description" content="Learn about our experienced faculty members and the rich, balanced curriculum followed at GD Goenka Aligarh." />
</Helmet>


      {/* Banner Section */}
      <div className="relative bgImage">
        <motion.img
          src={Academics}
          alt="Academics"
          className="h-[35vh] md:h-[40vh] lg:h-[60vh] w-full object-fill"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="absolute shadow-md bottom-4 md:bottom-6 left-4 md:left-8 text-3xl md:text-5xl font-bold text-[#2a3c7e] bg-white bg-opacity-80 px-4 py-2 rounded"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ACADEMICS
        </motion.h1>
      </div>

      {/* Navigation Section */}
      <NavigationPages />

      {/* Main Content */}
      <motion.section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="container mx-auto py-12 w-full font-polymath"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <motion.h1
          className="text-xl lg:text-3xl mx-auto  lg:w-[60%]  mt-8 font-bold text-center mb-6 uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          G.D. Goenka Public School, Aligarh, prides itself on a happy workforce
          of over 150 faculty members and a large support staff of lab
          assistants, attendants etc.
        </motion.h1>
        <div className="flex flex-col max-w-7xl mx-auto lg:flex-row items-center justify-center">
          {/* Left Content */}
          <motion.div
            className="w-[90%] md:w-[80%] lg:w-[45%] bg-gray-200 text-gray-500 rounded-l shadow-lg p-8 h-[26rem] flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-[20rem] overflow-y-scroll pr-4 scrollable-content">
              <p className="text-lg leading-relaxed mb-4">
                The school aims at a distinct difference of a glorious vision
                and a new ambience of a proven concept of harmonized
                instructions, differentiated learning, a dynamic faculty and a
                host of values that kindle change and excellence.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                With an updated professional development of teachers, the
                school's progressive pedagogy has reached new frontiers. An
                updated think tank plans each activity and event with a
                reciprocal, blended and interdisciplinary teaching strategy.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Differentiated instruction is a popular and effective mode that
                involves reacting to the diverse learning styles in every
                classroom with adjusted content and processes.
              </p>

              <p className="text-lg leading-relaxed ">
                With the goal of teaching mindful learners who actively pursue
                knowledge, teachers become more actively engaged in how they
                teach the curriculum and how they develop each student’s
                learning potential. They mix and match a variety of tactics in
                accordance with CBSE and NEP 2020, to ensure that students not
                only learn more, better, and faster. They also learn smarter!!
              </p>
              {/* ... (rest of the content) */}
            </div>
          </motion.div>

          {/* Right Slider */}
          <motion.div
            className="w-[90%] lg:w-[45%] md:w-[80%] overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
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
                src={Academics}
                alt="Academic Excellence"
                className="w-full h-[27rem] object-cover"
              />
            </Carousel>
          </motion.div>
        </div>
      </motion.section>

      {/* CARDS */}
      <motion.section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="container mx-auto bg-slate-200 py-12 flex justify-center"
      >
        <div className="w-full max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card */}
          <motion.div
            className="bg-white shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={nurseryStudentImage}
              alt="Pre Primary School"
              className="w-full h-[25rem] p-6 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#2a3c7e] mb-4">
                Pre Primary and Early Primary School <br />
                (Nursery to Grade II)
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                At the Pre-Primary and early Primary years, the objective is to
                facilitate learning by creating a nurturing and stimulating
                environment for them to learn joyfully.
              </p>
              {/* ... (rest of the content) */}
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="bg-white shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={fifthClassImage}
              alt="Primary School"
              className="w-full h-[25rem] p-6 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#2a3c7e] mb-4">
                Primary School (Grade III to V)
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                The Primary School aims to inculcate foundational knowledge in
                various subjects in our young students. The focus is on reading
                and writing, language comprehension, math, critical thinking and
                inter-personal skills.
              </p>
              {/* ... (rest of the content) */}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Middle and Senior Section */}
      <motion.section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="container mx-auto bg-blue-900 py-12 flex justify-center"
      >
        <div className="w-full max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card */}
          <motion.div
            className="bg-white shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={eightClassImage}
              alt="Pre Primary School"
              className="w-full h-[25rem] p-6 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#2a3c7e] mb-4">
                The Middle Section (Grade VI to VIII)
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                The middle section aims to give a quantum jump to the knowledge
                assimilated in the foundation years and to further strengthen
                the basics of the student.
              </p>
              {/* ... (rest of the content) */}
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="bg-white shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={ninthClassImage}
              alt="Primary School"
              className="w-full h-[25rem] p-6 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#2a3c7e] mb-4">
                The Senior Section (Grade IX to XII)
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The Senior Section comprising of classes 9 to 12 is where our
                young learners transform into individuals who are ready to carve
                a niche for themselves.
              </p>
              {/* ... (rest of the content) */}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Slider */}
      <motion.div
        ref={(el) => (sectionRefs.current[3] = el)}
        className="animated-border flex flex-col h-[360px] w-full justify-center max-w-6xl mx-auto p-4 overflow-hidden"
      >
        <div className="w-full flex justify-center lg:h-[250px] ">
          <Marquee>
            {url.map((url, index) => (
              <motion.img
                key={index}
                src={url.icon}
                alt={`img ${index}`}
                className="lg:h-52 md:h-40 h-36 rounded- mx-10 overflow-hidden"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </Marquee>
        </div>
      </motion.div>

      {/* PHYSICAL EDUCATION */}
      <motion.div
        ref={(el) => (sectionRefs.current[4] = el)}
        className="py-16 w-full bg-yellow-50 flex flex-col items-center"
      >
        <motion.h2
          className="text-4xl font-bold text-center text-[#2a3c7e] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Physical Education
        </motion.h2>
        <motion.p
          className="text-center max-w-6xl w-[90%] text-lg text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Physical Education is an indispensable element on the continuum where
          listings of essential pre-requisites for personality development are
          drawn. The sports activities of Goenkan institution are formulated
          with a perspective of mass participation with an aim of health and
          fitness to each and every participant.
        </motion.p>
        <div className="flex flex-wrap max-w-7xl w-full items-center justify-center gap-8">
          {sportsData.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative group w-[340px] h-60 overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
              />
              <motion.div
                className="absolute bottom-0 left-0 w-full bg-[#2a3c7e] text-white text-center p-3 
                transform translate-y-full transition-transform duration-500 group-hover:translate-y-0 scrollable-content"
                style={{ height: "100%", overflow: "auto" }}
              >
                <div className="overflow-y h-full ">{item.description}</div>
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-0 w-full bg-white text-gray-800 text-center p-1 font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {item.title}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default FacultyAndCurriculum;
