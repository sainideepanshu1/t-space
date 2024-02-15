import { Link } from "react-router-dom";
import { Blogs_Visa1 } from "../Data/Blogs_Visa_Data";
import { IoPersonOutline } from "react-icons/io5";
import { CiClock2, CiFolderOn } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import DOMPurify from "dompurify";

const truncateTextWithEllipsis = (text) => {
  return text.length > 100 ? `${text.substring(0, 175)}...` : text;
};

const addSpacesBetweenTags = (element) => {
  const result = [];
  for (const node of element.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      result.push(node.textContent);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      result.push(addSpacesBetweenTags(node));
    }
  }
  return result.join(" ");
};

const processBlogContent = (blogContent) => {
  const sanitizedHtml = DOMPurify.sanitize(blogContent, { RETURN_DOM: true });
  const spacedHtml = addSpacesBetweenTags(sanitizedHtml);
  const plainText = new DOMParser().parseFromString(spacedHtml, "text/html")
    .body.textContent;
  const truncatedText = truncateTextWithEllipsis(plainText);
  return truncatedText;
};

const Post = ({ post }) => {
  return (
    <div className="Blogs_Visa_left">
      {post.image && (
        <Link className="blog-thumbnail-hover" to={`/blog/${post._id}`}>
          <img
            className="blog-thumbnail"
            src={`http://localhost:8080/uploads/${post.image}`}
            alt="Blog Thumbnail"
          />
          <span className="overlay"></span>
        </Link>
      )}
      <Link to={`/blog/${post._id}`}>
        <h1>{post.title}</h1>
      </Link>
      <div className="Blogs_Visa_2">
        <div className="Blogs_Visa1">
          <span>
            <IoPersonOutline />
          </span>
          <h2>{post.author}</h2>
        </div>
        <div className="Blogs_Visa1">
          <span>
            <CiClock2 />
          </span>
          <h2>
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </h2>
        </div>
        <div className="Blogs_Visa1">
          <span>
            <CiFolderOn />
          </span>
          <h2>{post.category}</h2>
        </div>
        <div className="Blogs_Visa1">
          <span>
            <FaRegComment />
          </span>
          <h2>{Blogs_Visa1[0].Comment_name}</h2>
        </div>
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html: processBlogContent(post.content),
        }}
      ></div>
      <div style={{ cursor: "pointer" }} className="Blogs_Visa_button">
        <Link
          to={`/blog/${post._id}`}
          style={{ display: "flex", alignItems: "center" }}
        >
          <button>Continue Reading</button>
          <span>
            <IoIosArrowForward />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Post;
