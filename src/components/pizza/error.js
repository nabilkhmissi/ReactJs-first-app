import { useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError();
    return <div className="error-box"><h1>{error.message}</h1></div>
}