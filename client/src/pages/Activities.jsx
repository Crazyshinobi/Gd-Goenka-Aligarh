import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import NavigationPages from "./NavigationPages";
import Banner from "../assets/Festival2.JPG";
import OutdoorActivity from "../assets/OutdoorActivity.jpg";
import FestivalImage from "../assets/Festival.JPG";
import BadmintonImage from "../assets/BadmintonCourt.JPG";
import Outdoor from "../assets/Outdoor.jpg";
import Robotics from "../assets/Robotics.JPG";
import Art from "../assets/Art.jpg";
import HorseRiding from "../assets/HorseRiding.jpg";
import bgDesign from "../assets/bgdesign3.jpg";
import ChristmasCelebrationImage from "../assets/Christmas.jpeg";
import IndoorActivityImage from "../assets/IndoorActivity.jpeg";
import DiwaliCelebrationImage from "../assets/Diwali.jpeg";
import PoojaCeremonyImage from "../assets/Pooja.jpeg";
import NationalSportsDayImage from "../assets/SportsDay.jpeg";
import Trips from "../assets/Trips.jpeg";
import Rakshabandhan from "../assets/Rakshabandhan.jpeg";
import LohriImage from "../assets/LohriImage.jpeg";
import VolleyballImage from "../assets/Volleyball.jpeg";
import  RepublicDayImage from '../assets/RepublicDayImage.jpeg'

