import { Outlet } from "react-router-dom";
import PizzaHeader from "./pizza-header";

export default function Layout() {
    return (
        <>
            <PizzaHeader />
            <Outlet />
        </>
    )
}