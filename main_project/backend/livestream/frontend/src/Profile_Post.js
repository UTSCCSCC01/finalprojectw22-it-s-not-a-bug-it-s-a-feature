import React from "react";
import './css/Profile_Post.css';
import { Link } from 'react-router-dom';
import proPic from './images/proPic.jpg';
import gt7 from './images/gt7.jpg';


var likeCount= 10;

function Profile_Post() {
    return (
        <div className="Profile_Post">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="posts">
                <div className="textPost">
                    <div className="header">
                        <img src={proPic} className="proPicImg"></img>
                        <div className="postInfo">
                            <div className="userName">
                                User Name
                            </div>
                            <div className="postDate">
                                March 15, 2022
                            </div>
                        </div>
                        <div className="options">
                            <button className="optionBtn"><i className="fa fa-ellipsis-v"></i></button>
                            <div className="dropdown-content">
                                <button className="saveBtn">Save Post</button>
                                <button className="deleteBtn">Edit Post</button>
                                <button className="deleteBtn">Delete Post</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="body">
                        <div className="text">
                            I'm gonna stream this week on Monday 9pm for 3 hours. Come and join. I will be playing GT7.
                        </div>
                        <img src={gt7} className="bodyImg"></img>
                    </div>
                    <div className="postCount">
                        <div id="likeCount">
                            {likeCount} Likes
                        </div>
                        <div className="commentCount">
                            132 Comments
                        </div>
                    </div>
                    <div className="actionBtns">
                        <button className="likeBtn" onClick={sendLike}><i className="fa fa-thumbs-o-up"></i>Like</button>
                        <button className="commentBtn"><i className="fa fa-comment-o"></i>Comment</button>
                        <button className="shareBtn"><i className="fa fa-share-square-o"></i>Share</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

function sendLike(){
    likeCount = likeCount + 1;
    document.getElementById("likeCount").innerHTML = likeCount + " likes";
}

export default Profile_Post;