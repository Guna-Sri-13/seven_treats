import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loginstyle from '../Style/Login.module.css';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    
    const login = () => {
    if (email === "admin@gmail.com" && password === "seven_treats") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
    <div className={Loginstyle.login}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <p>email: admin@gmail.com</p>
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <p>password: seven_treats</p>
      <button onClick={login}>Login</button>
    </div> 
    </>
  )
}

export default Login
