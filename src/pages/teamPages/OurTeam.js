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
          speed="1000"
          autoplay={{
            delay: 8500,
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
          {Users?.slice(0, 1).map((user) => (
            <SwiperSlide key={user.id}>
              <div className="card bg-dark">
                <img
                  className=" img bg-secondary img-fluid imgUserHeight"
                  alt={user.firstName}
                  src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHVzZXJzfGVufDB8fDB8fHww"
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
          {Users?.slice(2, 3).map((user) => (
            <SwiperSlide key={user.id}>
              <div className="card bg-dark">
                <img
                  className=" img bg-secondary img-fluid imgUserHeight"
                  alt={user.firstName}
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
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
          {Users?.slice(3, 4).map((user) => (
            <SwiperSlide key={user.id}>
              <div className="card bg-dark">
                <img
                  className=" img bg-secondary img-fluid imgUserHeight"
                  alt={user.firstName}
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D"
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
          {Users?.slice(4, 5).map((user) => (
            <SwiperSlide key={user.id}>
              <div className="card bg-dark">
                <img
                  className=" img bg-secondary img-fluid imgUserHeight"
                  alt={user.firstName}
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJzfGVufDB8fDB8fHww"
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
          <Swiper
            speed="1500"
            className="Swiper mb-5 pb-5 "
            modules={[EffectFade, Autoplay, Pagination]}
            effect="slide"
            autoplay={{
              delay: 6500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={15}
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide>
              {Users?.slice(0, 1).map((user) => (
                <div key={user.id} className="row">
                  <img
                    className="img img-fluid  imgSet"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
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
                        integrasand belie in the power simple and we easy cation
                        growth always act like adipisicing eit,sed do eiumod
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
            </SwiperSlide>
            <SwiperSlide>
              {Users?.slice(2, 3).map((user) => (
                <div key={user.id} className="row">
                  <img
                    className="img img-fluid  imgSet"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        integrasand belie in the power simple and we easy cation
                        growth always act like adipisicing eit,sed do eiumod
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
            </SwiperSlide>
            <SwiperSlide>
              {Users?.slice(4, 5).map((user) => (
                <div key={user.id} className="row">
                  <img
                    className="img img-fluid  imgSet"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
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
                        integrasand belie in the power simple and we easy cation
                        growth always act like adipisicing eit,sed do eiumod
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
            </SwiperSlide>
            <SwiperSlide>
              {Users?.slice(6, 7).map((user) => (
                <div key={user.id} className="row">
                  <img
                    className="img img-fluid  imgSet"
                    src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHVzZXJzfGVufDB8fDB8fHww"
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
                        integrasand belie in the power simple and we easy cation
                        growth always act like adipisicing eit,sed do eiumod
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
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
