export default function Footer({ selectedItems }) {
  const totalSelected = selectedItems.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );
  return (
    <div className="footer">
      {selectedItems.length} items selected - Total selected : $ {totalSelected}
    </div>
  );
}
