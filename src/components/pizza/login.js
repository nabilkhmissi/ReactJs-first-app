import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom"

import { loginUser } from "../utils/utils"


export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export function LoginAction() {

}

export default function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const message = useLoaderData();

    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)

    function handleSubmit(e) {
        e.preventDefault();
        setStatus("submitting")
        loginUser()
            .then(data => {
                console.log(data);
                navigate("/menu", { replace: true })
            })
            .catch(error => setError(error.message))
            .finally(() => setStatus("idle"))
    }




    function handleEmailChange(e) {
        setEmail(e.target.value)
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    return (
        <>
            <h1 className="text-center">login page</h1>
            <form className="form">
                {message && <p className="alert-warning">{message} </p>}
                {error && <p className="alert-danger">{error} </p>}
                <div className="form-group">
                    <label>Email</label>
                    <input value={email} onChange={handleEmailChange} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div className="form-group">
                    <button disabled={status === "submitting"} onClick={handleSubmit}>{status === "idle" ? 'Login' : 'Processing...'}</button>
                </div>
            </form>
        </>
    )
}