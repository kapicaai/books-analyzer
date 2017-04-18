/* eslint-disable */
import React, { Component } from 'react';
import { BookInfo } from './bookInfo';
import { BookAnalysis } from './bookAnalysis';
import { ObjectRestClient } from '../rest-clients/ObjectRestClient';
import { resources } from '../rest-clients/RestClient';
import bookMock from '../../mock/book.json';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Book extends Component {
  constructor(props) {
    super(props);
    
    this.apiClient = new ObjectRestClient(resources.book);
    this.state = {book:{}};
    this.apiClient.getObject(this.props.match.params.id)
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