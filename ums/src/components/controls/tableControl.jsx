
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
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
import { Link } from "react-router-dom";
import defUserImage from "../../asset/defUserImage.png";
import Delete from "./deleteControl";

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
                {
                    items.map(item => {
                        return (
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.description}</td>
                            <td>{item.time}</td>
                            <td>{item.date}</td>
                            <td>{item.user}</td>
                            <td>
                              <div className="d-flex d-sm-inline-flex">
                                  <span className=" ">
                                    <Link to="">
                                      <IconButton
                                        className="text-success"
                                        style={smallButtonStyle}>
                                        <VisibilityOutlinedIcon />
                                      </IconButton>
                                    </Link>
                                  </span>
                                  <span className="d-flex d-sm-inline-flex ">
                                    <Delete 
                                      title="Delete Log?" 
                                      desc="Deleting Log is permanent and cannot be undone"
                                    />
                                  </span>
                                </div>
                              </td>
                            </tr>
                        );
                    })
                }
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