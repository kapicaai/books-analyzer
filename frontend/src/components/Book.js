/* eslint-disable */
import React, { Component } from 'react';
import { BookInfo } from './bookInfo';
import { BookAnalysis } from './bookAnalysis';
import bookMock from '../../mock/book.json';

class Book extends Component {
  constructor() {
    super();
    //TODO: get book from server
    this.book = bookMock;
  }

  render() {
    return (
        <BookInfo book={this.book}/>
    );
  }
}

export {Book};