import PropTypes from "prop-types";

const Search =  ({
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

export default Search;

Search.propTypes = {
    name: PropTypes.string
}