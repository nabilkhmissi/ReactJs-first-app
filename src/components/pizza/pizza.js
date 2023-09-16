import { Link } from "react-router-dom";

export default function Pizza({ pizzaObj, selectPizza, deletePost }) {
  return (
    <Link
      className={`pizza-card ${pizzaObj.soldOut ? "sold-out" : ""}`}
      to={`${pizzaObj.id}`}>
      <span className="pizza-del" onClick={() => deletePost(pizzaObj.id)}>
        X
      </span>
      <img src={pizzaObj.image} />
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
