import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { onBooksGet } from './requests';
import { BookInfo } from './bookInfo';
import { BookAnalysis } from './bookAnalysis';

class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="book-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Book information</h2>
        </div>
        <BookInfo book={this.props.book}/>
        <BookAnalysis book={this.props.book.analysis}/>
        <div id="book"></div>
      </div>
    );
  }
}

export default App;