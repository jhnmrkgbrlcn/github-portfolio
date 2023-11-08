import React from "react";
import { useState } from "react";

function Counts() {
  const [count, setCount] = useState(0); //[variable, function used for updating]
  const [isChecked, isSetChecked] = useState(false);
  const [fruits, setFruits] = useState(["Apol", "obas", "orench"]); //..fruits

  const handleIncrement = () => {
    setCount((prevState) => count + 1);
    //increases {count}
  };
  const handleDecrement = () => {
    setCount((prevState) => count - 1);
  };

  const handleShowFruits = () => {
    isSetChecked(!isChecked);
  };

  const handleAddFruit = () => {
    setFruits([...fruits, "Pineapple"]); //spread operator
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
      <button onClick={handleIncrement} className="btn btn-primary">
        Increment
      </button>
      <button onClick={handleDecrement} className="btn btn-danger">
        Decrement
      </button>
      <hr />
      <div>
        <label htmlFor="">Show?</label>
        <input
          type="checkbox"
          onChange={handleShowFruits}
          checked={isChecked}
        />
      </div>
      <button onClick={handleAddFruit} className="btn btn-primary">
        Add Fruit
      </button>
      <ul className="list-group">
        {isChecked && //when checked it shows the fruits
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
      <h3>testing push</h3>
    </>
  );
}

export default Counts;
