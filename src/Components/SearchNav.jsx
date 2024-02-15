import { IoCloseSharp } from "react-icons/io5";
const Search = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.8)",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: "1",
      }}
    >
      <IoCloseSharp />
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default Search;
