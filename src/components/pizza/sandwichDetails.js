import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function SandwichDetails() {


    const [data, setData] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/sandwiches/${id}.json`)
            .then(res => setData(res.data))
    }, [])
    return (
        <>
            <div style={{ textAlign: "center", padding: "1rem 0" }}>
                <Link to=".." relative="path" >Go Back</Link>
            </div >
            {data ? (<div className="sandwich" style={{ margin: "0 auto" }} >
                <h1>{data.name}</h1>
                <p>{data.ingredients.join(",")} </p>
            </div >) : <div>Loading ...</div>
            }

        </>
    )
}