import Navbar from "./Navbar";
import "./Header.css";
import headerIMG from "../../assets/img/HeaderIMG.png";
// import PlayBtn from "../../assets/icons/Component 4 GÇô 2.png";
import bullet from "../../assets/icons/Component 5 GÇô 3.png";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <div className="bgImg">
      <Navbar />
      <div className="container px-2 py-5 ">
        <div className="row pt-5 ">
          <div className="col-md-7  d-inline-flex justify-content-center align-items-center text-start ">
            <div>
              <div className="bgStyle d-inline py-1 justify-content-center align-items-center">
                <img
                  src={bullet}
                  className="img img-fluid mx-3 py-2 "
                  alt="Square"
                />
                <b> Welcome To Website</b>
              </div>
              <h1 className="text-light fontBigger pt-5">Build beautiful</h1>
              <h1 className="text-light fontBigger">
                <span className="colorOrange">website</span> & mobiles
              </h1>
              <h1 className="text-light fontBigger">
                <span className="colorOrange">apps</span>.
              </h1>
              <p className="text-white">
                Create live segments and target the right people for messages
                based on their behaviors. Get Started
              </p>
              <ul className=" nav  align-items-center ">
                <li className="nav-item">
                  <Link
                    smooth={true}
                    offset={-100}
                    duration={100}
                    className="nav-link btnContact  "
                    to="footer"
                  >
                    <b>ContactUs</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth={true}
                    offset={-100}
                    duration={100}
                    className="nav-link "
                    to="footer"
                  >
                    <FaPlayCircle
                      size="50px"
                      className="img playBtn img-fluid margin-left"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5">
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
