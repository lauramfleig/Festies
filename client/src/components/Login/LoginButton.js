import React from 'react';
import './LoginButton.css'

const LoginButton = (props) => {
    return (
        <div className="login-btn-container">
            <button className="login-btn" onClick={props.handleClick}>Login</button>
        </div>
    );
};

export default LoginButton;