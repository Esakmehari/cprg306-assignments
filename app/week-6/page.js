"use client";

import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import ItemData from "./items.json";

import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(ItemData);

  const AddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="flex flex-col justify-center">
      <h1 className="font-bold text-4xl text-yellow-500 text-center mb-5">
        Shopping List
      </h1>
      <div className="flex justify-center">
        <NewItem onAddItem={AddItem} />
      </div>
      <div className="flex justify-center">
        <ItemList items={items} />
      </div>
    </main>
  );
}