import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import React, { useState } from "react";

// import Data from "./Data.json";

const SearchControl =  ({
    name,
    items,
    onSuccess,
}) => {
    // const [searchValue, setSearchValue] = useState("");
    const search = (data) => {
        const searchValue = data.target.value.toLowerCase();
        const matchedSearch = items.filter((log) => {
            return (
            log.description.toLowerCase().includes(searchValue) ||
            log.ID.toString().includes(searchValue) ||
            log.time.toLowerCase().includes(searchValue) ||
            log.date.toLowerCase().includes(searchValue) ||
            log.user.toLowerCase().includes(searchValue)
            );
        });
        onSuccess(matchedSearch);
    }
    return (
        <>
        <div className="search-container">
            <div class="input-group">
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control" onChange={search} />
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
    name: PropTypes.string,
    items: PropTypes.array,
    onSuccess: PropTypes.func,
}