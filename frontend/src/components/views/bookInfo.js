/* eslint-disable */
import React from 'react';

class BookInfo extends React.Component {
    render() {
        return (
            <div className="book-info">
                <img className="book-img"
                src={this.props.book.image} 
                alt={this.props.book.name}
                />
                <h1>{this.props.book.name}</h1>
                <h3>{this.props.book.author}, {this.props.book.year}</h3>
                <h2>Description</h2>
                <div className="description">{this.props.book.description}</div>
            </div>
        );
    }
}

export { BookInfo };