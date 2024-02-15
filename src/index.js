// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// // import App from './App';
// // import { BrowserRouter } from 'react-router-dom';
// // import reportWebVitals from './reportWebVitals';
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import Layout from "./Layout";
// import Services from "./Components/ServicesNavbar";
// // import Portfolio_Navbar from './Components/Portfolio_Navbar';
// import PortfolioNavbar from "./Components/PortfolioNavbar";
// import ContectNavbar from "./Components/ContectNavbar";
// import About from "./Components/About";

// import Home from "./Components/Home";
// import BlogsNavbar from './Components/BlogsNavbar'
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="/home" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/services" element={<Services />} />
//       <Route path="/portfolio" element={<PortfolioNavbar />} />
//       <Route path="/contact-us" element={<ContectNavbar />} />
//       <Route path="/blogs" element={<BlogsNavbar />} />
//     </Route>
//   )
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
