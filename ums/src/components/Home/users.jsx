import IconButton from "@mui/material/IconButton";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import {
  AiFillCloseCircle,
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
  AiOutlineEllipsis,
} from "react-icons/ai";
import { BiSortAlt2 } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";
import Data from "./Data.json";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState(Data);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;
  const usersToDisplay = users.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(users.length / usersPerPage);
  //sort shit
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });

  const sortById = () => {
    setSorted({ sorted: "id", reversed: !sorted.reversed });
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      if (sorted.reversed) {
        return userA.ID - userB.ID;
      }
      return userB.ID - userA.ID;
    });
    setUsers(usersCopy);
  };
  const sortByName = () => {
    setSorted({ sorted: "name", reversed: !sorted.reversed });
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      if (sorted.reversed) {
        return userB.Name.localeCompare(userA.Name);
      }
      return userA.Name.localeCompare(userB.Name);
    });
    setUsers(usersCopy);
  };
  const sortByRole = () => {
    setSorted({ sorted: "role", reversed: !sorted.reversed });
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      if (sorted.reversed) {
        return userB.Role.localeCompare(userA.Role);
      }
      return userA.Role.localeCompare(userB.Role);
    });
    setUsers(usersCopy);
  };
  const sortByDc = () => {
    setSorted({ sorted: "date_created", reversed: !sorted.reversed });
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      const dateA = new Date(userA.Date_Created);
      const dateB = new Date(userB.Date_Created);

      if (sorted.reversed) {
        return dateA - dateB;
      }

      return dateB - dateA;
    });

    setUsers(usersCopy);
  };

  const sortByStatus = () => {
    setSorted({ sorted: "status", reversed: !sorted.reversed });
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      if (sorted.reversed) {
        return userB.Status.localeCompare(userA.Status);
      }
      return userA.Status.localeCompare(userB.Status);
    });
    setUsers(usersCopy);
  };
  // search shit
  const [searchPhrase, setSearchPhrase] = useState("");
  const search = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    const matchedUsers = Data.filter((user) => {
      return (
        user.Name.toLowerCase().includes(searchTerm) ||
        user.ID.toString().includes(searchTerm) ||
        user.Role.toLowerCase().includes(searchTerm) ||
        user.Status.toLowerCase().includes(searchTerm) ||
        user.Date_Created.toLowerCase().includes(searchTerm)
      );
    });
    setUsers(matchedUsers);
    setSearchPhrase(event.target.value);
  };
  const smallButtonStyle = {
    fontSize: "13px",
  };
  //range of page number
  const pageRange = 5;
  let minPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
  let maxPage = minPage + pageRange - 1;

  // Adjust the range for the last set of pages
  if (maxPage > totalPages) {
    maxPage = totalPages;
    minPage = Math.max(1, maxPage - pageRange + 1);
  }

  const pageNumbers = Array.from(
    { length: maxPage - minPage + 1 },
    (_, i) => minPage + i
  );

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(page) {
    setCurrentPage(page);
  }

  function nextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <>
      <div className="content-wrapper">
        <div className="wrapper">
          <h2>Users</h2>
          <div className="d-flex justify-content-end align-items-center mb-2">
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
                <button className="dropdown-item" onClick={sortById}>
                  ID
                </button>
                <button className="dropdown-item" onClick={sortByName}>
                  Name
                </button>
                <button className="dropdown-item" onClick={sortByRole}>
                  Role
                </button>
                <button className="dropdown-item" onClick={sortByDc}>
                  Date Created
                </button>
                <button className="dropdown-item" onClick={sortByStatus}>
                  Status
                </button>
              </ul>
            </div>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search"
                value={searchPhrase}
                onChange={search}
                style={{ width: "200px" }}
              />
            </div>
            <button className="btn btn-primary">
              {" "}
              <Link
                to="/user/adduser"
                className="text-white "
                style={{ textDecoration: "none" }}>
                Add user
              </Link>
            </button>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Date Created</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {usersToDisplay.map((user) => (
                  <tr key={user.ID}>
                    <td>{user.ID}</td>
                    <td>{user.Name}</td>
                    <td>{user.Email}</td>
                    <td>{user.Role}</td>
                    <td>{user.Date_Created}</td>
                    <td>{user.Status}</td>
                    <td>
                      <div className="d-flex d-sm-inline-flex">
                        <span className="">
                          <IconButton
                            className="text-success"
                            style={smallButtonStyle}>
                            <BsFillPencilFill />
                          </IconButton>
                        </span>
                        <span className=" d-none d-sm-none  d-md-none d-lg-block">
                          <IconButton
                            className="text-danger"
                            style={smallButtonStyle}>
                            <AiFillCloseCircle />
                          </IconButton>
                        </span>
                        <span className=" d-none d-sm-none  d-md-none d-lg-block">
                          <Link to="/user/profile">
                            <IconButton
                              className="text-dark"
                              style={smallButtonStyle}>
                              <AiOutlineEllipsis />
                            </IconButton>
                          </Link>
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <nav className="d-flex justify-content-end align-items-center mb-2">
            <ul className="pagination">
              <li className="page-item">
                <a href="#" className="page-link" onClick={prePage}>
                  <AiOutlineCaretLeft />
                </a>
              </li>
              {pageNumbers.map((number) => (
                <li
                  className={`page-item ${
                    currentPage === number ? "active" : ""
                  }`}
                  key={number}>
                  <a
                    href="#"
                    className="page-link"
                    onClick={() => changeCPage(number)}>
                    {number}
                  </a>
                </li>
              ))}
              <li className="page-item">
                <a href="#" className="page-link" onClick={nextPage}>
                  <AiOutlineCaretRight />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Users;
