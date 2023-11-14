import "./Connect.css";
import { AiOutlineMail } from "react-icons/ai";
const Connect = () => {
  return (
    <div className="  backBG py-5 ">
      <div className=" position-relative ">
        <AiOutlineMail size={"75px"} className="EmailIconSet" />
      </div>
      <div className="container">
        <div className="row p-5 frontBG justify-content-center align-items-center">
          <div className="col-md-6 col-12 text-white mb-2">
            <h2> News Letter to connect our service in your area</h2>{" "}
          </div>
          <div className="col-md-6 col-12">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Enter your Email"
                aria-label="Search"
              />
              <button
                className="btn m-0 btnOrange text-uppercase"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
