import { useState } from "react";
import Componint from "../components/example/componint";
import ChildComponent from "../components/example/childComponent";

function Props() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setCount((prevState) => prevState - 1);
  };
  return (
    <>
      <Componint
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />

      <br />
      <hr />
      <br />
      <ChildComponent>
        <h1>This is a heading!</h1>
        <p>This is a simple paragraph</p>
      </ChildComponent>
    </>
  );
}
export default Props;
