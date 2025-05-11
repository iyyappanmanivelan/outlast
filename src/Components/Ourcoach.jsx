import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

function Ourcoach({ coach }) {
  return (
    <section className="updown-space" >
      <div className="container position-relative">
        <div className="getknow d-flex justify-content-center align-items-center gap-3">
          <div className="fticon">
            <img src="\assets\football-og.png" className="img-fluid" />
          </div>
          <div className="gt-title">
            <h4 className="m-0 cg">Our Coaches</h4>
          </div>
        </div>

        <div className="Guided-title text-light text-center mt-5">
          <h4> Guided by the Best in the Game </h4>
        </div>

        <div className="coach-slider mt-5 pt-5">
        <Swiper
        autoplay={true}
        modules={[Autoplay]}
         watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
          {
            coach?.map((player , i)=>(
              <SwiperSlide>
                <div className="plyr-card position-relative">
                <div className="plyr-dtl text-center text-light">
                    <h5>{player?.name}</h5>
                    <h6>{player?.role}</h6>
                  </div>
                  <div className="plyr-img text-center">
                    <img src={player?.img}  className="img-fluid"/>
                  </div>
                  
                </div>

              </SwiperSlide>
            ))
          }
       
      </Swiper>

        </div>

      
      </div>
     
    </section>
  );
}

export default Ourcoach;
