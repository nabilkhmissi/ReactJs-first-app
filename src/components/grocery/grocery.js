import { useState } from "react";
import GroceryList from "./grocery-list";
import GroceryAdd from "./grocery-add";

export default function Grocery() {
  const [list, setList] = useState([]);

  let total = 0;
  list.forEach((e) => (total += e.price * e.quantity));

  function handleDelete(id) {
    setList([...list.filter((e) => e.id !== id)]);
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
            />
          </ul>
          {total !== 0 && <div>Total : $ {total}</div>}
        </div>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}
