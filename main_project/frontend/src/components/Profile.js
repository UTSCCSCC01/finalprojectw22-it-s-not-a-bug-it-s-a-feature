import React, { Component } from "react";
import '../css/Profile.css';
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import Profile_Post from "../Profile_Post";
import banner from '../images/banner.jpg';
import proPic from '../images/proPic.jpg'
import axios from 'axios';

var followerNum = "200k";
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            aboutUser: ""
        };
    }
    componentDidMount(){
        axios.get('http://localhost:3333/users/'+ this.userName)
            .then(res => {
                this.setState( {userName: res.data.username}, 
                    {aboutUser: res.data.description})
            })
            .catch(function (error){
                console.log(error);
            })
    }

    render(){
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
                                    {this.state.userName}
                                </div>
                                <div className="followerNum">
                                    {followerNum + " Followers"}
                                </div>
                                <div className="about">
                                    {this.state.aboutUser}
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
}


// function Profile() {
//     var userName = "User Name";
//     var followerNum = "200k"
//     return (
//         <div className="Profile">
//             <header>
//                 <h1></h1>
//                 <div className="ProfileHeader">
//                     <div className="banner">
//                         <img src={banner} className="bannerImg"></img>
//                     </div>
//                     <div className="header">
//                         <img src={proPic} className="proPicImg"></img>
//                         <div className="headerInfo">
//                             <div className="userName">
//                                 {userName}
//                             </div>
//                             <div className="followerNum">
//                                 {followerNum + " Followers"}
//                             </div>
//                         </div>
//                         <Link to="/EditProfile" className="editProfileBtn">Edit Profile</Link>
//                     </div>
//                     <div className="profileNavBar">
//                         <Link to="/Profile/Profile_Post" className="navBtn">Post</Link>
//                         <button className="navBtn">About</button>
//                         <button className="navBtn">Videos</button>
//                     </div>
//                 </div>
//             </header>
//             <div id="postBody">
//                 <Profile_Post />
//             </div>
            
            
            
            

//         </div>
//     );
// }


// export default Profile;