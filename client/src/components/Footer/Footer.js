import React, { Component } from 'react';
import SongkickLogo from './powered-by-songkick-pink.png';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer-holder">
                <a href="https://www.songkick.com/" target="blank">
                    <img className="logo-for-footer" alt="logo" src={SongkickLogo} />
                </a>
            </div>
        );
    }
}

export default Footer;