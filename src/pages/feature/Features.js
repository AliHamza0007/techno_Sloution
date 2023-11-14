import "./Feature.css";
import { LuNetwork } from "react-icons/lu";
const img1 =
  "https://media.istockphoto.com/id/1311040120/photo/young-woman-at-home-in-the-kitchen-drinking-tea-reading-news.webp?b=1&s=612x612&w=0&k=20&c=BkIb3MwQZkjKdIyUflNo9NZ8puvUvga0Ut6q9lNRdpY=";
const Features = () => {
  return (
    <div style={{ backgroundColor: "#232429" }}>
      <div className="container  py-5">
        <div className="row  ">
          <div className="text-center">
            <div>
              <div className="colorOrange text-uppercase">
                <li type="square">Best Features</li>
              </div>
              <h2 className="colorOrange">We Are Business Features</h2>
            </div>
          </div>
        </div>
        {/* cards */}
        <div className="row mb-4 py-3 text-center">
          <div className="col-md-3 col-6 py-4  p-2">
            <div className="position-relative bg-light py-3">
              <div className="py-4 ">
                <h3>
                  <b>Business Network</b>
                </h3>
                <p className="px-3">Nullam vitae tempor moletise exthe </p>
              </div>
              <div className="badge">
                <LuNetwork size={30} />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6  py-4  p-2">
            <div
              style={{ backgroundColor: "#5d381e" }}
              className="position-relative text-light py-3"
            >
              <div className="py-4 ">
                <h3>
                  <b>Business Network</b>
                </h3>
                <p className="px-3">Nullam vitae tempor moletise exthe </p>
              </div>
              <div className="badge">
                <LuNetwork size={30} />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6  py-4 p-2">
            <div className="position-relative bg-light py-3">
              <div className="py-4 ">
                <h3>
                  <b>Business Network</b>
                </h3>
                <p className="px-3">Nullam vitae tempor moletise exthe </p>
              </div>
              <div className="badge">
                <LuNetwork size={30} />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6  py-4 p-2">
            <div className="position-relative bg-light py-3">
              <div className="py-4 ">
                <h3>
                  <b>Business Network</b>
                </h3>
                <p className="px-3">Nullam vitae tempor moletise exthe </p>
              </div>
              <div className="badge">
                <LuNetwork size={30} />
              </div>
            </div>
          </div>
        </div>

        <div className="Images-Parent  position-relative">
          <div className="row ">
            <div className="bgImagesTop"></div>
            <div className="col-md-6 col-12 py-4">
              <img
                src={img1}
                className="img pdLeft img-fluid h-100"
                alt="About US"
              />
            </div>
            <div className="bgImagesBottom"></div>

            <div className="col-md-6 col-12 px-4 py-5">
              <div className="colorOrange text-uppercase py-2">
                <li type="square">ABOUT OUR COMPANY</li>
              </div>
              <div className="data">
                <h2 className="text-light">About 25+ Experience Hands </h2>
                <h2 className="text-light">Such As Front Admin</h2>
                <h6 className="text-light">
                  Simply drag and drop photos and vedios into your workspace to
                  automatically add them to your Collab
                </h6>
                <h6 className="text-light">Cloud library.</h6>
              </div>
              <div className="row py-2">
                <div className="col-lg-3 col-12">
                  <div className="bg-light py-3">
                    <h2 className="radiusCut  w-75  py-1 ">25 +</h2>
                    <h5 className="colorOrange text-center">Experience</h5>
                  </div>
                </div>
                <div className="col-lg-9 col-12 py-3">
                  <ul className="colorOrange">
                    <li type="suare">
                      Nulla facilisi.Nullam is magna id dolor blandit return
                    </li>
                    <li type="suare">
                      Nulla facilisi.Nullam is magna id dolor blandit return
                    </li>
                    <li type="suare">
                      Nulla facilisi.Nullam is magna id dolor blandit return
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row ">
                <div className=" col-4  px-1 font-bold">
                  <button className="btn bgOrange px-lg-4">Our Mission</button>
                </div>
                <div className=" col-4 px-1 font-bold">
                  <button className="btn btn-light px-lg-4">
                    Tech Support
                  </button>
                </div>
                <div className=" col-4  px-1 font-bold">
                  <button className="btn btn-light px-lg-4">
                    Tech Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
