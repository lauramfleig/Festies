import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import './Animation2.css';
import textone from './text1.png';
import texttwo from './text2.png';

class Animation2 extends Component {
    render() {
        return (
            <div className="animation2">
                <div className="text-one-holder">
                    <img className="text-one" alt="tone" src={textone} />
                </div>
                <div className="text-two-holder">
                    <imc className="text-two" alt="ttwo" src={texttwo} />
                </div>
            </div>
        );
    }
}

export default Animation2;