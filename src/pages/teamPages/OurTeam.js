import { LuNetwork, LuQuote } from "react-icons/lu";
import { useUsers } from "../../context/UseUsers";
import "./OurTeam.css";
const OurTeam = () => {
  const { Users } = useUsers();

  return (
    <>
      <div className="container text-center py-5 h-100 position-relative">
        <div className=" headings py-5">
          <div className="colorOrange text-uppercase">
            <li type="square">Team Member</li>
          </div>
          <h2 className="text-light">Amazing Team Member</h2>
        </div>
        {/* carsulas */}
        <div
          id="carouselExampleAutoplaying"
          className="carousel pb-5 mb-5  slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators ourTeamIndicators">
            <i
              color="red"
              data-bs-slide-to={0}
              aria-current="true"
              aria-label="Slide 1"
              className="px-1 active"
              size={30}
            ></i>
            <i
              data-bs-slide-to={1}
              size={30}
              className="px-1"
              aria-label="Slide 2"
            ></i>
            <i
              data-bs-slide-to={2}
              className="px-1"
              size={30}
              aria-label="Slide 3"
            ></i>
          </div>
          <div className="carousel-inner  py-2">
            <div className="carousel-item active">
              <div className="row ">
                {Users?.slice(0, 3).map((user) => (
                  <div key={user.id} className="col-md-4 col-12 mb-3">
                    <div className="card bg-dark">
                      <img
                        className=" img bg-secondary img-fluid imgUserHeight"
                        alt={user.firstName}
                        src={user.image}
                      />
                      <div className="px-3 imgBodyHandle ">
                        <div className=" py-2  bg-light ">
                          <div className="addBTN colorOrange  bg-light h2">
                            +
                          </div>
                          <h4 className="card-title pt-2 mt-2 ">
                            {user.firstName}
                          </h4>
                          <h6 className="card-title colorOrange ">
                            {user.company.department}
                          </h6>
                          <hr />
                          <div className="d-flex justify-content-between p-1 ">
                            <h6>{user.phone.substring(0, 8)}</h6>
                            {" | "}
                            <h6>{user.email.substring(0, 8)}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="carousel-item ">
              <div className="row ">
                {Users?.slice(4, 7).map((user) => (
                  <div key={user.id} className="col-md-4 col-12 mb-3">
                    <div className="card bg-dark">
                      <img
                        className=" img bg-secondary img-fluid imgUserHeight"
                        alt={user.firstName}
                        src={user.image}
                      />
                      <div className="px-3 imgBodyHandle ">
                        <div className=" py-2  bg-light ">
                          <div className="addBTN colorOrange  bg-light h2">
                            +
                          </div>
                          <h4 className="card-title pt-2 mt-2 ">
                            {user.firstName}
                          </h4>
                          <h6 className="card-title colorOrange ">
                            {user.company.department}
                          </h6>
                          <hr />
                          <div className="d-flex justify-content-between p-1 ">
                            <h6>{user.phone.substring(0, 8)}</h6>
                            {" | "}
                            <h6>{user.email.substring(0, 8)}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="carousel-item ">
              <div className="row ">
                {Users?.slice(8, 11).map((user) => (
                  <div key={user.id} className="col-md-4 col-12 mb-3">
                    <div className="card bg-dark">
                      <img
                        className=" img bg-secondary img-fluid imgUserHeight"
                        alt={user.firstName}
                        src={user.image}
                      />
                      <div className="px-3 imgBodyHandle ">
                        <div className=" py-2  bg-light ">
                          <div className="addBTN colorOrange  bg-light h2">
                            +
                          </div>
                          <h4 className="card-title pt-2 mt-2 ">
                            {user.firstName}
                          </h4>
                          <h6 className="card-title colorOrange ">
                            {user.company.department}
                          </h6>
                          <hr />
                          <div className="d-flex justify-content-between p-1 ">
                            <h6>{user.phone.substring(0, 8)}</h6>
                            {" | "}
                            <h6>{user.email.substring(0, 8)}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
      </div>
      <div className=" bgColor position-relative text-white paddingLeft">
        <div className="container">
          <div
            id="carouselExampleAutoplaying"
            className="carousel pb-5 mb-5  slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators indicatosmoveSet">
              <i
                color="red"
                // data-bs-target="#carouselExampleDark"
                data-bs-slide-to={0}
                aria-current="true"
                aria-label="Slide 1"
                className="px-1 active"
                size={30}
              ></i>
              <i
                // data-bs-target="#carouselExampleDark"
                data-bs-slide-to={1}
                size={30}
                className="px-1"
                aria-label="Slide 2"
              ></i>
              <i
                // data-bs-target="#carouselExampleDark"
                data-bs-slide-to={2}
                className="px-1"
                size={30}
                aria-label="Slide 3"
              ></i>{" "}
              <i
                color="red"
                // data-bs-target="#carouselExampleDark"
                data-bs-slide-to={3}
                aria-current="true"
                aria-label="Slide 4"
                className="px-1 "
                size={30}
              ></i>
            </div>
            <div className="carousel-inner  py-5">
              <div className="carousel-item active">
                {Users?.slice(0, 1).map((user) => (
                  <div key={user.id} className="row">
                    <div className="col-md-4 col-12 py-3">
                      <div className="bgDesign "></div>
                      <img
                        className="img img-fluid  imgSet"
                        src={user.image}
                        alt={user.firstName}
                      />
                    </div>
                    <div className="col-md-8 col-12 p-2 ">
                      <LuQuote size={"100px"} className="colorOrange" />
                      <h2 className="text-white py-3">
                        We understand he importance of to approaching Work
                        integrasand belie in the power simple and we easy cation
                        growth always act like adipisicing eit,sed do eiumod
                      </h2>
                      <h1 className="text-uppercase  py-2 text-white">
                        {user.firstName}
                      </h1>
                      <h5 className="colorOrange">
                        {" "}
                        {user.company.department}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
              <div className="carousel-item ">
                {Users?.slice(2, 3).map((user) => (
                  <div key={user.id} className="row">
                    <div className="col-md-4  col-12 py-3">
                      <div className="bgDesign "></div>
                      <img
                        className="img img-fluid  imgSet"
                        src={user.image}
                        alt={user.firstName}
                      />
                    </div>
                    <div className="col-md-8 col-12  p-2">
                      <LuQuote size={"100px"} className="colorOrange" />
                      <h2 className="text-white py-3">
                        We understand he importance of to approaching Work
                        integrasand belie in the power simple and we easy cation
                        growth always act like adipisicing eit,sed do eiumod
                      </h2>
                      <h1 className="text-uppercase text-white py-2">
                        {user.firstName}
                      </h1>
                      <h5 className="colorOrange">
                        {" "}
                        {user.company.department}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
              <div className="carousel-item ">
                {Users?.slice(4, 5).map((user) => (
                  <div key={user.id} className="row">
                    <div className="col-md-4 col-12 py-3">
                      <div className="bgDesign "></div>
                      <img
                        className="img img-fluid  imgSet"
                        src={user.image}
                        alt={user.firstName}
                      />
                    </div>
                    <div className="col-md-8 col-12 p-2">
                      <LuQuote size={"100px"} className="colorOrange" />
                      <h2 className="text-white py-3">
                        We understand he importance of to approaching Work
                        integrasand belie in the power simple and we easy cation
                        growth always act like adipisicing eit,sed do eiumod
                      </h2>
                      <h1 className="text-uppercase text-white py-2">
                        {user.firstName}
                      </h1>
                      <h5 className="colorOrange">
                        {" "}
                        {user.company.department}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
              <div className="carousel-item ">
                {Users?.slice(6, 7).map((user) => (
                  <div key={user.id} className="row">
                    <div className="col-md-4 col-12 py-3">
                      <div className="bgDesign "></div>
                      <img
                        className="img img-fluid  imgSet"
                        src={user.image}
                        alt={user.firstName}
                      />
                    </div>
                    <div className="col-md-8 col-12 p-2">
                      <LuQuote size={"100px"} className="colorOrange" />
                      <h2 className="text-white py-3">
                        We understand he importance of to approaching Work
                        integrasand belie in the power simple and we easy cation
                        growth always act like adipisicing eit,sed do eiumod
                      </h2>
                      <h1 className="text-uppercase text-white py-2">
                        {user.firstName}
                      </h1>
                      <h5 className="colorOrange">
                        {" "}
                        {user.company.department}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
