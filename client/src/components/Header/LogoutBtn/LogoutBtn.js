import React from 'react';
import './LogoutBtn.css'

const LogoutBtn = (props) => {
    return (
        <div className="logout-btn-container">
            <button className="logout-btn" onClick={props.handleClick}>Logout</button>
        </div>
    );
};

export default LogoutBtn;