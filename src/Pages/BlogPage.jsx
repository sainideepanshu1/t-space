import React from "react";
import BlogsVisa from "../Components/BlogsVisa";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <>
      <div className="breadcrumb">
        <span>Blog</span>
        <div style={{display:"flex"}}>
          <Link to="/">Home </Link>&gt;&gt;<div>Blog</div>
        </div>
      </div>
      <BlogsVisa />
    </>
  );
};

export default BlogPage;
