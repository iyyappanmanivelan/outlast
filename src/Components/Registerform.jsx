import { useFormik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";

function Registerform() {
  const Schemea = Yup.object().shape({
    Name: Yup.string().required("Enter Your Name"),
    Mobile: Yup.string().required("Enter Your Number"),
    Age: Yup.string().required("Enter Your Age"),
    Branch: Yup.string().required("Select Your Branch"),
    Level: Yup.string().required("Select Your Level"),
  });

  const Formik = useFormik({
    initialValues: {
      Name: "",
      Mobile: "",
      Age: "",
      Branch: "",
      Level: "",
    },
    validationSchema: Schemea,

    onSubmit: (values) => {
      console.log("efknekfn", values);
    },
  });

  return (
    <section>
      <div
        class="modal fade p-0"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered">
          <div
            class="modal-content"
            style={{ backgroundColor: "rgb(34, 33, 33)" }}
          >
            <div class="modal-header text-center">
              <h1 class="modal-title fs-5 cg" id="exampleModalLabel">
                Registration Form
              </h1>
              <button
                type="button"
                className="btn-close bg-light p-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body px-4">
              <form onSubmit={Formik.handleSubmit}>
                <label className="cg">Name</label>
                <div className="input-box">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                    {...Formik.getFieldProps("Name")}
                  />
                  {Formik.touched.Name && Formik.errors.Name ? (
                    <small className="text-danger">{Formik.errors.Name}</small>
                  ) : null}
                </div>
                <div className="input-box">
                  <label className="cg">Mobile</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Number"
                    {...Formik.getFieldProps("Mobile")}
                  />
                  {Formik.touched.Mobile && Formik.errors.Mobile ? (
                    <small className="text-danger">
                      {Formik.errors.Mobile}
                    </small>
                  ) : null}
                </div>
                <div className="input-box">
                  <label className="cg">Age</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Age "
                    {...Formik.getFieldProps("Age")}
                  />
                  {Formik.touched.Age && Formik.errors.Age ? (
                    <small className="text-danger">{Formik.errors.Age}</small>
                  ) : null}
                </div>
                <div className="input-box">
                  <label className="cg">Select Your Branch</label>
                  <select
                    className="form-select"
                    {...Formik.getFieldProps("Branch")}
                  >
                    <option disabled selected>
                      Select Your Branch
                    </option>
                    <option value="Santhoshpuram">Santhoshpuram</option>
                    <option value="Perumpakkam">Perumpakkam</option>
                    <option value="Chitlapakkam">Chitlapakkam</option>
                    <option value="Nanganallur">Nanganallur</option>
                    <option value="Medavakkam">Medavakkam</option>
                  </select>
                  {Formik.touched.Branch && Formik.errors.Branch ? (
                    <small className="text-danger">
                      {Formik.errors.Branch}
                    </small>
                  ) : null}
                </div>
                <div className="input-box">
                  <label className="cg">Select Your Level</label>
                  <select
                    className="form-select"
                    {...Formik.getFieldProps("Level")}
                  >
                    <option disabled selected>
                      Select Your Trainig Level
                    </option>
                    <option value="Beginner Training Level">
                      Beginner Training Level
                    </option>
                    <option value="Development Training Level">
                      Development Training Level
                    </option>
                    <option value="Elite Training Level">
                      Elite Training Level
                    </option>
                  </select>
                  {Formik.touched.Level && Formik.errors.Level ? (
                    <small className="text-danger">{Formik.errors.Level}</small>
                  ) : null}
                </div>
                <button className="submit d-none" id="submit">
                  Submit
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <div
                className="register-now text-center"
                onClick={() => {
                  document.getElementById("submit").click();
                }}
              >
                <button>Let's Join</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registerform;
