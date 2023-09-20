import axios from "axios"
import { Link, useLoaderData } from "react-router-dom"



export async function loader({ params }) {
    const details = await axios.get(`/sandwiches/${params.id}.json`);
    return details.data;
}
export default function SandwichDetails() {


    const data = useLoaderData();
    return (
        <>
            <div style={{ textAlign: "center", padding: "1rem 0" }}>
                <Link to=".." relative="path" >Go Back</Link>
            </div >
            <div className="sandwich" style={{ margin: "0 auto" }} >
                <h1>{data.name}</h1>
                <p>{data.ingredients.join(",")} </p>
            </div >

        </>
    )
}