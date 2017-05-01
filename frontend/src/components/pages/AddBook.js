/* eslint-disable */
import React, { Component } from 'react';
import { BookInfo } from '../views/bookInfo';
import { BookAnalysis } from '../views/bookAnalysis';
import {ObjectRestClient} from '../../rest-clients/ObjectRestClient';
import { resources } from '../../rest-clients/RestClient';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Form from "react-jsonschema-form";
import {bookFormSchema} from '../form-schemas/bookForm';

class AddBook extends Component {

  render() {
    const postBook = ({formData}) => {
    let restClient = new ObjectRestClient(resources.book);
    restClient.postObject(formData);
    console.log(formData);
    setTimeout(function() {
        window.location.replace('/book');
    }, 500);
  };
  console.log(bookFormSchema);
    return (
        <Form
        schema={bookFormSchema}
        onSubmit={postBook} />
    );
  }
}

export {AddBook};