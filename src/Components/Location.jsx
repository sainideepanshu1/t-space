import React from "react";
import { CgMail } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

import { IoCall } from "react-icons/io5";
import { Location_Data1 } from "../Data/Location_Data";
import { Link } from "react-router-dom";

function Location() {
  return (
    <div className="Location">
      <div className="Location1">
        {Location_Data1.map((product, index) => {
          return (
            <div className="Location2" key={index}>
              <div className="Location_Detail">
                <div className="Location_Detail1">
                  <img src={product.logo} alt="" />
                </div>
                <div className="Location_Detail2">
                  <h1>{product.Adress}</h1>
                </div>

                <div className="Location_Detai3">
                  <span>
                    <IoCall />
                  </span>
                  <span>{product.call}</span>
                </div>
                <div className="Location_Detai3">
                  <span>
                    <IoCall />
                  </span>
                  <span>{product.call}</span>
                </div>

                <div className="Location_Detai4">
                  <span>
                    <a
                      rel="noopener noreferrer"
                      href="mailto:info@trianglespace.in"
                      target="_blank"
                    >
                      <CgMail />
                    </a>
                  </span>
                  <h2>
                    {" "}
                    <a
                      rel="noopener noreferrer"
                      href="mailto:info@trianglespace.in"
                      target="_blank"
                    >
                      {product.gmail}
                    </a>
                  </h2>
                </div>

                <div className="Location_Detai5">
                  <span>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/trianglespacelimited"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </a>
                  </span>
                  <span>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/trianglespacelimited/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                  </span>
                  <span>
                    <a
                      rel="noopener noreferrer"
                      href="mailto:info@trianglespace.in"
                      target="_blank"
                    >
                      <CgMail />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="fother_Nav">
        <h1>Useful Links</h1>
        <ul>
          <li>
            <Link
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              to="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              to="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          {/* <li>
            <Link to="/">Terms and Conditions</Link>
          </li> */}
           <li>
            <Link
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              to="/terms-and-conditions"
            >
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/">Return and Refund Policy</Link>
          </li>
        </ul>
      </div>

      <div className="fother_SubScribe">
        <h1>Subscribe Now</h1>
        <p>Don’t miss our future updates! Get Subscribed Today!</p>

        <div className="fother_Email">
          <h3>
            Email Address <span>*</span>
          </h3>
          <input type="email" placeholder="E.g.john@doe.com" />
          <div>
            <button>Subscrible</button>
          </div>
        </div>
      </div>

      <div className="Fother_map">
        <h1>Locate Us</h1>
        <div className="Fother_map1">
          <div>
            <iframe
              width="100%"
              height="300"
              title="map"
              src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Triangle%20space%20private%20limited%20Sector%2014%20Part%20%E2%80%93%202,%20Hisar,%20Haryana%20%E2%80%93%20125001+(Triangle%20space%20private%20limited)&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a
                rel="noopener noreferrer"
                href="https://www.maps.ie/population/"
              >
                Population Estimator map
              </a>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
