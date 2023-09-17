import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function SandwichesMenu() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("/sandwiches.json")
            .then(response => setData(processResponse(response.data)))
    }, [])

    function processResponse(response) {
        const res = []
        for (let i in response) {
            res.push({ ...response[i], id: i })
        }
        return res.map(e => ({ ...e, ingredients: e.ingredients.join(","), id: e.id }))
    }
    return (
        <div>
            <h1 style={{ textAlign: "center", padding: "1rem 0" }}>Our Sandwiches</h1>
            <ul className="sandwiches">
                {
                    data.map(el => (
                        <Link key={el.id} className="sandwich" to={`${el.id}`}>
                            < h2 > {el.name}</h2>
                            <p>{el.ingredients}</p>
                        </Link>)
                    )
                }
            </ul >
        </div >
    )
}