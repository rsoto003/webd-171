import React, { Component } from 'react';

let Values = (props) => {
    return (
        <div className="jumbotron mt-5">
        <h1 className="display-4">Welcome, {props.isLoggedIn ? props.user : "Guest"}</h1>
        <p className="lead"></p>
        <hr className="my-4" />
        <h2 className="text-info">Current Assignments</h2>
        <p>{this.state.isLoggedIn ? "Week 2 Assignment" : "No assignments available, please log in first."}</p>
        <button className="btn btn-primary btn-lg" role="button" onClick={userSignIn}>Log In</button>
    </div>
    )
}

export default Values;