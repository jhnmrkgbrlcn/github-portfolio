import React from "react";
import "./navbar.css";
import logo from "../../asset/logo.png";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import dummy from "../../asset/dummy.jpg";

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
            <li className="nav-item w-100"></li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item dropdown">
              <a
                className="nav-link "
                id="profileDropdown"
                href="#"
                data-bs-toggle="dropdown">
                <div className="navbar-profile">
                  <div className="">
                    <p className="mb-0 d-sm-block navbar-profile-name fw-bolder text-center">
                      Cueno John Marky
                    </p>
                    <p className="mb-0 d-sm-block navbar-profile-name fw-bolder text-end text-warning ">
                      Admin
                    </p>
                  </div>
                  <img
                    className="rounded-circle mx-2"
                    src={dummy}
                    alt=""
                    style={{ width: 40 }}
                  />
                  <span className="mdi mdi-menu-down"></span>
                </div>
              </a>

              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list">
                <a className="dropdown-item preview-item" href="">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-account text-primary"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">Profile</p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item" href="">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-settings text-success"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">Settings</p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
              </div>
            </li>
            <div className=" d-flex justify-content-between">
              <span className=" ">
                <IconButton color="primary">
                  <NotificationsIcon />
                </IconButton>
              </span>
              <span className="">
                <IconButton color="primary">
                  <SettingsIcon />
                </IconButton>
              </span>
              <span className="">
                <IconButton color="primary">
                  <ExitToAppIcon />
                </IconButton>
              </span>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
