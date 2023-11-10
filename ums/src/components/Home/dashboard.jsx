import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./card";

function dashboard() {
  return (
    <>
      <div className="content-wrapper">
        <h1>DashBoard</h1>
        <div className="container text-center">
          <div className="row">

            <div className="col">
              <Card link="/users" num="50" desc="TOTAL USERS" />
            </div>
            <div className="col">
              <Card link="/role" num="5" desc="ROLES" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Card link="/" num="30" desc="ACTIVE USERS" />
            </div>
            <div className="col">
              <Card link="/" num="0" desc="NOTIFICATIONS" />
            <div className="col-md-6">
              <Card>
                <h1 className="fw-bold" style={numStyle}>
                  50
                </h1>
                <p>TOTAL USERS</p>
              </Card>
            </div>
            <div className="col-md-6">
              <Card>
                <h1 className="fw-bold" style={numStyle}>
                  5
                </h1>
                <p>ROLES</p>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Card>
                <h1 className="fw-bold" style={numStyle}>
                  30
                </h1>
                <p>ACTIVE USERS</p>
              </Card>
            </div>
            <div className="col-md-6">
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
