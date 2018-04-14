import React, { Component } from 'react';
import LoginButton from '../../components/Login/LoginButton';
import LoginWindow from '../../components/Login/LoginWindow';
import './About.css'
import Logo from '../../components/Logo/Logo.js';

class About extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showLogin: false
        }
    }
    renderLogin = () => {
        console.log("show modal");
        this.setState({
            showLogin: true
        });
    }

// turnary
// var eval = (condition) ? ifTrue : ifFalse
    render() {
        const modal = this.state.showLogin ? (
                    <LoginWindow />
                ) : (
                 null
                )

        return (
            <div className="entire-container">

                <div>
                    <div className="nav">
                        <Logo />
                    </div>
                    <div className="parallax one">
                        <h1 className="slogan">Find Your</h1>
                        <h1 className="slogan-2">Party People</h1>
                    </div>
                    <div className="content top"></div>
                    <div className="parallax two">
                        <div className="info-div">
                        blah blah
                        </div>
                    </div>
                    <div className="content bottom"></div>
                    <div className="parallax three"></div>
                </div>
        
                <div>
                    <LoginButton handleClick={() => this.renderLogin()} />

                    { modal }
            {/* <Banner />
            <TopInfo />
            <BottomInfo />
            <Login /> */}

                
                </div>
            </div>
        );
    }
}

/* About.propTypes = {

}; */

export default About;