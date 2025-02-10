import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  const containerRef = useRef(null);
  const messageRef = useRef(null);
  const buttonRef = useRef(null);
  const checkmarkRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const message = messageRef.current;
    const button = buttonRef.current;
    const checkmark = checkmarkRef.current;
    const checkmarkPath = checkmark.querySelector("path");

    if (checkmarkPath) {
      const pathLength = checkmarkPath.getTotalLength();

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#f9d56e", "#ff8e72"];

      for (let i = 0; i < 150; i++) {
        const confetti = document.createElement("div");
        confetti.className = "absolute w-3 h-3 rounded-full";
        confetti.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(confetti);

        gsap.set(confetti, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight * 0.5 - 100,
          scale: Math.random() * 1 + 0.5,
          autoAlpha: 0,
          zIndex: 10,
        });

        gsap.to(confetti, {
          x: `+=${Math.random() * 200 - 100}px`,
          y: window.innerHeight + 20,
          rotation: Math.random() * 360,
          scale: Math.random() * 0.5 + 0.5,
          autoAlpha: 1,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2,
          ease: "power1.out",
          onComplete: () => container.removeChild(confetti),
        });
      }

      gsap.set(checkmarkPath, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      tl.to(checkmarkPath, { strokeDashoffset: 0, duration: 1.5 }).to(message, {
        autoAlpha: 1,
        y: 0,
        duration: 1,
      });

      gsap.set([message, button], { autoAlpha: 0, y: 50 });

      tl.to(container, { backgroundColor: "#4ade80", duration: 1 })
        .to(message, { autoAlpha: 1, y: 0, duration: 1 })
        .to(button, { autoAlpha: 1, y: 0, duration: 0.1 }, "-=2");

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
      className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-r from-blue-300 to-purple-400"
    >
      <svg
        ref={checkmarkRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-20 h-20 text-green-300 mb-4"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          d="M3 12l5 5L20 7"
        />
      </svg>

      <div
        ref={messageRef}
        className="text-center text-white font-bold text-4xl mb-4"
      >
        <h1>Payment Successful!</h1>
        <p className="text-xl">Your transaction has been completed.</p>
      </div>

      <Link
        to="/user/dashboard"
        className="bg-white text-green-500 font-bold py-3 px-8 rounded-full hover:bg-green-100 transition duration-300 transform hover:scale-110"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default PaymentSuccess;
