import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function PizzaDetails({ closeDetails }) {

  const [pizza, setPizza] = useState(null)
  const params = useParams()

  const id = params.id;

  useEffect(() => {
    axios.get(`/pizzas/${id}.json`)
      .then(response => setPizza(response.data))
  }, [id])

  return (
    <>
      <div style={{ textAlign: "center", padding: "1rem 0" }}>
        <Link to=".." relative="path" >Go Back</Link>
      </div >
      {pizza ? (<div className="backdrop">
        <div className="pizza-details-card">
          <div className="image">
            <img src={pizza.image} alt={pizza.name} />
          </div>
          <div className="details">
            <h1>{pizza.name}</h1>
            <div>{pizza.ingredients}</div>
            <h1>$ {pizza.price}</h1>
          </div>
        </div>
      </div>) : <div>Loading ...</div>
      }
    </>
  );
}
