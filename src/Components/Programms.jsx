import React from "react";
import { Check } from "react-bootstrap-icons";

function Programms() {
  return (
    <section className="program">
      <div className="container">
        <div className="pg-1">
          <div className="getknow d-flex align-items-center justify-content-center gap-3 "    data-aos="fade-right"
              data-aos-offset="1000"
              data-aos-easing="ease-in-sine">
            <div className="fticon">
              <img src="\assets\football.png" className="img-fluid" />
            </div>
            <div className="gt-title">
              <h4 className="m-0">Our Programms</h4>
            </div>
          </div>
          <div className="programm-sub text-center pt-3 "    data-aos="fade-left"
              data-aos-offset="1000"
              data-aos-easing="ease-in-sine">
            <h3>Navigate the Spectrum of Success with Our Programs</h3>
          </div>
        </div>
        <div className="pg-2 mt-5">
            <div className="row">
                <div className="col-lg-4">
                    <div className="pgbox"  
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-offset="500"
                    data-aos-easing="ease-in-sine">

                        <div className="pg-img"><img src="\assets\ban4.jpg" className="img-fluid"/></div>
                        <div className="pg-title  pt-4" ><h3>Beginner Training Level</h3></div>
                        <div className="pg-types">
                            <div className=" pgt d-flex alignm-items-center gap-3">
                                <img src="\assets\technical.png"/>
                                <h4>Technical Training</h4>
                            </div>
                            <div className=" pgt d-flex alignm-items-center gap-3">
                                <img src="\assets\tactical.png"/>
                                <h4>Tactical Training</h4>
                            </div>
                            <div className=" pgt d-flex alignm-items-center gap-3">
                                <img src="\assets\physical.png"/>
                                <h4>Physical Training</h4>
                            </div>
                            <div className=" pgt d-flex alignm-items-center gap-3">
                                <img src="\assets\match_icon.png"/>
                                <h4>Praticipating Intra Zonal Leagues & Practice Matches</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
           <div className="pgbox"  data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="500"
              data-aos-easing="ease-in-sine">
                        <div className="pg-img"><img src="\assets\ban4.jpg" className="img-fluid"/></div>
                        <div className="pg-title pt-4" ><h3>Developement Training Level</h3></div>
                        <div className="pg-types">
                            <div className=" pgt d-flex alignm-items-center gap-3">
                                <img src="\assets\technical.png"/>
                                <h4>Technical Training</h4>
                            </div>
                            <div className=" pgt d-flex alignm-items-center gap-3">
                                <img src="\assets\tactical.png"/>
                                <h4>Tactical Training</h4>
                            </div>
                            <div className=" pgt d-flex alignm-items-center gap-3">
                                <img src="\assets\physical.png"/>
                                <h4>Physical Training</h4>
                            </div>
                            <div className=" pgt d-flex alignm-items-center gap-3">
                                <img src="\assets\match_icon.png"/>
                                <h4>Praticipating Intra Zonal Leagues & Practice Matches & Outside Tournaments</h4>
                            </div>
                            <div className=" pgt d-flex alignm-items-center gap-3">
                                <img src="\assets\beach.png"/>
                                <h4>Beach Training  (or) </h4>
                            </div>
                            <div className=" pgt d-flex alignm-items-center gap-3">
                                <img src="\assets\hill.png"/>
                                <h4>Hill Training </h4>
                                <h4>( Monthly once )</h4>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4"  data-aos="fade-left"
                   data-aos-duration="2000"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine">
                <div className="pgbox">
                        <div className="pg-img"><img src="\assets\ban4.jpg" className="img-fluid"/></div>
                        <div className="pg-title  pt-4" ><h3>Elite Training Level</h3></div>
                        <div className="pg-types">
                            <div className=" pgt d-flex alignm-items-center gap-3">
                                <img src="\assets\technical.png"/>
                                <h4>Technical Training</h4>
                            </div>
                            <div className=" pgt d-flex alignm-items-center gap-3">
                                <img src="\assets\tactical.png"/>
                                <h4>Tactical Training</h4>
                            </div>
                            <div className=" pgt d-flex alignm-items-center gap-3">
                                <img src="\assets\physical.png"/>
                                <h4>Physical Training</h4>
                            </div>
                            <div className=" pgt d-flex alignm-items-center gap-3">
                                <img src="\assets\match_icon.png"/>
                                <h4>Praticipating Intra Zonal Leagues & Practice Matches</h4>
                            </div>
                            <div className=" pgt d-flex alignm-items-center gap-3">
                                <img src="\assets\elite.png"/>
                                <h4>Best Player from all the venues will be selected for the elite teams , This teams will be Participating in the top leagues and tournaments </h4>
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

export default Programms;
