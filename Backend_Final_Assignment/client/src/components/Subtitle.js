import React, { Component } from 'react';

class Subtitle extends Component {
    render() {
        return (
            <header>
                <h2>{this.props.title}</h2>
                <p>{this.props.sub}</p>
            </header>
        );
    }
}

export default Subtitle