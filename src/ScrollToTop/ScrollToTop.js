import React, { useEffect, useState } from "react";
import './ScrollToTop.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
      
    <div >
      {isVisible && 
        <div onClick={scrollToTop}>
          {/* <img src='../../../Images/arrow.png' alt='Go to top' className="scroll"/> */}
          <FontAwesomeIcon icon={faArrowUp} className='scroll'/>
        </div>}
    </div>
  );
}
