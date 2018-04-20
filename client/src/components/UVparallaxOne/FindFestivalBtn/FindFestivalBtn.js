import React from 'react';
import './FindFestivalBtn.css'

const FindFestivalBtn = (props) => {
    return (
        <div className="festival-btn-container">
            <button className="festival-btn" onClick={props.handleClick}>Find Festivals</button>
        </div>
    );
};

export default FindFestivalBtn;