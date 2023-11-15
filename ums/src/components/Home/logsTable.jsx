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
import LogData from "../Data/logs.json";

import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import SearchControl from "../controls/searchControl";
import SortControl from "../controls/sortControl";
import TableControl from "../controls/tableControl";
import Data from "./Data.json";
import Delete from "./delete";



const LogsTable = ({
    name
}) => {
    const headers = ["#", "Description", "Time Created", "Date Created", "User", "Actions"];

return (                                                                
    <>
    <div className="content-wrapper">
        <div className="wrapper">
            <h2>Logs</h2>
            <div className="d-flex justify-content-end align-items-center mb-2">
                <SortControl name={"sort-by"} />
                <SearchControl name="search-name"/>
            </div>
            
            <TableControl headers={headers} items={LogData} />
        </div>
    </div>
    </>
  )}

export default LogsTable;

LogsTable.propTypes = {
    name: PropTypes.string
}