import React from 'react'
import { useNavigate } from "react-router-dom";
// import "./Login.css"
const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
    <h1>Log in here</h1>
    <input type="email" placeholder="Enter your email"/><br/><br/>
    <input type="password" placeholder="Enter your password"/><br/><br/>
    <button className="signIn">SignIn</button><br/>
</div>
  )
}

export default Login