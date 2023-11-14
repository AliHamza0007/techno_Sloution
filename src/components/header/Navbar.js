import "./Navbar.css";
import logo from "../../assets/logo/logo.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
export default function Navbar() {
  return (
    <div className="container ">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="header">
            <img
              src={logo}
              alt="TECHNO_SOLUTION"
              className="img logo img-fluid"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav text-center m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className="nav-link active"
                  aria-current="page"
                  to="header"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className="nav-link"
                  to="feature"
                >
                  Feature
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className="nav-link"
                  to="service"
                >
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className="nav-link"
                  to="projects"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className="nav-link"
                  to="team"
                >
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className="nav-link"
                  to="contactUs"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item  ">
                <Link
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className="nav-link btnOrange px-3"
                  to="footer"
                >
                  <b>ContactUs</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
