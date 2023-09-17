import { NavLink } from "react-router-dom";

export default function PizzaDetailsNav() {
    return (
        <div className="header-links" style={{ marginBottom: "1rem" }}>
            <NavLink className="header-link" to="." end>Ingredients</NavLink>
            <NavLink className="header-link" to="images">Images</NavLink>
            <NavLink className="header-link" to="pricing">Pricing</NavLink>
        </div>
    );
}