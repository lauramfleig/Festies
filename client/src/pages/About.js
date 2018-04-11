import React, { Component } from 'react';
import LoginButton from '../components/Login/LoginButton';
import LoginWindow from '../components/Login/LoginWindow';




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