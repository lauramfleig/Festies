import React from 'react';

const LoginButton = (props) => {
    return (
        <div>
            <button className="login-btn" onClick={props.handleClick}>Login</button>
        </div>
    );
};

export default LoginButton;