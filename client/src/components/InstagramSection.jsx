import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaInstagram } from 'react-icons/fa';
import Reel from '../assets/Reel.JPG';
import Reel1 from '../assets/Reel1.JPG';
import Reel2 from '../assets/Family.jpg';
import Reel3 from '../assets/Janamashtmi.png';
import Reel4 from '../assets/MusicAndDance.jpg';

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 }, // Large screens
    tablet: { breakpoint: { max: 1024, min: 767 }, items: 2 },  // Medium screens
    mobile: { breakpoint: { max: 767, min: 0 }, items: 1 }      // Small screens
};

const reels = [
    { link: "https://www.instagram.com/reel/Cz_KgiRrOnI/", image: Reel },
    { link: "https://www.instagram.com/reel/C2_qxsfJcl8/", image: Reel1 },
    { link: "https://www.instagram.com/reel/CxaBCG4hJ5K/", image: Reel2 },
    { link: "https://www.instagram.com/reel/Cw6nPR3v2MU/", image: Reel3 },
    { link: "https://www.instagram.com/reel/CvZ-P3qAps7/", image: Reel4 }
];

function InstagramSection() {
    return (
        <div className="p-4 sm:p-6 w-full" >
            <h2 className="text-center text-xl sm:text-4xl font-bold mb-4">Follow Us on Instagram</h2>
            <Carousel
                responsive={responsive}
                infinite={true}
                arrows={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                className="relative max-w-[1280px] mx-auto "
            >
                {reels.map((reel, index) => (
                    <div 
                        key={index} 
                        className="relative group px-1 sm:px-2 h-[200px] sm:h-[300px] md:h-[350px] w-full overflow-hidden"
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
            </Carousel>
        </div>
    );
}

export default InstagramSection;
