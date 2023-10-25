import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Heart = ({ onClick }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLiked = () => {
    setIsLiked(!isLiked);
    onClick();
  };
  return (
    <div>
      {isLiked ? (
        <AiFillHeart color="red" onClick={handleLiked} />
      ) : (
        <AiOutlineHeart color="red" onClick={handleLiked} />
      )}
    </div>
  );
};

export default Heart;
