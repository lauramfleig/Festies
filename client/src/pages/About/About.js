import React, { Component } from 'react';
import LoginButton from '../../components/Login/LoginButton';
import LoginWindow from '../../components/Login/LoginWindow';
import './About.css'
import Logo from '../../components/Logo/Logo.js';
import StepButtons from '../../components/Step-Buttons/Step-Buttons.js';
import SignUpWindow from '../../components/SignUp/SignUpWindow.js';
import Footer from '../../components/Footer';
import {withRouter} from 'react-router-dom';


class About extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showSignUp: false,
            showLogin: false
        }
    }
    renderLogin = () => {
        console.log("show modal");
        this.setState({
            showLogin: true
        });
    }

    renderSignUp = () => {
        this.setState ({
            showLogin: false,
            showSignUp: true
        })
    }

// turnary
// var eval = (condition) ? ifTrue : ifFalse
    render() {
        const LoginModal = this.state.showLogin
            ? <LoginWindow renderSignUp={this.renderSignUp}/>
            : null
                
        const SignUpModal = this.state.showSignUp 
            ? <SignUpWindow />
            : null

        return (
            <div className="entire-container">

                <div className="parallax-container">

                    <div className="parallax one">
                        <h1 className="slogan">Find Your</h1>
                            <Logo />
                        <h1 className="slogan-2">Party People</h1>
                    </div>

                    <div className="divider top"></div>

                    <div className="parallax two">
                            <div className="parallax-two-content header">
                            </div>
                            <div className="info-grid-container">
                                <div className="info-div one">
                                    <h1 className="footer-text">Upcoming Festival?</h1>
                                    {/* <h1 className="three-dots">...</h1> */}
                                </div>
                                <div className="info-div two">
                                <StepButtons />
                            </div>
                                <div className="info-div three">
                                    <h1 className="header-text">Don't Go Alone!</h1>
                                    {/* <h1 className="three-dots">...</h1> */}
                                </div>
                            </div>
                            <div className="parallax-two-content footer">
                            </div>
                    </div>

                    <div className="divider bottom"></div>

                    <div className="parallax three">
                        <h1 className="parallax-three-header">Find Your Festies!</h1>
                        <div className="login-container">
                            <LoginButton handleClick={() => this.renderLogin()} />
                            {LoginModal}
                            {SignUpModal}
                        </div>
                        <Footer />
                    </div> 
                </div>    
            </div>
        );
    }
}

/* About.propTypes = {

}; */

export default withRouter(About);