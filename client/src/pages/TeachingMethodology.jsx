import React, { useEffect } from "react";
import TeachingBanner from "../assets/Teaching.jpg";
import { Layout } from "../components/Layout";
import NavigationPages from "./NavigationPages";
import Student1 from "../assets/Student1.JPG";
import Student2 from "../assets/Student2.JPG";
import Carousel from "react-multi-carousel";

const TeachingMethodology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };
  return (
    <Layout>
      {/* Banner Section */}
      <div className="relative bgImage">
        <h1 className="text-3xl md:text-5xl font-bold absolute bottom-4 md:bottom-6 left-4 md:left-8 text-[#e1b671]">
          ACADEMICS
        </h1>
        <img
          src={TeachingBanner}
          alt="Teaching Methodology"
          className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[65vh] w-full object-fill"
        />
      </div>

      {/* Navigation Section */}
      <NavigationPages />

      <div className="principalMessageSection px-4 py-8 md:py-12">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-blue-900 mb-6">
          Teaching Methodology
        </h1>

        <section className="container mx-auto max-w-7xl py-12 flex flex-col lg:flex-row items-center justify-center">
          {/* Left Content */}
          <div className="w-[90%] md:w-[80%] lg:w-[45%] bg-gray-100 text-gray-800 rounded-l shadow-lg p-8 h-[26rem] flex items-center">
            <div className="w-full h-[20rem] overflow-y-scroll pr-4 scrollable-content">
              <p className="text-lg leading-relaxed mb-4">
                GDGPSVK aims at nurturing individuals with paramount values and
                multivalent competencies. As we continue our vision, a dynamic
                new curriculum developed by an accomplished team ensures not
                only academic excellence with pedagogical discipline but an
                entirely new approach to education. The best practices of
                interactive and creative shift in learning and teaching are
                reinvented for progressive engagement of the students. The
                inclusion of a digital, online matrix, technology and AI aided
                tools, holistic sensitivity and a re-alignment of strategies
                gives the school an edge over others.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                An upgraded and advanced school ethos with mentorship that is
                innovative has provided an activity based, blended learning
                experience at its core.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                New frontiers of standards are evident here. All students become
                lifelong learners through efficient systems and processes to
                optimally realize their potential. An all-embracing new
                curriculum design meets the demands of the NEP with a stress on
                meta cognitive awareness that facilitates the process of
                Innovation and research.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                The inter disciplinary projects based blended learning with
                focus on a progressive pedagogy, nurtures the emotional health
                and social awareness and responsibility of the students.
              </p>
              <p className="text-lg leading-relaxed ">
                A brand new, child-oriented environment, where classrooms are
                arranged for challenging play and learning choices for a range
                of developmental levels has been redone with new design
                elements.
              </p>
            </div>
          </div>

          {/* Right Slider */}
          <div className="w-[90%] lg:w-[45%] md:w-[80%] cursor-grab overflow-hidden shadow-lg">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              showDots={true}
              arrows={false}
            >
              <img
                src={Student1}
                alt="Students"
                className="w-full h-[27rem] object-cover"
              />
              <img
                src={Student2}
                alt="Students"
                className="w-full h-[27rem] object-cover"
              />
            </Carousel>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TeachingMethodology;