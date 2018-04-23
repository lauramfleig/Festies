import React from 'react';
import './FindFestivalBtn.css';



const FindFestivalBtn = (props) => {
    return (
        <div className="festival-btn-container">
            <a href="/survey"><button className="festival-btn">Find Festivals</button></a>
        </div>
    );
};

export default FindFestivalBtn;