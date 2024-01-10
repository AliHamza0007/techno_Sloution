import "./OurService.css";
import React, { useEffect, useRef } from "react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const Button = () => {
  return (
    <button className="btn btn-default  ">
      <b>Read More +</b>
    </button>
  );
};
const OurService = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;

      swiper.on("slideChangeTransitionStart", () => {
        const ring1 = swiperRef.current.querySelector(".ring1");
        const ring2 = swiperRef.current.querySelector(".ring2");
        if (ring1 && ring2) {
          ring1.style.opacity = 0;
          ring2.style.opacity = 0;
        }
      });

      swiper.on("slideChangeTransitionEnd", () => {
        setTimeout(() => {
          const ring1 = swiperRef.current.querySelector(".ring1");
          const ring2 = swiperRef.current.querySelector(".ring2");

          if (ring1 && ring2) {
            ring1.style.transitionDuration = "0ms";
            ring2.style.transitionDuration = "0ms";
            ring1.style.opacity = 1;
            ring2.style.opacity = 1;
            setTimeout(() => {
              ring1.style.transitionDuration = "500ms";
              ring2.style.transitionDuration = "500ms";
            }, 50);
          }
        }, 50);
      });

      return () => {
        // Cleanup Swiper instance on component unmount
        swiper.destroy();
      };
    }
  }, []); // Empty dependency array to run the effect only once on mount

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
          ref={swiperRef}
          className="Swiper mb-5 pb-5 "
          modules={[Navigation, EffectFade, Autoplay, Pagination]}
          effect="slide"
          speed="1000"
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
                src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyb3VwJTIwb2YlMjBmcmllbmR8ZW58MHx8MHx8fDA%3D"
              />
              <div className="card-body">
                <h4 className="card-title">Product To Satlite</h4>
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
                src="https://media.istockphoto.com/id/1448823265/photo/project-management-leadership-and-planning-with-business-people-in-meeting-for-marketing.jpg?s=1024x1024&w=is&k=20&c=lb5P5SFIJ6YDc8RX0VwG8yrUJTQ1YDp7gLKL-vAOW1o="
              />
              <div className="card-body">
                <h4 className="card-title">Bussiness for Network </h4>
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
                src="https://media.istockphoto.com/id/1425667508/photo/architecture-planning-development-and-project-management-business-people-hands-with-floor.jpg?s=1024x1024&w=is&k=20&c=wFry9HATzWdfuSEf3fmDCz6tOiz7pEKyISC4xJkDbhs="
              />
              <div className="card-body">
                <h4 className="card-title">Special Solution Soft</h4>
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
                src="https://media.istockphoto.com/id/1485907939/photo/business-woman-creating-a-business-plan-at-the-office.jpg?s=1024x1024&w=is&k=20&c=j9dPkAaqgWQt7OXZHL_0IDx4_BEPCVpmlPbdr3ZLc90="
              />
              <div className="card-body px-3">
                <h4 className="card-title">Solution Computers</h4>
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
                src="https://media.istockphoto.com/id/1435042855/photo/kanban-project-management-software-on-laptop.webp?s=1024x1024&w=is&k=20&c=BKCImfyfIOfjkcyBusuaM4ROdVVxPhhWozgzf5J_mD0="
              />
              <div className="card-body">
                <h4 className="card-title">Special treatment</h4>
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
