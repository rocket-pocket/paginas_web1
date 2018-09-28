import React, { Component } from 'react';
import './footer.css';

export class Footer extends Component {

    constructor (props) {
        super()
    }

    render() {
        return (
            <footer>
                <address>
                    <p>{this.props.autor} - {this.props.empresa}</p>
                    <p>{this.props.lugar}</p>
                </address>
            </footer>
        )
    }

}
