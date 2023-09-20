import axios from "axios";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import PizzaDetailsNav from "./pizza-details-nav";



export async function loader({ params }) {
  const details = await getDetails(params);
  return details.data;
}

function getDetails(params) {
  return axios.get(`/pizzas/${params.id}.json`);
}

export default function PizzaDetails({ closeDetails }) {
  const pizza = useLoaderData();
  return (
    <>
      <div style={{ textAlign: "center", padding: "1rem 0" }}>
        <Link to="/menu" relative="path" >Go Back</Link>
      </div >
      <div className="backdrop">
        <div className="pizza-details-card">
          <div className="image">
            <img src={pizza.image} alt={pizza.name} />
          </div>
          <div className="details">
            <h1>{pizza.name}</h1>
            <div>{pizza.ingredients}</div>
            <h1>$ {pizza.price}</h1>
          </div>
          <PizzaDetailsNav />
          <Outlet context={pizza} />
        </div>
      </div>
    </>
  );
}
