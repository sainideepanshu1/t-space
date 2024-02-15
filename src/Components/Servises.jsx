import React from "react";
import { Servies } from "../Data/Servise";
import { Service_right } from "../Data/Servise";
import { Service_left } from "../Data/Servise";
import { Service_bottom1 } from "../Data/Servise";
import { Service_bottom2 } from "../Data/Servise";

function Servises() {
  return (
    <div className="Servises ">
      <div className="Servises_top ">
        <div className="Servises_top_left">
          {Servies.map((product, index) => {
            return (
              <div className="Servises_top_left_img" key={index}>
                <img src={product.img} alt="" />
              </div>
            );
          })}
        </div>

        <div className="Servises_top_right">
          {Service_right.map((product, index) => {
            return (
              <div className="Servises_top_right_text" key={index}>
                <h3>{product.h3}</h3>
                <h1>{product.h1}</h1>
                <div className="Servises_top_right_hr">
                  <hr></hr>
                </div>
              </div>
            );
          })}

          <div className="Servises_top_right_1">
            {Service_left.map((product, index) => {
              return (
                <div className="Servises_top_right_2" key={index}>
                  <img src={product.img} alt="" />
                  <h1>{product.h1}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="Servies_bottom">
        <div className="Servies_bottom1">
          {Service_bottom1.map((product, index) => {
            return (
              <div className="Servies_bottom_1" key={index}>
                <h1>{product.h1}</h1>
                <h3>{product.p}</h3>
              </div>
            );
          })}
        </div>

        <div className="Servies_bottom_2">
          {Service_bottom2.map((product, index) => {
            return (
              <div className="Servies_bottom_3" key={index}>
                <img src={product.img} alt="" />
                <h1>{product.h1}</h1>
                <p>{product.p}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Servises;
