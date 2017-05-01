/* eslint-disable */
import React, { Component } from 'react';
import { BookInfo } from '../views/bookInfo';
import { BookAnalysis } from '../views/bookAnalysis';
import { ObjectRestClient } from '../../rest-clients/ObjectRestClient';
import { resources } from '../../rest-clients/RestClient';
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
      <div className="book">
        <BookInfo book={this.state.book}/>
        <BookAnalysis analysis = {this.state.book.analysis}/>
      </div>
    );
  }
}

export {Book};