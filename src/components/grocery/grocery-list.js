export default function GroceryList({ items, onDelete, handleDone }) {
  const itemList = items.map((e) => (
    <li key={e.id}>
      <input type="checkbox" onChange={() => handleDone(e.id)} />
      {e.done ? (
        <s>
          {e.name}
          {e.quantity} x ${e.price}
        </s>
      ) : (
        <div>
          {e.name}
          {e.quantity} x ${e.price}
        </div>
      )}
      <button onClick={() => onDelete(e.id)}>X</button>
    </li>
  ));
  return (
    <>
      {itemList.length > 0 ? (
        itemList
      ) : (
        <span style={{ textAlign: "center" }}>List is Empty</span>
      )}
    </>
  );
}
