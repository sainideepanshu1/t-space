import React from "react";
import { Link } from "react-router-dom";

function Fother() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLinkClick = () => {
    scrollToTop();
  };

  return (
    <div className="Fother">
      <div className="Fothers">
        <h2>Copyright © 2024. Triangle Space Pvt. Ltd.</h2>
      </div>

      <div className="Fothers_2">
        <ul>
          <li>
            <Link to="/" onClick={() => handleLinkClick()}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={() => handleLinkClick()}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => handleLinkClick()}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact-us" onClick={() => handleLinkClick()}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Fother;
