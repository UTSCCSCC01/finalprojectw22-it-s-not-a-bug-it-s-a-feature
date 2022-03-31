import React, { Component } from "react";
import './css/Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            email: ''
        }
    }
    onChangeUserName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const userObject = {
            name: this.state.name,
            email: this.state.email
        };
        axios.post('http://localhost:3333/auth/login', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ name: '', email: '' })
        }
    render() {
        return (
                    <div className="Login">
                        <h1> </h1>
                        <h1>Log In</h1>
                        <div className="filds">
                            <form onSubmit={this.onSubmit}>
                                    <div className="userName">
                                    <h2>User Name:</h2>
                                    <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control" placeholder="User Name"></input>
                                </div>
                                <div className="password">
                                    <h2>Password:</h2>
                                    <input type="text" value={this.state.email} onChange={this.onChangeUserEmail} className="form-control" placeholder="Password"></input>
                                </div>
                                <div className="forgetPasswordBtn">
                                    <Link to="/LogIn">Forget Password</Link>
                                </div>
                                <button type="submit" className="logInBtn">Log In</button>
                                <div className="form-group">
                                    <input type="submit" value="Create User" className="btn btn-success btn-block" />
                                </div>
                            </form>
                        </div>    
                    </div>
        )
    }
}


// function Login() {


//     return (
//         <div className="Login">
//             <h1> </h1>
//             <h1>Log In</h1>
//             <div className="filds">
//                 <form action="/" method="POST" className="form">
//                         <div className="userName">
//                         <h2>User Name:</h2>
//                         <input type="text" placeholder="User Name"></input>
//                     </div>
//                     <div className="password">
//                         <h2>Password:</h2>
//                         <input type="text" placeholder="Password"></input>
//                     </div>

//                     <div className="forgetPasswordBtn">
//                         <Link to="/LogIn">Forget Password</Link>
//                     </div>
//                     <button type="submit" className="logInBtn">Log In</button>
//                 </form>
//             </div>    
//         </div>
//     );
// }

//export default Login;