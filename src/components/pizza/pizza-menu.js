import Pizza from "./pizza";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import PizzaDetails from "./pizza-details";
import PizzaForm from "./pizza-form";
import PizzaHeader from "./pizza-header";

export default function Menu() {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get("https://pizza-api-753ec-default-rtdb.firebaseio.com/pizzas.json")
      .then((response) => setList(processResponse(response)));
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
    fetchData();
  }

  function handlePostDelete(id) {
    axios.delete(`/pizzas/${id}.json`).then((response) => fetchData());
  }

  return (
    <>
      {
        form && (
          <PizzaForm showForm={handleFormShow} addedPizza={handlePizzaAdd} />
        )
      }
      <section>
        <ul className="pizza-wrapper container">
          {list.map((p) => (
            <li key={p.id}>
              <Pizza
                pizzaObj={p}
                selectPizza={handlePizzaSelect}
                deletePost={handlePostDelete}
              />
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
