import Header from "./components/header";
import Pizza from "./components/pizza";
import pizzaData from "./data/pizzas";

export function App() {
  return (
    <div>
      <Header />
      <div className="main-title">
        <span>Our Pizzas</span>
      </div>
      <section className="pizza-wrapper container">
        {pizzaData.map((p) => (
          <Pizza pizzaObj={p} />
        ))}
      </section>
    </div>
  );
}

export default App;
