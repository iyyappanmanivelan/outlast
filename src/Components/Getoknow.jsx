import React from "react";

function Getoknow() {
  return (
    <section className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              data-aos="fade-right"
              data-aos-offset="1000"
              data-aos-easing="ease-in-sine"
            >
              <div className="getknow d-flex align-items-center gap-3">
                <div className="fticon">
                  <img src="\assets\football.png" className="img-fluid" />
                </div>
                <div className="gt-title">
                  <h4 className="m-0"> Get To Know US</h4>
                </div>
              </div>
              <div className="getknow-sub py-3 ">
                <h3 className="py-2">
                  We Don't Just Coach, We Craft World Class-Champions
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                  dapibus leo.
                </p>
              </div>
            </div>

            <div className="head-coach"    data-aos="fade-left"
              data-aos-offset="1000"
              data-aos-easing="ease-in-sine">
              <div className="info">
                <p>
                  “Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo.”{" "}
                </p>
              </div>
              <div className="hc-profile d-flex align-items-center gap-3 py-2">
                <div className="hc-img">
                  <img src="\assets\pro-2.jpeg" className="img-fluid" />
                </div>
                <div className="hc-position">
                  <h3>Muzhamil</h3>
                  <h5>Head Coach</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </section>
  );
}

export default Getoknow;
