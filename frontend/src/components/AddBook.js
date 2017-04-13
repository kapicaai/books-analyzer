/* eslint-disable */
import React, { Component } from 'react';
import { BookInfo } from './bookInfo';
import { BookAnalysis } from './bookAnalysis';
import { baseUrl, resources, contentTypes, RestClient } from '../rest-clients/RestClient';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Book extends Component {
  constructor(props) {
    super(props);
    //TODO: get book from server
    this.apiClient = new RestClient(baseUrl, contentTypes.json);
    this.state = {book:{}};
    this.apiClient.get(resources.book, this.props.match.params.id).then(
        (json) => {
            this.state.books = JSON.parse(json);
            console.log("HERE ", this.state.books);
            this.setState({
                book:(JSON.parse(json))
            })
        },
        (err, text) => {
            this.state.book = {

            };
        }
    );
  }

  postBook

  render() {
    return (
        <BookInfo book={this.state.book}/>
    );
  }
}

export {Book};