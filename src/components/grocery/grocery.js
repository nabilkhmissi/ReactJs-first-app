import { useState } from "react";
import GroceryList from "./grocery-list";
import GroceryAdd from "./grocery-add";
import Footer from "./footer";

export default function Grocery() {
  const [list, setList] = useState([]);

  let total = list.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  const selectedItems = list.filter((item) => item.selected);

  function handleDelete(id) {
    setList([...list.filter((e) => e.id !== id)]);
  }

  function handleItemSelected(id) {
    setList(
      list.map((i) => (i.id === id ? { ...i, selected: !i.selected } : i))
    );
  }

  function handleItemAdd(item) {
    setList([
      ...list,
      {
        id: Date.now(),
        ...item,
        done: false,
      },
    ]);
  }

  function handleDone(id) {
    const newList = list.map((e) => {
      if (e.id === id) return { ...e, done: !e.done };
      return e;
    });
    setList(newList);
  }
  return (
    <div className="grocery-list">
      <h1 className="header">Grocery List</h1>
      <div className="grocery-main">
        <GroceryAdd addNewItem={handleItemAdd} />
        <div className="g-section g-list list">
          <ul className="list">
            <GroceryList
              items={list}
              onDelete={handleDelete}
              handleDone={handleDone}
              handleItemSelected={handleItemSelected}
            />
          </ul>
          {total !== 0 && (
            <div style={{ textAlign: "end", fontWeight: "bold" }}>
              Total : $ {total}
            </div>
          )}
        </div>
      </div>
      <Footer selectedItems={selectedItems} />
    </div>
  );
}
