import React, { useEffect } from "react";
import { Layout } from "../components/Layout";
import NavigationPages from "./NavigationPages";
import IgnitingBanner from "../assets/IgnitingMindsBanner.jpg";
import IgnitingMinds from "../assets/IgnitingMinds.jpg";
import IgnitingMinds1 from "../assets/IgnitingMinds1.JPG";
import Carousel from "react-multi-carousel";

const IgnitingMindsPage = () => {
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
          src={IgnitingBanner}
          alt="Teaching Methodology"
          className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[65vh] w-full object-fill"
        />
      </div>

      {/* Navigation Section */}
      <NavigationPages />

      <div className="principalMessageSection px-4 py-8 md:py-12">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-blue-900 mb-6">
          Igniting Minds
        </h1>

        <section className="container mx-auto max-w-7xl py-12 flex flex-col lg:flex-row items-center justify-center">
          {/* Left Content */}
          <div className="w-[90%] md:w-[80%] lg:w-[45%] bg-gray-100 text-gray-800 rounded-l shadow-lg p-8 h-[26rem] flex items-center">
            <div className="w-full h-[20rem] overflow-y-scroll pr-4 scrollable-content">
              <p className="text-lg leading-relaxed mb-4">
                A constant touch with real life challenges is the biggest
                advantage we have at Goenkas! Interactive and dynamic
                Exhibitions are planned throughout the year to involve children,
                teachers and parents.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                The Annual Art and Craft event is a show case of the talent and
                creativity of the child as an exploration of the myriad aspects
                of Art.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                The Science Exhibition focuses on any relevant and urgent theme
                and is an exploration of ideas through working models, charts,
                displays, presentations and dazzling robotics.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                All students get to participate alternately in Computer,
                Mathematics and Social Science and Languages exhibitions.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <b>'Explorica'</b> and <b>'Igniting Minds'</b> are unique opportunities of
                dance, drama, cultural displays, game stalls, bill boards and
                artistic modules where students present an idea, a theme or a
                social message.
              </p>
              <p className="text-lg leading-relaxed">
                The School gives this platform that inspires a new league of
                thinkers to bloom and blossom.
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
                src={IgnitingMinds}
                alt="Igniting Minds"
                className="w-full h-[27rem] object-cover"
              />
              <img
                src={IgnitingMinds1}
                alt="Igniting Minds"
                className="w-full h-[27rem] object-cover"
              />
            </Carousel>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IgnitingMindsPage;