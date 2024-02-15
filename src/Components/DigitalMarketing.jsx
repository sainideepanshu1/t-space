import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Digital_market } from "../Data/Services_Data/Digital_mar_Data";
import { Digital_market_img } from "../Data/Services_Data/Digital_mar_Data";
import { Digital_Catagary } from "../Data/Services_Data/Digital_mar_Data";
import { Catagary_Digital } from "../Data/Services_Data/Digital_mar_Data";

function DigitalMarketing() {
  return (
    <div className="Web_Dev">
      <div className="Web_Dev_full">
        <div className="Web_Dev1">
          <div className="">
            {Digital_market.map((product, index) => {
              return (
                <div key={index} className="Web_Dev2">
                  <h1>{product.heading}</h1>
                  <h2>{product.name}</h2>
                  <div className="Web_Dev3">
                    <span>
                      <FaCheck />
                    </span>
                    <h3>{product.h1}</h3>
                  </div>
                  <div className="Web_Dev3">
                    <span>
                      <FaCheck />
                    </span>
                    <h3>{product.h2}</h3>
                  </div>
                  <div className="Web_Dev3">
                    <span>
                      <FaCheck />
                    </span>
                    <h3>{product.h3}</h3>
                  </div>
                  <div className="Web_Dev3">
                    <span>
                      <FaCheck />
                    </span>
                    <h3>{product.h4}</h3>
                  </div>

                  <div className="Web_Dev_button">
                    <Link>
                      <button>Book Consultation </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            {Digital_market_img.map((product, index) => {
              return (
                <div className="web_dev_img" key={index}>
                  <img src={product.img} alt="" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="Web_dev_bottom">
          <div className="Web_dev_bottom2">
            {Digital_Catagary.map((product, index) => {
              return (
                <div key={index}>
                  <h1>{product.heading}</h1>
                  <p>{product.p}</p>
                </div>
              );
            })}
          </div>

          <div className="Web_dev_bottom3">
            {Catagary_Digital.map((product, index) => {
              return (
                <div className="Web_dev_bottom4" key={index}>
                  <i>{product.img}</i>
                  <h1>{product.h1}</h1>
                  <p>{product.p}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalMarketing;
