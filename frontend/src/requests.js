/* eslint-disable */

import { baseUrl, resources, contentTypes, RestClient} from "./apiClient";
// import {showAnalysis, showError, showAllBooks} from "./representation/booksAnalysis"
import './components/bookInfo';
import React from 'react';
import ReactDOM from 'react-dom';
import { BookInfo } from './components/bookInfo';

// const baseUrl = "http://localhost:8080/api";

// const resources = {
//   book: '/book/',
//   author: '/author/',
//   user: '/user/'
// }



function onBooksGet() {
    var client = new RestClient(baseUrl, contentTypes.json);
    client.get(resources.book).then(showBook, showBook);
}

function showBook(json) {
        let book = JSON.parse(json);
        
        let element = <BookInfo book={book}/>;
        console.log("element!!!", element);
        ReactDOM.render(element, document.getElementById("book"));
}

export { onBooksGet };

// function onBookPost() {
//     client.post(resources.book, '{"Id":"blabla", "Name":"Balabla"}')
//     .then(showAllBooks, showError);
// }

