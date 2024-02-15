import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchForm = ({ setSearchToggle }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      console.log("Searching for:", searchTerm);
      const res = await axios.get(
        `http://localhost:8080/blog/searchByTitle?title=${searchTerm}`
      );

      if (res.status === 200) {
        navigate(`/search-results?title=${searchTerm}`, {
          state: { blogs: res.data.blogs },
        });
        setSearchToggle();
      }
    } catch (error) {
      console.error("Error searching for blogs:", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "50%",
          alignItems: "center",
        }}
      >
        <button onClick={setSearchToggle} className="searchbutton">
          <IoCloseSharp size={30} />
        </button>
        <input
          className="search-input"
          type="text"
          placeholder="TYPE THEN HIT ENTER TO SEARCH..."
          style={{ textAlign: "center" }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};

export default SearchForm;
