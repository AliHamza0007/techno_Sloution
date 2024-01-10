import "./OurProjects.css";
import React, { useEffect, useRef } from "react";

import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img2 from "../../assets/icons/Path 38.png";

const OurProjects = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;

      swiper.on("slideChangeTransitionStart", () => {
        const img1 = swiperRef.current.querySelector(".img1");
        const img2 = swiperRef.current.querySelector(".img2");
        if (img1 && img2) {
          img1.style.opacity = 0;
          img2.style.opacity = 0;
        }
      });

      swiper.on("slideChangeTransitionEnd", () => {
        setTimeout(() => {
          const img1 = swiperRef.current.querySelector(".img1");
          const img2 = swiperRef.current.querySelector(".img2");

          if (img1 && img2) {
            img1.style.transitionDuration = "0ms";
            img2.style.transitionDuration = "0ms";
            img1.style.opacity = 1;
            img2.style.opacity = 1;
            setTimeout(() => {
              img1.style.transitionDuration = "500ms";
              img2.style.transitionDuration = "500ms";
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
    <div className="bgColorProjects ">
      <div className="border  border-bottom border-secondary"></div>
      <div className="container-fluid px-5 text-center py-5">
        <div className="py-5">
          <div className="colorOrange text-uppercase">
            <li type="square">Our Projects </li>
          </div>
          <h2 className="text-light">We Case Studies Best Work</h2>
        </div>
        <Swiper
          ref={swiperRef}
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
            1024: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            425: {
              slidesPerView: 1,
            },
          }}
          spaceBetween={20}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          on={{
            slideChangeTransitionStart: () => {
              const centerImage = document.querySelector(".img1");
              if (centerImage) {
                centerImage.style.opacity = 0;
              }
            },
            slideChangeTransitionEnd: () => {
              setTimeout(() => {
                const centerImage = document.querySelector(".img1");
                if (centerImage) {
                  centerImage.style.transitionDuration = "0ms";
                  centerImage.style.opacity = 1;
                  setTimeout(() => {
                    centerImage.style.transitionDuration = "500ms";
                  }, 50);
                }
              }, 50);
            },
          }}
        >
          <SwiperSlide>
            <img
              className="img img-fluid projectIMG"
              alt="100%x280"
              src="https://media.istockphoto.com/id/1168175751/photo/portrait-of-an-indian-man-in-a-diverse-team-of-creative-millennial-coworkers-in-a-startup.jpg?s=1024x1024&w=is&k=20&c=Lnn7JQVzQkPP00vzHj123fUOHxv8NFf0LidMj8SuI9I="
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img img-fluid projectIMG"
              alt="100%x280"
              src="https://media.istockphoto.com/id/1503280341/photo/brainstorming-planning-and-business-people-with-ideas-in-a-meeting-for-a-company-goal-or.jpg?s=612x612&w=0&k=20&c=_mfpA9KMwoUK0QzYIobPNKe19XO0Gdx5_yZM2SmI9f4="
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img img-fluid projectIMG"
              alt="100%x280"
              src="https://media.istockphoto.com/id/1783940026/photo/writing-planning-and-focused-man-on-glass-for-project-management-moodboard-and-business.jpg?s=612x612&w=0&k=20&c=JUCj6PKiheyVWK1AmIZv1KGWTDcw7Kk3ETIv_yqan5s="
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="img img-fluid projectIMG"
              alt="100%x280"
              src="https://media.istockphoto.com/id/971631428/photo/cheerful-man-writing-on-whiteboard.jpg?s=612x612&w=0&k=20&c=AxiDS2uNORym5QA2is3NVltJpTxuPA0jnF8LdEe1YUM="
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img img-fluid projectIMG"
              alt="100%x280"
              src="https://media.istockphoto.com/id/860389172/photo/analyzing-business-strategy.jpg?s=612x612&w=0&k=20&c=ikSUkFYstvg0G9DqgSUhyOYgSkOqKEDZoOG407NGFmA="
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="img img-fluid projectIMG"
              alt="100%x280"
              src="https://media.istockphoto.com/id/966517720/photo/application-developer-writing-on-board-in-office.jpg?s=612x612&w=0&k=20&c=yZj4OL-fboGci9m9y5haIHKXJTIRADcArkRERyc1CIA="
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="img img-fluid projectIMG"
              alt="100%x280"
              src="https://media.istockphoto.com/id/1434742171/photo/laptop-ppt-presentation-business-meeting-and-team-working-on-review-for-new-digital-website.jpg?s=1024x1024&w=is&k=20&c=gTpyYrR53VopCKon7GHNWTCS_9_KfTjGrn4dV_nJdqM="
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img img-fluid projectIMG"
              alt="100%x280"
              src="https://media.istockphoto.com/id/1324669110/photo/shot-of-two-businesspeople-working-together-on-a-laptop-in-an-office.jpg?s=612x612&w=0&k=20&c=2YADSqtx3YKL5a-EKw9phfJy0ozI2bVbPGgLzVboUBY="
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img img-fluid projectIMG"
              alt="100%x280"
              src="https://plus.unsplash.com/premium_photo-1661284852147-c2454d4c1ec7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D"
            />
          </SwiperSlide>
          <div className="img1 text-start text-light py-2">
            <span className="BNH">Business Network</span>
            Design/Business
          </div>
          <img src={img2} alt="IMG" className=" img2 img img-fluid" />
        </Swiper>
      </div>
    </div>
  );
};

export default OurProjects;
