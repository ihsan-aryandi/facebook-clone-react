import React, { Component } from 'react'

import './index.css'

export default class LoginInput extends Component {
    constructor(props)
    {
        super(props);
    }
    
    render() {
        const forgottenAccount = this.props.showForgotten ? <a href="#">Forgotten account?</a> : '';
        return (
            <div className="input">
                <label htmlFor={this.props.label}>{this.props.label}</label>
                <input type={this.props.type} id={this.props.label} name={this.props.name} />
                {forgottenAccount}
            </div>
        )
    }
}
