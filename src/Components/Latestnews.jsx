import React from "react";
import { Calendar } from "react-bootstrap-icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import { SwiperSlide, Swiper } from "swiper/react";

function Latestnews({ blogs }) {
  return (
    <section
      className="updown-space"
    >
      <div className="container">
        <div className="getknow d-flex justify-content-center align-items-center gap-3 ">
          <div className="fticon">
            <img src="\assets\football-og.png" className="img-fluid" />
          </div>
          <div className="gt-title ">
            <h4 className="m-0 cg">Our Lastes Blogs !</h4>
          </div>
        </div>
        <div className="latest-title my-4 text-center">
          <h3 className="text-light">Check Out Our Latest News and Article</h3>
        </div>

       <div className="mt-5 pt-5">
       <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          speed={1500}
          autoplay={{ delay: 2000 }}
          modules={[Autoplay, EffectFade]}
        >
            {blogs?.map((data) =>
              data?.media_type == "IMAGE" ? (
                <SwiperSlide>
                     <div className="news-box bg-light">
                    <div className="news-img text-center">
                      <img src={data?.media_url} className="img-fluid" />
                    </div>
                    <div className="news-content py-2">
                      <div className="news-time d-flex align-items-center gap-2">
                        <p>
                          <Calendar />
                        </p>
                        <p>{''}</p>
                      </div>
                      <h5>
                        Boot Camp Confidential: The Secrets of Outlast F.C. ...
                      </h5>
                      <p className="caption">{data?.caption}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null
            )}
        </Swiper>
       </div>
      </div>
    </section>
  );
}

export default Latestnews;
