import React from "react";
import './css/SignUp.css';

function SignUp() {
    return (
        <div className="SignUp">
            <h1> </h1>
            <h1>Sign Up</h1>
            <div class="filds">
            <div class="email">
                <h2>Email:</h2>
                <input type="text" placeholder="Email"></input>
            </div>
            <div class="userName">
                <h2>User Name:</h2>
                <input type="text" placeholder="User Name"></input>
            </div>
            <div class="password">
                <h2>Password:</h2>
                <input type="text" placeholder="Password"></input>
            </div>
            <div class="confirmPassword">
                <h2>Confirm Password:</h2>
                <input type="text" placeholder="Confirm Password"></input>
            </div>
            <h1></h1>
            <button type="submit" class="signUpBtn">Sign Up</button>
            </div>
        </div>
    );
}

export default SignUp;