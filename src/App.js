import Layout from "./components/Layout";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Features from "./pages/feature/Features";
import OurTeam from "./pages/teamPages/OurTeam";
import Connect from "./pages/contact/Connect";
import OurService from "./pages/service/OurService";
import OurProjects from "./pages/projects/OurProjects";
import Footer from "./components/Footer";
import { Element } from "react-scroll";
import Header from "./components/header/Header";
const App = () => {
  return (
    <>
      {/* <Layout /> */}
      <Navbar />
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
      </div>
    </>
  );
};
export default App;
