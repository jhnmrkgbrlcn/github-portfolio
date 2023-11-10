import React from "react";
import { Link } from "react-router-dom";
import logo from "../../asset/logo.png";

function Login() {
  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container h-20">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">
                  <div className=" m-3">
                    <img src={logo} alt="" style={{ width: 150 }} />
                    <h3 className="fw-bold pb-3 text-uppercase">
                      User Management System
                    </h3>

                    <div className="form-outline text-start form-white mb-4">
                      <label className="form-label " for="typeEmailX">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline text-start  form-white mb-4">
                      <label className="form-label" for="typePasswordX">
                        Password
                      </label>
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                      />

                      <p className="small text-end p-2">
                        <a
                          className="text-white-50  "
                          href="#!"
                          style={{ textDecoration: "none" }}>
                          Forgot password?
                        </a>
                      </p>
                    </div>

                    <Link
                      to="/dashboard"
                      className="d-block btn btn-outline-light btn-lg ">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
