import React, { Component } from 'react'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import './App.css';

class App extends Component {
  state = {
    isLoggedIn: true,
    user: "Ryan Soto"
  }
  userSignIn = () => {
    this.setState(prevState => ({
        isLoggedIn: !prevState.isLoggedIn
    }))
}
  render(){
    return (
      <div className="App">
        {this.state.isLoggedIn ? <Navbar user={this.state.user} isLoggedIn={this.state.isLoggedIn}/> : null}
        <MainContent user={this.state.user} isLoggedIn={this.state.isLoggedIn} userSignIn={this.userSignIn}/>
      </div>
    );
  }
}

export default App;
