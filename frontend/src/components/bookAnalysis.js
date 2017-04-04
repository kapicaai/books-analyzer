import React from 'react';
import ReactDOM from 'react-dom';

class BookAnalysis extends React.Component {
    constructor() {
        this.title;
        this.author;
    }
    render() {
        return (
            <div className="book-analysis">
                <h1>{this.props.title}</h1>
                <h3>{this.props.author}</h3>
            </div>
        );
    }
}

export { BookAnalysis };