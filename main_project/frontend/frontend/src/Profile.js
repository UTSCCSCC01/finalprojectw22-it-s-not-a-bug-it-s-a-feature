import React from "react";
import './css/Profile.css';
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import Profile_Post from "./Profile_Post";
import banner from './images/banner.jpg';
import proPic from './images/proPic.jpg'



function Profile() {
    var userName = "User Name";
    var followerNum = "200k"
    return (
        <div className="Profile">
            <header>
                <h1></h1>
                <div className="ProfileHeader">
                    <div className="banner">
                        <img src={banner} className="bannerImg"></img>
                    </div>
                    <div className="header">
                        <img src={proPic} className="proPicImg"></img>
                        <div className="headerInfo">
                            <div className="userName">
                                {userName}
                            </div>
                            <div className="followerNum">
                                {followerNum + " Followers"}
                            </div>
                        </div>
                        <Link to="/EditProfile" className="editProfileBtn">Edit Profile</Link>
                    </div>
                    <div className="profileNavBar">
                        <Link to="/Profile/Profile_Post" className="navBtn">Post</Link>
                        <button className="navBtn">About</button>
                        <button className="navBtn">Videos</button>
                    </div>
                </div>
            </header>
            <div id="postBody">
                <Profile_Post />
            </div>
            
            
            
            

        </div>
    );
}


export default Profile;