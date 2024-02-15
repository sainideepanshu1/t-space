import React from "react";
import { Our_work } from "../Data/Services_Data/Our_Work_data";

function OurWork() {
  return (
    <div className="Our_Work">
      <div className="Our_Work_top">
        <h1>Our Works</h1>
      </div>
      <div className="Our_Work_bottom">
        {Our_work.map((Product, index) => {
          return (
            <div className="Our_Work_bottom1" key={index}>
              <img alt="" src={Product.img} />
              <h2>{Product.name}</h2>
              <h3>{Product.name2}</h3>
              <div className="Our_Work_button">
                <button>{Product.button1}</button>
                <button>{Product.button2}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurWork;
