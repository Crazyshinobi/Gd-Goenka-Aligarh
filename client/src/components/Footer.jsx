import React from "react";
import {
  FaPhoneAlt,
  FaMobileAlt,
  FaFax,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import footerbg from "../assets/bg1.jpg";
import footerbg1 from "../assets/footerbg.jpg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer
      className=" text-white py-8 px-4 rounded-t-3xl"
      style={{
        backgroundImage: `url(${footerbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-3 flex items-center">
            <FaMapMarkerAlt className="mr-2" /> G.D. Goenka Public School
          </h2>
          <p className="mb-2">
            Hajipur Chauhatta, Aligarh, Uttar Pradesh - 202001
          </p>
          <p className="mb-1 flex items-center">
            <FaPhoneAlt className="mr-2" /> Landline: 011-43060860
          </p>
          <p className="mb-1 flex items-center">
            <FaMobileAlt className="mr-2" /> Mobile: +91-9810054878
          </p>
          <p className="mb-1 flex items-center">
            <FaEnvelope className="mr-2" /> Email: admission@gdgpsaligarh.com
          </p>
        </div>

        {/* About GDGPS */}
        <div>
          <h3 className="text-xl font-bold mb-3">About GDGPS</h3>
          <ul>
            <NavLink to={"/about/principal-message"}>
              <li className="hover:text-blue-300 cursor-pointer">
                Principal's Message
              </li>
            </NavLink>
            <NavLink to={"/about/management"}>
              <li className="hover:text-blue-300 cursor-pointer">Management</li>
            </NavLink>
            <NavLink to={"/about/vision-and-mission"}>
              {" "}
              <li className="hover:text-blue-300 cursor-pointer">
                Mission and Vision
              </li>
            </NavLink>
          </ul>
        </div>

        {/* Academics */}
        <div>
          <h3 className="text-xl font-bold mb-3">Academics</h3>
          <ul>
            <NavLink to={"/academics/faculty-&-curriculum"}>
              {" "}
              <li className="hover:text-blue-300 cursor-pointer">
                Faculty & Curriculum
              </li>
            </NavLink>
            <NavLink to={"/academics/teaching-methodology"}>
              {" "}
              <li className="hover:text-blue-300 cursor-pointer">
                Teaching Methodology
              </li>
            </NavLink>
            <NavLink to={"/academics/competition-&-awards"}> 
            <li className="hover:text-blue-300 cursor-pointer">
              Competitions & Awards
            </li>
            </NavLink>
            <a href={"/about/mandatory-disclosure"} target="_blank" rel="noopener noreferrer">
              <li className="hover:text-blue-300 cursor-pointer">
              Mandatory Disclosure
            </li>
            </a>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul>
            <li className="hover:text-blue-300 cursor-pointer">
              Events & Celebrations
            </li>
            <li className="hover:text-blue-300 cursor-pointer">Admissions</li>
            <li className="hover:text-blue-300 cursor-pointer">
              Image Gallery
            </li>
            <NavLink to={'/contact-us'}><li className="hover:text-blue-300 cursor-pointer">Contact Us</li></NavLink>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} G.D. Goenka Public School. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
