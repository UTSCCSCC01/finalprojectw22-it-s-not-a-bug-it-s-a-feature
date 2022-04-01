import React from "react";
import './css/NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="NavBar">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="header">
                <div className="left-header">

                    <div className="menu-dropdown">
                        <Link to="/" className="dropdownButton"><i className="fa fa-bars"></i></Link>
                        <div className="dropdown-content">
                            <Link to="/">Home</Link>
                            <Link to="/BrowseStream" className="headerButton">Browse Stream</Link>
                            <Link to="Stream">Start Stream</Link>
                        </div>
                    </div>

                    <div className="logo">
                        <Link to="/">Tuneln.TV</Link>
                    </div>

                </div>
                <div className="search">
                    <form action="/" method="GET" className="form">
                        <input type="text" placeholder="Search"></input>
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
                <div className="user-dropdown">
                    <Link to="/Profile" className="dropdownButton"><i className="fa fa-user"></i></Link>
                    <div className="dropdown-content">
                        <Link to="/Login" className="headerButton">Log In</Link>
                        <Link to="/SignUp" className="headerButton"> Sign Up</Link>
                        <Link to="/Settings" className="headerButton"> Settings</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;