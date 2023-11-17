import { useUsers } from "../../context/UseUsers";
import planIcon from "../../assets/icons/planIcon.png";
import stats from "../../assets/icons/stats.png";
import social from "../../assets/icons/social-care.png";
import dataanalysis from "../../assets/icons/data-analysis.png";
import bgBar from "../../assets/icons/Rectangle 125.png";
import quotes from "../../assets/icons/asset1.png";
import "./OurTeam.css";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
const OurTeam = () => {
  const { Users } = useUsers();

  return (
    <>
      <div className="container px-2 text-center py-5 h-100 position-relative">
        <div className=" headings py-5">
          <div className="colorOrange text-uppercase">
            <li type="square">Team Member</li>
          </div>
          <h2 className="text-light">Amazing Team Member</h2>
        </div>

        <Swiper
          className="Swiper mb-5 pb-5 "
          modules={[Navigation, EffectFade, Autoplay, Pagination]}
          effect="slide"
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          // slidesPerView={3}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            425: {
              slidesPerView: 1,
            },
          }}
          spaceBetween={15}
          navigation={true}
          pagination={{
            clickable: true,
          }}
        >
          {Users?.slice(0, 7).map((user) => (
            <SwiperSlide key={user.id}>
              <div className="card bg-dark">
                <img
                  className=" img bg-secondary img-fluid imgUserHeight"
                  alt={user.firstName}
                  src={user.image}
                />
                <div className="px-3 imgBodyHandle ">
                  <div className=" py-2  bg-light ">
                    <div className="addBTN colorOrange  bg-light h2">+</div>
                    <h4 className="card-title pt-2 mt-3 ">{user.firstName}</h4>
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
            </SwiperSlide>
          ))}
        </Swiper>

        {/* cards */}
        <div className="row mb-4 py-3 px-3 text-center">
          <div className="col-md-3 col-6 py-4  p-2">
            <div className="position-relative bg-light cardTeamHover py-3">
              <div className="py-4 cardTeamHeight">
                <h3>
                  <b>25+</b>
                </h3>
                <p className="px-3">Planing Solution </p>
              </div>
              <div className="badge">
                <img src={planIcon} width="30px" alt="Plan Icon" />{" "}
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 py-4  p-2">
            <div className="position-relative bg-light cardTeamHover py-3">
              <div className="py-4 cardTeamHeight">
                <h3>
                  <b>35k+</b>
                </h3>
                <p className="px-3">Project Analizes </p>
              </div>
              <div className="badge">
                <img src={dataanalysis} width="30px" alt="Plan Icon" />{" "}
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 py-4  p-2">
            <div className="position-relative bg-light cardTeamHover py-3">
              <div className="py-4 cardTeamHeight">
                <h3>
                  <b>94k</b>
                </h3>
                <p className="px-3">Growing Business </p>
              </div>
              <div className="badge">
                <img src={stats} width="30px" alt="Plan Icon" />{" "}
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 py-4  p-2">
            <div className="position-relative bg-light cardTeamHover py-3">
              <div className="py-4 cardTeamHeight">
                <h3>
                  <b>45k</b>
                </h3>
                <p className="px-3">Team Support </p>
              </div>
              <div className="badge">
                <img src={social} width="30px" alt="Plan Icon" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-white px-3">
        <div className="container">
          {" "}
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
            <div className="carousel-inner  position-relative">
              <div className="carousel-item active">
                {Users?.slice(0, 1).map((user) => (
                  <div key={user.id} className="row">
                    <img
                      className="img img-fluid  imgSet"
                      src={user.image}
                      alt={user.firstName}
                    />{" "}
                    <div className="col-md-2 col-6">
                      <img src={bgBar} alt="bgBar" />
                    </div>
                    <div className=" offset-md-2 col-md-8  col-12 py-3 ">
                      <img
                        src={quotes}
                        className="img img-fluid imgQuote"
                        alt="Quotes"
                      />
                      <div className="justify-content-center pt-5 align-items-center">
                        <h2 className="text-white py-4">
                          We understand he importance of to approaching Work
                          integrasand belie in the power simple and we easy
                          cation growth always act like adipisicing eit,sed do
                          eiumod
                        </h2>
                        <h1 className="text-uppercase   text-white">
                          {user.firstName}
                        </h1>
                        <h6 className="colorOrange">
                          <i>{user.company.department}</i>
                        </h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="carousel-item ">
                {Users?.slice(2, 3).map((user) => (
                  <div key={user.id} className="row">
                    <img
                      className="img img-fluid  imgSet"
                      src={user.image}
                      alt={user.firstName}
                    />{" "}
                    <div className="col-md-2 col-6">
                      <img src={bgBar} alt="bgBar" />
                    </div>
                    <div className=" offset-md-2 col-md-8  col-12 py-3 ">
                      <img
                        src={quotes}
                        className="img img-fluid imgQuote"
                        alt="Quotes"
                      />
                      <div className="justify-content-center pt-5 align-items-center">
                        <h2 className="text-white py-4">
                          We understand he importance of to approaching Work
                          integrasand belie in the power simple and we easy
                          cation growth always act like adipisicing eit,sed do
                          eiumod
                        </h2>
                        <h1 className="text-uppercase   text-white">
                          {user.firstName}
                        </h1>
                        <h6 className="colorOrange">
                          <i>{user.company.department}</i>
                        </h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="carousel-item ">
                {Users?.slice(4, 5).map((user) => (
                  <div key={user.id} className="row">
                    <img
                      className="img img-fluid  imgSet"
                      src={user.image}
                      alt={user.firstName}
                    />{" "}
                    <div className="col-md-2 col-6">
                      <img src={bgBar} alt="bgBar" />
                    </div>
                    <div className=" offset-md-2 col-md-8  col-12 py-3 ">
                      <img
                        src={quotes}
                        className="img img-fluid imgQuote"
                        alt="Quotes"
                      />
                      <div className="justify-content-center pt-5 align-items-center">
                        <h2 className="text-white py-4">
                          We understand he importance of to approaching Work
                          integrasand belie in the power simple and we easy
                          cation growth always act like adipisicing eit,sed do
                          eiumod
                        </h2>
                        <h1 className="text-uppercase   text-white">
                          {user.firstName}
                        </h1>
                        <h6 className="colorOrange">
                          <i>{user.company.department}</i>
                        </h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="carousel-item ">
                {Users?.slice(6, 7).map((user) => (
                  <div key={user.id} className="row">
                    <img
                      className="img img-fluid  imgSet"
                      src={user.image}
                      alt={user.firstName}
                    />{" "}
                    <div className="col-md-2 col-6">
                      <img src={bgBar} alt="bgBar" />
                    </div>
                    <div className=" offset-md-2 col-md-8  col-12 py-3 ">
                      <img
                        src={quotes}
                        className="img img-fluid imgQuote"
                        alt="Quotes"
                      />
                      <div className="justify-content-center pt-5 align-items-center">
                        <h2 className="text-white py-4">
                          We understand he importance of to approaching Work
                          integrasand belie in the power simple and we easy
                          cation growth always act like adipisicing eit,sed do
                          eiumod
                        </h2>
                        <h1 className="text-uppercase   text-white">
                          {user.firstName}
                        </h1>
                        <h6 className="colorOrange">
                          <i>{user.company.department}</i>
                        </h6>
                      </div>
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
