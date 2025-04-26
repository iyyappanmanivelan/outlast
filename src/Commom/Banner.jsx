import React from "react";

function Banner({ title, content }) {
  return (
    <section>
      <div className="container-fluid p-0">
        <div className="about-banner position-relative">
          <div className="about-img position-relative">
            <img src="\assets\grass.jpg" className="w-100" />
            <div className="overlay2 position-absolute"></div>
          </div>
          <div className="about-title position-absolute">
            <h3 className="text-center">{title}</h3>
            <div className="d-flex justify-content-center mt-5">
            <p className="text-center">
              {`${content}`}
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
