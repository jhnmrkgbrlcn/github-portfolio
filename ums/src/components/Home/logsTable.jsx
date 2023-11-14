import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";
import SearchControl from "../controls/searchControl";
import TableControl from "../controls/tableControl";

const LogsTable = ({
    name
}) => {
    const headers = ["#", "Description", "Time Created", "Date Created", "User", "Actions"];
    const items = ["1", "test", "00:00:00", "01/01/2001", "test_user", "..."];
return (                                                                
    <>
        <h1>LOGS</h1><SearchControl name="search-name"/>
        <TableControl headers={headers} items={items} />
    </>
  )}

export default LogsTable;

LogsTable.propTypes = {
    name: PropTypes.string
}