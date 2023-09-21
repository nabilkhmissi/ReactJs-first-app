import { useState } from "react";
import { useNavigate, useOutletContext, useSearchParams } from "react-router-dom"

import { loginUser } from "../utils/utils"

export default function Login() {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();
    const redirectTo = searchParams.get("redirectTo");
    const message = searchParams.get("message");

    const [isLoggedIn, setIsLoggedIn] = useOutletContext()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)

    function handleSubmit(e) {
        e.preventDefault();
        setStatus("submitting")
        loginUser()
            .then(data => {
                localStorage.setItem("pizza_user", data);
                setIsLoggedIn(true)
                if (searchParams) {
                    navigate(redirectTo, { replace: true })
                } else {
                    navigate("/menu", { replace: true })
                }
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
                {!error && message && <p className="alert-warning">{message} </p>}
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