export default function Pizza({ pizzaObj }) {
  return (
    <div className={`pizza-card ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.image} />
      <div className="pizza-details">
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>
        <div className="pizza-price">
          <span> {pizzaObj.soldOut ? "SOLD OUT" : "$" + pizzaObj.price}</span>
        </div>
      </div>
    </div>
  );
}
