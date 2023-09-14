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
      <button className="btn-light" onClick={() => onDelete(e.id)}>
        X
      </button>
    </li>
  ));
  if (items.length === 0) {
    return <span style={{ textAlign: "center" }}>List is Empty</span>;
  }
  return <>{itemList}</>;
}
