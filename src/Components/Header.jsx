import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { EnvelopeFill, Facebook, Instagram, TelephoneFill, Twitter, Youtube } from "react-bootstrap-icons";


function Header() {
  return (
    <section>
      <div className="tophead py-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center gap-5 ">
              <div className="phone d-flex align-items-center gap-1">
                <h4 className="m-0">
                  <TelephoneFill />
                </h4>
                <h4 className="m-0">918289393</h4>
              </div>
              <div className="mail d-flex align-items-center gap-1 ">
                <h4 className="m-0">
                  <EnvelopeFill />
                </h4>
                <h4 className="m-0">outlast@gmail.com</h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="social-links d-flex align-items-center gap-3 justify-content-end">
                <h5>
                  <Instagram />
                </h5>
                <h5>
                  <Youtube />
                </h5>
                <h5>
                  <Twitter />
                </h5>
                <h5>
                  <Facebook />
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="secondhead">
        <Navbar />
      </div>




    </section>
  );
}

export default Header;