const Activities = () => {
  document.title = "Activities - GDGPS Aligarh";
  const cardsRef = useRef([]);

  const activitiesData = [
    {
      id: 1,
      title: "Republic Day Celebration",
      description:
        "The Republic Day celebration at G.D.Goenka Public School, Aligarh was a grand success, bringing together students, teachers, and staff to honor the rich history and values of our nation. The event was filled with patriotic fervor, cultural performances, insightful speeches, and recognition of student achievements. The day reminded everyone of the importance of democracy, unity, and the responsibilities we all share in building a better India. The collective efforts of all those involved made the celebration both meaningful and memorable.",
        image : RepublicDayImage,
      },
    {
      id: 2,
      title: "Lohri Celebration",
      description:
        "Festival of Lohri was celebrated at GD Goenka Public School, Aligarh with exuberance and fanfare. The entire atmosphere of the school was absorbed in the festive spirit and echoed the melodious vocals.",
      image: LohriImage, // Replace with actual image import
    },
    {
      id: 3,
      title: "Festival Celebrations",
      description:
        "At G.D. Goenka Aligarh, we celebrate a variety of cultural festivals with great enthusiasm. These events bring students together to learn about different traditions, foster creativity, and enjoy moments of joy through music, dance, and food.",
      image: FestivalImage, // Replace with actual image import
    },
    {
      id: 4,
      title: "Volleyball Tournament",
      description:
        "The Volleyball Tournament at GD Goenka Public School, Aligarh was a highly competitive event, showcasing the skills, teamwork, and determination of our students. The enthusiasm of the participants and the support from the audience made the event a grand success.",
      image: VolleyballImage, // Replace with actual image import
    },
    {
      id: 5,
      title: "Christmas Celebration",
      description:
        "At G.D. Goenka Aligarh, Christmas is celebrated with joy and warmth. Students engage in various festive activities, including carol singing, decorating the school, and exchanging gifts. The event fosters a sense of togetherness and spreads the spirit of kindness and giving.",
      image: ChristmasCelebrationImage, // Replace with actual image import
    },
    {
      id: 6,
      title: "Indoor Activities",
      description:
        "Our indoor activities provide a creative and engaging environment for students. From board games and art workshops to puzzle-solving and science experiments, these activities promote teamwork, critical thinking, and overall development, making learning fun and interactive.",
      image: IndoorActivityImage, // Replace with actual image import
    },
    {
      id: 7,
      title: "Diwali Celebration",
      description:
        "Diwali at G.D. Goenka Aligarh is a festival of lights, celebrated with zeal and enthusiasm. The students participate in rangoli making, diya decorating, and traditional dance performances, creating a vibrant atmosphere that fosters cultural understanding and joy.",
      image: DiwaliCelebrationImage, // Replace with actual image import
    },
    {
      id: 8,
      title: "Pooja Ceremony",
      description:
        "The Pooja ceremony at G.D. Goenka Aligarh is a significant event that brings the school community together in a spiritual celebration. Students, teachers, and parents join in to offer prayers, seek blessings, and celebrate the positive energy and harmony in the school.",
      image: PoojaCeremonyImage, // Replace with actual image import
    },
    {
      id: 9,
      title: "National Sports Day",
      description:
        "National Sports Day is celebrated at G.D. Goenka Aligarh to encourage physical fitness and sportsmanship. Students participate in various sports events and activities, highlighting the importance of teamwork, discipline, and healthy competition.",
      image: NationalSportsDayImage, // Replace with actual image import
    },
    {
      id: 10,
      title: "Rakshabandhan Celebration",
      description:
        "Rakshabandhan is a special celebration at G.D. Goenka Aligarh, where students honor the bond between siblings and express love and affection. The celebration includes the tying of rakhis, exchanging sweets, and creating memorable moments with friends and family.",
      image: Rakshabandhan, // Replace with actual image import
    },
    {
      id: 11,
      title: "School Trips",
      description:
        "Educational trips at G.D. Goenka Aligarh offer students the opportunity to explore new places, learn beyond the classroom, and build stronger bonds with their peers. These trips are designed to provide enriching experiences that complement academic learning and encourage curiosity.",
      image: Trips, // Replace with actual image import
    },
    {
      id: 12,
      title: "Badminton Playing",
      description:
        "Badminton is one of the popular indoor sports at G.D. Goenka Aligarh. With well-maintained courts and expert coaching, our students regularly participate in friendly matches and tournaments, developing their skills and teamwork.",
      image: BadmintonImage, // Replace with actual image import
    },
    {
      id: 13,
      title: "Outdoor Activities",
      description:
        "We encourage our students to engage in various outdoor activities such as nature walks, gardening, and adventure camps. These activities help students develop resilience, teamwork, and a deeper connection with nature.",
      image: OutdoorActivity, // Replace with actual image import
    },
    {
      id: 14,
      title: "Outdoor Games",
      description:
        "G.D. Goenka Aligarh offers a wide variety of outdoor games that help students stay active and energized. From relay races to obstacle courses, students enjoy these games, which promote teamwork, fitness, and leadership skills.",
      image: Outdoor, // Replace with actual image import
    },
    {
      id: 15,
      title: "Robotics",
      description:
        "Our Robotics program provides students with an exciting opportunity to explore STEM fields. By building and programming robots, students develop problem-solving, critical thinking, and teamwork skills, preparing them for future technological advancements.",
      image: Robotics, // Replace with actual image import
    },
    {
      id: 16,
      title: "Art and Craft",
      description:
        "The art and craft program at G.D. Goenka Aligarh fosters creativity and self-expression among students. Whether it's painting, sculpture, or craftwork, students are encouraged to explore different mediums and develop their artistic talents.",
      image: Art,
    },
    {
      id: 17,
      title: "Horse Riding",
      description:
        "Horse riding is a unique activity offered at G.D. Goenka Aligarh. Our equestrian program allows students to develop confidence, discipline, and a sense of responsibility while interacting with horses in a safe and nurturing environment.",
      image: HorseRiding,
    },
  ];

  return (
    <Layout>
      {/* Banner Section */}
      <motion.div
        className="relative h-[50vh] md:h-[60vh] lg:h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.img
          src={Banner}
          alt="Activities Banner"
          className="h-full w-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />

        <motion.h1
          className="absolute bottom-4 md:bottom-6 left-4 md:left-8 text-3xl md:text-5xl font-bold text-red-600 bg-white bg-opacity-80 px-4 py-2 rounded shadow-md"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          ACTIVITIES
        </motion.h1>
      </motion.div>

      <NavigationPages />

      <div className="px-4 py-12 md:py-20 bg-pattern">
        <h1 className="text-center text-3xl md:text-5xl font-bold text-blue-900 mb-6">
          Activities at G.D. Goenka Aligarh
        </h1>
        <p className="text-center mb-12 text-slate-600 max-w-7xl w-[90%] mx-auto">
          At G.D. Goenka Aligarh, we believe in nurturing not just academic
          excellence but also physical prowess and creativity. Our diverse range
          of activities is designed to inspire and challenge students, helping
          them develop lifelong passions and skills.
        </p>

        <div className="flex flex-wrap max-w-7xl w-full mx-auto items-center justify-center gap-8">
          {activitiesData.map((item) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[item.id - 1] = el)}
              className="relative group w-[340px] h-[320px] overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-full bg-blue-600 bg-opacity-90 text-white text-center p-3 transform translate-y-full transition-transform duration-500 group-hover:-translate-y-0">
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-white text-gray-800 text-center p-2 font-bold">
                {item.title}
              </div>
            </div>
          ))}
        </div>
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

export default Activities;
