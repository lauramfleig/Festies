import React, { Component } from 'react';
import './Who.css';
import Fade from 'react-reveal/Fade';
import picture1 from './girls.jpg'

class Who extends Component {
 
    render() {
        return (
            <Fade left>
            <div className="who">
                <img className="girls-hug" alt="girlhug" src={picture1} />
                <h1 className="who-text">Make Meaningful Matches</h1>
           
            </div>
            </Fade>
        );
    }
}

export default Who;