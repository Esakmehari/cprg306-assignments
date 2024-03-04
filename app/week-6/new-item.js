"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  function handleAddItem(event) {
    event.preventDefault();
    const newId = Math.floor(Math.random() * 1000000).toString();
    const newItem = { id: newId, name, quantity, category };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  }

  return (
    <div>
      <div className="flex justify-center justify-items-center bg-yellow-500 text-black p-1 rounded-lg">
        <form onSubmit={handleAddItem} className="grid justify-items-center">
          <div className="my-2 px-2 grid justify-items-center">
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="ml-3 rounded-lg"
              />
            </label>
          </div>
          <div className="grid justify-items-center">
            <label>
              Quantity:
              <input
                type="number"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
                min="1"
                max="99"
                className="w-20 rounded-lg px-1 ml-3"
              />
            </label>
            <label>
              Category:
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="my-2 rounded-lg px-1 ml-3"
              >
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen foods">Frozen Foods</option>
                <option value="canned goods">Canned Goods</option>
                <option value="dry goods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          <button
            className="bg-black text-yellow-500 px-3 rounded-lg my-1"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}