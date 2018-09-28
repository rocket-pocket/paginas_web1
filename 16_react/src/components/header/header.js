import React, { Component } from 'react';
import './header.css';

export class Header extends Component {

    constructor (props) {
        super()
    }

    render() {
        return (
            <header>
                <h1 className="title">{this.props.title}</h1>
            </header>
        )
    }

}
