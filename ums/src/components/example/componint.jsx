import React from "react";

const Componint = ({ count, handleDecrement, handleIncrement }) => {
  return (
    <div>
      <h1>Count: {count}</h1>
      <button className="btn btn-primary" onClick={() => handleIncrement()}>
        Increment
      </button>
      <button className="btn btn-danger" onClick={() => handleDecrement()}>
        Decrement
      </button>
    </div>
  );
};

export default Componint;
