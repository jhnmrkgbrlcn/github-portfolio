import Delete from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import {
    AiFillCloseCircle,
    AiOutlineCaretLeft,
    AiOutlineCaretRight,
    AiOutlineEllipsis,
} from "react-icons/ai";
import { BiSortAlt2 } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import defUserImage from "../../asset/defUserImage.png";

const smallButtonStyle = {
    fontSize: "13px",
  };


const TableControl = ({
    headers,
    name,
    items
}) => {
return (                                                                
    <>
    <div className="table-responsive">
        <table className="table">
            <thead>
                <tr>
                {
                    headers.map(item => {
                        return (<th>{item}</th>);
                    })
                }
                </tr>
            </thead>
            <tbody>
                <tr>
                {
                    items.map(item => {
                        return (<td>{item}</td>);
                    })
                }
                </tr>
                <td>
                    <div className="d-flex d-sm-inline-flex">
                        <span className=" ">
                          <Link to="/user/adduser">
                            <IconButton
                              className="text-success"
                              style={smallButtonStyle}>
                              <BsFillPencilFill />
                            </IconButton>
                          </Link>
                        </span>
                        <span className=" d-none d-sm-none  d-md-none d-lg-block">
                          <Delete />
                        </span>
                        <span className=" d-none d-sm-none  d-md-none d-lg-block">
                          <Link to="/user/profile">
                            <IconButton
                              className="text-dark"
                              style={smallButtonStyle}>
                              <AiOutlineEllipsis />
                            </IconButton>
                          </Link>
                        </span>
                      </div>
                </td>
            </tbody>
            
        </table>
    </div>
    </>
  )}

export default TableControl;

TableControl.propTypes = {
    headers: PropTypes.any,
    name: PropTypes.string,
    items: PropTypes.any
}