import React, { Component } from 'react'
import './index.css'
import LoginInput from '../login-input'

export default class Header extends Component {
    
    constructor(props)
    {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        if(email === "admin@admin.com" && password === "admin123")
        {
            this.props.setIsLoggedIn(true);
        }
        else
        {
            alert('Username atau password salah');
        }
    }

    handleLogout = () => {
        this.props.setIsLoggedIn(false);
    }
    
    render() {
        const { isLoggedIn } = this.props;
        return (
            <div className="nav">
                <div className="container">
                    <h1 className="logo">facebook</h1>

                    {
                    isLoggedIn 
                        ? <button onClick={this.handleLogout}>Logout</button> 
                        : <form className="login-form" onSubmit={this.handleSubmit}>
                            <LoginInput label="Email or Phone" type="email" name="email" />
                            <LoginInput label="Password" type="password" showForgotten={true} name="password" />
                            <button type="submit">Log In</button>
                        </form>
                    }
                    
                </div>
            </div>   
        )
    }
}
