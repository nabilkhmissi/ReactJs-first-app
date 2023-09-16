import { NavLink } from "react-router-dom";

export default function PizzaHeader() {

  return (
    <div className="pizza-header">
      <h1>PizzaStore</h1>
      <div className="header-links">
        <NavLink className="header-link" to="/" >Home</NavLink>
        <NavLink className="header-link" to="/menu" >Our Menu</NavLink>
        <NavLink className="header-link" to="/add">Add New</NavLink>
      </div>
    </div>
  );
}
