import React, { Component } from 'react';
import './Jumbotron.css';
import logo from './new-logo.png';
import HomeAnimation from '../HomeAnimation/HomeAnimation';
import SearchFestival from '../SearchFestival/SearchFestival.js'

class Jumbotron extends Component {


    render() {
        return (
            <div className="jumbotron">
                <SearchFestival />
                <div className="new-logo-holder">
                    <img className="new-logo" alt="nlogo" src={logo} />
                </div>
                <HomeAnimation />
                
            </div>
        );
    }
}

export default Jumbotron;