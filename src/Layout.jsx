import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Fother from "./Components/Fother";
import Location from "./Components/Location";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Location />
      <Fother />
    </div>
  );
}

export default Layout;
