import { Link, NavLink } from "react-router-dom";

export default function PizzaHeader({ isLoggedIn, handleLogout }) {


  return (
    <div className="pizza-header">
      <Link to={"/"}>
        <h1>PizzaStore</h1>
      </Link>
      <div className="header-links">
        <NavLink className="header-link" to="/" >Home</NavLink>
        <NavLink className="header-link" to="/menu" >Our Menu</NavLink>
        <NavLink className="header-link" to="/add">Add New</NavLink>
        <NavLink className="header-link" to="/protected">Protected</NavLink>
        {isLoggedIn && <button style={{ backgroundColor: "transparent" }} onClick={handleLogout}>Logout</button>}
      </div>
    </div>
  );
}
