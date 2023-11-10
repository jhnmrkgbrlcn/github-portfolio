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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default dashboard;
