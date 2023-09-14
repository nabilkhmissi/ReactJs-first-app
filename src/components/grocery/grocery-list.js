export default function GroceryList({
  items,
  onDelete,
  handleDone,
  handleItemSelected,
}) {
  const itemList = items.map((e) => (
    <li key={e.id}>
      <input type="checkbox" onChange={() => handleItemSelect(e.id)} />
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

  function handleItemSelect(id) {
    handleItemSelected(id);
  }
  if (items.length === 0) {
    return <span style={{ textAlign: "center" }}>List is Empty</span>;
  }
  return <>{itemList}</>;
}
