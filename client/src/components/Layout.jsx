import React from "react";
import Header1 from "./Header1";
import Footer from "./Footer";

export const Layout = ({ children }) => {

  return (
    // style={{background: "linear-gradient(135deg, #E8EEF8, #FFFFFF)"}}
    // style={{ background: "linear-gradient(135deg, #DDEAFE, #FFFFFF)" }} 
    <div className="flex flex-col min-h-screen "    >
      {/* Navbar */}
      <Header1 />

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <main>{children}</main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};