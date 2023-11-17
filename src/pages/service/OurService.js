import "./OurService.css";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const Button = () => {
  return <button className="btn btn-outline-primary ">Read More</button>;
};
const OurService = () => {
  return (
    <div className="ParentContainer position-relative py-5">
      <div className=" container ">
        <div className=" text-center py-5">
          <div>
            <div className="colorOrange text-uppercase">
              <li type="square">WHAT WE DO </li>
            </div>
            <h2 className="text-light">We High Service That Stand</h2>
          </div>
        </div>

        <Swiper
          className="Swiper mb-5 pb-5 "
          modules={[Navigation, EffectFade, Autoplay, Pagination]}
          effect="slide"
          autoplay={{
            delay: 2500,
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
          spaceBetween={30}
          navigation={true}
          pagination={{
            clickable: true,
            pagination: "swiper-Custompagination",
          }}
        >
          <div className="swiper-Custompagination"></div>

          <SwiperSlide>
            <div className="card">
              <img
                className="img-fluid"
                alt="100%x280"
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=ee8417f0ea2a50d53a12665820b54e23"
              />
              <div className="card-body">
                <h4 className="card-title">Special title treatment</h4>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>{" "}
                <Button />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img
                className="img-fluid"
                alt="100%x280"
                src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=8ac55cf3a68785643998730839663129"
              />
              <div className="card-body">
                <h4 className="card-title">Special title treatment</h4>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>{" "}
                <Button />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img
                className="img-fluid"
                alt="100%x280"
                src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=5ee4fd5d19b40f93eadb21871757eda6"
              />
              <div className="card-body">
                <h4 className="card-title">Special title treatment</h4>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>{" "}
                <Button />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <img
                className="img-fluid"
                alt="100%x280"
                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=7c625ea379640da3ef2e24f20df7ce8d"
              />
              <div className="card-body px-3">
                <h4 className="card-title">Special title treatment</h4>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Button />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img
                className="img-fluid"
                alt="100%x280"
                src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=42b2d9ae6feb9c4ff98b9133addfb698"
              />
              <div className="card-body">
                <h4 className="card-title">Special title treatment</h4>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>{" "}
                <Button />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <img
                className="img-fluid"
                alt="100%x280"
                src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=3d2e8a2039c06dd26db977fe6ac6186a"
              />
              <div className="card-body">
                <h4 className="card-title">Special title treatment</h4>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>{" "}
                <Button />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <img
                className="img-fluid"
                alt="100%x280"
                src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=3f317c1f7a16116dec454fbc267dd8e4"
              />
              <div className="card-body">
                <h4 className="card-title">Special title treatment</h4>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>{" "}
                <Button />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img
                className="img-fluid"
                alt="100%x280"
                src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=ebadb044b374504ef8e81bdec4d0e840"
              />
              <div className="card-body">
                <h4 className="card-title">Special title treatment</h4>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>{" "}
                <Button />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img
                className="img-fluid"
                alt="100%x280"
                src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=0754ab085804ae8a3b562548e6b4aa2e"
              />
              <div className="card-body">
                <h4 className="card-title">Special title treatment</h4>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>{" "}
                <Button />
              </div>
            </div>
          </SwiperSlide>

          <div className="ring1 "></div>
          <div className="ring2 "></div>
        </Swiper>
      </div>
    </div>
  );
};

export default OurService;
