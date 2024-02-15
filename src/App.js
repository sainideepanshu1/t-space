import "./App.css";
import Navbar from "./Components/Navbar";

// import './Style/Style.css'
import "../src/Style/Responsive.css";
import Fother from "./Components/Fother";
import Locations from "./Components/Location";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import PortfolioPage from "./Pages/PortfolioPage";
import ContactUsPage from "./Pages/ContactUsPage";
import BlogPage from "./Pages/BlogPage";
import TopBar from "./Components/TopBar";
import SingleBlog from "./Components/SingleBlog";
import SearchPage from "./Pages/SearchPage";
import TermAndCondi from "../src/Components/TermAndCondi";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/search-results" element={<SearchPage />} />
        <Route path="/blog/:blogId" element={<SingleBlog />} />
        <Route path="/terms-and-conditions" element={<TermAndCondi />} />
      </Routes>
      <Locations />
      <Fother />
    </>
  );
}

export default App;
