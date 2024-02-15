import React from "react";
import { technology_data2 } from "../Data/technology_data";
import { technology_data1 } from "../Data/technology_data";
function Technology() {
  return (
    <div className="technology">
      <div className="technology_top">
        {technology_data1.map((products, index) => {
          return <h1 key={index}>{products.name}</h1>;
        })}
      </div>

      <div className="technology_bottom">
        {technology_data2.map((products, index) => {
          return (
            <div className="technology_bottom1" key={index}>
              <img src={products.img} alt="" />
              <h3>{products.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Technology;
