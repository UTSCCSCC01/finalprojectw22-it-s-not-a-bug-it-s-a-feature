import React from "react";
import '../css/SignUp.css';


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserDescription = this.onChangeUserDescription(this);
        this.onChangeUserLocation = this.onChangeUserLocation(this);
        this.onChangeUserAvatar = this.onChangeUserAvatar(this);
        this.onChangeUserPassword = this.onChangeUserPassword(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            description:'',
            location: '',
            avatar: '',
            password: ''
        }
    }
    onChangeUserName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangeUserDescription(e) {
        this.setState({ description: e.target.value })
    }
    onChangeUserLocation(e) {
        this.setState({ location: e.target.value })
    }
    onChangeUserAvatar(e) {
        this.setState({ avatar: e.target.value })
    }
    onChangeUserPassword(e) {
        this.setState({ password: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const userObject = {
            name: this.state.name,
            email: this.state.email,
            description: this.state.description,
            location: this.state.location,
            avatar : this.state.avatar,
            password: this.state.password

        };
        axios.post('http://localhost:3333/auth/register', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ name: '', email: '', description: '', location: '', avatar: '', password: ''})
        }
    render() {
        return (
            <div className="SignUp">
            <h1> </h1>
            <h1>Sign Up</h1>
            <div className="form-control">
                <form onSubmit={this.onSubmit}>
                    <div className="Username">
                        <h2>Username:</h2>
                        <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control" placeholder="UserName"></input>
                    </div>
                    <div className="Email">
                        <h2>User Name:</h2>
                        <input type="text" value={this.state.email} onChange={this.onChangeUserEmail} className="form-control" placeholder="Email"></input>
                    </div>
                    <div className="Description">
                        <h2>Password:</h2>
                        <input type="text" value={this.state.description} onChange={this.onChangeUserDescription} className="form-control" placeholder="Description"></input>
                    </div>
                    <div className="Location">
                        <h2>Password:</h2>
                        <input type="text" value={this.state.location} onChange={this.onChangeUserLocation} className="form-control" placeholder="Location"></input>
                    </div>
                    <div className="Avatar">
                        <h2>Avatar:</h2>
                        <input type="text" value={this.state.avatar} onChange={this.onChangeUserAvatar} className="form-control" placeholder="Avatar"></input>
                    </div>
                    <div className="confirmPassword">
                        <h2>Confirm Password:</h2>
                        <input type="text" value={this.state.password} onChange={this.onChangeUserPassword} className="form-control" placeholder="Confirm Password"></input>
                    </div>
                    <h1></h1>
                    <button type="submit" className="logInBtn">Log In</button>
                </form>
            </div>   
        </div>
        )
    }
}


