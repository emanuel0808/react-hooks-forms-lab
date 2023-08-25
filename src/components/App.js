import React, { useState } from 'react';
import './App.css';
import ShoppingList from './ShoppingList'; // Adjust the path as needed
import ItemForm from './ItemForm'; // Adjust the path as needed

function App() {
  const [items, setItems] = useState([]);

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className="App">
      <h1>Shopping List App</h1>
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
