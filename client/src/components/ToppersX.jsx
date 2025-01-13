import React, { useState } from 'react';
import Banner from "../assets/beyond-banner.jpeg"; 
import { RxCross1 } from "react-icons/rx";

function ToppersX() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-[500] h-full flex flex-col items-center justify-center text-white px-4">
        {!showVideo ? (
          <button
            onClick={() => setShowVideo(true)}
            className="group flex flex-col items-center gap-4"
            aria-label="Play video"
          >
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-2xl md:text-3xl font-medium text-center ">
              Find yourself@GDGoenka
            </span>
          </button>
        ) : (
          <div className="fixed inset-0 flex items-center justify-center bg-black/75 z-50">
            <div className="w-full max-w-4xl mx-auto px-4">
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/SDEmj_UCFdM?si=7HNS_yCqg8G72V7t&autoplay=1"
                  title="GD Goenka School Aligarh"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute lg:-top-0 lg:-right-12 -top-10 right-0 md:-top-0 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                  aria-label="Close video"
                >
                  <RxCross1 className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ToppersX;

