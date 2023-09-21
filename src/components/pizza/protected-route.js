import { NavLink, Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoute() {

    const location = useLocation();

    const isLoggedIn = localStorage.getItem("pizza_user");
    if (!isLoggedIn) {
        return <Navigate to={`/login?redirectTo=${location.pathname}&message=You have to login first`} />
    }

    return (
        <>
            <h1>Protected Route</h1>
            <nav className="header-links">
                < NavLink className="header-link" to="" end > Account</NavLink >
                <NavLink className="header-link" to="cart">My cart</NavLink>
            </nav >
            <Outlet />
        </>
    )
}