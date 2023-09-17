import axios from "axios";
import { useEffect, useState } from "react";
import Pizza from "./pizza";

export default function PizzasMenu() {

    const [list, setList] = useState([]);

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
    return (
        <>
            <h1 style={{ textAlign: "center", padding: "1rem 0" }}>Our Pizzas</h1>
            {
                list.length !== 0 ? (
                    <ul className="pizza-wrapper container" >
                        {
                            list.map((p) => (
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