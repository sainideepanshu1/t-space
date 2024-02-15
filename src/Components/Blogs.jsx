import React from "react";
import { Blogs_bottom } from "../Data/Blogs_Data";
import { Blogs_top } from "../Data/Blogs_Data";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
function Blogs() {
  return (
    <div className="Blogs">
      <div className="Blogs_top">
        {Blogs_top.map((product, index) => {
          return (
            <div key={index} className="Blogs_top1">
              <h2>{product.header}</h2>
              <h3>{product.header2}</h3>
            </div>
          );
        })}
      </div>

      <div className="Blogs_bottom">
        {Blogs_bottom.map((product, index) => {
          return (
            <div key={index} className="Blogs_bottom1">
              <Link to={`/blog/${product.link}`}>
                <img className="eyes_image" src={product.img} alt="blog" />
              </Link>
              <div className="eyes">
                <IoEyeSharp />
              </div>

              <Link to={`/blog/${product.link}`}>
                <h2>{product.h2}</h2>
              </Link>
              <p>{product.p}</p>
              <h3>{product.Read}</h3>
              <div className="Blogs_bottom2">
                <img src={product.img2} alt="blog" />
                <p>{product.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
