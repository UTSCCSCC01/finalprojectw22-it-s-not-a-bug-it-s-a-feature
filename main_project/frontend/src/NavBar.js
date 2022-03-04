import React from "react";
import './css/NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="NavBar">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div class="header">
                <div class="left-header">

                    <div class="menu-dropdown">
                        <Link to="/" class="dropdownButton"><i class="fa fa-bars"></i></Link>
                        <div class="dropdown-content">
                            <Link to="/">Home</Link>
                            <Link to="/BrowseStream" class="headerButton">Browse Stream</Link>
                            <Link to="Stream">Start Stream</Link>
                        </div>
                    </div>

                    <div class="logo">
                        <Link to="/">Tuneln.TV</Link>
                    </div>

                </div>
                <div class="search">
                    <form action="/" method="GET" class="form">
                        <input type="text" placeholder="Search"></input>
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>
                <div class="user-dropdown">
                    <Link to="/Login" class="dropdownButton"><i class="fa fa-user"></i></Link>
                    <div class="dropdown-content">
                        <Link to="/Login" class="headerButton">Log In</Link>
                        <Link to="/SignUp">Sing Up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;