import React, { Component } from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent";
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    userName: "String"
  }
  stateChangeHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }
  deleteChar = (index) => {
    const charArray = this.state.userName.split('');
    charArray.splice(index,1);
    this.setState({
      userName: charArray.join('')
    })
  }
  render() {
    const charArray = this.state.userName.split('');
    return (
      <div className="App">
          <input type="text" value={this.state.userName} onChange={this.stateChangeHandler} />
          <ValidationComponent length={this.state.userName.length}/>
          {
            charArray.map((char, index) => {
              return <CharComponent key={index} character={char} deleteCharacter={() => this.deleteChar(index)}/>
            })
          }
      </div>
    );
  }
}

export default App;
