import React from "react";
import { Layout } from "../components/Layout";
import ImageSection from "../components/ImageSection";
import VisionSection from "../components/VisionSection";
import ExcellenceSection from "../components/ExcellenceSection";
import BeyondAcademics from "../components/BeyondAcademics";
import Achievers from "../components/Achievers";
import ToppersX from "../components/ToppersX";
import InstagramSection from "../components/InstagramSection";
import ModalBox from "../components/ModalBox";


const Home = () => {
  document.title = "GDGPS Aligarh"
  return (
    <Layout>
       <ModalBox />
      <ImageSection />
      <VisionSection />
      <ExcellenceSection />
      <BeyondAcademics />
      <ToppersX />
      <Achievers />
      <InstagramSection />
    </Layout>
  );
};

export default Home;
