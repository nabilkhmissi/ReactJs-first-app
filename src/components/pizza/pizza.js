import { Link } from "react-router-dom";

export default function Pizza({ pizzaObj, state }) {
  return (
    <Link
      className={`pizza-card ${pizzaObj.soldOut ? "sold-out" : ""}`}
      to={`pizzas/${pizzaObj.id}`} state={state}>
      <img src={pizzaObj.image} alt={pizzaObj.name} />
      <div className="pizza-details">
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>
        <div className="pizza-price">
          <span> {pizzaObj.soldOut ? "SOLD OUT" : "$" + pizzaObj.price}</span>
        </div>
      </div>
    </Link>
  );
}
