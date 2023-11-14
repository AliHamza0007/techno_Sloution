import Navbar from "./Navbar";
import "./Header.css";

import headerIMG from "../../assets/img/HeaderIMG.png";
import { NavLink } from "react-router-dom";
const PlayBTN =
  "https://www.technology4hotels.com.au/wp-content/uploads/2018/05/lighting-btn-play-transparent-blue.png.pagespeed.ce_.mFZd8j2tkc-copy.png";
const Header = () => {
  return (
    <div className="bgImg">
      {/* <Navbar /> */}
      <div className="container py-5 ">
        <div className="row pt-5 ">
          <div className="col-md-6  d-inline-flex justify-content-center align-items-center text-start ">
            <div>
              <div className=" w-50 bgStyle ">
                <ul>
                  <li type="square">Welcome To Website</li>
                </ul>
              </div>
              <h1 className="text-light">Build beautiful</h1>
              <h1 className="text-light">
                <span className="colorOrange">website</span> & mobiles
              </h1>
              <h1 className="text-light">
                <span className="colorOrange">apps</span>.
              </h1>
              <p className="text-white">
                Create live segments and target the right people for messages
                based on their behaviors .Get Started
              </p>
              <div className="py-2 d-flex">
                <NavLink
                  className="text-decoration-none   p-2 px-4 btnOrange"
                  to="/contactUs"
                >
                  ContactUs
                </NavLink>
                <img
                  src={PlayBTN}
                  width={"30px"}
                  height={"22px"}
                  className="img img-fluid mx-5"
                  alt="PLayBTN"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={headerIMG}
              alt="HeaderIMG"
              className="img headerIMG img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
