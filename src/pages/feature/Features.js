import "./Feature.css";
import FiberOptics from "../../assets/icons/optical-fiber.png";
import BGimg from "../../assets/icons/Path 37.png";
import cornorIMG from "../../assets/icons/Path 33.png";
import { LuNetwork } from "react-icons/lu";
import { CiStreamOn } from "react-icons/ci";
import { SlScreenDesktop } from "react-icons/sl";
const img1 =
  "https://media.istockphoto.com/id/1311040120/photo/young-woman-at-home-in-the-kitchen-drinking-tea-reading-news.webp?b=1&s=612x612&w=0&k=20&c=BkIb3MwQZkjKdIyUflNo9NZ8puvUvga0Ut6q9lNRdpY=";
const Features = () => {
  return (
    <div className="position-relative " style={{ backgroundColor: "#232429" }}>
      <div className="container px-2 py-5">
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
        <div className="row mb-4 py-3 px-2 text-center">
          <div className="col-md-3 col-6 py-4  p-2">
            <div className="position-relative bg-light cardFeatureHover py-3">
              <div className="py-4 cardFeatureHeight">
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
            <div className="position-relative bg-light cardFeatureHover py-3">
              <div className="py-4 cardFeatureHeight">
                <h3>
                  <b>60 for Mobiles</b>
                </h3>
                <p className="px-3">Nullam vitae tempor moletise exthe </p>
              </div>
              <div className="badge">
                <SlScreenDesktop size={30} />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6  py-4 p-2">
            <div className="position-relative bg-light cardFeatureHover py-3">
              <div className="py-4 cardFeatureHeight ">
                <h3>
                  <b>Line Streaming</b>
                </h3>
                <p className="px-3">Nullam vitae tempor moletise exthe </p>
              </div>
              <div className="badge">
                <CiStreamOn size={30} />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6  py-4 p-2">
            <div className="position-relative cardFeatureHover bg-light py-3">
              <div className="py-4 cardFeatureHeight ">
                <h3>
                  <b>Fiber Broads</b>
                </h3>
                <p className="px-3">Nullam vitae tempor moletise exthe </p>
              </div>
              <div className="badge">
                <img src={FiberOptics} width="30px" alt="FiberOptics" />
              </div>
            </div>
          </div>
        </div>

        <div className="Images-Parent px-2 position-relative">
          <div className="row ">
            <div className="bgImagesTop"></div>
            <div className="col-md-5 col-12 py-4">
              <img
                src={img1}
                className="img pdLeft img-fluid h-100"
                alt="About US"
              />
            </div>
            <div className="bgImagesBottom"></div>

            <div className="col-md-7 col-12 px-4 py-5">
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
              <div className="row py-5 ">
                <div className="col-md-4 col-12">
                  <div className="position-relative  BGrectangle py-3 px-1">
                    <h2 className=" BGimg rectTEXT py-2 px-2 text-light">
                      25 +
                    </h2>
                    <img src={BGimg} className="BGimg" alt="BGimg" />
                    <h5 className="colorOrange mt-5 text-center pt-5">
                      Experience
                    </h5>
                  </div>
                </div>
                <div className="col-md-8 col-12 justify-content-center py-3 align-items-center">
                  <ul className="colorOrange">
                    <li type="suare">
                      <h6>
                        Nulla facilisi.Nullam is magna id dolor blandit return
                      </h6>
                    </li>
                    <li type="suare">
                      <h6>
                        Nulla facilisi.Nullam is magna id dolor blandit return
                      </h6>
                    </li>
                    <li type="suare">
                      <h6>
                        Nulla facilisi.Nullam is magna id dolor blandit return
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button type="button" className=" mx-1 btn btnOrange">
                    <b className="">Our Mission</b>
                  </button>
                  <button type="button" className=" mx-1 btn btn-light">
                    <b className="">Tech Support</b>
                  </button>
                  <button type="button" className="ZIndex mx-1 btn btn-light">
                    <b className="">Tech Service</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={cornorIMG}
        className="cornerbg img img-fluid"
        alt="Cornor Image"
      />
    </div>
  );
};

export default Features;
