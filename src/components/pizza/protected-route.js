import { redirect, useLoaderData } from "react-router-dom";



export function loader() {
    const isLoggedIn = false;
    if (!isLoggedIn) {
        return redirect("/login?message=You have to login first")
    }
    return "Protected route"
}
export default function ProtectedRoute() {

    const msg = useLoaderData();


    return <h1>{msg}</h1>
}