import { useState } from "react";

export default function GroceryAdd({ addNewItem }) {
  const [newItem, setNewItem] = useState({
    name: "",
    quantity: 0,
    price: 0,
    done: false,
    selected: false,
  });

  function handleNameChange(e) {
    setNewItem({ ...newItem, name: e.target.value });
  }
  function handleQteChange(e) {
    setNewItem({ ...newItem, quantity: e.target.value });
  }
  function handlePriceChange(e) {
    setNewItem({ ...newItem, price: e.target.value });
  }
  function handleSubmit() {
    addNewItem(newItem);
    setNewItem({ name: "", quantity: 0, price: 0 });
  }

  return (
    <div className="g-section add">
      <div className="form-group">
        <label>Item name</label>
        <input type="text" onChange={handleNameChange} value={newItem.name} />
      </div>
      <div className="form-group">
        <label>Item Quantity</label>
        <input
          type="number"
          onChange={handleQteChange}
          value={newItem.quantity}
        />
      </div>
      <div className="form-group">
        <label>Item Price</label>
        <input
          type="number"
          onChange={handlePriceChange}
          value={newItem.price}
        />
      </div>
      <button onClick={handleSubmit}>Add Item</button>
    </div>
  );
}
