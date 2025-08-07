import React from "react";
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import NavigationPages from "./NavigationPages";
import classInfraBanner from "../assets/classInfraBanner.JPG";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import computerLab from "../assets/Lab2.jpg";
import LibraryImg from "../assets/Library.jpg";
import { Helmet } from "react-helmet";

const ClassInfrastructure = () => {
  document.title = 'Class Infrastructure - GDGPS Aligarh';

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const sections = [
    {
      title: "Classrooms",
      content: [
        "Our unique and creatively designed classrooms with plush interiors offer child-friendly spaces, as well as focus on learning stations, for smooth interactive study. The infrastructure ensures areas of expressions, problem-solving, innovation, activity, as well as faster and more effective learning.",
        "Each state-of-the-art room is resplendent with natural light and is soundproof, augmented with highly safe and sanitized furnishings and facilities. The rooms have flexible seating, are smart board equipped, computer and tab aided, and have the comfort of a central temperature control unit.",
        "The Wi-Fi enabled campus reflects supremely effective fusion elements of traditional school structure with a refurnished advanced look. Needless to say, the vigilance and security are excellently monitored in making the classrooms and school corridors aesthetically pleasing and well-planned learning spaces.",
      ],
      images: [classInfraBanner, classInfraBanner],
    },
    {
      title: "Smart Classes",
      content: [
        "Our smart classes are equipped with cutting-edge technology to enhance the learning experience. Interactive whiteboards, projectors, and tablets are integrated seamlessly into the classroom environment.",
        "Teachers utilize multimedia resources, educational software, and online platforms to create engaging and interactive lessons. This technology-driven approach allows for real-time collaboration, instant feedback, and personalized learning experiences.",
        "Students benefit from access to a wealth of digital resources, virtual simulations, and interactive exercises that cater to different learning styles and paces.",
      ],
      images: [classInfraBanner, classInfraBanner],
    },
    {
      title: "Science Labs",
      content: [
        "Our state-of-the-art science labs provide students with hands-on learning experiences in physics, chemistry, and biology. Each lab is equipped with modern apparatus and safety equipment to ensure a secure environment for experimentation and discovery.",
        "Students engage in practical experiments, developing critical thinking skills and a deeper understanding of scientific concepts. The labs feature workstations designed for both individual and group projects, fostering collaboration and teamwork.",
        "Advanced equipment such as digital microscopes, spectrophotometers, and data loggers allow students to conduct sophisticated experiments and analyze results with precision.",
      ],
      images: [classInfraBanner, classInfraBanner],
    },
    {
      title: "Computer Labs",
      content: [
        "Our computer labs are designed to nurture digital literacy and computational thinking skills. Equipped with the latest hardware and software, these labs provide students with a cutting-edge learning environment.",
        "From basic programming to advanced web development and artificial intelligence, our computer labs cater to various skill levels and interests. Students have access to high-speed internet, allowing them to explore online resources and collaborate on global projects.",
        "Regular workshops and coding bootcamps are organized to keep students updated with the latest trends in technology and prepare them for the digital future.",
      ],
      images: [computerLab, computerLab],
    },
    {
      title: "Library",
      content: [
        "Our library is a haven for knowledge seekers, featuring an extensive collection of books, periodicals, and digital resources. The spacious and well-lit environment encourages reading, research, and quiet study.",
        "The library is equipped with computer stations for digital research and access to online databases. Comfortable reading nooks and group study areas cater to different learning preferences and collaborative projects.",
        "Regular events such as book clubs, author visits, and reading challenges foster a love for literature and lifelong learning among our students.",
      ],
      images: [LibraryImg, LibraryImg],
    },
   
  ];

  return (
    <Layout>
      <Helmet>
  <title>Class Infrastructure - GD Goenka Public School Aligarh</title>
  <meta name="description" content="Discover world-class classroom infrastructure and facilities offered at GD Goenka Public School Aligarh." />
</Helmet>

      {/* Banner Section with Framer Motion */}
      <motion.div
        className="relative h-[35vh] md:h-[60vh] lg:h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.img
          src={classInfraBanner}
          alt="Class Infrastructure"
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

      {/* Content Section with Framer Motion */}
      <motion.div
        className="relative bg-gradient-to-b from-gray-50 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="px-4 py-8 md:px-6 md:py-12">
          <motion.h1
            className="text-center text-2xl md:text-4xl font-bold text-[#2a3c7e] mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Class Infrastructure
          </motion.h1>

          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              className="container mx-auto max-w-screen-lg py-12 flex flex-col lg:flex-row items-center justify-center gap-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Left Content with Glass Effect */}
              <motion.div
                className="w-full lg:w-[45%] bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 relative z-10"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#2a3c7e] mb-6">{section.title}</h2>
                <div className="h-[26rem] overflow-y-auto pr-4 scrollable-content">
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {section.content.map((text, idx) => (
                      <motion.p
                        key={idx}
                        className="text-lg leading-relaxed text-gray-700"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                      >
                        {text}
                      </motion.p>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Slider with Framer Motion */}
              <motion.div
                className="w-full lg:w-[45%] overflow-hidden rounded-xl shadow-xl relative z-10"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {/* Glass morphism effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl z-0" />

                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={5000}
                  showDots={false}
                  arrows={false}
                  className="cursor-grab active:cursor-grabbing"
                >
                  {section.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      className="relative h-[27rem]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <img
                        src={img}
                        alt={`${section.title} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </motion.div>
                  ))}
                </Carousel>
              </motion.div>
            </motion.section>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default ClassInfrastructure;

