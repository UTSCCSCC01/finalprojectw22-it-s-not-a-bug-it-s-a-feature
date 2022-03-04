import React from "react";
import './css/Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="Login">
            <h1> </h1>
            <h1>Log In</h1>
            <div class="filds">
            <div class="userName">
                <h2>User Name:</h2>
                <input type="text" placeholder="User Name"></input>
            </div>
            <div class="password">
                <h2>Password:</h2>
                <input type="text" placeholder="Password"></input>
            </div>

            <div class="forgetPasswordBtn">
                <Link to="/LogIn">Forget Password</Link>
            </div>
            <button type="submit" class="logInBtn">Log In</button>
            </div>
        </div>
    );
}

export default Login;