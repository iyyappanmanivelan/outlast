import { useFormik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";

function Contactform() {
  const Schemea = Yup.object().shape({
    First_Name: Yup.string().required("Enter Your First Name"),
    Last_Name: Yup.string(),
    Mobile: Yup.string().required("Enter Your Mobile"),
    Email: Yup.string().required("Select Your Email"),
    Message: Yup.string().required("Select Your Message"),
  });

  const Formik = useFormik({
    initialValues: {
      First_Name: "",
      Last_Name: "",
      Mobile: "",
      Email: "",
      Message: "",
    },

    validationSchema: Schemea,

    onSubmit: (values) => {
      console.log("efknekfn", values);
    },
  });

  return (
    <section className="updown-space ctbg position-relative">
      <div className="position-absolute w-100 " style={{ zIndex: 1 }}>
        <div className="container">
          <div className="getknow d-flex justify-content-center align-items-center gap-3">
            <div className="fticon">
              <img src="\assets\football-og.png" className="img-fluid" />
            </div>
            <div className="gt-title ">
              <h4 className="m-0 cg">Get In Touch</h4>
            </div>
          </div>
          <form className="m-5" onSubmit={Formik.handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <div className="formgrp">
                  <label className="cg">Firts Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter First Name"
                  />
                  {Formik.touched.First_Name && Formik.errors.First_Name ? (
                    <small className="text-danger">
                      {Formik.errors.First_Name}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="formgrp">
                  <label className="cg">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="formgrp">
                  <label className="cg">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Phone Number"
                  />
                  {Formik.touched.Mobile && Formik.errors.Mobile ? (
                    <small className="text-danger">
                      {Formik.errors.Mobile}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="formgrp">
                  <label className="cg">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                  {Formik.touched.Email && Formik.errors.Email ? (
                    <small className="text-danger">{Formik.errors.Email}</small>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-12">
                <div className="formgrp">
                  <label className="cg">Message</label>
                  <textarea
                    className="w-100"
                    placeholder="Enter Message"
                    style={{ height: "150px", borderRadius: "10px" }}
                  />
                </div>
                <div className="formgrp">
                  <button className="btn w-100 p-3 " type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="overlay6 position-absolute"></div>
    </section>
  );
}

export default Contactform;
