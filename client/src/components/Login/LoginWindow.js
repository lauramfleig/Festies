import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class LoginWindow extends Component {
    // Setting the component's initial state
    state = {
        email: "",
        password: "",
        message: ""
    };

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

        console.log('Email: ' + email + 'Password: ' + password);

        // Call to Festies API to Login via passort

        /* axios.post('/api/auth/login', { email, password })
            .then((result) => {
                localStorage.setItem('jwtToken', result.data.token);
                this.setState({ message: '' });
                this.props.history.push('/');
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    this.setState({ message: 'Login failed. Username or password not match' });
                }
            }); */
        

        this.setState({
           email: "",
           passowrd: ""
        });
    };

    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div>
                <form className="login-form">
                    <input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Email"
                    />
                    <input
                        value={this.state.password}
                        name="password"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Password"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default LoginWindow;
