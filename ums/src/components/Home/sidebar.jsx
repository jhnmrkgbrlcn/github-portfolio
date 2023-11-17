import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../asset/logo.png";
const Sidebar = () => {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <div className="d-flex justify-content-center align-items-center">
            <Link className="" to="">
              <img src={logo} alt="logo" style={{ width: 70 }} />
            </Link>
            <h3 className="text-white">UMS</h3>
          </div>
        </div>
        <ul className="nav">
          <li className="">
            <h2 className="text-white p-3 fw-bold text-center">Menu</h2>
          </li>
          <li className="nav-item menu-items">
            <Link to="/dashboard" className="nav-link">
              <DashboardIcon style={{ margin: 5 }} />
              Dashboard
            </Link>
          </li>
          <li className="nav-item menu-items">
            <Link
              className="nav-link"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample">
              <GroupIcon style={{ margin: 5 }} />
              User Management
            </Link>
            <div className="collapse" id="collapseExample">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item" style={{ textIndent: 30 }}>
                  {" "}
                  <Link className="nav-link" to="/users">
                    <PersonOutlineIcon />
                    Users
                  </Link>
                </li>
                <li className="nav-item" style={{ textIndent: 30 }}>
                  {" "}
                  <Link className="nav-link" to="/role">
                    <SupervisorAccountIcon />
                    Role
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item menu-items">
            <Link to="/logs" className="nav-link">
              <DashboardIcon style={{ margin: 5 }} />
              Logs
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
