import React, { Component } from 'react'

import './index.css'

export default class SignUp extends Component {
    render() {
        return (
            <form className="signup">
                <h1>Create an account</h1>
                <h2>It's free and always will be.</h2>
                <div className="form-group">
                    <input className="form-input" type="text" placeholder="First Name" />
                    <input className="form-input" type="text" placeholder="Surname" />
                </div>
                <input className="form-input" type="text" placeholder="Mobile number or email address" />
                <input className="form-input" type="password" placeholder="New Password" />
                <div className="birthday">
                    <h3>Birthday</h3>
                    <div className="form-group">
                        <input className="form-input" type="number" value="18" />
                        <select className="form-input">
                            <option>Januari</option>
                            <option>Februari</option>
                            <option>Maret</option>
                            <option>April</option>
                            <option>Mei</option>
                            <option>Juni</option>
                            <option>Juli</option>
                            <option>Agustus</option>
                            <option>September</option>
                            <option>Oktober</option>
                            <option>November</option>
                            <option>Desember</option>
                        </select>
                        <select className="form-input">
                            <option>2000</option>
                            <option>2001</option>
                            <option>2002</option>
                        </select>
                        <a href="#">Why do i need to provide my date of birth ?</a>
                    </div>
                </div>
                <div className="gender">
                    <div className="radio">
                        <input type="radio" id="female" name="gender" />
                        <label htmlFor="female">Female</label>
                    </div>
                    <div className="radio">
                        <input type="radio" id="male" name="gender" />
                        <label htmlFor="male">Male</label>
                    </div>
                </div>
                <small>By clicking Sign Up, you agree to our <a href="#">Terms, Data Policy</a> and <a href="#">Cookie Policy</a>. You may receive SMS notifications from us and opt out at any time.</small>
                <button>Sign Up</button>
            </form>
        )
    }
}
