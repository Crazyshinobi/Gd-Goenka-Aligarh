import React from "react";
import principal from "../assets/principal1.jpeg";
import icon from "../assets/prin_icon1.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import bg1 from "../assets/bg2.jpg";

function VisionSection() {
  return (
    <div className=" w-full font-polymath mx-auto px-4 py-12 sm:py-16 flex flex-col items-center bg-gradient-to-r  from-blue-50  to-blue-100 ">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-[1280px]">
        {/* Principal Section */}
        <motion.div
          className="w-full lg:w-[50%]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
            <div className="relative">
              <motion.img
                src={principal}
                alt="Principal"
                className="w-full sm:w-4/5 mx-auto h-auto border border-gray-200 rounded-lg"
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />
              <img
                src={icon}
                alt="icon"
                className="absolute bottom-2 left-4 w-16 sm:w-20 lg:w-24"
              />
            </div>
            <div className="text-center p-6">
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#003963] mb-2">
                Principal's Message
              </h2>
              <p className="text-red-500 font-medium mb-4">Dr. Anubhav Lodhi</p>
              <p className="text-[#666666] text-base sm:text-lg mb-6 leading-relaxed font-polymath">
                GD Goenka Public School provides every student with the
                opportunity to achieve their best in academics, sports, and
                personal development, shaping a bright future.
              </p>
              <div className="flex justify-end">
                <NavLink to={"/about/principal-message"}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <IoIosArrowRoundForward className="text-5xl lg:text-6xl text-gray-800 cursor-pointer transition-transform" />
                  </motion.div>
                </NavLink>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vision and Mission */}
        <div className="w-full lg:w-[30%] space-y-8">
          {["Vision", "Mission"].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg shadow-lg bg-[#2a3c7e] hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {item}
              </h2>
              <p className="text-white text-lg mb-6">
                {item === "Vision"
                  ? "To create an inspiring environment that fosters creativity, curiosity, and growth, where learning becomes a journey of limitless possibilities."
                  : "GD Goenka Aligarh empowers students with knowledge, skills, and leadership to thrive in a dynamic world and meet future challenges with confidence."}
              </p>
              <div className="flex justify-end">
                <NavLink to={"/about/vision-and-mission"}>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IoIosArrowRoundForward className="text-4xl sm:text-5xl lg:text-6xl text-white cursor-pointer" />
                  </motion.div>
                </NavLink>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Term Section */}
        <motion.div
          className="w-full lg:w-[35%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="bg-[#707070] text-4xl text-white p-6 text-center">
              Notifications
            </div>
            <div className=" p-2 font-bold text-red-600 hover:underline mx-auto text-center text-lg ">
              <a
                href="/pdfs/AnnualExamDateSheet24-25.pdf#toolbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Annual Exam Date Sheet 2024-25
              </a>
            </div>

            <div className="px-6 space-y-4 text-[#212529] text-lg flex flex-col">
              <NavLink to="/activities" className="text-[#2a3c7e] hover:underline"> 
                Teej Celebration - Gd Goenka
              </NavLink>
              <NavLink to="/activities" className="text-[#2a3c7e] hover:underline">
                Guru Purnima - Gd Goenka
              </NavLink>
            </div>
 

            <div className="px-6 py-4 space-y-4 text-[#2a3c7e] ">
              {[
                {
                  title: "Pocso Committee - Gd Goenka",
                  pdfLink: "/pdfs/Pocso-Committee-of-GD-Goenka.pdf",
                },
                {
                  title: "Harassment Committee - GD Goenka",
                  pdfLink: "/pdfs/Sexual-Harassment-Committee-GDGOENKA.pdf",
                },
                {
                  title: "School Timing Notice - GD Goenka",
                  pdfLink: "/pdfs/Notice-school-timing.pdf",
                },

                {
                  title: "Online Fee Payment Notice - GD Goenka",
                  pdfLink: "/pdfs/Notice-for-online-payment.pdf",
                },
                {
                  title: "School Operation Committee Notice - GD Goenka",
                  pdfLink: "/pdfs/School-Operations-Committee-2025-26.pdf",
                },
                {
                  title: "Christmas Day Celebration - GD Goenka",
                  pdfLink: "/pdfs/Christmas-Celebration.pdf",
                },
                {
                  title: "Diwali Celebration - GD Goenka",
                  pdfLink: "/pdfs/Diwali-Celebration.pdf",
                },
               
              ].map((event, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  <a
                    href={`${event.pdfLink}#toolbar=0`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2a3c7e]  hover:underline"
                  >
                    {event.title}
                  </a>
                  {event.newtitle}
                </p>
              ))}
            </div>
          </div>
          <div className="text-center mt-4">
            <NavLink
              to={"/academics/goenkan-pursuits"}
              className="text-blue-500 hover:underline"
            >
              Read more
            </NavLink>
          </div>
        </motion.div>
      </div>

      {/* Inspirational Message */}
      <motion.div
        className="mt-12 lg:mt-16 italic text-[#666666] text-xl sm:text-2xl lg:text-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p>
          We believe in unlocking each individual's full potential. Education is
          the foundation that shapes young minds, empowering them to grow,
          innovate, and succeed.
        </p>
      </motion.div>
    </div>
  );
}

export default VisionSection;
