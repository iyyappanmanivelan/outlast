import React from "react";
import Button from "../Commom/Button";

function Whychoose({ data }) {
  return (
    <section className=" choose-bg position-relative">
        <div className="choose-content position-absolute updown-space">
        <div className="container">
        <div className="getknow d-flex align-items-center justify-content-center gap-3">
          <div className="fticon">
            <img src="\assets\football-black.png" className="img-fluid" />
          </div>
          <div className="gt-title ">
            <h4 className="m-0 text-dark">Why Choose Us</h4>
          </div>
        </div>

        <div className="choose-title d-flex align-items-center justify-content-between my-5 py-3">
          <h3>Develop your football potential at Oulast F.C.</h3>
          <Button color={"#fff"} bgcolor={"#000"} text={"View Programm"} />
        </div>
        <div className="choose-intro">
          <div className="row">
            {
              data?.map((item , i)=>(
                <div className="col-lg-4">
                  <div className="choose-card mb-5 p-3 bg-light rounded">

                    <div className="cc-img text-start"><img src={item?.icon} className="img-fluid"/></div>
                    <div className="cc-title text-start my-2">{item.title}</div>
                    <div className="cc-explain">{item?.content}</div>
                    
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
        </div>
      <div className="overlay-3 position-absolute"></div>
    </section>
  );
}

export default Whychoose;
