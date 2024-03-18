
import React from "react";

const Item = ({ name, quantity, category, onSelect }) => {
  const handleClick = () => {
    onSelect && onSelect(); // Call onSelect function if it exists
  };

  return (
    <li className="border p-4 my-3" onClick={handleClick}>
      <strong>{name}</strong> <br /> buy {quantity} in {category}
    </li>
  );
};

export default Item;