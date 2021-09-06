import React, { Component } from 'react';

class MainContent extends Component {
    state = {
        isLoggedIn: true
    }
    userSignIn = () => {
        this.setState(prevState => ({
            isLoggedIn: !prevState.isLoggedIn
        }))
    }
    render(){
        return (
            <div class="jumbotron mt-5">
                <h1 class="display-4">Welcome, {this.state.isLoggedIn ? this.props.user : "Guest"}</h1>
                <p class="lead"></p>
                <hr class="my-4" />
                <h2 class="text-info">Current Assignments</h2>
                <p>{this.state.isLoggedIn ? "Week 2 Assignment" : "No assignments available, please log in first."}</p>
                <button class={this.state.isLoggedIn ? "btn btn-danger btn-lg mt-5" : "btn btn-primary btn-lg mt-5"} role="button" onClick={this.userSignIn}>{this.state.isLoggedIn ? "Log Out" : "Log In"}</button>
            </div>
        )
    }
}

export default MainContent;
