import React from "react";
import { GeoAltFill } from "react-bootstrap-icons";

function OurTeam({ data }) {
  return (
    <section
      className="updown-space"
      style={{ backgroundColor: "rgb(12, 12, 12)" }}
    >
      <div className="container">
        <div className="getknow d-flex justify-content-center align-items-center gap-3 ">
          <div className="fticon">
            <img src="\assets\football-og.png" className="img-fluid" />
          </div>
          <div className="gt-title">
            <h4 className="m-0 cg">Our Teams</h4>
          </div>
        </div>
        <div className="row mt-5 pt-5">
            {
                data.map((data)=>(
                    <div className="col-lg-4">
                        <div className="team-grid my-4 mx-3 position-relative">
                             <div className="team-pic text-center">
                                <img src={data?.Team_pic} className="img-fluid"/>
                             </div>
                             <div className="teamwise text-center text-light d-flex justify-content-center gap-3 align-items-center">
                                <img src="assets\v-icon4.png" className="img-fluid" width="30px"/>
                                <h3 className="m-0">{data?.Team_name}</h3>
                                
                                
                             </div>
                             <div className="teamview text-center text-light d-flex justify-content-center gap-3 align-items-center">
                                <h5 className="text-light"><GeoAltFill/></h5>
                                <h6 className="m-0">{data?.location}</h6>
                             </div>

                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
