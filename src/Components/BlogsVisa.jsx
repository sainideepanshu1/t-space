import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import BlogsRight from "./BlogsRight";


function BlogsVisa() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  
  async function fetchPosts() {
    try {
      const res = await axios.get("http://localhost:8080/blog/getAllPosts");
      setPosts(res.data.posts);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="Blogs_Visa">
      <div className="Blogs_Visa_1">
        {posts.map((post, index) => {
          return (
            <Post post={post} key={index} />
          );
        })}
      </div>
      <BlogsRight />
    </div>
  );
}

export default BlogsVisa;
