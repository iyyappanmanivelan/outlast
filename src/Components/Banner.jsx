import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import Navbar from "./Navbar";
function Banner() {
  return (
    <section className="banner position-relative">
      <div className="container-fluid p-0">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          effect={"fade"}
          speed={1500}
          autoplay={{ delay: 2000 }}
          modules={[Autoplay, EffectFade]}
        >
          <SwiperSlide>
            <div className="banner_img position-relative">
              <div className="overlay position-absolute"></div>
              <img src="\assets\ban1.jpg" className="img-fluid" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_img">
              <div className="overlay position-absolute"></div>
              <img src="\assets\ban2.jpg" className="img-fluid" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_img">
              <div className="overlay position-absolute"></div>
              <img src="\assets\ban3.jpg" className="img-fluid" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_img">
              <div className="overlay position-absolute"></div>
              <img src="\assets\ban4.jpg" className="img-fluid" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_img">
              <div className="overlay position-absolute"></div>
              <img src="\assets\ban5.jpg" className="img-fluid" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="banner-content position-absolute">
        <div className="bc-1">
          <h3
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            Every Kick Counts
          </h3>
          <h3
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine"
          >
            Every Dream Takes Flight
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Banner;
