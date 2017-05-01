/* eslint-disable */
import React, { Component } from 'react';
import { BookInfo } from '../views/bookInfo';
import { BookAnalysis } from '../views/bookAnalysis';
import { ObjectRestClient } from '../../rest-clients/ObjectRestClient';
import { resources } from '../../rest-clients/RestClient';
import { AuthorInfo } from '../views/AuthorInfo';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Author extends Component {
  constructor(props) {
    super(props);
    
    this.apiClient = new ObjectRestClient(resources.author);
    this.state = {author:{}};
    this.apiClient.getObject(this.props.match.params.id)
    .then((authorObj) => {
        this.setState({author:authorObj});
    }
    );
  }

  render() {
    return (
        <AuthorInfo author={this.state.author}/>
    );
  }
}

export {Author};