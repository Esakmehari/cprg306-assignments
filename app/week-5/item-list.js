"use client";
import { useState } from 'react';
import Item from './item.js';
import items from './item.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <span style={{ marginRight: '10px' }}>Sort by:</span>
        <button
          onClick={() => setSortBy('name')}
          style={{ marginRight: '10px', border: sortBy === 'name' ? '1px solid red' : 'none', padding: '5px' }}
        >
          Name
        </button>

        <button
          onClick={() => setSortBy('category')}
          style={{ border: sortBy === 'category' ? '1px solid red' : 'none', padding: '5px' }}
        >
          Category
        </button>
      </div>
      <ul>
        {sortedItems.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;