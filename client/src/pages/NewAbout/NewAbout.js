import React, { Component } from 'react';
import './NewAbout.css';
import Jumbotron from '../../components/Jumbotron/Jumbotron.js';
import Why from '../../components/Why/Why.js';
import Who from '../../components/Who/Who.js';

class NewAbout extends Component {
    render() {
        return (
            <div className="wrapper">
                <Jumbotron />
                <Why />
                <Who />
            </div>
        );
    }
}

export default NewAbout;