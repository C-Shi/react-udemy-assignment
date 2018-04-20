import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './userinput.js';
import UserOutput from './useroutput.js'

class App extends Component {
  state = {
    username : 'Yimiao'
  }

  changeNameHandler = (event) => {
    this.setState ({
      username: event.target.value
    })
  }

  switchNameHandler = (newName) => {
    this.setState ({
      username: newName
    })
  }


  render() {
    return (
      <div className="App">
        <UserInput change={this.changeNameHandler}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username} click={this.switchNameHandler.bind(this, 'Kyle')}/>
      </div>
    );
  }
}

export default App;
