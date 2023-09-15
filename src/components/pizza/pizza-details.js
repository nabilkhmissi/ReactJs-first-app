export default function PizzaDetails({ pizza, closeDetails }) {
  return (
    <div className="backdrop">
      <div className="pizza-details-card">
        <div className="card-close" onClick={closeDetails}>
          X
        </div>
        <div className="image">
          <img src={pizza.image} />
        </div>
        <div className="details">
          <h1>{pizza.name}</h1>
          <div>{pizza.ingredients}</div>
          <h1>$ {pizza.price}</h1>
        </div>
      </div>
    </div>
  );
}
