import React, { Component } from 'react';
import Logo from '../components/Logo';
import LoginButton from '../components/Login/LoginButton'
import LoginWindow from '../components/Login/LoginWindow'

/* import Banner from '../components/Banner';
import TopInfo from '../components/TopInfo';
import BottomInfo from '../components/BottomIngo';
import Login from '../components/Login'; */
/* import PropTypes from 'prop-types'; */

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
            <div className="about-container">
            <Logo />
            <LoginButton handleClick={() => this.renderLogin} />

            { modal }
            {/* <Banner />
            <TopInfo />
            <BottomInfo />
            <Login /> */}

                
            </div>
        );
    }
}

/* About.propTypes = {

}; */

export default About;