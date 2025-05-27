import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import FirstPopupImage from '../assets/FirstPopupImg.jpg';
import PopupBanner from '../assets/PopupBanner.jpeg';

function ImagePopup() {
  const [stage, setStage] = useState(0); // 0 = hidden, 1 = first image, 2 = popup banner
  const [isClosing, setIsClosing] = useState(false);
  const [hasManuallyAdvanced, setHasManuallyAdvanced] = useState(false);
  const location = useLocation();

  const firstTimerRef = useRef(null);
  const secondTimerRef = useRef(null);

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      if (stage === 1) {
        // Go to second image
        clearTimeout(firstTimerRef.current);
        setHasManuallyAdvanced(true); // User manually advanced
        setStage(2);
      } else {
        // Fully close
        clearTimeout(secondTimerRef.current);
        setStage(0);
      }
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setStage(1);
      setHasManuallyAdvanced(false); // Reset manual flag

      // Auto transition to stage 2 after 10s if not manually closed
      firstTimerRef.current = setTimeout(() => {
        if (!hasManuallyAdvanced) {
          setStage(2);
        }

        // Auto-close after 20s of second image
        secondTimerRef.current = setTimeout(() => {
          setStage(0);
        }, 20000);
      }, 10000);
    } else {
      setStage(0);
    }

    // Cleanup on unmount or path change
    return () => {
      clearTimeout(firstTimerRef.current);
      clearTimeout(secondTimerRef.current);
    };
  }, [location.pathname]);

  if (stage === 0) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-[5000] flex items-center justify-center transition-opacity duration-300 ease-in-out ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative">
        <img
          src={stage === 1 ? FirstPopupImage : PopupBanner}
          alt="Popup"
          className="w-full max-w-2xl max-h-[90vh] rounded-lg shadow-lg"
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
