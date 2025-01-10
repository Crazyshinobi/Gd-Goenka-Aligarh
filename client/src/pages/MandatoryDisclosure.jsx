import React from "react";
import { Layout } from "../components/Layout";
import { motion } from "framer-motion";
import MandatoryBanner from "../assets/Mandatory-Disclosure1.jpeg";
import NavigationPages from "./NavigationPages";
import MandatoryDisclosurePdf from "../assets/Mandatory-Disclosure-SARAS-5.0.pdf";
import NocPdf from "../assets/NOC.pdf";
import RecognitionPdf from "../assets/RecognitionApprovalLetter.pdf";
import SocietyRegistrationPdf from "../assets/SocietyRegistration.pdf";
import AffilationletterPdf from "../assets/AffiliationLetter.pdf";
import BuildingSafetyPdf from "../assets/2BUILDINGSAFETYCERTIFICATE.pdf";
import FireSafetyPdf from "../assets/3FireNOC.pdf";
import DrinkingWaterPdf from "../assets/SafeDrinkingWaterNew.pdf";
import SelfCertificationPdf from '../assets/SELFCERTIFICATIONPROFORMA.pdf'


const MandatoryDisclosure = () => {
  document.title = "Mandatory Disclosure - GDGPS Aligarh";
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

      <section className="container  max-w-7xl py-12  w-full  mx-auto gap-3  flex flex-col items-start ">
        <a
          href={MandatoryDisclosurePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-white  bg-blue-600 py-2 px-4 rounded-lg uppercase " 
        >
          Mandatory Disclosure
        </a>

        <a
          href={NocPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-black  uppercase bg-[#ffc107] border-[#ffc107] py-2 px-4 rounded-lg  "
        >
          No objection certificate (noc)
        </a>

        <a
          href={RecognitionPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-black uppercase bg-[#ffc107] border-[#ffc107] py-2 px-4 rounded-lg  "
        >
          recognition approval letter
        </a>

        <a
          href={SocietyRegistrationPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-black uppercase bg-[#ffc107] border-[#ffc107] py-2 px-4 rounded-lg  "
        >
          society registration
        </a>

        <a
          href={AffilationletterPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-black uppercase bg-[#ffc107] border-[#ffc107] py-2 px-4 rounded-lg  "
        >
          Affiliation letter
        </a>

        <a
          href={BuildingSafetyPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-black uppercase bg-[#ffc107] border-[#ffc107] py-2 px-4 rounded-lg  "
        >
          building safety certificate
        </a>

        <a
          href={FireSafetyPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-black uppercase bg-[#ffc107] border-[#ffc107] py-2 px-4 rounded-lg  "
        >
          fire safety certificate
        </a>

        <a
          href={SelfCertificationPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-black uppercase bg-[#ffc107] border-[#ffc107] py-2 px-4 rounded-lg  "
        >
         self certification
        </a>

        <a
          href={DrinkingWaterPdf}
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
