import React from "react";
import BlogsRight from "./BlogsRight";
import Post from "./Post";

const SearchedBlogs = ({ blogs }) => {
  return (
    <div className="Blogs_Visa">
      {blogs.length > 0 ? (
        <>
          <div className="Blogs_Visa_1">
            {blogs.map((post, index) => (
              <Post post={post} key={index} />
            ))}
          </div>
          <BlogsRight />
        </>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchedBlogs;
