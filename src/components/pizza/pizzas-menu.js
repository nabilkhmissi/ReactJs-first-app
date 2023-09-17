import axios from "axios";
import { useEffect, useState } from "react";
import Pizza from "./pizza";
import { Link, NavLink, useSearchParams } from "react-router-dom";

export default function PizzasMenu() {

    const [list, setList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const [searchParams, setSerachParams] = useSearchParams();

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

    const filter = searchParams.get("ingredient");

    const pizzas_list = filter ? list.filter(p => p.ingredients.toLowerCase().includes(filter.toLowerCase())) : list

    return (
        <>
            <h1 style={{ textAlign: "center", padding: "1rem 0" }}>Our Pizzas</h1>
            <div className="pizza-filter" style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>

                <button onClick={() => setSerachParams({ ingredient: "tomato" })}>Tomatoes</button>
                <button onClick={() => setSerachParams({ ingredient: "mozarella" })}>Mozarella</button>
                <button onClick={() => setSerachParams({ ingredient: "cheese" })}>Cheese</button>

                <NavLink to="?ingredient=tomato" >Tomato</NavLink>
                <NavLink to="?ingredient=mozarella" >Mozarella</NavLink>
                <NavLink to=".">Clear filter</NavLink>
            </div>
            {
                list.length !== 0 ? (
                    <ul className="pizza-wrapper container" >
                        {
                            pizzas_list.map((p) => (
                                <li key={p.id}>
                                    <Pizza
                                        pizzaObj={p}
                                    />
                                </li>
                            ))
                        }
                    </ul>
                ) : <div>Loading...</div>
            }
        </>

    )
}