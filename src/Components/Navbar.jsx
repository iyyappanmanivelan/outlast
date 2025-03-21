import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";
import { Link } from "react-router-dom";




function Navbar() {
  return (
    <section className="navhead">
      <nav class="navbar navbar-expand-lg  ">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-flex justify-content-between "
            id="navbarNav"
          >
            <div className="outlast_logo">
              <img src="\assets\outlast_logo.png" className="img-fluid" />
            </div>
            <div>
              <ul class="navbar-nav pagemenu gap-5">
              <Link to="/">
                  <a class="nav-link active" aria-current="page"  >
                    HOME
                  </a>
                  </Link>
                <li class="nav-item">
                  <Link to="/about">
                  <a class="nav-link active" aria-current="page"  >
                    ABOUT
                  </a>
                  </Link>
                
                </li>
                <li class="nav-item">
                <Link to="/match">
                  <a class="nav-link active" aria-current="page"  >
                    MATCH
                  </a>
                  </Link>
                </li>
                <li class="nav-item">
                <Link to="/league">
                  <a class="nav-link active" aria-current="page"  >
                    LEAGUE STRUCTURE
                  </a>
                  </Link>
                </li>
                <li class="nav-item">
                <Link to="/branch">
                  <a class="nav-link active" aria-current="page"  >
                    BRANCH
                  </a>
                  </Link>
                </li>
                <li class="nav-item">
                <Link to="/contacts">
                  <a class="nav-link active" aria-current="page"  >
                    CONTACT US
                  </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="register">
              <button className="btn">Register Now</button>
            </div>
       
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
