import React from "react";
import { WorkData } from "../Data/Work_Data";
import { WorkData2 } from "../Data/Work_Data";

function Work() {
  return (
    <div className="Works ">
      <div className="Work ">
        {WorkData.map((product, index) => {
          return (
            <div key={index} className="Work_Top">
              <h1>{product.h1}</h1>
              <p>
                Triangle Space Pvt. Ltd. provides comprehensive IT solutions and
                services including<span> Web Designing & Development,</span>{" "}
                Website Maintenance,
                <span>
                  Mobile Application Design & Development, Search engine
                  Optimization,{" "}
                </span>
                E-commerce solutions, Google AdWords & PPC (Pay per click),
                website Promotion, ERP Software, Domain & Hosting, and software
                development.{" "}
              </p>
              <h2>{product.h2}</h2>
            </div>
          );
        })}
      </div>

      <div className="Work_fother">
        {WorkData2.map((product, index) => {
          return (
            <div key={index} className="Work_fother_1">
              <img src={product.img} alt="" />
              <h3>{product.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
