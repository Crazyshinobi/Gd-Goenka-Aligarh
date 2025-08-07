import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner1 from "../assets/beyond-banner.jpeg";
import Banner2 from "../assets/beyond-banner2.JPG";
import { Layout } from "../components/Layout";
import Carousel from "react-multi-carousel";
import NavigationPages from "./NavigationPages";
import OutdoorActivity from "../assets/OutdoorActivity.jpg";
import Sports from "../assets/Reel.JPG";
import music from "../assets/music.jpg";
import MusicAndDance from "../assets/MusicAndDance.jpg";
import Art from "../assets/Art.jpg";
import Art2 from "../assets/Reel1.JPG";
import FestivalImage1 from "../assets/Festival.JPG";
import FestivalImage2 from "../assets/Festival2.JPG";
import plantation1 from "../assets/plantation1.jpeg";
import plantation2 from "../assets/plantation2.jpeg";
import { Helmet } from "react-helmet";

gsap.registerPlugin(ScrollTrigger);

const BeyondAcademics = () => {
  const bannerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Enhanced parallax effect for banner
    gsap.to(bannerRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Enhanced section animations
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Background animation for sections
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section.querySelector(".bg-gradient"),
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const contentSections = [
    {
      title: "Outdoor Activities & Ground Sports",
      images: [OutdoorActivity, Sports],
      content: `At G. D. Goenka Public School, we believe that outdoor activities and ground sports play a crucial role in the overall development of students. These activities help in building physical strength, teamwork, discipline, and mental resilience. We aim to create a dynamic environment where students can enjoy the benefits of physical exercise while fostering their love for sports.

Every student is encouraged to engage in outdoor activities of their choice, promoting healthy competition and a spirit of camaraderie. We offer a wide range of ground sports that cater to different interests, ensuring that each student can discover and excel in their preferred game.

Our sports curriculum is designed to nurture athleticism and teamwork. From football to athletics, cricket to rugby, and more, students are encouraged to participate in various sports, building both physical stamina and sportsmanship.`,
    },
    {
      title: "Music & Dance",
      images: [music, MusicAndDance],
      content: `Schooling at G. D. Goenka Public School goes beyond the classrooms into the wider creative world outside. Apart from a keen focus on academics, various creative activities are taught that engage the mental and intellectual faculties of our students. Indian and Western Music, both vocal and instrumental are offered to our students.

Both Indian and western dance is taught to our school students. Classical Indian dance is taught and students enjoy the varied foot positions and hand gestures associated with our classical dance styles. Periodic presentations and special assemblies to celebrate festivals showcase dance presentations on a particular theme.

Students gain valuable knowledge through this process of creative learning and also become deeply sensitive to our rich traditions and heritage. Their young bodies become supple and their minds become more alert and active, through the process of memorizing and learning the choreographed steps.`,
    },
    {
      id: "art",
      title: "Art & Robotics",
      images: [Art, Art2],
      content: `Art is important for the development of individual and societies. Art enables individuals to imagine novel, productive, and fulfilling solutions to the challenges humanity faces. If you pause reading this and take a look around, what you notice is not the structures, but pieces of art - whether they are pictures, paintings, crafts, decorative items, or an aesthetically made piece of furniture.

The benefits of art education do not stop in the classroom or at the school. Art not only develops students, but also helps them to become better employees and entrepreneurs. Not other example illustrates this better than Apple, whose founder Steve Jobs created the organization, not to make technical products, but to create pieces of art that people around the world can admire, appreciate, and adopt to improve their daily lives.`,
    },
    {
      title: "Annual School Festival",
      images: [FestivalImage1, FestivalImage2], // Replace with actual image imports
      content: `The Annual School Festival at G. D. Goenka Public School is a grand celebration that brings together students, teachers, and parents for a day full of excitement, creativity, and joy. This festival provides an opportunity for students to showcase their talents, participate in cultural performances, and enjoy a wide array of fun-filled activities.
    
    Every year, the festival features a vibrant mix of performances, ranging from music and dance to drama and art exhibitions. Our students actively participate in organizing and performing, demonstrating their creativity and teamwork. It's a chance for them to explore their artistic talents, build confidence, and develop leadership skills.
    
    In addition to the performances, the festival also includes sports competitions, food stalls, games, and interactive workshops. It’s an occasion where students can bond with peers, parents, and teachers, making it a memorable experience for everyone involved. The Annual School Festival is not only a celebration of talent and creativity but also a testament to the spirit of unity and collaboration at G. D. Goenka Public School.`,
    },
    {
      title: "Annual Plantation Drive",
      images: [plantation1, plantation2], // Replace with actual image imports
      content: `The Annual Plantation Drive at G. D. Goenka Public School is an inspiring event aimed at promoting environmental awareness and sustainability. This initiative brings together students, teachers, and parents to plant trees, enhance green spaces, and contribute to preserving nature for future generations.
    
    Every year, the plantation drive witnesses enthusiastic participation from our school community. Students play an active role in planting saplings, learning about various types of plants, and the importance of greenery in maintaining ecological balance. The drive not only promotes environmental conservation but also educates the participants about the need to protect and nurture our planet.
    
    In addition to the tree planting, the event includes informative sessions on sustainability, composting, and other green practices. It’s an opportunity for students to take on responsibility, work together in teams, and make a lasting impact on their surroundings. The Annual Plantation Drive is more than just an event; it’s a chance to reinforce the values of environmental stewardship and inspire students to adopt eco-friendly practices in their daily lives.`,
    },
  ];

  return (
    <Layout>
      <Helmet>
  <title>Beyond Academics - GD Goenka Public School Aligarh</title>
  <meta name="description" content="Explore co-curricular activities beyond academics including sports, arts, and leadership development at GD Goenka Aligarh." />
</Helmet>

      {/* Enhanced Banner Section with Overlay */}
      <div
        className="relative bgImage w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[65vh] overflow-hidden"
        ref={bannerRef}
      >
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          showDots={false}
          arrows={false}
          className="w-full"
          customTransition="transform 800ms ease-in-out"
        >
          {[Banner1, Banner2].map((banner, index) => (
            <motion.div
              key={index}
              className="relative h-full"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
            >
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[65vh] w-full object-cover"
              />
            </motion.div>
          ))}
        </Carousel>
        <motion.h1
          className="absolute bottom-4 md:bottom-6 left-4 md:left-8 text-2xl lg:text-5xl md:text-5xl font-bold text-[#2a3c7e] bg-white bg-opacity-80 px-4 py-2 rounded shadow-md"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          BEYOND ACADEMICS
        </motion.h1>
      </div>

      <NavigationPages />

      {/* Main content with enhanced background effects */}
      <motion.div
        className="relative min-h-screen font-polymath"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative px-4 sm:px-6 md:px-8 py-8 md:py-12">
          <motion.h1
            className="text-center text-xl sm:text-2xl md:text-4xl font-bold text-[#2a3c7e] mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Beyond Academics
          </motion.h1>

          {contentSections.map((section, index) => (
            <motion.section
              key={index}
              ref={(el) => (sectionsRef.current[index] = el)}
              className={`relative container mx-auto max-w-full sm:max-w-[90%] py-8 md:py-16 flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-12 overflow-hidden`}
            >
              {/* Animated background gradient */}
              <div
                className="bg-gradient absolute inset-0 rounded-3xl opacity-75"
                style={{
                  background:
                    index % 2 === 0
                      ? "linear-gradient(135deg, rgba(219,234,254,0.4) 0%, rgba(255,255,255,0.1) 100%)"
                      : "linear-gradient(225deg, rgba(219,234,254,0.4) 0%, rgba(255,255,255,0.1) 100%)",
                }}
              />

              <motion.div
                className="w-full lg:w-[45%] bg-white/80  rounded-xl shadow-xl p-4 sm:p-6 md:p-8 h-auto relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.h2
                    className="text-2xl sm:text-3xl font-bold text-[#2a3c7e] mb-4 sm:mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {section.title}
                  </motion.h2>
                  <motion.div
                    className="prose prose-sm sm:prose-base lg:prose-lg text-gray-600 max-w-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    {section.content.split("\n\n").map((paragraph, i) => (
                      <p key={i} className="mb-4 relative">
                        <motion.span
                          className="block"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                          {paragraph}
                        </motion.span>
                      </p>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                className="w-full lg:w-[45%] overflow-hidden rounded-xl shadow-xl relative z-10 mt-6 lg:mt-0"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
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
                  customTransition="transform 800ms ease-in-out"
                >
                  <AnimatePresence mode="sync">
                    {section.images.map((img, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        className="relative h-[27rem]"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      >
                        <img
                          src={img}
                          alt={`${section.title} ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {/* Gradient overlay for images */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </Carousel>
              </motion.div>
            </motion.section>
          ))}
        </div>
      </motion.div>

      {/* Footer gradient */}
      <div className="h-32 bg-gradient-to-t from-blue-50 to-transparent" />
    </Layout>
  );
};

export default BeyondAcademics;
