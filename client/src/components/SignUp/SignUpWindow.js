import React, { Component } from 'react';
import './SignUpWindow.css'

class SignUpWindow extends Component {
    // Setting the component's initial state
    state = {
        email: "",
        password: ""
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

        console.log('Email: ' + email + 'Password: ' + password)

        this.setState({
            email: "",
            password: ""
        });
    };

    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div className="register-form-div">
                <form className="login-form">
                    <div className="login-form-holder">
                        <h1 className="email-text">Email</h1>
                        <input
                            value={this.state.email}
                            name="email"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Email"
                        />

                        <br />

                        <h1 className="email-text">Password</h1>
                        <input
                            value={this.state.password}
                            name="password"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Password"
                        />

                        <br />
                        <br />

                        <div className="submit-btn-div">
                            <button className="submit-btn" onClick={this.handleFormSubmit}>Submit</button>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpWindow;