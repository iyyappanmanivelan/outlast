import React from "react";

function Ourstory({ data }) {
  return (
    <section className="updown-space" >
      <div className="container">
        <div className="row">
            <div className="col-lg-6">
            <div className="getknow d-flex justify-content-start align-items-center gap-3">
          <div className="fticon">
            <img src="\assets\football.png" className="img-fluid" />
          </div>
          <div className="gt-title">
            <h4 className="m-0"> Our Story</h4>
          </div>
        </div>

        <div className="story-sec mt-5 ">
          <h5 className="">{data?.content}</h5>
        </div>
        <div className="story-sec mt-5">
          <h5 className="">{data?.content_2}</h5>
        </div>
            </div>
            <div className="col-lg-6">
                <div className="frame-img">
                    <img src={data?.img} className="img-fluid"/>
                </div>
            </div>
        </div>
      
      </div>
    </section>
  );
}

export default Ourstory;
