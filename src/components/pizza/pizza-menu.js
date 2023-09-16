import { NavLink, Outlet } from "react-router-dom";

export default function Menu() {

  return (
    <>
      <div className="pizza-sub-header">
        <NavLink end to="" className="header-link">Our Pizzas</NavLink>
        <NavLink to="sandwiches" className="header-link">Our Sandwiches</NavLink>
        <NavLink to="plats" className="header-link">Our Plats</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
