import { useOutletContext } from "react-router-dom"

export default function PizzaDetailsPricing() {
    const { price, image, name } = useOutletContext()
    return (
        <>
            <h2 style={{ padding: "0.5rem 0" }}>Pricing</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "center", gap: "1rem", alignItems: "center" }}>
                    <img src={image} style={{ width: "100px" }} alt={name} />
                    <h2>Small Size</h2>
                    <h2>$ {price}</h2>
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "1rem", alignItems: "center" }}>
                    <img src={image} style={{ width: "100px" }} alt={name} />
                    <h2>Medium Size</h2>
                    <h2>$ {price + 3}</h2>
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "1rem", alignItems: "center" }}>
                    <img src={image} style={{ width: "100px" }} alt={name} />
                    <h2>Big Size</h2>
                    <h2>$ {price + 6}</h2>
                </div>
            </div>
        </>
    )
}