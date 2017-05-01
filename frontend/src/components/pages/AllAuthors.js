/* eslint-disable */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ObjectRestClient} from '../../rest-clients/ObjectRestClient';
import {LinkList} from '../views/LinkList';
import { resources } from '../../rest-clients/RestClient';

class AllAuthors extends Component {
    constructor(props) {
        super(props);
        this.apiClient = new ObjectRestClient(resources.author);
        this.state = {authors:{}};
        this.apiClient.getObject()
        .then((authorsObj) => {
        this.setState({authors:authorsObj});
        }
    );
        
    }


  render() {
    return (
        <div>
            <h1>All authors</h1>
            <LinkList elements={this.state.authors} resource={this.apiClient.resource}/>
        </div>
    );
  }
}

export {AllAuthors};