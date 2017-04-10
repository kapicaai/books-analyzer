/* eslint-disable */
import React, { Component } from 'react';
import { BookInfo } from './bookInfo';
import { BookAnalysis } from './bookAnalysis';

class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="book-header">
          <h2>Book information</h2>
        </div>
        <BookInfo book={this.props.book}/>
        <div id="book"></div>
      </div>
    );
  }
}

export {Book};