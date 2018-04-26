import React, { Component } from 'react';
import './MatchHeader.css';
import festiesLogo from './festies-logo-1.png';
import LogoutBtn from '../Header/LogoutBtn/LogoutBtn.js'
import BackBtn from '../BackButton/BackButton.js'


const goBackPage = () => {
    window.history.go(-1)
}

const MatchHeader = () => {
        return (
            <div className="match-header">
                <BackBtn handleClick={() => goBackPage()} />
                <img className="logo" alt="logo" src={festiesLogo}/>
                <LogoutBtn />
                
            </div>
        );
}

export default MatchHeader;