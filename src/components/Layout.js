import Features from "../pages/feature/Features";
import Header from "./header/Header";
import OurService from "../pages/service/OurService";
import OurProjects from "../pages/projects/OurProjects";
import OurTeam from "../pages/teamPages/OurTeam";
import Connect from "../pages/contact/Connect";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="bg-dark">
    
        <Header />
        <Features />
        <OurService />
        <OurProjects />
        <OurTeam />
             <Connect />
              <Footer />
    </div>
  );
};

export default Layout;
