import React from "react";
import Header1 from "./Header1";
import Footer from "./Footer";

export const Layout = ({ children }) => {

  return (
    <div className="flex flex-col min-h-screen ">
      {/* Navbar */}
      <Header1 />

      {/* Main Content */}
      <div className="flex-1">
        <main>{children}</main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};