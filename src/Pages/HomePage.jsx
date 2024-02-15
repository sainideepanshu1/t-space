import Blogs from "../Components/Blogs";
import ClientLove from "../Components/ClientLove";
import Contect from "../Components/Contect";
import Projects from "../Components/Projects";
import Servises from "../Components/Servises";
import WebsiteTrafice from "../Components/WebsiteTrafice";
import Work from "../Components/Work";
import Hero from "../Components/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Work />
      <WebsiteTrafice />
      <Servises />
      <Projects />
      <ClientLove />
      <Contect />
      <Blogs />
    </>
  );
};

export default HomePage;
