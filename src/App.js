import React, { Component } from 'react';
import './App.css';
import UserInput from './Input-Output/UserInput';
import UserOutput from './Input-Output/UserOutput';

class App extends Component {
  state = {
    userName: "State UN"
  }
  stateChangeHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }
  render() {
    const inlineStyle = {
      background: "white",
      border: "1px solid black"
    }
    return (
      <div className="App">
          <UserInput style={inlineStyle} userName={this.state.userName} eventHandler={this.stateChangeHandler}/>
          <UserOutput userName={this.state.userName}/>
          <UserOutput userName="React 2"/>
      </div>
    );
  }
}

export default App;
