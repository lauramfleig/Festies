import React, { Component } from 'react';

import { Redirect } from 'react-router-dom'

import './LoginWindow.css';
// import Register from '../Register/Register.js'
import ReactDOM from 'react-dom';
import axios from 'axios';


class LoginWindow extends Component {
    // Setting the component's initial state
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            message: "",
            loggedIn: false
        };
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        let email = this.state.email
        let password = this.state.password
        sessionStorage.setItem('email', email);
        
        console.log('Email: ' + email + 'Password: ' + password);
        
        // Call to Festies API to Login via passort
        
        axios.post('/login', { 'email': email, 'password': password })
        .then((result) => {
                localStorage.setItem('jwtToken', result.data.token);
                this.setState({ message: '', loggedIn: true });
                ('/user_profile');
            })
            .catch((error) => {
                
                    this.setState({ message: 'Login failed. Username or password not match' });
                
            });

    };

    render() {

        if (this.state.loggedIn) {
            return (<Redirect to="/user-profile" />)
        }

        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div className="form-div">
                <form className="login-form">
                <div className="login-form-holder">
                    <h1 id="email-text">Email</h1>
                        <input
                            value={this.state.email}
                            name="email"
                            onChange={this.handleInputChange}
                            type="email"
                            placeholder="Email"
                            required
                        />

                    <br />

                        <h1 id="email-text">Password</h1>
                        <input
                            value={this.state.password}
                            name="password"
                            onChange={this.handleInputChange}
                            type="password"
                            placeholder="Password"
                            required
                        />

                    <br />
                    <br />

                        <div className="submit-btn-div">
                            <button id="submit-btn" onClick={this.handleFormSubmit}>Submit</button>
                        </div>

                        <div className="register-btn-div">
                            <button id="register-btn" onClick={this.props.renderSignUp}>SignUp</button>
                        </div>



                    </div>
                </form>
            </div>
        );
    }
}

export default LoginWindow;
