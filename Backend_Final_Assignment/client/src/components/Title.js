import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Title extends Component {
    render() {
        return (
            <header>
                <h1><Link to = '/'> {this.props.title} </Link></h1>
                {this.props.sub}
            </header>
        );
    }
}

export default Title;