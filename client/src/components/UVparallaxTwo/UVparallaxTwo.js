import React, { Component } from 'react';
import './UVparallaxTwo.css';
import FestivalDiv from './FestivalDiv/FestivalDiv.js';
import Footer from '../Footer';

class UVparallaxTwo extends Component {
    render() {
        return (
            <div className="uv-parallax-two">
                <FestivalDiv />
                <Footer />
            </div>
        );
    }
}

export default UVparallaxTwo;