import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import './UVparallaxTwo.css';
import FestivalDiv from './FestivalDiv/FestivalDiv.js';
import Footer from '../Footer';
import UserViewMatches from './UserViewMatches/UserViewMatches.js';


class UVparallaxTwo extends Component {

   
    render() {
        if (localStorage.getItem('jwtToken')) {
        return (
            <div className="uv-parallax-two">
                <FestivalDiv />
                <UserViewMatches />
                <Footer />
            </div>
        );
        } else {
            return (<Redirect to={"/"} />);
        }
    }
}

export default UVparallaxTwo;