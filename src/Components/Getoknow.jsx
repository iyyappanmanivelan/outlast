import React from "react";

function Getoknow() {
  return (
    <section className="updown-space" style={{backgroundColor:"hsl(17.97deg 77.97% 55.49%)"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <div className="getknow d-flex align-items-center gap-3">
                <div className="fticon">
                  <img src="\assets\football-black.png" className="img-fluid" />
                </div>
                <div className="gt-title">
                  <h4 className="m-0 text-dark"> Get To Know US</h4>
                </div>
              </div>
              <div className="getknow-sub py-3 text-light">
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

            <div className="head-coach text-light">
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
