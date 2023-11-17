import PropTypes from "prop-types";
import { BiSortAlt2 } from "react-icons/bi";
const SortControl = ({
    name,
    items,
    onSuccess,
}) => {
    const sortItems = (sortBy) => {
        items.sort((a, b) => {
            let fa = a[sortBy],
                fb = b[sortBy];
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        return onSuccess(items);
    }  

    const classname = name ? "dropdown mr-2 " + name : "dropdown mr-2";
    return (
        <>
        <div className={classname}>
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
            <button className="dropdown-item" onClick={() => sortItems("ID")}>
            ID
            </button>
            <button className="dropdown-item" onClick={() => sortItems("description")}>
            Description
            </button>
            <button className="dropdown-item" onClick={() => sortItems("time")}>
            Time
            </button>
            <button className="dropdown-item" onClick={() => sortItems("date")}>
            Date
            </button>
            <button className="dropdown-item" onClick={() => sortItems("user")}>
            User
            </button>
        </ul>
        </div>
        </>
    )
}

export default SortControl;

SortControl.propTypes = {
    name: PropTypes.any,
    items: PropTypes.array,
    onSuccess: PropTypes.func,
}