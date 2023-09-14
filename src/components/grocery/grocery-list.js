export default function GroceryList({ items, onDelete, handleDone }) {
  const itemList = items.map((e) => (
    <li>
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
  return <>{itemList}</>;
}
