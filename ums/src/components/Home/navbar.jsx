import React from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import dummy from "../../asset/dummy.jpg";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import Signout from "./signout";

const Navbar = () => {
  return (
    <>
      <nav className="navbar p-0 fixed-top d-flex flex-row">
        <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample">
            <span>
              <MenuOpenIcon />
            </span>
          </button>
        </div>

        <div
          className="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <img
              className="rounded-circle"
              src={dummy}
              alt=""
              style={{ width: "100px" }}
            />
            {/* <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"></button> */}
          </div>
          <div className="offcanvas-body ">
            <h2 className="fw-bold">Marky</h2>
            <h6 className="text-warning">Admin</h6>
            <div className="dropdown mt-3">
              <ul className="nav flex-column">
                <li className="nav-item menu-items ">
                  <Link to="/dashboard" className="nav-link text-black">
                    <DashboardIcon style={{ margin: 5 }} />
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item menu-items">
                  <Link
                    className="nav-link text-black"
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
                      <li
                        className="nav-item  text-black"
                        style={{ textIndent: 30 }}>
                        {" "}
                        <Link className="nav-link  text-black" to="/users">
                          <PersonOutlineIcon />
                          Users
                        </Link>
                      </li>
                      <li className="nav-item  " style={{ textIndent: 30 }}>
                        {" "}
                        <Link className="nav-link text-black" to="/role">
                          <SupervisorAccountIcon />
                          Role
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item menu-items ">
                  <Link to="/dashboard" className="nav-link text-black">
                    <SettingsIcon style={{ margin: 5 }} />
                    Settings
                  </Link>
                </li>
                <li className="nav-item menu-items ">
                  <Link to="/dashboard" className="nav-link text-black">
                    <ExitToAppIcon style={{ margin: 5 }} />
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
          <ul className="navbar-nav w-100">
            <li className="nav-item w-100">
              <h4 className="d-m-block d-md-block d-lg-none text-center">
                User Managemesnt
              </h4>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <div className="d-none d-sm-none d-md-none d-lg-block">
              <div className="d-flex flex-row d-sm-inline-flex ">
                <div className="d-flex flex-column">
                  <h5 className="mb-0 d-sm-block navbar-profile-name fw-bolder text-center">
                    Marky
                  </h5>
                  <h6 className=" mb-0 text-warning ">Admin</h6>
                </div>
                <img
                  className="rounded-circle mx-2"
                  src={dummy}
                  alt=""
                  style={{ width: 40 }}
                />{" "}
              </div>
            </div>
            <div className=" d-flex justify-content-center align-items-center">
              <span className=" ">
                <IconButton color="primary">
                  <NotificationsIcon />
                </IconButton>
              </span>
              <div className="d-flex justify-content-center align-items-center">
                <span className=" d-none d-sm-none  d-md-none d-lg-block">
                  <IconButton color="primary">
                    <SettingsIcon />
                  </IconButton>
                </span>
                <span className=" d-none d-sm-none  d-md-none d-lg-block">
                  <IconButton color="primary">
                    <Signout />
                  </IconButton>
                </span>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
