import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const CommentSection = ({ blogId }) => {
  const [commentInfo, setCommentInfo] = useState({
    name: "",
    comment: "",
    email: "",
    website: "",
  });

  const [saveInfo, setSaveInfo] = useState(false);

  const inputHandler = (e) => {
    setCommentInfo({ ...commentInfo, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setSaveInfo(!saveInfo);
  };

  useEffect(() => {
    const savedUserInfo = localStorage.getItem("commentInfo");

    if (savedUserInfo) {
      const userInfo = JSON.parse(savedUserInfo);
      setCommentInfo(userInfo);
    }
  }, []);

  const commentHandler = async (e) => {
    e.preventDefault();

    if (commentInfo.name && commentInfo.comment && commentInfo.email) {
      if (saveInfo) {
        localStorage.setItem("commentInfo", JSON.stringify(commentInfo));
        console.log("User information saved in local storage.");
      }
      const res = await axios.post(
        `http://localhost:8080/blog/${blogId}/comments`,
        {
          user: commentInfo.name,
          email: commentInfo.email,
          website: commentInfo.website,
          text: commentInfo.comment,
        }
      );
      if (res.status === 201) {
        Swal.fire({
          text: "Comment Sent to Author for approval",
          icon: "success",
        });
        setCommentInfo({
          name: "",
          comment: "",
          email: "",
          website: "",
        });
      }
    } else {
      console.log("Please fill in all required fields.");
    }
  };

  return (
    <form onSubmit={commentHandler} className="leave-comments">
      <h3>Leave a Reply</h3>
      <textarea
        onChange={inputHandler}
        value={commentInfo.comment}
        name="comment"
        className="inputs"
        placeholder="Your comment here..."
        cols="39"
        rows="4"
      ></textarea>
      <div className="form-row">
        <input
          value={commentInfo.name}
          onChange={inputHandler}
          name="name"
          placeholder="Name (required)"
          type="text"
          className="inputs"
        />
        <input
          value={commentInfo.email}
          onChange={inputHandler}
          name="email"
          placeholder="Email (required)"
          type="text"
          className="inputs"
        />
        <input
          value={commentInfo.website}
          onChange={inputHandler}
          name="website"
          placeholder="Website"
          type="text"
          className="inputs"
        />
      </div>
      <div className="consent">
        <input
          type="checkbox"
          checked={saveInfo}
          onChange={handleCheckboxChange}
        />
        Save my name, email, and website in this browser for the next time I
        comment.
      </div>
      <div className="form-submit">
        <button type="submit">POST COMMENT</button>
      </div>
    </form>
  );
};

export default CommentSection;
