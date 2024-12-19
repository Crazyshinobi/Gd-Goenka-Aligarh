import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import NavigationPages from "./NavigationPages";
import Banner from "../assets/Festival2.JPG";
import OutdoorActivity from "../assets/OutdoorActivity.jpg";
import FestivalImage from "../assets/Festival.JPG";
import BadmintonImage from "../assets/BadmintonCourt.JPG";
import Outdoor from "../assets/Outdoor.jpg";
import Robotics from '../assets/Robotics.JPG';
import Art from "../assets/Art.jpg";
import HorseRiding from "../assets/HorseRiding.jpg";

const Activities = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const cardsRef = useRef([]);

  const activitiesData = [
    {
      id: 1,
      title: "Festival Celebrations",
      description:
        "At G.D. Goenka Aligarh, we celebrate a variety of cultural festivals with great enthusiasm. These events bring students together to learn about different traditions, foster creativity, and enjoy moments of joy through music, dance, and food.",
      image: FestivalImage,
    },
    {
      id: 2,
      title: "Badminton Playing",
      description:
        "Badminton is one of the popular indoor sports at G.D. Goenka Aligarh. With well-maintained courts and expert coaching, our students regularly participate in friendly matches and tournaments, developing their skills and teamwork.",
      image: BadmintonImage,
    },
    {
      id: 3,
      title: "Outdoor Activities",
      description:
        "We encourage our students to engage in various outdoor activities such as nature walks, gardening, and adventure camps. These activities help students develop resilience, teamwork, and a deeper connection with nature.",
      image: OutdoorActivity,
    },
    {
      id: 4,
      title: "Outdoor Games",
      description:
        "G.D. Goenka Aligarh offers a wide variety of outdoor games that help students stay active and energized. From relay races to obstacle courses, students enjoy these games, which promote teamwork, fitness, and leadership skills.",
      image: Outdoor,
    },
    {
      id: 5,
      title: "Robotics",
      description:
        "Our Robotics program provides students with an exciting opportunity to explore STEM fields. By building and programming robots, students develop problem-solving, critical thinking, and teamwork skills, preparing them for future technological advancements.",
      image: Robotics,
    },
    {
      id: 6,
      title: "Art and Craft",
      description:
        "The art and craft program at G.D. Goenka Aligarh fosters creativity and self-expression among students. Whether it's painting, sculpture, or craftwork, students are encouraged to explore different mediums and develop their artistic talents.",
      image: Art,
    },
    {
      id: 7,
      title: "Horse Riding",
      description:
        "Horse riding is a unique activity offered at G.D. Goenka Aligarh. Our equestrian program allows students to develop confidence, discipline, and a sense of responsibility while interacting with horses in a safe and nurturing environment.",
      image: HorseRiding,
    },
  ];

  return (
    <Layout>
      {/* Banner Section */}
      <div className="relative">
        <motion.img
          src={Banner}
          alt="Activities"
          className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] w-full object-fill"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="absolute bottom-4 md:bottom-6 left-4 md:left-8 text-3xl md:text-5xl font-bold text-red-600 bg-white bg-opacity-80 px-4 py-2 rounded"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          OUR CAMPUS
        </motion.h1>
      </div>

      <NavigationPages />

      <div className="px-4 py-8 md:py-12 flex flex-col items-center">
        <motion.h1
          className="text-center text-2xl md:text-4xl font-bold text-blue-900 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Activities at G.D. Goenka Aligarh
        </motion.h1>
        <motion.p
          className="text-center mb-6 text-slate-600 max-w-7xl w-[90%]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          At G.D. Goenka Aligarh, we believe in nurturing not just academic excellence but also physical prowess and sportsmanship. Our world-class playfields and sports facilities are designed to inspire and challenge students, helping them develop a lifelong love for sports and fitness. From cricket to yoga, we offer a diverse range of sporting activities to cater to every interest and skill level.
        </motion.p>

        <div className="flex flex-wrap max-w-7xl w-full items-center justify-center gap-8">
          {activitiesData.map((item) => (
            <motion.div
              key={item.id}
              ref={(el) => (cardsRef.current[item.id - 1] = el)}
              className="relative group w-[340px] h-[320px] overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-full h-full bg-blue-600 text-white text-center p-3 transform translate-y-full transition-transform duration-500 group-hover:-translate-y-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {item.description}
              </motion.div>
              <div className="absolute bottom-0 left-0 w-full bg-white text-gray-800 text-center p-2 font-bold">
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Activities;
