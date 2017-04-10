import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { onBooksGet } from './requests';
import bookMock from '../mock/book.json';
import {Book} from './components/Book';

class App extends Component {
  
  render() {
    console.log(bookMock);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My first app</h2>
        </div>
        <p className="App-intro">
          I just got started!
          <br/>
          
        </p>
        <div id="book"></div>
        <Book book={bookMock}/>
      </div>
    );
  }
}

export default App;
