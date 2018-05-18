import React, { Component } from 'react';
import './Jumbotron.css';
import logo from './new-logo.png';
import HomeAnimation from '../HomeAnimation/HomeAnimation';
import Animation2 from '../Animation2/Animation2.js';

class Jumbotron extends Component {


    render() {
        return (
            <div className="jumbotron">
                <div className="new-logo-holder">
                    <img className="new-logo" alt="nlogo" src={logo} />
                </div>
                <HomeAnimation />
                
            </div>
        );
    }
}

export default Jumbotron;