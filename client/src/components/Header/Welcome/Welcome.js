import React from 'react';
import './Welcome.css'

const Welcome = (props) => {
    
        return (
            <div className="welcome">
                <h1 className="user-name">Welcome {props.userName}</h1>  
                <img className="user-picture" alt="user-pic" src={props.image} />
            </div>
        );
    
}

export default Welcome;