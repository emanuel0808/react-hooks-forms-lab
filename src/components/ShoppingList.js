import React, { useState } from 'react';

function ShoppingList({ items }) {
  const [searchText, setSearchText] = useState('');
  
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search items..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <ul className="Items">
        {filteredItems.map(item => (
          <li key={item.id}>{item.name} - {item.category}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

