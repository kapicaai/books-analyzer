/* eslint-disable */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { baseUrl, resources, contentTypes, RestClient } from '../apiClient';
import {LinkList} from './views/LinkList';

class Home extends Component {
    constructor(props) {
        super(props);
        this.apiClient = new RestClient("http://localhost:8080", contentTypes.json);
        this.books;
        this.apiClient.get(resources.book).then(
            (json) => {
                this.books = JSON.parse(json);
            },
            (err, text) => {
                this.books = {

                };
            }
        );
    }
  render() {
    return (
        <div>
            <h1>Book analysis</h1>
            <LinkList elements={this.books}/>
        </div>
    );
  }
}

export {Home};