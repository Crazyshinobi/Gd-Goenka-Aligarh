import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import framer-motion
import Reel from '../assets/Reel.JPG';
import Reel1 from '../assets/Reel1.JPG';
import Reel2 from '../assets/Family.jpg';
import Reel3 from '../assets/Janamashtmi.png';
import Reel4 from '../assets/MusicAndDance.jpg';
import bg1 from '../assets/bg2.jpg';


const reels = [
  { link: "https://www.instagram.com/reel/Cz_KgiRrOnI/", image: Reel },
  { link: "https://www.instagram.com/reel/C2_qxsfJcl8/", image: Reel1 },
  { link: "https://www.instagram.com/reel/CxaBCG4hJ5K/", image: Reel2 },
  { link: "https://www.instagram.com/reel/Cw6nPR3v2MU/", image: Reel3 },
  { link: "https://www.instagram.com/reel/CvZ-P3qAps7/", image: Reel4 }
];

const InstagramSection = () => {
  return (
    <div className="p-4 sm:p-6 w-full " style={{backgroundImage : `url(${bg1})`}}>
      <h2 className="text-center text-xl sm:text-4xl font-bold mb-4">Follow us on Instagram</h2>
      <div className="relative overflow-hidden w-full">
        {/* Scrolling Container */}
        <motion.div
          className="flex space-x-4"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-60%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {/* Duplicate Reels for Infinite Scroll */}
          {[...reels, ...reels].map((reel, index) => (
            <div
              key={index}
              className="relative group px-2 h-[200px] sm:h-[300px] md:h-[350px] w-[250px] flex-shrink-0"
            >
              <a
                href={reel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                {/* Image */}
                <img
                  src={reel.image}
                  alt={`Instagram Reel ${index + 1}`}
                  className="rounded-lg shadow-lg w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaInstagram className="text-white text-3xl sm:text-4xl md:text-5xl" />
                </div>
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InstagramSection;
