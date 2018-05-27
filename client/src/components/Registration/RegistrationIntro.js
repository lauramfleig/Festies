import React, { Component } from 'react';
import './Registration2.css';

class RegistrationIntro extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    nextStep = () => {
        this.setState({
            step: this.state.step + 1,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.nextStep();
    }

    render() {
        return (
            <div className='RegistrationFormQuestion'> 
               <h3>Welcome New Festie!</h3>
               <h4>Let's Build Your Profile</h4>
                <button className='RegNextButton' onClick={this.handleSubmit}>
                    <i className="fas fa-chevron-circle-right"></i>
                </button>
            </div>
        );
    }
}

export default RegistrationIntro;

