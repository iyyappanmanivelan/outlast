import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination, Autoplay } from "swiper/modules";

function Ourvalues({ data , philo}) {
  return (
    <section className="updown-space">
      <div className="container">
      <div className="getknow d-flex justify-content-center align-items-center gap-3">
          <div className="fticon">
            <img src="\assets\football-og.png" className="img-fluid" />
          </div>
          <div className="gt-title">
            <h4 className="m-0 cg">Values & philosophy</h4>
          </div>
        </div>

        <div className="value-space">

          <div className="values-title d-flex justify-content-center mt-5">
            <h4 className="text-center text-light">{philo}</h4>
          </div>

          <div className="row mt-4 pt-4">
            {
              data?.map((items , i)=>(
          <div className="col-lg-3 my-5 text-dark">
                  <div className="data-cardsss position-relative">
                       <div className="img-card">
                       <img src={items?.img} alt=""/>
                       </div>
                       <div className="data-info position-absolute">
                        {items?.content}
                        <h6 className="text-end my-2">- Outlast F.C.</h6>
                       </div>
                       <div className="overlay5 position-absolute"></div>
                </div>
          </div>
              ))
            }
          </div>

        </div>

            
          </div>
    
    </section>
  );
}

export default Ourvalues;
