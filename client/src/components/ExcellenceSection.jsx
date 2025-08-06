import React from "react";
import "../css/ExcellenceSection.css";

const ExcellenceSection = () => {
  return (
    <div className="bg-[#2a3c7e]  text-white py-10 font-polymath font-medium">
      {/* Middle Heading */}
      <h1 className="text-3xl  font-bold text-center mb-6 uppercase">
        30 Years of Excellence GD Goenka Group
      </h1>

      <div className="container  mx-auto px-4 flex flex-col justify-center md:flex-row md:items-stretch gap-4">
        {/* Left Scrollable Text Box */}
        <div className="md:w-1/2 max-w-[1280px] w-full bg-white text-blue-900 rounded-lg shadow-lg h-[26rem] flex flex-col items-center justify-center lg:w-2/5">
          <div className="w-5/6 overflow-y-scroll scrollable-content h-[20rem] pr-4">
            <h2 className="text-2xl font-bold mb-4">
              NEW FRONTIERS ... 30 YEARS OF EXCELLENCE! THE NEXT BIG THING!
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              In 30 years, GDGPS Aligarh has gained a firm foothold on the
              national arena with new expansions in infrastructure and a dynamic
              curriculum.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              The Goenkan odyssey has revolutionized the way education is
              perceived and given it a new meaning and direction.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              In a revamped version, the school incorporates 21st-century skills
              for a complete New Age learning process.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              With a redefinition, refinement, reimagining, and reinventing of
              our goals, the school has regained its iconic stature as a
              trendsetter in education.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              New frontiers of standards are evident here. All students become
              lifelong learners through efficient systems and processes to
              optimally realize their potential. An all-embracing new curriculum
              design meets the demands of the NEP with a stress on metacognitive
              awareness that facilitates the process of innovation and research.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              The interdisciplinary projects-based blended learning with a focus
              on a progressive pedagogy nurtures the emotional health and social
              awareness and responsibility of the students.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              A brand new, child-oriented environment, where classrooms are
              arranged for challenging play and learning choices for a range of
              developmental levels, has been redone with new design elements.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              All laboratories, dance, art, music studios, tab lab, virtual
              reality lab, sports facilities, playground, cafeteria, library,
              transport, and activity areas are revamped according to sterling
              standards. The aim being that students can explore, experience,
              enhance, and most importantly excel in and enjoy!!
            </p>
            <p className="text-lg leading-relaxed mb-4">
              The objective is not just to instruct but to inspire and instill a
              quest for new pursuits…. not to merely learn but to acquire
              emotional maturity and spiritual insights.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our aim is for children to be enlightened in mind, enriched in
              character, empowered to forge ahead, and encouraged beyond belief
              to be creative thinkers, world citizens, and responsible
              individuals.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Passion, potential, and purpose find a new direction at GDGPS
              ALIGARH.
            </p>
            <p className="text-lg leading-relaxed">
              A new generation of learners is learning to expand their horizons,
              spread their wings towards change and empathy, and empowerment.
              These trendsetters thus face life with finesse, elan, and
              equanimity!
            </p>
          </div>
        </div>

        {/* Right Video Section */}
        <div className="md:w-1/2 p-2 rounded-lg flex justify-center items-center h-[26rem]">
          <iframe
            className="w-full h-full rounded-md"
            src="https://www.youtube.com/embed/NOrwQv50ScU?si=ARn0x4EqPtDB6NGy"
            title="GD Goenka Group Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ExcellenceSection;
