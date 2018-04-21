import React from 'react';
import ErrorModal from './ErrorModal';
import './Registration.css';

class UserName extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
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
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      if (this.validateForm()) {
        this.props.CreateUserScreenName(this.state.value);
        this.props.nextStep();
      } else {
        this.showModal();
      }
    }

    handlePrevious = () => {
      this.props.previousStep();
    }

    validateForm = () => {
      const UserNameRegex = /^.{6,}$/;
      return (UserNameRegex.test(this.state.value));
    } 
  
    render() {
      const Modal = (this.state.showModal) ?
        <ErrorModal
          hideModal={this.hideModal}
          message={'Please Enter at Least 6 Characters'}
        />
        : null 

      return (
        <div className="UserNameForm">
          <form onSubmit={this.handleSubmit}>
            <label className="labelForm">
              User Screen Name:
              <br></br>
              <input type="text" placeholder="At Least 6 Characters" value={this.state.value} onChange={this.handleChange} className="inputBox" required/>
            </label>
            <br></br>
            <input type="submit" value="Submit" className="submitButton" />
            {(this.props.previousStep) ?
              <button onClick={this.handlePrevious} value="Previous">Previous</button>
              :
              null}
          </form>
          {Modal}
        </div>
      );
    }
  }

export default UserName;