import "./Footer.css";
import { RiArrowUpDoubleLine } from "react-icons/ri";
import { LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu";
import { AiFillSkype } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="bgFooter">
      <div className="container">
        <div className="row   py-4 ">
          <div className="col-md-4 col-12 py-5">
            <h2>
              <i>TechnoSolution</i>
            </h2>
            <p>
              With over $2 Billion in sales , Our agency is the industry's top
              luxury producer with over 27 years of experience in making
              Seattles's most prestigious waterfront properties.
            </p>
            <h6>info@websites.com</h6>
            <h6>
              <b>Call</b> +9212345678
            </h6>
            <h6>West st,45 -counter Park La,USA</h6>
          </div>
          <div className="col-md-2 col-12 ">
            <h4 className="  py-3 navigationBorder ">Navigation</h4>
            <ul className="navbar-nav text-white">
              <li className="nav-item">
                <NavLink
                  to="/homeOne"
                  className="nav-link  text-white border-bottom border-secondary"
                >
                  <h6 className="text-white">Home One</h6>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/propertiesRight"
                  className="nav-link  text-white border-bottom border-secondary"
                >
                  <h6 className="text-white">Properties Right</h6>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/propertiesLeft"
                  className="nav-link  text-white border-bottom border-secondary"
                >
                  <h6 className="text-white">Properties Left</h6>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/propertyDetails"
                  className="nav-link  text-white border-bottom border-secondary"
                >
                  <h6 className="text-white">Property Details</h6>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/agentsListing"
                  className="nav-link  text-white border-bottom border-secondary"
                >
                  <h6 className="text-white">Agents Listing</h6>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-12 ">
            <h4 className="  py-3 navigationBorder ">Detail</h4>
            <ul className="navbar-nav text-white">
              <li className="nav-item">
                <NavLink
                  to="/agentDetail"
                  className="nav-link  text-white border-bottom border-secondary"
                >
                  <h6 className="text-white">Agent Detail</h6>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/aboutUs"
                  className="nav-link  text-white border-bottom border-secondary"
                >
                  <h6 className="text-white">About Us</h6>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/blogDefault"
                  className="nav-link  text-white border-bottom border-secondary"
                >
                  <h6 className="text-white">Blog Default </h6>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/blogDetails"
                  className="nav-link  text-white border-bottom border-secondary"
                >
                  <h6 className="text-white">Blog Details</h6>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contactUs"
                  className="nav-link  text-white border-bottom border-secondary"
                >
                  <h6 className="text-white">Conatct Us</h6>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-12   px-2">
            <h4 className="  py-3 navigationBorder ">NewsLetter</h4>

            <p className="py-3">
              Sign Up for Our Newsletter to get Latest Updates and
              offers.Subscribe to receive newsin your inbox.
            </p>
            <div className="form d-flex py-4">
              <input
                value="Enter Your Email"
                className=" bgFooter border py-2 p-2 text-white"
              />
              <button className="text-uppercase bgPurple btn px-2 text-white ">
                <b> SubScribe</b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footerblack py-1 text-center justify-items-center">
        <h6>2022 Copyright-All Rights Reserved.</h6>
        <div>
          <ul className="nav text-center justify-content-center align-items-center ">
            <li className="nav-item">
              <NavLink>
                <LuFacebook size={"15px"} className="text-white" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink>
                <LuInstagram size={"15px"} className="text-white" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink>
                <LuTwitter size={"15px"} className="text-white" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink>
                <AiFillSkype size={"15px"} className="text-white" />
              </NavLink>
            </li>
            <li className="nav-item">
              <Link to="header" smooth={true} duration={700}>
                <RiArrowUpDoubleLine
                  size={"20px"}
                  className="text-white bgPurple"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
