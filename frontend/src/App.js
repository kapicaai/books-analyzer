import React, { Component } from 'react';
import './App.css';
import '../public/styles/style.css';
import {Book} from './components/Book';
import {Home} from './components/Home';
import {AddBook} from './components/AddBook';
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
            <Link to="/book">All Books</Link>
            <Link to="/addbook">All Books</Link>
        </div>
      </div>


      <Route exact path="/book" component={Home}/>
      <Route path="/book/:id" component={Book}/>
      <Route path="/addbook" component={AddBook}/>
      </div>
      </Router>
    );
  }
}

export default App;
