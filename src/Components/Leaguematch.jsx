import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

function Leaguematch({ LeagueData }) {
  return (
    <>
      <section className="updown-space">
        <div className="container">
          <div className="getknow d-flex justify-content-center align-items-center gap-3 ">
            <div className="fticon">
              <img src="\assets\football-og.png" className="img-fluid" />
            </div>
            <div className="gt-title">
              <h4 className="m-0 cg">Our League Matches</h4>
            </div>
          </div>

          <div className="league-slider mt-5 pt-5">
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              speed={1500}
              autoplay={{ delay: 2000 }}
              modules={[Autoplay, EffectFade]}
            >
              {LeagueData.league_matches?.map((data, i) => (
                <SwiperSlide>
                  <div className="row teamboard">
                    <div className="col-lg-5 d-flex justify-content-center">
                      <div className="lg-card">
                        <div className="tm-pic d-flex gap-2 align-items-end">
                          <img src={data.T1_pic} className="img-fluid" />
                          <h2 className="text-end">{data.T1_point}</h2>
                        </div>
                        <div className="tm-name text-center mt-3">
                          <h5>{data?.Team1}</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 text-center pt-5">
                      <h2>:</h2>
                    </div>
                    <div className="col-lg-5 d-flex justify-content-center">
                      <div className="lg-card">
                        <div className="tm-pic d-flex gap-2 align-items-end">
                          <h2 className="text-start">{data.T2_Point}</h2>
                          <img src={data.T2_pic} className="img-fluid" />
                        </div>
                        <div className="tm-name text-center px-5 mt-3">
                          <h5>{data?.Team2}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Leaguematch;
