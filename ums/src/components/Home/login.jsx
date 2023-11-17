import { Link } from "react-router-dom";
import logo from "../../asset/logo.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const staticUsername = "cueno@gmail.com";
  const staticPassword = "password";

  const navigate = useNavigate();
  
  const handleLogin = () => {
    if (username === staticUsername && password === staticPassword) {
      setLoggedIn(true);
      navigate("/dashboard");
    } else {
      setErrorMessage("Wrong username or password. Please try again.");
    }
  };
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
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      
                      />
                        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                      <p className="small text-end p-2">
                        <a
                          className="text-white-50  "
                          href="#!"
                          style={{ textDecoration: "none" ,}}>
                          Forgot password?
                        </a>
                      </p>
                    </div>                  
                    <button className="d-block btn btn-outline-light btn-lg " 
                    style={{margin:"auto"}} 
                    onClick={handleLogin}>Login</button>
                   
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