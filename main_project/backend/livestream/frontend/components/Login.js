import React from "react";
import './css/Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="Login">
            <h1> </h1>
            <h1>Log In</h1>
            <div className="filds">
                <form action="/" method="POST" className="form">
                        <div className="userName">
                        <h2>User Name:</h2>
                        <input type="text" placeholder="User Name"></input>
                    </div>
                    <div className="password">
                        <h2>Password:</h2>
                        <input type="text" placeholder="Password"></input>
                    </div>

                    <div className="forgetPasswordBtn">
                        <Link to="/LogIn">Forget Password</Link>
                    </div>
                    <button type="submit" className="logInBtn">Log In</button>
                </form>
            </div>    
        </div>
    );
}

export default Login;