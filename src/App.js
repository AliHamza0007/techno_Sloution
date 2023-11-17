import "./App.css";
import Features from "./pages/feature/Features";
import OurTeam from "./pages/teamPages/OurTeam";
import Connect from "./pages/contact/Connect";
import OurService from "./pages/service/OurService";
import OurProjects from "./pages/projects/OurProjects";
import Footer from "./components/Footer";
import { Element, Link } from "react-scroll";
import Header from "./components/header/Header";
import { RiArrowUpDoubleLine } from "react-icons/ri";

const App = () => {
  return (
    <>
      <div className="bg-dark ">
        <Element name="header">
          <Header />
        </Element>
        <Element name="feature">
          <Features />
        </Element>
        <Element name="service">
          <OurService />
        </Element>
        <Element name="projects">
          <OurProjects />
        </Element>
        <Element name="team">
          <OurTeam />
        </Element>
        <Element name="contactUs">
          <Connect />
        </Element>
        <Element name="footer">
          <Footer />
        </Element>
        <Link to="header" smooth={true} duration={700}>
          <RiArrowUpDoubleLine
            size={"30px"}
            className="text-white bgPurple scroll-to-top-button"
          />
        </Link>{" "}
      </div>
    </>
  );
};
export default App;
