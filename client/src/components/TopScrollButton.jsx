import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa6";

function TopScrollButton() {
    const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const calculatedProgress = (scrollTop / scrollHeight) * 100

      setProgress(calculatedProgress)
      setIsVisible(scrollTop > 300)
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-1  z-[10000]">
        <div
          className="h-[1.4px] bg-red-600 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>

      {/* Circular Scroll-to-Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 h-14 w-14 bg-white rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <svg className="h-14 w-14 absolute top-0 left-0" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="red"
              strokeWidth="4"
              strokeDasharray={`${progress * 2.83}, 283`}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-bold">
          <FaArrowUp />
          </span>
        </button>
      )}
   </div>
  )
}

export default TopScrollButton