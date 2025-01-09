import React, { useState, useEffect } from 'react';
import '../css/Preloader.css';

const texts = ["Welcome", "To", "GD Goenka Aligarh"];

const Preloader = () => {
  const [currentText, setCurrentText] = useState(texts[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % texts.length;
        setCurrentText(texts[newIndex]);
        return newIndex;
      });
    }, 1000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="preloader-container z-[6000] fixed inset-0 flex items-center justify-center bg-black">
      <div className="morphing-text text-white text-3xl">{currentText}</div>
    </div>
  );
};

export default Preloader;

