import React, { useEffect } from "react";
import { Layout } from "../components/Layout";
import NavigationPages from "./NavigationPages";
import AwardBanner from "../assets/Awards.jpg";
import Student2 from "../assets/Student2.JPG";
import Carousel from "react-multi-carousel";

const CompetitionAwards = () => {
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
          src={AwardBanner}
          alt="Competition Awards"
          className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[65vh] w-full object-fill"
        />
      </div>

      {/* Navigation Section */}
      <NavigationPages />

      {/* FIRST SECTION */}
      <div className="principalMessageSection px-4 py-8 md:py-12">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-blue-900 mb-6">
          Competition & Awards
        </h1>

        <section className="container mx-auto max-w-7xl py-12 flex flex-col lg:flex-row items-center justify-center">
          {/* Left Content */}
          <div className="w-[90%] md:w-[80%] lg:w-[45%] bg-gray-100 text-gray-800 rounded-l shadow-lg p-8 h-[26rem] flex items-center">
            <div className="w-full h-[20rem] overflow-y-scroll pr-4 scrollable-content">
              <p className="text-lg leading-relaxed mb-4">
                To celebrate and glorify excellence in Academic performance, the
                scholastic excellence awards are conferred upon students who
                have demonstrated a high level of academic performance over a
                period of two to three years at various levels. The criteria for
                achieving this honour is communicated to the students so as to
                encourage and motivate them to attain and maintain a high level
                of scholastic performance. The students are presented the award
                in the form of a trophy and a certificate in a special ceremony
                attended by proud parents. A presentation is specially prepared
                to extol each student's achievements in academic as well as
                co-curricular activities.
              </p>
              <p className="text-lg leading-relaxed ">
                To add to the student's exaltation, 'Scholastic Excellence' and
                stars are embroidered on their blazers. Just like medallions,
                the stars accumulate every time a student wins the award. It is
                a matter of great pride for a student to have 3 stars
                embroidered on their blazers.
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
              showDots={false}
              arrows={false}
            >
              <img
                src={Student2}
                alt="Students"
                className="w-full h-[27rem] object-cover"
              />
            </Carousel>
          </div>
        </section>
      </div>

      {/* CARDS */}
      <section className="container mx-auto bg-slate-200 py-14 flex justify-center">
        <div className="w-full max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div className="bg-white shadow-2xl overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Roll of Honour
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                With an aim to provide impetus and motivation to the academic
                progress of the students, the Roll of Honour celebrates
                excellence and success. The recognition of brilliance, aptitude,
                interest, diligence and enterprise culminates in the form of
                being included in this glorious Goenkan tradition.
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white shadow-2xl overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Certificate of Appreciation
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Scholastic performance and calibre is encouraged as a form of
                active participation. All contributions to academia are
                applauded and every effort is marked with a sense of self-worth
                and pride. All students are recognised for their enhanced
                performance as life long learners.
              </p>
              
            </div>
          </div>
        </div>
      </section>

       {/* Achievements Section */}
       <section className="container mx-auto bg-blue-900 text-white py-12">
        <div className="max-w-[1280px] w-[90%]  mx-auto space-y-8">
          <p className="text-xl leading-relaxed">
            Our school has gained a firm foothold on the National arena with new expansions in higher education and unprecedented success in placements in prestigious institutions, our journey has been an eventful one.
          </p>
          <p className="text-xl leading-relaxed">
            Our constant aim to excel in academics forums and National level examinations is evident in various endeavours that we explore to enhance the Global talent pool.
          </p>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Every year the students of G.D.Goenka display their talent in</h3>
            <ul className="space-y-4 ">
              <li className="flex items-start gap-2 ">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-300" />
                <span>Maths, Science, English and Cyber Olympiad (classes III- XII)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-300" />
                <span>National Talent Search Examination (N.T.S.E for class X)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-300" />
                <span>Junior Science Talent Search Examination (J.S.T.S for class IX)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-300" />
                <span>ARYABHATTA (Interschool Maths examination class VIII)</span>
              </li>
            </ul>
          </div>
          <p className="text-xl leading-relaxed">
            Time to time students have won good scores and received certificates of appreciation. N.T.S.E is a national-level scholarship program to identify and recognize students with high intellect and academic talent. Participating and preparing for exams like, NTSE, JSTSE, NSO, IMO, NCO and IEO helps in development of student's IQ, logical and analytical thinking from very young age which helps in later stage when they prepare for JEE, NEET and other competitive exams.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default CompetitionAwards;
