/* eslint-disable */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ObjectRestClient} from '../rest-clients/ObjectRestClient';
import {LinkList} from './views/LinkList';
import { resources } from '../rest-clients/RestClient';

class Home extends Component {
    constructor(props) {
        super(props);
        this.apiClient = new ObjectRestClient(resources.book);
        this.state = {books:{}};
        this.apiClient.getObject()
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