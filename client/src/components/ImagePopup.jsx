import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import PopupBanner from '../assets/PopupBanner.jpeg';

function ImagePopup() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setPopupVisible(false);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setPopupVisible(true);
      const timer = setTimeout(() => {
        closePopup();
      }, 20000);
      return () => clearTimeout(timer);
    } else {
      setPopupVisible(false);
    }
  }, [location.pathname]);

  if (!isPopupVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-[5000] flex items-center justify-center transition-opacity duration-300 ease-in-out ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        className={`relative w-full max-w-2xl bg-white rounded-lg p-4 transition-transform duration-500 ease-in-out transform ${
          isClosing ? 'scale-90' : 'scale-100'
        }`}
      >
        <img
          src={PopupBanner}
          alt="Popup"
          className="w-full rounded-lg shadow-lg"
        />
        <button
          className="absolute top-2 right-2 p-2 bg-gray-700 text-white rounded-full"
          onClick={closePopup}
          aria-label="Close Popup"
        >
          <RxCross1 />
        </button>
      </div>
    </div>
  );
}

export default ImagePopup;
