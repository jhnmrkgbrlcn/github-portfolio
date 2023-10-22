import React from "react";
import { useState } from "react";

function Counts() {
  const [count, setCount] = useState(0);
  const [isChecked, isSetChecked] = useState(false);
  const [fruits, setFruits] = useState(["Apol", "obas", "orench"]);

  const handleIncrement = () => {
    setCount((prevState) => count + 1);
  };
  const handleDecrement = () => {
    setCount((prevState) => count - 1);
  };

  const handleShowFruits = () => {
    isSetChecked(!isChecked);
  };

  const handleAddFruit = () => {
    setFruits([...fruits, "Pineapple"]);
  };
  const handleRemoveFruit = (fruitIndex) => {
    const filteredFruits = fruits.filter(
      (fruit, index) => index !== fruitIndex
    );
    setFruits(filteredFruits);
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <hr />
      <div>
        <label htmlFor="">Show?</label>
        <input
          type="checkbox"
          onChange={handleShowFruits}
          checked={isChecked}
        />
      </div>
      <button onClick={handleAddFruit}>Add Fruit</button>
      <ul className="list-group">
        {isChecked &&
          fruits.map((fruit, index) => {
            return (
              <div key={index}>
                <li className="list-group-item">{fruit}</li>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveFruit(index)}>
                  Remove Fruit
                </button>
              </div>
            );
          })}
      </ul>
    </>
  );
}

export default Counts;
