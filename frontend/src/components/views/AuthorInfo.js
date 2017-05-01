import React, { Component } from 'react';

class AuthorInfo extends Component {
  render() {
    return (
      <div className="author">
        <div className="author-title">
          <img src={this.props.author.portrait} alt={this.props.author.name}/>
          <h1>{this.props.author.name}</h1>
        </div>
        <div className="description">
          {this.props.author.info}
          <br/>
          More on <a href={this.props.author.wikiLink}>Wikipedia</a>
        </div>
        <div className="books">
          some books
        </div>
      </div>
    );
  }
}

export {AuthorInfo};