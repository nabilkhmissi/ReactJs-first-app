import axios from "axios";
import { useState } from "react";

export default function PizzaForm({ showForm, addedPizza }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  function addPizzaInServer() {
    axios.post(`/pizzas.json`, {
      name: name,
      ingredients: ingredients,
      image: image,
      price: price,
    });
  }

  function handleNameChange(e, field) {
    switch (field) {
      case "name":
        setName(e.target.value);
        break;
      case "ingredients":
        setIngredients(e.target.value);
        break;
      case "price":
        setPrice(e.target.value);
        break;
      case "image":
        setImage(e.target.value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const pizza = {
      name: name,
      ingredients: ingredients,
      image: image,
      price: price,
    };
    addPizzaInServer(pizza);
    addedPizza({ ...pizza, id: Date.now() });
  }

  return (
    <div className="backdrop">
      <form className="pizza-form">
        <h1>Add new Pizza</h1>
        <br />
        <div className="form-group">
          <label>Piza name</label>
          <input onChange={(e) => handleNameChange(e, "name")} />
        </div>
        <div className="form-group">
          <label>Ingredients</label>
          <textarea onChange={(e) => handleNameChange(e, "ingredients")} />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="number" onChange={(e) => handleNameChange(e, "price")} />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input type="text" onChange={(e) => handleNameChange(e, "image")} />
        </div>
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
}
