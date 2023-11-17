import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import IconButton from "@mui/material/IconButton";

import PropTypes from "prop-types";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ViewControl = ({
    name,
    id,
    user,
    desc,
    date,
    time,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const smallButtonStyle = {
    fontSize: "15px",
  };
  return (
    <>
      <IconButton onClick={handleShow}
        className="text-success"
        style={smallButtonStyle}>
        <VisibilityOutlinedIcon />
      </IconButton>

      <Modal
        className="text-white"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header className="d-flex justify-content-center align-items-center">
          <Modal.Title className="">
            <LibraryBooksOutlinedIcon fontSize="large" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-left">
          <h1>{name} #{id}</h1>
          <p>{date}</p>
          <p>{time}</p>
          <p>{user} {desc}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewControl;

ViewControl.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    user: PropTypes.string,
    desc: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
}