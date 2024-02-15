import React from "react";
import { Projectdata } from "../Data/Project_data";
import { Project_card } from "../Data/Project_data";
function Projects() {
  return (
    <div className="Project">
      <div className="Project_top">
        {Projectdata.map((product, index) => {
          return (
            <div className="product_top1" key={index}>
              <h2>{product.name}</h2>
              <h3>{product.name2}</h3>
            </div>
          );
        })}
      </div>

      <div className="Projet_bottom">
        {Project_card.map((product, index) => {
          return (
            <div className="project_bottom1" key={index}>
              <img src={product.img} alt="" />
              <h2>{product.name}</h2>
              <h3>{product.name2}</h3>
              <div className="project_bottom1_button">
                <a href="https://www.godaddy.com" target="_black">
                  <button>{product.button1}</button>
                </a>
                <button>{product.button2}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
