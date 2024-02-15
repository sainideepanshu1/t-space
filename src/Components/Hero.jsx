import { Hero_Data } from "../Data/Hero_Data";
import React from "react";
import { Hero_Video } from "../Data/Hero_Data";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div>
      <section className="main-section">
        <div className="arrow-animation">
          <div className="main-left">
            {Hero_Data.map((Product, index) => {
              return (
                <div className="Main-left_1" key={index}>
                  <h1>{Product.h1}</h1>
                  <h2>{Product.h2}</h2>
                  <div className="main-left-btn">
                    <Link to="/contact-us">
                      <button>{Product.button}</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="main-right">
            {" "}
            {Hero_Video.map((Product, index) => {
              return (
                <div className="main-righ_1" key={index}>
                  <video autoPlay loop muted playsInline>
                    <source src={Product.video} type="video/mp4" />
                  </video>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
