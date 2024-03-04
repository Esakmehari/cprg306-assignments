"use client";

import Item from "./item.js";
import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  const selectedStyle = "bg-yellow-500 text-black rounded-md";
  let nameStyle = "";
  let categoryStyle = "";

  if (sortBy === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));
    nameStyle = selectedStyle;
  } else if (sortBy === "category") {
    items.sort((a, b) => {
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;
      return 0;
    });
    categoryStyle = selectedStyle;
  }

  return (
    <div>
      <div className="m-5 flex space-x-10">
        <button className={nameStyle} onClick={() => setSortBy("name")}>
          Name
        </button>
        <button className={categoryStyle} onClick={() => setSortBy("category")}>
          Category
        </button>
      </div>
      <ul>
        <li>
          {items.map((items) => (
            <Item
              key={items.id}
              name={items.name}
              quantity={items.quantity}
              category={items.category}
            />
          ))}
        </li>
      </ul>
    </div>
  );
}