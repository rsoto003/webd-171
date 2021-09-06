import React from 'react';

let MainContent = (props) => {
        return (
            <div className="jumbotron mt-5">
                <h1 className="display-4">Welcome, {props.isLoggedIn ? "testing..." : "Guest"}</h1>
                <p className="lead"></p>
                <hr className="my-4" />
                <h2 className="text-info">Current Assignments</h2>
                <p>{props.isLoggedIn ? "Week 2 Assignment" : "No assignments available, please log in first."}</p>
                <button className={props.isLoggedIn ? "btn btn-danger btn-lg mt-5" : "btn btn-primary btn-lg mt-5"} onClick={props.userSignIn}>{props.isLoggedIn ? "Log Out" : "Log In"}</button>
            </div>
        )
}

export default MainContent;
