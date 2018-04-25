import React, { Component } from 'react';
import { Route, Redirect } from 'react-router'
import './UVparallaxTwo.css';
import FestivalDiv from './FestivalDiv/FestivalDiv.js';

import Footer from '../Footer';


class UVparallaxTwo extends Component {

   
    render() {
        if (localStorage.getItem('jwtToken')) {
        return (
            <div className="uv-parallax-two">
                <FestivalDiv />
                <Footer />
            </div>
        );
        } else {
            return (<Redirect to={"/"} />);
        }
    }
}

export default UVparallaxTwo;