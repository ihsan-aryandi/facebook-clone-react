import React, { Component } from 'react'

import './index.css'

import Connection from '../connection'
import SignUp from '../sign-up'

export default class Main extends Component {
    render() {
        return (
            <main>
                <div className="container">
                    <Connection />
                    <SignUp />
                </div>
            </main>
        )
    }
}
