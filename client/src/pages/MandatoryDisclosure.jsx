import React from "react";
import { Layout } from "../components/Layout";
import { motion } from "framer-motion";
import MandatoryBanner from "../assets/Mandatory-Disclosure1.jpeg";
import NavigationPages from "./NavigationPages";
import MandatoryDisclosurePdf from "../assets/Mandatory-Disclosure-SARAS-5.0.pdf";

const MandatoryDisclosure = () => {
  document.title = "Mandatory Disclosure - GDGPS Aligarh";
  const apiURL = `${process.env.REACT_APP_BASE_URL}`;
  return (
    <Layout>
      <div className="relative bgImage">
        <motion.img
          src={MandatoryBanner}
          alt="Mandatory Disclosure banner"
          className="h-[50vh] md:h-[40vh] lg:h-[60vh] w-full object-fill"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="absolute bottom-4 shadow-md md:bottom-6 left-4 md:left-8 text-3xl md:text-5xl font-bold text-red-600 bg-white bg-opacity-80 px-4 py-2 rounded"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Mandatory Disclosure
        </motion.h1>
      </div>

      <NavigationPages />

      <section className="container  max-w-7xl py-12  w-full  mx-auto gap-4  flex flex-col items-start ">
        <a
          href={MandatoryDisclosurePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-white  bg-blue-600 py-2 px-4 rounded-lg uppercase "
        >
          Mandatory Disclosure
        </a>

        <a
          href={`${apiURL}/mandatory-disclosure-link/SocietyRegistration.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-black uppercase bg-[#ffc107] border-[#ffc107] py-2 px-4 rounded-lg  "
        >
          Society registration
        </a>

        <a
          href={`${apiURL}/mandatory-disclosure-link/NOC.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-black  uppercase bg-[#ffc107] border-[#ffc107] py-2 px-4 rounded-lg  "
        >
          No objection certificate (noc)
        </a>

        <a
          href={`${apiURL}/mandatory-disclosure-link/RecognitionApprovalLetter.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-black uppercase bg-[#ffc107] border-[#ffc107] py-2 px-4 rounded-lg  "
        >
          recognition certificate
        </a>

        <a
          href={`${apiURL}/mandatory-disclosure-link/2BUILDINGSAFETYCERTIFICATE.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-black uppercase bg-[#ffc107] border-[#ffc107] py-2 px-4 rounded-lg  "
        >
          building safety certificate
        </a>

        <a
          href={`${apiURL}/mandatory-disclosure-link/3FireNOC.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-black uppercase bg-[#ffc107] border-[#ffc107] py-2 px-4 rounded-lg  "
        >
          fire safety certificate
        </a>

        <a
          href={`${apiURL}/mandatory-disclosure-link/AffiliationLetter.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-black uppercase bg-[#ffc107] border-[#ffc107] py-2 px-4 rounded-lg  "
        >
          Affiliation letter
        </a>

        <a
          href={`${apiURL}/mandatory-disclosure-link/SELFCERTIFICATION.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-black uppercase bg-[#ffc107] border-[#ffc107] py-2 px-4 rounded-lg  "
        >
          self certification
        </a>

        <a
          href={`${apiURL}/mandatory-disclosure-link/GD-GOENKA-PUBLIC-SCHOOL.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-black uppercase bg-[#ffc107] border-[#ffc107] py-2 px-4 rounded-lg  "
        >
          parent teacher association
        </a>

        <a
          href={`${apiURL}/mandatory-disclosure-link/School-Management-Committee.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-black uppercase bg-[#ffc107] border-[#ffc107] py-2 px-4 rounded-lg  "
        >
          School Management Committee(SMC)
        </a>

        <a
          href={`${apiURL}/mandatory-disclosure-link/SafeDrinkingWaterNew.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-black uppercase bg-[#ffc107] border-[#ffc107] py-2 px-4 rounded-lg  "
        >
          Water , health and sanitation certificates
        </a>
      </section>
    </Layout>
  );
};

export default MandatoryDisclosure;
