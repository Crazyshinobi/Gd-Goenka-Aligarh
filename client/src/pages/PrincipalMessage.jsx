import React, { useEffect } from "react";
import { Layout } from "../components/Layout";
import NavigationPages from "./NavigationPages";
import School from "../assets/School.jpg";
import PrincipalPhoto from '../assets/Principal.jpeg'

const PrincipalMessage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Banner Section */}
      <div className="relative bgImage">
        <h1 className="text-3xl md:text-5xl font-bold absolute bottom-4 md:bottom-6 left-4 md:left-8 text-[#e1b671]">
          ABOUT
        </h1>
        <img
          src={School}
          alt="GD Goenka School"
          className="h-[50vh] md:h-[40vh] lg:h-[80vh] w-full  object-fill"
        />
      </div>

      {/* Navigation Section */}
      <NavigationPages />

      {/* Principal's Message Section */}
      <div className="principalMessageSection px-4 py-8 md:py-12">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-blue-900 mb-6">
          Principal's Message
        </h1>

        <section className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden">
          {/* Photo Section */}
          <div className="w-full md:w-1/3 flex justify-center items-center p-4">
            <img
              src={PrincipalPhoto}
              alt="Dr. Anubhav Lodhi"
              className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] object-cover rounded-full shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-2/3 p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 mb-2">
              Dr. ANUBHAV LODHI
            </h2>
            <p className="italic text-gray-500 mb-4 text-sm sm:text-base">
              - Principal | M.Com, LLB, B.Ed, Ph.D
            </p>

            {/* Paragraphs */}
            <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
              With an illustrious academic background and a passion for
              education, Dr. Anubhav Lodhi has dedicated his life to shaping the
              future of students. His qualifications, including M.Com, LLB,
              B.Ed, and Ph.D., reflect his commitment to excellence and deep
              knowledge in diverse fields.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
              Dr. Lodhi brings years of experience in education, administration,
              and leadership. His vision for GD Goenka Public School, Aligarh,
              focuses on holistic development, combining academic excellence
              with personal growth and character building.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
              He firmly believes in providing a nurturing and inclusive learning
              environment where students are encouraged to discover their
              potential, develop critical thinking skills, and become responsible
              global citizens.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Under his leadership, GD Goenka Public School continues to set new
              benchmarks in education, innovation, and student well-being. His
              guidance ensures that every child receives the tools they need to
              thrive in an ever-changing world.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PrincipalMessage;
