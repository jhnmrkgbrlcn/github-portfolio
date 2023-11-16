// utils
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
//data
import LogData from "../Data/logs.json";

// controls
import SearchControl from "../controls/searchControl";
import SortControl from "../controls/sortControl";
import TableControl from "../controls/tableControl";

const LogsTable = ({
    name
}) => {
    // states
    const [logs, setLogs] = useState(LogData);

    const rerender = React.useReducer(() => ({}), {})[1]

    const headers = ["#", "Description", "Time Created", "Date Created", "User", "Actions"];

    const reloadLogs = (data) => { 
        rerender();
        setLogs(data);
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
                <SortControl name={"sort-by"} items={logs} onSuccess={reloadLogs}/>
                <SearchControl name="search-name"/>
            </div>
            
            <TableControl headers={headers} items={logs} onSuccess={reloadLogs}/>
        </div>
    </div>
    // </div>
  )}

export default LogsTable;

LogsTable.propTypes = {
    name: PropTypes.string
}