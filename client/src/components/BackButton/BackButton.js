import React from 'react';
import './BackButton.css'

const BackButton = (props) => {
    return (
        <div className="back-btn-container">
            <button className="back-btn" onClick={props.handleClick}><i class="fa fa-arrow-circle-left"></i></button>
        </div>
    );
};

export default BackButton;