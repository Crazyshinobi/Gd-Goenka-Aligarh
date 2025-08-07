import React from "react";
import { Layout } from "../components/Layout";
import NavigationPages from "./NavigationPages";
import { motion } from "framer-motion";
import School from "../assets/School.jpg";
import PrincipalPhoto from "../assets/principal1.jpeg";
import bg1 from "../assets/bg2.jpg";
import { Helmet } from "react-helmet";

const PrincipalMessage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Principal's Message - GD Goenka Public School Aligarh</title>
        <meta
          name="description"
          content="A message from the Principal of GD Goenka Public School Aligarh emphasizing vision, goals, and student growth."
        />
      </Helmet>

      {/* Banner Section */}
      <div className="relative bgImage">
        <motion.img
          src={School}
          alt="GD Goenka School"
          className="h-[35vh] md:h-[40vh] lg:h-[60vh] w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="absolute bottom-4 shadow-md md:bottom-6 left-4 md:left-8 text-3xl md:text-5xl font-bold text-[#003963] bg-white bg-opacity-80 px-4 py-2 rounded"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ABOUT
        </motion.h1>
      </div>

      {/* Navigation Section */}
      <NavigationPages />

      {/* Principal's Message Section */}
      <motion.div
        className="principalMessageSection px-4 py-8 md:py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <motion.h1
          className="text-center text-2xl md:text-4xl font-bold text-[#bea05a] mb-6"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Principal's Message
        </motion.h1>

        {/* Card Section */}
        <motion.section
          className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Photo Section */}
          <motion.div
            className="w-full flex justify-center items-center p-4 bg-gray-200"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.img
              src={PrincipalPhoto}
              alt="Dr. Anubhav Lodhi"
              className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] object-cover rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="w-full p-4 sm:p-6 md:p-8 font-polymath font-normal"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-[#003963] mb-2 text-center"
              whileHover={{ color: "#003963" }}
            >
              Dr. ANUBHAV LODHI
            </motion.h2>
            <p className="italic text-gray-500 mb-4 text-sm sm:text-base text-center font-polymath">
              - Principal | M.Com, LLB, B.Ed, Ph.D
            </p>

            <motion.p
              className="text-black  leading-relaxed mb-4 text-sm sm:text-base font-polymath italic font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              "Learning gives creativity, creativity leads to thinking, thinking
              provides knowledge, and knowledge makes you great."
              <br />- Dr. A.P.J. Abdul Kalam
            </motion.p>
            <motion.p
              className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              It is my great pleasure to welcome you all to G.D. Goenka Public
              School, Aligarh. We are fortunate that the G.D. Goenka Group has
              established another branch in our district, dedicated to nurturing
              future citizens. I am truly honored to be part of this wonderful
              school community, committed to providing outstanding education to
              each and every child.
            </motion.p>
            <motion.p
              className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our esteemed School Management Committee, with over three decades
              of service in the education field, continues to share its
              experience, vision, and dedication with us. We are blessed to have
              their guidance in shaping our institution's mission.
            </motion.p>
            <motion.p
              className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              As an educator with twenty-two years of experience, I am dedicated
              to fostering an environment that promotes curiosity, creativity,
              and critical thinking. My vision for G.D. Goenka Public School is
              to provide a holistic education that prepares students for success
              in an ever-changing world.
            </motion.p>
            <motion.p
              className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              We believe that every child is unique and possesses qualities that
              need to be identified and nurtured. With this in mind, we tailor
              education to each student's individual level, supported by a
              teacher-student ratio of 1:20, allowing for personalized
              attention.
            </motion.p>
            <motion.p
              className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our school implements activity-based learning and applies
              child-centric pedagogy to ensure meaningful learning experiences.
              We guide each student toward excellence in academics, vocational
              training, sports, and co-curricular activities.
            </motion.p>
            <motion.p
              className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Under the guidelines of the New National Education Policy (NEP),
              the NCF, and CBSE, along with continuous mentoring from the Goenka
              Group, we strive to nurture each child based on their unique core
              skills. Our experienced faculty, state-of-the-art facilities, and
              innovative teaching methods position us as a leader in academic
              excellence.
            </motion.p>
            <motion.p
              className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              I assure the community and all stakeholders that, with our
              well-planned curriculum, the dedication of our team, and the
              support of parents, we will nurture skilled and strong future
              citizens. These individuals will be responsible, emotionally
              well-rounded, and committed to upholding social values and ethics.
            </motion.p>
            <motion.p
              className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              We always welcome and value the suggestions of parents, as this
              journey of preparing successful and responsible future citizens is
              not possible without their support.
            </motion.p>
            <motion.p
              className="text-black leading-relaxed text-sm sm:text-base  font-bold mt-4 "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              With Best Wishes, <br />
              Dr. Anubhav Lodhi <br />
              Principal <br />
              M.Com., LL.B., B.Ed., Ph.D
            </motion.p>
          </motion.div>
        </motion.section>
      </motion.div>
    </Layout>
  );
};

export default PrincipalMessage;
