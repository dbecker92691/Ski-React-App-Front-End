import React, { Component } from 'react';
import './App.css';
import LogInRegister from './LogInRegister';
import SkiPostContainer from './SkiPostContainer';
import SkiTrafficContainer from './SkiMapContainer';


class App extends Component {
    constructor(){
    super();
    this.state = {
        loggedIn: false,
        username: '',
        showTrafficMap: false
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

  showTrafficMap = async (e) => {
    e.preventDefault();

    if(this.state.showTrafficMap === false) {
          this.setState({
      showTrafficMap: true
    })
     
    } else {
      this.setState({
        showTrafficMap: false
      })
    }

  }


  render() {
    const showTrafficMap = this.state.showTrafficMap;
    const loggedIn = this.state.loggedIn;




    return (
      <div className="App">
       { loggedIn ? 
        <SkiPostContainer showTrafficMap={this.showTrafficMap} logout={this.Logout}/> 
        : 
        <LogInRegister LogIn={this.LogIn}/>
      }
      {
        showTrafficMap ?
        <SkiTrafficContainer /> :
        null
      }
      </div>
    );
  }
}

export default App;