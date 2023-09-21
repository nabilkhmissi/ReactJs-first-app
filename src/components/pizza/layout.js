import { Outlet } from "react-router-dom";
import PizzaHeader from "./pizza-header";
import { useEffect, useState } from "react";

export default function Layout() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function handleLogin() {
        setIsLoggedIn(true);
    }

    function handleLogout() {
        localStorage.removeItem('pizza_user')
        setIsLoggedIn(false)
    }

    useEffect(() => {
        if (localStorage.getItem("pizza_user")) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [])
    return (
        <>
            <PizzaHeader isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
            <Outlet context={[isLoggedIn, setIsLoggedIn]} />
        </>
    )
}