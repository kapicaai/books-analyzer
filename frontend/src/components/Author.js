import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { onBooksGet } from './requests';
import { BookInfo } from './bookInfo';
import { BookAnalysis } from './bookAnalysis';

class Author extends Component {
  render() {
    return (
      <div className="author">
        <div className="author-title">
          <img src={props.author.portrait} alt={props.author.name}/>
          <h1>{props.author.name}</h1>
        </div>
        <div className="description">
          {props.author.info}
          <br/>
          More on <a href={props.author.wikiLink}>Wikipedia</a>
        </div>
        <div className="books">
          some books
        </div>
      </div>
    );
  }
}

export default App;