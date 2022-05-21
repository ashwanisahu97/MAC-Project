import React from 'react'

const Register = () => {
  return (
    <div className="signup-form">
        <h1>Create a account</h1>
        <form className="form">
 <input type="email" placeholder="enter your email"/><br/>
 <input type="number" placeholder="enter your phone number"/><br/>
 <input type="password" placeholder="Enter your password"/><br/>
 <input type="button" value="SignUp now"/>
    </form>
    <p>If you have already an account?<a href="signIn.html">sign in</a></p>
 </div>  
  )
}

export default Register