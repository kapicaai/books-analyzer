import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { onBooksGet } from './requests';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My first app</h2>
        </div>
        <p className="App-intro">
          I just got started!
          <br/>
          <button id="getBook" onClick={onBooksGet}>Get my book!</button>
        </p>
        <div id="book"></div>
      </div>
    );
  }
}

export default App;
