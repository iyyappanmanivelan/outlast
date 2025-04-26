import React from "react";
import { Calendar } from "react-bootstrap-icons";

function Latestnews() {
  return (
    <section className="updown-space" style={{backgroundColor:"rgb(12, 12, 12)"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
          <div className="getknow d-flex align-items-center gap-3 ">
              <div className="fticon">
                <img src="\assets\football-og.png" className="img-fluid" />
              </div>
              <div className="gt-title">
                <h4 className="m-0 cg">Our Lastes Blogs !</h4>
              </div>
            </div>
            <div className="latest-title my-4">
                <h3 className="text-light">Check Out Our Latest News and Article</h3>
            </div>
            <div className="news-box d-flex gap-4">
                <div className="news-img">
                    <img src="\assets\ban1.jpg" className="img-fluid"/>
                </div>
                <div className="news-content">
                <div className="news-time d-flex align-items-center gap-2">
                      <p><Calendar/></p>
                      <p>Febrauary 2023</p>
                    </div>
                    <h5>Boot Camp Confidential: The Secrets of Elite…</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vitae fugiat suscipit id recusandae voluptates nam ab, esse sapiente.</p>
                </div>
            </div>
          </div>
          <div className="col-lg-3">
          <div className="news-box bg-light h-100">
                <div className="news-img text-center">
                    <img src="\assets\ban1.jpg" className="img-fluid"/>
                </div>
                <div className="news-content py-2">
                    <div className="news-time d-flex align-items-center gap-2">
                      <p><Calendar/></p>
                      <p>Febrauary 2023</p>
                    </div>
                    <h5>Boot Camp Confidential: The Secrets of Elite…</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vitae fugiat suscipit id recusandae voluptates nam ab, esse sapiente.</p>
                </div>
            </div>
          </div>
          <div className="col-lg-3">
          <div className="news-box bg-light h-100 ">
                <div className="news-img text-center">
                    <img src="\assets\ban1.jpg" className="img-fluid"/>
                </div>
                <div className="news-content py-2">
                    <div className="news-time d-flex align-items-center gap-2">
                    <p><Calendar/></p>
                    <p>Febrauary 2023</p>
                    </div>
                    <h5>Boot Camp Confidential: The Secrets of Elite…</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vitae fugiat suscipit id recusandae voluptates nam ab, esse sapiente.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Latestnews;
