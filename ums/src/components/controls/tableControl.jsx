import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

const TableControl = ({
    headers,
    name,
    items
}) => {
return (                                                                
    <>
    <table>
        <tr>
            {
                headers.map(item => {
                    return (<th>{item}</th>);
                })
            }
        </tr>
        <tr>
            {
                items.map(item => {
                    return (<td>{item}</td>);
                })
            }
        </tr>
    </table>
    </>
  )}

export default TableControl;

TableControl.propTypes = {
    headers: PropTypes.any,
    name: PropTypes.string,
    items: PropTypes.any
}