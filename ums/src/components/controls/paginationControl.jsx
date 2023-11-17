import PropTypes from "prop-types";
import React, { useEffect, useState } from 'react';
import {
    AiOutlineCaretLeft,
    AiOutlineCaretRight,
} from "react-icons/ai";

const PaginationControl = ({
    items,
    onSuccess,
    currentpage,
}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const npage = Math.ceil(items.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);
    
    useEffect(() => {
        onSuccess(handleLoad(items, 1));
    }, [])

    const handleLoad = (list, pagenumber) => {
        const last = pagenumber * recordsPerPage;
        const first = last - recordsPerPage;
        return list.slice(first, last);
    }

    function prevPage() {
        if(currentPage !== 1) {
            setCurrentPage(currentPage - 1)
            onSuccess(handleLoad(items, currentPage - 1));
        }
    }
    function changeCPage(id) {
        setCurrentPage(id);
        onSuccess(handleLoad(items, id));
    }

    function nextPage() {
        if (currentPage < npage) {
            setCurrentPage(currentPage + 1);
            onSuccess(handleLoad(items, currentPage + 1));
        }
    }
    
    return(
        <>
            <div className="d-block">
            <nav className="d-flex justify-content-end align-items-center mb-2 ">
                <ul className="pagination">
                <li className="page-item">
                    <a href="#" className="page-link" onClick={prevPage}>
                    <AiOutlineCaretLeft />
                    </a>
                </li>
                {
                    numbers.map((n, i) => {
                        const name = currentPage === n ? "page-link active" : "page-link";
                    return (
                        // {console.log(n)}
                    <li className="page-item" key={n}>
                        <a href="#" className={name} onClick={() => changeCPage(n)}>{n}</a>
                    </li>
                    )})
                }
                <li className="page-item">
                    <a href="#" className="page-link" onClick={nextPage}>
                    <AiOutlineCaretRight />
                    </a>
                </li>
                </ul>
            </nav>
            </div>
        </>
    )
}

export default PaginationControl;

PaginationControl.prototype = {
    items: PropTypes.any,
    onSuccess: PropTypes.func,
}