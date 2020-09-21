import React, { Component } from 'react'

import './index.css'
import connecting from './connecting.png';

export default class Connection extends Component {
    render() {
        return (
            <div className="connection">
                <h3>Facebook helps you connect and share with the<br />people in your life</h3>
                <div className="img-connection">
                    <img src={connecting} alt="Connection" />
                </div>
            </div>
        )
    }
}
