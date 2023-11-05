import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import React from "react";
import dummy from "../../asset/dummy.jpg";
import "./navbar.css";


const Navbar = () => {
  return (
    <>
      <nav className="navbar p-0 fixed-top d-flex flex-row">
        <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas">
            <span>
              <MenuOpenIcon />
            </span>
          </button>
        </div>
        <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-toggle="minimize">
            <MenuIcon />
          </button>
          <ul className="navbar-nav w-100">
            <li className="nav-item w-100">
              <h4 className="d-sm-block d-md-block d-lg-none text-center">
                User Management
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
            <div className=" d-flex justify-content-between">
              <span className=" ">
                <IconButton color="primary">
                  <NotificationsIcon />
                </IconButton>
              </span>
              <div className="d-flex d-sm-inline-flex">
                <span className=" d-none d-sm-none  d-md-none d-lg-block">
                  <IconButton color="primary">
                    <SettingsIcon />
                  </IconButton>
                </span>
                <span className=" d-none d-sm-none  d-md-none d-lg-block">
                  <IconButton color="primary">
                    <ExitToAppIcon />
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
