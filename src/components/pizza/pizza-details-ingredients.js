import { useOutletContext } from "react-router-dom"

export default function PizzaDetailsIngredients() {


    const { ingredients } = useOutletContext()
    return (
        <>
            <h2 style={{ padding: "0.5rem 0" }}>Ingredients</h2>
            <div>{ingredients}</div>
        </>
    )
}