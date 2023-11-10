import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const styleCard = {
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  width: "auto",
};

const styleButton = { backgroundColor: "#d1efff", textAlign: "left" };

const styleText = {
  color: "black",
  textAlign: "center",
  fontWeight: "950",
};

const numStyle = {
  fontSize: "50px",
};

const Card = ({ link, num, desc }) => {
  return (
    <>
      <div className="card mb-3" style={styleCard}>
        <div className="card-body text-success">
          <p className="card-text" style={styleText}>
            <h1 className="fw-bold" style={numStyle}>
              {num}
            </h1>
            <p className="fw-bold">{desc}</p>
          </p>
        </div>
        <div className="card-footer" type="button" style={styleButton}>
          <a style={{ textDecoration: "none" }} href={link}>
            Full Detail {">"}
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
