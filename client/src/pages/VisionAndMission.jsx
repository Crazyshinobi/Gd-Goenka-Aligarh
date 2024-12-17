import React, { useEffect } from "react";
import { Layout } from "../components/Layout";
import NavigationPages from "./NavigationPages";
import Bannerbg from "../assets/visionBanner.jpg";
import vision from "../assets/vision.jpg";
import mission from "../assets/mission.jpg";

const VisionAndMission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Banner Section */}
      <div className="relative">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold absolute bottom-4 left-4 sm:bottom-6 sm:left-8 text-[#e1b671] z-10">
          ABOUT
        </h1>
        <img
          src={Bannerbg}
          alt="Vision And Mission"
          className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] w-full object-cover"
        />
      </div>

      {/* Navigation Section */}
      <NavigationPages />

      <div className="space-y-12 sm:space-y-16 md:space-y-20 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        {/* Vision Section */}
        <section className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center">
            {/* Right Image - Small screens: Above, Medium and larger: Right */}
            <div className="relative order-1 md:order-2 mt-8 md:mt-0">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={vision} // Replace with your image source
                  alt="Vision"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Left Content */}
            <div className="relative order-2 md:order-1">
              <div className="absolute -z-10 top-0 left-0 text-gray-100 text-[80px] sm:text-[100px] md:text-[120px] lg:text-[180px] font-bold leading-none opacity-50">
                VISION
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-4 sm:mb-6">
                  VISION
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-6">
                  In our vision for the school, each and every student should
                  develop and mould their ambitions towards perfection.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  The goal is to support and nurture the student's and our own
                  natural desire to be lifelong learners. We anticipate
                  creativity and initiative, enterprise and innovation, and
                  cognitive strategies for progressive learning. Our vision is
                  to prepare and motivate our students for a rapidly changing
                  world, by instilling in them critical thinking skills, a
                  global perspective and a respect for core values of honesty,
                  loyalty, perseverance and compassion. Students will have
                  success for today and be prepared for tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 items-center">
            {/* Left Image */}
            <div className="relative order-1 md:order-1 mt-8 md:mt-0">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img src={mission} alt="Mission" className="w-full h-auto" />
              </div>
            </div>

            {/* Right Content */}
            <div className="relative order-2 md:order-2 ">
              <div className="absolute -z-10 top-0 lg:-left-48 left-0 md:-left-40 text-gray-100 text-[80px] sm:text-[100px] md:text-[120px] lg:text-[180px] font-bold leading-none opacity-50">
                MISSION
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-4 sm:mb-6">
                  MISSION
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-6">
                  The school motto{" "}
                  <span className="text-red-600 font-semibold">
                    HIGHER STRONGER BRIGHTER
                  </span>{" "}
                  takes its core idea from a quest for excellence, an insatiable
                  thirst for knowledge and a limitless craving for the latest.
                </p>
                <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <p>
                    Our school aspires to be a national leader in developing
                    educated contributors, career ready learners and global
                    citizens, and in generating a meaningful, high impact,
                    progressive and sustainable partnership with society.
                  </p>
                  <p>
                    Our mission is to provide a safe haven where everyone is
                    valued and respected. The faculty, in partnership with
                    parents and families are fully committed to student's
                    college and career readiness. Students are empowered to meet
                    current and future challenges to develop social awareness,
                    civic responsibility and personal growth.
                  </p>
                  <p>
                    We are dedicated to a 26-year-old continuing tradition of
                    excellence in an ever-changing world. Within a revamped and
                    renewed and supportive environment, we provide a relevant,
                    high quality education and prepare our diverse student body
                    for future endeavours. Our priority is for engagement and
                    involvement in a dynamic new matrix.
                  </p>
                  <p>
                    We honour achievement and promote pride in ourselves, in our
                    school and our country.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default VisionAndMission;
