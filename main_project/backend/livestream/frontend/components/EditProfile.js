import React from "react";
import './css/EditProfile.css';

function EditProfile() {
    return (
        <div className="EditProfile">
            <h1> </h1>
            <h1>Edit Profile</h1>
            <div className="filds">
                <form action="/" method="POST" className="form">
                    <div className="changeUserName">
                        <h2>Change User Name:</h2>
                        <input type="text" placeholder="User Name"></input>
                    </div>
                    <div className="ChangePassword">
                        <h2>Change Password:</h2>
                        <input type="text" placeholder="Password"></input>
                    </div>
                    <div className="confirmPassword">
                        <h2>Confirm Password:</h2>
                        <input type="text" placeholder="Confirm Password"></input>
                    </div>
                    <div className="changeEmail">
                        <h2>Change Email:</h2>
                        <input type="text" placeholder="Email"></input>
                    </div>
                    <h1></h1>
                    <button type="submit" className="changeBtn">Confirm Changes</button>
                </form>
            </div>   
        </div>
    );
}

export default EditProfile;