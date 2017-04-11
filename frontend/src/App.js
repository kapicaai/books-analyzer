import React, { Component } from 'react';
import './App.css';
import {Book} from './components/Book';
import {Home} from './components/Home';
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
        
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/book">Book</Link></li>
      </ul>


      <Route exact path="/" component={Home}/>
      <Route path="/book" component={Book}/>
      </div>
      </Router>
    );
  }
}

export default App;
