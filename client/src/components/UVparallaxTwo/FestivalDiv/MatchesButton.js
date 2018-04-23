import React from 'react';
import './MatchesButton.css'

const MatchesButton = (props) => {
    return (
        <div className="matches-btn-container">
            <button className="matches-btn" onClick={props.handleClick}>Find Matches!</button>
        </div>
    );
};

export default MatchesButton;