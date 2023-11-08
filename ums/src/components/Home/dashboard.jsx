import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./card";

const numStyle = {
  fontSize: "50px",
};

function dashboard() {
  return (
    <>
      <div className="content-wrapper">
        <h1>DashBoard</h1>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <Card>
                <h1 className="fw-bold" style={numStyle}>
                  50
                </h1>
                <p>TOTAL USERS</p>
              </Card>
            </div>
            <div className="col">
              <Card>
                <h1 className="fw-bold" style={numStyle}>
                  5
                </h1>
                <p>ROLES</p>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Card>
                <h1 className="fw-bold" style={numStyle}>
                  30
                </h1>
                <p>ACTIVE USERS</p>
              </Card>
            </div>
            <div className="col">
              <Card>
                <h1 className="fw-bold" style={numStyle}>
                  0
                </h1>
                <p>NOTIFICATIONS</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default dashboard;
