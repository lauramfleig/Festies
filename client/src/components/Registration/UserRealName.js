import React from 'react';
import ErrorModal from './ErrorModal';
import './Registration.css';

class UserRealName extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    showModal = () => {
        this.setState({
            showModal: true
        })
        console.log('show modal working');
    }

    hideModal = () => {
        this.setState({
            showModal: false
        })
        console.log('hide modal working');
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        if (this.validateForm()) {
            this.props.CreateUserName(this.state.value);
            this.props.nextStep();
        } else {
            this.showModal();
        }     
    }

    validateForm = () => {
        const UserNameRegex = /^.{3,}$/;
        return (UserNameRegex.test(this.state.value));
    } 

    render() {
        const Modal = (this.state.showModal) ?
            <ErrorModal
                hideModal={this.hideModal}
                message={'Please Enter at Least 3 Characters'}
            />
            : null 

        return (
            <div className="UserRealNameForm">
                <form onSubmit={this.handleSubmit}>
                    <label className="RegFormLabel">
                        First Name:
              <br></br>
                    <input type="text" placeholder="At Least 3 Characters" value={this.state.value} 
                        onChange={this.handleChange} className="inputBox" required/>
                    </label>
                    <br></br>
                    <input type="submit" value="Submit" className="regSubmitButton"/>
                </form>
                {Modal}
            </div>
        );
    }
}

export default UserRealName;