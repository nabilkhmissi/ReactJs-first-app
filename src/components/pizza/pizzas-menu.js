import axios from "axios";
import Pizza from "./pizza";
import { useLoaderData, useSearchParams } from "react-router-dom";


export function pizzaLoader() {

    async function fetchData() {
        const random = Math.floor(Math.random() * 10);
        if (random % 2 === 0) {
            throw {
                message: "Oops ! an error has occured",
                status: 500
            }
        }
        const data = await axios
            .get("https://pizza-api-753ec-default-rtdb.firebaseio.com/pizzas.json");
        return processResponse(data)
    }

    function processResponse(response) {
        let data = [];
        for (let item in response.data) {
            data.push({ ...response.data[item], id: item });
        }
        return data;
    }
    return fetchData()
    /*  throw new Error("this is an error") */
}


export default function PizzasMenu() {

    const list = useLoaderData();
    const [searchParams, setSerachParams] = useSearchParams({});
    const filter = searchParams.get("ingredient");
    const pizzas_list = filter ? list.filter(p => p.ingredients.toLowerCase().includes(filter.toLowerCase())) : list

    return (
        <>
            <h1 style={{ textAlign: "center", padding: "1rem 0" }}>Our Pizzas</h1>
            <div className="pizza-filter" style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>

                <button onClick={() => setSerachParams({ ingredient: "tomato" })} className={filter === "tomato" ? 'selected' : ''}  >Tomatoes</button>
                <button onClick={() => setSerachParams({ ingredient: "mozarella" })} className={filter === "mozarella" ? 'selected' : ''} >Mozarella</button>
                <button onClick={() => setSerachParams({ ingredient: "cheese" })} className={filter === "cheese" ? 'selected' : ''}>Cheese</button>
                {filter && <button onClick={() => setSerachParams({})}>Clear</button>}
            </div >
            {
                list.length !== 0 ? (
                    <ul className="pizza-wrapper container" >
                        {
                            pizzas_list.map((p) => (
                                <li key={p.id}>
                                    <Pizza
                                        pizzaObj={p}
                                        state={{ filter }}
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