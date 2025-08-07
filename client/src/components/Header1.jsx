import React, { useState } from "react";
// import 'animate.css';
import logo from "../assets/GD-Goenka-logo.png";
import "../css/Header1.css";
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TopScrollButton from "./TopScrollButton";
import { Link, NavLink } from "react-router-dom";

function Header1() {
  const [isSmallSidebar, setIsSmallSidebar] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);

  const sideToggle = () => {
    setIsSmallSidebar(!isSmallSidebar);
  };

  const sideBar = () => {
    setIsSmallSidebar(false); // Close sidebar
  };

  const mobileSidebarToggle = () => {
    setIsSidebar(!isSidebar);
  };

  const mobileSidebar = () => {
    setIsSidebar(false);
  };

  return (
    <header className="sticky">
      <div className="header sticky  w-full bg-gray-100 flex justify-between items-center text-black py-4 px-2 md:w-full drop-shadow-md">
        <Link to="/">
          <img
            src={logo}
            alt="Gd Goenka logo"
            className="gdGoenkaLogo hover:scale-110 transition-transform duration-300 ease-in-out"
            width={160}
          />
        </Link>

        <ul className="hidden xl:flex items-center gap-4  text-base relative right-[60px] font-polymath font-light">
          <li className="peer p-3 hover:bg-[#003963] hover:text-white rounded-md cursor-pointer transition-all">
            ABOUT US
          </li>

          <ul
            className="pt-4  top-[49px] font-light absolute hidden peer-hover:flex hover:flex w-[240px] 
                flex-col bg-white drop-shadow-lg rounded-md gap-2 transition-all duration-100 ease-in"
          >
            <NavLink to={"/about/principal-message"}>
              <li className="menu-item cursor-pointer  mb-[-8px] hover:text-white">
                PRINCIPAL'S MESSAGE
              </li>
            </NavLink>{" "}
            <hr />
            <NavLink to={"/about/management"}>
              <li className="menu-item cursor-pointer hover:text-white mt-[-8px] mb-[-8px]">
                MANAGEMENT
              </li>
            </NavLink>
            <hr />
            <NavLink to={"/about/vision-and-mission"}>
              {" "}
              <li className="menu-item cursor-pointer hover:text-white mt-[-9px]">
                VISION & MISSION
              </li>
            </NavLink>
           {/* <NavLink to={"/about/mandatory-disclosure"}>
              {" "}
              <li className="menu-item cursor-pointer hover:text-white mt-[-9px]">
                MANDATORY DISCLOSURE
              </li>
            </NavLink> */}
          </ul>

          <div className="relative peer">
            <li className="relative peer p-3 hover:bg-[#003963]  hover:text-white rounded-md cursor-pointer transition-all">
              ACADEMICS
            </li>

            <ul
              className="academics_drop pt-4 top-[49px] font-extralight absolute hidden peer-hover:flex hover:flex w-[240px]
                flex-col bg-white drop-shadow-lg rounded-md delay-[2s] gap-4"
            >
              <NavLink to={"/academics/faculty-&-curriculum"}>
                <li className="menu-item cursor-pointer ps-2 hover:text-white flex mb-[-16px]">
                  FACULTY & CURRICULUM
                </li>
              </NavLink>
              <hr />
              <NavLink to={"/academics/teaching-methodology"}>
                {" "}
                <li className="menu-item cursor-pointer hover:text-white ps-2 flex mt-[-16px] mb-[-16px]">
                  TEACHING METHODOLOGY
                </li>
              </NavLink>
              <hr />
              <NavLink to={"/academics/igniting-minds"}>
                {" "}
                <li className="menu-item cursor-pointer hover:text-white ps-2 flex mt-[-16px] mb-[-16px]">
                  IGNITING MINDS
                </li>
              </NavLink>
              <hr />
              <NavLink to={"/academics/competition-&-awards"}>
                {" "}
                <li className="menu-item cursor-pointer hover:text-white ps-2 flex mt-[-16px] mb-[-16px]">
                  COMPETITIONS & AWARDS
                </li>
              </NavLink>
              <hr />
              <a
                href="/pdfs/HolidayPlanner2025-26.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer hover:text-white ps-2 flex mt-[-16px] mb-[-16px]">
                  Holiday Planner 2025-26
                </li>
              </a>
              <hr />
              <NavLink to={"/academics/goenkan-pursuits"}>
                {" "}
                <li className="menu-item cursor-pointer ps-2 hover:text-white flex mt-[-16px] mb-[-16px]">
                  GOENKAN PURSUITS
                </li>
              </NavLink>
              <hr />
              <a
                href={"/academics/authorised-book-seller"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <li className="menu-item cursor-pointer hover:text-white ps-2 flex  mt-[-16px] leading-none">
                  LIST OF AUTHORISED BOOK SELLERS
                </li>
              </a>
            </ul>
          </div>

          <div className="relative peer">
            <NavLink to={"/beyond-academics"}>
              {" "}
              <li className="relative peer p-3 hover:bg-[#003963]  hover:text-white rounded-md cursor-pointer transition-all">
                BEYOND ACADEMICS
              </li>
            </NavLink>
          </div>

          <div className="relative peer">
            <li className="relative peer uppercase p-3 hover:bg-[#003963]  hover:text-white rounded-md cursor-pointer transition-all">
              our campus
            </li>

            <ul
              className="fee_payment_drop pt-3 top-[49px] font-extralight uppercase absolute hidden peer-hover:flex hover:flex w-[200px]
                flex-col bg-white drop-shadow-lg rounded-md delay-[2s] gap-4"
            >
              <NavLink to={"/our-campus/class-infrastructure"}>
                <li className="menu-item cursor-pointer ps-2 flex mb-[-16px] hover:text-white leading-none">
                  class infrastructure
                </li>
              </NavLink>
              <hr />
              <NavLink to={"/our-campus/labs-and-library"}>
                <li className="menu-item cursor-pointer ps-2 flex mt-[-16px]  hover:text-white">
                  labs and library
                </li>
              </NavLink>
            </ul>
          </div>

          
          <div className="relative peer">
            <li className="relative peer uppercase p-3 hover:bg-[#003963]  hover:text-white rounded-md cursor-pointer transition-all">
            Schedule
            </li>
 <ul
              className="fee_payment_drop pt-3 top-[49px] font-extralight uppercase absolute hidden peer-hover:flex hover:flex w-[200px]
                flex-col bg-white drop-shadow-lg rounded-md delay-[2s] gap-4"
            >
               <a
                href="/pdfs/Daily-Routine-Junior.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                 <li className="menu-item cursor-pointer ps-2 flex mb-[-16px]  hover:text-white leading-none">
                  Junior Daily Routine
                </li>
              </a>
              <hr />
               <a
                href="/pdfs/Daily-Routine-Senior.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer hover:text-white ps-2 flex  mt-[-16px]  mb-[-16px]  leading-none ">
                 Senior Daily Routine
                </li>
              </a>
              <hr />
              <a
                href="/pdfs/GD-GOENKA-LUNCH-SCHEDULE.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer hover:text-white ps-2 flex  mt-[-16px]  mb-[-16px]  leading-none ">
                  Lunch time
                </li>
              </a>
              <hr />
              <a
                href="/pdfs/Notice-for-New-Session.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer ps-2 flex mt-[-16px] hover:text-white">
                 New Session 
                </li>
              </a>

            </ul>
          </div>

          {/* committee  */}
          <div className="relative peer">
            <li className="relative peer uppercase p-3 hover:bg-[#003963]  hover:text-white rounded-md cursor-pointer transition-all">
            Committee
            </li>

            <ul
              className="fee_payment_drop pt-3 top-[49px] font-extralight uppercase absolute hidden peer-hover:flex hover:flex w-[220px]
                flex-col bg-white drop-shadow-lg rounded-md delay-[2s] gap-4"
            >
               <a
                href="/pdfs/Sexual-Harassment-Committee-GDGOENKA.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer ps-2 flex mb-[-16px]  hover:text-white leading-none">
                  Harassment Committee
                </li>
              </a>
              <hr />
               
              <a
                href="/pdfs/Pocso-Committee-of-GD-Goenka.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer ps-2 flex mt-[-16px] hover:text-white">
                 Pocso Committee
                </li>
              </a>

            </ul>
          </div>

          <div className="relative peer">
            <li className="relative peer uppercase p-3 hover:bg-[#003963] hover:text-white rounded-md cursor-pointer transition-all">
              admissions
            </li>

            <ul
              className="fee_payment_drop pt-3 top-[49px] font-extralight uppercase absolute hidden peer-hover:flex hover:flex w-[200px]
                flex-col bg-white drop-shadow-lg rounded-md delay-[2s] gap-4"
            >
              <NavLink to={"/admission/application-form"}>
                {" "}
                <li className="menu-item cursor-pointer ps-2 flex mb-[-16px]  hover:text-white">
                  application form
                </li>
              </NavLink>
              <hr />
              <a
                href="/pdfs/Syllabus-of-Entrance-Exam-2025-2026.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer hover:text-white ps-2 flex  mt-[-16px]  mb-[-16px]  leading-none ">
                  Entrance exam syllabus 2025-26
                </li>
              </a>
              <hr />
              <a
                href="/pdfs/admission-procedure.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer hover:text-white ps-2 flex  mt-[-16px]  mb-[-16px]  leading-none ">
                  Admission Procedure
                </li>
              </a>
              <hr />
              <NavLink to={"/admission/age-criteria"}>
                <li className="menu-item cursor-pointer hover:text-white ps-2 flex  mt-[-16px]  mb-[-16px]  leading-none ">
                  Age Criteria
                </li>
              </NavLink>
              <hr />
              <a
                href="/fee-payment/fees-structure"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="menu-item cursor-pointer ps-2 flex mt-[-16px] hover:text-white">
                  Fee structure
                </li>
              </a>
            </ul>
          </div>

          <div className="relative peer">
            <NavLink to={"/contact-us"}>
              {" "}
              <li className="relative peer p-3 hover:bg-[#003963]  hover:text-white rounded-md cursor-pointer transition-all">
                CONTACT US
              </li>
            </NavLink>
          </div>

          <div
            className="nav_toggler cursor-pointer text-xl text-[#003963]"
            onClick={sideToggle}
          >
            <FaBars />
          </div>
        </ul>

        <div
          className="mobileNavigation cursor-pointer opacity-100 xl:hidden pr-3 text-2xl"
          onClick={mobileSidebarToggle}
        >
          <FaBars />
        </div>
      </div>

      {/*PC SIDEBAR */}
      <div
        className={`smallSidebar ${
          isSmallSidebar ? "open" : ""
        } hidden xl:flex`}
      >
        <ul className="side_bar absolute bg-white border-black w-[380px] h-full right-0 top-0">
          <div className="smallSidebarCross">
            <div className="cross pt-4" onClick={sideBar}>
              <RxCross1 />
            </div>
          </div>

          <div className="scrollSidebarOne">
            {/* ADMISSION ACCORDIAN */}

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                className="uppercase"
              >
                Career
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <NavLink to={"/career/current-openings"}>
                    {" "}
                    <li className="menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase">
                      current opening
                    </li>
                  </NavLink>
                </ul>
              </AccordionDetails>
            </Accordion>
            
            <Accordion>
              <AccordionSummary
                aria-controls="panel2-content"
                id="panel2-header"
                className="uppercase"
              >
              <NavLink to={"/about/mandatory-disclosure"}>
                MANDATORY DISCLOSURE
            </NavLink>
              </AccordionSummary>
            
            </Accordion>

            {/* IMAGE GALLERY ACCORDIAN */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                className="uppercase"
              >
                gallery
              </AccordionSummary>{" "}
              <AccordionDetails>
                <ul>
                  <NavLink to={"/activities"}>
                    <li className="menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase">
                      activities
                    </li>
                  </NavLink>
                  <hr />
                  <li className="menu-item cursor-pointer ps-1 leading-none flex  uppercase ms-[-4px]">
                    In-News
                  </li>
                  <hr />

                  <NavLink to={"/gallery"}>
                    <li className="menu-item cursor-pointer ps-1 leading-none flex  mb-[-4px] uppercase ms-[-4px]">
                      View all gallery
                    </li>
                  </NavLink>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
        </ul>
      </div>

      {/* RESPONSIVE SIDEBAR */}
      <div className={`screenSidebar ${isSidebar ? "open" : ""}`}>
        <div className="sidebarCross">
          <div className="cross pt-4" onClick={mobileSidebar}>
            <RxCross1 />
          </div>
        </div>

        <div className="scrollSidebar">
          {/* ABOUT ACCORDIAN */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="uppercase"
            >
              about
            </AccordionSummary>
            <AccordionDetails>
              <ul className="mt-[-16px]">
                <NavLink to={"/about/principal-message"}>
                  {" "}
                  <li className="menu-item cursor-pointer mb-[-4px] ms-[-4px] uppercase">
                    principal's message
                  </li>
                </NavLink>
                <hr />
                <NavLink to={"/about/management"}>
                  <li className="menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase">
                    management
                  </li>
                </NavLink>
                <hr />
                <NavLink to={"/about/vision-and-mission"}>
                  {" "}
                  <li className="menu-item cursor-pointer mt-[-4px] ms-[-4px] uppercase">
                    vision & mission
                  </li>
                </NavLink>
                <hr />
                <NavLink to={"/about/mandatory-disclosure"}>
                  {" "}
                  <li className="menu-item cursor-pointer mt-[-4px] ms-[-4px] leading-none uppercase">
                    mandatory disclosure
                  </li>
                </NavLink>
              </ul>
            </AccordionDetails>
          </Accordion>

          {/* ACADEMICS ACCORDIAN */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="uppercase"
            >
              academics
            </AccordionSummary>
            <AccordionDetails>
              <ul className="mt-[-16px]">
                <NavLink to={"/academics/faculty-&-curriculum"}>
                  {" "}
                  <li className="menu-item cursor-pointer mb-[-4px] ms-[-4px] uppercase">
                    faculty & curriculum
                  </li>
                </NavLink>
                <hr />
                <NavLink to={"/academics/teaching-methodology"}>
                  {" "}
                  <li className="menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase">
                    teaching methodology
                  </li>
                </NavLink>
                <hr />
                <NavLink to={"/academics/igniting-minds"}>
                  {" "}
                  <li className="menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase">
                    igniting minds
                  </li>
                </NavLink>
                <hr />
                <NavLink to={"/academics/competition-&-awards"}>
                  {" "}
                  <li className="menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase">
                    Competition & awards
                  </li>
                </NavLink>
                <hr />
                <a
                  href="/pdfs/HolidayPlanner2025-26.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase">
                    {" "}
                    Holiday Planner 2025-26
                  </li>
                </a>
                <hr />
                <NavLink to={"/academics/goenkan-pursuits"}>
                  <li className="menu-item cursor-pointer mb-[-4px] ms-[-4px] uppercase">
                    GOENKAN PURSUIT
                  </li>
                </NavLink>
                <hr />
                <a
                  href={"/academics/authorised-book-seller"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <li className="menu-item cursor-pointer  ms-[-4px] leading-none uppercase">
                    List of authorised book sellers
                  </li>
                </a>
              </ul>
            </AccordionDetails>
          </Accordion>

          {/* OUR CAMPUS ACCORDIAN */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="uppercase"
            >
              our campus
            </AccordionSummary>
            <AccordionDetails>
              <ul className="mt-[-16px]">
                <NavLink to={"/our-campus/class-infrastructure"}>
                  {" "}
                  <li className="menu-item cursor-pointer mb-[-4px] ms-[-4px] uppercase">
                    class infrastructure
                  </li>
                </NavLink>
                <hr />
                <NavLink to={"/our-campus/labs-and-library"}>
                  {" "}
                  <li className="menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase">
                    labs & library
                  </li>
                </NavLink>
              </ul>
            </AccordionDetails>
          </Accordion>

          {/* CAREER ACCORDIAN */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="uppercase"
            >
              career
            </AccordionSummary>
            <AccordionDetails>
              <ul className="mt-[-16px]">
                <NavLink to={"/career/current-openings"}>
                  {" "}
                  <li className="menu-item cursor-pointer mb-[-4px] ms-[-4px] uppercase">
                    current opening
                  </li>
                </NavLink>
              </ul>
            </AccordionDetails>
          </Accordion>

          {/* ERP ACCORDIAN */}
          <Accordion>
            <a
              href="https://gdgaligarh.gdgoenka.com/Index"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
                className="uppercase"
              >
                erp
              </AccordionSummary>
            </a>
          </Accordion>

          {/* FEE PAYMENT */}
          <Accordion>
            <a
              href="https://smartpay.easebuzz.in/75872/AdmissionFee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AccordionSummary
                aria-controls="panel2-content"
                id="panel2-header"
                className="uppercase"
              >
                fee payment
              </AccordionSummary>
            </a>
          </Accordion>

          {/* BEYOND ACADEMICS ACCORDIAN */}
          <Accordion>
            <NavLink to={"/beyond-academics"}>
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
                className="uppercase"
              >
                beyond academics
              </AccordionSummary>
            </NavLink>
          </Accordion>

          {/* ALUMNI ACCORDIAN */}
          <Accordion>
            <AccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
              className="uppercase"
            >
              alumni
            </AccordionSummary>
          </Accordion>

          {/* Routine  */}

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="uppercase"
            >
              Schedule
            </AccordionSummary>
            <AccordionDetails>
              <ul>
              <a
                  href="/pdfs/Daily-Routine-Junior.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase">
                   Junior Daily Routine
                  </li>
                </a>
                <hr />
              <a
                  href="/pdfs/Daily-Routine-Senior.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase">
                   Senior Daily Routine
                  </li>
                </a>
                <hr />

                <a
                  href="/pdfs/GD-GOENKA-LUNCH-SCHEDULE.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 leading-none flex  uppercase ms-[-4px]">
                    Lunch time
                  </li>
                </a>
                <hr />
    
                <a
                  href="/pdfs/Notice-for-New-Session.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 leading-none flex  mb-[-4px] uppercase ms-[-4px]">
                  New Session
                  </li>
                </a>
              </ul>
            </AccordionDetails>
          </Accordion>

          {/* committee  */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="uppercase"
            >
              Committee
            </AccordionSummary>
            <AccordionDetails>
              <ul>
              <a
                href="/pdfs/Sexual-Harassment-Committee-GDGOENKA.pdf#toolbar=0&navpanes=0&scrollbar=0"
                target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase">
                   Harassment Committee
                  </li>
                </a>
            
                <hr />
    
                <a
                  href="/pdfs/Pocso-Committee-of-GD-Goenka.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 leading-none flex  mb-[-4px] uppercase ms-[-4px]">
                  Pocso Committee
                  </li>
                </a>
              </ul>
            </AccordionDetails>
          </Accordion>


          {/* ADMISSION ACCORDIAN */}

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="uppercase"
            >
              admissions
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <NavLink to={"/admission/application-form"}>
                  <li className="menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase">
                    application form
                  </li>
                </NavLink>
                <hr />

                <a
                  href="/pdfs/Syllabus-of-Entrance-Exam-2025-2026.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 leading-none flex  uppercase ms-[-4px]">
                    Entrance exam syllabus 2025-26
                  </li>
                </a>
                <hr />
                <a
                  href="/pdfs/admission-procedure.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 leading-none flex  uppercase ms-[-4px]">
                    Admission Procedure
                  </li>
                </a>
                <hr />
                <NavLink to={"/admission/age-criteria"}>
                  <li className="menu-item cursor-pointer ps-1 leading-none flex  uppercase ms-[-4px]">
                    {" "}
                    Age Criteria
                  </li>
                </NavLink>
                <hr />

                <a
                  href="/fee-payment/fees-structure"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="menu-item cursor-pointer ps-1 leading-none flex  mb-[-4px] uppercase ms-[-4px]">
                    fees structure
                  </li>
                </a>
              </ul>
            </AccordionDetails>
          </Accordion>

          {/* IMAGE GALLERY ACCORDIAN */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="uppercase"
            >
              gallery
            </AccordionSummary>{" "}
            <AccordionDetails>
              <ul>
                <NavLink to={"/activities"}>
                  <li className="menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase">
                    activities
                  </li>
                </NavLink>
                <hr />
                <li className="menu-item cursor-pointer ps-1 leading-none flex  uppercase ms-[-4px]">
                  In-News
                </li>
                <hr />

                <NavLink to={"/gallery"}>
                  <li className="menu-item cursor-pointer ps-1 leading-none flex  mb-[-4px] uppercase ms-[-4px]">
                    View all gallery
                  </li>
                </NavLink>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <NavLink to={"/contact-us"}>
              {" "}
              <AccordionSummary
                aria-controls="panel2-content"
                id="panel2-header"
                className="uppercase"
              >
                Contact-us
              </AccordionSummary>
            </NavLink>
          </Accordion>
        </div>
      </div>
      {/* NAVIGATION ENDS */}
      <TopScrollButton />
    </header>
  );
}

export default Header1;
