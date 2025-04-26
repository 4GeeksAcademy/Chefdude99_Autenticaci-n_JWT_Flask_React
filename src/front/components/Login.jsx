import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';
const backEndUrl = import.meta.env.VITE_BACKEND_URL;

const Login = () => {
  const navigate = useNavigate();
  const {dispatch} = useGlobalReducer();
  const [login, setLogin] = useState({
    email: "",
    password: ""
  })
  fetch(`${backEndUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Login)
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token)
        dispatch({
          type: "set_currentUser",
          payload: data.user
        })
        navigate("/private")
      } else {
        dispatch({
          type: "set_currentUser",
          payload: null
        })
       // alert("No te logeaste, revisa tu email o contraseña")
      }
    })
    .catch((error) => {
      dispatch({
        type: "set_currentUser",
        payload: null
      })
      console.error(error)
    })
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" value={login.email} 
          onChange={(e) => setLogin({...login, email: e.target.value})} 
          id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" value={login.password} 
          onChange={(e) => setLogin({...login, password: e.target.value})} 
          id="exampleInputPassword1" />
        </div>
        <button type="submit" onClick={Login} className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login
