import React from "react";
import Item from "./item";

const ItemList = ({ items, onItemSelect }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          {...item}
          onSelect={() => onItemSelect(item)} // Pass the entire item object to the onItemSelect callback
        />
      ))}
    </ul>
  );
};

export default ItemList;