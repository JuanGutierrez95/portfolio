import Image from "next/image";
import React, { useEffect, useState } from "react";
import { flecha } from "../public/assets";

const ScrollToTopButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const handleButtonClick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
        <div className="fixed bottom-4 right-7">
          <button
            className="p-2 rounded-full text-sm"
            onClick={handleButtonClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`flex items-center justify-center w-10 h-10 animate-bounce-slow ${
                isHovered ? 'filter brightness-100' : 'filter brightness-75'
              } transition-filter duration-300`}
            >
              <Image src={flecha} alt="flecha" />
            </div>
          </button>
        </div>
      );
  };

export default ScrollToTopButton;
