/* eslint-disable */
import React, { Component } from 'react';
import { BookInfo } from './bookInfo';
import { BookAnalysis } from './bookAnalysis';
import { BookClient } from '../rest-clients/BookClient';
import bookMock from '../../mock/book.json';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Book extends Component {
  constructor(props) {
    super(props);
    
    this.apiClient = new BookClient();
    this.state = {book:{}};
    this.apiClient.getBook(this.props.match.params.id)
    .then((bookObj) => {
        this.setState({book:bookObj});
    }
    );
  }

  render() {
    return (
        <BookInfo book={this.state.book}/>
    );
  }
}

export {Book};