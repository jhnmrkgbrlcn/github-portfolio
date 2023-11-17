// utils
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
//data
import LogData from "../Data/logs.json";

// controls
import PaginationControl from "../controls/paginationControl";
import SearchControl from "../controls/searchControl";
import SortControl from "../controls/sortControl";
import TableControl from "../controls/tableControl";

const LogsTable = ({
    name
}) => {
    // states
    const [logs, setLogs] = useState(LogData);
    const [searchedLogs, setSearchedLogs] = useState(LogData);
    const [currentPage, setCurrentPage] = useState(1);

    const rerender = React.useReducer(() => ({}), {})[1]

    const headers = ["#", "Description", "Time Created", "Date Created", "User", "Actions"];

    const reloadLogs = (data) => {
        rerender();
        setLogs(data);
    }

    const sortData = (data) => {
        setCurrentPage(1);
        const last = 1 * 5;
        const first = last - 5;
        rerender();
        
        setLogs(data.slice(first, last));
        setSearchedLogs(data);
    }

    useEffect(() => {

        // GET USER QUERY HERE THEN STORE TO LOGS STATE


    }, [])

return (                                                                
    // <div>
    <div className="content-wrapper">
        <div className="wrapper">
            <h2>Logs</h2>
            <div className="d-flex justify-content-end align-items-center mb-2">
                <SortControl name={"sort-by"} items={searchedLogs} onSuccess={sortData}/>
                <SearchControl name="`search-name" items={LogData} onSuccess={sortData}/>
            </div>
            
            <TableControl headers={headers} items={logs} allItems={LogData} onSuccess={sortData}/>
            <PaginationControl items={searchedLogs} onSuccess={reloadLogs} currentPage={currentPage}/>
        </div>
    </div>
    // </div>
  )}

export default LogsTable;

LogsTable.propTypes = {
    name: PropTypes.string
}