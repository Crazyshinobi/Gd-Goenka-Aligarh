import React, { useState, useEffect, useRef } from "react"
import { Layout } from "../components/Layout"
import { motion } from "framer-motion"
import MandatoryBanner from "../assets/Mandatory-Disclosure1.jpeg"
import NavigationPages from "./NavigationPages"
import MandatoryDisclosurePdf from "../assets/MandatoryDisclosureDetails.pdf"
import { Helmet } from "react-helmet"

const MandatoryDisclosure = () => {

  const [selectedPdf, setSelectedPdf] = useState(null)
  const baseURL = `${process.env.REACT_APP_PDF_URL}`
  const iframeRef = useRef(null)

  const handlePdfSelect = (pdf) => {
    setSelectedPdf(pdf)
  }

  // useEffect(() => {
  //   const iframe = iframeRef.current;
  
  //   if (iframe) {
  //     const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  
  //     const preventContextMenu = (e) => {
  //       e.preventDefault();
  //       return false;
  //     };
  
  //     const preventKeyboardShortcuts = (e) => {
  //       if (
  //         (e.ctrlKey && (e.key === "s" || e.key === "p" || e.key === "c")) ||
  //         (e.altKey && e.key === "PrintScreen")
  //       ) {
  //         e.preventDefault();
  //         return false;
  //       }
  //     };
  
  //     const preventCopyPaste = (e) => {
  //       e.preventDefault();
  //       return false;
  //     };
  
  //     iframeDocument.addEventListener("contextmenu", preventContextMenu);
  //     iframeDocument.addEventListener("keydown", preventKeyboardShortcuts);
  //     iframeDocument.addEventListener("copy", preventCopyPaste);
  //     iframeDocument.addEventListener("cut", preventCopyPaste);
  //     iframeDocument.addEventListener("paste", preventCopyPaste);
  
  //     iframeDocument.body.style.userSelect = "none";
  //     iframeDocument.body.style.webkitUserSelect = "none";
  //     iframeDocument.body.style.msUserSelect = "none";
  //     iframeDocument.body.style.mozUserSelect = "none";
  
  //     return () => {
  //       iframeDocument.removeEventListener("contextmenu", preventContextMenu);
  //       iframeDocument.removeEventListener("keydown", preventKeyboardShortcuts);
  //       iframeDocument.removeEventListener("copy", preventCopyPaste);
  //       iframeDocument.removeEventListener("cut", preventCopyPaste);
  //       iframeDocument.removeEventListener("paste", preventCopyPaste);
  //     };
  //   }
  // }, []);
  

  return (
    <Layout>
      <Helmet>
  <title>Mandatory Disclosure - GD Goenka Public School Aligarh</title>
  <meta name="description" content="Access mandatory public disclosures as per education board norms at GD Goenka Aligarh." />
</Helmet>

      <div className="relative bgImage">
        <motion.img
          src={MandatoryBanner}
          alt="Mandatory Disclosure banner"
          className="h-[35vh] md:h-[40vh] lg:h-[60vh] w-full object-fill"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="absolute bottom-4 shadow-md md:bottom-6 left-4 md:left-8 text-2xl md:text-5xl font-bold text-[#2a3c7e] bg-white bg-opacity-80 px-4 py-2 rounded"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Mandatory Disclosure
        </motion.h1>
      </div>

      <NavigationPages />

      <section className="container max-w-7xl py-12 w-full md:w-[80%] mx-auto gap-4 flex flex-col lg:flex-row">
        {/* PDF Names Section - Aligned to the Start */}
        <div className="lg:w-2/5 mb-4 lg:mb-0 text-left">
          <button
            onClick={() => handlePdfSelect(MandatoryDisclosurePdf)}
            className="text-base text-white bg-[#2a3c7e] py-2 px-4 rounded-lg uppercase mb-2 block"
          >
            Mandatory Disclosure
          </button>

          {[
            { label: "Society registration", link: "/mandatory-disclosure-link/SocietyRegistration.pdf" },
            { label: "SchooL recognition certificate", link: "/mandatory-disclosure-link/SCHOOLRECOGNITION.pdf" },
            { label: "No objection certificate (noc)", link: "/mandatory-disclosure-link/NOC.pdf" },
            { label: "Recognition certificate", link: "/mandatory-disclosure-link/RecognitionApprovalLetter.pdf" },
            { label: "Building safety certificate", link: "/mandatory-disclosure-link/2BUILDINGSAFETYCERTIFICATE.pdf" },
            { label: "Fire safety certificate", link: "/mandatory-disclosure-link/3FireNOC.pdf" },
            { label: "Affiliation letter", link: "/mandatory-disclosure-link/AffiliationLetter.pdf" },
            { label: "Self certification", link: "/mandatory-disclosure-link/SELFCERTIFICATION.pdf" },
            { label: "Parent teacher association", link: "/mandatory-disclosure-link/GD-GOENKA-PUBLIC-SCHOOL.pdf" },
            {
              label: "School Management Committee(SMC)",
              link: "/mandatory-disclosure-link/School-Management-Committee.pdf",
            },
            {
              label: "Water, health and sanitation certificates",
              link: "/mandatory-disclosure-link/SafeDrinkingWaterNew.pdf",
            },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handlePdfSelect(item.link)}
              className="text-lg text-black uppercase bg-[#bea05a] border-[#bea05a] text-left py-2 px-4 rounded-lg mb-2 w-full"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* PDF Viewer Section */}
        <div className="lg:w-3/5">
          {selectedPdf ? (
            <div className="relative w-full h-[80vh]">
              <iframe
                ref={iframeRef}
                src={`${selectedPdf}#toolbar=0&navpanes=0`}
                title="Selected PDF"
                className="w-full h-full"
                frameBorder="0"
                style={{
                  pointerEvents: "auto",
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  msUserSelect: "none",
                }}
              ></iframe>
              <div className="absolute inset-0 pointer-events-none" onContextMenu={(e) => e.preventDefault()}></div>
            </div>
          ) : (
            <p className="text-center text-gray-500">Select a document to view the PDF.</p>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default MandatoryDisclosure
