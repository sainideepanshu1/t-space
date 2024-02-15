import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SearchedBlogs from "../Components/SearchedBlogs";

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("title");
  const { blogs } = location.state || {};
  console.log(blogs, searchTerm);
  return (
    <>
      <div className="breadcrumb">
        <span>{`${blogs.length} Search Results Found`}</span>
        <div style={{ display: "flex" }}>
          <Link to="/">Home </Link>&gt;&gt;<div>{`You Searched for ${searchTerm}`}</div>
        </div>
      </div>
      <SearchedBlogs blogs={blogs} />
    </>
  );
};

export default SearchPage;
