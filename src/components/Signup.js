import React from 'react'
import "../components/Signup.css";
import Swal from "sweetalert2";
import { Formik } from "formik";
import app_config from "../config";
function Signup({ setOpenSignup}){
    const url = app_config.api_url;

  const signupform = {
    fullname: "",
    email: "",
    password: "",
    repeatpassword:"",
  };

  const formSubmit = (values) => {
    console.log(values);

    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    // request on server and parse the json response
    fetch(url + "user/add", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message == "success") {
          Swal.fire({
            icon: "success",
            title: "Registered!",
            text: "Now Login to Continue",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Something went wrong",
          });
        }
      });
  };

  return (
    <div>
        <section
  className="vh-100 bg-image"
  style={{
    backgroundImage:
      'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'
  }}
>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{ borderRadius: 15 }}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">
                Create an account
              </h2>
              <Formik initialValues={signupform} onSubmit={formSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit} class="mb-3">
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="fullname"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    value={values.fullname}
                  />
                  <label className="form-label" htmlFor="form3Example1cg">
                    Your Name
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    value={values.email}
                  />
                  <label className="form-label" htmlFor="form3Example3cg">
                    Your Email
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    value={values.password}
                  />
                  <label className="form-label" htmlFor="form3Example4cg">
                    Password
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="repeatpassword"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    value={values.repeatpassword}
                  />
                  <label className="form-label" htmlFor="form3Example4cdg">
                    Repeat your password
                  </label>
                </div>
                <div className="form-check d-flex justify-content-center mb-5">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue=""
                    id="form2Example3cg"
                  />
                  <label className="form-check-label" htmlFor="form2Example3g">
                    I agree all statements in{" "}
                    <a href="#!" className="text-body">
                      <u>Terms of service</u>
                    </a>
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                  >
                    Register
                  </button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">
                  Have already an account?{" "}
                  <a href="/login" className="fw-bold text-body">
                    <u>Login here</u>
                  </a>
                </p>
                </form>
                )}
                </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Signup