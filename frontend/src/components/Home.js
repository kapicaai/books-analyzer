/* eslint-disable */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {BookClient} from '../rest-clients/BookClient';
import {LinkList} from './views/LinkList';

class Home extends Component {
    constructor(props) {
        super(props);
        this.apiClient = new BookClient();
        this.state = {books:{}};
        this.apiClient.getBook()
        .then((booksObj) => {
        this.setState({books:booksObj});
        }
    );
        
    }


  render() {
    return (
        <div>
            <h1>Book analysis</h1>
            <LinkList elements={this.state.books} resource={this.apiClient.resource}/>
        </div>
    );
  }
}

export {Home};