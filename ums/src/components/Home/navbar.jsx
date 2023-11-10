import React from "react";
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
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </div>
            <div className="dropdown mt-3">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown">
                Dropdown button
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
