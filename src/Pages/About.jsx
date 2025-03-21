import React from "react";

function About() {
  return (
    <section>
      <div className="container-fluid p-0">
        <div className="about-banner position-relative">
          <div className="about-img position-relative">
            <img src="\assets\grass.jpg" className="w-100" />
            <div className="overlay2 position-absolute"></div>
          </div>
          <div className="about-title position-absolute">
            <h3>ABOUT US</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
