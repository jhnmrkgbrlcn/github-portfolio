import PropTypes from "prop-types";

const SearchControl =  ({
    name
}) => {
    return (
        <>
        <div className="container">
            <form action="">
            <input name={name} type="text" />
            <button type="submit">Search</button>
            </form>
        </div>
        </>
    );
}

export default SearchControl;

SearchControl.propTypes = {
    name: PropTypes.string
}