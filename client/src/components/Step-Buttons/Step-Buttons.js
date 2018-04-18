import React from 'react';

import buttonOne from './BUILD.png';
import buttonTwo from './SEARCH.png';
import buttonThree from './CREATE.png';
import './Step-Buttons.css';


const StepButtons = () => {
    return (
        <div className="button-holder">
            <img className="button button-one" alt="but-one" src={buttonOne} />
            <img className="button button-two" alt="but-two" src={buttonTwo} />
            <img className="button button-three" alt="but-three" src={buttonThree} />
        </div>
    );
}

export default StepButtons;