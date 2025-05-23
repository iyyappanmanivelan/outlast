import React from "react";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Telegram,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function Footer() {

  const router = useNavigate()



  return (
    <section className="bg-dark text-light py-5">
      <div className="footer-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 d-flex justify-content-center">
              <div className="footerpart">
                <div className="outlast_logo">
                  <img src="\assets\outlast_logo.png" className="img-fluid" />
                </div>
                <div className="outlast-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex justify-content-center">
              <div className="footerpart">
                <div className="footer-title">
                  <h3>Useful Links</h3>
                </div>
                <div className="footer-link">
                  <div className="fl-link d-flex" onClick={()=>{router('/')}}>
                    <h6>
                      <ChevronRight />
                    </h6>
                    <h6>HOME</h6>
                  </div>
                  <div className="fl-link d-flex" onClick={()=>{router('/about')}}>
                    <h6>
                      <ChevronRight />
                    </h6>
                    <h6>ABOUT</h6>
                  </div>
                  <div className="fl-link d-flex">
                    <h6>
                      <ChevronRight />
                    </h6>
                    <h6>MATCH</h6>
                  </div>
                  <div className="fl-link d-flex">
                    <h6>
                      <ChevronRight />
                    </h6>
                    <h6>LEAGUE STRUCTURE</h6>
                  </div>
                  <div className="fl-link d-flex">
                    <h6>
                      <ChevronRight />
                    </h6>
                    <h6>BRANCH</h6>
                  </div>
                  <div className="fl-link d-flex">
                    <h6>
                      <ChevronRight />
                    </h6>
                    <h6>CONTACT US</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex justify-content-center">
              <div className="footerpart">
                <div className="footer-title">
                  <h3>Contact Info</h3>
                </div>
                <div className="footer-link">
                  <div className="fl-link d-flex">
                    <h6>
                      <ChevronRight />
                    </h6>
                    <h6>kicks@mail.com</h6>
                  </div>
                  <div className="fl-link d-flex">
                    <h6>
                      <ChevronRight />
                    </h6>
                    <h6>+2344 900</h6>
                  </div>
                  <div className="fl-link d-flex">
                    <h6>
                      <ChevronRight />
                    </h6>
                    <h6>102 Spring, London</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex justify-content-center">
              <div className="footerpart">
                <div className="footer-title">
                  <h3>Follow Us</h3>
                </div>
                <div className="footer-link d-flex gap-3 align-items-center">
                  <h4>
                    <Instagram />
                  </h4>
                  <h4>
                    <Youtube />
                  </h4>
                  <h4>
                    <Facebook />
                  </h4>
                  <h4>
                    <Twitter />
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-2 py-3">
        <div className="container border-top">
          <div className="row pt-5">
            <div className="col-lg-6 ">
              <h6>
                Copyright © 2024 Kicks, All rights reserved. Present by
                CreedCreatives
              </h6>
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center justify-content-end gap-4">
                <div className="terms d-flex align-items-center gap-1">
                  <h6>
                    <ChevronRight />
                  </h6>
                  <h6>Terms & Condition</h6>
                </div>
                <div className="privacy d-flex align-items-center gap-1">
                  <h6>
                    <ChevronRight />
                  </h6>
                  <h6>Privacy Policy</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
