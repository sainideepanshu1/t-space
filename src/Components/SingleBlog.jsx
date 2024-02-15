import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../Style/SingleBlog.css";
import BlogsRight from "./BlogsRight";
import { CiUser } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import { GoComment } from "react-icons/go";
import { FaGreaterThan } from "react-icons/fa";
import CommentSection from "./CommentSection";

const SingleBlog = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await axios.get(`http://localhost:8080/blog/${blogId}`);
        setBlog(res.data.post);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError("Error fetching blog. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [blogId]); // Include blogId as a dependency

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className="breadcrumb">
        <span>Blog</span>
        <div style={{ display: "flex" }}>
          <Link
            className="breadcrumb-bar"
            style={{ fontSize: "13px", fontFamily: '"Open Sans",sans serif' }}
            to="/"
          >
            Home
          </Link>
          &gt;&gt;
          <Link
            className="breadcrumb-bar"
            style={{ fontSize: "13px", fontFamily: '"Open Sans",sans serif' }}
            to="/blogs"
          >
            Blog
          </Link>
          &gt;&gt;
          <div
            className="breadcrumb-bar"
            style={{ fontSize: "13px", fontFamily: '"Open Sans",sans serif' }}
          >
            {blog.title.length > 100
              ? blog.title.substring(0, 50) + "..."
              : blog.title}
          </div>
        </div>
      </div>
      <div className="blog-container">
        <div className="blog-left">
          <h2 className="blog-heading">{blog.title}</h2>
          <ul className="blog-details">
            <li className="after">
              <CiUser />
              <Link className="breadcrumb-bar">{blog.author}</Link>
            </li>
            <li className="after">
              <CiClock1 />
              <div className="breadcrumb-bar">
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </div>
            </li>
            <li className="after">
              <CiFolderOn />
              <Link className="breadcrumb-bar">{blog.category}</Link>
            </li>
            <li>
              <GoComment />
              <Link className="breadcrumb-bar">
                {blog.comments.length} Comments
              </Link>
            </li>
          </ul>
          <hr />
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
          <div className="blog-similar">
            <div className="blogs-similar-heading">
              <FaGreaterThan color="red" />
              <span className="similar-text">you might also like</span>
            </div>
            <div className="blogs-similar">
              <article className="article">
                <h3 className="article-heading">
                  Visa Free Countries for Indians to Travel in 2023 raftaar
                </h3>
                <div className="article-date">
                  <CiClock1 />
                  July 28, 2023
                </div>
              </article>
            </div>
          </div>
          <CommentSection blogId={blog._id} />
        </div>
        <BlogsRight />
      </div>
    </>
  );
};

export default SingleBlog;
