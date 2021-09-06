import React, { Component } from 'react';

let Values = () => {
    return (
        <div class="jumbotron mt-5">
        <h1 class="display-4">Welcome, {this.state.isLoggedIn ? this.props.user : "Guest"}</h1>
        <p class="lead"></p>
        <hr class="my-4" />
        <h2 class="text-info">Current Assignments</h2>
        <p>{this.state.isLoggedIn ? "Week 2 Assignment" : "No assignments available, please log in first."}</p>
        <button class="btn btn-primary btn-lg" role="button" onClick={this.userSignIn}>Log In</button>
    </div>
    )
}

export default Values;