import React from "react";
import {
  FaPhoneAlt,
  FaMobileAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import footerbg from "../assets/bg1.jpg";
import { NavLink } from "react-router-dom";
import "../css/SocialConnect.css";

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
            3KMs Stone, Mathura Rd, Sasni Gate, Aligarh - Uttar Pradesh 202001
          </p>
          <p className="mb-1 flex items-center">
            <FaPhoneAlt className="mr-2" /> Landline: 011-43060860
          </p>
          <p className="mb-1 flex items-center">
            <FaMobileAlt className="mr-2" /> Mobile: +91-9810054878 , 8126747489
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
            <a
              href={"/about/mandatory-disclosure"}
              target="_blank"
              rel="noopener noreferrer"
            >
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
            <NavLink to={"/admission/application-form"}>
              <li className="hover:text-blue-300 cursor-pointer">Admissions</li>
            </NavLink>
            <NavLink to={"/gallery "}>
              {" "}
              <li className="hover:text-blue-300 cursor-pointer">
                Image Gallery
              </li>
            </NavLink>
            <NavLink to={"/contact-us"}>
              <li className="hover:text-blue-300 cursor-pointer">Contact Us</li>
            </NavLink>
            <li>
              <div>
                <ul className="iconsFooter flex mt-2">
                  <li className="icon-contentFooter">
                    <a
                      href="https://www.instagram.com/gdgpsalg/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      data-social="instagram"
                    >
                      <div className="filledFooter" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-instagram"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </li>

                  <li className="icon-contentFooter">
                    <a
                      href="https://www.linkedin.com/company/gdgpsaligarh/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      data-social="linkedin"
                    >
                      <div className="filledFooter" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                  </li>

                  <li className='icon-contentFooter'>
                    <a
                      href="https://www.facebook.com/gdgpsaligarh"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      data-social = "facebook"
                    >
                      <div className="filledFooter" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-facebook"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                        fill="currentcolor" />
                      </svg>
                    </a>
                  </li>

                  <li className="icon-contentFooter">
                    <a
                      href="https://www.youtube.com/@gdgpsaligarh"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Youtube"
                      data-social="youtube"
                    >
                      <div className="filledFooter" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-youtube"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
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
