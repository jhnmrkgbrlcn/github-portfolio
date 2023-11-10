import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { IconButton } from "@mui/material";
import { useState } from "react";

function Signout() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const smallButtonStyle = {
    fontSize: "15px",
  };
  return (
    <>
      <IconButton>
        <ExitToAppIcon className="text-primary" onClick={handleShow} />
      </IconButton>

      <Modal
        className="text-white"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header className="d-flex justify-content-center align-items-center">
          <Modal.Title className="">
            <ExitToAppIcon fontSize="large" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h1>Sign Out?</h1>
          <p>Deleting User account is permanent and cannot be undone</p>
        </Modal.Body>
        <Modal.Footer className="text-center">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger">Sign Out</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Signout;
