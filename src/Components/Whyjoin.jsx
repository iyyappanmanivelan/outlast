import React from "react";

function Whyjoin() {
  return (
    <section className="my-5">
      <div className="why-join">
        <div className="container position-relative">
           <div className="row">
           <div className="col-lg-6">
            <div className="whyjoin-img"       data-aos="fade-right"
              data-aos-offset="1000"
              data-aos-easing="ease-in-sine">
              <img src="\assets\ban2.jpg" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="getknow d-flex align-items-center gap-3"       data-aos="fade-left"
              data-aos-offset="1000"
              data-aos-easing="ease-in-sine">
              <div className="fticon">
                <img src="\assets\football.png" className="img-fluid" />
              </div>
              <div className="gt-title">
                <h4 className="m-0"> Get To Know US</h4>
              </div>
            </div>
            <div className="gt-subtitle py-4"       data-aos="fade-right"
              data-aos-offset="1000"
              data-aos-easing="ease-in-sine">
                <h3>Elevate Your Game, Expand Your Horizons with Us</h3>
              </div>
              <div className="gt-prara"       data-aos="fade-left"
              data-aos-offset="1000"
              data-aos-easing="ease-in-sine">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
          </div>
           </div>
           <div className="player-growth position-absolute "       data-aos="zoom-out"
              data-aos-offset="700"
              data-aos-easing="ease-in-sine">
             <div className="plyr text-center">
              <h4>50+</h4>
              <p>Active Player</p>

             </div>
             <div className="plyr acplyr text-center">
             <h4>230+</h4>
             <p>Academy Alumini</p>
 
             </div>
             <div className="plyr text-center">
             <h4>175+</h4>
             <p>Become Pro Player</p>

             </div>
           </div>
        </div>
      </div>
      <div className="whyjoin-list my-3" >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="wyj-box position-relative">
                <h2>Certified Coaches</h2>
                <p>Our Coaches Certified by AIFF & AIFC</p>
                <div className="wyj-icon position-absolute">
                  <img src="\assets\coach.png" className="img-fluid"/>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="wyj-box  position-relative">
                <h2>Specialized Training</h2>
                <p>Coaches Customized Sessions To Align With Daily Targets</p>
                <div className="wyj-icon position-absolute">
                  <img src="\assets\mentoring.png" className="img-fluid"/>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="wyj-box  position-relative">
                <h2>Infrastructure</h2>
                <p>FIFA Standard Artificial Turf Grounds</p>
                <div className="wyj-icon position-absolute">
                  <img src="\assets\stadium.png" className="img-fluid"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whyjoin;
