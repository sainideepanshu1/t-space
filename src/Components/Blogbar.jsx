import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
function Blogbar() {
  return (
    <div className="flex justify-between align-middle py-[30px] px-[20px] bg-[#f5f5f5] md:px-[80px]">
      <div className="">
        <h1 className="text-[#fe0000] text-[22px]">Blog</h1>
      </div>
      <div className="flex gap-[6px]  justify-center align-middle text-[12px]">
        <Link to="/Home" className="hover:text-[#fe0000]">
          <h2>Home</h2>
        </Link>
        <span className="py-[4px]">
          <FaAngleDoubleRight />
        </span>
        <h3>Blog</h3>
      </div>
    </div>
  );
}

export default Blogbar;
