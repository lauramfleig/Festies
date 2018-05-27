import React, { Component } from 'react';
import './HomeAnimation.css';
import Fade from 'react-reveal/Fade';
import halfone from './half1.png';
import halftwo from './half2.png';
import center from './center.png';
import Reveal from 'react-reveal/Reveal';

class HomeAnimation extends Component {
    render() {
        return (    
            <div className="animation1">
                <Fade left>
                <h1 className="xxx">Make Good Times</h1>
                <img className="triangle1" alt="one" src={halfone} />
                </Fade>

                <Fade right duration={1000}>
                <img className="triangle2" alt="two" src={halftwo} /> 
                <h1 className="yyy">EXTRAORDINARY</h1>
                </Fade>
            
               
                

            </div>

            
        );
    }
}

export default HomeAnimation;