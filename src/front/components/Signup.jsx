import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await fetch("https://legendary-space-dollop-97qxx6wjqr5vhx9xx-3001.app.github.dev/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            })
            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.msg)
            }
            const data = await response.json()
            navigate("/login")
        } catch (error) {
            console.error("error al intentar registrarte", error)
        }
    }
    return (
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }}
                    id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }}
                    id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Signup