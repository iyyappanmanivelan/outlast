import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import { Star, StarFill } from "react-bootstrap-icons";

function Testimonal() {
  return (
    <section className="">
      <div className="container-fluid p-0 ">
        <div className="testimonal position-relative">
          <div className="test-img position-relative">
            <img src="\assets\turf.jpg" className="img-fluid" />
            <div className="overlay2 position-absolute"></div>
          </div>
          <div className="testmonal-info position-absolute">
            <div className="container">
            <div className="row">
              <div className="col-lg-6 py-5">
                <div className="getknow d-flex align-items-center gap-3">
                  <div className="fticon">
                    <img
                      src="\assets\football-white.png"
                      className="img-fluid"
                    />
                  </div>
                  <div className="gt-title ">
                    <h4 className="m-0 text-light">Testimonals</h4>
                  </div>
                </div>
                <div className="test-title mt-3">
                  <h3>Don't Take Our Word for It, Hear Theirs</h3>
                </div>
                <div className="test-slider mt-5">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    speed={1500}
                    autoplay={{ delay: 2000 }}
                    modules={[Autoplay, EffectFade]}
                  >
                    <SwiperSlide>
                      <div className="test-slide1">
                        <div className="start d-flex align-items-center text-warning">
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                     
                        </div>
                        <div className="test-review text-light">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id sit magnam illo vitae? Facere ex saepe neque, soluta explicabo repellat, beatae nobis ratione, expedita exercitationem atque. Officiis, alias veritatis?</p>
                        </div>
                        <div className="test-revimg text-light d-flex align-items-center gap-3">
                            <div className="revimg">
                                <img src="\assets\pro-2.jpeg" className="img-fluid"/>
                            </div>
                            <div className="revname">
                                <h5 className="m-0">Jhon</h5>
                                <p>Founder of Chenniyan F.C.</p>
                            </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="test-slide1">
                        <div className="start d-flex align-items-center text-warning">
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                     
                        </div>
                        <div className="test-review text-light">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id sit magnam illo vitae? Facere ex saepe neque, soluta explicabo repellat, beatae nobis ratione, expedita exercitationem atque. Officiis, alias veritatis?</p>
                        </div>
                        <div className="test-revimg text-light d-flex align-items-center gap-3">
                            <div className="revimg">
                                <img src="\assets\pro-2.jpeg" className="img-fluid"/>
                            </div>
                            <div className="revname">
                                <h5 className="m-0">Jhon</h5>
                                <p>Founder of Chenniyan F.C.</p>
                            </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="test-slide1">
                        <div className="start d-flex align-items-center text-warning">
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                     
                        </div>
                        <div className="test-review text-light">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id sit magnam illo vitae? Facere ex saepe neque, soluta explicabo repellat, beatae nobis ratione, expedita exercitationem atque. Officiis, alias veritatis?</p>
                        </div>
                        <div className="test-revimg text-light d-flex align-items-center gap-3">
                            <div className="revimg">
                                <img src="\assets\pro-2.jpeg" className="img-fluid"/>
                            </div>
                            <div className="revname">
                                <h5 className="m-0">Jhon</h5>
                                <p>Founder of Chenniyan F.C.</p>
                            </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="test-slide1">
                        <div className="start d-flex align-items-center text-warning">
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                     
                        </div>
                        <div className="test-review text-light">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id sit magnam illo vitae? Facere ex saepe neque, soluta explicabo repellat, beatae nobis ratione, expedita exercitationem atque. Officiis, alias veritatis?</p>
                        </div>
                        <div className="test-revimg text-light d-flex align-items-center gap-3">
                            <div className="revimg">
                                <img src="\assets\pro-2.jpeg" className="img-fluid"/>
                            </div>
                            <div className="revname">
                                <h5 className="m-0">Jhon</h5>
                                <p>Founder of Chenniyan F.C.</p>
                            </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="test-slide1">
                        <div className="start d-flex align-items-center text-warning">
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                     
                        </div>
                        <div className="test-review text-light">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id sit magnam illo vitae? Facere ex saepe neque, soluta explicabo repellat, beatae nobis ratione, expedita exercitationem atque. Officiis, alias veritatis?</p>
                        </div>
                        <div className="test-revimg text-light d-flex align-items-center gap-3">
                            <div className="revimg">
                                <img src="\assets\pro-2.jpeg" className="img-fluid"/>
                            </div>
                            <div className="revname">
                                <h5 className="m-0">Jhon</h5>
                                <p>Founder of Chenniyan F.C.</p>
                            </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    
                  </Swiper>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="test-poster text-center p-1">
                    <img src="\assets\messi-removebg-preview.png" className="img-fluid"/>
                </div>
              </div>
            </div>
            </div>
      
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonal;
