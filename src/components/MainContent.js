import React, { Component } from 'react';
import Assignments from './Assignments';
class MainContent extends Component {
    render(){
        return (
            <div className="jumbotron mt-5">
                <h1 className="display-4">Welcome, {this.props.isLoggedIn ? this.props.user : "Guest"}</h1>
                <p className="lead"></p>
                <hr className="my-4" />
                <h2 className="text-info">Web Development 171 Assignments</h2>
                {this.props.isLoggedIn ? <Assignments /> : null}
                <button className={this.props.isLoggedIn ? "btn btn-danger btn-lg mt-5" : "btn btn-primary btn-lg mt-5"} onClick={this.props.userSignIn}>{this.props.isLoggedIn ? "Log Out" : "Log In"}</button>
            </div>
        )
    }
}

export default MainContent;
