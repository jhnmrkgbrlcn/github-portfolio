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

const Card = ({ children }) => {
  return (
    <>
      <div className="card mb-3" style={styleCard}>
        <div className="card-body text-success">
          <p className="card-text" style={styleText}>
            {children}
          </p>
        </div>
        <div className="card-footer" type="button" style={styleButton}>
          Full Detail {">"}
        </div>
      </div>
    </>
  );
};

export default Card;
