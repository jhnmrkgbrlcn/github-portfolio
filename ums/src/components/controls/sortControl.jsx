import PropTypes from "prop-types";
import { BiSortAlt2 } from "react-icons/bi";
const SortControl = ({
    name
}) => {
    return (
        <>
        <div className="dropdown mr-2">
        <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <BiSortAlt2 />
        </button>
        <ul
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton">
            <button className="dropdown-item">
            ID
            </button>
            <button className="dropdown-item">
            Name
            </button>
            <button className="dropdown-item">
            Role
            </button>
            <button className="dropdown-item">
            Date Created
            </button>
            <button className="dropdown-item">
            Status
            </button>
        </ul>
        </div>
        </>
    )
}

export default SortControl;

SortControl.propTypes = {
    name: PropTypes.any
}