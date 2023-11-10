import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiFillCloseCircle } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
function Delete() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const smallButtonStyle = {
    fontSize: "15px",
  };
  return (
    <>
      <IconButton>
        <AiFillCloseCircle
          className="text-danger"
          style={smallButtonStyle}
          onClick={handleShow}
        />
      </IconButton>

      <Modal
        className="text-white"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header className="d-flex justify-content-center align-items-center">
          <Modal.Title className="">
            <DeleteIcon fontSize="large" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h1>Delete User Account?</h1>
          <p>Deleting User account is permanent and cannot be undone</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger">Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Delete;
