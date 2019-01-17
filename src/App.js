import React, { Component } from 'react';
import './App.css';
import LogInRegister from './LogInRegister';
import SkiPostContainer from './SkiPostContainer'


class App extends Component {
    constructor(){
    super();
    this.state = {
        loggedIn: false,
        username: ''
      }
  }

    LogIn = (username) => {
    this.setState({
      loggedIn: true,
      username: username
    })
  }
  Logout = (username) => {
    this.setState({
      loggedIn: false,
      username: username
    });
  }


  render() {
    return (
      <div className="App">
       {this.state.loggedIn ? 
        <SkiPostContainer logout={this.Logout}/> : 
        <LogInRegister LogIn={this.LogIn}/>}
      </div>
    );
  }
}

export default App;
