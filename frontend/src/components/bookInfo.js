import React from 'react';
import ReactDOM from 'react-dom';

class BookInfo extends React.Component {
    constructor() {
        this.title;
        this.author;
        this.year;
        this.description;
    }
    render() {
        return (
            <div className="book-info">
                <img className="book-img"
                src="{this.props.imgUrl}" 
                alt="{this.props.title}"
                />
                <h1>{this.props.title}</h1>
                <h3>{this.props.author}, {this.props.year}</h3>
                <h2>Description</h2>
                <div className="description">{this.props.description}</div>
            </div>
        );
    }
}