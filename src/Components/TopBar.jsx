import { LuPhone } from "react-icons/lu";
import { IoMailOpen } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

import "../Style/TopBar.css";
const TopBar = () => {
  return (
    <>
      <div className="topbar-outer">
        <div className="topbar-inner">
          <div className="topbar-left">
            <div className="topbar-phone1">
              <LuPhone />
              <a href="tel:+917056359259">+91 7056359259</a>
            </div>
            <div className="topbar-phone1">
              <LuPhone />
              <a href="tel:+919817024516">+91 9817024516</a>
            </div>
            <div className="topbar-phone1">
              <IoMailOpen />
              <a href="mailto:info@trianglespace.in">info@trianglespace.in</a>
            </div>
          </div>
          <div className="topbar-right">
            <div className="right-icons">
              <a href="http://www.facebook.com/trianglespacelimited">
                <FaFacebook size="20px" />
              </a>
              <a href="http://www.instagram.com/trianglespacelimited">
                <FaInstagram size="20px" />
              </a>
              <a href="mailto:info@trianglespace.in">
                <FaEnvelope size="20px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
