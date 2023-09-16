import { useState } from "react";
import { Link } from "react-router-dom";

export default function PizzaHeader() {


  const [menu, setMenu] = useState(false)

  return (
    <div className="pizza-header">
      <h1>PizzaStore</h1>
      <div className="header-links">
        <Link to="/" >Home</Link>
        <Link to="/menu" >Our Pizzas</Link>
        <Link to="/add">Add New</Link>
      </div>
      {menu && <div className="menu-icon">menu</div>}
    </div>
  );
}
