import Pizza from "./pizza";
import Header from "../header";
import { useEffect, useState } from "react";
import axios from "axios";
import PizzaDetails from "./pizza-details";
import PizzaForm from "./pizza-form";

export default function PizzaMenu() {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await axios.get(
      "https://pizza-api-753ec-default-rtdb.firebaseio.com/pizzas.json"
    );
    setList(processResponse(response));
  }

  function processResponse(response) {
    let data = [];
    for (let item in response.data) {
      data.push({ ...response.data[item], id: item });
    }
    return data;
  }

  async function handlePizzaSelect(pizzaId) {
    const response = await axios.get(
      `https://pizza-api-753ec-default-rtdb.firebaseio.com/pizzas/${pizzaId}.json`
    );
    setSelected(response.data);
  }

  function handleDetailsClose() {
    setSelected(null);
  }

  function handleFormShow() {
    setForm(!form);
  }

  function handlePizzaAdd(pizza) {
    setForm(!form);
    setList([...list, pizza]);
  }

  return (
    <>
      <Header />
      {form && (
        <PizzaForm showForm={handleFormShow} addedPizza={handlePizzaAdd} />
      )}
      <div className="main-title">
        <span>Our Pizzas</span>
        <span className="add-pizza" onClick={handleFormShow}>
          Add pizza
        </span>
      </div>
      <section>
        <ul className="pizza-wrapper container">
          {list.map((p) => (
            <li key={p.id}>
              <Pizza pizzaObj={p} selectPizza={handlePizzaSelect} />
            </li>
          ))}
        </ul>
        {selected && (
          <PizzaDetails pizza={selected} closeDetails={handleDetailsClose} />
        )}
      </section>
    </>
  );
}
