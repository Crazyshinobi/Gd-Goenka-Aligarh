import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const PaymentFailure = () => {
  const containerRef = useRef(null);
  const messageRef = useRef(null);
  const buttonRef = useRef(null);
  const errorIconRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const message = messageRef.current;
    const button = buttonRef.current;
    const errorIcon = errorIconRef.current;
    const errorIconPath = errorIcon.querySelector("path"); // Get the <path> element

    // Ensure the path is available
    if (errorIconPath) {
      const pathLength = errorIconPath.getTotalLength(); // Get total length of the path

      // Start GSAP Timeline
      const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

      gsap.set(errorIconPath, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
        transformOrigin: "center",
      });

      tl.to(errorIconPath, {
        strokeDashoffset: 0,
        scale: 1.5,
        duration: 1.5,
      }).to(errorIconPath, {
        scale: 1,
        duration: 0.5,
        ease: "power1.inOut",
      });

      gsap.set([message, button], { autoAlpha: 0, y: 50 });

      tl.to(container, { backgroundColor: "#f44336", duration: 1 })
        .to(errorIcon, { autoAlpha: 1, y: 0, duration: 1 })
        .to(message, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=2")
        .to(button, { autoAlpha: 1, y: 0, duration: 0.3 }, "-=2");

      // Button Hover Animation
      gsap.fromTo(
        button,
        { scale: 1 },
        {
          scale: 1.1,
          repeat: -1,
          yoyo: true,
          duration: 0.9,
          ease: "power2.inOut",
        }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-r from-red-400 to-pink-500"
    >
      {/* Error Icon (Cross) */}
      <svg
        ref={errorIconRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-20 h-20 text-red-100 mb-4"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      {/* Failure Message */}
      <div
        ref={messageRef}
        className="text-center text-white font-bold text-4xl mb-4"
      >
        <h1>Payment Unsuccessful!</h1>
        <p className="text-xl">There was an issue with your transaction.</p>
      </div>

      {/* Retry Button */}
      <Link
        to="/user/dashboard"
        ref={buttonRef}
        className="bg-white text-red-500 font-bold py-3 px-8 rounded-full hover:bg-red-100 transition duration-300 transform hover:scale-110"
      >
        Retry Payment
      </Link>
    </div>
  );
};

export default PaymentFailure;
