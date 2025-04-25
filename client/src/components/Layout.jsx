import React from "react";
import Header1 from "./Header1";
import Footer from "./Footer";
import SocialConnect from "./SocialConnect";
import ModalBox from "./ModalBox";

export const Layout = ({ children }) => {

  return (
    
    <div className="flex flex-col min-h-screen ">
      {/* Navbar */}
      <SocialConnect/>
      <Header1 />
      <ModalBox/>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <main>{children}</main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};