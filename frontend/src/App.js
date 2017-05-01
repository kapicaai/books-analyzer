import React, { Component } from 'react';
import './App.css';
import '../public/styles/style.css';
import {Book} from './components/pages/Book';
import {Home} from './components/pages/Home';
import {AddBook} from './components/pages/AddBook';
import {AllAuthors} from './components/pages/AllAuthors';
import {Author} from './components/pages/Author';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <Router>
      <div className="App">
      <div className="header">
        <div className="menu">
            <Link to="/">(logo)</Link>
            <Link to="/book">Books</Link>
            <Link to="/addbook">Add new book</Link>
            <Link to="/author">Authors</Link>
        </div>
      </div>


      <Route exact path="/book" component={Home}/>
      <Route path="/book/:id" component={Book}/>
      <Route path="/addbook" component={AddBook}/>
      <Route exact path="/author" component={AllAuthors}/>
      <Route path="/author/:id" component={Author}/>
      </div>
      </Router>
    );
  }
}

export default App;
