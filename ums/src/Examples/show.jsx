import React, { useState } from "react";

const Show = ({ children, maxChars }) => {
  const [showFullText, setShowFulltext] = useState(false);

  const text = showFullText ? children : children.substring(0, maxChars);

  if (children.length <= maxChars) return <div>{children} </div>;
  return (
    <div>
      {text}...
      <button onClick={() => setShowFulltext((prevState) => !prevState)}>
        {showFullText ? "Less" : "More"}
      </button>
    </div>
  );
};

export default Show;
