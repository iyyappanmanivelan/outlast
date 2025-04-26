import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="navhead" style={{ backgroundColor: "#222121" }}>
      <div className="container">
        <nav
          className="navbar navbar-expand-lg "
          style={{ backgroundColor: "#222121" }}
        >
          <Link to="/">
            <a className="navbar-brand">
              <div className="outlast_logo">
                <img src="\assets\outlast_logo.png" className="img-fluid" />
              </div>
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navmain justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav pagemenu gap-2">
              <li className="nav-item active">
                <Link to="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about">
                  {" "}
                  <a className="nav-link">About Us</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/programm">
                  {" "}
                  <a className="nav-link">Our Programs</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/league">
                  {" "}
                  <a className="nav-link">Our Leagues</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact">
                  {" "}
                  <a className="nav-link">Contact Us</a>
                </Link>
              </li>
            </ul>
            <div className="register-now">
                <button className="btn">Register Now</button>
              </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
