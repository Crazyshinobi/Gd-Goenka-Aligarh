import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import ImageSection from "../components/ImageSection";
import VisionSection from "../components/VisionSection";
import ExcellenceSection from "../components/ExcellenceSection";
import BeyondAcademics from "../components/BeyondAcademics";
import Achievers from "../components/Achievers";
import ToppersX from "../components/ToppersX";
import InstagramSection from "../components/InstagramSection";
import ModalBox from "../components/ModalBox";
import Preloader from "../components/Preloader";
import Faculty from "../components/Faculty";

const Home = () => {
  document.title = "GDGPS Aligarh";
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const hasSeenPreloader = localStorage.getItem('hasSeenPreloader');

  //   if (!hasSeenPreloader) {
  //     // If the user hasn't seen the preloader, show it for 3 seconds
  //     const timer = setTimeout(() => {
  //       setIsLoading(false);
  //       localStorage.setItem('hasSeenPreloader', 'true');
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   } else {
  //     setIsLoading(false);
  //   }
  // }, []);

  // if (isLoading) {
  //   return <Preloader />;
  // }

    window.gtag('event', 'conversion', {
      'send_to': 'AW-11435073187/mTffCPbYoYwaEKO91cwq',
      'value': 1.0,
      'currency': 'INR',
    });

  return (
    <Layout>
      <ModalBox />
      <ImageSection />
      <VisionSection />
      <ExcellenceSection />
      <BeyondAcademics />
      <Faculty/>
      <ToppersX />
      <Achievers />
      <InstagramSection />
    </Layout>
  );
};

export default Home;

