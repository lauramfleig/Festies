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
            <div class="entire-container">

                <div>
                    <div className="nav">
                        <Logo />
                    </div>
                    <div className="parallax one">
                    </div>
                    <div className="content"></div>
                    <div className="parallax two"></div>
                    <div className="content"></div>
                    <div className="parallax three"></div>
                </div>
        
                <div>
                    <LoginButton handleClick={() => this.renderLogin} />

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