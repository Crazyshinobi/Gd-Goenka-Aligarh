import React, { useState } from 'react'
// import 'animate.css';
import logo from '../assets/GD-Goenka-logo.png'
import '../css/Header1.css'
import { IoIosArrowForward } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";
import { Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TopScrollButton from '../pages/TopScrollButton';


function Header1() {
    document.title = "GDGPS Aligarh"

    const [isSmallSidebar, setIsSmallSidebar] = useState(false)
    const [isSidebar,setIsSidebar] = useState(false);

    const sideToggle = () => {
        setIsSmallSidebar(!isSmallSidebar); // Toggle sidebar open/close
    };

    const sideBar = () => {
        setIsSmallSidebar(false); // Close sidebar
    };

    const mobileSidebarToggle = ()=>{
        setIsSidebar(!isSidebar)
      
    }

    const mobileSidebar = ()=>{
        setIsSidebar(false)
        
    }


  return (
    
        <header className='sticky'> 
          <div className='header sticky  w-full bg-gray-100 flex justify-between items-center text-black py-4 px-2 md:w-full drop-shadow-md'>

           <a href="/">
            <img src={logo} alt="Gd Goenka logo" className='gdGoenkaLogo hover:scale-110 transition-transform duration-300 ease-in-out' width={160}/>
            </a> 

            <ul className='hidden xl:flex items-center gap-4 font-semibold text-base relative right-[60px]'>
                <li className='peer p-3 hover:bg-sky-300 hover:text-white rounded-md cursor-pointer transition-all'>
                  ABOUT US
                </li>
                   
                <ul className='pt-4  top-[49px] font-extralight absolute hidden peer-hover:flex hover:flex w-[240px] 
                flex-col bg-white drop-shadow-lg rounded-md gap-2 transition-all duration-100 ease-in'>
                    <li className='menu-item cursor-pointer mt-[-8px] mb-[-8px]'>PRINCIPAL'S MESSAGE</li><hr />
                    <li className='menu-item cursor-pointer mt-[-8px] mb-[-8px]'>MANAGEMENT</li><hr />
                    <li className='menu-item cursor-pointer mt-[-9px]'>VISION & MISSION</li>
               </ul>   

               <div className='relative peer'>
                <li className='relative peer p-3 hover:bg-sky-300  hover:text-white rounded-md cursor-pointer transition-all'>
                    ACADEMICS
                </li>

                <ul className='academics_drop pt-4 top-[49px] font-extralight absolute hidden peer-hover:flex hover:flex w-[240px]
                flex-col bg-white drop-shadow-lg rounded-md delay-[2s] gap-4'>

                    <li className='menu-item cursor-pointer ps-2 flex mb-[-16px]'>FACULTY & CURRICULUM</li><hr />
                    <li className='menu-item cursor-pointer ps-2 flex mt-[-16px] mb-[-16px]'>TEACHING METHODOLOGY</li><hr />
                    <li className='menu-item cursor-pointer ps-2 flex mt-[-16px] mb-[-16px]'>IGNITING MINDS</li><hr />
                    <li className='menu-item cursor-pointer ps-2 flex mt-[-16px] mb-[-16px]'>COMPETITIONS & AWARDS</li><hr />
                    <li className='menu-item cursor-pointer ps-2 flex  mt-[-16px] leading-none'>LIST OF AUTHORISED BOOK SELLERS</li>
                </ul>

               </div>

               <div className='relative peer'>
                <li className='relative peer p-3 hover:bg-sky-300  hover:text-white rounded-md cursor-pointer transition-all'>
                   BEYOND ACADEMICS
                </li>
               </div>


               <div className='relative peer'>
                <li className='relative peer uppercase p-3 hover:bg-sky-300  hover:text-white rounded-md cursor-pointer transition-all'>
                    our campus
                </li>

                <ul className='fee_payment_drop pt-3 top-[49px] font-extralight uppercase absolute hidden peer-hover:flex hover:flex w-[200px]
                flex-col bg-white drop-shadow-lg rounded-md delay-[2s] gap-4'>

                    <li className='menu-item cursor-pointer ps-2 flex mb-[-16px]'>class infrastructure</li><hr />
                    <li className='menu-item cursor-pointer ps-2 flex mt-[-16px] mb-[-16px]'>labs and library</li><hr />
                    <li className='menu-item cursor-pointer ps-2 flex mt-[-16px] mb-[-16px]'>cafeteria</li><hr />
                    <li className='menu-item cursor-pointer ps-2 flex mt-[-16px]'>playfields</li>
                </ul>

               </div>

               <div className='relative peer'>
                <li className='relative peer uppercase p-3 hover:bg-sky-300  hover:text-white rounded-md cursor-pointer transition-all'>
                    Career
                </li>

                <ul className='fee_payment_drop pt-3 top-[49px] font-extralight uppercase absolute hidden peer-hover:flex hover:flex w-[200px]
                flex-col bg-white drop-shadow-lg rounded-md delay-[2s] gap-4'>

                    <li className='menu-item cursor-pointer ps-2 flex mb-[-16px]'>current opening</li><hr />
                    <li className='menu-item cursor-pointer ps-2 flex mt-[-16px]'>online application</li>
                </ul>

               </div>


               <div className='relative peer'>
                <li className='relative peer p-3 hover:bg-sky-300  hover:text-white rounded-md cursor-pointer transition-all'>
                    CONTACT US
                </li>

               </div>

               <div className='relative peer'>
                <li className='relative peer p-3 hover:bg-sky-300 uppercase  hover:text-white rounded-md cursor-pointer transition-all'>
                    Alumni
                </li>

               </div>

               <div className="nav_toggler cursor-pointer text-xl text-red-400" onClick={sideToggle}>
               <FaBars />
               </div>
               
            </ul>

            <div className='mobileNavigation cursor-pointer opacity-100 xl:hidden pr-3 text-2xl' onClick={mobileSidebarToggle}>
                <FaBars/>
            </div>

          </div>
           
           {/*PC SIDEBAR */}
           <div className={`smallSidebar ${isSmallSidebar ? 'open' : ''} hidden xl:flex`}>
                    <ul className="side_bar absolute bg-white border-black w-[380px] h-full right-0 top-0">
                        <div className='smallSidebarCross'>
                            <div className='cross pt-4' onClick={sideBar}><RxCross1 /></div>
                        </div>

                        <div className='scrollSidebarOne'>
                        <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='uppercase'
                        >
                         goenkan pursuits
                      </AccordionSummary>
                      <AccordionDetails>
                        <ul className='mt-[-16px]'>
                           <li className='menu-item cursor-pointer mb-[-4px] ms-[-4px]'>2022-23</li><hr />
                           <li className='menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px]'>2023-24</li><hr />
                           <li className='menu-item cursor-pointer mt-[-4px] ms-[-4px] leading-none'>2024-25</li>
                       </ul>
                      </AccordionDetails> 
                    </Accordion>

                    {/* GOENKAN MENTORSHIP PROGRAMME ACCORDIAN */}
                    <Accordion>
                       <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        className='uppercase'
                       >
                       goenkan mentorship programme
                       </AccordionSummary>
                       <AccordionDetails>
                            <ul>
                               <li className='menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px]'>2023-24</li>
                            </ul>
                       </AccordionDetails>
                    </Accordion>

                    {/* ADMISSION ACCORDIAN */}

                    <Accordion>
                       <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        className='uppercase'
                       >
                       admissions
                       </AccordionSummary>
                       <AccordionDetails>
                           <ul>
                              <li className='menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase'>application form</li><hr />
                              <li className='menu-item cursor-pointer ps-1 leading-none flex mt-[-4px] mb-[-4px] uppercase ms-[-4px]'>application schedule 2025-26</li>
                          </ul>
                      </AccordionDetails>
                    </Accordion>

                    {/* ASSEMBLIES ACCORDIAN */}
                    <Accordion>
                       <AccordionSummary
                       aria-controls="panel2-content"
                       id="panel2-header"
                       className='uppercase'
                       >
                       assemblies
                       </AccordionSummary>
                    </Accordion>
      
                     {/* COLLEGE PLACEMENTS ACCORDIAN */}
                     <Accordion>
                        <AccordionSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls="panel2-content"
                         id="panel2-header"
                         className='uppercase'
                        >
                         college placements
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul>
                              <li className='menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase'>2019-20</li><hr />
                              <li className='menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase'>2020-21</li><hr />
                              <li className='menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px]'>2021-22</li><hr />
                              <li className='menu-item cursor-pointer ps-1 leading-none flex mt-[-4px] mb-[-4px] uppercase ms-[-4px]'>2022-23</li>
                          </ul>
                        </AccordionDetails>
                     </Accordion>

                     {/* ACHIEVEMENTS ACCORDIAN */}
                     <Accordion>
                        <AccordionSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls="panel2-content"
                         id="panel2-header"
                         className='uppercase'
                        >
                         ACHIEVEMENTS
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul>
                              <li className='menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase'>achievements-2022-2023</li><hr />
                              <li className='menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase'>achievements-2021-2022</li><hr />
                              <li className='menu-item cursor-pointer ps-1 leading-none flex mt-[-4px] mb-[-4px] uppercase ms-[-4px]'>achievements-2020-2021</li>
                          </ul>
                        </AccordionDetails>
                     </Accordion>

                     {/* SCHOLASTIC ACHIEVERS ACCORDIAN */}
                     <Accordion>
                        <AccordionSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls="panel2-content"
                         id="panel2-header"
                         className='uppercase'
                        >
                         scholastic achievers
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul>
                              <li className='menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase'>2021-22</li><hr />
                              <li className='menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase'>2022-23</li><hr />
                              <li className='menu-item cursor-pointer ps-1 leading-none flex mt-[-4px] mb-[-4px] uppercase ms-[-4px]'>2023-24</li>
                          </ul>
                        </AccordionDetails>
                     </Accordion>

                     {/* CLUBS ACCORDIAN */}
                     <Accordion>
                       <AccordionSummary
                       aria-controls="panel2-content"
                       id="panel2-header"
                       className='uppercase'
                       >
                       clubs
                       </AccordionSummary>
                    </Accordion>

                    {/* EVENTS & CELEBRATIONS */}
                    <Accordion>
                       <AccordionSummary
                       aria-controls="panel2-content"
                       id="panel2-header"
                       className='uppercase'
                       >
                       events & celebrations
                       </AccordionSummary>
                    </Accordion>

                    {/* IMAGE GALLERY ACCORDIAN */}
                    <Accordion>
                       <AccordionSummary
                       aria-controls="panel2-content"
                       id="panel2-header"
                       className='uppercase'
                       >
                       image gallery
                       </AccordionSummary>
                    </Accordion>

                     {/* GDGPS BLOGS ACCORDIAN */}
                     <Accordion>
                       <AccordionSummary
                       aria-controls="panel2-content"
                       id="panel2-header"
                       className='uppercase'
                       >
                       gdgps blogs
                       </AccordionSummary>
                    </Accordion>

                    {/* E-PUBLICATIONS ACCORDIAN */}
                    <Accordion>
                        <AccordionSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls="panel2-content"
                         id="panel2-header"
                         className='uppercase'
                        >
                         e-publications
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul>
                              <li className='menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase'>e-newsletter</li><hr />
                              <li className='menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase'>year book</li><hr />
                              <li className='menu-item cursor-pointer ps-1 leading-none flex mt-[-4px] mb-[-4px] uppercase ms-[-4px]'>goenkan gazette</li>
                          </ul>
                        </AccordionDetails>
                     </Accordion>

                      {/* IN NEWS ACCORDIAN */}
                    <Accordion>
                       <AccordionSummary
                       aria-controls="panel2-content"
                       id="panel2-header"
                       className='uppercase'
                       >
                       in-news
                       </AccordionSummary>
                    </Accordion>
                        </div>

                    </ul>
                </div>


                {/* RESPONSIVE SIDEBAR */}
                <div className={`screenSidebar ${isSidebar ? 'open' : ''}`}>
                <div className='sidebarCross'>
                            <div className='cross pt-4' onClick={mobileSidebar}><RxCross1 /></div>
                </div>

                <div className="scrollSidebar">
                    
                    {/* ABOUT ACCORDIAN */}
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='uppercase'
                        >
                         about
                      </AccordionSummary>
                      <AccordionDetails>
                        <ul className='mt-[-16px]'>
                           <li className='menu-item cursor-pointer mb-[-4px] ms-[-4px] uppercase'>principal's message</li><hr />
                           <li className='menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase'>management</li><hr />
                           <li className='menu-item cursor-pointer mt-[-4px] ms-[-4px] leading-none uppercase'>vision & mission</li>
                       </ul>
                      </AccordionDetails> 
                    </Accordion>
                    
                    {/* ACADEMICS ACCORDIAN */}
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='uppercase'
                        >
                         academics
                      </AccordionSummary>
                      <AccordionDetails>
                        <ul className='mt-[-16px]'>
                           <li className='menu-item cursor-pointer mb-[-4px] ms-[-4px] uppercase'>faculty & curriculum</li><hr />
                           <li className='menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase'>teaching methodology</li><hr/>
                           <li className='menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase'>igniting minds</li><hr/>
                           <li className='menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase'>teaching methodology</li><hr/>
                           <li className='menu-item cursor-pointer mt-[-4px] ms-[-4px] leading-none uppercase'>igniting minds </li>
                       </ul>
                      </AccordionDetails> 
                    </Accordion>

                    {/* OUR CAMPUS ACCORDIAN */}
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='uppercase'
                        >
                         our campus
                      </AccordionSummary>
                      <AccordionDetails>
                        <ul className='mt-[-16px]'>
                           <li className='menu-item cursor-pointer mb-[-4px] ms-[-4px] uppercase'>class infrastructure</li><hr />
                           <li className='menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase'>labs & library</li><hr/>
                           <li className='menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase'>cafeteria</li><hr/>
                           <li className='menu-item cursor-pointer mt-[-4px] ms-[-4px] leading-none uppercase'>playfields</li>
                       </ul>
                      </AccordionDetails> 
                    </Accordion>

                    {/* CAREER ACCORDIAN */}
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='uppercase'
                        >
                         career
                      </AccordionSummary>
                      <AccordionDetails>
                        <ul className='mt-[-16px]'>
                           <li className='menu-item cursor-pointer mb-[-4px] ms-[-4px] uppercase'>current opening</li><hr />
                           <li className='menu-item cursor-pointer mt-[-4px] ms-[-4px] leading-none uppercase'>online applications</li>
                       </ul>
                      </AccordionDetails> 
                    </Accordion>

                    {/* BEYOND ACADEMICS ACCORDIAN */}
                    <Accordion>
                      <AccordionSummary
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='uppercase'
                        >
                        beyond academics
                      </AccordionSummary>
                    </Accordion>

                    {/* ALUMNI ACCORDIAN */}
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='uppercase'
                        >
                        alumni
                      </AccordionSummary>
                    </Accordion>



                    {/* GOENKAN PURSUITS */}
                   <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='uppercase'
                        >
                         goenkan pursuits
                      </AccordionSummary>
                      <AccordionDetails>
                        <ul className='mt-[-16px]'>
                           <li className='menu-item cursor-pointer mb-[-4px] ms-[-4px]'>2022-23</li><hr />
                           <li className='menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px]'>2023-24</li><hr />
                           <li className='menu-item cursor-pointer mt-[-4px] ms-[-4px] leading-none'>2024-25</li>
                       </ul>
                      </AccordionDetails> 
                    </Accordion>

                    {/* ACADEMICS ACCORDIAN */}
                    <Accordion>
                       <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        className='uppercase'
                       >
                       goenkan mentorship programme
                       </AccordionSummary>
                       <AccordionDetails>
                            <ul>
                               <li className='menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px]'>2023-24</li>
                            </ul>
                       </AccordionDetails>
                    </Accordion>

                    {/* ADMISSION ACCORDIAN */}

                    <Accordion>
                       <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        className='uppercase'
                       >
                       admissions
                       </AccordionSummary>
                       <AccordionDetails>
                           <ul>
                              <li className='menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase'>application form</li><hr />
                              <li className='menu-item cursor-pointer ps-1 leading-none flex mt-[-4px] mb-[-4px] uppercase ms-[-4px]'>application schedule 2025-26</li>
                          </ul>
                      </AccordionDetails>
                    </Accordion>

                    {/* ASSEMBLIES ACCORDIAN */}
                    <Accordion>
                       <AccordionSummary
                       aria-controls="panel2-content"
                       id="panel2-header"
                       className='uppercase'
                       >
                       assemblies
                       </AccordionSummary>
                    </Accordion>
      
                     {/* COLLEGE PLACEMENTS ACCORDIAN */}
                     <Accordion>
                        <AccordionSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls="panel2-content"
                         id="panel2-header"
                         className='uppercase'
                        >
                         college placements
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul>
                              <li className='menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase'>2019-20</li><hr />
                              <li className='menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase'>2020-21</li><hr />
                              <li className='menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px]'>2021-22</li><hr />
                              <li className='menu-item cursor-pointer ps-1 leading-none flex mt-[-4px] mb-[-4px] uppercase ms-[-4px]'>2022-23</li>
                          </ul>
                        </AccordionDetails>
                     </Accordion>

                     {/* ACHIEVEMENTS ACCORDIAN */}
                     <Accordion>
                        <AccordionSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls="panel2-content"
                         id="panel2-header"
                         className='uppercase'
                        >
                         ACHIEVEMENTS
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul>
                              <li className='menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase'>achievements-2022-2023</li><hr />
                              <li className='menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase'>achievements-2021-2022</li><hr />
                              <li className='menu-item cursor-pointer ps-1 leading-none flex mt-[-4px] mb-[-4px] uppercase ms-[-4px]'>achievements-2020-2021</li>
                          </ul>
                        </AccordionDetails>
                     </Accordion>

                     {/* SCHOLASTIC ACHIEVERS ACCORDIAN */}
                     <Accordion>
                        <AccordionSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls="panel2-content"
                         id="panel2-header"
                         className='uppercase'
                        >
                         scholastic achievers
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul>
                              <li className='menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase'>2021-22</li><hr />
                              <li className='menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase'>2022-23</li><hr />
                              <li className='menu-item cursor-pointer ps-1 leading-none flex mt-[-4px] mb-[-4px] uppercase ms-[-4px]'>2023-24</li>
                          </ul>
                        </AccordionDetails>
                     </Accordion>

                     {/* CLUBS ACCORDIAN */}
                     <Accordion>
                       <AccordionSummary
                       aria-controls="panel2-content"
                       id="panel2-header"
                       className='uppercase'
                       >
                       clubs
                       </AccordionSummary>
                    </Accordion>

                    {/* EVENTS & CELEBRATIONS */}
                    <Accordion>
                       <AccordionSummary
                       aria-controls="panel2-content"
                       id="panel2-header"
                       className='uppercase'
                       >
                       events & celebrations
                       </AccordionSummary>
                    </Accordion>

                    {/* IMAGE GALLERY ACCORDIAN */}
                    <Accordion>
                       <AccordionSummary
                       aria-controls="panel2-content"
                       id="panel2-header"
                       className='uppercase'
                       >
                       image gallery
                       </AccordionSummary>
                    </Accordion>

                     {/* GDGPS BLOGS ACCORDIAN */}
                     <Accordion>
                       <AccordionSummary
                       aria-controls="panel2-content"
                       id="panel2-header"
                       className='uppercase'
                       >
                       gdgps blogs
                       </AccordionSummary>
                    </Accordion>

                    {/* E-PUBLICATIONS ACCORDIAN */}
                    <Accordion>
                        <AccordionSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls="panel2-content"
                         id="panel2-header"
                         className='uppercase'
                        >
                         e-publications
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul>
                              <li className='menu-item cursor-pointer ps-1 flex mt-[-16px] ms-[-4px] uppercase'>e-newsletter</li><hr />
                              <li className='menu-item cursor-pointer mt-[-4px] mb-[-4px] ms-[-4px] uppercase'>year book</li><hr />
                              <li className='menu-item cursor-pointer ps-1 leading-none flex mt-[-4px] mb-[-4px] uppercase ms-[-4px]'>goenkan gazette</li>
                          </ul>
                        </AccordionDetails>
                     </Accordion>

                      {/* IN NEWS ACCORDIAN */}
                    <Accordion>
                       <AccordionSummary
                       aria-controls="panel2-content"
                       id="panel2-header"
                       className='uppercase'
                       >
                       in-news
                       </AccordionSummary>
                    </Accordion>
                     
                </div>
          
    </div>
     {/* NAVIGATION ENDS */}
        <TopScrollButton/>
        </header>
        
        
       

    
   

  )
}

export default Header1