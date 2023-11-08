import React from "react";

function onChange() {
     const eventName = (name) => {
       alert(`Alert,  ${name}`); // ${name} from eventName
     };



  return (
    <button
        onClick={() => eventName('Event Test')} //uses ${name} parameter
    >
      Button Test
    </button>
  );


};

export default onChange; //returns function
