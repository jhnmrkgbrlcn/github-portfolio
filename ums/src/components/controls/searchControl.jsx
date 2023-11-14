import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import React, { useState } from "react";
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
// import Data from "./Data.json";

const SearchControl =  ({
    name
}) => {
    return (
        <>
        <div className="search-container">
            <div class="input-group">
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control" />
                </div>
                <button type="search" class="btn">
                <i class="bi bi-search"></i>
                </button>
            </div>
        </div>
        </>
    );
}

export default SearchControl;

SearchControl.propTypes = {
    name: PropTypes.string
}