import Pizza from "./pizza";
import Header from "./header";
import pizzaData from "../data/pizzas";

export default function PizzaMenu() {
  return (
    <>
      <Header />
      <div className="main-title">
        <span>Our Pizzas</span>
      </div>
      <section className="pizza-wrapper container">
        {pizzaData.map((p) => (
          <Pizza pizzaObj={p} />
        ))}
      </section>
    </>
  );
}
