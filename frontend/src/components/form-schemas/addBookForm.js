import React, { Component } from 'react';

class BookForm extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        var authors = this.props.authors;
        return (
            <form action={this.props.action} method='POST' encType='multipart/form-data'>
                <input
                    type="text"
                    name='title'
                    value={this.state.title}
                    onChange={this.handleInputChange} />

                <select name="author" value={this.state.author}>
                    {authors.map((author) =>
                        <option key={author._id} value={author._id}>{author.name}</option>)}
                </select>

                <input
                    type="number"
                    name='year'
                    onChange={this.handleInputChange} />

                <input
                    type="file"
                    name='text'
                    onChange={this.handleInputChange} />

                <input
                    type="submit"
                    value='Add a book' />
            </form>
        );
    }
}